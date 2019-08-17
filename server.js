

require('isomorphic-fetch');
const dotenv = require('dotenv');
const Koa = require('koa');
const next = require('next');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');
const axios = require('axios')

const Router = require('koa-router');
const router = new Router();

const marquee_content = require("./marquee-content.js").content

dotenv.config();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY} = process.env;

app.prepare().then(() => {
  const server = new Koa();
  server.use(session(server));
  server.keys = [SHOPIFY_API_SECRET_KEY];

  //Auth for app
  server.use(
    createShopifyAuth({
      apiKey: SHOPIFY_API_KEY,
      secret: SHOPIFY_API_SECRET_KEY,
      scopes: ['read_themes', 'write_themes'],
      afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;
          ctx.cookies.set('shopOrigin', shop, { httpOnly: false });
          ctx.cookies.set('accessToken', accessToken );
        ctx.redirect('/');
      },
    }),
  );

  server.use(verifyRequest());

  //PUT route for creating liquid file
  router.put('/api/:object', async (ctx) => {
    const body = JSON.stringify({ asset: {key: "sections/marquee3.liquid", value: marquee_content} })
    try {
      const results = await fetch("https://" + ctx.cookies.get('shopOrigin') + "/admin/api/2019-07/themes/" + ctx.params.object + "/assets.json", {
        method: 'PUT',
        body: body,
        headers: {
          "X-Shopify-Access-Token": ctx.cookies.get('accessToken'),
          'Content-Type': 'application/json',
        },
      })
      .then(response => response.json())
      .then(json => {
        return json;
      });
      ctx.body = {
        status: 'success',
        data: results
      };
    } catch (err) {
      console.log(err)
    }
  })

  server.use(router.routes());
  server.use(router.allowedMethods());

  server.use(async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
    return
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});

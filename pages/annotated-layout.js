import {
  Button,
  Card,
  Form,
  FormLayout,
  Layout,
  Page,
  SettingToggle,
  Stack,
  TextField,
  TextStyle,
} from '@shopify/polaris';

import axios from 'axios'

class AnnotatedLayout extends React.Component {
  state = {
    discount: '10%',
    enabled: false,
  };

  render() {
    const { discount, enabled } = this.state;
    const contentStatus = enabled ? 'Disable' : 'Enable';
    const textStatus = enabled ? 'enabled' : 'disabled';

    return (
      <Page>
        <Layout>
          <Layout.AnnotatedSection
            title="Default discount"
            description="Add a product to Sample App, it will automatically be discounted."
          >
            <Card sectioned>
              <Form onSubmit={this.handleSubmit}>
                <FormLayout>
                  <TextField
                    value={discount}
                    onChange={this.handleChange('discount')}
                    label="Discount percentage"
                    type="discount"
                  />
                  <Stack distribution="trailing">
                    <Button primary submit>
                      Save
                    </Button>
                  </Stack>
                </FormLayout>
              </Form>
            </Card>
          </Layout.AnnotatedSection>
          <Layout.AnnotatedSection
              title="Price updates"
              description="Temporarily disable all Sample App price updates"
            >
              <SettingToggle
                action={{
                  content: contentStatus,
                  onAction: this.handleToggle,
                }}
                enabled={enabled}
              >
                This setting is{' '}
                <TextStyle variation="strong">{textStatus}</TextStyle>.
              </SettingToggle>
          </Layout.AnnotatedSection>
        </Layout>
      </Page>
    );
  }
  //Access-Control-Allow-Origin:  http://127.0.0.1:3000
// Access-Control-Allow-Methods: POST
// Access-Control-Allow-Headers: Content-Type, Authorization

    // handleSubmit = async () => {
    //   const response = await fetch('https://bismuth-dev.myshopify.com/admin/api/2019-07/themes/75057168493/assets.json', {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': 'PUT', 'Access-Control-Allow-Origin':  'https://30e2e004.ngrok.io', 'Access-Control-Allow-Headers': ['Content-Type', 'Authorization'] },
    //     body: JSON.stringify({ asset: {key: "templates/index.liquid", value: "test"} })
    //   })
    // };

    handleSubmit = async () => {
      var session_url = 'https://bismuth-dev.myshopify.com/admin/api/2019-07/themes/75057168493/assets.json';
      var username = '35f5151b48c7fb8fb8c9fe4185fb7c25';
      var password = '122b9134735957626720501cf4755623';
      var basicAuth = 'Basic ' + btoa(username + ':' + password);
      var body = { asset: {key: "sections/marquee3.liquid", value: "<div>MARQUEE SHIT 3</div>"} }
      axios({
        method: 'put',
        url: session_url,
        auth: { username: username, password: password },
        data: body,
        headers: { 'Authorization': + basicAuth }
      }).then(function(response) {
        console.log('Authenticated');
        console.log(response)
      }).catch(function(error) {
        console.log('Error on Authentication');
      });
      //
      // const response = await fetch('https://bismuth-dev.myshopify.com/admin/api/2019-07/themes/75057168493/assets.json', {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': 'PUT', 'Access-Control-Allow-Origin':  'https://30e2e004.ngrok.io', 'Access-Control-Allow-Headers': ['Content-Type', 'Authorization'] },
      //   body: JSON.stringify({ asset: {key: "templates/index.liquid", value: "test"} })
      // })
    };

    handleChange = (field) => {
      return (value) => this.setState({ [field]: value });
    };

    handleToggle = () => {
      this.setState(({ enabled }) => {
        return { enabled: !enabled };
      });
    };
  }

export default AnnotatedLayout;

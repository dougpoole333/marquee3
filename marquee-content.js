const marquee_content = `
<!-- Section: marquee.liquid -->

{% if section.settings.marquee_url != blank %}
  <a href={{section.settings.marquee_url}}>
{% endif %}
  {% assign section_settings = section.settings %}
  {% assign section_id = section.id %}
  <div
    id='marquee-{{ section_id }}'
    class="marquee-wrapper {{section.settings.add_class}}"
    style={% if section_settings.contain == 'true' %}"width: 100%; overflow: hidden" {%else%} "width: 100vw;"{%endif%}
    data-marquee-settings='{{ section.settings | json }}'>

      <div id='section-{{section_id}}' data-speed="{{section.settings.marquee_speed}}" class="marquee-line bold font3" style="background:{{section.settings.marquee_color_bg}};color:{{section.settings.marquee_color_text}}; font-size: {{section.settings.marquee_font_size}}px;">
        <div
          class="marquee-a"
          style="animation-name: marquee1; animation-timing-function: linear; animation-iteration-count: infinite;">
            <div class="marquee-unit" style="margin: 0px {{section.settings.marquee_margin}}px;">
              {{ section.settings.marquee_copy }}
            </div>
        </div>
        <div
          class="marquee-b"
          style="animation-name: marquee2; animation-timing-function: linear; animation-iteration-count: infinite;">
            <div class="marquee-unit" style="margin: 0px {{section.settings.marquee_margin}}px;">
              {{ section.settings.marquee_copy }}
            </div>
        </div>
      </div>

  </div>

{% if section.settings.marquee_url != blank %}
  </a>
{% endif %}

<style>
  .marquee-wrapper{
  	position: relative;
    left: 0;
  }
.marquee-line {
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 14px;
  line-height: 80%;
  padding: 5px 0;
  width: 100%;
}

.marquee-a, .marquee-b {
  display: inline-block;
}

.marquee-unit {
  display: inline-block;
  margin: {{}}
}


/* ANIMATION */
@keyframes marquee1 {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}
@keyframes marquee2 {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-200%);
  }
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function(){
  if (!window.jQuery){
  	let script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js";
    document.getElementsByTagName('head')[0].appendChild(script);
  }
  populateMarquee = (marquee) => {
    $('#shopify-section-' + marquee.id).find(".marquee-line").each(function(){
      let marqueeA = $(this).find('.marquee-a');
      let marqueeB = $(this).find('.marquee-b');
      let repeatFactor = Math.ceil($(window).width()/marqueeA.find(".marquee-unit").width());
      let marqueeLength = marqueeA.children().length;

      addUnits = () => {
        for(let i = 0; i < repeatFactor - marqueeLength; i++){
          	$('#section-' + marquee.id + ' .marquee-a').find('.marquee-unit').first().clone().appendTo('#section-' + marquee.id + ' .marquee-a');
          	$('#section-' + marquee.id + ' .marquee-b').find('.marquee-unit').first().clone().appendTo('#section-' + marquee.id + ' .marquee-b');
        }
      }

      removeUnits = () =>{
        for (let i = 0; i < marqueeLength - repeatFactor; i++){
          marqueeA.find("div:last").remove();
          marqueeB.find("div:last").remove();
        }
      }
      //add or subtract instances of the marquee unit according to the width of the screen
      marqueeLength < repeatFactor ? addUnits() : removeUnits()
    })
  }
  setAnimationDuration = (marquee) => {
    $('#shopify-section-' + marquee.id).find(".marquee-line").each(function(){
      let marqueeSpeed = 1 / $(this).attr("data-speed")
      let windowWidth = $(window).width();
      let animationDuration = marqueeSpeed * windowWidth / 3
      $(this).find(".marquee-a").css({"animation-duration": animationDuration+'s', "animation-delay": '-' + animationDuration/2 + 's'})
      $(this).find(".marquee-b").css("animation-duration", animationDuration + 's')
    })
  }
  initMarquee = () => {
      let id = {{section_id}}
      let target = $('#marquee-' + id)
      let marquee = {id: id, settings: target.data("marquee-settings")}
      setAnimationDuration(marquee);
      populateMarquee(marquee);
  }
  //init marquees
  initMarquee()
  //re-init marquees on window resize
  $(window).resize(function(){
    initMarquee();
  })
})
</script>

{% schema %}
  {
    "name": "Marquee",
    "settings": [
	  {
        "type": "textarea",
        "id": "marquee_copy",
        "label": "Text to Display",
        "default": "Hello World"
      },
      {
        "type": "text",
        "id": "add_class",
        "label": "Add Class to Marquee Wrapper"
      },
      {
        "type": "url",
        "id": "marquee_url",
        "label": "Include a Link"
      },
      {
        "type": "radio",
        "id": "contain",
        "label": "Full Width or Contained",
		"options": [
           { "value": "true", "label": "Contained" },
           { "value": "false", "label": "Full Width" }
         ],
   		"default":   "true"
      },
      {
        "type": "range",
        "id": "marquee_speed",
        "label": "Speed",
        "min": 4,
        "max": 30,
        "step": 2,
        "default": 8
      },
      {
        "type": "range",
        "id": "marquee_font_size",
        "label": "Font Size",
        "min": 6,
        "max": 60,
        "step": 2,
        "default": 20
      },
      {
        "type": "range",
        "id": "marquee_margin",
        "label": "Margin",
        "min": 0,
        "max": 60,
        "step": 2,
        "default": 20
      },
      {
        "type": "color",
        "id": "marquee_color_text",
        "label": "Text Color"
      },
      {
        "type": "color",
        "id": "marquee_color_bg",
        "label": "Background Color"
      }
    ],
    "presets": [
      {
        "name": "Marquee",
        "category": "Marquee"
      }
    ]
  }
{% endschema %}
`
module.exports.content = marquee_content;

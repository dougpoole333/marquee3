const marquee_content = `

<!-- Section: marquee.liquid -->

{% if section.settings.marquee_url != blank %}
  <a href={{section.settings.marquee_url}}>
{% endif %}
  {% assign section_settings = section.settings %}
  {% assign section_id = section.id %}
  {% assign section_blocks = section.blocks %}
  <div
    class="marquee-wrapper gutter {{section.settings.add_class}}"
    style="width: 100vw;"
    data-marquee-id='{{ section_id }}'
    data-marquee-settings='{{ section.settings | json }}'>

    {% for block in section_blocks %}
      <div id='section-{{section_id}}--block-{{forloop.index}}' data-block-speed="{{block.settings.marquee_speed}}" class="marquee-line marquee-{{forloop.index}}-content bold font3" style="background:{{block.settings.marquee_color_bg}};color:{{block.settings.marquee_color_text}}; font-size: {{block.settings.marquee_font_size}}px;">
        <div
          class="marquee-a"
          style="animation-name: marquee1; animation-timing-function: linear; animation-iteration-count: infinite;">
            <div class="marquee-unit" style="margin: 0px {{section.settings.marquee_font_size | divided_by: 2}}px;">
              {{ section.settings.marquee_copy }}
            </div>
        </div>
        <div
          class="marquee-b"
          style="animation-name: marquee2; animation-timing-function: linear; animation-iteration-count: infinite;">
            <div class="marquee-unit" style="margin: 0px {{section.settings.marquee_font_size | divided_by: 2}}px;">
              {{ section.settings.marquee_copy }}
            </div>
        </div>
      </div>
    {% endfor %}
  </div>

{% if section.settings.marquee_url != blank %}
  </a>
{% endif %}

<style>
  .marquee-wrapper{
  	position: absolute;
    left: 0;
    width: 100vw;
  }
.marquee-line {
  overflow: hidden;
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
  overflow: hidden;
}

.marquee-unit {
  display: inline-block;
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
//array, populated by each instance of the marquee section
let bismuth = {}
bismuth.marquees = []

populateMarqueesArray = () => {
  $(".marquee-wrapper").each(function(){
    let marquee = {}
    marquee.id = $(this).data("marquee-id")
    marquee.settings = $(this).data("marquee-settings")
    bismuth.marquees.push(marquee)
  })
}

populateMarquee = (marquee) => {
  $('#shopify-section-' + marquee.id).find(".marquee-line").each(function(){
    let marqueeA = $(this).find('.marquee-a');
    let marqueeB = $(this).find('.marquee-b');
    let repeatFactor = Math.ceil($(window).width()/marqueeA.find(".marquee-unit").width());
    console.log(repeatFactor)//times the marquee unit should repeat to fill the window width
    let marqueeLength = marqueeA.children().length;
    console.log(marqueeLength)//times the marquee unit currently repeats

    addUnits = () => {
      for(let i = 0; i < repeatFactor - marqueeLength; i++){
        marqueeA.find('.marquee-unit').first().clone().appendTo('#shopify-section-' + marquee.id + ' .marquee-a');
        marqueeB.find('.marquee-unit').first().clone().appendTo('#shopify-section-' + marquee.id + ' .marquee-b');
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
    let marqueeSpeed = 1 / $(this).attr("data-block-speed")
    let windowWidth = $(window).width();
    let animationDuration = marqueeSpeed * windowWidth / 3
    $(this).find(".marquee-a").css({"animation-duration": animationDuration+'s', "animation-delay": '-' + animationDuration/2 + 's'})
    $(this).find(".marquee-b").css("animation-duration", animationDuration + 's')
  })
}

initMarquees = () => {

  for (let i = 0; i < bismuth.marquees.length; i++){
    setAnimationDuration(bismuth.marquees[i]);
    populateMarquee(bismuth.marquees[i]);
  }
}

$(document).ready(function(){
  populateMarqueesArray();
  //init marquees
  initMarquees();
  //re-init marquees on window resize
  $(window).resize(function(){
    initMarquees();
  })
})
</script>

{% schema %}
  {
    "name": "Marquee",
    "settings": [
      {
        "type": "text",
        "id": "add_class",
        "label": "Add Class to Marquee Wrapper"
      },
      {
        "type": "textarea",
        "id": "marquee_copy",
        "label": "Text to Display",
        "default": "Hello World"
      },
      {
        "type": "url",
        "id": "marquee_url",
        "label": "Include a Link"
      }
    ],
    "blocks": [
        {
          "name": "Marquee Line",
          "type": "marquee_block",
          "settings": [
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
              "min": 12,
              "max": 38,
              "step": 2,
              "default": 14
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
          ]
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
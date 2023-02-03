<template>
  <section id="skills" class="relative">    
    <div class="flex flex-col justify-center container">
      <div class='skill-container grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8'> 
        <template v-for='item in skills' :key='item._id'> 
          <span class="image-container">
            <Skill :id= "item.id" class="item-top"/>
          </span>   
        </template>
      </div>
    </div>  
    <img
          class="skills-rings"
          src="pattern-rings.svg"
          alt=""
          width="530"
          height="129"
        />
  </section>
</template>

<script>
import Skill from './Skill.vue'
export default {
  name: 'Skills',
  components: { Skill },
  props: ['skills'],
  data() {
    return{
      title: "Skills",
      class: "skills-head-box"
    }
  }
}
</script>

<style>

.skills-rings {
  position: absolute;
  bottom: 0;
  left: 50%;
  translate: 0 50%;
}

@media (min-width: 37.5em) {

  .skills-rings {
    translate: 40% 50%;
  }
}

@media (min-width: 62.5em) {

  .skills-rings {
    translate: 30% 50%;
    left: 100%;
  }
}

</style>
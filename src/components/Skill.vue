<template>
	<span>
		<img v-if="image !== null" :src="fullImageUrl" class="item bg-white p-5 skill-item mx-auto" :key="id">
	</span>
</template>

<script>
export default {
  name: 'Skill',
  props: {
    id: Number  
  },
  data() {
    return{
      skillName: null,
      tag: null, 
      image: null 
    }
  },
  computed:{
    fullImageUrl: function(){
      return 'https://api.kennethmckenzie.co.uk/storage/app/public/site_images/'+this.image
    }
  },
  beforeCreate(){
    axios
      .get(`https://api.kennethmckenzie.co.uk/public/api/skills/ ${this.id}`)
      .then(response => {
        (this.skillName = response.data.skill_name),
        (this.tag = response.data.tag),
        (this.image = response.data.skill_image)  
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
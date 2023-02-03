<template>

<div class="content main">
		<a :href="url" class="company-item" target="_blank">
			<img v-if="image !== null" :src="fullImageUrl" />
		</a>
	</div>

</template>

<script>
export default {
  name: 'Company',
  props: {
    id: Number  
  },
  data() {
    return{
      companyName: null,
      image: null, 
      bio: null, 
      url: null,
    }
  },
  computed:{
    fullImageUrl: function(){
      return 'https://api.kennethmckenzie.co.uk//storage/app/public/site_images/'+this.image
    }
  },
  mounted(){
    axios
      .get(`https://api.kennethmckenzie.co.uk/public/api/companies/ ${this.id}`)
       .then(response => {
        (this.companyName = response.data.company_name),
        (this.url = response.data.company_url),
        (this.bio = response.data.company_bio),
        (this.image = response.data.company_logo)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

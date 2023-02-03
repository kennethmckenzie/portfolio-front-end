<template>

<section id="contact" class="contact bg-lighter relative">
        <div class="px-10 sm:px-20 xl:container mx-auto xl:px-40 pt-20 pb-5">
          <div class="flex flex-wrap">
            <div class="contact-text w-full md:w-1/2">
              <h2 class="header-title">Contact</h2>
              <p class="text-xl py-10 pr-10">
                If you have any queries, please don't hesitate to get in touch. Please fill in the form, and I'll get back to you as soon as
                possible.
              </p>
            </div>
            <div class="w-full md:w-1/2 pb-10">
              <Contactform />
            </div>
          </div>
          <hr class="border my-10">
        </div>

        <img
          class="contact-rings"
          src="pattern-rings.svg"
          alt=""
          width="530"
          height="129"
        />
 
       

	  <footer class="footer bg-less-dark">
      <div class="px-10 sm:px-20 xl:container mx-auto xl:px-40 pb-10">
        <div class="flex justify-between">
          <a href="/" class="brand primary-hover footer-brand"> kennethmckenzie </a>
          <div class="flex social-buttons mt-3">
            <a :href=fullEmail class="text-3xl">
              <i class="fas fa-at white icon primary-hover"></i>
            </a>
            <a target="_blank" :href='general.linkedin_url' class="text-3xl ml-10">
              <i class="fab fa-linkedin-in white icon primary-hover"></i>
            </a>
            <a target="_blank" :href=fullCV class="text-3xl ml-10">
              <i class="fas fa-file-alt white icon primary-hover"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>

	
</section>


</template>

<script>
import Contactform from './Contactform.vue'
export default {
  name: 'Contact',
  components: {
    Contactform
  },
  props: ['general'],
  data() {
    return{
      title: "CONTACT",
      class: "contact-head-box" 
    }
  },
  computed:{
    fullEmail: function(){
      return 'mailto:'+this.general.email_address;
    },
    fullCV: function(){
      return 'https://api.kennethmckenzie.co.uk//storage/app/public/site_images/'+this.general.cv;
    }
  }
}
</script>
<style>
.contact-rings {
  position: absolute;
  left: 0;
  bottom: 97px;
  translate: -75%;
}
@media (min-width: 37.5em) {
    .contact-rings {
      bottom: 47px;
      translate: -75%;
    }
  }

  @media (min-width: 62.5em) {
    .contact-rings {
      bottom: 200px;
      translate: -40%;
    }
}

@media screen and (max-width: 600px) {

.footer-brand{
  display: none !important;
}


}
</style>
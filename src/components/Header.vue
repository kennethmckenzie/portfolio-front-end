<template>
	<section id="home">
		<div class="flex justify-between py-10">
			<a href="/" class="brand primary-hover"> kennethmckenzie </a>
			<div class="flex social-buttons mt-1 header-social">
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
		<section class="py-24">
      <span>
              <img class="header-rings" src="pattern-rings.svg" alt="" width="530" height="129" />
            </span>
				<div class="flex">
          <div class="md:w-1/2">
           
            <div class="flex flex-col justify-center header-text">
              <div class="header-xl header-title">
                <span v-html="header.header_text"></span>
              </div>
              <p class="my-20 text-xl">
                <span v-html="header.sub_text"></span>
              </p>
              <span>
                <a href="#contact" class="underline">Contact me</a>
              </span>
            </div>
          </div>
          <div class="md:w-1/2">
					  <lottie-player v-pre class="header-img" src="dUNBE8Bu5g.json" background="transparent" speed="1" loop autoplay></lottie-player>
          </div>
				</div>
		</section>
		<hr class="border my-10">
	</section>
</template>

<script>
export default {
  name: 'Header',
  props: ['header', 'general'],
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

.brand{
  font-size: clamp(1.5rem, 1.02rem + 2.04vw, 2rem);
}

.header-img{
  margin-left: auto;
  margin-top: -100px;
}

.header-title{
  font-size: 6rem;
  letter-spacing: -0.028em;
  line-height: 1.1;
  font-weight: 600;
}

.header-rings {
  position: absolute;
  left: 0;
  bottom: 97px;
  translate: -75%;
}

.header-text{
  z-index: 2;
}

@media screen and (min-width: 37.5em) {

  .header-rings {
    bottom: 47px;
    translate: -75%;
  }

}

@media screen and (min-width: 62.5em) {

  .header-rings {
    top: 200px;
    translate: -60%;
  }

}



@media screen and (max-width: 767px) {

.header-img{
  display: none;
}

}

@media screen and (max-width: 1200px) {

.header-title {
  font-size: 4rem;
}

}

@media screen and (max-width: 600px) {

.header-social{
  display: none !important;
}

.header-title {
  font-size: 3rem;
}

}

@media screen and (max-width: 400px) {

.header-title {
  font-size: 2rem;
}

}

</style>
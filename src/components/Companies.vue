<template>
  <hr class="border my-10">
  <section class="my-24" id="companies">
        <div class="flex flex-wrap mb-14 justify-between">
            <h2 class="header-title">Experience</h2>
            <a href="#contact" class="mt-6 underline companies-btn">Contact me</a>
          </div>

            <p class="experience-text my-10 text-xl">
              Below are a few of the companies I have been fortunate enough to have worked with so far in my career 
            </p>

            <div class="timeline grid md:grid-cols-3 pb-8 mt-14">
              <template v-for='(item, index) in companies' :key='item._id'>
                <Company :id="item.id" />
			          <div v-if="index == 0" class="relative company-img"><img class="object-cover h-full w-full" src="/d4.webp" alt="Developer Icon"><div class="clear-overlay absolute h-full w-full"></div></div>
			          <div v-if="index == 1" class="relative company-img"><img class="object-cover h-full w-full" src="/d5.webp" alt="Developer Icon"><div class="clear-overlay absolute h-full w-full"></div></div>
			          <div v-if="index == 2" class="relative company-img"><img class="object-cover h-full w-full" src="/d3.webp" alt="Developer Icon"><div class="clear-overlay absolute h-full w-full"></div></div>
              </template>
            </div>
      </section>

</template>

<script>
import Company from './Company.vue'
export default {
  name: 'Companies',
  props: ['companies'],
  components: { Company},
  data() {
    return{
      title: "Experience",
      class: "companies-head-box" 
    }
  }
}
</script>

<style>

.clear-overlay{
  background: rgba(0,0,0,0.7);
  top: 0;
}

.company-item {
  position: relative;
  display: block;
  overflow: hidden;
}

.company-item img {
  width: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  z-index: -1;
  transition: 1.2s transform cubic-bezier(0.165, 0.84, 0.44, 1);
 /* filter: blur(8px);
  -webkit-filter: blur(8px); */
}

.company-item:hover img {
  transform: scale(1.2);
  transition: 1.2s transform cubic-bezier(0.165, 0.84, 0.44, 1);
}

@media screen and (max-width: 767px) {

.companies-btn{
  display: none !important;
}

.company-img{
  display: none !important;
}

}
</style>
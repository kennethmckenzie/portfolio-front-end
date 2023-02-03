<template> 
  <link :href=fullUrl rel="stylesheet" v-if="main !== null"> 
    <main class="main-content background-dark white main">  
      <section class="px-10 sm:px-20 xl:container mx-auto xl:px-40">
        <Header :header="headerData" :general="generalData"/>     
        <Skills :skills="skillsData"/> 
        <Companies :companies="companiesData"/>
      </section>
        <Contact :general="generalData"/>
    </main>
</template>

<script>
import Header from './components/Header.vue'
import Skills from './components/Skills.vue'
import Companies from './components/Companies.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    Header, Skills, Companies, Contact
  },
  props: ['general','header', 'companies', 'skills'],
  created(){
    var that = this
    axios.all([
      axios.get('https://api.kennethmckenzie.co.uk/public/api/general-settings'),
      axios.get('https://api.kennethmckenzie.co.uk/public/api/header-settings'),
      axios.get('https://api.kennethmckenzie.co.uk/public/api/skills'),
      axios.get('https://api.kennethmckenzie.co.uk/public/api/companies'),
    ])
    .then(
      axios.spread(
        function (general, header, skills, companies) {
          that.primary = general.data[0].primary_color;
          that.secondary = general.data[0].secondary_color;
          that.third = general.data[0].third_color;
          that.main = general.data[0].main_font;
          that.second = general.data[0].secondary_font;
          that.generalData = general.data[0];
          that.headerData = header.data[0];
          that.skillsData = skills.data;
          that.companiesData = companies.data;
         
        },
    ))
    .catch(error => console.log(error))
  },
  data(){
    return{
      generalData:  { type: Object, default: () => ({}) },
      headerData: { type: Object, default: () => ({}) },
      companiesData: null,
      skillsData: null,
      primary: null,
      secondary: null, 
      third: null, 
      main: null, 
      second: null,
    }
  },
  computed:{
    fullUrl: function(){
      return 'https://fonts.googleapis.com/css2?family='+this.main+'&family='+this.second
    }
  }
}

</script>
<style>

html,
body {
  overflow-x: hidden;
  background-color: v-bind(primary);
}

html {
  scroll-behavior: smooth;
}

a {
  transition: color 250ms ease-in-out;
}

a:focus-visible,
input:focus-visible,
textarea:focus-visible {
  outline: 2px dashed  v-bind(primary);
  outline-offset: 2px;
}

input:invalid,
textarea:invalid {
  outline-color:  v-bind(primary);
}

a.underline,
button {
  display: inline-block;
  padding-bottom: 0.625rem;
  font-size: 1rem;
  line-height: 1.625;
  letter-spacing: 0.143em;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  background-image: linear-gradient(
    to right,
    v-bind(primary) 75%,
    v-bind(primary) 75%
  );
  background-position: 0 2.1em;
  background-repeat: repeat-x;
  background-size: 8px 2px;
}

a:hover {
  color:  v-bind(primary);
}

.submit-btn{
    display: inline-block;
    padding-bottom: 0.625rem;
    font-size: 1rem;
    line-height: 1.625;
    letter-spacing: 0.143em;
    font-weight: 700;
    text-transform: uppercase;
    color: white;
    text-decoration: none;
    background-image: linear-gradient( to right, var(--7ba5bd90-primary) 75%, var(--7ba5bd90-primary) 75% );
    background-position: 0 2.1em;
    background-repeat: repeat-x;
    background-size: 8px 2px;
}

.submit-btn:hover {
  color:  v-bind(primary);
}

.skill-item{
  border: 2px solid v-bind(primary);
}

.background-dark{
  background-color: v-bind(secondary);
}

.bg-lighter {
  background-color: v-bind(third);
}

.primary-color{
  color: v-bind(primary);
}

.primary-hover:hover{
  color: v-bind(primary);
}

.secondary-color{
  color: v-bind(secondary);
}

.third-color{
  color: v-bind(third);
}

.main{
  font-family: v-bind(main);
}

.second{
  font-family: v-bind(second);
}

.item:hover{
  border-color: v-bind(primary);
}

.white{
  color: white;
}

.border{
  border-top: 1px solid white;
}

.accent {
  background-image: linear-gradient(
    to right,
    v-bind(primary) 75%,
    v-bind(primary) 75%
  );
  background-position: 0 1.18em;
  background-repeat: repeat-x;
  background-size: 8px 4px;
}

@media screen and (max-width: 400px) {

.text-xl {
  font-size: 1rem !important;
}

}

</style>

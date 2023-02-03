<template>
	<div id="sent" class="sent hidden py-20 primary-color">
		<h3 class="mt-5 text-3xl">Thank You!</h3>
		<h4 class="mt-5 text-2xl">Your message has been sent.</h4>
	</div>
	<form action="/action_page.php" @submit.prevent="submitForm()" class="form-container mt-4 contact-form" id="contact-form">
		<input class="w-full bg-gray-100 p-4  mt-5 border border-gray-300" type="text" placeholder="Enter Name" name="name" v-model="InputName" required>
		<input class="w-full bg-gray-100 p-4 mt-5 border border-gray-300" type="text" placeholder="Enter Email" name="email" v-model="InputEmail" required>
		<textarea class="w-full bg-gray-100 p-4  mt-5 border border-gray-300" type="textarea" placeholder="Enter Message" name="message" rows="6" v-model="InputText" required></textarea>
		<button type="submit" class="submit-btn mt-5">SEND MESSAGE</button>
	</form>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Contactform',
  data() {
    return {
      InputName: "",
      InputEmail: "",
      InputText: ""
    };
  },
  methods: {
    submitForm(){
      axios
      .post(`https://api.kennethmckenzie.co.uk/public/api/contact?name=${this.InputName}&email=${this.InputEmail}&message=${this.InputText}`)
      .then(response => {
        document.getElementById('contact-form').style.display = 'none';
        document.getElementById('sent').style.display = 'block';
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

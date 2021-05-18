<template>
  <div>
    <!-- Header -->
    <div class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-orange">
      <b-container>
        <div class="header-body text-center mb-7">
          <b-row class="justify-content-center">
            <b-col xl="5" lg="6" md="6" class="px-5">
              <h1 class="text-light">Set up your device!</h1>
              <router-link to="/dashboard" class="font-weight-bold text-white mt-5">Back to dashboard</router-link>
            </b-col>
          </b-row>
        </div>
      </b-container>


      <div align="center">
          <div class="col-md-6">
              <b-form-input v-model="deviceId" placeholder="Device Id"></b-form-input>
            <p></p>
          </div>
          <div class="col-md-6">
            <b-form-input v-model="name" placeholder="Name"></b-form-input>
            <p></p>
          </div>
            <div class="col-md-6">
                <b-form-input v-model="location" placeholder="Location"></b-form-input>
              <p></p>
            </div>
            <div class="col-md-6">
              <b-form-input v-model="maxDist" placeholder="Maximum Distance"></b-form-input>
              <p></p>
            </div>
            <div class="col-md-6">
                <b-form-input v-model="minDist" placeholder="Minimum Distance" ></b-form-input>
              <p></p>
            </div>
        <b-button type="submit">Submit</b-button>
      </div>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Device Setup",
  data(){
    return {
      deviceId: "",
      name: "",
      location: "",
      minDist: "",
      maxDist: ""
    }
  }
}
</script>

<style scoped>

</style>

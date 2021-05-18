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
        <b-form @submit="onSubmit" @reset="onReset">
          <div class="col-md-6">
              <b-form-input v-model="form.deviceId" placeholder="Device Id" required></b-form-input>
            <p></p>
          </div>
          <div class="col-md-6">
            <b-form-input v-model="form.name" placeholder="Name" required></b-form-input>
            <p></p>
          </div>
            <div class="col-md-6">
                <b-form-input v-model="form.location" placeholder="Location" required></b-form-input>
              <p></p>
            </div>
            <div class="col-md-6">
              <b-form-input v-model="form.maxDist" placeholder="Maximum Distance" required></b-form-input>
              <p></p>
            </div>
            <div class="col-md-6">
                <b-form-input v-model="form.minDist" placeholder="Minimum Distance" required></b-form-input>
              <p></p>
            </div>
          <b-button type="submit">Submit</b-button>
          <b-button type="reset">Reset</b-button>
        </b-form>
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
import cosmos from "../cosmos/cosmos";
export default {
  name: "DeviceSetup",
  data() {
    return {
      form: {
        deviceId: '',
        name: '',
        location: "",
        maxDist:"",
        minDist:""
      }
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      cosmos.createDevice(this.form)
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.deviceId = '';
      this.form.name = '';
      this.form.location = '';
      this.form.maxDist = '';
      this.form.minDist = '';
    }
  }
}
</script>

<style scoped>

</style>

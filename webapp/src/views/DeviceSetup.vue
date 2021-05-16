<template>
  <div>
    <!-- Header -->
    <div class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-orange">
      <b-container>
        <div class="header-body text-center mb-7">
          <b-row class="justify-content-center">
            <b-col xl="5" lg="6" md="6" class="px-5">
              <h1 class="text-light">Set up your device!</h1>
              <p class="text-lead text-white">Work hard and play every day!</p>

              <router-link to="/dashboard" class="font-weight-bold text-white mt-5">Back to dashboard</router-link>
            </b-col>
          </b-row>
        </div>
      </b-container>
      

      <div>
        <div class="row">
          <div class="col-md-6">
              <base-input placeholder="name@example.com"></base-input>
          </div>
          <div class="col-md-6">
            <base-input placeholder="Disabled" disabled></base-input>
          </div>
        </div>
         <div class="row">
            <div class="col-md-6">
                <base-input placeholder="Birthday" prepend-icon="ni ni-zoom-split-in"></base-input>
            </div>
            <div class="col-md-6">
              <base-input placeholder="Birthday" append-icon="ni ni-zoom-split-in"></base-input>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
                <base-input placeholder="Success" :valid="true"></base-input>
            </div>
            <div class="col-md-6">
              <base-input placeholder="Error input" error="Some error"></base-input>
            </div>
          </div>
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
  name: "aboutus"
}
</script>

<style scoped>

</style>

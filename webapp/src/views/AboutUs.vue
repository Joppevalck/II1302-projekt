<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-info py-7 py-lg-8 pt-lg-9">
      <b-container>
        <div class="header-body text-center mb-7">
          <b-row class="justify-content-center">
            <b-col xl="10" lg="6" md="6" class="px-5">
              <h1 class="text-light">We are the PangPangBois</h1>
              <p class="text-lead text-white">We are a group of students that has been given the opertunity to work together on a project. This project became this application. </p>
              <h2 class="text-light">The team</h2>
              <b-row class="justify-content-center">
                <b-col xl="4" lg="6" md="6" class="px-5" v-for="member in this.team" :key="member.name">
                  <h3 class="text-lead text-white">{{member.name}}</h3>
                  <h4 class="text-lead text-white">{{member.role}}, {{member.programme}}</h4>
                  <!-- <p>{{member.description}}</p> -->
                </b-col>
              </b-row>
              <router-link to="/dashboard" class="font-weight-bold text-white mt-5">Back to dashboard</router-link>
            </b-col>
          </b-row>
        </div>
      </b-container>
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
  name: "aboutus",
  data() {
      return {
        team: [{
            name: "Johannes Valck",
            programme: "TIDAB",
            role: "Project Leader",
            description: "Very handsome dud"
          },
          {
            name: "William Asp",
            programme: "TIDAB",
            role: "Architect",
            description: "Not very handsome dud"
          },
          {
            name: "Joakim Gustavsson",
            programme: "TIDAB",
            role: "Test Responsible",
            description: "Very inteligent dud"
          },
          {
            name: "Joar Edling",
            programme: "TIEDB",
            role: "Development Manager",
            description: "Very konglig dud"
          },
          {
            name: "Axel Ström",
            programme: "TIEDB",
            role: "Customer and Requirement Manager",
            description: "Very adult dud"
          }
        ]
      }
  }

}

</script>

<style scoped>

</style>

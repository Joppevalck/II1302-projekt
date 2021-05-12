<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
      <b-navbar-nav class="align-items-center ml-md-auto">
        <b-form class="navbar-search form-inline mr-sm-3"
                                       :class="{'navbar-search-dark': type === 'default', 'navbar-search-light': type === 'default'}"
                                       id="navbar-search-main">
          <b-form-group class="mb-0">
            <b-input-group class="input-group-alternative input-group-merge">
              <b-form-input placeholder="Search" type="text"> </b-form-input>

              <div class="input-group-append">
                <span class="input-group-text"><i class="fas fa-search"></i></span>
              </div>
            </b-input-group>
          </b-form-group>
        </b-form>
      </b-navbar-nav>
      <b-row>

        <b-col v-for="card in cards" :key=card.title xl="3" md="6">
          <stats-card :title="card.title"
                      :type="card.type"
                      :sub-title="card.subtitle"
                      :icon="card.icon"
                      :class="card.class">

            <template slot="footer">
              <BaseProgress :value="card.fullness"
                            label="Full"
                            :showLabel="! card.fullness > 80"
                            striped="true"
                            animated="true"
                            height="5"
                            :type="progressBarColor(card.fullness)"
                            />
              <span class="text-success mr-2">{{card.fullness}}%</span>
              <span class="text-nowrap">At {{new Date(Date.now()).toUTCString()}}</span>
            </template>
          </stats-card>
        </b-col>



        <!-- <b-col xl="3" md="6">
          <stats-card title="Total traffic"
                      type="gradient-red"
                      sub-title="350,897"
                      icon="ni ni-active-40"
                      class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2">3.48%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="Total traffic"
                      type="gradient-orange"
                      sub-title="2,356"
                      icon="ni ni-chart-pie-35"
                      class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2">12.18%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="Sales"
                      type="gradient-green"
                      sub-title="924"
                      icon="ni ni-money-coins"
                      class="mb-4">

            <template slot="footer">
              <span class="text-danger mr-2">5.72%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>

        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="Performance"
                      type="gradient-info"
                      sub-title="49,65%"
                      icon="ni ni-chart-bar-32"
                      class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2">54.8%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </b-col>


        <b-col xl="3" md="6">
          <stats-card title="Poopiface"
                      type="gradient-green"
                      sub-title="10000%"
                      icon="ni ni-chart-bar-32"
                      class="mb-4">

            <template slot="footer">
              <span class="text-success mr-2">10000000%</span>
              <span class="text-nowrap">Since last wednesday</span>
            </template>
          </stats-card>
        </b-col> -->
      </b-row>
    </base-header>

    <!--Charts-->
    <b-container fluid class="mt--7">
      <!-- <b-row>
        <b-col xl="8" class="mb-5 mb-xl-0">
          <card type="default" header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-light text-uppercase ls-1 mb-1">Overview</h6>
                <h5 class="h3 text-white mb-0">Sales value</h5>
              </b-col>
              <b-col>
                <b-nav class="nav-pills justify-content-end">
                  <b-nav-item
                       class="mr-2 mr-md-0"
                       :active="bigLineChart.activeIndex === 0"
                       link-classes="py-2 px-3"
                       @click.prevent="initBigChart(0)">
                      <span class="d-none d-md-block">Month</span>
                      <span class="d-md-none">M</span>
                  </b-nav-item>
                  <b-nav-item
                    link-classes="py-2 px-3"
                    :active="bigLineChart.activeIndex === 1"
                    @click.prevent="initBigChart(1)"
                  >
                    <span class="d-none d-md-block">Week</span>
                    <span class="d-md-none">W</span>
                  </b-nav-item>
                </b-nav>
              </b-col>
            </b-row>
            <line-chart
              :height="350"
              ref="bigChart"
              :chart-data="bigLineChart.chartData"
              :extra-options="bigLineChart.extraOptions"
            >
            </line-chart>
          </card>
        </b-col>

        <b-col xl="4" class="mb-5 mb-xl-0">
          <card header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-uppercase text-muted ls-1 mb-1">Performance</h6>
                <h5 class="h3 mb-0">Total orders</h5>
              </b-col>
            </b-row>

            <bar-chart
              :height="350"
              ref="barChart"
              :chart-data="redBarChart.chartData"
            >
            </bar-chart>
          </card>
        </b-col>
      </b-row> -->
      <!-- End charts-->

      <!--Tables-->
      <!-- <b-row class="mt-5">
        <b-col xl="8" class="mb-5 mb-xl-0">
          <page-visits-table></page-visits-table>
        </b-col>
        <b-col xl="4" class="mb-5 mb-xl-0">
          <social-traffic-table></social-traffic-table>
        </b-col>
      </b-row> -->
      <!--End tables-->
    </b-container>

  </div>
</template>
<script>
  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  import LineChart from '@/components/Charts/LineChart';
  import BarChart from '@/components/Charts/BarChart';

  // Components
  import BaseProgress from '@/components/BaseProgress';
  import StatsCard from '@/components/Cards/StatsCard';

  // Tables
  import SocialTrafficTable from './Dashboard/SocialTrafficTable';
  import PageVisitsTable from './Dashboard/PageVisitsTable';

  export default {
    components: {
      LineChart,
      BarChart,
      BaseProgress,
      StatsCard,
      PageVisitsTable,
      SocialTrafficTable
    },
    props: {
      type: {
        type: String,
        default: 'default', // default|light
        description: 'Look of the dashboard navbar. Default (Green) or light (gray)'
      }
    },
    data() {
      return {
        bigLineChart: {
          allData: [
            [0, 20, 10, 30, 15, 40, 20, 10],
            [0, 20, 5, 25, 10, 30, 15, 40]
          ],
          activeIndex: 0,
          chartData: {
            datasets: [
              {
                label: 'Performance',
                data: [0, 20, 10, 30, 15, 40, 20, 60, 60, 100, 90, 20, 34, 67],
              }
            ],
            labels: ['Bay', 'Jun', 'Jul', 'Aug', 'Pep', 'Oct', 'Nov', 'Dec'],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
        redBarChart: {
          chartData: {
            labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              label: 'Sales',
              data: [25, 20, 30, 22, 17, 5]
            }]
          },
          extraOptions: chartConfigs.blueChartOptions
        },

        cards: [
          {
            title: "Smartbin 1",
            type: "gradient-red",
            "subtitle": "350,897",
            icon:"ni ni-active-40",
            class:"mb-4",
            fullness: 3.48
          },
          {
            title: "Smartbin 2",
            type: "gradient-orange",
            "subtitle": "2,356",
            icon:"ni ni-chart-pie-35",
            class:"mb-4",
            fullness: 50
          },
          {
            title: "Smartbin 3",
            type: "gradient-orange",
            "subtitle": "2,356",
            icon:"ni ni-chart-pie-35",
            class:"mb-4",
            fullness: 63
          },
          {
            title: "Smartbin 4",
            type: "gradient-orange",
            "subtitle": "2,356",
            icon:"ni ni-chart-pie-35",
            class:"mb-4",
            fullness: 90.4
          },
          {
            title: "Smartbin 5",
            type: "gradient-green",
            "subtitle": "10000%",
            icon:"ni ni-chart-bar-32",
            class:"mb-4",
            fullness: 100
          }
        ]
      };
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: [
            {
              label: 'Performance',
              data: this.bigLineChart.allData[index]
            }
          ],
          labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        };
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      },

      progressBarColor(fullness) {
        return fullness < 60 && "success" || fullness < 80 && "warning" || "danger"
      }
    },
    mounted() {
      this.initBigChart(0);
    }
  };
</script>
<style>
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}
</style>

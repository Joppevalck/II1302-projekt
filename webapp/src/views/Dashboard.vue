<template>
  <div>

    <base-header class="pb-6 pb-8 pt-8 pt-md-6 bg-gradient-success">
      <hr class="my-3">

      <p>Click on a card to see historical data at the bottom of the page!</p>
      <!-- Card stats -->
      <b-row> 
        <b-col v-for="s in smartbins" @click="s.distance && cardClicked(s.deviceId)" :key=s.deviceId xl="3" md="6">
          <stats-card :title="s.location"
                      :type="iconColor(s)"
                      :sub-title="s.name"
                      icon="ni ni-chart-bar-32"
                      class="mb-4"
                      v-bind:class="{selected: s.deviceId === selectedDevice}">

            <template slot="footer">
              <BaseProgress v-if="s.distance"
                            :value="s.percentage" 
                            label="Full"
                            :showLabel="! s.percentage > 80"
                            :striped="true"
                            :animated="true"
                            :height="5"
                            :type="progressBarColor(s.percentage)"
                            />
              <template v-if="s.distance">
                <span class="text-success mr-2">{{s.percentage.toFixed(1)}}%</span>
                <span class="text-nowrap">At {{new Date(s.timestamp).toUTCString()}}</span>
              </template>
              <template v-else>
                <span class="text-nowrap text-info mr-2">No data to display</span>
              </template>

            </template>
          </stats-card>
        </b-col>


        <!-- <div>{{allMeasurementData}}</div> -->
        <!-- <div>{{searchQuery}}</div> -->



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
        <!-- <div>
          <b-button @click="getAllDevicesLatestData">Refresh</b-button>
        </div> -->
    </base-header>

    <!--Charts-->
    <b-container v-if="selectedDevice" fluid class="mt--7">
      <b-row>
        <b-col xl="8" class="mb-5 mb-xl-0">
          <card type="default" header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-light text-uppercase ls-1 mb-1">{{allDevices.find(s => s.deviceId == selectedDevice).name}}</h6>
                <h5 class="h3 text-white mb-0">Historical measurements</h5>
              </b-col>
              <b-col>
                <!-- <b-nav class="nav-pills justify-content-end">
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
                </b-nav> -->
              </b-col>
            </b-row>
            <line-chart
              :height="550"
              ref="bigChart"
              :chart-data="bigLineChart.chartData"
              :extra-options="bigLineChart.extraOptions"
            >
            </line-chart>
          </card>
        </b-col>

        <!-- <b-col xl="4" class="mb-5 mb-xl-0">
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
        </b-col> -->
      </b-row>
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

  // database api
  import cosmos from '../cosmos/cosmos.js';

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
            [0],
            // [0, 20, 10, 30, 15, 40, 20, 10],
            // [0, 20, 5, 25, 10, 30, 15, 40]
          ],
          activeIndex: 0,
          chartData: {
            datasets: [
              {
                label: 'Percentage',
                // data: [0, 20, 10, 30, 15, 40, 20, 50, 60, null, 90, 20, 34, 67, 0, 20, 10, 30, 15, 40, 20, 50, 60, 100, 90, 20, 34, 67,0, 20, 10, 30, 15, 40, 20, 50, 60, 100, 90, 20, 34, 67, 0, 20, 10, 30, 15, 40, 20, 50, 60, 100, 90, 20, 34, 67,],
                spanGaps: true
              }
            ],
            // labels: ['Bay', 'Jun', 'Jul', 'Aug', 'Pep', 'Oct', 'Nov', 'Dec', 'wd', '2e2', '2edwdc', 'qwd', 'Bay', 'Jun', 'Jul', 'Aug', 'Pep', 'Oct', 'Nov', 'Dec', 'wd', '2e2', '2edwdc', 'qwd', 'Bay', 'Jun', 'Jul', 'Aug', 'Pep', 'Oct', 'Nov', 'Dec', 'wd', '2e2', '2edwdc', 'qwd', 'Bay', 'Jun', 'Jul', 'Aug', 'Pep', 'Oct', 'Nov', 'Dec', 'wd', '2e2', '2edwdc', 'qwd',],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
        // redBarChart: {
        //   chartData: {
        //     labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        //     datasets: [{
        //       label: 'Sales',
        //       data: [25, 20, 30, 22, 17, 5]
        //     }]
        //   },
        //   extraOptions: chartConfigs.blueChartOptions
        // },
        allMeasurementData: [],
        allDevices: [],
        loading: true,
        selectedDevice: null
      };
    },
    computed: {
      smartbins() {
        let search = this.searchQuery.toLowerCase();
        return this.allDevices
                    .filter(s => s.name.toLowerCase().includes(search) || s.location.toLowerCase().includes(search))
                    .map(s => {
          let data = this.allMeasurementData.find(obj => obj.deviceId === s.deviceId);
          if (data) {
            s.distance = data.distance || null;
            s.timestamp = data.timestamp * 1000 || null;
            s.percentage = this.percentage(s); 
          }
          return s
        });
      },
      searchQuery() {
        return this.$store.getters.getSearchQuery;
      }
    },
    methods: {
      initBigChart(deviceId) {
        this.getDeviceHistoryData(deviceId.toString())
        .then(data => this.getChartAxes(data))
        .then(({measurementData, labels}) => {
          let chartData = {
            datasets: [
              {
                label: 'Percentage',
                data: measurementData,
                spanGaps: true
              }
            ],
            labels: labels
            // labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          };
          this.bigLineChart.chartData = chartData;
          // this.bigLineChart.activeIndex = index;
        });
      },
      progressBarColor(fullness) {
        return fullness < 60 && "success" || fullness < 80 && "warning" || "danger"
      },
      getDeviceHistoryData(deviceId) {
        return cosmos.getDeviceHistoryData(deviceId)
      },
      getAllDevicesLatestData() {
        this.loading = true;
        return cosmos.getAllDevicesLatestData().then(res => this.allMeasurementData = res).then(this.loading = false)
      },
      getAllDevices() {
        cosmos.getAllDevices().then(res => this.allDevices = res)
      },
      percentage(s) {
        let p = (s.distance - s.minDist) / (s.maxDist - s.minDist) * 100
        return p < 0 ? 0 : p > 100 ? 100 : p
      },
      iconColor(s) {
        return !s.distance ? "gradient-blue" : s.percentage < 60 && "gradient-green" || s.percentage < 80 && "gradient-orange" || "gradient-red"
      },
      getChartAxes(data) {
        /* Create the axes for the charts */
        let a = data;

        let least = Number.POSITIVE_INFINITY;
        let last = Number.POSITIVE_INFINITY;

        let current;
        let difference;

        // find the shortest time interval between the data
        for(let i = 0; i < a.length; ++i) {
            current = parseInt(a[i]._ts);
            difference = Math.abs(current - last);
            if (difference < least)
                least = difference;
            last = current;
        }

        let interval = least;

        let {minDist, maxDist} = this.allDevices.find(s => s.deviceId == data[0].deviceId);

        // create the axes by going through each time interval and placing the data where it belongs
        let res = [];
        let labels = [];
        let index = 0;
        for(let i = a[0]._ts; i < a[a.length -1]._ts; i += interval) {
          // data array
            if(a[index]._ts - i < interval)
                res.push(
                    this.percentage({
                      minDist, 
                      maxDist,
                      distance: parseInt(a[index++].distance)
                    }).toFixed(2)
                );
            else
                res.push(null);
          
          // labels array
            if( ( (i - a[0]._ts) / interval) % 5 === 0)
                labels.push(new Date(i * 1000).toLocaleString());
            else
                labels.push(new Date(i * 1000).toLocaleTimeString());
        }

        
        return {
            measurementData: res,
            labels: labels
        };
      },
      cardClicked(deviceId) {
        if (this.selectedDevice === deviceId)
          this.selectedDevice = null;
        else {
          this.selectedDevice = deviceId;
          this.initBigChart(deviceId);
        }
      }
    },
    created() {
      this.getAllDevices();
      this.getAllDevicesLatestData();
    }
  };
</script>
<style>
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}
.selected {
  box-shadow: 0 0 3pt 2pt rgb(35, 77, 33);
}
</style>

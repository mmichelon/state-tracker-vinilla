<template>
  <!-- <div class="container mt-5 text-center">
    <GoogleChart />
  </div> -->
  <div>
    <h2>Pie Chart to visualize user State data</h2>

    <GChart
      type="PieChart"
      :options="options"
      :data="data"
    />
  </div>
</template>

<script>
// import GoogleChart from '../components/GoogleChart.vue'

import { GChart } from "vue-google-charts";
import firebase from 'firebase/compat/app';

export default {
  // name: 'App',
  // components: {
  //   GoogleChart
  // }
  components: {
    GChart
  },
  data(){
    return {
      data: [
          ['States', 'Found or not Found'],
          // ['Work',     14],
          // ['Eat',      1],
          // ['Reading',  2],
          // ['Exercise', 2],
          // ['Sleep',    5]
      ],
      // size: 0,
      notFoundSize: 0,
      foundSize: 0,
      options: {
        width: 1100,
        height: 400
      },
    };
  },
  created() {
      this.getStatesNotFound();
      this.getStatesFound();
  },
  methods: {
    async getStatesNotFound() {
        var statesRef = await firebase
            .firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .collection("states")
            // .orderBy("title")
            .where("isFound", "==", false)
        statesRef.onSnapshot(snap => {
          this.notFoundSize = snap.size // will return the collection size
          // console.log("Size of NotFound", this.notFoundSize);
          this.data.push(['Not Found', this.notFoundSize]);
        });
    },
    async getStatesFound() {
        var statesRef = await firebase
            .firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .collection("states")
            // .orderBy("title")
            .where("isFound", "==", true)
        statesRef.onSnapshot(snap => {
          this.foundSize = snap.size // will return the collection size
          // console.log("Size of Found", this.foundSize);
          this.data.push(['Found', this.foundSize]);
        });
    },
  },
}
</script>

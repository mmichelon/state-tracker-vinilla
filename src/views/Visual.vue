<template>
  <div>
    <h1>Visualization of selected states</h1>
    <div>
      <checkbox-svg-map v-model="selectedLocations" :map="USA" @change="displayselected()"/>
    </div>

    <h1>
      Selected States
    </h1>
    <ul class="collection with-header">
        <li
            class="collection-item"
            v-for="state in states"
            :key="state.id"
            :class="{ fade: state.isFound }"
        >
            {{state.title}}
            <span class="secondary-content">
                <label>
                    <input
                        type="checkbox"
                        class="filled-in"
                        :checked="state.isFound"
                        @change="updateTodoItem(state.id, $event)"
                    />
                    <span></span>
                </label>
            </span>
        </li>

    </ul>
  </div>
</template>

<script>
import { CheckboxSvgMap } from "vue-svg-map";
import USA from "@svg-maps/usa";

//Get firebase data this will allow information from firebase to visualize
import firebase from 'firebase/compat/app';

export default {
	name: "MyCheckboxMap",
	components: {
		CheckboxSvgMap
	},
	data() {
		return {
			USA,
      label: "Selected States",
			selectedLocations: [],

      states: [],
      state: {
          // title: ""
          shortTitle: ""
      },
		};
	},
  created() {
    this.getStates();
  },
  // mounted: function mounted () {
  //   this.getStates();
  // },
  methods: {
    displayselected: function() {
      console.log("Selected Locations: ", this.selectedLocations)
      // console.log("States: ", this.states)
    },
    async getStates() {
        var statesRef = await firebase
            .firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .collection("states")
            .orderBy("title")
            .where("isFound", "==", true)
        statesRef.onSnapshot(snap => {
            this.states = [];
            snap.forEach(doc => {
                var state = doc.data();
                state.id = doc.id;
                this.states.push(state);
                this.selectedLocations.push(state.shortTitle);
            });
        });
    },

    updateTodoItem(docId, e) {
        var isChecked = e.target.checked;
        firebase
            .firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .collection("states")
            .doc(docId)
            .update({
                isFound: isChecked
            });
    },
  }
};
</script>

<style src="vue-svg-map/dist/index.css">



.fade {
    opacity: 0.4 !important;
}
ul {
    list-style-type: none;
}

li {
    font-size: 1.3em;
}
.collection.with-header {
    max-width: 500px;
    margin: 0 auto;
}
.deleteIcon {
    margin-right: 10px;
    cursor: pointer;
}
.deleteIcon:hover {
    opacity: 0.5;
}
</style>

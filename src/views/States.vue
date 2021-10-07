<template>
    <section>
        <h3 class="center-align"><span>{{ selected }}</span></h3>

        <div>
          <b-form-group
            v-slot="{ ariaDescribedby }"
          >
            <b-form-radio-group
              id="btn-radios-2"
              v-model="selected"
              :options="options"
              :aria-describedby="ariaDescribedby"
              button-variant="outline-primary"
              size="lg"
              name="radio-btn-outline"
              buttons @change="handleChange()"
            ></b-form-radio-group>
          </b-form-group>
        </div>

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
        <div>
          <!-- <button class="btn" @click="checkState">Check State</button> -->
        </div>
    </section>
</template>



<script>
// import firebase from "firebase";
import firebase from 'firebase/compat/app';
export default {
    data() {
        return {
            states: [],
            state: {
                title: ""
            },
            // picked: 'All States',
            search: '',
            selected: 'All States',
            options: [
              { text: 'All States', value: 'All States'},
              { text: 'Not Found States', value: 'Not Found States' },
              { text: 'Found States', value: 'Found States' }
            ]
          };
    },
    created() {
      if(this.selected == "All States"){
        this.getStates();
      }

      if(this.selected == "Not Found States"){
        this.getStatesNotFound();
      }
      if(this.selected == "Found States"){
        this.getStatesFound();
      }
      // this.getStates();
    },
    mounted: function mounted () {
      this.checkStates();
    },

    methods: {

      handleChange: function() {
          if(this.selected == "All States"){
            this.getStates();
          }

          if(this.selected == "Not Found States"){
            this.getStatesNotFound();
          }
          if(this.selected == "Found States"){
            this.getStatesFound();
          }
      },

        async getStates() {
            var statesRef = await firebase
                .firestore()
                .collection("users")
                .doc(firebase.auth().currentUser.uid)
                .collection("states").orderBy("title")
            statesRef.onSnapshot(snap => {
                this.states = [];
                snap.forEach(doc => {
                    var state = doc.data();
                    state.id = doc.id;
                    this.states.push(state);
                });
            });
        },
        async getStatesNotFound() {
            var statesRef = await firebase
                .firestore()
                .collection("users")
                .doc(firebase.auth().currentUser.uid)
                .collection("states").orderBy("title").where("isFound", "==", false)
            statesRef.onSnapshot(snap => {
                this.states = [];
                snap.forEach(doc => {
                    var state = doc.data();
                    state.id = doc.id;
                    this.states.push(state);
                });
            });
        },

        async getStatesFound() {
            var statesRef = await firebase
                .firestore()
                .collection("users")
                .doc(firebase.auth().currentUser.uid)
                .collection("states").orderBy("title").where("isFound", "==", true)
            statesRef.onSnapshot(snap => {
                this.states = [];
                snap.forEach(doc => {
                    var state = doc.data();
                    state.id = doc.id;
                    this.states.push(state);
                });
            });
        },

        // async searchStates() {
        //   console.log("Search Value: ", this.search)
        //     var statesRef = await firebase
        //         .firestore()
        //         .collection("users")
        //         .doc(firebase.auth().currentUser.uid)
        //         .collection("states").orderBy("title").where("title", "==", this.search)
        //     statesRef.onSnapshot(snap => {
        //         this.states = [];
        //         snap.forEach(doc => {
        //             var state = doc.data();
        //             state.id = doc.id;
        //             this.states.push(state);
        //         });
        //     });
        // },

        // Won't need for states, but can possibly use later
        // addState() {
        //         firebase
        //             .firestore()
        //             .collection("users")
        //             .doc(firebase.auth().currentUser.uid)
        //             .collection("states")
        //             .add({
        //                 title: this.state.title,
        //                 isFound: false,
        //                 createdAt: new Date()
        //             });
        //         console.log("Added new state: ", this.state.title);
        // },

        async checkStates(){
          console.log("Firebase UserID: ", firebase.auth().currentUser.uid);

          var statesRef = await firebase.firestore().collection('users')
          .doc(firebase.auth().currentUser.uid).collection("states");

          statesRef.get().then(snap => {
            var size = snap.size // will return the collection size
            if(size > 0){
              console.log("In Loop: ", size)
            }else{
              console.log("Need to create States!")


              const array = [
                {
                  title: "Alabama",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Alaska",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Arizona",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Arkansas",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "California",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Colorado",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Connecticut",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Delaware",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Florida",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Georgia",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Hawaii",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Idaho",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Illinois",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Indiana",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Iowa",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Kansas",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Kentucky",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Louisiana",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Maine",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Maryland",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Massachusetts",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Michigan",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Minnesota",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Mississippi",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Missouri",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Montana",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Nebraska",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Nevada",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "New Hampshire",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "New Jersey",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "New Mexico",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "New York",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "North Carolina",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "North Dakota",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Ohio",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Oklahoma",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Oregon",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Pennsylvania",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Rhode Island",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "South Carolina",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "South Dakota",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Tennessee",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Texas",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Utah",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Vermont",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Virginia",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Washington",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "West Virginia",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Wisconsin",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
                ,{
                  title: "Wyoming",
                  isFound: false,
                  createdAt: new Date()
                  // id: doc.id
                }
              ]

              var db = firebase.firestore();
              var batch = db.batch();

              array.forEach((doc) => {
                batch.set(db.collection('users').doc(firebase.auth().currentUser.uid).collection("states").doc(), doc);
              })
              // Commit the batch
              batch.commit();
            }
          }).catch((error) => {
              console.log("Error getting document:", error);
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
                // this.handleChange();
                if(this.selected == "All States"){
                  this.getStates();
                }

                if(this.selected == "Not Found States"){
                  this.getStatesNotFound();
                }
                if(this.selected == "Found States"){
                  this.getStatesFound();
                }

        },
    }
};
</script>

<style>

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

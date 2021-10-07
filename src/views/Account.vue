<template>
  <div>
    <h1>Account Page</h1>
    <div class="center">
      <b-card
        tag="article"
        class="mb-2"
      >

      <b-img :src="user.photoURL" rounded="circle"/>
        <b-card-text>
          <h2>{{user.displayName}}</h2>

          <p> name: <strong>{{user.displayName}}</strong><br />email:<strong>{{user.email}}</strong><br/>uid:
                 <strong>{{user.uid}}</strong> <br />provider: <strong
                     class="teal-text">{{user.providerData[0].providerId}}</strong> </p>
        </b-card-text>

        <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
      </b-card>
    </div>
  </div>
</template>

<script>
// import firebase from "firebase";
import firebase from 'firebase/compat/app';

export default {
  name: "SignUp",
  data() {
      return {
        user: null
      };
  },
  created() {
     firebase.auth().onAuthStateChanged(user => {
         if (user) {
             this.user = user;
             // this.checkStates();
             console.log("PhotoURL: ", this.user.photoURL)
         }
     });
 }
};
</script>

<style>
.center {
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
}
</style>

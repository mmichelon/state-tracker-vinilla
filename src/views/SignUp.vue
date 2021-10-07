<template>
  <!-- <div>
    <b-button @click="googleSignIn">
      Sign In with Google
    </b-button>
  </div> -->
  <b-container>
    <b-row class="vh-100 text-center" align-v="center">
      <b-col><b-button class="main-navigation-button" variant="primary" @click="googleSignIn">Sign In with Google</b-button></b-col>
    </b-row>
  </b-container>
</template>

<script>
// import firebase from "firebase";
import firebase from 'firebase/compat/app';

// import router from './router'

export default {
  name: "SignUp",
  methods: {
    googleSignIn: function() {
      //Sign in function
      // We'll create functionality here
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          let token = result.credential.accessToken;
          let user = result.user;
            console.log(token) // Token
            console.log(user) // User that was authenticated
            this.$router.push('/');

        })
        .catch((err) => {
          console.log(err); // This will give you all the information needed to further debug any errors
        });

    },
    googleSignOut: function() {
      // We'll create functionality here
      firebase
              .auth()
              .signOut()
              .then(() => {
                alert("Successfully signed out.");
              });
    }
  },
};
</script>

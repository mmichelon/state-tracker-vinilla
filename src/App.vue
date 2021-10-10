<template>
  <div id="app">
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item router-link to="/">State Tracker</b-nav-item>
          <!-- <b-nav-item router-link to="/state" v-show="user">States</b-nav-item> -->

          <b-nav-item-dropdown text="States" v-show="user" right>
            <b-dropdown-item router-link to="/state" v-show="user">States Selection</b-dropdown-item>
            <b-dropdown-item class = "ml-auto" router-link to="/visual" v-show="user">Visualize States</b-dropdown-item>
            <b-dropdown-item router-link to="/statedata" v-show="user">States Data</b-dropdown-item>

          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="User" v-show="user" right>
            <b-dropdown-item router-link to="/account">Account</b-dropdown-item>
            <b-dropdown-item class = "ml-auto" router-link to="/" @click="signoutButtonPressed" v-show="user">Log Out</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item class = "ml-auto" router-link to="/signup" v-show="!user">Log In</b-nav-item>
        </b-navbar-nav>
      </b-navbar>

    </div>
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default {
    data() {
        return {
            user: null
        };
    },
    created() {
        firebase.auth().onAuthStateChanged(user => {
            this.user = user;
        });
        console.log("Current User: ", this.user);
    },
    methods: {
        signoutButtonPressed(e) {
            e.stopPropagation();
            firebase.auth().signOut();
            this.$router.push('/');
        }
    }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

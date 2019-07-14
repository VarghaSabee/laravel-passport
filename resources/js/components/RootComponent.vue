<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <a class="navbar-brand" href="#">Laravel Passport</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarCollapse">
        <ul class="navbar-nav navbar-right">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item" v-if="!check">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item" v-if="!check">
            <router-link to="/register" class="nav-link">Register</router-link>
          </li>
          <li class="nav-item dropdown" v-if="check">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >{{$store.state.auth ? $store.state.auth.name : 'UserName'}}</a>
            <div  class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
              <router-link to="/dashboard" class="dropdown-item">Dashboard</router-link>
              <a class="dropdown-item" href="#" @click="logout()">Logout</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <main role="main" class="container">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$store.state.check);
  },
  methods:{
      logout(){
          this.$store.dispatch('logout');
          this.$router.push({path:'/'});
      }
  },
  computed:{
      check : function(){
          return this.$store.state.check;
      }
  }
};
</script>

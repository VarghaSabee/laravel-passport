<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form class="form-signin" v-on:submit.prevent="register()">
          <div class="text-center mb-4">
            <img
              class="mb-4"
              src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg"
              alt
              width="72"
              height="72"
            />
            <h1 class="h3 mb-3 font-weight-normal">Register</h1>
            <p>
              Build form controls with floating labels via the
              <code>:placeholder-shown</code> pseudo-element.
              <a
                href="https://caniuse.com/#feat=css-placeholder-shown"
              >Works in latest Chrome, Safari, and Firefox.</a>
            </p>
          </div>

          <div class="form-label-group">
            <input
              type="email"
              v-model="form.email"
              id="inputEmail"
              class="form-control"
              placeholder="Email address"
              required
              autofocus
            />
            <label for="inputEmail">Email address</label>
          </div>

          <div class="form-label-group">
            <input
              v-model="form.password"
              type="password"
              id="inputPassword"
              class="form-control"
              placeholder="Password"
              required
            />
            <label for="inputPassword">Password</label>
          </div>

            <div class="form-label-group">
            <input
              type="password"
              v-model="form.password_conf"
              id="inputPasswordConfirmation"
              class="form-control"
              placeholder="Password confirmation"
              required
            />
            <label for="inputPassword">Password confirmation</label>
          </div>

          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2019</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
     if(this.$store.state.check){
        this.$router.push({ name: "dash"});
      }
  },
    data: () => ({
    form: {
      email: "",
      password: "",
      password_conf:""
    }
  }),
  methods:{
    register() {
      console.log("register");
      if(this.form.password !== this.form.password_conf){
          alert('Password not match with confirmation')
          return;
      }
      axios
        .post("/api/register", {
          email: this.form.email,
          password: this.form.password
        })
        .then(res => {
          // save token to vuex
          this.$store.dispatch("saveToken", { token: res.data.token });
          // get user data, store in vuex
          this.$store.dispatch("fetchauth");
          // redirect
          this.$router.push({ name: "dash"});
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>
 <style>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>

<template>
  <div id="login">
    <h3 class="text-center text-white pt-5">Login form</h3>
    <div class="container">
      <div id="login-row" class="row justify-content-center align-items-center">
        <div id="login-column" class="col-md-6">
          <div id="login-box" class="col-md-12">
            <form id="login-form" class="form" action method="post">
              <h3 class="text-center text-info">Login</h3>
              <div class="form-group">
                <label for="username" class="text-info">Username:</label>
                <br />
                <input type="text" name="username" id="username" class="form-control" v-model="form.username"/>
              </div>
              <div class="form-group">
                <label for="password" class="text-info">Password:</label>
                <br />
                <input type="text" name="password" id="password" class="form-control" v-model="form.password"/>
              </div>
              <div class="form-group">
                <label for="remember-me" class="text-info">
                  <span>Remember me</span>
                  <span>
                    <input id="remember-me" name="remember-me" type="checkbox" v-model="form.rememberMe"/>
                  </span>
                </label>
                <br />
                <input
                  type="button"
                  name="submit"
                  class="btn btn-info btn-md"
                  value="submit"
                  @click="login()"
                />
              </div>
              <div id="register-link" class="text-right">
                <a href="#" class="text-info">Register here</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {
      username: '',
      password: '',
      rememberMe: ''
    }
  }),
  methods: {    
    login() {       
      this.$store.dispatch('loginAsync', this.form);
    }
  }
};
</script>

<style>
#login .container #login-row #login-column #login-box {
  margin-top: 120px;
  max-width: 600px;
  height: 320px;
  border: 1px solid #9c9c9c;
  background-color: #eaeaea;
}
#login .container #login-row #login-column #login-box #login-form {
  padding: 20px;
}
#login
  .container
  #login-row
  #login-column
  #login-box
  #login-form
  #register-link {
  margin-top: -85px;
}
</style>
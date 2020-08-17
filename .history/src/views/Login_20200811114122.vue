<template>
  <div class="login">
    <div
      class="alert alert-danger alert-dismissible fade show"
      role="alert"
      v-if="showErrorMessage"
    >
      <strong>Oh snap !</strong> Your email or password is incorrect. please try
      again.
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true" class="la la-close"></span>
      </button>
    </div>
    <div class="container">
      <form class="sign-in-form" action="index.html">
        <div class="card">
          <div class="card-body">
            <a
              href="index.html"
              class="brand text-center d-block m-b-20 m-t-20"
            >
              <img src="../assets/img/upload/logo_dark.png" alt="Logo" />
              <!-- <span class="display-4">School Name</span> -->
            </a>
            <p class="text-center m-b-40">iGroup LMS</p>
            <div id="forget-password-page" v-if="showForgetPassword">
              <h5 class="sign-in-heading">Forgotten Password?</h5>
              <p>We'll send you an email with link to reset your password.</p>
              <div class="form-group">
                <label for="inputEmail" class="sr-only">Email address</label>
                <input
                  type="email"
                  id="inputEmail"
                  class="form-control form-control-lg"
                  placeholder="Enter your Email address"
                  required=""
                />
              </div>

              <button
                class="btn btn-primary btn-rounded btn-floating btn-lg btn-block m-t-40 m-b-20"
                type="submit"
              >
                Send
              </button>
            </div>
            <div id="login-Page">
              <h5 class="sign-in-heading">Log in to your account</h5>
              <div class="form-group">
                <label for="inputEmail" class="sr-only">Email address</label>
                <input
                  type="email"
                  id="inputEmail"
                  class="form-control form-control-lg"
                  placeholder="Enter your Email address"
                  required=""
                />
              </div>
              <div class="form-group">
                <label for="inputPassword" class="sr-only">Password</label>
                <input
                  type="password"
                  id="inputPassword"
                  class="form-control form-control-lg"
                  placeholder="Enter your password"
                  required=""
                />
              </div>
              <div class="checkbox m-t-20">
                <div
                  class="custom-control custom-checkbox checkbox-primary form-check"
                >
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="stateCheck1"
                    checked=""
                  />
                  <label class="custom-control-label" for="stateCheck1">
                    Remember me</label
                  >
                </div>
                <a class="float-right blue" @click="showForgetPassword = true"
                  >Forgot Password?</a
                >
              </div>
              <button
                class="btn btn-primary btn-rounded btn-floating btn-lg btn-block m-t-40 m-b-20"
                type="submit"
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      showErrorMessage: false,
      showContent: "",
      showForgetPassword: false,
    };
  },

  methods: {},
};
</script>
<style scoped lang="scss">
</style>



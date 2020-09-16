<template>
  <div class="login">
    {{ token }}
    <!-- <div
      class="alert alert-danger alert-dismissible fade show"
      role="alert"
      v-if="showErrorMessage"
    >
      <strong>Oh snap !</strong> {{ ErrorMessage }}
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true" class="la la-close"></span>
      </button>
    </div> -->
    <alert></alert>
    <div class="container" v-if="loginShow === 'forgetPassword'">
      <form class="sign-in-form">
        <div class="card">
          <div class="card-body">
            <a class="brand text-center d-block m-b-20 m-t-20">
              <img src="../assets/img/upload/logo_dark.png" alt="Logo" />
              <!-- <span class="display-4">School Name</span> -->
            </a>
            <p class="text-center m-b-40">iGroup LMS</p>
            <div id="forget-password-page">
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
                  v-model="loginForm.email"
                />
              </div>

              <button
                class="btn btn-primary btn-rounded btn-floating btn-lg btn-block m-t-40 m-b-20"
                @click="forgotPassword()"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="container" v-if="loginShow === 'resetPasswordSuccess'">
      <form class="sign-in-form">
        <div class="card">
          <div class="card-body">
            <a class="brand text-center d-block m-b-20 m-t-20">
              <img src="../assets/img/upload/logo_dark.png" alt="Logo" />
              <!-- <span class="display-4">School Name</span> -->
            </a>
            <p class="text-center m-b-40">iGroup LMS</p>
            <p class="display-4 text-center">
              <i class="zmdi zmdi-check-circle zmdi-hc-fw text-success"></i>
            </p>
            <h5 class="sign-in-heading text-center text-success">
              Password reset success
            </h5>
            <p class="text-center">
              Your password has now been successfully reset. Please use this new
              password to log in.
            </p>
            <button
              class="btn btn-primary btn-rounded btn-floating btn-lg btn-block m-t-40 m-b-20"
            >
              Log in
            </button>
          </div>
        </div>
      </form>
    </div>
    <div class="container" v-if="loginShow === 'resetPassword'">
      <form class="sign-in-form">
        <div class="card">
          <div class="card-body">
            <a class="brand text-center d-block m-b-20 m-t-20">
              <img src="../assets/img/upload/logo_dark.png" alt="Logo" />
              <!-- <span class="display-4">School Name</span> -->
            </a>
            <p class="text-center m-b-40">iGroup LMS</p>

            <p class="text-primary text-center">E-mail: {{ userEmail }}</p>
            <h5 class="sign-in-heading">Reset your password</h5>
            <div class="form-group">
              <label for="inputPassword" class="sr-only">Password</label>
              <input
                type="password"
                id="inputPassword"
                class="form-control form-control-lg"
                placeholder="Password must be at least 6 characters"
                required=""
              />
            </div>
            <div class="form-group">
              <label for="inputPassword" class="sr-only">Password</label>
              <input
                type="password"
                id="inputPassword"
                class="form-control form-control-lg"
                placeholder="Enter your password again"
                required=""
              />
            </div>
            <button
              class="btn btn-primary btn-rounded btn-floating btn-lg btn-block m-t-40 m-b-20"
              @click="resetPassword()"
            >
              Confirm password
            </button>
          </div>
        </div>
      </form>
    </div>
    <div class="container" v-if="loginShow === 'sendEmail'">
      <form class="sign-in-form">
        <div class="card">
          <div class="card-body">
            <a class="brand text-center d-block m-b-20 m-t-20">
              <img src="../assets/img/upload/logo_dark.png" alt="Logo" />
              <!-- <span class="display-4">School Name</span> -->
            </a>
            <p class="text-center m-b-40">iGroup LMS</p>
            <p class="display-4 text-center">
              <i class="zmdi zmdi-mail-send zmdi-hc-fw text-success"></i>
            </p>
            <h5 class="sign-in-heading text-center text-success">
              Password reset email sent
            </h5>
            <p class="text-center">
              An email has been sent to your email. Please follow the directions
              in the email to reset your password.
            </p>
            <button
              class="btn btn-primary btn-rounded btn-floating btn-lg btn-block m-t-40 m-b-20"
            >
              OK
            </button>
          </div>
        </div>
      </form>
    </div>
    <div class="container" v-if="loginShow === 'login'">
      <div class="sign-in-form">
        <div class="card">
          <div class="card-body">
            <a class="brand text-center d-block m-b-20 m-t-20">
              <img src="../assets/img/upload/logo_dark.png" alt="Logo" />
              <!-- <span class="display-4">School Name</span> -->
            </a>
            <p class="text-center m-b-40">iGroup LMS</p>
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
                  v-model="loginForm.email"
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
                  v-model="loginForm.password"
                />
              </div>
              <div class="checkbox m-t-20">
                <div class="custom-control custom-checkbox checkbox-primary">
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
                <a
                  class="float-right blue pointer"
                  @click="loginShow = 'forgetPassword'"
                  >Forgot Password?</a
                >
              </div>
              <button
                class="btn btn-primary btn-rounded btn-floating btn-lg btn-block m-t-40 m-b-20"
                @click="login()"
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ApiLogin,
  ApiForgotPassword,
  ApiResetPassword,
  ApiActivateUser,
} from "../http/api";
import Alert from "../components/AlertMessage";
export default {
  name: "Login",
  components: {
    Alert,
  },
  data() {
    return {
      showErrorMessage: false,
      loginShow: "login",
      loginForm: {
        email: "bkbjava@mhsh.ptc.edu.tw",
        password: "123456",
      },
      userEmail: "jolin123@gmail.com",
      ErrorMessage: "Your email or password is incorrect. please try again.",
    };
  },
  created() {
    //resetpassword用網址
    ///resetpassword/id=0430d89bd1005af68a291b2f980c8dcda8b9f761
    this.$store.dispatch("auth/setAuth", {
      token: "",
      isLogin: false,
    });
  },
  mounted() {
    if (this.$route.params.id !== undefined) {
      this.activateUser(this.$route.params.id);
      this.loginShow = "resetPassword";
    }
  },
  computed: {
    token() {
      return this.$store.state.auth.token;
    },
  },
  methods: {
    forgotPassword() {
      ForgotPassword.get(this.loginForm.email).then((response) => {
        console.log(response);
      });
    },
    sendEmailResetPWD() {
      this.loginShow = "sendEmail";
    },
    login(data) {
      ApiLogin.post(this.loginForm).then((response) => {
        window.localStorage.setItem("token", response.record);
        //vuex
        this.$store.dispatch("auth/setAuth", {
          token: response.record,
          isLogin: response.record === "success" ? true : false,
          userid: response.record.userID,
        });
        // response.status === "success"
        if (response.status === "success") {
          this.$router.push({
            path: "/course",
          });
        } else {
          this.$bus.$emit(
            "messsage:push",
            "Oh snap ! Your email or password is incorrect. please try again.",
            "danger"
          );
        }
      });
    },

    resetPassword() {
      this.loginShow = "resetPasswordSuccess";
    },
    activateUser(activeid) {
      ApiActivateUser.get(activeid).then((response) => {
        this.loginForm.email = response.record.email;
      });
    },
  },
};
</script>
<style scoped lang="scss">
</style>



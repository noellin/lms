<template>
  <div class="login row justify-content-center align-items-center col-sm-12">
    <div
      class="loginpage row justify-content-center align-items-center col-sm-12"
    >
      <div v-if="loginShow === 'login'">
        <div class="sign-in-form col-sm-12">
          <div class="card">
            <div class="card-body">
              <a class="brand text-center d-block m-b-20 m-t-20">
                <img src="../assets/img/upload/logo_dark.png" alt="Logo" />
                <!-- <span class="display-4">School Name</span> -->
              </a>
              <p class="text-center m-b-40">iGroup LMS</p>
              <ValidationObserver ref="loginForm">
                <div id="login-Page">
                  <h5 class="sign-in-heading">Log in to your account</h5>
                  <ValidationProvider
                    rules="required"
                    v-slot="{ failed, errors }"
                    name="Account"
                  >
                    <div class="form-group">
                      <label for="inputEmail" class="sr-only"
                        >Email address</label
                      >
                      <input
                        type="email"
                        id="inputEmail"
                        class="form-control form-control-lg"
                        placeholder="Enter your Email address"
                        required=""
                        v-model="loginForm.email"
                        :class="{ 'is-invalid': failed }"
                        :autocomplete="remember === true ? '' : 'new-password'"
                      />
                      <span v-if="failed" class="text-danger">{{
                        errors[0]
                      }}</span>
                    </div>
                  </ValidationProvider>
                  <ValidationProvider
                    rules="required"
                    v-slot="{ failed, errors }"
                    name="Password"
                  >
                    <div class="form-group">
                      <label for="inputPassword" class="sr-only"
                        >Password</label
                      >
                      <input
                        type="password"
                        id="inputPassword"
                        class="form-control form-control-lg"
                        placeholder="Enter your password"
                        required=""
                        v-model="loginForm.password"
                        :class="{ 'is-invalid': failed }"
                        :autocomplete="remember === true ? '' : 'new-password'"
                      />
                      <span v-if="failed" class="text-danger">{{
                        errors[0]
                      }}</span>
                    </div>
                  </ValidationProvider>
                  <div class="checkbox m-t-20">
                    <div
                      class="custom-control custom-checkbox checkbox-primary"
                    >
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="stateCheck1"
                        checked=""
                        v-model="remember"
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
              </ValidationObserver>
            </div>
          </div>
        </div>
      </div>
      <div v-if="loginShow === 'resetPasswordSuccess'">
        <div class="sign-in-form">
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
                Your password has now been successfully reset. Please use this
                new password to log in.
              </p>
              <button
                class="btn btn-primary btn-rounded btn-floating btn-lg btn-block m-t-40 m-b-20"
                @click="loginShow = 'login'"
              >
                Return to Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="loginShow === 'forgetPassword'">
        <div class="sign-in-form">
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
        </div>
      </div>
      <div class="" v-if="loginShow === 'resetPassword'">
        <div class="sign-in-form">
          <div class="card">
            <div class="card-body">
              <a class="brand text-center d-block m-b-20 m-t-20">
                <img src="../assets/img/upload/logo_dark.png" alt="Logo" />
                <!-- <span class="display-4">School Name</span> -->
              </a>
              <p class="text-center m-b-40">iGroup LMS</p>

              <p class="text-primary text-center">E-mail: {{ userEmail }}</p>
              <h5 class="sign-in-heading">Confirm your password</h5>
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
        </div>
      </div>
      <div class="" v-if="loginShow === 'sendEmail'">
        <div class="sign-in-form">
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
                An email has been sent to your email. Please follow the
                directions in the email to reset your password.
              </p>
              <button
                class="btn btn-primary btn-rounded btn-floating btn-lg btn-block m-t-40 m-b-20"
                @click="loginShow = 'login'"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 row justify-content-end">
        <a
          href="https://www.iubenda.com/privacy-policy/32601846"
          class="iubenda-nostyle no-brand iubenda-embed mr-4"
          title="Privacy Policy "
        >
          <small>Privacy Policy</small>
        </a>
        <a
          href="https://www.iubenda.com/privacy-policy/32601846/cookie-policy"
          class="iubenda-nostyle no-brand iubenda-embed mr-4"
          title="Cookie Policy "
        >
          <small>Cookie Policy</small></a
        >
        <a
          href="https://www.iubenda.com/terms-and-conditions/32601846"
          class="iubenda-nostyle no-brand iubenda-embed"
          title="Terms and Conditions "
          ><small>Terms and Conditions</small></a
        >
      </div>
    </div>
  </div>
</template>

<script>
// privacy policy
(function (w, d) {
  var loader = function () {
    var s = d.createElement("script"),
      tag = d.getElementsByTagName("script")[0];
    s.src = "https://cdn.iubenda.com/iubenda.js";
    tag.parentNode.insertBefore(s, tag);
  };
  if (w.addEventListener) {
    w.addEventListener("load", loader, false);
  } else if (w.attachEvent) {
    w.attachEvent("onload", loader);
  } else {
    w.onload = loader;
  }
})(window, document);
//
import dayjs from "dayjs";
import {
  ApiLogin,
  ApiForgotPassword,
  ApiConfirmPassword,
  ApiActivateUser,
} from "../http/apis/Login";
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
      remember: false,
      loginForm: {
        email: "",
        password: "",
        // // 測試帳號A admin權限
        // email: "bkbjava@mhsh.ptc.edu.tw",
        // password: "123456",
        // 測試帳號B teacher權限
        // email: "kevin.chen@igroupnet.com",
        // password: "123456",
        //測試帳號C
        // email: "sp.wang@igroupnet.com",
        // password: "123456",
      },
      userEmail: "",
      ErrorMessage: "Your email or password is incorrect. please try again.",
    };
  },
  created() {
    localStorage.clear();
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
      for (var i = keys.length; i--; )
        document.cookie = keys[i] + "=0;expires=" + new Date(0).toUTCString();
    }
    // //resetpassword用網址
    ///resetpassword/id=0430d89bd1005af68a291b2f980c8dcda8b9f761
    this.$store.dispatch("auth/setAuth", {
      token: "",
      isLogin: false,
      userid: "",
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
    async forgotPassword() {
      let result = await ApiForgotPassword.get(this.loginForm.email).then(
        (response) => {
          console.log(response);
          if (response.record === "Done") {
            this.$bus.$emit(
              "messsage:push",
              "Password reset information has been sent to your email, please check your email!",
              "success"
            );
            return true;
          }
        }
      );
      if (result) {
        this.loginShow = "sendEmail";
      }
    },
    sendEmailResetPWD() {
      this.loginShow = "sendEmail";
    },
    login() {
      const todayTimestamp = Math.floor(Date.now() / 1000);
      ApiLogin.post(this.loginForm)
        .then((response) => {
          console.log(response);
          window.localStorage.setItem("token", response.record);
          //vuex
          this.$store.dispatch("auth/setAuth", {
            token: response.record,
            isLogin: response.status === "success" ? true : false,
            userid: response.userID,
            username: response.username,
            email: response.email,
            permit: response.permit,
            todayTimestamp: todayTimestamp,
          });
          this.$store.dispatch("courseInfo/clearAllAssignment");
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
        })
        .catch((err) => {
          console.log(err);
        });
    },

    resetPassword() {
      let obj = { password: this.loginForm.password };
      ApiConfirmPassword.post(this.$route.params.id, obj)
        .then((response) => {
          console.log(response);
          this.loginShow = "resetPasswordSuccess";
        })
        .catch((err) => {});
    },
    activateUser(activeid) {
      ApiActivateUser.get(activeid)
        .then((response) => {
          console.log(response);
          this.loginForm.email = response.record.email;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped lang="scss">
</style>

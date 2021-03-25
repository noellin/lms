<template>
  <div class="login row justify-content-center align-items-center col-sm-12">
    <div
      class="loginpage row justify-content-center align-items-center col-sm-12"
    >
      <!-- login -->
      <div v-if="loginShow === 'login'">
        <div class="sign-in-form col-sm-12">
          <div class="card">
            <div class="card-body">
              <a class="brand text-center d-block m-b-20 m-t-20">
                <img
                  v-lazy="require('../assets/img/upload/logo_dark.png')"
                  alt="Logo"
                />
                <!-- <span class="display-4">School Name</span> -->
              </a>
              <p class="text-center m-b-40">MangoSTEEMS World</p>
              <ValidationObserver ref="loginForm">
                <div id="login-Page">
                  <h5 class="sign-in-heading">
                    {{ $t("log-in-to-your-account") }}
                  </h5>
                  <ValidationProvider
                    rules="required"
                    v-slot="{ failed, errors }"
                    name="Account"
                  >
                    <div class="form-group">
                      <label for="inputEmail" class="sr-only">{{
                        $t("email-address")
                      }}</label>
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
                      <label for="inputPassword" class="sr-only">{{
                        $t("password")
                      }}</label>
                      <input
                        type="password"
                        id="inputPassword"
                        class="form-control form-control-lg"
                        placeholder="Enter your password"
                        required=""
                        v-model="loginForm.password"
                        :class="{ 'is-invalid': failed }"
                        :autocomplete="remember === true ? '' : 'new-password'"
                        @keyup.enter="login()"
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
                        {{ $t("remember-me") }}</label
                      >
                    </div>
                    <a
                      class="float-right blue pointer"
                      @click="loginShow = 'forgetPassword'"
                      >{{ $t("forgot-password") }}?</a
                    >
                  </div>
                  <button
                    class="btn btn-primary btn-rounded btn-floating btn-lg btn-block m-t-40 m-b-20"
                    @click="login()"
                  >
                    {{ $t("log-in") }}
                  </button>
                </div>
              </ValidationObserver>
            </div>
          </div>
        </div>
      </div>
      <!-- login reset pwd -->
      <div v-if="loginShow === 'resetPasswordSuccess'">
        <div class="sign-in-form">
          <div class="card">
            <div class="card-body">
              <a class="brand text-center d-block m-b-20 m-t-20">
                <img
                  v-lazy="require('../assets/img/upload/logo_dark.png')"
                  alt="Logo"
                />
                <!-- <span class="display-4">School Name</span> -->
              </a>
              <p class="text-center m-b-40">MangoSTEEMS World</p>
              <p class="display-4 text-center">
                <i class="zmdi zmdi-check-circle zmdi-hc-fw text-success"></i>
              </p>
              <h5 class="sign-in-heading text-center text-success">
                {{ $t("password-reset-success") }}
              </h5>
              <p class="text-center">
                {{
                  $t(
                    "your-password-has-now-been-successfully-reset-please-use-this-new-password-to-log-in"
                  )
                }}.
              </p>
              <button
                class="btn btn-primary btn-rounded btn-floating btn-lg btn-block m-t-40 m-b-20"
                @click="loginShow = 'login'"
              >
                {{ $t("return-to-login") }}
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
                <img
                  v-lazy="require('../assets/img/upload/logo_dark.png')"
                  alt="Logo"
                />
                <!-- <span class="display-4">School Name</span> -->
              </a>
              <p class="text-center m-b-40">MangoSTEEMS World</p>

              <div id="forget-password-page">
                <h5 class="sign-in-heading">{{ $t("forgotten-password") }}?</h5>
                <p>
                  {{
                    $t(
                      "will-send-you-an-email-with-link-to-reset-your-password"
                    )
                  }}.
                </p>
                <div class="form-group">
                  <label for="inputEmail" class="sr-only">{{
                    $t("email-address")
                  }}</label>
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
                  {{ $t("send") }}
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
              <ValidationObserver ref="resetForm">
                <a class="brand text-center d-block m-b-20 m-t-20">
                  <img
                    v-lazy="require('../assets/img/upload/logo_dark.png')"
                    alt="Logo"
                  />
                  <!-- <span class="display-4">School Name</span> -->
                </a>
                <p class="text-center m-b-40">MangoSTEEMS World</p>

                <p class="text-primary text-center">
                  {{ $t("e-mail") }}: {{ userEmail }}
                </p>
                <h5 class="sign-in-heading">
                  {{ $t("confirm-your-password") }}
                </h5>
                <ValidationProvider
                  rules="required|min:6"
                  v-slot="{ failed, errors }"
                  name="password"
                  vid="confirmation"
                >
                  <div class="form-group">
                    <label for="inputPassword" class="sr-only">{{
                      $t("password")
                    }}</label>
                    <input
                      type="password"
                      id="inputPassword"
                      class="form-control form-control-lg"
                      placeholder="Password must be at least 6 characters"
                      required=""
                      v-model="loginForm.password"
                    />
                    <span v-if="failed" class="text-danger">{{
                      errors[0]
                    }}</span>
                  </div>
                </ValidationProvider>
                <ValidationProvider
                  rules="required|confirmed:confirmation"
                  v-slot="{ failed, errors }"
                  name="confirm password"
                >
                  <div class="form-group">
                    <label for="inputPassword" class="sr-only">{{
                      $t("password")
                    }}</label>
                    <input
                      type="password"
                      id="inputPassword"
                      class="form-control form-control-lg"
                      placeholder="Enter your password again"
                      required=""
                      v-model="loginForm.confirmpw"
                    />
                    <span v-show="failed" class="text-danger">{{
                      errors[0]
                    }}</span>
                  </div>
                </ValidationProvider>
                <button
                  class="btn btn-primary btn-rounded btn-floating btn-lg btn-block m-t-40 m-b-20"
                  @click="resetPassword()"
                >
                  {{ $t("confirm-password") }}
                </button>
              </ValidationObserver>
            </div>
          </div>
        </div>
      </div>
      <div class="" v-if="loginShow === 'sendEmail'">
        <div class="sign-in-form">
          <div class="card">
            <div class="card-body">
              <a class="brand text-center d-block m-b-20 m-t-20">
                <img
                  v-lazy="require('../assets/img/upload/logo_dark.png')"
                  alt="Logo"
                />
                <!-- <span class="display-4">School Name</span> -->
              </a>
              <p class="text-center m-b-40">MangoSTEEMS World</p>
              <p class="display-4 text-center">
                <i class="zmdi zmdi-mail-send zmdi-hc-fw text-success"></i>
              </p>
              <h5 class="sign-in-heading text-center text-success">
                {{ $t("password-reset-email-sent") }}
              </h5>
              <p class="text-center">
                {{
                  $t(
                    "an-email-has-been-sent-to-your-email-please-follow-the-directions-in-the-email-to-reset-your-password"
                  )
                }}.
              </p>
              <button
                class="btn btn-primary btn-rounded btn-floating btn-lg btn-block m-t-40 m-b-20"
                @click="loginShow = 'login'"
              >
                {{ $t("ok") }}
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
          <small>{{ $t("privacy-policy") }}</small>
        </a>
        <a
          href="https://www.iubenda.com/privacy-policy/32601846/cookie-policy"
          class="iubenda-nostyle no-brand iubenda-embed mr-4"
          title="Cookie Policy "
        >
          <small>{{ $t("cookie-policy") }}</small></a
        >

        <a
          href="https://www.iubenda.com/terms-and-conditions/32601846"
          class="iubenda-nostyle no-brand iubenda-embed"
          title="Terms and Conditions "
          ><small>{{ $t("terms-and-conditions") }}</small></a
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

export default {
  name: "Login",

  data() {
    return {
      showErrorMessage: false,
      loginShow: "login",
      remember: false,
      loginForm: {
        email: "",
        password: "",
        confirmpw: "",
      },
      userEmail: "",
      ErrorMessage: "Your email or password is incorrect. please try again.",
    };
  },
  created() {
    console.log(process.env.VUE_APP_LMSD);
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
    let vm = this;
    if (this.$route.params.id !== undefined) {
      this.activateUser(this.$route.params.id);
      this.loginShow = "resetPassword";

      this.userEmail = this.$route.params.email;
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
            image: response.image,
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
      let vm = this;
      console.log(this.loginForm);
      this.$refs.resetForm.validate().then((success) => {
        if (success) {
          let obj = { password: this.loginForm.password };
          ApiConfirmPassword.post(this.$route.params.id, obj)
            .then((response) => {
              console.log(response);
              this.loginShow = "resetPasswordSuccess";
              vm.loginForm = {
                email: "",
                password: "",
                confirmpw: "",
              };
            })
            .catch((err) => {});
        }
      });
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

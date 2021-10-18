<template>
  <div class="loginbg pt-5" id="app">
    <div id="app" class="col-sm-12 row mx-0 pt-5  px-0">
      <div   class="col-sm-12 d-flex justify-content-center align-items-center" v-if="loginShow === 'login'">
        <div class="card">
          <div class="card-body login-bg-s">
            <a class="brand text-center d-block m-b-20 m-t-20">
              <img
                class="msu_logo"
                :src="require('../assets/msu_temp_logo.png')"
                alt="Logo"
              />
            </a>
            <!-- <p class="my-4 text-center text-white">iGroup LMS</p> -->
            <ValidationObserver ref="loginForm">
              <div id="login-Page">
                <h5 class="sign-in-heading text-white">
                  {{ $t("log-in-to-your-account") }}
                </h5>
                <ValidationProvider
                  rules="required"
                  v-slot="{ failed, errors }"
                  name="Account"
                >
                  <div class="mb-3">
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
                  <div class="mt-3">
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
                  <a
                    class="float-right blue pointer"
                    @click="loginShow = 'forgetPassword'"
                    >{{ $t("forgot-password") }}?</a
                  >
                </div>
                <button
                  class="
                    btn btn-primary btn-rounded btn-floating btn-md btn-block
                    m-t-40 m-b-20
                  "
                  @click="login()"
                >
                  {{ $t("log-in") }}
                </button>
              </div>
            </ValidationObserver>
            <div class=" col-sm-12">
              <div
                data-v-653f1d32=""
                class="col-sm-12 text-white d-flex justify-content-center"
                style="
                  text-shadow: rgba(0, 0, 0, 0.7) 0px 2px 4px;
                  font-size: 20px;
                  font-weight: 500;
                "
              >
                Teacher
              </div>
              <div  v-if="specialInfo !== null" 
              class="  text-white justify-content-center special-text col-sm-12" v-html="specialInfo"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- login reset pwd -->

      <div class="col-sm-12 d-flex justify-content-center align-items-center" v-if="loginShow === 'resetPasswordSuccess'">
        <div class="card">
          <div class="card-body login-bg-s">
            <a class="brand text-center d-block m-b-20 m-t-20">
              <img
                class="msu_logo"
                :src="require('../assets/msu_temp_logo.png')"
                alt="Logo"
              />
              <!-- <span class="display-4">School Name</span> -->
            </a>

            <p class="display-4 text-center">
              <i class="zmdi zmdi-check-circle zmdi-hc-fw text-success"></i>
            </p>
            <h5 class="sign-in-heading text-center text-success">
              {{ $t("password-reset-success") }}
            </h5>
            <p class="text-center text-white">
              {{
                $t(
                  "your-password-has-now-been-successfully-reset-please-use-this-new-password-to-log-in"
                )
              }}.
            </p>
            <button
              class="
                btn btn-primary btn-rounded btn-floating btn-md btn-block
                m-t-40 m-b-20
              "
              @click="loginShow = 'login'"
            >
              {{ $t("return-to-login") }}
            </button>
            <div class="d-flex justify-content-center">
              <div
                data-v-653f1d32=""
                class="text-white"
                style="
                  text-shadow: rgba(0, 0, 0, 0.7) 0px 2px 4px;
                  font-size: 20px;
                  font-weight: 500;
                "
              >
                Teacher
              </div>
              <div  v-if="specialInfo !== null" 
              class="  text-white justify-content-center special-text col-sm-12" v-html="specialInfo"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-12 d-flex justify-content-center align-items-center" v-if="loginShow === 'forgetPassword'">
        <div class="card">
          <div class="card-body login-bg-s">
            <a class="brand text-center d-block m-b-20 m-t-20">
              <img
                class="msu_logo"
                :src="require('../assets/msu_temp_logo.png')"
                alt="Logo"
              />
              <!-- <span class="display-4">School Name</span> -->
            </a>

            <div id="forget-password-page">
              <h5 class="sign-in-heading text-white">
                {{ $t("forgotten-password") }}?
              </h5>
              <p class="text-white">
                {{
                  $t("will-send-you-an-email-with-link-to-reset-your-password")
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
                class="
                  btn btn-primary btn-rounded btn-floating btn-md btn-block
                  m-t-40 m-b-20
                "
                @click="forgotPassword()"
              >
                {{ $t("send") }}
              </button>
              <div class="d-flex justify-content-center">
                <div
                  data-v-653f1d32=""
                  class="text-white"
                  style="
                    text-shadow: rgba(0, 0, 0, 0.7) 0px 2px 4px;
                    font-size: 20px;
                    font-weight: 500;
                  "
                >
                  Teacher
                </div>
                <div  v-if="specialInfo !== null" 
              class="  text-white justify-content-center special-text col-sm-12" v-html="specialInfo"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-12 d-flex justify-content-center align-items-center" v-if="loginShow === 'resetPassword'">
        <div class="card">
          <div class="card-body login-bg-s">
            <ValidationObserver ref="resetForm">
              <a class="brand text-center d-block m-b-20 m-t-20">
                <img
                  class="msu_logo"
                  :src="require('../assets/msu_temp_logo.png')"
                  alt="Logo"
                />
                <!-- <span class="display-4">School Name</span> -->
              </a>

              <p class="text-white text-center">
                {{ $t("e-mail") }}: {{ userEmail }}
              </p>
              <h5 class="sign-in-heading text-white">
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
                  <span v-if="failed" class="text-danger">{{ errors[0] }}</span>
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
                class="
                  btn btn-primary btn-rounded btn-floating btn-md btn-block
                  m-t-40 m-b-20
                "
                @click="resetPassword()"
              >
                {{ $t("confirm-password") }}
              </button>
            </ValidationObserver>
            <div class="d-flex justify-content-center">
              <div
                data-v-653f1d32=""
                class="text-white"
                style="
                  text-shadow: rgba(0, 0, 0, 0.7) 0px 2px 4px;
                  font-size: 20px;
                  font-weight: 500;
                "
              >
                Teacher
              </div>
              <div  v-if="specialInfo !== null" 
              class="  text-white justify-content-center special-text col-sm-12" v-html="specialInfo"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-12 d-flex justify-content-center align-items-center" v-if="loginShow === 'sendEmail'">
        <div class="card">
          <div class="card-body login-bg-s">
            <a class="brand text-center d-block m-b-20 m-t-20">
              <img
                class="msu_logo"
                :src="require('../assets/msu_temp_logo.png')"
                alt="Logo"
              />
              <!-- <span class="display-4">School Name</span> -->
            </a>
            <p class="display-4 text-center">
              <i class="zmdi zmdi-mail-send zmdi-hc-fw text-success"></i>
            </p>
            <h5 class="sign-in-heading text-center text-success">
              {{ $t("password-reset-email-sent") }}
            </h5>
            <p class="text-center text-white">
              {{
                $t(
                  "an-email-has-been-sent-to-your-email-please-follow-the-directions-in-the-email-to-reset-your-password"
                )
              }}.
            </p>
            <button
              class="
                btn btn-primary btn-rounded btn-floating btn-md btn-block
                m-t-40 m-b-20
              "
              @click="loginShow = 'login'"
            >
              {{ $t("ok") }}
            </button>
            <div class="d-flex justify-content-center">
              <div
                data-v-653f1d32=""
                class="text-white"
                style="
                  text-shadow: rgba(0, 0, 0, 0.7) 0px 2px 4px;
                  font-size: 20px;
                  font-weight: 500;
                "
              >
                Teacher
              </div>
              <div  v-if="specialInfo !== null" 
              class="  text-white justify-content-center special-text col-sm-12" v-html="specialInfo"></div>
            </div>
          </div>
        </div>
      </div>
      <div style="height:20px" class="d-flex col-sm-12 justify-content-end">
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
    <!-- login -->
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
  console.log(w.addEventListener);
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
      specialInfo:null
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
  watch: {
    // remember(){
    //   if(this.remember){
    //     localstorage.setitem('lmsAccount',this.loginForm.email)
    //   }else{
    //     localStorage.removeItem('lmsAccount')
    //   }
    // }
  },
  mounted() {
    let vm = this;
    if (this.$route.params.id !== undefined) {
      this.activateUser(this.$route.params.id);
      this.loginShow = "resetPassword";

      this.userEmail = this.$route.params.email;
    }
    if (process.env.VUE_APP_SpecialInfo !== undefined) {
      this.specialInfo = process.env.VUE_APP_SpecialInfo
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
// .bg-BETA {
//   background-color: #ff9100;
// }
.loginbg{

    -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height:100%;
    background-image: url("../assets/img/avatars/login page_background-01.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.beta_div {
  background-color: #f56523;
  border-radius: 5px;
  color: white;
  font-size: 10px;
  font-weight: 500;
  padding: 0px 4px;
  vertical-align: top;
}

.login-bg-s {

  background-image: url("../assets/img/avatars/bg-login-s.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 51% 34%;
  background-size: 54%;
  border-radius: 10px;
  width: 450px;
  height: 550px;
  box-shadow: 12px 12px 7px rgba(0, 0, 0, 0.5);
}
@media (max-width: 1920px) {
  .login-bg-s {
    background-image: url("../assets/img/avatars/bg-login-s.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: 56% 45%;
    background-size: 52%;
    border-radius: 10px;
    width: 450px;
  }
}
@media (max-width: 1367px) {
  .login-bg-s {
    background-image: url("../assets/img/avatars/bg-login-s.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: 51% 35%;
    background-size: 55%;
    border-radius: 10px;
    width: 450px;
  }
}
@media (max-width: 1200px) {
  .login-bg-s {
    background-image: url("../assets/img/avatars/bg-login-s.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: 51% 34%;
    background-size: 62%;
    border-radius: 10px;
    width: 450px;
  }
}


// .msu_logo {
//   // transform: scale(1.5);
//   width: 100%;
//   height: 100%;
// }
// @media (max-width: 1024px) {}
// @media (max-width: 860px) {}

.col-sm-12 d-flex justify-content-center align-items-center {
  margin: 12% auto 0;
}
.special-text {
  font-size: 12px;
}
.iubenda-embed{
  height:18px
}
.app{
  height:100%
}

</style>


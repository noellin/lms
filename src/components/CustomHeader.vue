<template>
  <div class="header">
    <nav class="top-toolbar navbar navbar-mobile navbar-tablet">
      <ul class="navbar-nav nav-left">
        <li class="nav-item">
          <a href="javascript:void(0)" data-toggle-state="aside-left-open">
            <i class="icon dripicons-align-left"></i>
          </a>
        </li>
      </ul>
      <ul class="navbar-nav nav-center site-logo">
        <li>
          <a @click="gotoLogin()">
            <!-- <span class="brand-text">{{ $t("school-name") }}</span> -->
          </a>
        </li>
      </ul>
      <ul class="navbar-nav nav-right">
        <li class="nav-item">
          <a href="javascript:void(0)" data-toggle-state="mobile-topbar-toggle">
            <i class="icon dripicons-dots-3 rotate-90"></i>
          </a>
        </li>
      </ul>
    </nav>
    <nav class="top-toolbar navbar navbar-desktop flex-nowrap">
      <ul class="navbar-nav nav-left">
        <div class="">
          <ul class="site-logo d-flex justify-content-start align-items-center">
            <li class="nav-item">
              <a @click="gotoLogin()" class="pointer">
                <!-- <div class="d-flex justify-content-center">
                <img
                  v-lazy="require('../assets/img/avatars/LMS_LOGO_new.png')"
                  alt="Logo"
                />
              </div> -->
                <div
                  class="logo d-flex align-items-center"
                  style="background-col"
                >
                  <img
                    :src="require('../assets/msu_temp_logo.png')"
                    alt=""
                    style="max-height: 100px; max-width: 212px; width: 290px height:100px"
                  />
                  <!-- <img
                    src="../assets/img/avatars/Group 2.png"
                    alt=""
                    style="max-height: 90px; max-width: 200px; width: 240px height:90px"
                  /> -->
                  <!-- style="max-height: 35px; max-width: 190px" -->
                </div>
              </a>
            </li>
            <!-- <div class="beta_div">BETA</div> -->
            <!-- <li class="nav-item"><span class="brand-text">School Name</span></li> -->
          </ul>
          <ul class="navbar-nav nav-left">
            <li
              class="nav-item nav-text"
              :class="[headerLabel === 'course' ? 'active' : '']"
            >
              <router-link class="" to="/course">
                <a> Home </a>
              </router-link>
            </li>
            <li
              v-if="userInfo.permit !== 'admin'"
              class="nav-item nav-text"
              :class="[
                headerLabel === 'collection' ? 'active' : '',
                userInfo.permit === 'admin' ? 'disabled' : '',
              ]"
            >
              <router-link class="" to="/collection">
                <a>{{ $t("my-library") }}</a>
              </router-link>
            </li>
            <li
              class="nav-item nav-text pointer"
              :class="[headerLabel === 'account' ? 'active' : '']"
              @click="gotoAccount()"
            >
              <!-- <router-link class="" to="/accountlist"> -->
              <a> {{ $t("my-account") }} </a>
              <!-- </router-link> -->
            </li>
          </ul>
        </div>
      </ul>
      <ul class="navbar-nav nav-right">
        <li class="nav-item dropdown">
          <a
            class="nav-link nav-pill user-avatar"
            data-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              :src="require('../assets/img/avatars/' + showImg + '.png')"
              class="w-40 rounded-circle avator-size"
              alt="Albert Einstein"
            />
            <!-- <span class="text-white">Amanda</span> -->
          </a>
          <div
            class="dropdown-menu dropdown-menu-right dropdown-menu-accout dropdown-menu-width"
          >
            <div class="dropdown-header pb-3">
              <h5 class="mt-0 mb-0">{{ userInfo.username }}</h5>
              <span class="admin-color" v-if="userInfo.permit === 'admin'"
                >Administrator</span
              >
              <br v-if="userInfo.permit === 'admin'" />
              <br v-if="userInfo.permit === 'admin'" />
              <span>{{ userInfo.email }}</span>
            </div>
            <a class="dropdown-item pointer" @click="gotoAccount()"
              ><i class="icon dripicons-user"></i> {{ $t("my-account") }}</a
            >
            <a
              class="dropdown-item pointer"
              data-toggle="modal"
              data-target="#langModal"
              ><i class="icon dripicons-web"></i> {{ $t("language") }}</a
            >
            <!-- <div class="d-flex align-items-center">
          <i class="fas fa-globe globe-size"></i>
        </div> -->
            <a class="dropdown-item pointer" @click="contactUs()"
              ><i class="icon dripicons-mail"></i>
              {{ $t("ask-mangosteems") }}</a
            >
            <a class="dropdown-item pointer" @click="logout()"
              ><i class="icon dripicons-lock-open"></i> {{ $t("log-out") }}</a
            >
          </div>
        </li>
      </ul>
    </nav>
    <div
      class="modal fade"
      id="langModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      data-modal="scroll"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              {{ $t("language-setting") }}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" class="zmdi zmdi-Cancel"></span>
            </button>
          </div>
          <div class="modal-body">
            <ul class="p-0">
              <li
                class="lang-li mb-3 pointer"
                @click="settingLang = 'en-US'"
                :class="{ 'text-primary': settingLang === 'en-US' }"
              >
                English
              </li>
              <!-- <li
                class="lang-li mb-3 pointer"
                @click="settingLang = 'zh-TW'"
                :class="{ 'text-primary': settingLang === 'zh-TW' }"
              >
                繁體中文 (Traditional Chinese)
              </li> -->
              <li
                class="lang-li mb-3 pointer"
                @click="settingLang = 'ja-JP'"
                :class="{ 'text-primary': settingLang === 'ja-JP' }"
              >
                Japanese
              </li>
            </ul>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-outline btn-rounded"
              data-dismiss="modal"
            >
              {{ $t("cancel") }}
            </button>
            <button
              type="button"
              class="btn btn-primary btn-rounded"
              data-dismiss="modal"
              @click="changeLang(settingLang)"
            >
              {{ $t("confirm") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CustomHeader",
  data() {
    return {
      // userInfo: {
      //   name: "Amanda",
      //   email: "support@authenticgoods.co",
      // },
      headerLabel: this.$route.meta.header,
      showImg: "teacher_men",
      settingLang: "111",
    };
  },
  created() {
    // ApiUserProfile.get().then((Response) => {
    //   this.userInfo.name = Response.record.username;
    //   this.userInfo.email = "support@authenticgoods.co";
    // });
  },
  mounted() {
    this.showImg = this.image_small;
    this.settingLang = this.userInfo.currentsLang;
    console.log(this.userInfo);
  },
  computed: {
    // langs() {
    //   return this.$store.state.commom.currentsLang;
    // },
    showPage() {
      return this.$route.name;
    },
    userInfo() {
      return this.$store.state.auth;
    },
    image_small() {
      return this.$store.state.auth.image_small;
    },
  },
  watch: {
    image_small() {
      this.showImg = this.image_small;
    },
  },
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang;
      this.$store.dispatch("auth/setLang", lang);
    },
    contactUs() {
      let url = "https://mangosteems.com/contact-us/";
      window.open(url, "_blank");
    },
    logout() {
      localStorage.clear();
      this.$router.push({ path: "/" });
    },
    gotoLogin() {
      this.$router.push({ path: "/course" }).catch(() => {});
    },
    gotoAccount() {
      if (this.userInfo.permit === "admin") {
        this.$router.push({ path: "/account" }).catch(() => {});
      } else {
        this.$router
          .push({ path: `/account/${this.userInfo.userid}` })
          .catch(() => {});
      }
    },
  },
};
</script>

<style scoped lang="scss">
.beta_div {
  background-color: #f56523;
  border-radius: 5px;
  color: white;
  font-size: 10px;
  font-weight: 500;
  padding: 0px 4px;
  vertical-align: top;
  z-index: 9999;
  position: fixed;
}

.avator-size {
  width: 40px;
  height: 40px;
}

.globe-size {
  font-size: 22px;
}

.dropdown-menu-width {
  width: 270px !important;
}

.admin-color {
  color: #eb7a77;
}
</style>
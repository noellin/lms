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
            <span class="brand-text">School Name</span>
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
          <ul class="site-logo">
            <li class="nav-item">
              <a @click="gotoLogin()" class="pointer">
                <div class="logo" style="background-col">
                  <img
                    src="../assets/img/avatars/MangoSTEEMS_logo.png"
                    alt=""
                    style="max-height: 40px; max-width: 190px"
                  />
                  <!-- style="max-height: 35px; max-width: 190px" -->
                </div>
              </a>
            </li>
            <!-- <li class="nav-item"><span class="brand-text">School Name</span></li> -->
          </ul>
          <ul class="navbar-nav nav-left">
            <li
              class="nav-item nav-text"
              :class="[headerLabel === 'course' ? 'active' : '']"
            >
              <router-link class="" to="/course">
                <a> {{ $t("course") }} </a>
              </router-link>
            </li>
            <li
              class="nav-item nav-text"
              :class="[
                headerLabel === 'collection' ? 'active' : '',
                userInfo.permit === 'admin' ? 'disabled' : '',
              ]"
            >
              <router-link class="" to="/collection">
                <a>{{ $t("my-collection") }}</a>
              </router-link>
            </li>
            <li
              class="nav-item nav-text pointer"
              :class="[headerLabel === 'account' ? 'active' : '']"
              @click="gotoAccount()"
            >
              <!-- <router-link class="" to="/accountlist"> -->
              <a> {{ $t("account") }} </a>
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
              src="../assets/img/avatars/teacher.png"
              class="w-40 rounded-circle"
              alt="Albert Einstein"
            />
            <!-- <span class="text-white">Amanda</span> -->
          </a>
          <div class="dropdown-menu dropdown-menu-right dropdown-menu-accout">
            <div class="dropdown-header pb-3">
              <h5 class="mt-0 mb-0">{{ userInfo.username }}</h5>
              <span>{{ userInfo.email }}</span>
            </div>
            <a class="dropdown-item pointer" @click="gotoAccount()"
              ><i class="icon dripicons-user"></i> {{ $t("my-account") }}</a
            >
            <a class="dropdown-item pointer" @click="contactUs()"
              ><i class="icon dripicons-mail"></i> {{ $t("contact-us") }}</a
            >
            <a class="dropdown-item pointer" @click="logout()"
              ><i class="icon dripicons-lock-open"></i> {{ $t("log-out") }}</a
            >
          </div>
        </li>
      </ul>
    </nav>
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
    };
  },
  created() {
    // ApiUserProfile.get().then((Response) => {
    //   this.userInfo.name = Response.record.username;
    //   this.userInfo.email = "support@authenticgoods.co";
    // });
  },
  mounted() {
    // console.log(this.userInfo);
  },
  computed: {
    showPage() {
      return this.$route.name;
    },
    userInfo() {
      return this.$store.state.auth;
    },
  },
  methods: {
    contactUs() {
      let url = "https://mangosteems.com/contact-us/";
      window.open(url, "_blank");
      // const windowRef = window.open(`mailto:windy@igroupnet.com`, "_blank");

      // windowRef.focus();

      // setTimeout(function () {
      //   if (!windowRef.document.hasFocus()) {
      //     windowRef.close();
      //   }
      // }, 500);
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
//@import '../assets/css/igroup.css';
</style>
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
                <div class="logo">
                  <img
                    src="../assets/img/avatars/logo_light.png"
                    alt=""
                    style="max-height: 35px; max-width: 190px"
                  />
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
                <a> Course </a>
              </router-link>
            </li>
            <li
              class="nav-item nav-text"
              :class="[headerLabel === 'collection' ? 'active' : '']"
            >
              <router-link class="" to="/collection">
                <a> Collection </a>
              </router-link>
            </li>
            <li
              class="nav-item nav-text pointer"
              :class="[headerLabel === 'account' ? 'active' : '']"
              @click="gotoAccount()"
            >
              <!-- <router-link class="" to="/accountlist"> -->
              <a> Account </a>
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
              src="../assets/img/avatars/user.png"
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
            <a class="dropdown-item" href="teacher-account-personal.html"
              ><i class="icon dripicons-user"></i> My account</a
            >
            <a class="dropdown-item" @click="logout()"
              ><i class="icon dripicons-lock-open"></i> Log Out</a
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
  mounted() {},
  computed: {
    showPage() {
      return this.$route.name;
    },
    userInfo() {
      return this.$store.state.auth;
    },
  },
  methods: {
    logout() {
      this.$router.push({ path: "/" });
    },
    gotoLogin() {
      this.$router.push({ path: "/course" });
    },
    gotoAccount() {
      if (this.userInfo.permit === "admin") {
        this.$router.push({ path: "/account" }).catch(() => {});
      } else {
        this.$router.push({ path: `/account/${this.userInfo.userid}` });
      }
    },
  },
};
</script>

<style scoped lang="scss">
//@import '../assets/css/igroup.css';
</style>
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
          <a href="course-list.html">
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
              <a href="course-list.html">
                <div class="logo">
                  <img
                    src="../assets/img/avatars/logo_light.png"
                    alt=""
                    style="max-height: 35px; max-width: 190px;"
                  />
                </div>
              </a>
            </li>
            <!-- <li class="nav-item"><span class="brand-text">School Name</span></li> -->
          </ul>
          <ul class="navbar-nav nav-left">
            <li
              class="nav-item nav-text"
              :class="[showpage === 'course' ? 'active' : '']"
              @click="showpage = 'course'"
            >
              <router-link class="" to="/course">
                <a>
                  Course
                </a>
              </router-link>
            </li>
            <li
              class="nav-item nav-text"
              :class="[showpage === 'collection' ? 'active' : '']"
              @click="showpage = 'collection'"
            >
              <router-link class="" to="/collection">
                <a>
                  Collection
                </a>
              </router-link>
            </li>
            <li
              class="nav-item nav-text"
              :class="[showpage === 'account' ? 'active' : '']"
              @click="showpage = 'account'"
            >
              <router-link class="" to="/account">
                <a>
                  Account
                </a>
              </router-link>
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
              <h5 class="mt-0 mb-0">{{ userInfo.name }}</h5>
              <span>{{ userInfo.email }}</span>
            </div>
            <a class="dropdown-item" href="teacher-account-personal.html"
              ><i class="icon dripicons-user"></i> My account</a
            >
            <a class="dropdown-item" href="#"
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
  name: "Course",
  data() {
    return {
      userInfo: {
        name: "Amanda",
        email: "support@authenticgoods.co",
      },
      showpage: "course",
    };
  },

  methods: {},
};
</script>

<style scoped lang="scss">
//@import '../assets/css/igroup.css';
</style>
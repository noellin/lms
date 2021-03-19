<template>
  <div id="app3">
    <!-- END MENU SIDEBAR WRAPPER -->
    <div class="">
      <!-- TOP TOOLBAR WRAPPER -->
      <custom-header></custom-header>
      <!-- END TOP TOOLBAR WRAPPER -->
      <div class="content">
        <header class="page-header">
          <div class="d-flex align-items-center">
            <!-- <div class="mt-2 mr-3">
              <a
                @click="$back"
                class="btn-rounded-icon btn-primary ml-2 pointer"
                ><i class="zmdi zmdi-arrow-left zmdi-hc-fw text-white"></i
              ></a>
            </div> -->
            <div class="mr-auto">
              <h1>{{ $t("account") }}</h1>
            </div>
          </div>
        </header>
        <section class="page-content container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <div class="profile-card">
                    <div class="row">
                      <div class="col-4">
                        <div
                          class="thumb-lg member-thumb m-b-10 center-block container"
                        >
                          <img
                            :src="
                              require('../assets/img/avatars/' +
                                showImg +
                                '.png')
                            "
                            class="w-200 rounded-circle img-thumbnail"
                            alt="profile-image"
                          />
                          <div
                            class="overlay rounded-circle img-thumbnail w-200 pointer"
                            data-toggle="modal"
                            data-target="#ChangeImgModal"
                          >
                            <a href="#" class="icon" title="User Profile">
                              <i class="fa fa-edit edit-size"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <!--information-->
                      <div class="col-8" v-if="accountShow === 'information'">
                        <h5 class="m-b-4 p-t-30">
                          {{ $t("account-information") }}
                        </h5>
                        <ul class="list-reset text-left m-t-20 m-b-30">
                          <li class="text-muted">
                            <strong>{{ $t("name") }}:</strong>
                            <span class="m-l-15">{{
                              accountInfo.username
                            }}</span>
                          </li>
                          <li class="text-muted">
                            <strong>{{ $t("email") }}:</strong>
                            <span class="m-l-15">{{ accountInfo.email }}</span>
                          </li>
                          <li class="text-muted">
                            <strong>{{ $t("course") }}:</strong>
                            <span class="m-l-15">
                              <span
                                v-for="(course, i) in courseList"
                                :key="course.courseid"
                                >{{ course.course_name }}
                                <span v-if="i + 1 !== courseList.length"
                                  >,
                                </span>
                              </span>
                            </span>
                          </li>
                        </ul>
                        <div class="form-group row" v-if="permit === 'admin'">
                          <div class="switch">
                            <input
                              class="tgl tgl-light tgl-success"
                              id="cb8"
                              type="checkbox"
                              checked
                              v-model="accountStatus"
                              @click="setAccountStatus"
                            />
                            <label class="tgl-btn" for="cb8"></label>
                          </div>
                          <div class="col">
                            <span
                              class="text-success mt-1"
                              v-if="accountStatus"
                              >{{ $t("active") }}</span
                            >
                            <span v-else class="text-danger mt-1">{{
                              $t("disable")
                            }}</span>
                          </div>
                        </div>
                        <!-- v-if="permit === 'teacher'" -->
                        <div v-if="permit === 'teacher'">
                          <a
                            @click="accountShow = 'edit'"
                            class="btn btn-primary btn-rounded mr-2"
                            >{{ $t("edit") }}</a
                          >
                          <button
                            type="button"
                            class="btn btn-accent btn-rounded"
                            data-toggle="modal"
                            data-target="#ResetPasswordModal"
                          >
                            {{ $t("reset-password") }}
                          </button>
                        </div>
                      </div>
                      <!--information end-->
                      <!--edit page-->
                      <div class="col-8" v-if="accountShow === 'edit'">
                        <h5 class="m-b-4 p-t-30">
                          {{ $t("account-information") }}
                        </h5>
                        <div class="form-group row m-t-20">
                          <label class="w-75 pl-3 col-form-label text-right"
                            >{{ $t("name") }}：</label
                          >
                          <div class="col-10">
                            <input
                              type="email"
                              class="form-control"
                              placeholder=""
                              value="Amanda"
                              v-model="accountInfo.username"
                            />
                          </div>
                        </div>
                        <div class="form-group row m-b-30">
                          <label class="w-75 pl-3 col-form-label text-right"
                            >{{ $t("email") }}：</label
                          >
                          <div class="col-10">
                            <input
                              type="email"
                              class="form-control"
                              placeholder=""
                              :value="accountInfo.email"
                              disabled
                            />
                          </div>
                        </div>
                        <button
                          @click="accountShow = 'information'"
                          type="button"
                          class="btn btn-secondary btn-outline btn-rounded mr-2"
                        >
                          {{ $t("cancel") }}
                        </button>
                        <button
                          @click="setAccountInfo()"
                          type="button"
                          class="btn btn-primary btn-rounded"
                        >
                          {{ $t("save") }}
                        </button>
                      </div>
                      <!--edit page end-->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <!-- <footer class="bg-secondary bg-dk d-flex justify-content-center">
        <p class="text-light mt-2 mb-2">© iGroup LMS</p>
      </footer> -->
    </div>
    <!-- Reset Password MODAL -->
    <div
      class="modal fade"
      id="ResetPasswordModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ $t("reset-password") }}</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" class="zmdi zmdi-close"></span>
            </button>
          </div>
          <ValidationObserver ref="resetForm">
            <div class="modal-body">
              <form>
                <ValidationProvider
                  rules="required|min:6"
                  v-slot="{ failed, errors }"
                  name="Current password"
                >
                  <div class="form-group row">
                    <label class="control-label text-right col-4">{{
                      $t("current-password")
                    }}</label>

                    <div class="col-8">
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Enter your current password"
                        value=""
                        :class="{ 'is-invalid': failed }"
                        v-model="tempPwdInfo.oldpw"
                      />
                      <span v-if="failed" class="text-danger">{{
                        errors[0]
                      }}</span>
                    </div>

                    <div class="invalid-feedback">
                      {{ $t("current-password-is-incorrect") }}
                    </div>
                  </div>
                </ValidationProvider>
                <ValidationProvider
                  rules="required"
                  v-slot="{ failed, errors }"
                  name="New password"
                  vid="confirmation"
                >
                  <div class="form-group row">
                    <label class="control-label text-right col-4">{{
                      $t("new-password")
                    }}</label>
                    <div class="col-8">
                      <input
                        type="password"
                        class="form-control is-invalid"
                        placeholder="Password must be at least 6 characters"
                        value=""
                        :class="{ 'is-invalid': failed }"
                        v-model="tempPwdInfo.newpw"
                      />
                      <span v-if="failed" class="text-danger">{{
                        errors[0]
                      }}</span>
                    </div>

                    <div class="invalid-feedback">
                      {{ $t("passwords-are-inconsistent") }}.
                    </div>
                  </div>
                </ValidationProvider>
                <ValidationProvider
                  rules="required|confirmed:confirmation"
                  v-slot="{ failed, errors }"
                  name="Confirm password"
                >
                  <div class="form-group row">
                    <label class="control-label text-right col-4">{{
                      $t("confirm-password")
                    }}</label>

                    <div class="col-8">
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Enter your password again"
                        value=""
                        v-model="tempPwdInfo.confirmpw"
                      />
                      <span v-if="failed" class="text-danger">{{
                        errors[0]
                      }}</span>
                    </div>
                  </div>
                </ValidationProvider>
              </form>
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
                type="submit"
                class="btn btn-accent btn-rounded"
                @click="setAccountPWD"
              >
                {{ $t("reset") }}
              </button>
              <!-- 
                data-dismiss="modal"
                data-toggle="modal"
                data-target="#PasswordResetSuccessModal" -->
            </div>
          </ValidationObserver>
        </div>
      </div>
    </div>
    <!-- Password Reset Success Modal -->
    <div
      class="modal modal-top-frame fade"
      id="PasswordResetSuccessModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div
          v-if="resetpwStatus"
          class="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          {{ $t("your-password-has-now-been-successfully-reset") }}
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true" class="la la-close"></span>
          </button>
        </div>
        <div
          v-else
          class="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <span>{{ $t("error") }}：</span>{{ errorMessage }}.
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true" class="la la-close"></span>
          </button>
        </div>
      </div>
    </div>
    <!-- Edit img MODAL -->
    <div
      class="modal fade"
      id="ChangeImgModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              {{ $t("change-user-avatar") }}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" class="zmdi zmdi-close"></span>
            </button>
          </div>
          <div class="modal-body pb-4">
            <h5>{{ $t("choose-your-avatar") }}</h5>
            <div class="justify-content-start">
              <div class="d-flex">
                <img
                  src="../assets/img/avatars/teacher_men.png"
                  class="w-200 rounded-circle img-thumbnail mr-5 pointer bchover-blue"
                  :class="chooseimg === '1' ? 'bc-blue' : ''"
                  alt="profile-image"
                  @click="chooseimg = '1'"
                />
                <img
                  src="../assets/img/avatars/teacher_women.png"
                  class="w-200 rounded-circle img-thumbnail pointer bchover-blue"
                  :class="chooseimg === '2' ? 'bc-blue' : ''"
                  alt="profile-image"
                  @click="chooseimg = '2'"
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-outline btn-rounded"
              data-dismiss="modal"
            >
              {{ $t("close") }}
            </button>
            <button
              type="button"
              class="btn btn-primary btn-rounded"
              @click="changeAvatar()"
              data-dismiss="modal"
            >
              {{ $t("save-changes") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CustomHeader from "../components/CustomHeader";
// import MenuLeft from "../components/MenuLeft";
import {
  ApiGetAccountInfo,
  ApiSetAccountStatus,
  ApiSetAccountInfo,
  ApiSetAccountPWD,
  ApiChangeAvatar,
} from "../http/apis/Account";
import { ApiGetActiveCourseList } from "../http/apis/CourseList";
import $ from "jquery";
export default {
  name: "AccountDetail",
  components: {
    CustomHeader,
  },
  data() {
    return {
      // user: "teacher",
      accountShow: "information",
      accountInfo: {},
      accountStatus: false,
      tempPwdInfo: {
        oldpw: "",
        newpw: "",
        confirmpw: "",
      },
      resetpwStatus: false,
      errorMessage: "",
      courseList: [],
      chooseimg: "0",
      showImg: "teacher_men",
    };
  },
  mounted() {
    // this.getAccountInfo();
    this.init();
    this.chooseimg = this.image;
    console.log(this.image_big);
    this.showImg = this.image_big;
  },
  computed: {
    image() {
      return this.$store.state.auth.image;
    },
    userid() {
      return this.$store.state.auth.userid;
    },
    permit() {
      return this.$store.state.auth.permit;
    },
    image_big() {
      console.log("cm ");
      return this.$store.state.auth.image_big;
    },
  },
  watch: {
    image_big() {
      this.showImg = this.image_big;
    },
    image() {
      this.chooseimg = this.image;
    },
  },
  methods: {
    init() {
      this.$store.dispatch("common/setLoading", true);
      this.axios
        .all([this.getAccountInfo(), this.getActiveCourseList()])
        .then((response) => {
          setTimeout(() => {
            this.$store.dispatch("common/setLoading", false);
          }, 400);
        });
    },
    async changeAvatar() {
      let result = await ApiChangeAvatar.get(this.chooseimg)
        .then((response) => {
          if (response.status === "success") {
            return true;
          }
        })
        .catch((err) => {});
      if (result) {
        console.log("update");
        this.$store.dispatch("auth/setImg", this.chooseimg);
      }
    },
    getActiveCourseList(teacherid = "") {
      // this.course.activeCourseList = [];
      ApiGetActiveCourseList.get(
        this.permit,
        this.userid,
        this.$route.params.uid
      ).then((response) => {
        this.courseList = response.record;
      });
    },
    getAccountInfo() {
      ApiGetAccountInfo.get(this.$route.params.uid)
        .then((response) => {
          if (response.record.status === "enable") {
            this.accountStatus = true;
          } else {
            this.accountStatus = false;
          }
          this.accountInfo = response.record;
        })
        .catch((err) => {});
    },
    setAccountInfo() {
      let vm = this;
      ApiSetAccountInfo.post(this.userid, this.accountInfo)
        .then((response) => {
          if (response.status === "success") {
            vm.$store.dispatch("auth/updateUserInfo", this.accountInfo);
            vm.$bus.$emit("messsage:push", "update success", "success");
            vm.accountShow = "information";
          }
        })
        .catch((err) => {});
    },
    setAccountPWD() {
      this.$refs.resetForm.validate().then((success) => {
        if (success) {
          ApiSetAccountPWD.post(this.userid, this.tempPwdInfo)
            .then((response) => {
              console.log(response);
              if (response.status === "success") {
                this.resetpwStatus = true;
                $("#ResetPasswordModal").modal("hide");
                $("#PasswordResetSuccessModal").modal("show");
              } else {
                this.resetpwStatus = false;
                this.errorMessage = response.record;
                $("#ResetPasswordModal").modal("hide");
                $("#PasswordResetSuccessModal").modal("show");
              }
            })
            .catch((err) => {});
          // 證成功後的行為包含 AJAX傳送、重製表單等等
        } else {
          // 驗證失敗產生的行為
        }
      });
    },
    setAccountStatus() {
      let status = "disable";
      if (this.accountStatus) {
        status = "enable";
      }
      ApiSetAccountStatus.get(this.userid, status)
        .then((response) => {})
        .catch((err) => {});
    },
  },
};
</script>

<style scoped lang="scss">
a:not([href]):not([tabindex]) {
  color: rgba(255, 255, 255, 0.9) !important;
}

/* Container needed to position the overlay. Adjust the width as needed */
.container {
  position: relative;
  width: 100%;
  max-width: 400px;
}

/* Make the image to responsive */
.image {
  width: 100%;
  height: auto;
}

/* The overlay effect (full height and width) - lays on top of the container and over the image */
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 14px;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.3s ease;
  background-color: white;
}

/* When you mouse over the container, fade in the overlay icon*/
.container:hover .overlay {
  opacity: 1;
}

/* The icon inside the overlay is positioned in the middle vertically and horizontally */
.icon {
  color: white;

  font-size: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

/* When you move the mouse over the icon, change color */
.fa-user:hover {
  color: #eee;
}

//
.edit-size {
  font-size: 48px;
}

.bc-blue {
  border: 3px solid #32c1db;
}
.bchover-blue:hover {
  border: 3px solid #32c1db;
}
//@import '../assets/css/igroup.css';
</style>
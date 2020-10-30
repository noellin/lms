<template>
  <div id="app">
    <!-- END MENU SIDEBAR WRAPPER -->
    <div class="content-wrapper">
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
              <h1>Account</h1>
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
                      <div class="col-4 text-center">
                        <div class="thumb-lg member-thumb m-b-10 center-block">
                          <img
                            src="../assets/img/avatars/user.png"
                            class="w-200 rounded-circle img-thumbnail"
                            alt="profile-image"
                          />
                        </div>
                      </div>
                      <!--information-->
                      <div class="col-8" v-if="accountShow === 'information'">
                        <h5 class="m-b-4 p-t-30">Account information</h5>
                        <ul class="list-reset text-left m-t-20 m-b-30">
                          <li class="text-muted">
                            <strong>Name:</strong>
                            <span class="m-l-15">{{
                              accountInfo.username
                            }}</span>
                          </li>
                          <li class="text-muted">
                            <strong>Email:</strong>
                            <span class="m-l-15">{{ accountInfo.email }}</span>
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
                            <span class="text-success mt-1">Active</span>
                          </div>
                        </div>
                        <!-- v-if="permit === 'teacher'" -->
                        <div v-if="permit === 'teacher'">
                          <a
                            @click="accountShow = 'edit'"
                            class="btn btn-primary btn-rounded mr-2"
                            >Edit</a
                          >
                          <button
                            type="button"
                            class="btn btn-accent btn-rounded"
                            data-toggle="modal"
                            data-target="#ResetPasswordModal"
                          >
                            Reset password
                          </button>
                        </div>
                      </div>
                      <!--information end-->
                      <!--edit page-->
                      <div class="col-8" v-if="accountShow === 'edit'">
                        <h5 class="m-b-4 p-t-30">Account information</h5>
                        <div class="form-group row m-t-20">
                          <label class="w-75 pl-3 col-form-label text-right"
                            >Name：</label
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
                            >Email：</label
                          >
                          <div class="col-10">
                            <input
                              type="email"
                              class="form-control"
                              placeholder="col-form-label"
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
                          Cancel
                        </button>
                        <button
                          @click="setAccountInfo()"
                          type="button"
                          class="btn btn-primary btn-rounded"
                        >
                          Save
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
      <footer class="bg-secondary bg-dk d-flex justify-content-center">
        <p class="text-light mt-2 mb-2">© iGroup LMS</p>
      </footer>
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
            <h5 class="modal-title">Reset password</h5>
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
                  rules="required"
                  v-slot="{ failed, errors }"
                  name="Current password"
                >
                  <div class="form-group row">
                    <label class="control-label text-right col-4"
                      >Current password</label
                    >

                    <div class="col-8">
                      <input
                        type="text"
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
                      Current password is incorrect.
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
                    <label class="control-label text-right col-4"
                      >New password</label
                    >
                    <div class="col-8">
                      <input
                        type="text"
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
                      Passwords are inconsistent.
                    </div>
                  </div>
                </ValidationProvider>
                <ValidationProvider
                  rules="required|confirmed:confirmation"
                  v-slot="{ failed, errors }"
                  name="Confirm password"
                >
                  <div class="form-group row">
                    <label class="control-label text-right col-4"
                      >Confirm password</label
                    >

                    <div class="col-8">
                      <input
                        type="text"
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
                Cancel
              </button>
              <button
                type="submit"
                class="btn btn-accent btn-rounded"
                @click="setAccountPWD"
              >
                Reset
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
          Your password has now been successfully reset.
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
          <span>Error：</span>{{ errorMessage }}.
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
} from "../http/apis/Account";
import $ from "jquery";
export default {
  name: "SpeakingQuiz",
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
    };
  },
  mounted() {
    this.getAccountInfo();
  },
  computed: {
    userid() {
      return this.$store.state.auth.userid;
    },
    permit() {
      return this.$store.state.auth.permit;
    },
  },
  methods: {
    getAccountInfo() {
      ApiGetAccountInfo.get(this.$route.params.uid)
        .then((response) => {
          this.accountInfo = response.record;
        })
        .catch((err) => {});
    },
    setAccountInfo() {
      ApiSetAccountInfo.post(this.userid, this.accountInfo)
        .then((response) => {})
        .catch((err) => {});
    },
    setAccountPWD() {
      this.$refs.resetForm.validate().then((success) => {
        if (success) {
          ApiSetAccountPWD.post(this.userid, this.tempPwdInfo)
            .then((response) => {
              if (response.satus === "success") {
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
          console.log("not ok");
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
//@import '../assets/css/igroup.css';
</style>
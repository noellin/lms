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
            <div class="mr-auto">
              <h1>{{ $t("account") }}</h1>
            </div>
          </div>
        </header>
        <section
          class="page-content container-fluid pb-0"
          v-if="userInfo.permit === 'admin'"
        >
          <h1>My account</h1>
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <table class="table table-striped" style="width: 100%">
                    <thead>
                      <tr>
                        <th>{{ $t("my-name") }}</th>
                        <th>{{ $t("my-e-mail") }}</th>
                        <th>{{ $t("edit") }}</th>
                        <!-- <th>{{$t('my-status')}}</th> -->
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a
                            data-toggle="modal"
                            data-target="#changeInfo"
                            class="pointer"
                            @click="accountInfo.username = userInfo.username"
                          >
                            <img
                              v-if="userInfo.image === '1'"
                              :src="
                                require('../assets/img/avatars/teacher_men.png')
                              "
                              class="w-40 rounded-circle mr-3"
                              alt="Albert Einstein" />
                            <img
                              v-if="userInfo.image === '2'"
                              :src="
                                require('../assets/img/avatars/teacher_women.png')
                              "
                              class="w-40 rounded-circle mr-3"
                              alt="Albert Einstein" />
                            {{ userInfo.username
                            }}<i class="fas fa-edit ml-2 text-primary"></i
                          ></a>
                        </td>
                        <td>{{ userInfo.email }}</td>
                        <td>
                          <!-- <button
                            class="btn btn-primary btn-rounded mr-2"
                            data-toggle="modal"
                            data-target="#changeInfo"
                          >
                            {{$t('edit-profile')}}
                          </button> -->
                          <button
                            type="button"
                            class="btn btn-accent btn-rounded"
                            data-toggle="modal"
                            data-target="#ResetPasswordModal"
                          >
                            {{ $t("reset-password") }}
                          </button>
                        </td>
                        <!-- <td>
                          <span
                            class="text-success"
                            v-if="ac.status === 'enable'"
                            >{{ $t("active") }}</span
                          >
                          <span class="text-danger" v-else>{{
                            $t("suspended")
                          }}</span>
                        </td> -->
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="page-content container-fluid pt-0">
          <h1>Teacher List</h1>
          <div class="d-flex justify-content-between mb-3">
            <div class="form-group form-rounded mb-0">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search..."
                  v-model="searchAccountName"
                  @keyup.enter="searchAccount()"
                />
                <div class="input-group-append">
                  <div
                    class="btn btn-secondary btn-outline btn-icon btn-rounded"
                    type="button"
                    @click="searchAccount()"
                  >
                    <i class="zmdi zmdi-search text-secondary"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-right">
              <button
                type="button"
                class="btn btn-primary btn-outline btn-rounded"
                data-toggle="modal"
                data-target="#AddTeacherModal"
              >
                <i class="la la-plus"></i>{{ $t("add-teacher") }}
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <!-- No courses -->
                  <!--   <div class="bg-secondary text-center p-15 text-light rounded">
                                             No courses
                                        </div> -->
                  <!-- end No courses -->
                  <!-- id="bs4-table" -->
                  <table class="table table-striped" style="width: 100%">
                    <thead>
                      <tr>
                        <th>{{ $t("name") }}</th>
                        <th>{{ $t("e-mail") }}</th>
                        <th>{{ $t("status") }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="ac in accountList" :key="ac.userid">
                        <td>
                          <a
                            @click="gotoAccountDetail(ac.userid)"
                            class="pointer"
                          >
                            <img
                              v-if="ac.image === '1'"
                              :src="
                                require('../assets/img/avatars/teacher_men.png')
                              "
                              class="w-40 rounded-circle mr-3"
                              alt="Albert Einstein"
                            />
                            <img
                              v-if="ac.image === '2'"
                              :src="
                                require('../assets/img/avatars/teacher_women.png')
                              "
                              class="w-40 rounded-circle mr-3"
                              alt="Albert Einstein"
                            />
                            {{ ac.username }}</a
                          >
                        </td>
                        <td>{{ ac.email }}</td>
                        <td>
                          <span
                            class="text-success"
                            v-if="ac.status === 'enable'"
                            >{{ $t("active") }}</span
                          >
                          <span class="text-danger" v-else>{{
                            $t("suspended")
                          }}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="col-12">
                    <!-- <div
                      class="dataTables_paginate paging_simple_numbers"
                      id="recent-transaction-table_paginate"
                    >
                      <ul class="pagination d-flex justify-content-end">
                        <li
                          class="paginate_button page-item previous disabled"
                          id="recent-transaction-table_previous"
                        >
                          <a
                            href="#"
                            aria-controls="recent-transaction-table"
                            data-dt-idx="0"
                            tabindex="0"
                            class="page-link"
                            >Prev</a
                          >
                        </li>
                        <li class="paginate_button page-item active">
                          <a
                            href="#"
                            aria-controls="recent-transaction-table"
                            data-dt-idx="1"
                            tabindex="0"
                            class="page-link"
                            >1</a
                          >
                        </li>
                        <li class="paginate_button page-item">
                          <a
                            href="#"
                            aria-controls="recent-transaction-table"
                            data-dt-idx="2"
                            tabindex="0"
                            class="page-link"
                            >2</a
                          >
                        </li>
                        <li class="paginate_button page-item">
                          <a
                            href="#"
                            aria-controls="recent-transaction-table"
                            data-dt-idx="3"
                            tabindex="0"
                            class="page-link"
                            >3</a
                          >
                        </li>
                        <li
                          class="paginate_button page-item next"
                          id="recent-transaction-table_next"
                        >
                          <a
                            href="#"
                            aria-controls="recent-transaction-table"
                            data-dt-idx="4"
                            tabindex="0"
                            class="page-link"
                            >Next</a
                          >
                        </li>
                      </ul>
                    </div> -->
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
    <!-- END CONTENT WRAPPER -->
    <!-- Add teacher Modal-->
    <div
      class="modal fade"
      id="AddTeacherModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ $t("add-teacher") }}</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" class="zmdi zmdi-close"></span>
            </button>
          </div>
          <div class="modal-body">
            <h4 class="text-center mb-4 mt-2">{{ $t("add-teacher") }}</h4>
            <p>
              {{
                $t(
                  "enter-teachers-information-and-invite-teacher-to-register-account"
                )
              }}
            </p>
            <form>
              <ValidationObserver ref="accountForm">
                <ValidationProvider
                  rules="required"
                  v-slot="{ failed, errors }"
                  name="Name"
                >
                  <div class="form-group row">
                    <label class="control-label text-right col-3">{{
                      $t("name")
                    }}</label>
                    <div class="col-9">
                      <input
                        type="text"
                        class="form-control"
                        placeholder=" Enter teacher's name"
                        value=""
                        v-model="tempAccount.username"
                      />
                    </div>
                    <span class="col-3"></span>
                    <span v-if="failed" class="text-danger col-9">
                      {{ errors[0] }}
                    </span>
                  </div>
                </ValidationProvider>
                <ValidationProvider
                  rules="required"
                  v-slot="{ failed, errors }"
                  name="E-mail"
                >
                  <div class="form-group row">
                    <label class="control-label text-right col-3">{{
                      $t("e-mail")
                    }}</label>
                    <div class="col-9">
                      <input
                        type="email"
                        class="form-control is-invalid"
                        placeholder=" Enter teacher's E-mail"
                        value=""
                        v-model="tempAccount.email"
                      />
                    </div>
                    <span class="col-3"></span>
                    <span v-if="failed" class="text-danger col-9">{{
                      errors[0]
                    }}</span>
                  </div>
                </ValidationProvider>
              </ValidationObserver>
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
              type="button"
              class="btn btn-primary btn-rounded"
              data-dismiss="modal"
              data-toggle="modal"
              @click="sendInviteMail()"
            >
              {{ $t("invite") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Invite Email Sent Modal -->
    <div
      class="modal modal-top-frame fade"
      id="InviteEmailSentModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div
          class="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          {{ $t("an-email-has-been-sent-to-teachers-email") }}
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
    <!--  -->
    <!-- Edit img MODAL -->
    <div
      class="modal fade"
      id="changeInfo"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              {{ $t("edit-profile") }}
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
            <div class="form-group row m-t-20">
              <label class="w-75 pl-3 col-form-label text-right"
                >{{ $t("name") }}：</label
              >
              <div class="col-10">
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  value=""
                  v-model="accountInfo.username"
                />
              </div>
            </div>
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
              @click="changeInfo()"
              data-dismiss="modal"
            >
              {{ $t("save-changes") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>
<script>
import { createLogger } from "vuex";

// import CustomHeader from "../components/CustomHeader";
import {
  ApiGetAccoutList,
  ApiSearchAccount,
  ApiSendInviteMail,
  ApiSetAccountInfo,
  ApiSetAccountPWD,
  ApiChangeAvatar,
} from "../http/apis/Account";
export default {
  name: "Account",
  components: {
    CustomHeader: () => import("@/components/CustomHeader.vue"),
  },
  data() {
    return {
      accountList: [],
      searchAccountName: "",
      accountInfo: {
        username: "",
        image: "0",
      },
      tempAccount: {
        username: "",
        email: "",
      },
      tempPwdInfo: {
        oldpw: "",
        newpw: "",
        confirmpw: "",
      },
      chooseimg: "0",
      accountShow: "information",
    };
  },
  computed: {
    image() {
      return this.$store.state.auth.image;
    },
    userid() {
      return this.$store.state.auth.userid;
    },
    userInfo() {
      return this.$store.state.auth;
    },
  },
  mounted() {
    this.chooseimg = this.image;
    this.getAccoutList();
  },
  methods: {
    changeInfo() {
      // 改變頭像
      if (this.chooseimg !== this.userInfo.image) {
        this.changeAvatar();
      }
      // 改變個資
      if (this.accountInfo.username !== this.userInfo.username) {
        this.setAccountInfo();
      }
    },
    setAccountInfo() {
      console.log("change profile");
      let vm = this;
      this.accountInfo.image = this.chooseimg;
      ApiSetAccountInfo.post(this.userid, this.accountInfo)
        .then((response) => {
          console.log(response);
          if (response.status === "success") {
            vm.$store.dispatch("auth/updateUserInfo", this.accountInfo);
            vm.$bus.$emit("messsage:push", "update success", "success");
            vm.accountShow = "information";
          }
        })
        .catch((err) => {});
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
    async checkValid() {
      return this.$refs.accountForm.validate();
    },
    getAccoutList() {
      ApiGetAccoutList.get()
        .then((response) => {
          this.accountList = response.record;
        })
        .catch((err) => {});
    },
    async sendInviteMail() {
      let check = await this.checkValid();
      console.log(check);
      if (check) {
        ApiSendInviteMail.post(this.tempAccount)
          .then((response) => {
            console.log("api response = ", response);
            if (response.status === "success") {
              this.$bus.$emit(
                "messsage:push",
                "An email has been sent to teacher's email.",
                "success"
              );
              // $("#InviteEmailSentModal").modal("show");
            }
          })
          .catch((err) => {});
      } else {
        this.$bus.$emit(
          "messsage:push",
          "Wrong field content, please enter valid content",
          "danger"
        );
      }
    },
    searchAccount() {
      let keyword = this.searchAccountName;
      if (this.searchAccountName === "") {
        keyword = "*";
      }
      ApiSearchAccount.get(keyword)
        .then((response) => {
          this.accountList = response.record;
        })
        .catch((err) => {});
    },
    gotoAccountDetail(uid) {
      this.$router.push({ path: `/account/${uid}` });
    },
  },
};
</script>

<style scoped lang="scss">
a:not([href]):not([tabindex]) {
  text-decoration: none;
  color: #32c1db !important;
}
</style>
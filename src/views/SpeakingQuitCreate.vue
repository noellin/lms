<template>
  <div id="app2">
    <!-- END MENU SIDEBAR WRAPPER -->
    <div class="main-content">
      <!-- TOP TOOLBAR WRAPPER -->
      <!-- <custom-header></custom-header> -->
      <!-- END TOP TOOLBAR WRAPPER -->
      <div class="content page-aside-left">
        <!-- <menu-left></menu-left> -->
        <div class="main-content">
          <course-header></course-header>
          <section class="page-content container-fluid">
            <div class="row pb-3">
              <div class="col-12 text-right"></div>
            </div>
            <!--edit quiz-->
            <div class="row" v-if="quizShow === 'edit'">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <div
                      class="custom-control custom-checkbox form-check mb-4"
                      v-for="s in sList"
                      :key="s.sentenceid"
                    >
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        :id="s.sentenceid"
                        v-model="tempSList"
                        :value="s"
                      />
                      <label class="custom-control-label" :for="s.sentenceid"
                        >{{ s.sentence }}
                        <!-- <span class="text-danger ml-2"
                          >Hot!</span
                        > -->
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 text-right">
                <button
                  type=""
                  class="btn btn-primary btn-rounded"
                  @click="
                    quizShow = 'preview';
                    convertS();
                  "
                >
                  {{ $t("next") }}
                </button>
              </div>
            </div>
            <!--edit quiz end-->
            <!-- preview quiz-->
            <div class="row" v-if="quizShow === 'preview'">
              <div class="col-12">
                <div class="card mb-2">
                  <div class="card-body">
                    <ul class="quiz-list">
                      <li v-for="(ts, index) in finalS" :key="ts">
                        <strong class="text-primary mr-2"
                          >Q{{ index + 1 }}.</strong
                        >{{ ts }}
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="custom-control custom-checkbox form-check ml-3">
                  <!-- <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customCheck1"
                    checked
                  />
                  <label class="custom-control-label" for="customCheck1"
                    >Add to Assignment</label
                  > -->
                </div>
              </div>
              <div class="col-12 text-right">
                <button
                  type=""
                  class="btn btn-primary btn-outline btn-rounded mr-2"
                  @click="quizShow = 'edit'"
                >
                  {{ $t("back") }}
                </button>
                <button
                  type=""
                  class="btn btn-primary btn-rounded"
                  @click="setS()"
                >
                  {{ $t("create") }}
                </button>
              </div>
            </div>
            <!-- preview quiz end-->
            <!-- spaking quiz -->
            <!-- spaking quiz end-->
          </section>
        </div>
      </div>
    </div>
    <!-- END CONTENT WRAPPER -->
    <!-- SpeakingQuizPreview MODAL -->
    <div
      class="modal fade"
      id="ErrorTipmodal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      data-modal="scroll"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ $t("message") }}</h5>
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
            <h5>{{ $t("system-error-please-contact-your-administrator") }}</h5>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary btn-outline"
              data-dismiss="modal"
            >
              {{ $t("ok") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- SpeakingQuizPreview MODAL -->
    <!-- Add Modal -->
    <!-- Added Modal -->
  </div>
</template>
<script>
import CourseHeader from "../components/CourseHeader";
import {
  ApiGetSubtitileByVideo,
  ApiGetSubtitleByBook,
  ApiSetSByVideo,
  ApiSetSByBook,
} from "../http/apis/Quiz";
import $ from "jquery";
export default {
  name: "SpeakingQuizCreate",
  components: {
    CourseHeader,
  },
  data() {
    return {
      quizShow: "edit",
      rid: this.$route.params.rid,
      mid: this.$route.params.mid,
      courseid: this.$route.params.courseid,
      sList: [],
      tempSList: [],
      finalS: [],
    };
  },
  created() {},
  mounted() {
    this.getSubtitleList();
  },
  computed: {
    pkgid() {
      return this.$store.state.courseInfo.courseInfo.pkgid;
    },
    colid() {
      return this.$store.state.courseInfo.courseInfo.colid.split(";")[0];
    },
    userid() {
      return this.$store.state.auth.userid;
    },
  },
  methods: {
    getSubtitleList() {
      //video
      let vm = this;
      if (this.$route.params.note === "video") {
        ApiGetSubtitileByVideo.get(this.pkgid, this.colid, this.rid, this.mid)
          .then((response) => {
            console.log(response);
            if (response.status === "success") {
              vm.sList = response.record;
            } else {
              $("#ErrorTipmodal").modal("show");
            }
          })
          .catch((err) => {
            console.log("err = ", err);
          });
      } else {
        //book
        ApiGetSubtitleByBook.get(this.pkgid, this.colid, this.rid)
          .then((response) => {
            if (response.status === "success") {
              vm.sList = response.record;
            } else {
              $("#ErrorTipmodal").modal("show");
            }
          })
          .catch((err) => {});
      }
    },
    editQuiz() {
      this.quizShow = "edit";
    },
    convertS() {
      this.finalS = [];
      this.tempSList.sort((a, b) => {
        return Number(a.seq) > Number(b.seq) ? 1 : -1;
      });
      this.tempSList.forEach((element) => {
        this.finalS.push(element.sentence);
      });
    },
    setS() {
      let obj = {};
      obj.userid = this.userid;
      obj.sentence = this.finalS;
      if (this.$route.params.note === "video") {
        ApiSetSByVideo.post(this.rid, this.mid, this.courseid, obj)
          .then((response) => {
            if (response.status === "success") {
              console.log("video");
              console.log(
                `/quiz/${this.$route.params.course}/Speaking Quiz/${this.$route.params.rname}/${this.$route.params.mname}/${this.courseid}/${this.$route.params.note}/${this.rid}/${this.mid}`
              );
              let url = `/quiz/${this.$route.params.course}/Speaking Quiz/${this.$route.params.rname}/${this.$route.params.mname}/${this.courseid}/${this.$route.params.note}/${this.rid}/${this.mid}`;
              url = url.replaceAll("?", "%3F");
              this.$router.push({
                path: url,
              });
            } else {
              console.log(response);
            }
          })
          .catch((err) => {});
      } else {
        ApiSetSByBook.post(this.rid, this.courseid, obj)
          .then((response) => {
            if (response.status === "success") {
              console.log("book");
              console.log(
                `/quiz/${this.$route.params.course}/Speaking Quiz/${this.$route.params.rname}/${this.$route.params.mname}/${this.courseid}/${this.$route.params.note}/${this.rid}/${this.mid}`
              );
              let url = `/quiz/${this.$route.params.course}/Speaking Quiz/${this.$route.params.rname}/${this.$route.params.mname}/${this.courseid}/${this.$route.params.note}/${this.rid}/${this.mid}`;
              url = url.replaceAll("?", "%3F");
              this.$router.push({
                path: url,
              });
            } else {
              console.log(response);
            }
          })
          .catch((err) => {});
      }
    },
  },
};
</script>

<style scoped lang="scss">
//@import '../assets/css/igroup.css';
</style>
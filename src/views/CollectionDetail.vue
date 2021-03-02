<template>
  <div id="app3">
    <!-- END MENU SIDEBAR WRAPPER -->
    <div class="content-wrapper">
      <!-- TOP TOOLBAR WRAPPER -->
      <custom-header></custom-header>
      <!-- END TOP TOOLBAR WRAPPER -->
      <div class="content">
        <header class="page-header">
          <div class="d-flex align-items-start">
            <div class="mt-2 mr-3">
              <a
                @click="$back"
                class="btn-rounded-icon btn-primary ml-2 pointer"
                ><i class="zmdi zmdi-arrow-left zmdi-hc-fw text-white"></i
              ></a>
            </div>
            <div class="mr-auto">
              <h1>{{ $t("collection") }}</h1>
              <p class="second-title">{{ cname }}</p>
            </div>
          </div>
        </header>
        <section class="page-content container-fluid">
          <div class="d-flex justify-content-between">
            <div class="pb-3">
              <div class="form-row">
                <div class="form-group form-rounded form-custom mb-0 mr-3">
                  <!-- <select
                    class="form-control"
                    id="s2_demo1"
                    v-model="seleceType"
                  >
                    <option
                      v-for="type in typeList"
                      :key="type.value"
                      :value="type.value"
                    >
                      {{ type.text }}
                    </option>
                  </select> -->
                  <select2
                    id="s2_demo1"
                    class=""
                    :options="typeList"
                    v-model="seleceType"
                  >
                  </select2>
                </div>
                <div class="form-group form-rounded mb-0">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search..."
                      v-model="searchRname"
                      @keyup.enter="searchCollectionResource()"
                    />
                    <div class="input-group-append">
                      <div
                        class="btn btn-secondary btn-outline btn-icon btn-rounded"
                        type="button"
                        @click="searchCollectionResource()"
                      >
                        <i class="zmdi zmdi-search text-secondary"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-right">
              <a
                @click="gotoCollectionEdit()"
                class="btn btn-primary btn-rounded btn-outline"
                ><i class="la la-edit"></i>{{ $t("edit") }}</a
              >
            </div>
          </div>
          <div class="row">
            <div class="col-12" v-for="cr in materialSort" :key="cr.resourceid">
              <div class="card">
                <div class="card-body">
                  <div class="media">
                    <div
                      class="align-self-center overlay-wrap mr-4 w-150 h-150 border"
                    >
                      <span class="overlay-icon">
                        <i class="fas fa-video" v-if="cr.note === 'video'"></i
                        ><i class="fas fa-book-open" v-else></i>
                      </span>

                      <img
                        v-lazy="
                          'https://lms.mangosteems.com/cms/resdl/cover/' +
                          cr.resourceid
                        "
                        class="overlay-img cus-img"
                        alt="course image"
                      />
                    </div>
                    <div class="media-body">
                      <div class="d-flex justify-content-between">
                        <div>
                          <span
                            class="badge badge-pill badge-secondary mt-2"
                            v-if="cr.level !== ''"
                            >{{ $t("level") }} {{ cr.level }}</span
                          >
                          <h4
                            class="mb-0 mt-3 d-flex align-self-center text-primary"
                          >
                            <div title="">
                              <!-- <span
                                v-if="cr.unit !== ''"
                                style="font-size: 18px"
                                >{{ cr.unit }} -
                              </span> -->
                              {{ cr.resource_name }}
                            </div>
                          </h4>
                          <p
                            class="text-muted mt-1"
                            v-show="cr.lastplay.length !== 0"
                          >
                            <i class="zmdi zmdi-notifications mr-1"></i>
                            <small
                              class="fw300 pointer"
                              @click="showLastPlay(cr.lastplay)"
                              >{{ $t("last-played") }}
                              <!-- <span>{{ cr.last_access | dateConversion }}</span> -->
                            </small>
                          </p>
                        </div>
                        <div
                          class="text-primary pointer"
                          @click="
                            getAvailableCourse(cr.resourceid);
                            tempNote = cr.note;
                          "
                          data-toggle="modal"
                          data-target="#StartModal"
                        >
                          {{ $t("start")
                          }}<a class="btn-rounded-icon btn-primary rounded ml-2"
                            ><i
                              class="zmdi zmdi-arrow-right zmdi-hc-fw text-white"
                            ></i
                          ></a>
                        </div>
                      </div>
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
    <!-- lastplay MODAL -->
    <div
      class="modal fade"
      id="lastPlayModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" v-if="lastPlayList.length !== 0">
              {{ $t("last-play-record-course-date") }}
            </h5>
            <h5 class="modal-title" v-else>{{ $t("no-record") }}</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" class="zmdi zmdi-close"></span>
            </button>
          </div>
          <div class="modal-body pb-4" v-if="lastPlayList.length !== 0">
            <div v-for="lp in lastPlayList" :key="lp.courseid">
              <span
                >{{ lp.course_name }} ：
                {{ lp.last_access | dateConversion }}</span
              >
            </div>
          </div>
          <div class="modal-body pb-4" v-else>
            <p>{{ $t("no-open-or-play-record") }}.</p>
          </div>
        </div>
      </div>
    </div>
    <!-- END CONTENT WRAPPER -->
    <!-- old Start MODAL -->
    <div
      class="modal fade"
      id="StartModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" v-if="courseList.length !== 0">
              {{ $t("start") }}
            </h5>
            <h5 class="modal-title" v-else>{{ $t("no-course") }}</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" class="zmdi zmdi-close"></span>
            </button>
          </div>
          <div class="modal-body pb-4" v-if="courseList.length !== 0">
            <h5>{{ $t("what-is-your-ongoing-course") }}?</h5>
            <p>
              {{
                $t("this-material-can-only-be-viewed-in-the-following-course")
              }}.
            </p>
            <a
              title=""
              class="btn btn-primary btn-outline btn-rounded mr-3 mb-3"
              v-for="course in courseList"
              :key="course.resourceid"
              data-dismiss="modal"
              @click="gotoCourse(course)"
              >{{ course.course_name }}</a
            >
          </div>
          <div class="modal-body pb-4" v-else>
            <p>
              {{
                $t(
                  "the-course-you-can-use-this-collection-has-expired-if-you-wish-to-continue-using-it-you-must-renew-your-contract"
                )
              }}.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CustomHeader from "../components/CustomHeader";
import {
  ApiGetCollectionContent,
  ApiSearchCollection,
  ApiGetAvailableCourse,
  ApiSearchCollectionResource,
} from "../http/apis/Collection";
import Select2 from "v-select2-component";
import $ from "jquery";
// import Menu
export default {
  name: "CollectionDetail",
  components: {
    CustomHeader,
  },
  data() {
    return {
      cname: "",
      cResourceList: [],
      typeList: [
        { text: "All type", id: "all" },
        { text: "Picture Book", id: "book" },
        { text: "Video", id: "video" },
      ],
      seleceType: "all",
      courseList: [],
      searchRname: "",
      lastPlayList: [],
      tempNote: "book",
    };
  },
  created() {},
  mounted() {
    this.cname = this.$route.params.cname;
    this.getCollectionContent();
  },
  computed: {
    userid() {
      return this.$store.state.auth.userid;
    },
    materialSort() {
      let temp = [...this.cResourceList];
      temp.forEach((item) => {
        if (item.unit === undefined) {
          item.unit = "";
        }
      });
      return temp;
    },
  },
  methods: {
    showLastPlay(lp) {
      this.lastPlayList = [];
      this.lastPlayList = lp;
      $("#lastPlayModal").modal("show");
    },
    searchCollectionResource() {
      let type = this.seleceType;
      let keyword = this.searchRname;
      if (this.seleceType === "all") {
        type = "*";
      }
      if (this.searchRname === "") {
        keyword = "*";
      }
      ApiSearchCollectionResource.get(
        this.userid,
        this.$route.params.cid,
        keyword,
        type
      )
        .then((response) => {
          response.record.forEach((element) => {
            //重建
            element.lastplay = [];
            element.last_access_all.forEach((item) => {
              if (item.last_access !== "0") {
                element.lastplay.push(item);
              }
            });
          });
          response.record.forEach((item) => {});
          this.cResourceList = response.record;
        })
        .catch((err) => {});
    },
    getCollectionContent() {
      console.log(this.userid, this.$route.params.cid);

      ApiGetCollectionContent.get(this.userid, this.$route.params.cid)
        .then((response) => {
          response.record.forEach((element) => {
            //重建
            element.lastplay = [];
            element.last_access_all.forEach((item) => {
              if (item.last_access !== "0") {
                element.lastplay.push(item);
              }
            });
          });
          this.cResourceList = response.record;
        })
        .catch((err) => {});
    },
    gotoCollectionEdit() {
      this.$router.push({
        path: `/collection/edit/${this.$route.params.pid}/${this.$route.params.cname}/${this.$route.params.cid}`,
      });
    },
    gotoCourse(course) {
      console.log(course);
      // http://localhost:8080/web/course_material/course=test%20Course/type=Material/CRSfuqFSTo8pycu7vqtpVz9Xe
      // this.$router.push({
      //   path: `/course_material/course=${course.resource_name}/type=Material/${course.resourceid}`,
      // });
      if (this.tempNote === "book") {
        window.open(
          `${process.env.VUE_APP_DOMAIN}/bktchr/?pkgid=${course.pkgid}&colid=${course.colid}&resid=${course.resourceid}&mid=&lmsd=${process.env.VUE_APP_LMSD}&auth=${this.$store.state.auth.token}&crsid=${course.courseid}&userid=${this.userid}`
        );
      } else {
        window.open(
          `${process.env.VUE_APP_DOMAIN}/vptchr/?pkgid=${course.pkgid}&colid=${course.colid}&resid=${course.resourceid}&mid=&lmsd=${process.env.VUE_APP_LMSD}&auth=${this.$store.state.auth.token}&crsid=${course.courseid}&userid=${this.userid}`
        );
      }
    },
    getAvailableCourse(rid) {
      console.log(this.userid, this.$route.params.cid, rid);
      ApiGetAvailableCourse.get(this.userid, this.$route.params.cid, rid)
        .then((response) => {
          this.courseList = response.record;
          console.log(response.record);
        })
        .catch((err) => {});
    },
  },
};
</script>

<style scoped lang="scss">
.cus-img {
  max-height: 100%;
  max-width: 100%;
  width: auto;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.overlay-icon {
  z-index: 99;
}
// a:not([href]):not([tabindex]) {
//   color: rgba(255, 255, 255, 0.9) !important;
// }
//@import '../assets/css/igroup.css';
</style>
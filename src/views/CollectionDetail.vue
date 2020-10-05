<template>
  <div id="app">
    <!-- END MENU SIDEBAR WRAPPER -->
    <div class="content-wrapper">
      <!-- TOP TOOLBAR WRAPPER -->
      <custom-header></custom-header>
      <!-- END TOP TOOLBAR WRAPPER -->
      <div class="content">
        <header class="page-header">
          <div class="d-flex align-items-start">
            <div class="mt-2 mr-3">
              <a @click="$back" class="btn-rounded-icon btn-primary ml-2"
                ><i class="zmdi zmdi-arrow-left zmdi-hc-fw text-white"></i
              ></a>
            </div>
            <div class="mr-auto">
              <h1>Collection</h1>
              <p class="second-title">{{ cname }}</p>
            </div>
          </div>
        </header>
        <section class="page-content container-fluid">
          <div class="d-flex justify-content-between">
            <div class="pb-3">
              <div class="form-row">
                <div class="form-group form-rounded mb-0 mr-3">
                  <select class="form-control" id="s2_demo1">
                    <option>All type</option>
                    <option>Picture Book</option>
                    <option>Video</option>
                  </select>
                </div>
                <div class="form-group form-rounded mb-0">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search..."
                    />
                    <div class="input-group-append">
                      <button
                        class="btn btn-secondary btn-outline btn-icon btn-rounded"
                        type="button"
                      >
                        <i class="zmdi zmdi-search text-secondary"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-right">
              <a
                @click="gotoCollectionEdit()"
                class="btn btn-primary btn-rounded btn-outline"
                ><i class="la la-edit"></i>Edit</a
              >
            </div>
          </div>
          <div class="row">
            <div
              class="col-12"
              v-for="cr in cResourceList"
              :key="cr.resourceid"
            >
              <div class="card">
                <div class="card-body">
                  <div class="media">
                    <div
                      class="align-self-center overlay-wrap mr-4 w-100 h-100 border"
                    >
                      <span class="overlay-icon">
                        <i class="fas fa-video" v-if="cr.note === 'video'"></i
                        ><i class="fas fa-book-open" v-else></i>
                      </span>
                      <a
                        href="#"
                        title=""
                        class="overlay-img"
                        style="
                          background-image: url(../assets/img/avatars/3.jpg);
                        "
                      ></a>
                    </div>
                    <div class="media-body">
                      <div class="d-flex justify-content-between">
                        <div>
                          <span class="badge badge-pill badge-secondary mt-2"
                            >少了這個</span
                          >
                          <h4
                            class="mb-0 mt-3 d-flex align-self-center text-primary"
                          >
                            <a
                              href=""
                              title=""
                              data-toggle="modal"
                              data-target="#StartModal"
                              >{{ cr.resource_name }}</a
                            >
                          </h4>
                          <p class="text-muted mt-1">
                            <small class="fw300"
                              >Last played 2020.06.01
                              (這裡會傳文字還是日期?)</small
                            >
                          </p>
                        </div>
                        <div class="text-primary">
                          start<a
                            href=""
                            class="btn-rounded-icon btn-primary rounded ml-2"
                            data-toggle="modal"
                            data-target="#StartModal"
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
      <footer class="bg-secondary bg-dk d-flex justify-content-center">
        <p class="text-light mt-2 mb-2">© iGroup LMS</p>
      </footer>
    </div>

    <!-- END CONTENT WRAPPER -->
    <!-- Start MODAL -->
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
            <h5 class="modal-title">Start</h5>
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
            <h5>What is your ongoing course?</h5>
            <p>This material can only be viewed in the following course.</p>
            <a
              href="#"
              title=""
              class="btn btn-primary btn-outline btn-rounded mr-3"
              >101 ENGLISH</a
            ><a
              href="#"
              title=""
              class="btn btn-primary btn-outline btn-rounded mr-3"
              >102 ENGLISH</a
            >
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
} from "../http/apis/Collection";
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
  },
  methods: {
    getCollectionContent() {
      ApiGetCollectionContent.get(this.userid, this.$route.params.cid)
        .then((response) => {
          this.cResourceList = response.record;
        })
        .catch((err) => {});
    },
    gotoCollectionEdit() {
      this.$router.push({
        path: `/collection/edit/${this.$route.params.pid}/${this.$route.params.cname}/${this.$route.params.cid}`,
      });
    },
  },
};
</script>

<style scoped lang="scss">
// a:not([href]):not([tabindex]) {
//   color: rgba(255, 255, 255, 0.9) !important;
// }
//@import '../assets/css/igroup.css';
</style>
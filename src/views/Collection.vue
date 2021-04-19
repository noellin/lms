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
            <!-- <div class="mt-2 mr-3" v-if="collectionShow !== 'home'">
              <a
                @click="$back"
                class="btn-rounded-icon btn-primary ml-2"
                ><i class="zmdi zmdi-arrow-left zmdi-hc-fw text-white"></i
              ></a>
            </div> -->
            <div class="mr-auto">
              <h1>{{ $t("my-library") }}</h1>
              <!-- <p class="second-title" v-if="collectionShow === 'detail'">
                First grage
              </p> -->
            </div>
          </div>
        </header>
        <section class="page-content container-fluid">
          <div class="d-flex justify-content-between mb-3">
            <div class="form-group form-rounded mb-0">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search..."
                  v-model="collectionName"
                  @keyup.enter="searchCollection()"
                />
                <div class="input-group-append">
                  <div
                    @click="searchCollection()"
                    class="btn btn-secondary btn-outline btn-icon btn-rounded"
                    type="button"
                  >
                    <i class="zmdi zmdi-search text-secondary"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-right">
              <button
                @click="gotoCollectionCreate()"
                class="btn btn-primary btn-outline btn-rounded"
              >
                <i class="la la-plus"></i>{{ $t("create-new-my-library") }}
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <!-- No courses -->
                  <!--   <div class="alert alert-secondary text-center">
                                             No courses
                                        </div> -->
                  <!-- end No courses -->
                  <!-- id="bs4-table" -->
                  <table class="table table-striped" style="width: 100%">
                    <thead>
                      <tr>
                        <th style="width: 30%">{{ $t("my-library-name") }}</th>
                        <th style="width: 30%">{{ $t("library") }}</th>
                        <th style="width: 30%">
                          {{ $t("classes") }}
                        </th>
                        <th style="width: 10%; text-align: center">
                          {{ $t("action") }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="collection in collectionList"
                        :key="collection.collectionid"
                      >
                        <td
                          @click="
                            gotoCollectionDeatail(
                              collection.pkgid,
                              collection.collection_name,
                              collection.collectionid
                            )
                          "
                          class="pointer"
                        >
                          <a>{{ collection.collection_name }}</a>
                        </td>
                        <td>{{ collection.pkg_name }}</td>
                        <td>
                          <span
                            v-for="(course, index) in collection.courseInfo"
                            :key="course.courseid"
                            >{{ course.course_name }}
                            <span
                              v-if="index + 1 < collection.courseInfo.length"
                              >,
                            </span></span
                          >
                        </td>
                        <td style="text-align: center">
                          <button
                            class="btn btn-nostyle"
                            data-toggle="modal"
                            data-target="#deleteModal"
                            @click="
                              tempCname = collection.collection_name;
                              tempCid = collection.collectionid;
                            "
                          >
                            <i class="la la-trash"></i>
                          </button>
                        </td>
                      </tr>
                      <!-- <tr>
                        <td
                          @click="
                            gotoCollectionDeatail(collection.collectionid)
                          "
                          class="pointer"
                        >
                          <a>測試用</a>
                        </td>
                        <td>ME TOO</td>
                        <td>少了這個</td>
                      </tr> -->
                    </tbody>
                  </table>
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
    <!-- DELETE MODAL -->
    <div
      class="modal fade"
      id="deleteModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ $t("delete") }}</h5>
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
            <p>
              {{ $t("confirm-to-delete-collection") }}：<strong>{{
                tempCname
              }}</strong
              >?
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-rounded btn-outline"
              data-dismiss="modal"
            >
              {{ $t("cancel") }}
            </button>
            <button
              type="button"
              class="btn btn-primary btn-rounded"
              data-dismiss="modal"
              @click="deleteCollection(tempCid)"
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
// import CustomHeader from "../components/CustomHeader";
import {
  ApiGetCollection,
  ApiSearchCollection,
  ApiDeleteCollection,
} from "../http/apis/Collection";
export default {
  name: "Collection",
  components: {
    CustomHeader: () => import("@/components/CustomHeader.vue"),
  },
  data() {
    return {
      collectionList: [],
      collectionName: "",
      tempCname: "",
      tempCid: "",
    };
  },
  created() {},
  mounted() {
    this.getCollection();
  },
  computed: {
    userid() {
      return this.$store.state.auth.userid;
    },
  },
  methods: {
    getCollection() {
      console.log(this.userid);
      ApiGetCollection.get(this.userid).then((response) => {
        this.collectionList = response.record;
      });
    },
    searchCollection() {
      let keyword = this.collectionName;
      if (this.collectionName === "") {
        keyword = "*";
      }
      ApiSearchCollection.get(this.userid, keyword).then((response) => {
        this.collectionList = response.record;
      });
    },
    gotoCollectionDeatail(pid, cname, cid) {
      this.$router.push({
        path: `/collection/${pid}/${cname}/${cid}/`,
      });
    },
    gotoCollectionCreate() {
      this.$router.push({
        path: `/collection/create`,
      });
    },
    async deleteCollection(cid) {
      const result = await ApiDeleteCollection.get(cid)
        .then((resonse) => {
          return resonse.status;
        })
        .catch((err) => {});
      if (result) {
        this.getCollection();
      }
    },
  },
};
</script>

<style scoped lang="scss">
a:not([href]):not([tabindex]) {
  color: #32c1db !important;
}
</style>
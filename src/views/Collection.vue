<template>
  <div id="app2">
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
              <h1>Collection</h1>
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
                  placeholder="Search collection name"
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
              <a
                @click="gotoCollectionCreate()"
                class="btn btn-primary btn-outline btn-rounded"
                ><i class="la la-plus"></i>Create new Collection</a
              >
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
                        <th style="width: 30%">Collection name</th>
                        <th style="width: 30%">Package</th>
                        <th style="width: 30%">Applicable course</th>
                        <th style="width: 10%; text-align: center">Action</th>
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
                  <!-- <div class="col-12">
                    <div
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
                    </div>
                  </div> -->
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
            <h5 class="modal-title">Delete</h5>
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
              Confirm to delete Collection：<strong>{{ tempCname }}</strong
              >?
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-rounded btn-outline"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary btn-rounded"
              data-dismiss="modal"
              @click="deleteCollection(tempCid)"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CustomHeader from "../components/CustomHeader";
import {
  ApiGetCollection,
  ApiSearchCollection,
  ApiGetCollectionContent,
  ApiDeleteCollection,
} from "../http/apis/Collection";
export default {
  name: "Collection",
  components: {
    CustomHeader,
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
//@import '../assets/css/igroup.css';
</style>
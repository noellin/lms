<template >
  <div class="pb-3">
    <div class="form-row">
      <div class="form-group form-rounded mb-0 mr-3">
        <select2 id="s2_demo2" :options="typeList" v-model="selectType">
        </select2>
      </div>
      <div class="form-group form-rounded mb-0 mr-3">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Search materials"
            v-model="searchRname"
            @keyup.enter="searchCourseResource()"
          />
          <!-- @keyup.enter="searchCourseResource()" -->
          <div class="input-group-append">
            <div
              class="btn btn-secondary btn-outline btn-icon btn-rounded"
              type="button"
              @click="searchCourseResource()"
            >
              <i class="zmdi zmdi-search text-secondary"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group form-rounded mb-0 mr-3">
        <select2 id="s2_demo3" :options="sortTypeList" v-model="selectSortType">
        </select2>
      </div>
      <div
        class="form-group form-rounded mb-0 text-secondary"
        data-dismiss="modal"
        data-toggle="modal"
        data-target="#filterModal"
      >
        <div
          class="btn btn-secondary btn-outline btn-icon btn-rounded d-flex justify-content-center align-items-center"
        >
          <i class="zmdi zmdi-filter-list mx-0"></i>
        </div>
      </div>
    </div>
    <div
      class="form-group form-rounded mb-0 mr-3 d-flex align-items-center text-secondary mt-2"
      v-if="searchStatus"
    >
      <strong
        ><span class="mr-1">{{ sortMList.length }}</span>
        {{ $t("listings-for") }} “ <span>{{ tempSearchName }}</span
        >”</strong
      >
    </div>
    <!-- modal -->
    <div
      class="modal fade"
      id="filterModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalTitle1">{{ $t("filter") }}</h5>
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
            <p>Filter by level</p>
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
              class="btn btn-primary btn-outline btn-rounded"
              data-dismiss="modal"
              @click="gotoCreateCol()"
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
import { ApiSearchCourseResource } from "../http/apis/CourseDetail";
import { ApiSearchCollectionResource } from "../http/apis/Collection";
export default {
  name: "SearchGroup",
  data() {
    return {
      typeList: [
        { text: "All type", id: "all" },
        { text: "Picture Book", id: "book" },
        { text: "Video", id: "video" },
      ],
      selectType: "all",
      searchRname: "",
      selectSortType: "title_asc",
      searchStatus: false,
      tempSearchName: "",
      textbookList: [],
      courseid: this.$route.params.courseid,
      colSortList: [],
    };
  },
  props: ["mfilter", "page"],
  methods: {
    async searchCourseResource() {
      console.log("get course list");
      //判斷是否有搜尋值
      if (this.searchRname !== "") {
        this.searchStatus = true;
        this.tempSearchName = this.searchRname;
      } else {
        this.searchStatus = false;
      }
      let sType = this.selectType;
      if (this.selectType === "all") {
        sType = "*";
      }
      let searchObj = {
        type: sType,
        keyword: this.searchRname,
      };
      let result = await ApiSearchCourseResource.post(this.courseid, searchObj)
        .then((response) => {
          console.log(response);
          response.record.forEach((element) => {
            if (element.unit === undefined) {
              element.unit = "";
            }
            element.link = element.information.includes("http");
          });

          this.textbookList = response.record;

          if (response.status === "success") {
            return true;
          }
        })
        .catch((err) => {});
      if (result) {
        this.$emit("getMList", this.sortMList);
      }
    },
    async searchCollectionResource() {
      console.log("get collection list");
      //   if (this.searchRname !== "") {
      //     this.searchStatus = true;
      //     this.tempSearchName = this.searchRname;
      //   } else {
      //     this.searchStatus = false;
      //   }
      let type = this.selectType;
      let keyword = this.searchRname;
      if (this.selectType === "all") {
        type = "*";
      }
      if (this.searchRname === "") {
        keyword = "*";
      }
      if (this.searchRname !== "") {
        this.searchStatus = true;
        this.tempSearchName = this.searchRname;
      } else {
        this.searchStatus = false;
      }

      console.log("userid = ", this.userid);
      console.log("cid = ", this.$route.params.cid);
      console.log("cid = ", this.$route.params.cid);
      console.log("keyword = ", keyword);
      console.log("type = ", type);
      let result = await ApiSearchCollectionResource.get(
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
          this.textbookList = response.record;
          console.log("sortmlist = ", this.sortMList);
          if (response.status === "success") {
            return true;
          }
        })
        .catch((err) => {});
      if (result) {
        this.$emit("getMColList", this.sortMList);
      }
    },
  },
  created() {
    this.openedTextbookList = this.openedTextbookLists;
  },
  computed: {
    userid() {
      return this.$store.state.auth.userid;
    },
    sortMList() {
      //dashboard filter
      //utils mixins
      let sortMaterial = [];
      if (this.mfilter === "openm") {
        // return this.$_sortMaterial(this.openedMList, this.selectSortType);
        sortMaterial = this.$_sortMaterial(
          this.openedMList,
          this.selectSortType
        );
      } else if (this.mfilter === "openb") {
        sortMaterial = this.$_sortMaterial(
          this.openedBookList,
          this.selectSortType
        );
        // return this.$_sortMaterial(this.openedBookList, this.selectSortType);
      } else if (this.mfilter === "openv") {
        sortMaterial = this.$_sortMaterial(
          this.openedVideoList,
          this.selectSortType
        );
        // return this.$_sortMaterial(this.openedVideoList, this.selectSortType);
      } else {
        console.log("get M list");
        sortMaterial = this.$_sortMaterial(
          this.textbookList,
          this.selectSortType
        );
      }
      // return this.$_sortMaterial(this.textbookList, this.selectSortType);
      return sortMaterial;
      //   this.$emit("getMList", sortMaterial);
    },
    sortTypeList() {
      return this.$store.state.common.sortTypeList;
    },
    openedMList() {
      return this.textbookList.filter((item) => {
        return item.openflag === "true";
      });
    },
    openedBookList() {
      return this.textbookList.filter((item) => {
        return item.openflag === "true" && item.note === "book";
      });
    },
    openedVideoList() {
      return this.textbookList.filter((item) => {
        return item.openflag === "true" && item.note === "video";
      });
    },
    openedTextbookLists() {
      return this.$store.state.courseInfo.openedTextbookList;
    },
  },
  watch: {
    mfilter() {
      if (this.page !== "Collection") {
        this.searchCourseResource();
      } else {
        this.searchCollectionResource();
      }
    },
    selectSortType() {
      console.log(this.page);
      if (this.page !== "Collection") {
        this.searchCourseResource();
      } else {
        this.searchCollectionResource();
      }
    },
    openedTextbookLists() {
      this.openedTextbookList = this.openedTextbookLists;
    },
    searchRname() {
      if (this.page !== "Collection") {
        this.searchCourseResource();
      } else {
        this.searchCollectionResource();
      }
    },
    selectType() {
      console.log(this.page);
      if (this.page !== "Collection") {
        this.searchCourseResource();
      } else {
        this.searchCollectionResource();
      }
    },
  },
};
</script>
<style lang="">
</style>
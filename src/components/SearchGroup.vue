<template >
  <div class="px-1 mb-3">
    <div class="form-row">
      <div class="form-group form-rounded mb-0 mr-1">
        <select2 id="s2_demo2" :options="typeList" v-model="selectType">
        </select2>
      </div>
      <div class="form-group form-rounded mb-0 mr-1">
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
      <div class="form-group form-rounded mb-0 mr-1">
        <select2 id="s2_demo3" :options="sortTypeList" v-model="selectSortType">
        </select2>
      </div>
      <div
        v-if="haveLevel"
        class="form-group form-rounded mb-0 text-secondary"
        data-dismiss="modal"
        data-toggle="modal"
        data-target="#filterModal"
        @click="setAlllevel = ''"
      >
        <div
          class="btn btn-secondary btn-outline btn-icon btn-rounded d-flex justify-content-center align-items-center"
        >
          <i class="zmdi zmdi-filter-list mx-0"></i>
        </div>
      </div>
    </div>
    <div
      v-if="searchStatus || selectLevelList.length !== 0"
      class="mb-0 mr-3 text-secondary mt-2"
    >
      <div class="row col-sm-12">
        <strong class="col-sm-12"
          ><span class="mr-1">{{ sortMList.length }}</span>
          {{ $t("listings-for")
          }}<span v-if="tempSearchName !== ''">
            “ {{ searchRname }} ”
          </span></strong
        >
        <div class="col-sm-12" v-if="selectLevelList.length !== 0">
          <span v-for="level in selectLevelList" :key="level">
            <span
              class="badge badge-pill badge-secondary mr-2 mb-2 pointer"
              @click="removeLevel(level)"
              >{{ $t("level") }} {{ level }}
              <span class="ml-1"><i class="zmdi zmdi-close"></i></span
            ></span>
          </span>
          <span class="text-primary pointer" @click="clearLevelFilter()">{{
            $t("clear-all")
          }}</span>
        </div>
      </div>
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
            <div class="col-sm-12 row">
              <!-- <div class="custom-control custom-checkbox col-sm-12 ml-3">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="std"
                  @click="selectAllLevel"
                  v-model="setAlllevel"
                  name="std"
                />
                <label class="custom-control-label" for="std">
                  <strong>{{ $t("all-level") }}</strong>
                </label>
              </div> -->
              <div
                v-for="(level, index) in levelLists"
                :key="level + index"
                class="col-4"
              >
                <div class="custom-control custom-checkbox mr-2">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    :id="level"
                    :value="level"
                    v-model="selectLevelList"
                  />
                  <label class="custom-control-label" :for="level"
                    >Level {{ level }}</label
                  >
                </div>
              </div>
            </div>
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
      selectSortType: "",
      searchStatus: false,
      tempSearchName: "",
      textbookList: [],
      courseid: this.$route.params.courseid,
      colSortList: [],
      setAlllevel: "",
      selectLevelList: [],
      levelLists: [],
      haveLevel: false,
      courseInfo: {},
      collectionInfo: {},
    };
  },
  props: ["mfilter", "page"],
  methods: {
    clearLevelFilter() {
      this.selectLevelList = [];
    },
    removeLevel(level) {
      let vm = this;
      let index = this.selectLevelList.indexOf(level);

      if (index !== -1) {
        vm.selectLevelList.splice(index, 1);
      }
    },
    async searchCourseResource() {
      //判斷是否有搜尋值
      let vm = this;
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
          if (vm.selectSortType === "") {
            if (response.csrInfo.cntLevel !== 0) {
              vm.haveLevel = true;
              vm.selectSortType = "level_asc";
            } else {
              vm.haveLevel = false;
              vm.selectSortType = "unit_asc";
            }
          }
          response.record.forEach((element) => {
            if (
              element.level !== undefined &&
              element.level !== "" &&
              !vm.levelLists.includes(element.level)
            ) {
              vm.levelLists.push(element.level);
            }
            if (element.unit === undefined) {
              element.unit = "";
            }
            element.link = element.information.includes("http");
          });
          this.levelLists.sort();
          this.textbookList = response.record;

          if (response.status === "success") {
            return true;
          }
        })
        .catch((err) => {});
      if (result) {
        this.$emit("getMList", this.sortMList);
        this.$emit("getFilterInfo", this.selectLevelList, this.selectSortType);
      }
    },
    async searchCollectionResource() {
      let vm = this;
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

      let result = await ApiSearchCollectionResource.get(
        this.userid,
        this.$route.params.cid,
        keyword,
        type
      )
        .then((response) => {
          if (vm.selectSortType === "") {
            if (response.moreInfo.cntLevel !== 0) {
              vm.haveLevel = true;
              vm.selectSortType = "level_asc";
            } else {
              vm.haveLevel = false;
              vm.selectSortType = "unit_asc";
            }
          }
          response.record.forEach((element) => {
            //重建
            if (
              element.level !== undefined &&
              element.level !== "" &&
              !vm.levelLists.includes(element.level)
            ) {
              vm.levelLists.push(element.level);
            }
            element.lastplay = [];
            element.last_access_all.forEach((item) => {
              if (item.last_access !== "0") {
                element.lastplay.push(item);
              }
            });
          });
          this.textbookList = response.record;
          // this.collectionInfo = response.moreInfo;
          if (response.moreInfo.cntLevel === 0) {
            let slist = [
              { text: "Sort by title A to Z", id: "title_asc" },
              { text: "Sort by title Z to A", id: "title_desc" },
              { text: "Sort by unit Smallest to Largest", id: "unit_asc" },
              { text: "Sort by unit Largest to Smallest", id: "unit_desc" },
            ];
            vm.$store.dispatch("common/setSortTypeList", slist);
          } else if (response.moreInfo.cntUnit === 0) {
            let slist = [
              { text: "Sort by title A to Z", id: "title_asc" },
              { text: "Sort by title Z to A", id: "title_desc" },
              { text: "Sort by level A to Z", id: "level_asc" },
              { text: "Sort by level Z to A", id: "level_desc" },
            ];
            vm.$store.dispatch("common/setSortTypeList", slist);
          }
          if (response.status === "success") {
            return true;
          }
        })
        .catch((err) => {});
      if (result) {
        this.$emit("getMColList", this.sortMList);
      }
    },
    selectAllLevel(event) {
      const vm = this;

      if (!event.currentTarget.checked) {
        vm.selectLevelList = [];
      } else {
        //實現全選
        vm.selectLevelList = [];
        vm.levelLists.forEach(function (level, i) {
          vm.selectLevelList.push(level);
        });
      }
    },
  },
  created() {
    this.openedTextbookList = this.openedTextbookLists;
    if (this.page !== "collection") {
      this.searchCourseResource();
    } else {
      this.searchCollectionResource();
    }
    this.courseInfo = this.courseInfos;
  },
  computed: {
    courseInfos() {
      return this.$store.state.courseInfo.courseInfo;
    },
    userid() {
      return this.$store.state.auth.userid;
    },
    sortMList() {
      let sortMaterial = [];
      let openb = this.textbookList.filter((item) => {
        return item.openflag === "true" && item.note === "book";
      });
      let openv = this.textbookList.filter((item) => {
        return item.openflag === "true" && item.note === "video";
      });
      if (this.mfilter === "openm") {
        // return this.$_sortMaterial(this.openedMList, this.selectSortType);
        sortMaterial = this.$_sortMaterial(
          this.openedMList,
          this.selectSortType,
          this.selectLevelList
        );
      } else if (this.mfilter === "openb") {
        sortMaterial = this.$_sortMaterial(
          openb,
          this.selectSortType,
          this.selectLevelList
        );
        // return this.$_sortMaterial(this.openedBookList, this.selectSortType);
      } else if (this.mfilter === "openv") {
        sortMaterial = this.$_sortMaterial(
          openv,
          this.selectSortType,
          this.selectLevelList
        );
        // return this.$_sortMaterial(this.openedVideoList, this.selectSortType);
      } else {
        sortMaterial = this.$_sortMaterial(
          this.textbookList,
          this.selectSortType,
          this.selectLevelList
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
    // levelLists() {
    //   let levelList = [];
    //   this.textbookList.forEach((element) => {
    //     if (element.level !== undefined && !levelList.includes(element.level)) {
    //       levelList.push(element.level);
    //     }
    //   });
    //   return levelList;
    // },
    openedTextbookLists() {
      return this.$store.state.courseInfo.openedTextbookList;
    },
  },
  watch: {
    // textbookList() {
    //   // console.log('change');
    //   this.$emit("getMList", this.sortMList);
    // },
    courseInfo() {
      if (this.$route.name !== "CollectionDetail") {
        if (this.courseInfo.cntLevel === 0) {
          let slist = [
            { text: "Sort by title A to Z", id: "title_asc" },
            { text: "Sort by title Z to A", id: "title_desc" },
            { text: "Sort by unit Smallest to Largest", id: "unit_asc" },
            { text: "Sort by unit Largest to Smallest", id: "unit_desc" },
          ];
          this.$store.dispatch("common/setSortTypeList", slist);
        } else if (this.courseInfo.cntUnit === 0) {
          let slist = [
            { text: "Sort by title A to Z", id: "title_asc" },
            { text: "Sort by title Z to A", id: "title_desc" },
            { text: "Sort by level A to Z", id: "level_asc" },
            { text: "Sort by level Z to A", id: "level_desc" },
          ];
          this.$store.dispatch("common/setSortTypeList", slist);
        } else {
          let slist = [
            { text: "Sort by title A to Z", id: "title_asc" },
            { text: "Sort by title Z to A", id: "title_desc" },
            { text: "Sort by level A to Z", id: "level_asc" },
            { text: "Sort by level Z to A", id: "level_desc" },
            { text: "Sort by unit Smallest to Largest", id: "unit_asc" },
            { text: "Sort by unit Largest to Smallest", id: "unit_desc" },
          ];
          this.$store.dispatch("common/setSortTypeList", slist);
        }
      }
    },
    courseInfos() {
      this.courseInfo = this.courseInfos;
    },
    selectLevelList() {
      if (this.page !== "collection") {
        this.searchCourseResource();
      } else {
        this.searchCollectionResource();
      }
    },
    mfilter() {
      if (this.page !== "collection") {
        this.searchCourseResource();
      } else {
        this.searchCollectionResource();
      }
    },
    selectSortType() {
      if (this.page !== "collection") {
        this.searchCourseResource();
      } else {
        this.searchCollectionResource();
      }
    },
    openedTextbookLists() {
      this.openedTextbookList = this.openedTextbookLists;
    },
    searchRname() {
      if (this.page !== "collection") {
        this.searchCourseResource();
      } else {
        this.searchCollectionResource();
      }
    },
    selectType() {
      // console.log(this.page);
      if (this.page !== "collection") {
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
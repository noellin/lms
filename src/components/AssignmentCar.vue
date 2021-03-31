<template lang="">
  <div class=" cart-sm" >
        <div class="circle cart-icon justify-content-center d-flex align-items-center" v-if="tempAList.length !== 0 ? true : false"   
         @click="isShow=!isShow" ><i class="zmdi zmdi-assignment gotop "></i>
        <i  class="fas fa-circle text-danger"></i></div>

        			<div class="cart-box" v-if="isShow">
			 <div class="row justify-content-center bg-white border rounded py-3">
					<div class="col-md-12">
						<div class="h5"><b>Assignment List</b></div>
						<div class="u-close" @click="isShow=false">
							<span></span>
							<span></span>
						</div>
						<table class="table table-sm mb-2">
						  <tbody>
						    <tr v-for="(ta, key) in tempAList" :key="key">
                  <div class="d-flex justify-content-start">
                            <span
                              v-if="ta.note === 'book'"
                              class="d-flex col-sm-11 px-0"
                            >
                              <span
                                class="badge badge-pill badge-primary fix-badge-height"
                                >{{ $t("reading") }}</span
                              >
                              <span
                                class="col-sm-10 d-flex align-items-center"
                                >{{ ta.resource_name }}</span
                              >
                            </span>
                            <div
                              v-else-if="ta.note === 'video'"
                              class="d-flex col-sm-11 px-0"
                            >
                              <div>
                                <span
                                  class="badge badge-pill badge-warning fix-badge-height"
                                  >{{ $t("watching") }}</span
                                >
                              </div>
                              <span class="col-sm-10 d-flex align-items-center">
                                {{
                                  ta.resource_name + " - " + ta.material_name
                                }}
                              </span>
                            </div>
                            <span v-else class="d-flex col-sm-11 px-0">
                              <span
                                class="badge badge-pill badge-accent fix-badge-height"
                                >{{ $t("speaking-quiz") }}</span
                              >
                              <span class="col-sm-10 d-flex align-items-center"
                                >{{ ta.resource_name }} -
                                <span v-if="ta.material_name !== 'undefined'">{{
                                  ta.material_name
                                }}</span>
                                <span v-else>{{ $t("book") }}</span></span
                              >
                            </span>
                                                      <!-- <i
                            @click="removeAssignment(ta.note, ta)"
                            class="zmdi zmdi-minus-circle zmdi-hc-2x text-secondary pointer"
                          ></i> -->
                          </div>
						      <!-- <td>
						        <button type="button" class="btn bg-transparent btn-sm d-none d-md-block" @click="removeAssignment(item.id)">
						          <i class="far fa-trash-alt"></i>
						        </button>
						      </td>
						      <td class="text-info u-cart-title">{{ item.product.title }}</td>
						      <td>{{ item.qty }}{{ item.product.unit }}</td>
						      <td class="text-right">{{ item.final_total | currency }}</td> -->
						    </tr>
						  </tbody>
						</table>
						<!-- button -->
						<div class="nav-item " v-if="tempAList.length!==0" @click="gotoAgtCreate()">
							<button type="button" class="btn btn-primary btn-rounded d-block mx-auto " 
							@click="isShow=!isShow">Create Assignment</button>
						</div>
					</div>
				</div>
			</div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "AssignmentCar",
  data() {
    return {
      scrollTop: 0,
      time: 0,
      dParams: 20,
      scrollState: 0,
      tempAList: [],
      isShow: false,
    };
  },
  computed: {
    tempALists() {
      return this.$store.state.courseInfo.caList;
      //  return this.$store.state.courseInfo.tempAList[this.courseid] === undefined ?  this.tempAList : this.$store.state.courseInfo.tempAList[this.courseid] ;
      // return this.$store.state.courseInfo.tempAList[this.courseid];
    },
  },
  created() {
    this.tempAList = this.tempALists;
  },
  mounted() {
    window.addEventListener("scroll", this.getScrollTop);
  },
  watch: {
    tempALists() {
      this.tempAList = this.tempALists;
    },
  },
  methods: {
    async gotoAgtCreate() {
      if (this.$route.params.type === "Library") {
        $("#AssignmentModal").modal("show");
      } else {
        await this.$store.dispatch("courseInfo/setOpenAgt", true);
        await this.$router
          .push({
            path: `/course_material/course=${this.$route.params.course}/type=Library/${this.$route.params.courseid}`,
          })
          .catch((err) => err);
      }
    },
    getScrollTop() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    },
  },
};
</script>
<style lang="scss">
.cart-sm {
  position: fixed;
  right: 48px;
  bottom: 60px;
  z-index: 999;
}
.scroll {
  font-size: 28px;
  color: #10567b;
}
.scroll:hover {
  font-size: 28px;
  color: #f16c5d;
}
.circle {
  //   background: lightblue;
  background: #32c1db;
  border-radius: 50%;
  width: 48px;
  height: 48px;
}

.fc {
  position: fixed;
  right: 54px;
  bottom: 86px;
  cursor: pointer;
  z-index: 99999;
}

.cart-box {
  position: relative;
  bottom: 50px;
  right: 50px;
}
.cart-icon {
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
}

.zmdi-assignment {
  font-size: 32px;
  color: #ffffff;
  // text-shadow: 2px 2px 5px rgba(256, 256, 256, 0.8);
}

.fa-circle {
  position: absolute;
  top: 6px;
  right: 6px;
  color: red;
}
</style>
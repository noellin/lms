<template>
  <div>
    <div id="app">
      <!-- END MENU SIDEBAR WRAPPER -->
      <div class="content-wrapper">
        <!-- TOP TOOLBAR WRAPPER -->

        <!-- END TOP TOOLBAR WRAPPER -->
        <div class="content page-aside-left">
          <div class="main-content">
            <course-header></course-header>
            <section class="page-content container-fluid">
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    <div class="card-body">
                      <form>
                        <div class="form-group row">
                          <label class="col-form-label text-right col-sm-3"
                            >Question</label
                          >
                          <div class="col-sm-8">
                            <textarea
                              class="form-control"
                              id="exampleFormControlTextarea1"
                              placeholder="Please enter a question of the extra quiz..."
                              rows="3"
                            ></textarea>
                            <span class="text-muted"><small>0/100</small></span>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-form-label col-sm-3 text-right"
                            >Publish</label
                          >
                          <div class="col">
                            <input
                              type="text"
                              class="form-control date-picker-input"
                              placeholder="Select Date"
                              value=""
                            />
                          </div>
                          <div class="col-2 pt-2 pl-0">06:00:00</div>
                        </div>
                        <div class="form-group row">
                          <label class="col-form-label col-sm-3 text-right"
                            >Due</label
                          >
                          <div class="col">
                            <input
                              type="text"
                              class="form-control date-picker-input"
                              placeholder="Select Date"
                              value=""
                            />
                          </div>
                          <div class="col-2 pt-2 pl-0">23:59:59</div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="text-right">
                    <button
                      type="button"
                      class="btn btn-secondary btn-outline btn-rounded"
                      data-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary btn-rounded"
                      data-dismiss="modal"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <footer class="bg-secondary bg-dk d-flex justify-content-center">
          <p class="text-light mt-2 mb-2">© iGroup LMS</p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import CourseHeader from "../components/CourseHeader";
export default {
  components: {
    CourseHeader,
  },
};
</script>

<style lang="scss" scoped>
</style>
<template>
  <div id="app">
    <!-- END MENU SIDEBAR WRAPPER -->
    <div class="content-wrapper">
      <!-- TOP TOOLBAR WRAPPER -->
      <custom-header></custom-header>
      <!-- END TOP TOOLBAR WRAPPER -->
      <div class="content">
        <header class="page-header">
          <div class="d-flex align-items-center">
            <div class="mr-auto">
              <h1>Collection</h1>
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
            <div class="text-right">
              <a
                href="collection-create.html"
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
                  <table class="table table-striped" style="width: 100%;">
                    <thead>
                      <tr>
                        <th style="width: 20%;">Collection name</th>
                        <th style="width: 20%;">Package</th>
                        <th style="width: 60%;">Applicable course</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><a href="collection.html">Elementary</a></td>
                        <td>Picture book 100</td>
                        <td>103 English</td>
                      </tr>
                      <tr>
                        <td><a href="collection.html">Intermediate</a></td>
                        <td>Video 200</td>
                        <td>203 English、202English</td>
                      </tr>
                      <tr>
                        <td>
                          <a href="collection.html"> High Intermediate</a>
                        </td>
                        <td>Picture book 200</td>
                        <td>303 English</td>
                      </tr>
                      <tr>
                        <td><a href="collection.html">Advanced</a></td>
                        <td>First grage</td>
                        <td>101 English、102English</td>
                      </tr>
                      <tr>
                        <td><a href="collection.html"> First grage</a></td>
                        <td>Second grage</td>
                        <td>
                          101English、102English、201
                          English、202English、101English、102English、201
                          English、202English、101English、102English、201
                          English、202English、101English、102English、201
                          English、202English、
                        </td>
                      </tr>
                      <tr>
                        <td><a href="collection.html">Second grade</a></td>
                        <td>Third grage</td>
                        <td>301 English、302English</td>
                      </tr>
                      <tr>
                        <td><a href="collection.html"> Third grade</a></td>
                        <td>Summer class special</td>
                        <td>301 English、302English</td>
                      </tr>
                      <tr>
                        <td><a href="collection.html">Summer class</a></td>
                        <td>Summer class special</td>
                        <td>Summer vacation</td>
                      </tr>
                      <tr>
                        <td><a href="collection.html"> Intensive class</a></td>
                        <td>Intensive class special</td>
                        <td>Gifted classes</td>
                      </tr>
                      <tr>
                        <td><a href="collection.html">Winter class</a></td>
                        <td>Winter class special</td>
                        <td>Winter vacation</td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="col-12">
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
    <!-- EDIT-CHANGE MODAL -->
    <div
      class="modal fade"
      id="editChangeModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit</h5>
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
              Confirm to change the teacher to <strong>Diana</strong> and
              <strong>Edward</strong>.
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
            <button type="button" class="btn btn-primary btn-rounded">
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
export default {
  name: "Collection",
  components: {
    CustomHeader,
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped lang="scss">
//@import '../assets/css/igroup.css';
</style>
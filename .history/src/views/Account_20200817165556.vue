<template>
  <div id="app">
    <!-- END MENU SIDEBAR WRAPPER -->
    <div class="content-wrapper">
      <!-- TOP TOOLBAR WRAPPER -->
      <nav class="top-toolbar navbar navbar-mobile navbar-tablet">
        <ul class="navbar-nav nav-left">
          <li class="nav-item">
            <a href="javascript:void(0)" data-toggle-state="aside-left-open">
              <i class="icon dripicons-align-left"></i>
            </a>
          </li>
        </ul>
        <ul class="navbar-nav nav-center site-logo">
          <li>
            <a href="course-list.html">
              <span class="brand-text">School Name</span>
            </a>
          </li>
        </ul>
        <ul class="navbar-nav nav-right">
          <li class="nav-item">
            <a
              href="javascript:void(0)"
              data-toggle-state="mobile-topbar-toggle"
            >
              <i class="icon dripicons-dots-3 rotate-90"></i>
            </a>
          </li>
        </ul>
      </nav>
      <nav class="top-toolbar navbar navbar-desktop flex-nowrap">
        <ul class="navbar-nav nav-left">
          <div class="">
            <ul class="site-logo">
              <li class="nav-item">
                <a href="course-list.html">
                  <div class="logo">
                    <img
                      src="../assets/img/avatars/logo_light.png"
                      alt=""
                      style="max-height: 35px; max-width: 190px;"
                    />
                  </div>
                </a>
              </li>
              <!-- <li class="nav-item"><span class="brand-text">School Name</span></li> -->
            </ul>
            <ul class="navbar-nav nav-left">
              <li class="nav-item nav-text">
                <a href="course-list.html">
                  Course
                </a>
              </li>
              <li class="nav-item nav-text">
                <a href="collection-list.html">
                  Collection
                </a>
              </li>
              <li class="nav-item nav-text active">
                <a href="teacher-account-list.html">
                  Account
                </a>
              </li>
            </ul>
          </div>
        </ul>
        <ul class="navbar-nav nav-right">
          <li class="nav-item dropdown">
            <a
              class="nav-link nav-pill user-avatar"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src="../assets/img/avatars/user.png"
                class="w-40 rounded-circle"
                alt="Albert Einstein"
              />
              <!-- <span class="text-white">Amanda</span> -->
            </a>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-accout">
              <div class="dropdown-header pb-3">
                <h5 class="mt-0 mb-0">Amanda</h5>
                <span>support@authenticgoods.co</span>
              </div>
              <a class="dropdown-item" href="teacher-account-personal.html"
                ><i class="icon dripicons-user"></i> My account</a
              >
              <a class="dropdown-item" href="#"
                ><i class="icon dripicons-lock-open"></i> Log Out</a
              >
            </div>
          </li>
        </ul>
      </nav>
      <!-- END TOP TOOLBAR WRAPPER -->
      <div class="content">
        <header class="page-header">
          <div class="d-flex align-items-center">
            <div class="mr-auto">
              <h1>Account</h1>
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
              <button
                type="button"
                class="btn btn-primary btn-outline btn-rounded"
                data-toggle="modal"
                data-target="#AddTeacherModal"
              >
                <i class="la la-plus"></i>Add teacher
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <!-- No courses -->
                  <!--   <div class="bg-secondary text-center p-15 text-light rounded">
                                             No courses
                                        </div> -->
                  <!-- end No courses -->
                  <table
                    id="bs4-table"
                    class="table table-striped"
                    style="width: 100%;"
                  >
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a href="teacher-account-admin.html"
                            ><img
                              src="../assets/img/avatars/user.png"
                              class="w-40 rounded-circle mr-3"
                              alt="Albert Einstein"
                            />Amanda</a
                          >
                        </td>
                        <td>amanada@gmail.com</td>
                        <td><span class="text-success">Active</span></td>
                      </tr>
                      <tr>
                        <td>
                          <a href="teacher-account-admin.html"
                            ><img
                              src="../assets/img/avatars/user.png"
                              class="w-40 rounded-circle mr-3"
                              alt="Albert Einstein"
                            />Diana</a
                          >
                        </td>
                        <td>Diana@gmail.com</td>
                        <td><span class="text-success">Active</span></td>
                      </tr>
                      <tr>
                        <td>
                          <a href="teacher-account-admin.html"
                            ><img
                              src="../assets/img/avatars/user.png"
                              class="w-40 rounded-circle mr-3"
                              alt="Albert Einstein"
                            />Jim</a
                          >
                        </td>
                        <td>jim@gmail.com</td>
                        <td><span class="text-success">Active</span></td>
                      </tr>
                      <tr>
                        <td>
                          <a href="teacher-account-admin.html"
                            ><img
                              src="../assets/img/avatars/user.png"
                              class="w-40 rounded-circle mr-3"
                              alt="Albert Einstein"
                            />Mark</a
                          >
                        </td>
                        <td>mark@gmail.com</td>
                        <td><span class="text-success">Active</span></td>
                      </tr>
                      <tr>
                        <td>
                          <a href="teacher-account-admin.html"
                            ><img
                              src="../assets/img/avatars/user.png"
                              class="w-40 rounded-circle mr-3"
                              alt="Albert Einstein"
                            />Jeffrey</a
                          >
                        </td>
                        <td>Jeffrey@gmail.com</td>
                        <td><span class="text-success">Active</span></td>
                      </tr>
                      <tr>
                        <td>
                          <a href="teacher-account-admin.html"
                            ><img
                              src="../assets/img/avatars/user.png"
                              class="w-40 rounded-circle mr-3"
                              alt="Albert Einstein"
                            />Lawrence</a
                          >
                        </td>
                        <td>lawrence@gmail.com</td>
                        <td><span class="text-success">Active</span></td>
                      </tr>
                      <tr>
                        <td>
                          <a href="teacher-account-admin.html"
                            ><img
                              src="../assets/img/avatars/user.png"
                              class="w-40 rounded-circle mr-3"
                              alt="Albert Einstein"
                            />Peter</a
                          >
                        </td>
                        <td>peter@gmail.com</td>
                        <td><span class="text-danger">Supended</span></td>
                      </tr>
                      <tr>
                        <td>
                          <a href="teacher-account-admin.html"
                            ><img
                              src="../assets/img/avatars/user.png"
                              class="w-40 rounded-circle mr-3"
                              alt="Albert Einstein"
                            />Alice</a
                          >
                        </td>
                        <td>alice@gmail.com</td>
                        <td><span class="text-success">Active</span></td>
                      </tr>
                      <tr>
                        <td>
                          <a href="teacher-account-admin.html"
                            ><img
                              src="../assets/img/avatars/user.png"
                              class="w-40 rounded-circle mr-3"
                              alt="Albert Einstein"
                            />Dominic</a
                          >
                        </td>
                        <td>dominic@gmail.com</td>
                        <td><span class="text-success">Active</span></td>
                      </tr>
                      <tr>
                        <td>
                          <a href="teacher-account-admin.html"
                            ><img
                              src="../assets/img/avatars/user.png"
                              class="w-40 rounded-circle mr-3"
                              alt="Albert Einstein"
                            />Emily</a
                          >
                        </td>
                        <td>emily@gmail.com</td>
                        <td><span class="text-danger">Supended</span></td>
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
  </div>
  <!-- END CONTENT WRAPPER -->
  <!-- Add teacher Modal-->
  <div
    class="modal fade"
    id="AddTeacherModal"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add teacher</h5>
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
          <h4 class="text-center mb-4 mt-2">Add teacher</h4>
          <p>
            Enter teacher's information, and invite teacher to register account.
          </p>
          <form>
            <div class="form-group row">
              <label class="control-label text-right col-3">Name</label>
              <div class="col-9">
                <input
                  type="text"
                  class="form-control"
                  placeholder=" Enter teacher's name"
                  value=""
                />
              </div>
              <div class="invalid-feedback">
                error message
              </div>
            </div>
            <div class="form-group row">
              <label class="control-label text-right col-3">E-mail</label>
              <div class="col-9">
                <input
                  type="text"
                  class="form-control is-invalid"
                  placeholder=" Enter teacher's E-mail"
                  value=""
                />
              </div>
              <div class="invalid-feedback">
                E-mail format error
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
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
            data-toggle="modal"
            data-target="#InviteEmailSentModal"
          >
            Invite
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Invite Email Sent Modal -->
  <div
    class="modal modal-top-frame fade"
    id="InviteEmailSentModal"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        An email has been sent to teacher's email.
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true" class="la la-close"></span>
        </button>
      </div>
    </div>
  </div>
</template>

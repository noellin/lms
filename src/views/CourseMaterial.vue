<template>
  <div id="app">
    <!-- END MENU SIDEBAR WRAPPER -->
    <div class="main-content">
      <course-header></course-header>
      <section class="page-content container-fluid">
        <div class="row">
          <div class="col-4 col-md">
            <div class="card bg-secondary" style="height: 150px">
              <div class="card-body d-flex align-content-between flex-wrap">
                <h5 class="card-title text-white">Open Material</h5>
                <div class="w100 text-right">
                  <p class="card-text text-white">
                    <span class="display-4 counter" data-count="151">151</span
                    ><span class="d-none d-xl-inlineblock">/ 400</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4 col-md">
            <div class="card bg-primary" style="height: 150px">
              <div class="card-body d-flex align-content-between flex-wrap">
                <h5 class="card-title text-white">
                  Picture Book Views<span class="text-light">Teacher</span>
                </h5>
                <div class="w100 text-right">
                  <p class="card-text text-white">
                    <span class="display-4 counter" data-count="13">13</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4 col-md">
            <div class="card bg-success" style="height: 150px">
              <div class="card-body d-flex align-content-between flex-wrap">
                <h5 class="card-title text-white">
                  Video Views<span class="text-light">Teacher</span>
                </h5>
                <div class="w100 text-right">
                  <p class="card-text text-white">
                    <span class="display-4 counter" data-count="29">29</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 col-md">
            <div class="card bg-warning" style="height: 150px">
              <div class="card-body d-flex align-content-between flex-wrap">
                <h5 class="card-title text-white">
                  Picture Book Views<span class="text-light">Student</span>
                </h5>
                <div class="w100 text-right">
                  <p class="card-text text-white">
                    <span class="display-4 counter" data-count="173">173</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 col-md">
            <div class="card bg-danger" style="height: 150px">
              <div class="card-body d-flex align-content-between flex-wrap">
                <h5 class="card-title text-white">
                  Video Views<span class="text-light">Student</span>
                </h5>
                <div class="w100 text-right">
                  <p class="card-text text-white">
                    <span class="display-4 counter" data-count="197">197</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <div class="pb-3">
            <div class="form-row">
              <div class="form-group form-rounded mb-0 mr-3">
                <select class="form-control">
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
            <button
              type="button"
              class="btn btn-primary btn-rounded btn-outline"
              data-toggle="modal"
              data-target="#AssignmentModal"
            >
              <i class="la la-clipboard"></i>Assignment
              <span class="badge badge-primary">2</span>
            </button>
          </div>
        </div>
        <div class="row">
          <div
            class="col-12"
            v-for="textbook in textbookList"
            :key="textbook.resourceid"
          >
            <div class="card">
              <div class="card-body">
                <div class="media">
                  <div
                    class="align-self-center overlay-wrap mr-4 w-150 h-150 border"
                  >
                    <span class="overlay-icon"
                      ><i class="fas fa-video"></i
                    ></span>
                    <a
                      href="#"
                      title=""
                      class="overlay-img"
                      style="background-image: url(../assets/img/avatars/3.jpg)"
                    ></a>
                  </div>
                  <div class="media-body">
                    <div class="d-flex justify-content-between">
                      <div>
                        <!-- <span class="badge badge-pill badge-secondary mt-2 mr-2"
                          >Lavel J</span
                        ><span class="badge badge-pill badge-secondary mt-2"
                          >Topic A</span
                        > -->
                        <span class="badge badge-pill badge-secondary mt-2"
                          >缺少該項目</span
                        >
                        <h4
                          class="mb-0 mt-3 d-flex align-self-center text-primary"
                        >
                          <a href="" title="">{{ textbook.resource_name }}</a>
                        </h4>
                        <p class="text-muted mt-1">
                          <small class="fw300">Last played 2020.06.01</small>
                        </p>
                      </div>
                      <div class="text-primary">
                        start<a
                          href=""
                          class="btn-rounded-icon btn-primary rounded ml-2"
                          ><i
                            class="zmdi zmdi-arrow-right zmdi-hc-fw text-white"
                          ></i
                        ></a>
                      </div>
                    </div>
                    <div class="border-top pt-3 d-flex justify-content-between">
                      <div>
                        <button
                          type="button"
                          class="btn btn-sm btn-secondary btn-rounded btn-outline"
                          data-toggle="modal"
                          data-target="#addAssignment"
                        >
                          <i class="zmdi zmdi-plus zmdi-hc-fw"></i>Assignment
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-secondary btn-rounded btn-outline"
                          data-toggle="modal"
                          data-target="#addSpeakingquiz"
                        >
                          <i class="zmdi zmdi-plus zmdi-hc-fw"></i>Speaking quiz
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-secondary btn-rounded btn-outline"
                          data-toggle="modal"
                          data-target="#addtoColletion"
                        >
                          <i class="zmdi zmdi-plus zmdi-hc-fw"></i>Collection
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          class="btn btn-sm btn-secondary btn-rounded btn-outline"
                          data-toggle="modal"
                          data-target="#OpenMaterial"
                        >
                          Open Material
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--  <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="media">
                  <div
                    class="align-self-center overlay-wrap mr-4 w-150 h-150 border"
                  >
                    <span class="overlay-icon"
                      ><i class="fas fa-book-open"></i
                    ></span>
                    <a
                      href="#"
                      title=""
                      class="overlay-img"
                      style="background-image: url(../assets/img/avatars/3.jpg)"
                    ></a>
                  </div>
                  <div class="media-body">
                    <div class="d-flex justify-content-between">
                      <div>
                        <span class="badge badge-pill badge-secondary mt-2 mr-2"
                          >Lavel J</span
                        ><span class="badge badge-pill badge-secondary mt-2"
                          >Topic A</span
                        >
                        <h4
                          class="mb-0 mt-3 d-flex align-self-center text-primary"
                        >
                          <a href="" title="">A Pocket Park for Tiny</a>
                        </h4>
                        <p class="text-muted mt-1">
                          <small class="fw300"
                            >This material has not been played.</small
                          >
                        </p>
                      </div>
                      <div class="text-primary">
                        start<a
                          href=""
                          class="btn-rounded-icon btn-primary rounded ml-2"
                          ><i
                            class="zmdi zmdi-arrow-right zmdi-hc-fw text-white"
                          ></i
                        ></a>
                      </div>
                    </div>
                    <div class="border-top pt-3 d-flex justify-content-between">
                      <div>
                        <button
                          type="button"
                          class="btn btn-sm btn-secondary btn-rounded btn-outline"
                        >
                          <i class="zmdi zmdi-plus zmdi-hc-fw"></i>Assignment
                        </button>
                        <a
                          href="speaking-quiz.html"
                          class="btn btn-sm btn-secondary btn-rounded btn-outline"
                          ><i class="zmdi zmdi-plus zmdi-hc-fw"></i>Speaking
                          quiz</a
                        >
                        <button
                          type="button"
                          class="btn btn-sm btn-secondary btn-rounded btn-outline"
                          data-toggle="modal"
                          data-target="#addtoColletion"
                        >
                          <i class="zmdi zmdi-plus zmdi-hc-fw"></i>Collection
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          class="btn btn-sm btn-secondary btn-rounded btn-outline"
                          data-toggle="modal"
                          data-target="#OpenMaterial"
                        >
                          Open Material
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="media">
                  <div
                    class="align-self-center overlay-wrap mr-4 w-150 h-150 border"
                  >
                    <span class="overlay-icon"
                      ><i class="fas fa-book-open"></i
                    ></span>
                    <a
                      href="#"
                      title=""
                      class="overlay-img"
                      style="background-image: url(../assets/img/avatars/3.jpg)"
                    ></a>
                  </div>
                  <div class="media-body">
                    <div class="d-flex justify-content-between">
                      <div>
                        <span class="badge badge-pill badge-secondary mt-2 mr-2"
                          >Lavel J</span
                        ><span class="badge badge-pill badge-secondary mt-2"
                          >Topic A</span
                        >
                        <h4
                          class="mb-0 mt-3 d-flex align-self-center text-primary"
                        >
                          <a href="" title="">Broken Arm Blues</a>
                        </h4>
                        <p class="text-muted mt-1">
                          <small class="fw300">Last played 2020.06.01</small>
                        </p>
                      </div>
                      <div class="text-primary">
                        start<a
                          href=""
                          class="btn-rounded-icon btn-primary rounded ml-2"
                          ><i
                            class="zmdi zmdi-arrow-right zmdi-hc-fw text-white"
                          ></i
                        ></a>
                      </div>
                    </div>
                    <div class="border-top pt-3 d-flex justify-content-between">
                      <div>
                        <button
                          type="button"
                          class="btn btn-sm btn-secondary btn-rounded btn-outline"
                        >
                          <i class="zmdi zmdi-plus zmdi-hc-fw"></i>Assignment
                        </button>
                        <a
                          href="speaking-quiz.html"
                          class="btn btn-sm btn-secondary btn-rounded btn-outline"
                          ><i class="zmdi zmdi-plus zmdi-hc-fw"></i>Speaking
                          quiz</a
                        >
                        <button
                          type="button"
                          class="btn btn-sm btn-secondary btn-rounded btn-outline"
                          data-toggle="modal"
                          data-target="#addtoColletion"
                        >
                          <i class="zmdi zmdi-plus zmdi-hc-fw"></i>Collection
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          class="btn btn-sm btn-secondary btn-rounded btn-outline"
                          data-toggle="modal"
                          data-target="#OpenMaterial"
                        >
                          Open Material
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </section>
    </div>

    <!-- END CONTENT WRAPPER -->
    <!-- Open material MODAL -->
    <div
      class="modal fade"
      id="OpenMaterial"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      data-modal="scroll"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Open material</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" class="zmdi zmdi-Cancel"></span>
            </button>
          </div>
          <div class="modal-body">
            <p>Open this material and allow 201 ENGLISH students to view it.</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-outline btn-rounded"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" class="btn btn-primary btn-rounded">
              Open
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- addtoColletion MODAL -->
    <div
      class="modal fade"
      id="addtoColletion"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      data-modal="scroll"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add to collection</h5>
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
            <form>
              <div class="form-group row">
                <label class="control-label text-right col-sm-3"
                  >Collection</label
                >
                <div class="col-sm-9">
                  <select class="form-control">
                    <optgroup label="title">
                      <option>First grade</option>
                      <option>Elementary</option>
                      <option>Intermediate</option>
                      <option>High Intermediate</option>
                      <option>Advanced</option>
                    </optgroup>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <label class="control-label text-right col-sm-3"
                  >Sequence</label
                >
                <div class="col-sm-9">
                  <div
                    class="border"
                    style="max-height: 300px"
                    data-scroll="dark"
                  >
                    <ul class="sequence">
                      <li class="d-flex justify-content-between">
                        <button class="btn btn-nostyle btn-move mr-3">
                          <i class="la la-ellipsis-v"></i
                          ><i class="la la-ellipsis-v"></i>Unit1 Conversation
                        </button>
                        <button class="btn btn-nostyle btn-remove">
                          <i
                            class="zmdi zmdi-minus-circle zmdi-hc-fw text-secondary"
                          ></i>
                        </button>
                      </li>
                      <li class="d-flex justify-content-between">
                        <button class="btn btn-nostyle btn-move mr-3">
                          <i class="la la-ellipsis-v"></i
                          ><i class="la la-ellipsis-v"></i>Unit2 Conversation
                        </button>
                        <button class="btn btn-nostyle btn-remove">
                          <i
                            class="zmdi zmdi-minus-circle zmdi-hc-fw text-secondary"
                          ></i>
                        </button>
                      </li>
                      <li class="d-flex justify-content-between">
                        <button class="btn btn-nostyle btn-move mr-3">
                          <i class="la la-ellipsis-v"></i
                          ><i class="la la-ellipsis-v"></i>Broken Arm Blues
                        </button>
                        <button class="btn btn-nostyle btn-remove">
                          <i
                            class="zmdi zmdi-minus-circle zmdi-hc-fw text-secondary"
                          ></i>
                        </button>
                      </li>
                      <li class="d-flex justify-content-between">
                        <button class="btn btn-nostyle btn-move mr-3">
                          <i class="la la-ellipsis-v"></i
                          ><i class="la la-ellipsis-v"></i> Unit3 Conversation
                        </button>
                        <button class="btn btn-nostyle btn-remove">
                          <i
                            class="zmdi zmdi-minus-circle zmdi-hc-fw text-secondary"
                          ></i>
                        </button>
                      </li>
                      <li class="d-flex justify-content-between">
                        <button class="btn btn-nostyle btn-move mr-3">
                          <i class="la la-ellipsis-v"></i
                          ><i class="la la-ellipsis-v"></i> A Pocket Park for
                          Tiny
                        </button>
                        <button class="btn btn-nostyle btn-remove">
                          <i
                            class="zmdi zmdi-minus-circle zmdi-hc-fw text-secondary"
                          ></i>
                        </button>
                      </li>
                      <li class="d-flex justify-content-between">
                        <button class="btn btn-nostyle btn-move mr-3">
                          <i class="la la-ellipsis-v"></i
                          ><i class="la la-ellipsis-v"></i>Unit1 Conversation
                        </button>
                        <button class="btn btn-nostyle btn-remove">
                          <i
                            class="zmdi zmdi-minus-circle zmdi-hc-fw text-secondary"
                          ></i>
                        </button>
                      </li>
                      <li class="d-flex justify-content-between">
                        <button class="btn btn-nostyle btn-move mr-3">
                          <i class="la la-ellipsis-v"></i
                          ><i class="la la-ellipsis-v"></i>Unit2 Conversation
                        </button>
                        <button class="btn btn-nostyle btn-remove">
                          <i
                            class="zmdi zmdi-minus-circle zmdi-hc-fw text-secondary"
                          ></i>
                        </button>
                      </li>
                      <li class="d-flex justify-content-between">
                        <button class="btn btn-nostyle btn-move mr-3">
                          <i class="la la-ellipsis-v"></i
                          ><i class="la la-ellipsis-v"></i>Broken Arm Blues
                        </button>
                        <button class="btn btn-nostyle btn-remove">
                          <i
                            class="zmdi zmdi-minus-circle zmdi-hc-fw text-secondary"
                          ></i>
                        </button>
                      </li>
                      <li class="d-flex justify-content-between">
                        <button class="btn btn-nostyle btn-move mr-3">
                          <i class="la la-ellipsis-v"></i
                          ><i class="la la-ellipsis-v"></i> Unit3 Conversation
                        </button>
                        <button class="btn btn-nostyle btn-remove">
                          <i
                            class="zmdi zmdi-minus-circle zmdi-hc-fw text-secondary"
                          ></i>
                        </button>
                      </li>
                      <li class="d-flex justify-content-between">
                        <button class="btn btn-nostyle btn-move mr-3">
                          <i class="la la-ellipsis-v"></i
                          ><i class="la la-ellipsis-v"></i> A Pocket Park for
                          Tiny
                        </button>
                        <button class="btn btn-nostyle btn-remove">
                          <i
                            class="zmdi zmdi-minus-circle zmdi-hc-fw text-secondary"
                          ></i>
                        </button>
                      </li>
                    </ul>
                  </div>
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
            <button type="button" class="btn btn-primary btn-rounded">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- addAssignment modal-->
    <div
      class="modal fade"
      id="addAssignment"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      data-modal="scroll"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalTitle1">
              <i class="zmdi zmdi-plus zmdi-hc-fw"></i>Assignment
            </h5>
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
            <p>Unit9 MY FAMILY</p>
            <div class="custom-control custom-checkbox form-check pb-2">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck1"
              />
              <label class="custom-control-label" for="customCheck1"
                >Lesson 1 CONVERSATION</label
              >
            </div>
            <div class="custom-control custom-checkbox form-check pb-2">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck2"
              />
              <label class="custom-control-label" for="customCheck2"
                >Lesson 2 MUSIC VIDEO</label
              >
            </div>
            <div class="custom-control custom-checkbox form-check pb-2">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck3"
              />
              <label class="custom-control-label" for="customCheck3"
                >Lesson 3 PRONOUNCE</label
              >
            </div>
            <div class="custom-control custom-checkbox form-check pb-2">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck4"
              />
              <label class="custom-control-label" for="customCheck4"
                >Lesson 4 VOCAB RAP</label
              >
            </div>
            <div class="custom-control custom-checkbox form-check pb-2">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck5"
              />
              <label class="custom-control-label" for="customCheck5"
                >Lesson 5 GRAMMAR</label
              >
            </div>
            <div class="custom-control custom-checkbox form-check pb-2">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck6"
              />
              <label class="custom-control-label" for="customCheck6"
                >Lesson 6 KARAOKE</label
              >
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-outline btn-rounded"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary btn-rounded">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- addSpeakingquiz MODAL -->
    <div
      class="modal fade"
      id="addSpeakingquiz"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      data-modal="scroll"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalTitle1">Speaking quiz</h5>
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
            <p>Unit9 MY FAMILY</p>
            <div>
              <a
                class="btn btn-primary btn-outline btn-block"
                @click="gotoSpeakingQuiz()"
                >Lesson 1 CONVERSATION</a
              >
              <a class="btn btn-primary btn-outline btn-block"
                >Lesson 2 MUSIC VIDEO</a
              >
              <a class="btn btn-primary btn-outline btn-block"
                >Lesson 3 PRONOUNCE</a
              >
              <a class="btn btn-primary btn-outline btn-block"
                >Lesson 4 VOCAB RAP</a
              >
              <a class="btn btn-primary btn-outline btn-block"
                >Lesson 5 GRAMMAR</a
              >
              <a class="btn btn-primary btn-outline btn-block"
                >Lesson 6 KARAOKE</a
              >
              <a class="btn btn-primary btn-outline btn-block"
                >Lesson 7 CONVERSATION</a
              >
              <a class="btn btn-primary btn-outline btn-block"
                >Lesson 8 MUSIC VIDEO</a
              >
              <a class="btn btn-primary btn-outline btn-block"
                >Lesson 9 PRONOUNCE</a
              >
              <a class="btn btn-primary btn-outline btn-block"
                >Lesson 10 VOCAB RAP</a
              >
              <a class="btn btn-primary btn-outline btn-block"
                >Lesson 11 GRAMMAR</a
              >
              <a class="btn btn-primary btn-outline btn-block"
                >Lesson 12 KARAOKE</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Assignment MODAL -->
    <div
      class="modal fade"
      id="AssignmentModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Assignment</h5>
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
            <form>
              <div class="form-group row">
                <label class="control-label text-right col-sm-3">title</label>
                <div class="col-sm-9">
                  <div
                    class="bg-light rounded"
                    style="max-height: 300px"
                    data-scroll="dark"
                  >
                    <ul class="sequence">
                      <li
                        class="d-flex justify-content-between border bg-white rounded"
                      >
                        <div class="mr-3">
                          <span class="badge badge-pill badge-primary"
                            >Reading</span
                          >
                          A Pocket Park for Tiny
                        </div>
                        <button class="btn btn-nostyle btn-remove">
                          <i
                            class="zmdi zmdi-minus-circle zmdi-hc-fw text-secondary"
                          ></i>
                        </button>
                      </li>
                      <li
                        class="d-flex justify-content-between border bg-white rounded"
                      >
                        <div class="mr-3">
                          <span class="badge badge-pill badge-warning"
                            >Watching</span
                          >
                          Unit4 NUMBER RUMBA SONG
                        </div>
                        <button class="btn btn-nostyle btn-remove">
                          <i
                            class="zmdi zmdi-minus-circle zmdi-hc-fw text-secondary"
                          ></i>
                        </button>
                      </li>
                      <li
                        class="d-flex justify-content-between border bg-white rounded"
                      >
                        <div class="mr-3">
                          <span class="badge badge-pill badge-accent"
                            >Speaking Quiz</span
                          >
                          Unit4 NUMBER RUMBA SONG
                        </div>
                        <button class="btn btn-nostyle btn-remove">
                          <i
                            class="zmdi zmdi-minus-circle zmdi-hc-fw text-secondary"
                          ></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label class="control-label text-right col-sm-3">For</label>
                <div class="col-sm-9">
                  <select class="form-control">
                    <option>All students</option>
                    <option>Allen</option>
                    <option>Ben</option>
                    <option>Calvin</option>
                    <option>David</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-form-label col-sm-3 text-right">Due</label>
                <div class="col">
                  <input
                    type="text"
                    class="form-control date-picker-input"
                    placeholder="Select Date"
                  />
                </div>
                <div class="col-2 pt-2 pl-0">23:59:59</div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-outline btn-rounded"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary btn-rounded"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#AssignmentModal-2"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- AssignmentModal-2 MODAL-->
    <div
      class="modal fade"
      id="AssignmentModal-2"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalTitle1">Assignment</h5>
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
            <h5>How difficult is this assignment?</h5>
            <p>System will send more rewards to more difficult assignment.</p>
            <div class="text-center mt-4 mb-4">
              <div class="form-check form-check-inline text-primary">Easy</div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="RadioInline1"
                  name="RadioInline"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="RadioInline1">1</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="RadioInline2"
                  name="RadioInline"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="RadioInline2">2</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="RadioInline3"
                  name="RadioInline"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="RadioInline3">3</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="RadioInline4"
                  name="RadioInline"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="RadioInline4">4</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="RadioInline5"
                  name="RadioInline"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="RadioInline5">5</label>
              </div>
              <div class="form-check form-check-inline text-primary">
                Difficult
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-outline btn-rounded"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" class="btn btn-primary btn-rounded">
              Assign
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import CustomHeader from "../components/CustomHeader";
// import MenuLeft from "../components/MenuLeft";
import { ApiGetCourseDatail } from "../http/apis/CourseDetail";
import CourseHeader from "../components/CourseHeader";
export default {
  name: "CourseMaterial",
  components: {
    CourseHeader,
  },
  data() {
    return {
      courseid: this.$route.params.courseid,
    };
  },
  created() {
    // this.getCourseDatail();
  },
  computed: {
    textbookList() {
      return this.$store.state.courseInfo.textbookList;
    },
  },
  methods: {
    // getCourseDatail() {
    //   ApiGetCourseDatail.get(this.courseid).then((response) => {
    //     this.courseInfo = response.csrInfo;
    //     this.textbookList = response.record;
    //   });
    // },
    gotoSpeakingQuiz() {
      $("#addSpeakingquiz").modal("hide");
      this.$router.push({
        path: "/speaking_quiz/course=301 English/type=Material",
      });
    },
  },
};
</script>

<style scoped lang="scss">
//@import '../assets/css/igroup.css';
</style>
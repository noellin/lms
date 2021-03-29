<template lang="">
 <div id="app2">
    <!-- END MENU SIDEBAR WRAPPER -->

      <!-- TOP TOOLBAR WRAPPER -->

      <!-- END TOP TOOLBAR WRAPPER -->
      <div class="content page-aside-left" v-show="dbData !== undefined">
        <div class="main-content">
          <course-header></course-header>
          <section class="page-content container-fluid">
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AssignmentCreate",
};
</script>
<style lang="">
</style>
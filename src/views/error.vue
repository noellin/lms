<template>
  <div
    class="container-fluid d-flex flex-wrap justify-content-center"
    id="errorPage"
  >
    <div class="d-flex flex-wrap" style="height: 100vh">
      <div class="col-12 col-md-6 align-self-center">
        <img
          v-lazy="require('../assets/img/images/404.svg')"
          alt=""
          class="img-fluid"
        />
      </div>
      <div class="col-12 col-md-6 align-self-center error-page-text">
        <h1 class="display-4 text-white mb-2">404</h1>
        <p class="text-white">
          {{ $t("we-cant-seem-to-find-the-page-your-looking-for") }}.
        </p>
        <button
          class="btn btn-primary btn-rounded btn-outline btn-lg"
          @click="backToPreview()"
        >
          {{ $t("back-to-home") }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ErrorPage",
  components: {},
  data() {
    return {};
  },

  methods: {
    backToPreview() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped lang="scss">
#errorPage {
  background-color: #32c1db !important;
}
</style>
<template lang="">
  <div class=" scrollTop"  @click="openAgt()">
      <span class="d-none d-xl-block scroll">
        <div class="circle d-flex justify-content-center align-items-center p-0"><i class="zmdi zmdi-assignment gotop text-light "></i>
        <i class="fas fa-circle fc"></i></div>
        </span>
  </div>
</template>
<script>
export default {
  name: "AssignmentCar",
  data() {
    return {
      scrollTop: 0,
      time: 0,
      dParams: 20,
      scrollState: 0,
    };
  },
  computed: {},
  mounted() {
    window.addEventListener("scroll", this.getScrollTop);
  },
  methods: {
    openAgt() {},
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
.gotop {
  z-index: 9999;
}
.scrollTop {
  position: fixed;
  right: 48px;
  bottom: 60px;
  cursor: pointer;
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
  background: lightblue;
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
</style>
<template>
  <div class="message-alert">
    <transition-group name="fade">
      <div
        class="alert justify-content-center align-items-center d-flex"
        :class="'alert-' + item.status"
        v-for="(item, i) in messages"
        :key="item + i"
      >
        <font-awesome-icon
          class="mr-1 alert-text"
          :icon="['far', 'check-circle']"
        />
        <span class="alert-text">{{ item.message }}</span>
        <button
          type="button"
          class="close alert"
          @click="removeMessage(i)"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    updateMessage(message, status) {
      const timestamp = Math.floor(new Date() / 1000);
      this.messages.push({
        message,
        status,
        timestamp,
      });
      if (this.messages.length > 1) {
        this.messages.splice(0, 1);
      }
      this.removeMessageWithTiming(timestamp);
    },
    removeMessage(num) {
      this.messages.splice(num, 1);
    },
    removeMessageWithTiming(timestamp) {
      const vm = this;
      setTimeout(() => {
        vm.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            vm.messages.splice(i, 1);
          }
        });
      }, 4000);
    },
  },
  created() {
    const vm = this;
    // 自定義名稱 'messsage:push'
    // message: 傳入參數
    // status: 樣式，預設值為 warning
    vm.$bus.$on("messsage:push", (message, status = "warning") => {
      vm.updateMessage(message, status);
    });
    // vm.$bus.$emit('messsage:push');
  },
};
</script>

<style scope>
.message-alert {
  position: fixed;
  max-width: 100%;
  width: 100%;
  top: 0px;
  z-index: 1100;
}
.alert {
  height: 50px;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s ease;
}

.fade-enter {
  transform: translateY(-50px);
  opacity: 0;
}

.fade-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}
.alert-primary {
}
</style>
<template>
  <div>
    <div
      class="dataTables_paginate paging_simple_numbers"
      id="recent-transaction-table_paginate"
    >
      <ul class="pagination d-flex justify-content-end">
        <li
          class="paginate_button page-item previous"
          id="recent-transaction-table_previous"
          :class="{ disabled: !pages.has_pre }"
        >
          <a
            @click.prevent="updatePage(pages.current_page - 1)"
            href="#"
            aria-controls="recent-transaction-table"
            data-dt-idx="0"
            tabindex="0"
            class="page-link"
            >Prev</a
          >
        </li>
        <li
          class="paginate_button page-item active"
          v-for="page in pages.total_pages"
          :key="page"
          :class="{ active: pages.current_page == page }"
        >
          <a
            @click.prevent="updatePage(page)"
            href="#"
            aria-controls="recent-transaction-table"
            data-dt-idx="1"
            tabindex="0"
            class="page-link"
            >{{ page }}</a
          >
        </li>

        <li
          class="paginate_button page-item next"
          id="recent-transaction-table_next"
          :class="{ disabled: !pages.has_next }"
        >
          <a
            @click.prevent="updatePage(pages.current_page + 1)"
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
</template>
<script>
// :pages="{ 頁碼資訊 }"
// @emitPages="更新頁面事件"
export default {
  name: "Layout",
  props: ["pages"],
  data() {
    return {};
  },
  methods: {
    updatePage(page) {
      this.$emit("emitPages", page);
    },
  },
};
</script>
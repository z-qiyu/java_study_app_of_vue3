<template>
  <div id="menu">
    <div class="table">
      <h4>{{ $store.state.data.page.start.title }}</h4>
      <span
        v-for="item in $store.state.data.page.start.menu"
        :key="item.page"
        :class="
          $store.state.page.page == item.page &&
          $store.state.page.type == 'start'
            ? 'item active'
            : 'item'
        "
        @click="
          $store.commit('setPageSnyc', { type: 'start', page: item.page })
        "
        >{{ item.name }}</span
      >
    </div>
    <div class="table">
      <h4>{{ $store.state.data.page.forword.title }}</h4>
      <span
        v-for="item in $store.state.data.page.forword.menu"
        :key="item.page"
        :class="
          $store.state.page.page == item.page &&
          $store.state.page.type == 'forword'
            ? 'item active'
            : 'item'
        "
        @click="
          $store.commit('setPageSnyc', { type: 'forword', page: item.page })
        "
        >{{ item.name }}</span
      >
    </div>
    <div class="table">
      <h4>{{ $store.state.data.page.actualCombat.title }}</h4>
      <span
        v-for="item in $store.state.data.page.actualCombat.menu"
        :key="item.page"
        :class="
          $store.state.page.page == item.page &&
          $store.state.page.type == 'actualCombat'
            ? 'item active'
            : 'item'
        "
        @click="
          $store.commit('setPageSnyc', {
            type: 'actualCombat',
            page: item.page,
          })
        "
        >{{ item.name }}</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeMenu",
  components: {},
});
</script>

<style lang="scss" scoped>
#menu {
  display: flex;
  position: absolute;
  flex-direction: column;
  left: 15%;
  width: 14%;
  box-shadow: 1px 0 3px 1px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 0 10px;
  overflow-y: scroll;
  max-height: 80%;
}
.table {
  display: flex;
  flex-direction: column;
  width: 100%;

  h4 {
    border-left: 3px solid rgb(77, 163, 212);
  }

  * {
    width: 99%;
    text-align: start;
    padding-left: 2%;
  }

  .item {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 14px;
    cursor: pointer;
    border-radius: 3px;
    margin-top: 3px;
    transition: all 0.25s linear 0s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      color: rgb(77, 163, 212);
    }
  }
}
</style>

<style>
.active {
  background-color: rgba(0, 0, 0, 0.1);
  color: rgb(124, 69, 212);
}
</style>

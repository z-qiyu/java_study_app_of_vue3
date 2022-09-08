<template>
  <div class="header-nav">
    <h2>JAVA 学习 入门到入坑</h2>
    <span>{{ $store.state.page.page }}</span>
    <span>
      <img src="../assets/logo.png" />
      <h4>Website Of Vue And TS</h4>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderNav",
  components: {},
});
</script>

<style lang="scss" scoped>
.header-nav {
  width: 94%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 3%;
  justify-content: space-between;
  box-shadow: 1px 0 7px 2px rgb(186, 175, 223);
  background: linear-gradient(65deg, rgb(143, 175, 194), rgb(186, 175, 223));
  margin-bottom: 20px;
  max-height: 10%;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      width: 32px;
      height: 32px;
      margin-right: 10px;
    }
  }
}
</style>

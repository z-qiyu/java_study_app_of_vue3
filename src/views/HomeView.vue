<template>
  <div class="home">
    <header-nav></header-nav>
    <menu-vue></menu-vue>
    <context></context>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderNav from "@/components/HeaderNav.vue";
import Context from "@/components/Context.vue";
import MenuVue from "../components/Menu.vue";

export default defineComponent({
  name: "HomeView",
  components: { HeaderNav, Context, MenuVue },
});
</script>

<style lang="scss">
#home {
  width: 100%;
}
</style>

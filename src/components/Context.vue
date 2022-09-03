<template>
  <div id="context">
    <template v-if="$store.state.page.page === '0'">
      <div id="main">
        <button
          @click="
            $store.commit('setPageSnyc', {
              type: 'start',
              page: '1',
            })
          "
        >
          get start to learn
        </button>
        <span>Java入门到入坑教程<br />点击右边按钮开始学习</span>
      </div>
    </template>
    <template v-else>
      <component :is="getFile()"></component>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import start1 from "../components/Pages/Start-1.vue";

export default defineComponent({
  name: "HomeContext",
  components: {
    start1: start1,
  },
  data() {
    return {
      size: 2049 / 1153,
    };
  },
  mounted() {
    this.reSize();
  },
  methods: {
    getFile(): string {
      return this.$store.state.page.type + this.$store.state.page.page;
    },
    reSize() {
      let img = document.getElementById("main");
      if (img) {
        img.style.height = img.offsetWidth / this.size + "px";
      }
    },
  },
});
</script>

<style lang="scss" scoped>
#context {
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  left: 30%;
  right: 20%;
  box-shadow: 1px 0 3px 1px rgba(0, 0, 0, 0.3);
  border-radius: 10px;

  #main {
    background-image: url("../assets/java.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: 100% 100%;
    background-size: 100% 100%;
    width: 100%;
    border-radius: 10px;
    position: relative;

    button {
      position: absolute;
      top: 64%;
      font-size: 20px;
      font-weight: bold;
      right: 43%;
      left: 39%;
      cursor: pointer;
      border-radius: 10px;
      border: none;
      box-shadow: 1px 1px 7px 2px rgba(0, 0, 0, 0.3);
      padding: 10px 0;
      color: rgb(77, 163, 212);

      &:hover {
        box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.3);
      }
    }

    span {
      position: absolute;
      color: #fff;
      left: 2%;
      font-size: x-large;
      top: 60%;
      font-weight: bold;
    }
  }
}
</style>

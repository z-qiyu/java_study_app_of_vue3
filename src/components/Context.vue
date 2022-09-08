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
import start2 from "../components/Pages/Start-2.vue";
import start3 from "../components/Pages/Start-3.vue";
import start4 from "../components/Pages/Start-4.vue";
import start5 from "../components/Pages/Start-5.vue";
import start6 from "../components/Pages/Start-6.vue";
import start7 from "../components/Pages/Start-7.vue";
import start8 from "../components/Pages/Start-8.vue";
import start9 from "../components/Pages/Start-9.vue";
import start10 from "../components/Pages/Start-10.vue";
import start11 from "../components/Pages/Start-11.vue";
import start12 from "../components/Pages/Start-12.vue";
import start13 from "../components/Pages/Start-13.vue";
import start14 from "../components/Pages/Start-14.vue";

export default defineComponent({
  name: "HomeContext",
  components: {
    start1: start1,
    start2: start2,
    start3: start3,
    start4: start4,
    start5: start5,
    start6: start6,
    start7: start7,
    start8: start8,
    start9: start9,
    start10: start10,
    start11: start11,
    start12: start12,
    start13: start13,
    start14: start14,
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
  max-height: 88%;
  overflow-y: scroll;

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

<style lang="scss">
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 98%;
  padding: 10px 1%;

  h2 {
    text-align: start;
    width: 100%;
  }

  .button {
    text-decoration-line: none;
    padding: 10px 30px;
    box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    background: linear-gradient(65deg, rgb(52, 117, 179), rgb(17, 94, 184));
    color: #fff;
    font-weight: bold;
    cursor: pointer;
  }

  h4 {
    text-align: start;
    width: 100%;
  }

  img {
    width: 98%;
    border: 1px solid rgba(0, 0, 0, 0.3);
    box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-bottom: 20px;
  }

  p {
    width: 100%;
    text-align: start;
  }

  pre {
    width: 98%;
    padding: 1em 1%;
    margin: 0;
    margin-bottom: 20px;

    code {
      width: 100%;
    }
  }
}

.highlight {
  color: rgb(173, 14, 126);
  font-size: large;
  font-weight: bold;
}
</style>

<template>
  <div class="page">
    <h2>多态</h2>
    <p class="highlight">注：本章与继承，重写重载有关，具体查看前面章节</p>
    <p class="highlight">
      多态:
      大概理解为,同一个方法，有不同的处理方式,多态的实现途径有三种：重写、重载、接口实现，虽然它们的实现方式不一样，但是核心都是：同一行为的不同表现形式。
    </p>
    <p class="highlight">
      例如: 动物有吃方法，有移动方法; 鱼继承动物,狗也继动物;
      鱼吃水下浮游生物，狗吃肉, 鱼靠游泳移动自己的位置， 狗靠奔跑移动自己的位置;
      <br />
      鱼和狗都属于动物类，但是有不同的食物来源，和不同的移动方式
    </p>
    <a
      class="button"
      @click="$store.commit('setPageSnyc', { type: 'start', page: '14' })"
      >下一章</a
    >
  </div>
</template>

<script lang="ts">
import Prism from "prismjs";
import { defineComponent } from "vue";

export default defineComponent({
  name: "StartNum13",
  mounted() {
    Prism.highlightAll();
  },
});
</script>

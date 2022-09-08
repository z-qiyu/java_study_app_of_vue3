<template>
  <div class="page">
    <h2>安装idea</h2>
    <p>
      IDEA 全称 IntelliJ IDEA
      是一个面向java程序员的IDE(注：IDE为集成开发环境，内置很多功能，如：语法高亮、支持Docker、支持JFX、内置终端等等)，<br />
      是Jetbrains公司开发的，该公司有很多优秀的IDE，如Pycharm（面向python），Goland（面向golang），PhpStorm（面向php）等等。
    </p>
    <a
      class="button"
      href="https://www.jetbrains.com/idea/download/#section=windows"
      target="_blank"
      >点此下载IntelliJ IDEA</a
    >
    <h4># 跳转链接后得到以下界面</h4>
    <img src="../../assets/idea-url.png" />
    <p>
      点击Window,来下载<span class="highlight">Windows版本Idea</span
      >，分为：<br />
      <span class="highlight">社区版（免费，限制功能）</span><br />
      <span class="highlight">企业版（收费，功能齐全）</span><br />
    </p>
    <a
      class="button"
      target="_blank"
      href="https://blog.csdn.net/qq_45867488/article/details/115612756"
      >详细安装教程</a
    >
    <p class="highlight">安装完成</p>
    <a
      class="button"
      @click="$store.commit('setPageSnyc', { type: 'start', page: '3' })"
      >下一章</a
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "StartNum2",
});
</script>

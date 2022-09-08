<template>
  <div class="page">
    <h2>安装jdk</h2>
    <a
      class="button"
      href="https://www.oracle.com/java/technologies/downloads/"
      target="_blank"
      >点此下载JDK</a
    >
    <h4># 跳转链接后得到以下界面</h4>
    <img src="../../assets/download_java.png" />
    <p>
      点击Window,来下载<span class="highlight">Windows版本java</span
      >,这里下载java18(java 版本 18),这里有三种安装文件:<br />第一种zip压缩文件,<br />第二种自动下载exe文件,<br />第三种种自动下载msi文件,<br />建议点击<span
        class="highlight"
        >x64 Installer 或者 x64 MSI Installer 的链接来下载JDK</span
      ><br /><br />注:这里演示点击exe文件自动下载(第二种)
    </p>
    <p>
      点击下载文件进行自动安装JDK，如下图更改安装位置，该图为默认安装位置，环境变量无需配置，自动配置完成
    </p>
    <img src="../../assets/install-1.png" />
    <p>
      Win+R 运行cmd， 输入java --version 验证是否安装成功，<span
        class="highlight"
        >版本号为java 18.0.2.1</span
      >，如下图
    </p>
    <img src="../../assets/java-version.png" />
    <p class="highlight">安装完成</p>
    <a
      class="button"
      @click="$store.commit('setPageSnyc', { type: 'start', page: '2' })"
      >下一章</a
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "StartNum1",
});
</script>

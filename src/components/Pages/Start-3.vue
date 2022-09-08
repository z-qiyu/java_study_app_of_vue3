<template>
  <div class="page">
    <h2>创建一个java项目</h2>
    <p>打开idea，会得到如下界面</p>
    <p>点击新建项目</p>
    <img src="../../assets/idea-1.png" />
    <p>不选择任何框架，点击下一步</p>
    <img src="../../assets/idea-2.png" />
    <p>从模板创建项目，点击下一步</p>
    <img src="../../assets/idea-3.png" />
    <p>
      <span class="highlight">配置项目名称（随便弄）</span><br /><span
        class="highlight"
        >项目位置（弄自己的位置）</span
      ><br /><span class="highlight"
        >基础软件包名（格式：xxx.xxx;例:abc.com、zqy.xyz）</span
      >
      点击完成
    </p>
    <img src="../../assets/idea-4.png" />
    <p>创建完成后，会看到类似如下的目录和界面</p>
    <img src="../../assets/idea-5.png" />
    <p>创建完成</p>
    <a
      class="button"
      @click="$store.commit('setPageSnyc', { type: 'start', page: '4' })"
      >下一章</a
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "StartNum3",
});
</script>

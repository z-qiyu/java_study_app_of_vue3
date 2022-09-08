<template>
  <div class="page">
    <h2>基本语法</h2>
    <pre>
      <code class="language-java line-numbers" >
package zqy.xyz; //包名,上一章节已经配置过，这个包名就是当前java文件所在项目目录位置

public class Main {
    // Main类,应该与文件名相同,该文件为Main.java,所以这个public 类名应该Main
    // 注：一个java文件只能有一个public 类
    public static void main(String[] args) {
        // 这里是该项目程序运行入口,记住是该项目!!!
        System.out.println("Hello World Main");
    }
}

      </code>
    </pre>
    <p>点击下图位置运行，或者邮件代码框部分，点击运行，即可运行</p>
    <img src="../../assets/java-demo-1.png" />
    <p>若显示如下结果，表示结果正确</p>
    <img src="../../assets/java-demo-2.png" />
    <p>
      一个java文件里面只能有一个public 类(public
      class),但是可以有多个程序入口,如图
    </p>
    <img src="../../assets/java-demo-3.png" />
    <p>
      上图有3个class,分别为:<br />
      <span class="highlight">public class Main</span><br />
      <span class="highlight">class A</span><br />
      <span class="highlight">class B</span><br />
      你可以分别点击左边的运行按钮,可以发现运行的结果不一样
    </p>
    <pre>
      <code class="language-java line-numbers" >
package zqy.xyz; //包名,上一章节已经配置过，这个包名就是当前java文件所在项目目录位置
/* 这是第一个Java程序
* 它将输出 Hello World
* 这是一个多行注释的示例
*/

// 这是单行注释的示例
/* 这个也是单行注释的示例 */
public class Main {
    // Main类,应该与文件名相同,该文件为Main.java,所以这个public 类名应该Main
    // 注：一个java文件只能有一个public 类
    public static void main(String[] args) {
        // 这里是该项目 第一个 程序运行入口
        System.out.println("Hello World Main");
    }
}

class A{
    public static void main(String[] args) {
        // 这里是该项目 第二个 程序运行入口
        System.out.println("Hello World A");
    }
}

class B{
    public static void main(String[] args) {
        // 这里是该项目 第三个 程序运行入口
        System.out.println("Hello World B");
    }
}
       
      </code>
    </pre>
    <p><span class="highlight">运行 class A </span></p>
    <img src="../../assets/java-demo-4.png" />
    <p><span class="highlight">运行 class B </span></p>
    <img src="../../assets/java-demo-5.png" />
    <p class="highlight">
      一个java文件只能用一个public class 但是可以有多个public static void
      main(String[] args) （注：不同类）
    </p>
    <pre>
      <code class="language-java line-numbers" >
        
      </code>
    </pre>
    <a
      class="button"
      @click="$store.commit('setPageSnyc', { type: 'start', page: '5' })"
      >下一章</a
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Prism from "prismjs";

export default defineComponent({
  name: "StartNum4",
  mounted() {
    Prism.highlightAll();
  },
});
</script>

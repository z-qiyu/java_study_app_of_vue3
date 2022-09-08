<template>
  <div class="page">
    <h2>基本数据类型</h2>
    <p class="highlight">
      java语言中有8种基本数据类型，分类四大类型：<br />
      逻辑类型：boolean <br />
      整数类型：byte、short、int、long <br />
      浮点类型 ：float、double <br />
      字符类型：char
    </p>
    <p class="highlight" style="color: red">
      注:下面两张代码实例黄色高亮部分，或者红色部分（划上横线的代码），不是昨晚代码，只是基本数据类型定义方式（第三种）已经被弃用（但是还是可以用，不建议用）
    </p>
    <img src="../../assets/basic-data-1.png" />
    <img src="../../assets/basic-data-2.png" />
    <pre>
      <code class="language-java line-numbers" >
package zqy.xyz; //包名,上一章节已经配置过，这个包名就是当前java文件所在项目目录位置

public class Main {
    // Main类,应该与文件名相同,该文件为Main.java,所以这个public 类名应该Main
    // 注：一个java文件只能有一个public 类
    public static void main(String[] args) {
        // 定义变量，基本语法一般有一下三张种:
        // 1.定义但未赋值,后续完成赋值: &lt;类型名称&gt; &lt;变量名称&gt;;
        // 1-1.赋值: &lt;变量名称&gt; = &lt;值&gt;;
        // 2.定义赋值(适合基本 数据类型和String类型 的定义): &lt;类型名称&gt; &lt;变量名称&gt; = &lt;值&gt;;
        // 3.定义但未赋值: &lt;类型名称&gt; &lt;变量名称&gt; = new &lt;类型名称&gt;(参数1,参数2,参数3,.....);

        // 下面用三张方式定义变量，然后打印结果

        // boolean
        boolean b1;
        b1 = true;
        boolean b2 = true;
        boolean b3 = new Boolean(false);

        System.out.println(b1);
        System.out.println(b2);
        System.out.println(b3);
        System.out.println();

        // byte (-128到127整数)
        byte by1;
        by1 = 2;
        byte by2 = 1;
        byte by3 = new Byte(by2);

        System.out.println(by1);
        System.out.println(by2);
        System.out.println(by3);
        System.out.println("基本类型：byte 二进制位数：" + Byte.SIZE);
        System.out.println("最小值：Byte.MIN_VALUE=" + Byte.MIN_VALUE);
        System.out.println("最大值：Byte.MAX_VALUE=" + Byte.MAX_VALUE);
        System.out.println();

        // short
        short s1;
        s1 = 1111;
        short s2 = 2222;
        short s3 = new Short(s2);

        System.out.println(s1);
        System.out.println(s2);
        System.out.println(s3);
        System.out.println("基本类型：short 二进制位数：" + Short.SIZE);
        System.out.println("最小值：Short.MIN_VALUE=" + Short.MIN_VALUE);
        System.out.println("最大值：Short.MAX_VALUE=" + Short.MAX_VALUE);
        System.out.println();

        // int
        int i1;
        i1 = 1111;
        int i2 = 2222;
        int i3 = new Integer(3333);

        System.out.println(i1);
        System.out.println(i2);
        System.out.println(i3);
        System.out.println("基本类型：int 二进制位数：" + Integer.SIZE);
        System.out.println("最小值：Integer.MIN_VALUE=" + Integer.MIN_VALUE);
        System.out.println("最大值：Integer.MAX_VALUE=" + Integer.MAX_VALUE);
        System.out.println();

        // long
        long l1;
        l1 = 1111L;
        long l2 = 11111111L;
        long l3 = new Long(111111111111L);

        System.out.println(l1);
        System.out.println(l2);
        System.out.println(l3);
        System.out.println("基本类型：long 二进制位数：" + Long.SIZE);
        System.out.println("最小值：Long.MIN_VALUE=" + Long.MIN_VALUE);
        System.out.println("最大值：Long.MAX_VALUE=" + Long.MAX_VALUE);
        System.out.println();

        // float
        float f1;
        f1 = 11.11F;
        float f2 = 22.22F;
        float f3 = new Float(33.33F);

        System.out.println(f1);
        System.out.println(f2);
        System.out.println(f3);
        System.out.println("基本类型：float 二进制位数：" + Float.SIZE);
        System.out.println("最小值：Float.MIN_VALUE=" + Float.MIN_VALUE);
        System.out.println("最大值：Float.MAX_VALUE=" + Float.MAX_VALUE);
        System.out.println();

        // double
        double d1;
        d1 = 111.111;
        double d2 = 222.222;
        double d3 = new Double(333.333);

        System.out.println(d1);
        System.out.println(d2);
        System.out.println(d3);
        System.out.println("基本类型：double 二进制位数：" + Double.SIZE);
        System.out.println("最小值：Double.MIN_VALUE=" + Double.MIN_VALUE);
        System.out.println("最大值：Double.MAX_VALUE=" + Double.MAX_VALUE);
        System.out.println();

        // char (字符类型是单引号' ') (String是双引号" ")
        char c1;
        c1 = '1';
        char c2 = 'a';
        char c3 = new Character('?');

        System.out.println(c1);
        System.out.println(c2);
        System.out.println(c3);
        System.out.println("基本类型：char 二进制位数：" + Character.SIZE);
        System.out.println("包装类：java.lang.Character");
        System.out.println("最小值：Character.MIN_VALUE="+ (int) Character.MIN_VALUE);
        System.out.println("最大值：Character.MAX_VALUE="+ (int) Character.MAX_VALUE);
    }
}


      </code>
    </pre>
    <p class="highlight">运行后得出结果为:</p>
    <img src="../../assets/basic-data-3.png" />
    <h2>final修饰变量</h2>
    <p class="highlight">
      final修饰的变量赋值后不可改变，如图运行报错,保存原因:(变量a被final关键字修饰,初始值为1,尝试改变为3，报错)
    </p>
    <img src="../../assets/basic-data-4.png" />
    <h2>类型转换</h2>
    <p class="highlight">自动类型转换</p>
    <img src="../../assets/basic-data-5.png" />
    <p class="highlight">强制类型转换</p>
    <img src="../../assets/basic-data-6.png" />
    <a
      class="button"
      @click="$store.commit('setPageSnyc', { type: 'start', page: '6' })"
      >下一章</a
    >
  </div>
</template>

<script lang="ts">
import Prism from "prismjs";
import { defineComponent } from "vue";

export default defineComponent({
  name: "StartNum5",
  mounted() {
    Prism.highlightAll();
  },
});
</script>

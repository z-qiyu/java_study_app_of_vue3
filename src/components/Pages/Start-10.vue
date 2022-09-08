<template>
  <div class="page">
    <h2>修饰符</h2>
    <p class="highlight">
      注：从本章开始（以及后面的章节），结尾有任务，直接独立完成，即可掌握数组基本用法
    </p>
    <p class="highlight">修饰符</p>
    <img
      src="https://img-blog.csdnimg.cn/20200914213258544.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3loOTkxMzE0,size_16,color_FFFFFF,t_70#pic_center"
    />
    <p class="highlight">
      如图所示,创建3个类A,B,C;每个类分别创建对象a,b,c;当调用里面的属性时，发现private修饰的属性是不可访问的
    </p>
    <img src="../../assets/modifier.png" />
    <p class="highlight">
      下面验证不同包状态下,protected是不可访问的,首先新建包，包名自定义(格式:
      xxx.xxx)
    </p>
    <img src="../../assets/modifier-1.png" />
    <p class="highlight" style="color: red">
      首先右键src目录,鼠标移动到新建，弹出窗口点击软件包，弹出窗口输入包名(本例子包名为:abc.com)<br />创建完成后可以看到目录是下图这个样子
    </p>
    <img src="../../assets/modifier-2.png" />
    <p>
      然后在包创建一个java文件,右键这个包,新建-&gt;java类,点击后可以看到下图
    </p>
    <img src="../../assets/modifier-3.png" />
    <p class="highlight">
      然后输入类名称,这里输入类名为Test,类名可以自定义，首字母大写！！！
      按下回车即可创建完成，在目录框部位可以看到如下图所示的界面
    </p>
    <img src="../../assets/modifier-4.png" />
    <p class="highlight">把刚刚Main.java文件和Test.Java的代码改为以下代码;</p>
    <p class="highlight" style="color: red">Main.java</p>
    <img src="../../assets/modifier-5.png" />
    <p class="highlight" style="color: red">Test.java</p>
    <img src="../../assets/modifier-6.png" />
    <pre>
          <code class="language-java line-numbers" >
package zqy.xyz; //包名,上一章节已经配置过，这个包名就是当前java文件所在项目目录位置

import abc.com.Text; // 引入Test，格式(import 包名.类名)

public class Main {
    // Main类,应该与文件名相同,该文件为Main.java,所以这个public 类名应该Main
    // 注：一个java文件只能有一个public 类
    public static void main(String[] args) {
        // 新建Test对象
        Text t = new Text();
        // 调用protected修饰的a; 报错:因为protected在不同包是不可调用的
        System.out.println(t.a);
        // 调用public修饰的b; 不报错:因为public在在任何场景都可以调用
        System.out.println(t.b);
        // 调用private修饰的c; 报错:因为private在不同类是不可调用的; 不同包更不可能调用
        System.out.println(t.c);

    }
}

        </code>
    </pre>
    <p class="highlight">注:一下修饰符暂时只做介绍,后续会深入应用</p>
    <p>
      <strong><big>static 修饰符</big></strong
      ><br />
      &nbsp;&nbsp;静态变量：<br />

      &nbsp;&nbsp;&nbsp;&nbsp;static
      关键字用来声明独立于对象的静态变量，无论一个类实例化多少对象，它的静态变量只有一份拷贝。
      静态变量也被称为类变量。局部变量不能被声明为 static 变量。<br />

      &nbsp;&nbsp;静态方法：<br />

      &nbsp;&nbsp;&nbsp;&nbsp;static
      关键字用来声明独立于对象的静态方法。静态方法不能使用类的非静态变量。静态方法从参数列表得到数据，然后计算这些数据。<br />
    </p>
    <p>
      <strong><big>final 修饰符</big></strong
      ><br />
      &nbsp;&nbsp;final 变量：<br />

      &nbsp;&nbsp;&nbsp;&nbsp;父类中的 final
      方法可以被子类继承，但是不能被子类重写。 声明 final
      方法的主要目的是防止该方法的内容被修改。 如下所示，使用 final
      修饰符声明方法。<br />

      &nbsp;&nbsp;final 类<br />

      &nbsp;&nbsp;&nbsp;&nbsp;final 类不能被继承，没有类能够继承 final
      类的任何特性。<br />
    </p>
    <p>
      <strong><big>abstract 修饰符</big></strong
      ><br />
      &nbsp;&nbsp;抽象方法:<br />

      &nbsp;&nbsp;&nbsp;&nbsp;抽象方法是一种没有任何实现的方法，该方法的具体实现由子类提供。
      抽象方法不能被声明成 final 和 static。
      任何继承抽象类的子类必须实现父类的所有抽象方法，除非该子类也是抽象类。
      如果一个类包含若干个抽象方法，那么该类必须声明为抽象类。抽象类可以不包含抽象方法。
      抽象方法的声明以分号结尾，例如：public abstract sample();。<br />

      &nbsp;&nbsp;抽象类：<br />

      &nbsp;&nbsp;&nbsp;&nbsp;抽象类不能用来实例化对象，声明抽象类的唯一目的是为了将来对该类进行扩充。
      一个类不能同时被 abstract 和 final
      修饰。如果一个类包含抽象方法，那么该类一定要声明为抽象类，否则将出现编译错误。
      抽象类可以包含抽象方法和非抽象方法。<br />
    </p>
    <p>
      <strong><big>synchronized 修饰符</big></strong
      ><br />

      &nbsp;&nbsp;&nbsp;&nbsp;synchronized
      关键字声明的方法同一时间只能被一个线程访问。synchronized
      修饰符可以应用于四个访问修饰符。<br />
    </p>
    <p>
      <strong><big>transient 修饰符</big></strong
      ><br />

      &nbsp;&nbsp;&nbsp;&nbsp;序列化的对象包含被 transient
      修饰的实例变量时，java 虚拟机(JVM)跳过该特定的变量。
      该修饰符包含在定义变量的语句中，用来预处理类和变量的数据类型。<br />
    </p>
    <p>
      <strong><big>volatile 修饰符</big></strong
      ><br />

      &nbsp;&nbsp;&nbsp;&nbsp;volatile
      修饰的成员变量在每次被线程访问时，都强制从共享内存中重新读取该成员变量的值。而且，当成员变量发生变化时，会强制线程将变化值回写到共享内存。这样在任何时刻，两个不同的线程总是看到某个成员变量的同一个值。
      一个 volatile 对象引用可能是 null。<br />
    </p>
    <a
      class="button"
      @click="$store.commit('setPageSnyc', { type: 'start', page: '11' })"
      >下一章</a
    >
  </div>
</template>

<script lang="ts">
import Prism from "prismjs";
import { defineComponent } from "vue";

export default defineComponent({
  name: "StartNum7",
  mounted() {
    Prism.highlightAll();
  },
});
</script>

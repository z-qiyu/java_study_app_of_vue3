<template>
  <div class="page">
    <h2>继承</h2>
    <p class="highlight">
      注：从本章开始（以及后面的章节），结尾有任务，直接独立完成
    </p>
    <p class="highlight">
      类的继承:当A类继承B类时，A将具有B所有的属性和方法，包括A原有的属性和方法
    </p>
    <pre>
        <code class="language-java line-numbers">
package zqy.xyz; //包名,上一章节已经配置过，这个包名就是当前java文件所在项目目录位置

class Parent{
    // 定义float类型变量money, 模拟现实父母所含有的资金,133000.12元
    final float money = 133000.12F;
    // 定义int类型变量house, 模拟现实父母所含有的房子,2栋
    final int house = 2;

    Parent(){
        this.show();
    }

    // 定义show方法来打印父母所含有的所有资产
    public void show(){
        System.out.println("含有资金:"+this.money+"元; 含有房子:"+this.house+"栋");
    }

}

// 定义Child类并且继承Parent类
class Child extends Parent{

    // 定义构造方法,super关键字用来在类内部调用父类
    // 构造方法会在创建对象是自动调用！！！
    Child(){
        // 构造方法一定用super()初始化父类
        super();
        System.out.println("我继承了Parent:"+super.money+"元 和 房子"+super.house+"栋");
    }

}


public class Main {
    // Main类,应该与文件名相同,该文件为Main.java,所以这个public 类名应该Main
    // 注：一个java文件只能有一个public 类
    public static void main(String[] args) {
        // 新建Child对象a,自动执行构造方法
        Child a = new Child();
        // Child继承Parent; 接着调用父类属性和方法
        System.out.println(a.house); // house属性在Child是没有定义的，只不过继承了Parent的属性
        System.out.println(a.money);// money属性在Child是没有定义的，只不继承错了Parent的属性

        a.show(); // show方法在Child是没有定义的，只不继承错了Parent的方法

    }
}

        </code>
      </pre>
    <p class="highlight">打印结果如下</p>
    <pre>
          <code class="language-shell line-numbers" >
C:\Users\zqy\.jdks\openjdk-17.0.2\bin\java.exe "-javaagent:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\lib\idea_rt.jar=56323:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\bin" -Dfile.encoding=UTF-8 -classpath E:\java_projects\dome\out\production\dome zqy.xyz.Main
含有资金:133000.12元; 含有房子:2栋
我继承了Parent:133000.12元 和 房子2栋
2
133000.12
含有资金:133000.12元; 含有房子:2栋

进程已结束，退出代码为 0

          </code>
      </pre>
    <p class="highlight">任务</p>
    <p>
      1.创建动物类型,包含eat方法(吃，打印"我什么都吃")
      <br />2.创建狗狗类型,继承动物类型
      3.创建动物类型a,创建狗狗类型b,调用a的eat方法,调用b的eat方法
    </p>
    <p class="highlight">注:下一章节《重写重载》与当前章节代码有联系</p>
    <a
      class="button"
      @click="$store.commit('setPageSnyc', { type: 'start', page: '12' })"
      >下一章</a
    >
  </div>
</template>

<script lang="ts">
import Prism from "prismjs";
import { defineComponent } from "vue";

export default defineComponent({
  name: "StartNum11",
  mounted() {
    Prism.highlightAll();
  },
});
</script>

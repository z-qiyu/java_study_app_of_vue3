<template>
  <div class="page">
    <h2>抽象类</h2>
    <p class="highlight">
      抽象类 abstract
      class：抽象类大致可以理解为，是类的抽象。通俗一点像是一本书的目录，目录将书的内容抽象话，仅仅留下标题；
    </p>
    <p class="highlight">
      应用举例: 现有猫类，和狗类; 我们可以统称为"动物"。
      这个名词"动物"就是对猫狗的一种抽象说法,具体说法就是猫狗。
    </p>
    <p class="highlight">
      抽象方法 abstract
      function：抽象方法在抽象类里面仅仅只有方法名称，而没有具体的方法体。
    </p>
    <p class="highlight">
      应用举例（抽象方法）: 现有猫类，和狗类; 我们可以统称为"动物",
      在生活中，我们可以说猫吃什么，狗吃什么,但是一般情况下没有动物，吃什么,因为动物实在是太广泛了。<br />
      猫吃鱼，狗吃肉;
      那这个动物吃什么呢？但是动物也是要吃的，不然会饿死;所以我们可以将动物的吃方法定义为抽象方法，而猫狗的吃用来具体化（对抽象方法的具体化）;
    </p>
    <p>以下代码仔细琢磨</p>
    <pre>
          <code class="language-java line-numbers">
package zqy.xyz; //包名,上一章节已经配置过，这个包名就是当前java文件所在项目目录位置

// 定义抽象类, 抽象类门口有被实例化,即new Animal()会报错
abstract class Animal{
    // 定义构造方法, 当子类被实例化时, 改构造方法被调用
    Animal(){
        System.out.println("我Animal"+this.age+"岁了");
    }

    // 定义所有动物都可以使用的属性age
    int age;
    // 定义抽象方法,抽象方法没有方法体。
    public abstract void eat();

    // 定义所有动物都具有的方法，不是抽象方法
    public String address(){
        return "我住在地球";
    }
}

// 定义Cat猫类, 继承Animal类
class Cat extends Animal{

    // 定义构造方法
    Cat(){
        // 初始化父类
        super();
        // 将age属性赋值为2; age是继承的属性，所以this.age = super.age
        this.age = 2;
        System.out.println("我Cat"+this.age+"岁了");
    }

    // 具体化Animal的抽象方法eat; 重写!!!
    @Override
    public void eat() {
        System.out.println("我是只猫,我吃鱼");
    }

    // 定义Cat特有方法
    public void action() {
        System.out.println("我会抓老鼠");
    }

    @Override
    public String address(){
        return "我住在我家";
    }

}

class Dog extends Animal{

    // 定义构造方法
    Dog(){
        // 初始化父类
        super();
        // 将age属性赋值为4; age是继承的属性，所以this.age = super.age
        super.age = 4;
        System.out.println("我Dog"+this.age+"岁了");
    }

    // 具体化Animal的抽象方法eat; 重写!!!
    @Override
    public void eat() {
        System.out.println("我是只狗,我吃狗粮");
    }

    // 定义Dog特有方法
    public void movement() {
        System.out.println("我很聪明");
    }

}


public class Main {
    // Main类,应该与文件名相同,该文件为Main.java,所以这个public 类名应该Main
    // 注：一个java文件只能有一个public 类
    public static void main(String[] args) {
        // 创建Cat类型对象 两种方式: Animal a = new Cat(); 或者 Cat a = new Cat();
        // 第一种可以不能直接调用Cat特有方法;第二种可以直接调用Cat特有方法
        Animal a = new Cat();
        // 创建dog类型对象
        Dog b = new Dog();

        // 以上创建完成后首先调用Animal的构造方法,然后调用子类的构造方法

        // Cat类型的address()
        System.out.println(a.address());
        // Dog类型的address()
        System.out.println(b.address());

        // Cat类型的eat()
        a.eat();
        // Dog类型的eat()
        b.eat();

        // 由于创建对象时a是以Animal类型定义,所以使用Cat特有方法，要强制类型转换
        ((Cat)a).action();
        // 调用Dog特有方法
        b.movement();


    }
}

            </code>
    </pre>
    <p class="highlight">打印结果如下</p>
    <pre>
            <code class="language-shell line-numbers" >
C:\Users\zqy\.jdks\openjdk-17.0.2\bin\java.exe "-javaagent:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\lib\idea_rt.jar=65404:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\bin" -Dfile.encoding=UTF-8 -classpath E:\java_projects\dome\out\production\dome zqy.xyz.Main
我Animal0岁了
我Cat2岁了
我Animal0岁了
我Dog4岁了
我住在我家
我住在地球
我是只猫,我吃鱼
我是只狗,我吃狗粮
我会抓老鼠
我很聪明

进程已结束，退出代码为 0

            </code>
        </pre>
    <a
      class="button"
      @click="$store.commit('setPageSnyc', { type: 'start', page: '15' })"
      >下一章</a
    >
  </div>
</template>

<script lang="ts">
import Prism from "prismjs";
import { defineComponent } from "vue";

export default defineComponent({
  name: "StartNum14",
  mounted() {
    Prism.highlightAll();
  },
});
</script>

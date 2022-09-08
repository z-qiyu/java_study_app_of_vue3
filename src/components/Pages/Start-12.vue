<template>
  <div class="page">
    <h2>重写重载</h2>
    <p class="highlight">
      注：从本章开始（以及后面的章节），结尾有任务，直接独立完成
    </p>
    <p class="highlight">
      重写: 就是当A类继承B类时,A可以将B类的方法进行重新构造<br />
      重载:
      就是一个类的同一个方法可以有多种形态，如不同类型返回值，或者是不同参数个数或是类型
    </p>
    <p>以下代码仔细琢磨</p>
    <pre>
          <code class="language-java line-numbers">
package zqy.xyz; //包名,上一章节已经配置过，这个包名就是当前java文件所在项目目录位置

class Parent{
    // 定义float类型变量money, 模拟现实父母所含有的资金,133000.12元
    final float money = 133000.12F;
    // 定义int类型变量house, 模拟现实父母所含有的房子,2栋
    final int house = 2;
    // 定义String数组; 模拟房子位置
    String []houseAddress;

    Parent(){
        this.show();
    }
    // 重载Parent方法,重载必须参数不一致，比如类型不一致，格式不一致
    Parent(String [] ary){
        this.houseAddress = ary;
        String a = this.show(this.houseAddress[0].length() != 0 && this.houseAddress[1].length() != 0);
        System.out.println(a);
    }

    // 定义show方法来打印父母所含有的所有资产
    public void show(){
        System.out.println("含有资金:"+this.money+"元; 含有房子:"+this.house+"栋(Parent show方法)");
    }

    // 重载show方法,重载必须参数不一致，比如类型不一致，格式不一致
    public String show(boolean isAll){
        if (isAll){
            // 判断this.houseAddress有没有赋值，如果没有赋值，那么下面return语句会报错,那么当没有赋值是，this.houseAddress=null，初始化数组new String[2]
            if (this.houseAddress == null){
                this.houseAddress = new String[2];
            }
            return "Parent含有资金:"+this.money+"元; 含有房子:"+this.house+"栋; 房子所在位置:"+this.houseAddress[0]+","+this.houseAddress[1]+"(Parent show(boolean isAll)方法)";
        }else{
            return "Parent含有资金:"+this.money+"元; 含有房子:"+this.house+"栋 (Parent show(boolean isAll)方法)";
        }
    }

}

// 定义Child类并且继承Parent类
class Child extends Parent{

    // 定义构造方法,super关键字用来在类内部调用父类
    // 构造方法会在创建对象是自动调用！！！
    Child(){
        // 构造方法一定用super()初始化父类
        super();
        System.out.println("我Child继承了Parent:"+super.money+"元 和 房子"+super.house+"栋(Child构造方法)");
    }

    // 重写父类show方法,
    @Override // 程序员的共识，重写的方法要用@Override标注
    public void show(){
        System.out.println("我Child本是身无分文的小伙子(Child show方法)");
    }

}

// 定义Child2类并且继承Parent类
class Child2 extends Parent{
    // 定义构造方法,super关键字用来在类内部调用父类
    // 构造方法会在创建对象是自动调用！！！
    Child2(){
        // 构造方法一定用super()初始化父类
        super(new String[]{"上海","北京"});
        System.out.println("我Child2继承了Parent:"+super.money+"元 和 房子"+super.house+"栋(Child2构造方法)");
    }

    // 重写父类show方法,
    @Override // 程序员的共识，重写的方法要用@Override标注
    public void show(){
        System.out.println("我Child2本是富二代(Child2 show方法)");
    }

}


public class Main {
    // Main类,应该与文件名相同,该文件为Main.java,所以这个public 类名应该Main
    // 注：一个java文件只能有一个public 类
    public static void main(String[] args) {
        Parent a = new Child();
        Parent b = new Child2();
        Parent c = new Parent();

        a.show();

        b.show();

        // 调用show方法 (重载)
        c.show();
        // 调用show方法 (重载)
        c.show(true);
    }
}

          </code>
        </pre>
    <p class="highlight">打印结果如下</p>
    <pre>
            <code class="language-shell line-numbers" >
C:\Users\zqy\.jdks\openjdk-17.0.2\bin\java.exe "-javaagent:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\lib\idea_rt.jar=63393:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\bin" -Dfile.encoding=UTF-8 -classpath E:\java_projects\dome\out\production\dome zqy.xyz.Main
我Child本是身无分文的小伙子(Child show方法)
我Child继承了Parent:133000.12元 和 房子2栋(Child构造方法)
Parent含有资金:133000.12元; 含有房子:2栋; 房子所在位置:上海,北京(Parent show(boolean isAll)方法)
我Child2继承了Parent:133000.12元 和 房子2栋(Child2构造方法)
含有资金:133000.12元; 含有房子:2栋(Parent show方法)
我Child本是身无分文的小伙子(Child show方法)
我Child2本是富二代(Child2 show方法)
含有资金:133000.12元; 含有房子:2栋(Parent show方法)

进程已结束，退出代码为 0
            </code>
        </pre>
    <p class="highlight">任务</p>
    <p>
      1.创建动物类型,包含eat方法(吃，打印"我什么都吃")
      <br />2.创建狗狗类型,继承动物类型,重写eat方法(打印"我只吃肉");
      狗狗类型里面重载eat方法包含一个String类型参数something,返回值String,返回"我除了吃肉还吃"+something<br />
      3.创建动物类型a,创建狗狗类型b,调用a的eat方法,调用b所有的eat方法
    </p>
    <a
      class="button"
      @click="$store.commit('setPageSnyc', { type: 'start', page: '13' })"
      >下一章</a
    >
  </div>
</template>

<script lang="ts">
import Prism from "prismjs";
import { defineComponent } from "vue";

export default defineComponent({
  name: "StartNum12",
  mounted() {
    Prism.highlightAll();
  },
});
</script>

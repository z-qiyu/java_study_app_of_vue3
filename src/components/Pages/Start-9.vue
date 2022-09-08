<template>
  <div class="page">
    <h2>类</h2>
    <p class="highlight">
      注：从本章开始（以及后面的章节），结尾有任务，直接独立完成，即可掌握数组基本用法
    </p>
    <p>
      <span class="highlight">类</span
      >:定义一个类,类里面包含属性(变量)和方法(函数);<br />
      <span class="highlight">对象</span>:将类实例化，用new关键字创建对象<br />
      <span class="highlight">类和对象的关系</span>:
      类相当于模板,根据自己的需求构建一个类,对象就是按照类的模板复制一份出来，或者是复制多份,对对象操作累不属性，是影响不到模板（static修饰符除外除外）<br />
      <span class="highlight">例如</span>:
      制作手机需要原型图和各种部件,原型图相当于类,部件相当于属性和方法,工厂生产手机，相当于里面的创建对象,每个用户对手机进行不同的操作就相当于，对对象不同的操作，而且对象与对象之间不相互影响，更不能对模板（类）影响(static修饰符除外);
    </p>
    <pre>
          <code class="language-java line-numbers" >
package zqy.xyz; //包名,上一章节已经配置过，这个包名就是当前java文件所在项目目录位置

public class Main {
    // Main类,应该与文件名相同,该文件为Main.java,所以这个public 类名应该Main
    // 注：一个java文件只能有一个public 类
    public static void main(String[] args) {
        // new 关键字用于新建对象！！！！！！
        // 创建A类变量
        A a = new A();
        // new 关键字用于新建对象！！！！！！
        // 创建B类变量
        B b = new B();

        // 调用a类里面的变量var1和className
        System.out.println("a.var1="+a.var1+";  a.className="+a.className);
        // 调用b类里面的变量data.var1和className
        System.out.println("b.data.var1="+b.data.var1+";  b.className="+b.className);

        // 对变量a类里面的var1进行赋值
        a.var1 = 666;
        // 对变量b类里面的data.var1进行赋值,data是A类
        b.data.var1 = 999999;

        System.out.println("======================分割,便于观察结果==========================");

        // 调用a类里面的变量var1和className
        System.out.println("a.var1="+a.var1+";  a.className="+a.className);
        // 调用b类里面的变量data.var1和className
        System.out.println("b.data.var1="+b.data.var1+";  b.className="+b.className);

        System.out.println("======================分割,便于观察结果==========================");

        // 调用变量a里面的explain方法
        a.explain();  // void无返回值
        // 调用变量b里面的explain方法
        b.explain();  // void无返回值
        // 调用b里面的getvar1方法
        int c = b.getvar1();  // int 类型返回值
        System.out.println(c);  // 因为上面已经吧b.data.var1 赋值为 999999 所以 c=999999
    }
}

class A{

    // 定义int变量var1
    int var1;
    // 定义常量className,final修饰符修饰的变量不能再修改!!!
    final String className = "A";

    // this关键字代表当前类

    public void explain(){
        System.out.println("我是"+this.className+"类,调用explain方法(函数)");
    }
}

class B{
    // 定义String类型常量className,final修饰符修饰的变量不能再修改!!!
    final String className = "B";
    // 定义A类型变量data
    A data;

    // 定义B类构造方法: 构造方法名与类名相同!!!!!! 一般无需修饰符
    B(){
        // new 关键字用于新建对象！！！！！！
        // 初始化变量data,赋值A类
        this.data = new A();
    }

    // this关键字代表当前类 ！！！！！！
    // 函数返回值类型void
    public void explain(){
        System.out.println("我是"+this.className+"类,调用explain方法(函数)");
    }

    // 函数返回值类型int
    public int getvar1(){
        // data是A类,A类包含变量var1;这里返回this.data.var1, int类型
        return this.data.var1;
    }

}


          </code>
        </pre>
    <p class="highlight">打印结果如下</p>
    <pre>
          <code class="language-shell line-numbers" >
C:\Users\zqy\.jdks\openjdk-17.0.2\bin\java.exe "-javaagent:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\lib\idea_rt.jar=51699:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\bin" -Dfile.encoding=UTF-8 -classpath E:\java_projects\dome\out\production\dome zqy.xyz.Main
a.var1=0;  a.className=A
b.data.var1=0;  b.className=B
======================分割,便于观察结果==========================
a.var1=666;  a.className=A
b.data.var1=999999;  b.className=B
======================分割,便于观察结果==========================
我是A类,调用explain方法(函数)
我是B类,调用explain方法(函数)
999999

进程已结束，退出代码为 0

  
          </code>
      </pre>
    <p class="highlight">任务</p>
    <p>
      1.定义Dog类,Dog类包含，String 类型变量sex；int
      类型变量age；show方法(打印Dog类的sex和age)<br />
      2.定义Person类,定义Person类包含；String 类型变量sex；int
      类型变量age；String 类型变量name; Dog类型变量pet
      show方法(打印Person类的name,sex和age);getPet方法(返回类型Dog类型;返回pet)；petShow方法(调用pet的show方法)<br />
      3.在程序入口新建Dog类型变量dog,dog的age属性复制为1,dog的sex属性赋值为"雄性",定义Person类型变量me,对象me的name属性赋值为自己的名字,对象me的sex属性赋值为自己的性别
      对象me的age属性赋值为自己的年龄;对象的pet属性赋值为上面定义的dog;<br />
      4.调用对象dog的show方法,调用对象me的show方法，调用me的petShow方法<br />
      5.新建Dog类型变量myPet，myPet用对象me的getPet方法进行赋值,用判断对象是否相同的方式打印结果
    </p>
    <p class="highlight">答案</p>
    <pre>
          <code class="language-java line-numbers" >
package zqy.xyz; //包名,上一章节已经配置过，这个包名就是当前java文件所在项目目录位置

// 1.定义Dog类,Dog类包含，String 类型变量sex；int 类型变量age；show方法(打印Dog类的sex和age)
class Dog{
    String sex;
    int age;

    public void show(){
        System.out.println("年龄："+this.age+"性别"+this.sex);
    }
}

//2.定义Person类,定义Person类包含；String 类型变量sex；int 类型变量age；String 类型变量name; Dog类型变量pet show方法(打印Person类的name,sex和age);getPet方法(返回类型Dog类型;返回pet)；petShow方法(调用pet的show方法)
class Person{
    String sex;
    int age;
    String name;
    Dog pet;

    public void show(){
        System.out.println("姓名:"+this.name+",年龄："+this.age+",性别"+this.sex);
    }

    public Dog getPet(){
        return this.pet;
    }

    public void petShow(){
        this.pet.show();
    }

}

public class Main {
    // Main类,应该与文件名相同,该文件为Main.java,所以这个public 类名应该Main
    // 注：一个java文件只能有一个public 类
    public static void main(String[] args) {
        // 3.在程序入口新建Dog类型变量dog,dog的age属性复制为1,dog的sex属性赋值为"雄性",定义Person类型变量me,对象me的name属性赋值为自己的名字,对象me的sex属性赋值为自己的性别 对象me的age属性赋值为自己的年龄;对象的pet属性赋值为上面定义的dog;
        Dog dog = new Dog();
        dog.age = 1;
        dog.sex = "雄性";

        Person me = new Person();
        me.name = "大表哥";
        me.sex = "男";
        me.age = 35;
        me.pet = dog;

        // 4.调用对象dog的show方法,调用对象me的show方法，调用me的petShow方法

        dog.show();
        me.show();
        me.petShow();

        // 5.新建Dog类型变量myPet，myPet用对象me的getPet方法进行赋值,用判断对象dog和myPet是否相同的方式打印结果

        Dog myPet;
        myPet = me.getPet();

        if(dog==myPet){
            System.out.println("相同");
        }else{
            System.out.println("不相同");
        }

        // 考虑 : 为什么dog==myPet？
        // 考虑 : myPet的值最终来着哪里?

    }
}


          </code>
        </pre>
    <p class="highlight">打印结果如下</p>
    <pre>
          <code class="language-shell line-numbers" >
C:\Users\zqy\.jdks\openjdk-17.0.2\bin\java.exe "-javaagent:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\lib\idea_rt.jar=52086:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\bin" -Dfile.encoding=UTF-8 -classpath E:\java_projects\dome\out\production\dome zqy.xyz.Main
年龄：1性别雄性
姓名:大表哥,年龄：35,性别男
年龄：1性别雄性
相同

进程已结束，退出代码为 0
          </code>
      </pre>
    <p class="highlight">任务2</p>
    <p>将上一个任务的第3个任务点，抢变量赋值转移到构造方法；</p>
    <p class="highlight">答案2</p>
    <pre>
          <code class="language-java line-numbers" >
package zqy.xyz; //包名,上一章节已经配置过，这个包名就是当前java文件所在项目目录位置

// 1.定义Dog类,Dog类包含，String 类型变量sex；int 类型变量age；show方法(打印Dog类的sex和age)
class Dog{
    String sex;
    int age;

    Dog(int age,String sex){
        this.age = age;
        this.sex = sex;
    }

    public void show(){
        System.out.println("年龄："+this.age+"性别"+this.sex);
    }
}

//2.定义Person类,定义Person类包含；String 类型变量sex；int 类型变量age；String 类型变量name; Dog类型变量pet show方法(打印Person类的name,sex和age);getPet方法(返回类型Dog类型;返回pet)；petShow方法(调用pet的show方法)
class Person{
    String sex;
    int age;
    String name;
    Dog pet;

    Person(String sex,int age,String name,Dog pet){
        this.sex =sex;
        this.name = name;
        this.age = age;
        this.pet = pet;
    }

    public void show(){
        System.out.println("姓名:"+this.name+",年龄："+this.age+",性别"+this.sex);
    }

    public Dog getPet(){
        return this.pet;
    }

    public void petShow(){
        this.pet.show();
    }

}

public class Main {
    // Main类,应该与文件名相同,该文件为Main.java,所以这个public 类名应该Main
    // 注：一个java文件只能有一个public 类
    public static void main(String[] args) {
        // 3.在程序入口新建Dog类型变量dog,dog的age属性复制为1,dog的sex属性赋值为"雄性",定义Person类型变量me,对象me的name属性赋值为自己的名字,对象me的sex属性赋值为自己的性别 对象me的age属性赋值为自己的年龄;对象的pet属性赋值为上面定义的dog;
        // 利用构造方法简化主程序代码
        Dog dog = new Dog(1,"雄性");
        Person me = new Person("男",35,"大表哥",dog);

        // 4.调用对象dog的show方法,调用对象me的show方法，调用me的petShow方法

        dog.show();
        me.show();
        me.petShow();

        // 5.新建Dog类型变量myPet，myPet用对象me的getPet方法进行赋值,用判断对象dog和myPet是否相同的方式打印结果

        Dog myPet;
        myPet = me.getPet();

        if(dog==myPet){
            System.out.println("相同");
        }else{
            System.out.println("不相同");
        }

        // 考虑 : 为什么dog==myPet？
        // 考虑 : myPet的值最终来着哪里?

    }
}


          </code>
        </pre>
    <p class="highlight">打印结果如下</p>
    <pre>
          <code class="language-shell line-numbers" >
C:\Users\zqy\.jdks\openjdk-17.0.2\bin\java.exe "-javaagent:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\lib\idea_rt.jar=52086:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\bin" -Dfile.encoding=UTF-8 -classpath E:\java_projects\dome\out\production\dome zqy.xyz.Main
年龄：1性别雄性
姓名:大表哥,年龄：35,性别男
年龄：1性别雄性
相同

进程已结束，退出代码为 0
          </code>
      </pre>

    <a
      class="button"
      @click="$store.commit('setPageSnyc', { type: 'start', page: '10' })"
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

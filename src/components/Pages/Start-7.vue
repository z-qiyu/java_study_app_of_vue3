<template>
  <div class="page">
    <h2>条件语句</h2>
    <p class="highlight">
      注：从本章开始（以及后面的章节），结尾有任务，直接独立完成，即可掌握数组基本用法
    </p>
    <p class="highlight">if...</p>
    <pre>
        <code class="language-java line-numbers" >
package zqy.xyz; //包名,上一章节已经配置过，这个包名就是当前java文件所在项目目录位置

public class Main {
    // Main类,应该与文件名相同,该文件为Main.java,所以这个public 类名应该Main
    // 注：一个java文件只能有一个public 类
    public static void main(String[] args) {
        // if语句格式： if(布尔表达式){代码快}
        if(1 == 2){
            System.out.println("1 等于 2");
        }
        if(1 != 2){
            System.out.println("1 不等于 2");
        }
        // Ascll表 字符f对于102 ！！！
        if('f' == 102){ //自动类型转换
            System.out.println("字符f 等于 102");
        }
        if('f' == (char)102){ //强制类型转换
            System.out.println("字符f 等于 （转换为字符的102）");
        }
        if(true){
            System.out.println("条件为真");
        }
        if(false){
            System.out.println("条件为假");
        }
    }
}


        </code>
      </pre>
    <p class="highlight">打印结果如下</p>
    <pre>
        <code class="language-shell line-numbers" >
C:\Users\zqy\.jdks\openjdk-17.0.2\bin\java.exe "-javaagent:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\lib\idea_rt.jar=55430:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\bin" -Dfile.encoding=UTF-8 -classpath E:\java_projects\dome\out\production\dome zqy.xyz.Main
1 不等于 2
字符f 等于 102
字符f 等于 （转换为字符的102）
条件为真

进程已结束，退出代码为 0
        </code>
    </pre>
    <p class="highlight">if...else...</p>
    <pre>
        <code class="language-java line-numbers" >
package zqy.xyz; //包名,上一章节已经配置过，这个包名就是当前java文件所在项目目录位置

public class Main {
    // Main类,应该与文件名相同,该文件为Main.java,所以这个public 类名应该Main
    // 注：一个java文件只能有一个public 类
    public static void main(String[] args) {
        // if语句格式： if(布尔表达式){代码快}
        if(1 == 2){
            System.out.println("1 等于 2");
        }else{
            System.out.println("1 不等于 2");
        }

        if(1 != 2){
            System.out.println("1 不等于 2");
        }else{
            System.out.println("1 等于 2");
        }

        // Ascll表 字符f对于102 ！！！
        if('f' == 102){ //自动类型转换
            System.out.println("字符f 等于 102");
        }else{
            System.out.println("字符f 不等于 102");
        }

        if('f' == (char)102){ //强制类型转换
            System.out.println("字符f 等于 （转换为字符的102）");
        }else{
            System.out.println("字符f 不等于 （转换为字符的102）");
        }

        if(true){
            System.out.println("条件为真");
        }else{
            System.out.println("条件为假");
        }

        if(false){
            System.out.println("条件为假");
        }else{
            System.out.println("条件为假");
        }
    }
}
        </code>
      </pre>
    <p class="highlight">打印结果如下</p>
    <pre>
        <code class="language-shell line-numbers" >
C:\Users\zqy\.jdks\openjdk-17.0.2\bin\java.exe "-javaagent:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\lib\idea_rt.jar=59782:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\bin" -Dfile.encoding=UTF-8 -classpath E:\java_projects\dome\out\production\dome zqy.xyz.Main
1 不等于 2
1 不等于 2
字符f 等于 102
字符f 等于 （转换为字符的102）
条件为真
条件为假

进程已结束，退出代码为 0

        </code>
      </pre>
    <p class="highlight">if...else if ... else if ... else...</p>
    <pre>
        <code class="language-java line-numbers" >
package zqy.xyz; //包名,上一章节已经配置过，这个包名就是当前java文件所在项目目录位置

public class Main {
    // Main类,应该与文件名相同,该文件为Main.java,所以这个public 类名应该Main
    // 注：一个java文件只能有一个public 类
    public static void main(String[] args) {
        // if语句格式： if(布尔表达式){代码快}
        int a = 1;
        float b = 3.3f;
        double c = 3.3;

        if (a == a){
            System.out.println("a=a");
        }else if(a == b){
            System.out.println("a=b");
        }else if(a == c){
            System.out.println("a=c");
        }else{
            System.out.println("a不等于a,不等于b,不等于c");
        }



    }
}
        </code>
      </pre>
    <pre>
        <code class="language-java line-numbers" >
C:\Users\zqy\.jdks\openjdk-17.0.2\bin\java.exe "-javaagent:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\lib\idea_rt.jar=60627:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\bin" -Dfile.encoding=UTF-8 -classpath E:\java_projects\dome\out\production\dome zqy.xyz.Main
a=a

进程已结束，退出代码为 0

        </code>
    </pre>
    <p class="highlight">switch...case...</p>
    <pre>
        <code class="language-java line-numbers" >
package zqy.xyz; //包名,上一章节已经配置过，这个包名就是当前java文件所在项目目录位置

public class Main {
    // Main类,应该与文件名相同,该文件为Main.java,所以这个public 类名应该Main
    // 注：一个java文件只能有一个public 类
    public static void main(String[] args) {
        //  switch...case...语句格式： 注(变量必须是byte,short,int,char,String其中只要的类型，其他类型报错)
        //  switch(变量){
        //      case &lt;value&Gt; :{...;break}
        //      case &lt;value&Gt; :{...;break}
        //      case &lt;value&Gt; :{...;break}
        //      ...
        //      default:{}
        //  }

        String name1 = new String("张三");
        String name2 = "李四";
        // 验证name1的名字
        switch (name1){
            case "王五" :{
                System.out.println("name1=王五");
                break;
            }
            case "曹操" :{
                System.out.println("name1=曹操");
                break;
            }
            case "张三" :{
                System.out.println("name1=张三");
                break;
            }
            default:{
                System.out.println("name1 既不是王五 也不是曹操 还不是张三");
            }
        }
        // 验证name2的名字
        switch (name2){
            case "王五" :{
                System.out.println("name2=王五");
                break;
            }
            case "曹操" :{
                System.out.println("name2=曹操");
                break;
            }
            case "张三" :{
                System.out.println("name2=张三");
                break;
            }
            default:{
                System.out.println("name2 既不是王五 也不是曹操 还不是张三");
            }
        }

        // switch增强语法 !!! java14一下版本都不支持！！！
        // switch增强语法用的箭头函数
        // 下面将第一个switch例子进行增强
        switch (name1) {
            case "王五" -> System.out.println("name1=王五");
            case "曹操" -> System.out.println("name1=曹操");
            case "张三" -> System.out.println("name1=张三");
            default -> System.out.println("name1 既不是王五 也不是曹操 还不是张三");
        }

        // 增强switch可以有返回值,如下例子
        int a = switch (name1) {
            case "王五" -> 1;  //相当于return 1
            case "曹操" -> 2;  //相当于return 2
            case "张三" -> 3;  //相当于return 3
            default -> 4;     //相当于return 4
        };

        // 因为name1 =  "张三" ；所以a=3;

        System.out.println("a 被 switch语句 赋值为"+a);

    }
}


        </code>
      </pre>
    <pre>
        <code class="language-java line-numbers" >
C:\Users\zqy\.jdks\openjdk-17.0.2\bin\java.exe "-javaagent:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\lib\idea_rt.jar=49715:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\bin" -Dfile.encoding=UTF-8 -classpath E:\java_projects\dome\out\production\dome zqy.xyz.Main
name1=张三
name2 既不是王五 也不是曹操 还不是张三
name1=张三
a 被 switch语句 赋值为3

进程已结束，退出代码为 0

        </code>
    </pre>
    <p class="highlight">任务</p>
    <p>
      循环1到100;被2整除打印1；被3整除打印2，其他打印3；(使用以上4种分支语句)
    </p>
    <a
      class="button"
      @click="$store.commit('setPageSnyc', { type: 'start', page: '8' })"
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

<template>
  <div class="page">
    <h2>循环语句</h2>
    <p class="highlight">
      注：从本章开始（以及后面的章节），结尾有任务，直接独立完成，即可掌握数组基本用法
    </p>
    <p class="highlight">while循环</p>
    <pre>
      <code class="language-java line-numbers" >
package zqy.xyz; //包名,上一章节已经配置过，这个包名就是当前java文件所在项目目录位置

public class Main {
    // Main类,应该与文件名相同,该文件为Main.java,所以这个public 类名应该Main
    // 注：一个java文件只能有一个public 类
    public static void main(String[] args) {
        // while循环格式:  while(布尔表达式){ 循环体 }
        // 1.打印1到100;
        int i = 1;
        while(i&lt;=100){
            System.out.print(i+" ");
            i++;
        }
    }
}
      </code>
    </pre>
    <p class="highlight">打印结果如下</p>
    <pre>
      <code class="language-shell line-numbers" >
C:\Users\zqy\.jdks\openjdk-17.0.2\bin\java.exe "-javaagent:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\lib\idea_rt.jar=63081:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\bin" -Dfile.encoding=UTF-8 -classpath E:\java_projects\dome\out\production\dome zqy.xyz.Main
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100 
进程已结束，退出代码为 0
      </code>
    </pre>
    <p class="highlight">do...while...循环</p>
    <pre>
      <code class="language-java line-numbers" >
package zqy.xyz; //包名,上一章节已经配置过，这个包名就是当前java文件所在项目目录位置

public class Main {
    // Main类,应该与文件名相同,该文件为Main.java,所以这个public 类名应该Main
    // 注：一个java文件只能有一个public 类
    public static void main(String[] args) {
        // d0...while...循环格式:  do{ 循环体 }while(布尔表达式)
        // 2.打印1到100;
        int i = 1;
        do{
            System.out.print(i+" ");
            i++;
        }while (i&lt;101);
    }
}
      </code>
    </pre>
    <p class="highlight">打印结果如下</p>
    <pre>
      <code class="language-shell line-numbers" >
C:\Users\zqy\.jdks\openjdk-17.0.2\bin\java.exe "-javaagent:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\lib\idea_rt.jar=63081:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\bin" -Dfile.encoding=UTF-8 -classpath E:\java_projects\dome\out\production\dome zqy.xyz.Main
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100 
进程已结束，退出代码为 0
      </code>
    </pre>
    <p class="highlight">for循环</p>
    <pre>
      <code class="language-java line-numbers" >
package zqy.xyz; //包名,上一章节已经配置过，这个包名就是当前java文件所在项目目录位置

public class Main {
    // Main类,应该与文件名相同,该文件为Main.java,所以这个public 类名应该Main
    // 注：一个java文件只能有一个public 类
    public static void main(String[] args) {
        // d0...while...循环格式:  do{ 循环体 }while(布尔表达式)
        // 3.打印1到100;
        for(int i=0;i&lt;=100;i++){
            System.out.print(i+" ");
        }
    }
}
      </code>
    </pre>
    <p class="highlight">打印结果如下</p>
    <pre>
      <code class="language-shell line-numbers" >
C:\Users\zqy\.jdks\openjdk-17.0.2\bin\java.exe "-javaagent:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\lib\idea_rt.jar=63081:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\bin" -Dfile.encoding=UTF-8 -classpath E:\java_projects\dome\out\production\dome zqy.xyz.Main
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100 
进程已结束，退出代码为 0
      </code>
    </pre>
    <p class="highlight">continue & break 关键字</p>
    <p>continue :用于循环里面的跳过当前循环，进入下一循环</p>
    <p>break :用于循环里面退出循环</p>
    <pre>
      <code class="language-java line-numbers" >
package zqy.xyz; //包名,上一章节已经配置过，这个包名就是当前java文件所在项目目录位置

public class Main {
    // Main类,应该与文件名相同,该文件为Main.java,所以这个public 类名应该Main
    // 注：一个java文件只能有一个public 类
    public static void main(String[] args) {
        // for循环格式: for(定义控制循环变量;布尔表达式;变量操作语句){循环体};  
        // 4.打印1到100的奇数;
        for(int i=0;i&lt;=100;i++){
            if(i % 2 == 0) { //如果i取余2==0,则跳过当前循环，能够被2整除就跳过，反之打印结果
                continue;
            }
            System.out.print(i+" ");
        }
    }
}

      </code>
    </pre>
    <p class="highlight">打印结果如下</p>
    <pre>
      <code class="language-shell line-numbers" >
C:\Users\zqy\.jdks\openjdk-17.0.2\bin\java.exe "-javaagent:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\lib\idea_rt.jar=62027:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\bin" -Dfile.encoding=UTF-8 -classpath E:\java_projects\dome\out\production\dome zqy.xyz.Main
1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47 49 51 53 55 57 59 61 63 65 67 69 71 73 75 77 79 81 83 85 87 89 91 93 95 97 99 
进程已结束，退出代码为 0

      </code>
    </pre>
    <pre>
      <code class="language-java line-numbers" >
package zqy.xyz; //包名,上一章节已经配置过，这个包名就是当前java文件所在项目目录位置

public class Main {
    // Main类,应该与文件名相同,该文件为Main.java,所以这个public 类名应该Main
    // 注：一个java文件只能有一个public 类
    public static void main(String[] args) {

        // 5.打印1到100;大于等于50就停止打印
        for(int i=0;i&lt;=100;i++){
            if(i % 2 == 0) { //如果i取余2==0,则跳过当前循环，能够被2整除就跳过，反之打印结果
                continue;
            }
            System.out.print(i+" ");
        }
    }
}

      </code>
    </pre>
    <p class="highlight">打印结果如下</p>
    <pre>
      <code class="language-shell line-numbers" >
C:\Users\zqy\.jdks\openjdk-17.0.2\bin\java.exe "-javaagent:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\lib\idea_rt.jar=62027:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\bin" -Dfile.encoding=UTF-8 -classpath E:\java_projects\dome\out\production\dome zqy.xyz.Main
1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47 49 51 53 55 57 59 61 63 65 67 69 71 73 75 77 79 81 83 85 87 89 91 93 95 97 99 
进程已结束，退出代码为 0

      </code>
    </pre>
    <pre>
      <code class="language-java line-numbers" >
package zqy.xyz; //包名,上一章节已经配置过，这个包名就是当前java文件所在项目目录位置

public class Main {
    // Main类,应该与文件名相同,该文件为Main.java,所以这个public 类名应该Main
    // 注：一个java文件只能有一个public 类
    public static void main(String[] args) {

        // 1.打印1到100;
        for(int i=0;i&lt;=100;i++){
            if(i == 50) { //如果i等于50,那么就退出循环，有次可见，打印结果为，1到49
                break;
            }
            System.out.print(i+" ");
        }
    }
}

      </code>
    </pre>
    <p class="highlight">打印结果如下</p>
    <pre>
      <code class="language-shell line-numbers" >
C:\Users\zqy\.jdks\openjdk-17.0.2\bin\java.exe "-javaagent:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\lib\idea_rt.jar=62112:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\bin" -Dfile.encoding=UTF-8 -classpath E:\java_projects\dome\out\production\dome zqy.xyz.Main
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 
进程已结束，退出代码为 0

      </code>
    </pre>
    <p class="highlight">任务</p>
    <p>
      用三钟循环方式分别打印：斐波那契数列(打印数列前30个)，数列为:
      0,1,1,2,3,5,8,13,21,34......
    </p>
    <a
      class="button"
      @click="$store.commit('setPageSnyc', { type: 'start', page: '7' })"
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

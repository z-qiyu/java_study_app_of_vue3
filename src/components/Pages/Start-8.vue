<template>
  <div class="page">
    <h2>数组</h2>
    <p class="highlight">
      注：从本章开始（以及后面的章节），结尾有任务，直接独立完成，即可掌握数组基本用法
    </p>
    <pre>
        <code class="language-java line-numbers" >
package zqy.xyz; //包名,上一章节已经配置过，这个包名就是当前java文件所在项目目录位置

public class Main {
    // Main类,应该与文件名相同,该文件为Main.java,所以这个public 类名应该Main
    // 注：一个java文件只能有一个public 类
    public static void main(String[] args) {
        // 定义数组: &lt;数据类型&gt; [] &lt;变量名&gt;;
        // 定义int类型数组;未赋值
        int [] arrayA;
        // 定义长度为五的数组
        arrayA = new int [5];
        // 定义String类型数组，赋值{"张三","李四"}；长度为2
        String [] arrayB = {"张三","李四"};
        // 定义String类型数组，长度为10
        char [] arrayC = new char[10];

        // 获取数组长度, Array().length
        System.out.println("arrayA的长度:"+arrayA.length);
        System.out.println("arrayB的长度:"+arrayB.length);
        System.out.println("arrayC的长度:"+arrayC.length);

        // 存入4，6，8，10，12到arrayA;
        for (int i=4;i&lt;=12;i++){
            if (i%2==0){
                arrayA[(i-4)/2] = i;
            }
        }

        // 打印数组arrayA
        System.out.print("{");
        for (int i=0;i&lt;arrayA.length;i++){
            System.out.print(arrayA[i]+",");
        }
        System.out.print("}\n");

        // 打印数组arrayB
        System.out.print("{");
        for (int i=0;i&lt;arrayB.length;i++){
            System.out.print(arrayB[i]+",");
        }
        System.out.print("}\n");
        // 打印数组arrayB,并且去掉最后面的逗号
        System.out.print("{");
        for (int i=0;i&lt;arrayB.length;i++){
            if(i == arrayB.length - 1){
                System.out.print(arrayB[i]);
            }else{
                System.out.print(arrayB[i]+",");
            }
        }
        System.out.println("}");
        // arrayC 是char数组,char数组可以直接打印，不需要循环打印元素
        System.out.println(arrayC);
        //对数组arrayC元素依次赋值
        arrayC[0] = 'j';
        arrayC[1] = 'a';
        arrayC[2] = 'v';
        arrayC[3] = 'a';
        arrayC[4] = ' ';
        arrayC[5] = 'i';
        arrayC[6] = 's';
        arrayC[7] = ' ';
        arrayC[8] = 'a';
        arrayC[9] = ' ';
        System.out.println(arrayC);
    }
}


        </code>
      </pre>
    <p class="highlight">打印结果如下</p>
    <pre>
        <code class="language-shell line-numbers" >
C:\Users\zqy\.jdks\openjdk-17.0.2\bin\java.exe "-javaagent:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\lib\idea_rt.jar=50823:E:\idea\IntelliJ IDEA Community Edition 2021.2.1\bin" -Dfile.encoding=UTF-8 -classpath E:\java_projects\dome\out\production\dome zqy.xyz.Main
arrayA的长度:5
arrayB的长度:2
arrayC的长度:10
{4,6,8,10,12,}
{张三,李四,}
{张三,李四}
          
java is a 

进程已结束，退出代码为 0

        </code>
    </pre>
    <p class="highlight">任务</p>
    <p>
      1.将1到100存到一个长度为100的数组;<br />
      2.将数组所有的元素叠加；相当于将1到100叠加
    </p>
    <a
      class="button"
      @click="$store.commit('setPageSnyc', { type: 'start', page: '9' })"
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

import { createStore } from "vuex";

const data: Record<string, unknown> = {
  page: {
    start: {
      title: "java 基础入门",
      menu: [
        { name: "安装jdk", page: "1" },
        { name: "安装idea", page: "2" },
        { name: "开发配置", page: "3" },
        { name: "基本语法", page: "4" },
        { name: "基本数据类型", page: "5" },
        { name: "数组", page: "6" },
        { name: "变量和常量", page: "7" },
        { name: "修饰符和运算符", page: "8" },
        { name: "循环语句", page: "9" },
        { name: "条件语句", page: "10" },
        { name: "循环语句", page: "11" },
        { name: "类", page: "12" },
        { name: "继承", page: "13" },
        { name: "重写重载", page: "14" },
        { name: "多态", page: "15" },
        { name: "抽象类", page: "16" },
        { name: "封装", page: "17" },
        { name: "接口", page: "18" },
        { name: "枚举", page: "19" },
        { name: "包", page: "20" },
        { name: "Object", page: "21" },
        { name: "范型", page: "22" },
      ],
    },
    forword: {
      title: "java 进阶",
      menu: [
        { name: "Number", page: "1" },
        { name: "Math", page: "2" },
        { name: "Character", page: "3" },
        { name: "String", page: "4" },
        { name: "StringBuffer", page: "5" },
        { name: "Stream", page: "6" },
        { name: "File", page: "7" },
        { name: "IO", page: "8" },
        { name: "Exception", page: "9" },
        { name: "List", page: "10" },
        { name: "Collection", page: "11" },
        { name: "Set", page: "12" },
        { name: "Map", page: "13" },
        { name: "SortedSet", page: "14" },
        { name: "Enumeration", page: "15" },
        { name: "Iterator", page: "16" },
        { name: "LinkedList LinkedHashMap LinkIterator", page: "17" },
        { name: "HashSet HashMap", page: "18" },
        { name: "Thread", page: "19" },
      ],
    },
    actualCombat: {
      title: "java 实战 构建一个简易缓存数据库",
      menu: [
        { name: "构建模型", page: "1" },
        { name: "定义接口", page: "2" },
        { name: "定义枚举", page: "3" },
        { name: "定义抽象类", page: "4" },
        { name: "实现接口 & 实现抽象类", page: "5" },
        { name: "创建类方法", page: "6" },
        { name: "创建类方法", page: "7" },
      ],
    },
  },
};

const page: Record<string, string> = {
  type: "",
  page: "0",
};

export default createStore({
  state: {
    data,
    page,
  },
  getters: {},
  mutations: {
    setPageSnyc(store: any, page: Record<string, string>) {
      store.page = page;
    },
  },
  actions: {},
  modules: {},
});

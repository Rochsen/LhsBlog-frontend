import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/index.vue';
import Article from '@/views/article/index.vue';
import Archive from '@/views/archive/index.vue';
import About from '@/views/about/index.vue';
import Manage from '@/views/manage/index.vue';
// 自建应用组件
import DataMng from '@/views/apps/dataMng/index.vue';
import TodoList from "@/components/practice/todoList.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/article",
      name: "article",
      component: Article,
    },
    {
      path: "/archive",
      name: "archive",
      component: Archive,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/manage",
      name: "manage",
      component: Manage,
    },
    {
      path: "/apps/dataMng",
      name: "dataMng",
      component: DataMng,
    },
    {
      path: "/apps/todoList",
      name: "todoList",
      component: TodoList,
    },
  ],
});

export default router

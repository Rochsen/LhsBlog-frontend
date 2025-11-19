<template>
  <div
    class="fixed top-0 left-0 right-0 flex justify-center-safe items-center w-full bg-white px-2 py-2 shadow-md z-50">
    <div class="flex items-center justify-center md:block">
      <NavigationMenu>
        <NavigationMenuList class="space-x-4">
          <NavigationMenuItem v-for="item in navList" :key="item.href">
            <NavigationMenuLink :href="item.href" :class="[
                'text-lg py-2 rounded-b-none text-gray-600 hover:text-gray-900 transition-colors hover:bg-gray-0',
                isRouteActive(item.href) ? 'font-bold border-b-2 border-blue-500' : ''
              ]">{{ item.title }}</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
    <!-- 其他代码保持不变 -->
  </div>
</template>

<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/Button";
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

/** 导航菜单列表 */
const navList: { title: string; href: string }[] = [
  {
    title: "首页",
    href: "/",
  },
  {
    title: "文章",
    href: "/article",
  },
  {
    title: "归档",
    href: "/archive",
  },
  {
    title: "关于",
    href: "/about",
  },
  {
    title: "管理",
    href: "/manage",
  },
];

// 判断当前路由是否激活
const isRouteActive = (href: string) => {
  // 对于首页，精确匹配 "/"
  if (href === '/') {
    return route.path === '/';
  }
  // 对于其他页面，检查路径是否以该链接开头（支持子路径）
  return route.path.startsWith(href);
};
</script>
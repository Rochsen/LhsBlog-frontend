<template>
  <div
    class="fixed top-0 left-0 right-0 flex justify-center-safe items-center w-full bg-white px-2 py-2 shadow-md z-50">
    <div class="flex items-center justify-center md:block">
      <NavigationMenu>
        <NavigationMenuList class="space-x-4">
          <!-- 单级菜单 -->
          <NavigationMenuItem v-for="item in navList" :key="item.href">
            <NavigationMenuLink :href="item.href" :class="[
                'text-lg py-2 rounded-b-none text-gray-600 hover:text-gray-900 transition-colors hover:bg-gray-0',
                isRouteActive(item.href) ? 'font-bold border-b-2 border-blue-500' : ''
              ]">{{ item.title }}</NavigationMenuLink>
          </NavigationMenuItem>
          <!-- 多级菜单 - 我的应用 -->
          <NavigationMenuItem>
            <NavigationMenuTrigger :class="[
              'text-lg py-2 px-2 rounded-b-none text-gray-600 hover:text-gray-900 transition-colors hover:bg-gray-0',
            ]">应用</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="w-[100px] gap-3 md:w-[200px] lg:w-[150px] ">
                <li v-for="component in apps" :key="component.title">
                  <NavigationMenuLink as-child>
                    <a :href="component.href"
                      class="block select-none space-y-1 rounded-md p-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div :class="isRouteActive(component.href) ? 'font-bold border-b-2 border-blue-500' : ''">{{ component.title }}</div>
                      <!-- <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {{ component.description }}
                      </p> -->
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
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
import { useRoute } from 'vue-router';

const route = useRoute();


// 菜单项数据类型
interface MenuItemType {
  title: string;
  href: string;
  description?: string;
}


/** 导航菜单列表 */
const navList: MenuItemType[] = [
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
  // {
  //   title: "管理",
  //   href: "/manage",
  // },
];


// 应用菜单
const apps: MenuItemType[] = [
  {
    title: "数据管理CRUD",
    href: "/apps/dataMng",
    // description:
    //   "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "TodoList",
    href: "/apps/todoList",
  }
]


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
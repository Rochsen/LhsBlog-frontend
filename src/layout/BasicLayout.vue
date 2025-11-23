<template>
    <div id="top" class="pt-15">
        <Header></Header>
        <router-view class="min-h-screen"></router-view>
        <Bottom></Bottom>

        <!-- 返回顶部 -->
        <div id="topAnchor" class="wrap">
            <a id="TOPUp" href="#top"
                class="flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-arrow-up-to-line-icon lucide-arrow-up-to-line">
                    <path d="M5 3h14" />
                    <path d="m18 13-6-6-6 6" />
                    <path d="M12 7v14" />
                </svg>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import Bottom from "@/components/Bottom.vue";

</script>

<style>
html {
    scroll-behavior: smooth;
}

/* 确保主要容器可以产生滚动 */
#app,
#app>div {
    min-height: 100vh;
}

#TOPUp {
    position: fixed;
    right: 45px;
    bottom: 100px;
    width: 40px;
    height: 40px;
    z-index: 99999999;
    box-shadow: 0px 0px 4px 4px #ecefef;
    border-radius: 600px;
    transition: all 0.3s ease-in-out;
    opacity: 0.8;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: inherit;
}

#TOPUp:hover {
    transform: translateY(-5px) scale(1.1);
    opacity: 1;
    box-shadow: 0px 0px 8px 6px #ecefef;
}
</style>
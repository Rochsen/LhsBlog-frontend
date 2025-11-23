<template>
  <div class="w-full mt-0 pt-0 select-none">
    <!-- 修改头像容器结构 -->
    <div class="flex items-center justify-center h-60 relative mt-5 w-full">
      <!-- 将 Ripple 放在头像后面 -->
      <div class="absolute inset-0 flex items-center justify-center">
        <Ripple class="bg-white/5 mask-[linear-gradient(to_bottom,white,transparent)]"
          circle-class="border-[hsl(var(--primary))] bg-[#0000]/25 dark:bg-[#fff]/25 rounded-full"
          :base-circle-size="180" :space-between-circle="20" :number-of-circles="5" />
      </div>
      <div class="relative flex items-center justify-center">
        <!-- 头像保持在最上层 -->
        <div class="relative z-20">
          <img class="h-40 w-40 rounded-full mx-5 transition-transform duration-300 hover:scale-110" src="/avatar.jpg">
          <div class="h-7 w-7 border-3 border-white rounded-full bg-green-400 absolute bottom-1 right-10"></div>
        </div>
      </div>
    </div>

    <!-- 自我介绍文本 -->
    <div class="flex items-center justify-center mb-10 text-4xl font-semibold">自我介绍</div>

    <!-- 开场白 + 技术栈 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:max-w-[1200px] w-full mx-auto mt-5">
      <!-- 开场白 -->
      <div
        class="flex items-center mx-1 bg-linear-to-r from-blue-500 to-cyan-500 border-x-2 border-b-2 hover:shadow-lg h-50 rounded-xl transition-transform duration-500 hover:-translate-y-2">
        <div class="flex-col ml-10 text-white">
          <div class="text-md">你好，很高兴认识你👋</div>
          <div class="text-3xl font-semibold my-2">我叫 罗浩森</div>
          <div class="text-md">是一位 生信分析工程师、前/后端开发初学者</div>
        </div>
      </div>

      <!-- 页面技术栈 -->
      <div
        class="mx-1.5 bg-white h-auto min-h-50 rounded-xl shadow-sm p-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ">
        <div class="flex">
          <div
            class="flex flex-col justify-center px-1 w-15  text-gray-800 mr-2 write-vertical-lr text-orientation-mixed text-center font-bold tracking-[0.5em] leading-[1.4]">
            网站技术栈
          </div>
          <div class="flex flex-wrap gap-3 grow">
            <div v-for="(item, index) in skills" :key="index"
              class="flex items-center rounded-3xl bg-white h-12 shadow-lg border border-gray-300 hover:border-blue-400 hover:scale-105 transition-all duration-300">
              <a :href="item.url" target="_blank" class="flex items-center w-full h-full">
                <img :class="['mx-3 w-8 h-8 rounded-2xl', item.bg]" :src="item.svg" :alt="item.name" />
                <div class="pr-4 text-gray-800 font-medium whitespace-nowrap">{{ item.name }}</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 lg:max-w-[1200px] mx-auto flex-1 w-full">
      <!-- 性格人格 -->
      <div
        class="mx-1 my-1 bg-white h-50 rounded-xl col-span-1 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
        <div class="grid grid-cols-2 h-full">
          <div class="flex flex-col items-center justify-center">
            <div class="text-md text-gray-500">人格类型</div>
            <div class="my-2 text-yellow-500 font-semibold lg:text-5xl text-2xl max-sm:text-5xl">ISTP-A</div>
            <div class="text-yellow-500 max-md:text-xl sm:text-2xl">鉴赏家</div>
          </div>

          <a href="https://www.16personalities.com/ch/istp-%E4%BA%BA%E6%A0%BC" target="_blank">
            <img class="h-50 animate-swing" src="/ISTP-A.svg" />
          </a>
        </div>
      </div>

      <!-- 个人简单的信息 -->
      <div
        class="mx-1 my-1 bg-white sm:h-50 rounded-xl col-span-2 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
        <div class="grid grid-cols-1 sm:grid-cols-3 h-full max-sm:h-65">
          <div class="flex flex-col justify-center items-center max-sm:mb-2">
            <div class="text-md mb-2 text-gray-600">生于</div>
            <div class="text-xl lg:text-5xl font-semibold text-blue-400">1999</div>
          </div>
          <div class="flex flex-col justify-center items-center max-sm:mb-2">
            <div class="text-md mb-2 text-gray-600 text-center">仲恺农业工程学院</div>
            <div class="lg:text-xl font-semibold text-green-600 text-center">种子科学与工程（1,2）</div>
            <div class="lg:text-xl font-semibold text-green-600 text-center">仲华基因科技产业班（3,4）</div>
          </div>
          <div class="flex flex-col justify-center items-center max-sm:mb-2">
            <div class="text-md mb-2 text-gray-600">兴趣爱好</div>
            <div class="lg:text-2xl font-semibold text-purple-600">动作角色扮演游戏</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 游戏生涯展示 - 小黑盒 -->
    <div
      class="grid grid-cols-1 lg:max-w-[1200px] w-auto mx-auto my-5 bg-white shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      <div class="flex justify-center items-center font-bold text-4xl my-10">个人游玩时长</div>
      <div class="flex justify-center items-center text-md mb-2 text-gray-400">数据截至2025年11月10日</div>
      <img class="sm:w-full sm:h-200 p-5" src="/favors/game-rankAll.png">
    </div>

    <!-- 职业发展 -->
    <div
      class="grid grid-cols-1 lg:max-w-[1200px] w-auto h-auto mx-auto my-5 shadow-sm bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      <div class="flex justify-center items-center font-bold text-4xl my-15">个人职业生涯记录</div>
      <div class="flex justify-center items-center my-5">
        <div class="flex flex-col items-center w-full max-w-md mb-15 max-sm:px-2">
          <div v-for="(step, index) in career" :key="step.step" class="relative w-full flex flex-col items-center">
            <!-- 步骤节点 -->
            <div class="flex items-start w-full mb-4">
              <div class="flex flex-col items-center mr-4 relative">
                <!-- 连接线 -->
                <div v-if="index < career.length - 1"
                  class="absolute top-9 left-1/2 h-20 w-0.5 bg-muted -translate-x-1/2 -translate-y-1/3"
                  :class="{ 'bg-primary': step.state === 'completed' }"></div>

                <div class="w-9 h-9 rounded-full flex items-center justify-center z-10"
                  :class="getStepButtonClass(step.state)">
                  <Check v-if="step.state === 'completed'" class="size-5 text-white" />
                  <Circle v-else-if="step.state === 'active'" class="size-5 text-white" />
                  <Dot v-else class="size-5 text-gray-400" />
                </div>
              </div>

              <div class="flex-1 pb-6">
                <div class="text-sm font-semibold transition lg:text-xl"
                  :class="{ 'text-primary': step.state === 'active' }">
                  {{ step.title }}
                </div>
                <div class="text-xs text-muted-foreground transition md:not-sr-only lg:text-sm w-auto mt-1"
                  :class="{ 'text-primary': step.state === 'active' }">
                  {{ step.description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- 结束语 - 如何找到我 -->
    <div
      class="grid grid-cols-1 lg:max-w-[1200px] mx-auto my-5 shadow-sm bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      <div class="flex items-center justify-center font-bold text-3xl my-15">欢迎通过以下方式联系我</div>
      <div class="flex gap-4 mb-20 justify-center items-center">
        <a href="https://github.com/Rochsen" target="_blank">
          <Button class="justify-center bg-black text-white border-black w-30 h-10 cursor-pointer">
            <svg width="16" height="16" viewBox="0 0 22 22" fill="none">
              <path fill="white"
                d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z">
              </path>
            </svg>
            GitHub
          </Button>
        </a>

        <!-- B站 -->
        <a href="https://space.bilibili.com/361524948" target="_blank">
          <Button class="bg-pink-500 text-white w-30 h-10 hover:bg-sky-500/75 cursor-pointer">
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M3.73252 2.67094C3.33229 2.28484 3.33229 1.64373 3.73252 1.25764C4.11291 0.890684 4.71552 0.890684 5.09591 1.25764L7.21723 3.30403C7.27749 3.36218 7.32869 3.4261 7.37081 3.49407H10.5789C10.6211 3.4261 10.6723 3.36218 10.7325 3.30403L12.8538 1.25764C13.2342 0.890684 13.8368 0.890684 14.2172 1.25764C14.6175 1.64373 14.6175 2.28484 14.2172 2.67094L13.364 3.49407H14C16.2091 3.49407 18 5.28493 18 7.49407V12.9996C18 15.2087 16.2091 16.9996 14 16.9996H4C1.79086 16.9996 0 15.2087 0 12.9996V7.49406C0 5.28492 1.79086 3.49407 4 3.49407H4.58579L3.73252 2.67094ZM4 5.42343C2.89543 5.42343 2 6.31886 2 7.42343V13.0702C2 14.1748 2.89543 15.0702 4 15.0702H14C15.1046 15.0702 16 14.1748 16 13.0702V7.42343C16 6.31886 15.1046 5.42343 14 5.42343H4ZM5 9.31747C5 8.76519 5.44772 8.31747 6 8.31747C6.55228 8.31747 7 8.76519 7 9.31747V10.2115C7 10.7638 6.55228 11.2115 6 11.2115C5.44772 11.2115 5 10.7638 5 10.2115V9.31747ZM12 8.31747C11.4477 8.31747 11 8.76519 11 9.31747V10.2115C11 10.7638 11.4477 11.2115 12 11.2115C12.5523 11.2115 13 10.7638 13 10.2115V9.31747C13 8.76519 12.5523 8.31747 12 8.31747Z"
                fill="currentColor"></path>
            </svg>
            Bilibili
          </Button>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 动画组件
import { Ripple } from '@/components/ui/ripple'
import { Check, Circle, Dot } from "lucide-vue-next"
// shadcn
import { Button } from '@/components/ui/button'
// 自建数据
import { skills, career } from './data'

defineOptions({ name: 'About' })


const getStepButtonClass = (state: string) => {
  switch (state) {
    case 'completed':
      return 'bg-primary'
    case 'active':
      return 'bg-primary ring-2 ring-ring ring-offset-2 ring-offset-background'
    default:
      return 'bg-muted'
  }
}


</script>

<style scoped>
@keyframes swing {

  0%,
  100% {
    transform: rotate(-2deg);
  }

  50% {
    transform: rotate(2deg);
  }
}

.animate-swing {
  animation: swing 3s ease-in-out infinite;
}

.custom-spin {
  animation: spin 2s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}


/* 在你的组件样式中添加 */
.stepper-separator.bg-accent {
  background-color: hsl(var(--primary)) !important;
}

</style>

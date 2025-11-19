<!-- src/components/ui/ripple/Ripple.vue -->
<template>
  <div class="absolute inset-0">
    <RippleCircle 
      v-for="index in numberOfCircles" 
      :key="index"
      :opacity="baseCircleOpacity - index * circleOpacityDowngradeRatio"
      :size="baseCircleSize + index * spaceBetweenCircle" 
      :animation-delay="index * waveSpeed"
      :border-style="index === numberOfCircles - 1 ? 'dashed' : 'solid'" 
      :class="circleClass" 
      :style="{
        '--duration': '2s',
        '--i': index
      }"
    />
  </div>
</template>

<script setup lang="ts">
// 添加这行导入语句
import RippleCircle from './RippleCircle.vue';

interface Props {
  baseCircleSize?: number;
  baseCircleOpacity?: number;
  spaceBetweenCircle?: number;
  circleOpacityDowngradeRatio?: number;
  circleClass?: string;
  waveSpeed?: number;
  numberOfCircles?: number;
}

withDefaults(defineProps<Props>(), {
  baseCircleSize: 210,
  baseCircleOpacity: 0.24,
  circleOpacityDowngradeRatio: 0.03,
  waveSpeed: 80,
  spaceBetweenCircle: 70,
  numberOfCircles: 7,
});
</script>
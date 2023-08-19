<template>
  <div class="container py-4">
    <button class="btn btn-primary me-2" @click="changeComp(DynamicApple)">사과</button>
    <button class="btn btn-danger" @click="changeComp(DynamicBanana)">바나나</button>
    <hr>
    <component :is="currentComp" :title="title"></component>

    <p>{{ obj1 }}</p>
    <p>{{ obj2 }}</p>
  </div>
</template>

<script setup>
import { ref, shallowRef } from 'vue';
import DynamicApple from './DynamicApple.vue';
import DynamicBanana from './DynamicBanana.vue';

// cimponent :is="" 를 사용할 경우 반응형 데이터는 shallowRef를 사용하는게 효율적임.
// shallowRef : 속성이 바뀔경우는 반응하지 않고 값이 변경될 경우 반응함.
const currentComp = shallowRef(DynamicApple);
const title = ref('apple')
const changeComp = comp => {
  currentComp.value = comp;
  if(comp == DynamicApple) title.value = 'APPLE'
  else title.value = 'BANANA'
}
// -----------------------------------------------------------
const obj1 = ref({name: '강문호'})
const obj2 = shallowRef({name: '안민정'})
</script>

<style lang="scss" scoped>

</style>
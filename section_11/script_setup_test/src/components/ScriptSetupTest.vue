<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: String
})

const emit = defineEmits(['custom-event'])

const count = ref(0);
const increment = () => {
  count.value++;
};

const decrement = () => {
  count.value--;
};

</script>

<template>
  <span>{{ props.title }}</span><br>
  <button @click="emit('custom-event', '子からの値')">Emit実行</button>
  <h1>{{ count }}</h1>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
</template>
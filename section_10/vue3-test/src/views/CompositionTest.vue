<template>
  <div>
    Composition
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>{{ nameRef }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup(){
    let name = '八村'
    const age = 25
    const nameRef = ref('渡邉')
    return {
      name,
      age,
      nameRef
    }
  },
  data(){
    return {
      number: 8 ,
      sports: 'Basketball'
    }
  },
  created(){},
  mounted(){}
}
</script>

<style>

</style>
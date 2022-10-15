<template>
  <div>
    Composition
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>ref: {{ nameRef }}</p>
    <p>reactive: {{ book.title }}</p>
    <p>reactive: {{ book.author[0] }}</p>
    <p>reactiveToRefs: {{ titleRef }}</p>
    <p>reactiveToRefs: {{ authorRef[0] }}</p>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue'
export default {
  setup(){
    let name = '八村'
    const age = 25
    const nameRef = ref('渡邉')
    const book = reactive({
      title: 'タイトル',
      author: ['大谷','伊藤']
    })
    const bookToRefs = reactive({
      titleRef: 'タイトル2',
      authorRef: ['大谷2','伊藤2']
    })
    return {
      name,
      age,
      nameRef,
      book,
      ...toRefs(bookToRefs)
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
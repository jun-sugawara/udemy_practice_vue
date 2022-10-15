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
    <button @click="btnClick">クリック</button>
    <p>computed: {{ totalPrice }}</p>
  </div>
</template>

<script>
import { reactive, ref, toRefs, computed } from 'vue'
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

    const btnClick = (e) => {
      console.log(book.title)
      console.log(e)
    }

    const item = reactive({
      price: 100,
      number: 3
    })

    const totalPrice = computed(() =>{
      return item.price * item.number
    })

    return {
      name,
      age,
      nameRef,
      book,
      ...toRefs(bookToRefs),
      btnClick,
      item,
      totalPrice      
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
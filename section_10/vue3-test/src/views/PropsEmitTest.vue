<template>
  <div>PropsEmitTest</div>
  <div>{{ setupBooks }}</div>
  <ul>
    <li class="li-book" v-for="book in setupBooks" :key="book" >
      {{ book.title }}
    </li>
  </ul>
  <div>{{ dataBooks }}</div>
</template>

<script>
export default {
  props:{
    setupBooks: Array,
    dataBooks: Array
  },
  setup(props){
    console.log(props.setupBooks[0].author)
    console.log(props.dataBooks)
  }
}
</script>

<style>
  .li-book {
    list-style: none;
  }
</style>
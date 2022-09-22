<template>
  <div>
    <p>本の詳細</p>
    <p>タイトル： {{ title }}</p>
    <p>本の内容： {{ content }}</p>
    {{ books[bookIndex].title }}
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    content: String
  },
  data(){
    return {
      bookIndex: this.$route.params.id -1,
      books:[
        {id: 1, title:'タイトル１', content:'本の内容１'},
        {id: 2, title:'タイトル２', content:'本の内容２'},
        {id: 3, title:'タイトル３', content:'本の内容３'}
      ]
    }
  },
  created(){
    if(this.$route.params.id > this.books.length){
      this.$router.push(('/book'))
    }
  }
}
</script>

<style>

</style>
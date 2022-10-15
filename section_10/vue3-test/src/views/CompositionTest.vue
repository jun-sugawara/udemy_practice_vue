<template>
  <div>
    Composition
    <p>{{ name }}</p>
    <p>{{ age }}</p>
  </div>
</template>

<script>
export default {
  setup(){
    let name = '八村'
    const age = 25
    console.log('setup')
    return {
      name,
      age
    }
  },
  data(){
    return {
      number: 8 ,
      sports: 'Basketball'
    }
  },
  created(){
    console.log('created')
  },
  mounted(){
    console.log('mounted')
  }
}
</script>

<style>

</style>
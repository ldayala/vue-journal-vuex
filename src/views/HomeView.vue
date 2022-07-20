<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="goToDayBook" class=" btn btn-primary">primario</button>
    <button @click="goToDayBook" class=" btn btn-secondary">primario</button>
    <button @click="goToDayBook" class=" btn btn-success">primario</button>
  </div>
</template>

<script>
 export default{
  methods:{
    goToDayBook(){
      this.$router.push({name:'no-entry'})
    }
  }
 }

</script>
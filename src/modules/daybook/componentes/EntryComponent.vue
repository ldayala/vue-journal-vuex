<template>
  <div 
  class="entry-container mb-3 pointer p-2"
  @click="$router.push({name:'entry',params:{id:10}})">
     <div class="entry-title d-flex">
         <span class="text-success fs-5 fw-bold">15</span>
         <span class="mx-1 fs-5">julio</span>
         <span class="mx-2 fw-light">2022,jueves</span>
     </div>
     <div class="entry-description">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit exercitationem dolorem dolorum debitis
       consequatur id, ipsa cupiditate velit nobis voluptatibus.
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
 .entry-container{
  border-bottom: 1px solid #2e3c50;
  transition: 0.2s all ease-in-out;

  &:hover{
    background-color: lighten($color:grey, $amount: 45);
  }
 }
</style>
<template>
  <div class="entry-title d-flex justify-content-between p-2">º
    <div>
        <span class="text-success fs-3 fw-normal">15</span>
        <span class="mx-1 fs-3">julio</span>
        <span class="mx-2 fs-4 fw-light">2021, jueves</span>
    </div>
    <div>
        <button class="btn btn-danger mx-2">
            borrar 
            <i class="fa fa-trash-alt"></i>
        </button>
         <button class="btn btn-primary">
            subir foto
            <i class="fa fa-upload"></i>
        </button>
    </div>

  </div>

  <hr>
  <div class=" d-flex flex-column px-3 h-75">
    <textarea placeholder="Que sucedio hoy"></textarea>
  </div>

  <fab-componet 
  icon='fa-save'/>
  <img src="https://solucionesgalcab.es/wp-content/themes/BizPage/img/pladur/ima1.jpg" alt="imagen"
  class="img-thumbnail">
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
 
export default {
  components: { 
    FabComponet: defineAsyncComponent(()=>import('../componentes/FabComponet.vue'))
    },

}
</script>

<style lang="scss" scoped>
  textarea{
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus{
        outline: none;
    }
  }

  img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
  }
</style>
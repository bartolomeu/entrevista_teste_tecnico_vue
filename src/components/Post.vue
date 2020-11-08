<template>
  <div class="col-lg-6 p-3">
    <div class="border border-primary post">
      <img :src="img" :alt="title" class="img-fluid"/>
      
      <div class="p-3">
        <h3 class="font-wight-bold text-primary py-4">{{title}}</h3>
        <p>{{text}}</p>
      </div>
      
      <div class="col bg-primary text-center py-2">
        <button class="btn btn-secondary text-light">Continuar</button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
    img: String,
  }
}
</script>

<style>
.post{
  border-width: 5px !important;
}
</style>
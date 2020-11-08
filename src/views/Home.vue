<template>
  <div class="home">
    <div class="row">
      
      <div class="col-lg-6">
        <div id="jumbo" class="m-3 p-4 border border-primary text-primary">
          <h1 class="h6">Vida Toda</h1>
          <h1 class="display-1 pb-5 font-weight-bold text-uppercase">Bem Estar</h1>
          <h2>Soluções complestar para viver mais e melhor</h2>

          <div class="row">
            <div class="col text-center">
              <button class="
                text-white btn btn-lg btn-secondary 
                mt-5 p-3 rounded-0">Quero uma consultoria</button>
            </div>
          </div>
        </div>

        <div class="m-3 p-4">
          <h3 class="font-weight-bold text-secondary">Pense Nisso...</h3>
          <p>O quanto o diagnóstico de uma doença grave pode afetar hoje, sua vida pessoal e financeira?</p>
        </div>
      </div>

      <div class="col-lg-6">
        <div id="sideForm" class="bg-primary p-3 m-5 text-light ">
          <h2 class="font-weight-bold text-secondary">Pronto para planejar seu sossego?</h2>
          <p>Agende uma consultoria sem compromisso pelo formulário abaixo!</p>

          <div class="form-group">
            <label for="inp_name">Nome:</label>
            <input type="text" id="inp_name" class="form-control"/>
          </div>

          <div class="form-group">
            <label for="inp_email">Email:</label>
            <input type="text" class="form-control" id="inp_email">
          </div>

          <div class="form-group">
            <label for="inp_email">Estado Civil:</label>
            <input type="text" class="form-control" id="inp_email">
          </div>
          
          <div class="form-group">
            <label for="inp_email">Profissão:</label>
            <input type="text" class="form-control" id="inp_email">
          </div>
          
          <div class="form-group">
            <label for="inp_email">Telefone/WhatsApp:</label>
            <input type="text" class="form-control" id="inp_email">
          </div>
          
          <div class="form-group">
            <label for="inp_email">Renda Mensal:</label>
            <input type="text" class="form-control" id="inp_email">
          </div>

          <div class="row">
            <div class="col text-center">
              <button class="btn btn-lg btn-secondary 
                rounded text-white font-weight-bold">Enviar</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<style>
#jumbo{
  border-width: 5px !important;
}
#sideForm{
  margin-top: 20rem !important;
}
@media only screen and (max-width: 960px) {
  #sideForm{
    margin-top: 2rem !important;
  }
}
</style>
<script>
export default {
  name: "Home",
  components: {
  }
};
</script>

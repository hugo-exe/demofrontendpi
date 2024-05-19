<template>
 <div class="adicionarAluno-container">
   <div class="quadrado">
     <div id="retangulo">
       <span class="adicionarAluno-text">CADASTRO DE TCC</span>
     </div>
     <div class="bola-button">
       <button>
         <span id="bola-adicionar">></span>
       </button>
     </div>
     <div class="input-container">
        <input type="number" placeholder="Ano" class="input-preencher1" min="1900">
        <input type="text" placeholder="Turma" class="input-preencher2">
        <button id="quadrado-adicionar" @click="adicionarAluno">V</button>
     </div>
     <div class="titulo-container">
        <input type="text" placeholder="Titulo" class="input-preencher3">
     </div>
     <div class="resumo-container">
       <textarea placeholder="Resumo do Trabalho" class="textarea-resumo"></textarea>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'CadastroTccPage',
};
</script>

<style scoped>
.adicionarAluno-container {
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
 background-color: #fcfcdc;
}

.quadrado {
 width: 1000px;
 height: 600px;
 border: 6px solid #09A6A3;
 display: flex;
 flex-direction: column;
 align-items: center;
 position: relative;
 background-color: #fff;
}

.adicionarAluno-text {
 font-size: 3em;
 color: #fff;
 padding: 5px 10px;
}

#retangulo {
 background: #09A6A3;
 width: 100%;
 height: 80px;
 border: 6px solid #09A6A3;
 display: flex;
 justify-content: center;
 align-items: center;
 margin-bottom: 20px;
}

.input-container {
  display: flex;
  align-items: center; 
  margin-bottom: 40px;
}

.input-preencher1 {
 border: 1px solid #09A6A3;
 background-color: #fcfcdc;
 width: 7.6em;
 height: 30px;
 margin-top: 10px;
 padding: 10px;
 font-size: 1em;
 margin-right: 1em;
}

.input-preencher2 {
 border: 1px solid #09A6A3;
 background-color: #fcfcdc;
 width: 12em;
 height: 30px;
 margin-top: 10px;
 padding: 10px;
 font-size: 1em;
 margin-right: -1px; 
}

#quadrado-adicionar {
 margin-top: 10px;
 border: 1px solid #09A6A3;
 width: 50px;
 height: 52px;
 background-color: #fcfcdc;
 color: #09A6A3;
 font-size: 1.5em;
 cursor: pointer;
 display: flex;
 justify-content: center;
 align-items: center;
}

.input-preencher3 {
 border: 1px solid #09A6A3;
 background-color: #fcfcdc;
 width: 25em;
 height: 30px;
 margin-top: 2px;
 padding: 10px;
 font-size: 1em;
}

.bola-button {
 margin-top: -65px; 
 margin-left: 90%;
 transform: translateX(-50%); 
}

.bola-button button {
 width: 90px;
 height: 90px;
 border-radius: 50%; 
 background-color: #fff; 
 border: 1px solid #09A6A3; 
 cursor: pointer; 
}

#bola-adicionar {
 font-size: 6em;
 justify-content: center;
 color: #09A6A3;
}

.titulo-container {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.resumo-container {
  margin-top: 40px;
  width: 25em; /* Same width as .input-preencher3 */
  margin-right: 1.3em; /* Adjust this value as needed */
}

.textarea-resumo {
  width: 100%;
  height: 150px;
  border: 1px solid #09A6A3;
  background-color: #fcfcdc;
  padding: 10px;
  font-size: 1em;
  resize: none; /* Prevents resizing */
}
</style>

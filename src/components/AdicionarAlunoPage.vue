<template>
 <div class="adicionarAluno-container">
   <div class="quadrado">
     <div id="retangulo">
       <span class="adicionarAluno-text">ADICIONAR ALUNO</span>
     </div>
     <div class="bola-button">
       <button>
         <span id="bola-adicionar">></span>
       </button>
     </div>
     <div class="input-container">
        <input type="text" class="input-preencher1">
        <input type="text" class="input-preencher2">
        <input type="text" class="input-preencher3">
        <button id="quadrado-adicionar" @click="adicionarAluno">+</button>
      </div>
      <div class="tabela-container">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Idade</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(aluno, index) in alunos" :key="index">
              <td>{{ aluno.nome }}</td>
              <td>{{ aluno.sobrenome }}</td>
              <td>{{ aluno.idade }}</td>
            </tr>
          </tbody>
        </table>
      </div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'AdicionarAlunoPage',
  data() {
    return {
      alunos: [] 
    };
  },
  methods: {
    adicionarAluno() {
      const nome = document.querySelector('.input-preencher1').value;
      const sobrenome = document.querySelector('.input-preencher2').value;
      const idade = document.querySelector('.input-preencher3').value;
      
      this.alunos.push({ nome, sobrenome, idade });

      document.querySelector('.input-preencher1').value = '';
      document.querySelector('.input-preencher2').value = '';
      document.querySelector('.input-preencher3').value = '';
    }
  }
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
  gap: 20px; 
}

.input-preencher1 {
 border: 1px solid #09A6A3;
 background-color: #fcfcdc;
 width: 15em;
 height: 30px;
 margin-top: 70px;
 padding: 10px;
 font-size: 1em;
}

.input-preencher2 {
 border: 1px solid #09A6A3;
 background-color: #fcfcdc;
 width: 10em;
 height: 30px;
 margin-top: 70px;
 padding: 10px;
 font-size: 1em;
}

.input-preencher3 {
 border: 1px solid #09A6A3;
 background-color: #fcfcdc;
 width: 7em;
 height: 30px;
 margin-top: 70px;
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

#quadrado-adicionar {
 border: 1px solid #09A6A3;
 margin-top: 68px;
  width: 50px;
  height: 50px;
  background-color: #fcfcdc;
  color: #09A6A3;
  font-size: 1.5em;
  cursor: pointer;
}

.tabela-container {
  margin-top: 20px;
}

.tabela-container table {
  width: 100%;
  border-collapse: collapse;
}

.tabela-container th, .tabela-container td {
  border: 1px solid #09A6A3;
  padding: 8px;
  text-align: left;
  width: 13.2em;
  height: 2em;
}
</style>

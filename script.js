class Aluno {

    id; 
    nome;
    matricula;
    n1;
    n2;
    n3;
  
     constructor(id,nome, matricula, n1, n2, n3) {
       this.id = id;
       this.nome = nome;
       this.matricula = matricula;
       this.n1 = n1;
       this.n2 = n2;
       this.n3 = n3;
  
    }
  
     exibeInfo() {
  
       return `ID: ${this.id} - Aluno: ${this.nome} - mat: ${this.matricula}
  
      Notas: N1: ${this.n1} - N2: ${this.n2} - N3: ${this.n3}
  
      Média:${this.calculaMedia()} 
  
      `;
  
    }
  
     calculaMedia() {
  
       return ((this.n1 + this.n2 + this.n3) / 3).toFixed(2);
  
    }
    


  }
  
//lfbg96
let arrayAlunos = [];
let id = 1;
function salvar() {
  
  let tbody = document.getElementById('tbody');
  tbody.innerText = ''; 
  
  let nome = document.getElementById('nome').value;
  let matricula = document.getElementById('matricula').value;
  let n1 = parseFloat(document.getElementById('nota1').value);
  let n2 = parseFloat(document.getElementById('nota2').value);
  let n3 = parseFloat(document.getElementById('nota3').value);
  let media = document.getElementById('media');
  
  
  
  arrayAlunos.push(new Aluno(id,nome,matricula,n1,n2,n3));
  console.log(arrayAlunos);
  id++;
  for(let i = 0; i <arrayAlunos.length;i++){
    
    arrayAlunos[i].id.innerText;
  }
  //lfbg96

  listaTabela();
  
  }

function cancelar(){
  document.getElementById('nome').value = '';
  let matricula = document.getElementById('matricula').value = '';
  let n1 = document.getElementById('nota1').value = '';
  let n2 = document.getElementById('nota2').value = '';
  let n3 = document.getElementById('nota3').value = '';
}

function listaTabela(){
  let tbody = document.getElementById('tbody');
  tbody.innerText = '';
  
  for(let i = 0; i< arrayAlunos.length; i++){
    let tr = tbody.insertRow(); 

    let td_id = tr.insertCell(); 
    let td_aluno = tr.insertCell();
    let td_matricula = tr.insertCell();
    let td_n1 = tr.insertCell();
    let td_n2 = tr.insertCell();
    let td_n3 = tr.insertCell();
    let td_acoes = tr.insertCell();
    let td_media = tr.insertCell();

    td_id.innerText = arrayAlunos[i].id;
    td_aluno.innerText = arrayAlunos[i].nome;
    td_matricula.innerText = arrayAlunos[i].matricula;
    td_n1.innerText = arrayAlunos[i].n1;
    td_n2.innerText = arrayAlunos[i].n2;
    td_n3.innerText = arrayAlunos[i].n3;
    td_media.innerText = arrayAlunos[i].calculaMedia();

    //lfbg96

    td_id.classList.add('center'); 
    
    let imgDelete = document.createElement('img');
   
     
    imgDelete.src= 'delete.png';
    
    
    
    imgDelete.setAttribute("onclick","deletar(" + arrayAlunos[i].id + ")");
    
    td_acoes.appendChild(imgDelete);
    


  }


}//lfbg96

function deletar(id){
  

  for(let i = 0;arrayAlunos.length; i++){
      if(arrayAlunos[i].id == id){
          arrayAlunos.splice(i,1);
          tbody.deleteRow(i);
          break;
      }
      
  }
  


}



    

    

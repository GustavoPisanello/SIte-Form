let $titulo = document.querySelector("#titulo");

$titulo.textContent = "ETEC Professor Basilides de Godoy";

let $tabela = document.querySelector("#tabela-aluno");

let $registroAlunos = document.querySelectorAll(".aluno");

console.log($registroAlunos);

for(let j = 0; j < $registroAlunos.length; j++) {
    let $contagem = $registroAlunos[j];
    let $nome = $contagem.querySelector(".td-nome").textContent;
    let $n1 = $contagem.querySelector(".td-n1").textContent;
    let $n2 = $contagem.querySelector(".td-n2").textContent;
    let $n3 = $contagem.querySelector(".td-n3").textContent;

    let $mediaAluno= calcularMedia($n1,$n2,$n3);

    let $mediaFinal = $contagem.querySelector(".td-media");
    $mediaFinal.textContent = $mediaAluno.toFixed(2);

    let $situacao = $contagem.querySelector(".td-situacao")
    $situacao.textContent = mostrarSituacao($mediaAluno)[0];
    $situacao.classList.add(mostrarSituacao($mediaAluno)[1])

    if($mediaFinal.textContent < 5){
        $mediaFinal.style.color = "red";
        $mediaFinal.style.fontweight = "bold";
    }
    else{
        $mediaFinal.style.color = "blue";
        $mediaFinal.style.fontweight = "bold";
    }
      
    function calcularMedia(x, y, z) {
       return(parseFloat(x) + parseFloat(y) + parseFloat(z)) / 3;         
    }    
};

function mostrarSituacao(x){
    let $resultado=[];

    if(x < 5){
        $resultado.push("Reprovado");
        $resultado.push("reprovado");
    }
    else{
        $resultado.push("Aprovado");
        $resultado.push("aprovado");
    }
    return $resultado;
}


var nomes = [];


function inserir(){
    var lista = document.getElementById("lista").innerHTML;
    var nome = document.getElementById("txt_name").value;
    var password = document.getElementById("txt_password").value;
    var palavras = " NOME: " + nome + " SENHA: "+ password;

    if(nome === '' || nome === ' '|| password === '' || password === ' '){
        alert("Preencha dos campos é obrigatório!");
    }else{
            if(nomes.length >= 7){
                alert("Lista Cheia!");
            }else{
                lista += "<li>" + "<button id='btt'>X</button> " + palavras + "</li>";
                document.getElementById("lista").innerHTML = lista;
                document.getElementById("txt_name").value = name
                document.getElementById("txt_password").value = name;
                nomes.push(nome);
            }
        
    }
    
} 
function calcularC(){
    var polegadas = document.getElementById("txt_polegadas").value;
    var p = polegadas;
    var cm = p/ 0.39370;

    var centimetros = document.getElementById("txt_centimetros");
    centimetros.value = cm.toFixed(2) ;


}
function calcularP(){

    var centimetros = document.getElementById("txt_centimetros").value;
    var cm = centimetros;
    var pol = document.getElementById("txt_polegadas");
    
    var p = centimetros* 0.39370;
    pol.value = p.toFixed(2);
    

}

var elem = document.getElementById("lista");
elem.addEventListener('click', function(e){
    if(e.target && e.target.nodeName == "BUTTON") {
        e.target.parentNode.remove();
        nomes.pop();
        
    }
});


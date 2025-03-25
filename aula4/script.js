function lerJSON(){
    var req = new XMLHttpRequest();

    req.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var objJSON = JSON.parse(this.responseText);
            txt = "modelo: "+ objJSON.modelo;
            txt += "<br>ano: "+ objJSON.ano;
            txt += "<br>Cambio Automatico: ";
            if(objJSON.cambioAutomatico){
                txt += "Sim";
            }
            else{
                txt += "Não";
            }
            txt += "<br>Combustiveis: ";
            objJSON.combustivel.forEach(comb => {
                txt += comb + " - ";
            });
            txt += "<br>Proprietario: "+objJSON.proprietario.nome
            txt += "<br>Opcionais: ";
            objJSON.opcionais.forEach( op => {
                txt+= "<br>" + op.nome+ " Marca: " + op.marca
            });
            document.getElementById("divJSON").innerHTML=txt;
        }
        else if(this.readyState == 4){
            alert(this.status+" - "+this.statusText)
        }
    };

    req.open("GET","dados.json", true);
    req.send();
}
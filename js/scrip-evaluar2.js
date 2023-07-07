document.getElementById("inputbus").addEventListener("input", onInputChange);

function onInputChange(){
    let inputText= document.getElementById("inputbus").value.toString().toLowerCase();
    //console.log(inputText);
    let tableBody = document.getElementById("datatable");
    let tableRows = tableBody.getElementsByTagName("tr");
    
    for(let i = 0; i< tableRows.length; i++){
        //console.log(tableRows[i].cells[3].textContent);
        let textoConsulta = tableRows[i].cells[0].textContent.toString().toLowerCase();

        if( textoConsulta.indexOf(inputText)=== -1){
            tableRows[i].style.visibility = "collapse";
        }else{
            tableRows[i].style.visibility = "";            
        }
    }
}


var ctx= document.getElementById("myChart").getContex("2d");
var mygrafico = new Chart(ctx,{
    type:Doughnut 
})
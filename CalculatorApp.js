// This function clear all the values
function clearAll() {
    document.getElementById("result").value = "";
   }

//This function clears a value at a time
function del() {
    let input = document.getElementById("result");
    input.value = input.value.substring  ( 0 , input.value.length - 1);
}   

//This function turns a negative value positive and vice versa
function opposite(){
    let b = document.getElementById("result");
    let n = b.value; 
    n = n * -1;
};
   
   // This function display values
   function display(value) {
    document.getElementById("result").value += value;
   }
   // This function evaluates the expression and return result
   function calculate() {
    let p = document.getElementById("result").value;
    let q = eval(p);
    if (isFinite(q)){
        document.getElementById("result").value = q
    }
    else {
        alert("CANNOT CALCULATE")
    }
}

   $("#opp").click(function(opposite){
    let b=document.getElementById("output");
    let n=b.value; 
    n = n * -1;
    b.value = n;
   });
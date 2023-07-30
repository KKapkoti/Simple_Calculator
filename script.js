function clearscreen(){
    document.getElementById("result").value = "";
}

function Back(){
  var v =  document.getElementById("result")
  v.value = v.value.slice(0, -1 )
}

function display(value){
   document.getElementById("result").value += value;
}

function calculate(){
   var num1 = document.getElementById("result").value;
   var num2 = eval(num1);
 document.getElementById("result").value = num2;
}
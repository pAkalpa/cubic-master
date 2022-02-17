// cubic master
document.addEventListener("keypress",function (e){
	if (e.key == "Enter"){
		const  btn = document.querySelector("#resultbtn")
		btn.click();
		const  btn2 = document.querySelector("#rest")
		btn2.click();
		const shift = document.querySelector("#num2")
		shift.focus()

	}
	if (e.key == "]"){
		const shift = document.querySelector("#num1")
		shift.focus()

		}
	if (e.key == "["){
		const shift = document.querySelector("#num2")
		shift.focus()

	}

});
function result_onClick() 
{
    var a = parseFloat(document.getElementById("num1").value); // length
    var b = parseFloat(document.getElementById("num2").value); //cir
  

    var result = document.getElementById("result"); //  result
	
	var qf = ((b*b*a)/2304)
	var qf2 =  qf % 1
	
	var qf3 =  (qf2*12)
	
	if(qf3>9){
		
		var qf6 = (qf3/100)
	}
	else{
		var qf6 = (qf3/10)
	}

	var qf4 = Math.trunc(qf)
	var qf5 = qf4 + qf6
   result.innerHTML = qf5
}
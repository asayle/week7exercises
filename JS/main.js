// // console.log("connected");

document.getElementById("hello")
hello.innerHTML = "Want to learn Javascript? It's NOT fun!"

 function myFunction() {
 	var input = document.getElementById("firstname").value;
 	var input2 = document.getElementById("lastname").value;
 	console.log(input, input2)
 	var myH1 = document.getElementById("name"); 
 	myH1.innerHTML = input + ' ' + input2;
 	
 }

 var fivestring = [ "a", "b", "c", "d", "e"];
 		for(var i = 0; i < fivestring.length; i++) {          
			console.log(fivestring[i]);}

var amelia = 
	{
		age: 30,
		sex: "female",
		sign: "libra"
	};

console.log(amelia.age);
console.log(amelia.sex);
console.log(amelia.sign);

var ugh = document.getElementById("ugh");
var gross = document.getElementById("gross");
var yuck = document.getElementById("yuck");

ugh.innerHTML = amelia.age;
gross.innerHTML = amelia.sex;
yuck.innerHTML = amelia.sign;

var friends = [ 

{

	name: "ben",
	age: 28,
	superpower: "heart"
},

{

	name: "tho",
	age: 34,
	superpower: "spicy consumption"
},

{
	name: "tess",
	age: 29,
	superpower: "joy"

}

]

document.body.style.color = "red";




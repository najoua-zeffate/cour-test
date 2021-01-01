// function multiplication(x,y) {
// 	return x*y;
// }
//console.log(multiplication(,));
// function give_your_name(name) {
// 	if (name == "J"){
// 		return "Goodbye";
// 	}
// 	else {
// 		return "Hello";
// 	}
	
// }
// console.log(give_your_name("Jack"));

 //console.log(names);
 // for (var i=0; i<names.length; i++) {
 // 	console.log("Hello"+"  "+ names[i]);
 // }
 // var myobj={
 // 	names:"Najoua",
 // 	Age:"20 ans",
 // 	formation:"SMI"
 // }
 // for(prop in myobj){
 // 	console.log(prop+": "+myobj[prop]);

 // }
 
 
 // names1.greeting="Najoua";
 // for(var name in names1){
 // 	console.log("Hello "+names1[name]);}
 var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i=0; i<names.length; i++) {
	  var firstLetter = names[i].charAt(0).toLowerCase();
  if (firstLetter === 'j') {
    console.log("Goodbye "+names[i]);
  }
  else {
    console.log("Hello "+names[i]);
  }
}
 	
 
 
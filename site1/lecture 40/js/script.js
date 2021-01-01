var message="in global";
console.log("hhhhhhhhh"+ "   "+message);
var a=function(){
	var message="inside a";
	console.log("a:message "+ message);
    function b () {
	console.log("b:message "+message);
}
	b();
}

a();
define(function(require,exports,module){
	var x=10;
	function A(con){
		alert(con+x)
	}
	function c(con){
		console.log(con+x)
	}
	module.exports={
		A:A,
		C:c
	}
})
function validEmail(str) {
  //your JS code here.
	if(str.length==0) return false
	else if(!str.includes("@")) return false
	else{
		let arr = str.split("@")
		if(arr.length>2) return false
		else if(arr[0].includes(".")) return false
	}
	return true
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));

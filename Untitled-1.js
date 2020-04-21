const countSheep = function (num){
	//your code here
	let count='';
	for (let i=1; i<=num; i++){
	 count= count.concat(i + "sheep...");
  }
  return count
}

  console.log(countSheep(7));
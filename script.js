const arr = [1, 2, 3, 4, 1, 0, 2, 2];


const divide = (arr, n) => {
  // Write your code her
	let subArrs = [];
	let sum = 0;
	let subArr = [];
	for(let i = 0 ; i < arr.length: i++ ){
		let ele = arr[i];
	sum += ele;
		if(sum <= n){
			subArr.push(ele);
		}
		else{
			subArrs.push(subArr);
			subArr=[ele];
			sum = ele;
		}
		if(i === arr.length-1) subArrs.push(subArr);
	}
	return subArrs;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));



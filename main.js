// get total
function getTotal(){
	if (price.value != '') {

		let result = (+price.value + +taxes.value + +ads.value)
		- +discount.value;
		total.innerHTML = result;
	    total.style.background = '#040';
	}else{
		total.innerHTML = '';
		total.style.background = '#da1e28';
	}
}
}
// Create product
let dataPro;
if(localstorage.product !=null){
	dataPro = JSON.parse(localstorage.product)

}else{
	let dataPro = [];
}



submit.onclick = function(){
	let newPro = {
		title:title.value,
		price: price.value,
		taxes:taxes.value,
		ads:ads.value,
		discount:discount.value,
		total:total.innerHTML,
		count:count.value,
		category:category.value,

	}
	dataPro.push(newPro)
	console.log(dataPro);
}
// save localstorage
// Clear inputs
function clearData(){
	title.value = '';
	price.value = '';
	taxes.value = '';
	ads.value = '';
	discount.value = '';
	total.innerHTML = '';
	count.value = '';
	category.value = '';
}
// read
function showData{
	let table = document.getElementById('table');
	for(let i = 0; i < dataPro.length; i++){
		tabel = dataPro[i].title;
	document.getElementById('table').innerHTML = '';
}
// count
// delete
function deleteData(i){
	dataPro.splice(i,1);
	localstorage.product = JSON.stringify(dataPro);
	showData();
}
}
// update
// search
// clean data
let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');

console.log(title, price,taxes,ads,discount,total,count,category,submit)
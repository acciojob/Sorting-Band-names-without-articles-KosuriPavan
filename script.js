let bandNames=['The Rolling Stones','Aerosmith','Led Zeppelin', 'Pink Floyd','The Who'];

//funtion to remove articles from bandNames
function removeArticlaes(name){
	return name.replace(/^(a |an | the)/i,'').trim();
}
//sort the array of bandNames excluding articles
bandNames.sort((a,b)=>removeArticlaes(a).localeCompare(removeArticlaes(b)));

//get the ul element by id
let ul = document.getElementById('band');

//create li elements and add band names to the list
bandNames.forEach((name)=>{
	let li = document.createElement('li');
	li.textContent = name;
	ul.appendChild(li);
});
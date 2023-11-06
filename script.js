let bandNames=['The Rolling Stones','Aerosmith','Led Zeppelin', 'Pink Floyd','The Who'];

let wihtoutArticles = [];
let map = {};
for (let i = 0; i < bandNames.length; i++) {
    let str = bandNames[i];
    str = str.replace(/\ban\b|\ba\b|\bthe\b/gi, '');
    str = str.replace(/ +/gi, ' ').trim();
    map[str] = bandNames[i];
    wihtoutArticles.push(str);
}
// console.log(map);
// console.log(bandNames);
wihtoutArticles.sort()
// console.log(wihtoutArticles);
let finalResult = [];
for (let i = 0; i < wihtoutArticles.length; i++) {

    finalResult.push(map[wihtoutArticles[i]]);
}    
console.log(finalResult);
//get the ul element by id
let ul = document.getElementById('band');

//create li elements and add band names to the list
finalResult.forEach((name)=>{
	let li = document.createElement('li');
	li.textContent = name;
	ul.appendChild(li);
});
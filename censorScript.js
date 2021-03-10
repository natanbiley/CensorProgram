const str = 'pizza hello world "Down the Road",\'Hamburger\'';
const fs = require('fs');
var fileToCensor = "";

const regexp = /'([^']*)'|"([^"]*)"|([^\s,]+)/gmi;
const array = Array.from(str.matchAll(regexp), m => m[0]);
const censorList = [];

for (index in array)
{
    if(array[index][0]== '"' || array[index][0]=="'")
    {
        censorList.push(array[index].substring(1, array[index].length - 1));
    }
    else
    {
        censorList.push(array[index]);
    }
}
console.log(censorList);


fs.readFile('censorDoc.txt', (err, data) => { 
    if (err) throw err; 
  
    fileToCensor = data.toString();
    
    for(index in censorList)
    {
        var word = censorList[index]
        var re = new RegExp(word,"gmi");
        fileToCensor = fileToCensor.replace(re, "XXXX");
    }
    console.log(fileToCensor);
    
}) 






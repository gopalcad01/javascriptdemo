function getvalue(){
    var otvalue=document.getElementById("inputvalue").value;
   
    otvalue=Number(otvalue);

    while(otvalue<20){
        console.log("input value "+ otvalue +  " is smaller than 20")
        otvalue++;
        
    }
    do{
        console.log("input value in do while for  "+ otvalue +" is smaller than 20");
        otvalue++;
    }
 while(otvalue<25)
    
    //for loop
    for(otvalue;otvalue<25;otvalue++){
        console.log("input vaue in for loop  "+otvalue + "is smaller than 20");
    }

    var listofnames=["suthakar","chandran","arunkumar","saravanan"];
    console.log("list of array listofnames...",  listofnames.length);
    console.log(listofnames[1]);
     console.log(listofnames[2]);
     console.table(listofnames);
    
    for(let a=0;a<listofnames.length;a++)
    {
        console.log(listofnames[a]);
    }
    
    console.log("output from for OF " 
    + listofnames);
    for (let name of listofnames)
    {
        console.log(name);
    }

    for(let a=0;a<listofnames.length;a++)
    {
        console.log(listofnames[a]);
        if(a==2){
            break;
        }
    }

    // for in loop with object

    var listofcars={mname:"tesla", price:"75L", mdate:"2023"};
    console.log(listofcars);
    console.table(listofcars);

    for(property in listofcars);
    console.log(property + " : "+ listofcars[property]);


var text= " welcome to javascript program the program was created by chandran in 1975  ";
console.log(text.length);
console.log(text.indexOf("welcome"));
console.log(text.indexOf("welcome",2));
console.log(text.indexOf("chandran"));
console.log(text.search("1975"));
let array=text.search(/chandran/);
console.log(array);
let array2=text.match(/chandran/gi);
console.log(array2);

console.log(text.slice(15,59));
console.log(text.charCodeAt(1));
console.log(text.charAt(23));
console.log(text.concat("welcome"));
console.log(text.endsWith(1975));


var output=text.charAt(7);
console.log(output);

var output=text.concat(" cancat value");
console.log(output);

var output=text.endsWith("1975");
console.log(output);

var output=text.startsWith(" ");
console.log(output);

var output=text.replace("w");
console.log(output);

var output=text.includes("chandran");
console.log(output);

var output=text.lastIndexOf("created");
console.log(output);

var output=text.toUpperCase();
console.log(output);
var output=text.toLowerCase();
console.log(output);
var output=text.slice(2,8);
console.log(output);
var output=text.slice(16);
console.log(output);
var output=text.substring(1,8);
console.log(output);
var output=text.substring(-37);
console.log(output);
var output=text.replace("welcome","chandran");
console.log(output);
var output=text.replaceAll("welcome","hi");
console.log(output);
var output=text.endsWith("e");
console.log(output);

console.table(text.split(" "));

console.log(text.length);
var text1=text,trim ;
console.log(text1.length);



//date usage

let today= new Date();

console.log(today);

console.log(today.toLocaleDateString());
console.log(today.toDateString());
console.log(today.toISOString());
console.log(today.toLocaleString());
console.log(today.toString());
console.log(today.toTimeString());
console.log(today.toUTCString());
console.log(today.getFullYear());
console.log(today.getDate());
console.log(today.getHours());
console.log(today.getMilliseconds());
console.log(today.getSeconds());

console.log(today.getMonth());

var Month=["jan", "feb","march","april","may","june","jully","august","sep","octomber","nov","december"];
console.log(Month[today.getMonth()]);

let dod=new Date("2001-11-23");
console.log(dod);

let age=today.getFullYear()-dod.getFullYear();
console.log(age);



var Namelists=["varun","arun","chandru","dinesh","karthick","suthakar"];

console.log(Namelists);

console.table(Namelists);
console.table(Namelists[1]);
console.table(Namelists[0]);
console.table(Namelists[2]);
console.table(Namelists[3]);
console.table(Namelists[4]);
console.table(Namelists[5]);

for (var a=0; a<Namelists.length;a++)
{
    console.log(Namelists[a]);
}
 var result=Namelists.forEach(function(name1){
    console.log(name1)
 })
 console.log("arrow ouirtput");

 var result=Namelists.forEach(name1=>console.log(name1));
 var Namelists=["varun","arun","chandru","dinesh","karthick","suthakar"];
 var define1="s";

var listofnumbers=[1,2,3,4,5];
var result=listofnumbers.map(number=>number*3);
console.log(result);
var result=listofnumbers.reduce((sum,number)=>sum+=1);
console.log(result);

console.log(Math.PI);
console.log(Math.E);
console.log(2*Math.PI*2);
var a=4.4;
console.log(Math.round(4.4));
console.log(Math.floor(4.5));
console.log(Math.ceil(4.4));
console.log(Math.sqrt(4));
console.log(Math.pow(4,2));
console.log(Math.floor(Math.random()*10+1000));
console.log(Math.abs(-10.75));
console.log(Math.floor(-4.70));
console.log(Math.min(10,25,35,25));
console.log(Math.max(20,25,35,25));

}



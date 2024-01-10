alert("welcome to javascript");
console.log("welcome to javascript");
console.log(10);
console.log(20.5);
console.log({fname:"chandran",gender:"male"});
console.table({fname:"chandran",gender:"male"});
console.log([15,20,25,30,]);
console.table([15,20,25,30,]);
console.log(true);
var a=15;
let b=20;
const c=25;
console.log(a);
console.log(b);
console.log(c);

a=30;
b=40;
console.log(a+   typeof a);
console.log(b+   typeof b);
a=([100,110,130,140]);
console.log(a);
console.table(a);

b=15;
console.log(b+ typeof b);



//operators

// arithmatic operators

var a=10;
console.log(a+b); 
console.log(a-b);
console.log(a*b);
console.log(a**b); 
console.log(a/b);
console.log(a%b);
console.log(++a);
console.log(--a); 

// assign operators
v1=20;
console.log(v1);
v1+=25;
console.log(v1);
v1-=25;
console.log(v1);
v1*=25;
console.log(v1);
v1/=25;
console.log(v1);
v1%=25;
console.log(v1);

//cmparision operator
 v1=10;
 console.log(v1==10);
 console.log(v1==="10", typeof v1);

console.log(v1!=10);
 console.log(v1!=="10", typeof v1);

 // relational operator
 console.log(v1>12);
 console.log(v1<12);
 console.log(v1>=10);
 console.log(v1<=12);
 console.log(v1<=2);

 //logical operator

console.log(v1==10 || 10>4 || 10<17);
console.log (v1!==10, typeof v1);

// ternary operator
 v1="s";
 console.log(v1);
 var output =v1=="s"? "v1 has value" : "v1 has doesnot have value";
 console.log(output);
 //conditional chains with ternary
 m=35;
//35  32grade c 60grade b 80 grade a 90 grade destinction
var mark= (35<=m && m<60) ? "grade c" : (60<=m && m<80) ? "Grade B" : (80<=m && m<90) ? "Grade A" : (90<=m && m<=100) ? "Grade Distinction" : "Fail";
console.log(mark);


// function declaration
function findgrade(){
    m=30;
  //35 32grade c 60 grade b 80 grade a 90 grade Distintion
  var  mark= (35<=m && m<60) ? "grade c" : (60<=m && m<80) ? "Grade B" : (80<=m && m<90) ? "Grade A" : (90<=m && m<=100) ? "Grade Distinction" : "Fail";
  console.log(mark); 
}

findgrade();


function findgrade1(m,k){
    //35 32grade c 60 grade b 80 grade a 90 grade destinction
    var mark= (35<=m && m<60) ?"grade c"
: (60<=m && m<80) ? "grade b" : (80<=m && m<=90) ? "grade a" :(90<=m && m<=100) ? "grade destinction" : "fail";
console.log(k,mark);


}
findgrade1(90,"suthakar");

// using functiom
function checkgrade(){
    console.log("welcome");
    console.log("home");
    
};
checkgrade();


var checkgrade1=(a,b)=>{
    console.log(a+b);
    return a+b;
};

console.log ("added values",checkgrade1(2,5))

// print messsege in variable
a=2;
b=5;
var printmeg =checkgrade1(2,5);
console.log(printmeg);

// short the code
var checkgrade2=(a,b)=> a+b;
console.log(checkgrade2(5,"suthakar"));

// conditional statement
// if condition
 function gradechecking(m){
    if (35>m && m!=null)
    {
        console.log("no grade");
        console.log("fail");
    }
 }
  gradechecking(30);

 // if else condition
 function gradechecking(m){
    if(30>m && m!=null){
        console.log("no grade");
        console.log("fail");

    }
    else{
        console.log("pass");
        console.log("other grade");

    }
 } 
  gradechecking(79)

// nested if else condition
function gradechecking(m){
    if (35>m && m!=null)
    {
        console.log("no grade");
        console.log("fail");
    }
else{
    if (35<m && m!=null && m<=60){
        console.log("pass");
        console.log("grade c");
    }       
     else if(60<m && m!=null && m<=80){

        console.log("Pass");
        console.log("Grade b");
            }
            else if(80<m && m!=null && m<=90){

                console.log("Pass");
                console.log("Grade a");
                    }
            else{
        gradechecking(prompt("enter the mark"));
            }
}
}
gradechecking(37);

//day 4
// switch condition statement

function checkingwithswitch(a)
{
    //console.log(a);
switch(a){
    case 's':
        //statement
        console.log('executed case s',typeof a);
        break;
        case 'h':
            // statement
            console.log('case 2 executed',typeof a);
            break;
            case 'k':
                // ststement
                console.log("executed case k", typeof a);
                break;

                default:
                    // statement
                    alert("case not in list");



}
}

checkingwithswitch(prompt("enter the condition value"));


//VARIABLES
// keywords: let, var, and const

//1.const keyword with scope(local and global variable)
//const can be defined only once......it cannot be changed


const pi= 3.14;
console.log(pi);
//pi=4.23;
//console.log(pi); //TypeError: Assignment to constant variable.


//////////////////////////////////////////////////////////////////////////////////////////////////////

//case 1
const intValue0 = 0; //global variable
console.log(intValue0); //0

//since their is only one scope here that is global therefore it is global variable.

////////////////////////////////////////////////////////////////////////////////////////////////


//case 2
const intValue1 = 1;    //global variable(since variable is defined out of the scope)
{
  console.log(intValue1); //1
}
//scope: the functional(curly) bracket(i.e;{}) is scope
//global variable can be access outside as well as inside the scope.

///////////////////////////////////////////////////////////////////////////////////////////////////


{
  //console.log(intValue2); //case 3: error- cannot access 'intValue2' before initialization
  const intValue2= 2;      //local variable
  console.log(intValue2);//2
  }


  /*LET and CONST is introduced in ES6 and ES6 interpreter can read lines of code ahead of current line.
  so it can tell 'intValue2' is initialized afterwards so it gives error cannot access before initialization instead of undefined.*/

//////////////////////////////////////////////////////////////////////////////////////////////////////

//console.log(intValue3); //case 4 :error- undefined
{
//console.log(intValue3); // error: cannot access 'intValue3' before initialization
const intValue3= 3;      //local variable
console.log(intValue3);//3   (within the scope u can access the data after defining it)
}


/*note: within the scope we get error "cannot access before initialization"
   but in case 4 'intValue3' is defined in a scope and we want to access it before 
   the scope has even started. So interpreter cannot find 'intValue3' which is a local variable.
 */ 

////////////////////////////////////////////////////////////////////////////////////////////////////

{
    //console.log(intValue4);     //error: cannot access 'intValue' before initialization
    const intValue4= 4;            // local variable(since defined within the scope)
    console.log(intValue4);      //4
}
//console.log(intValue4);         //case 5: error- not defined



/* here 'intValue4' is defined within the scope and we want to access it outside scope but after initialization. 
Since const keyword works only within the scope we get 'undefined' error.
*/


/*Note: case-4 and case-5 are completely different as in case 4 we want to access the value 
before defining it and in case-5 we want to access the value after defining it. */



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*IMPORTANT*/
//case 6: cannot declare const variable ie; Can only define const variable.

//const intValue5;   //(declared) ERROR: SyntaxError: Missing initializer in const declaration
{  
 
 const intValue5=5; //defined
  console.log(intValue5); //5
}
//console.log(intValue5); //ERROR: not defined



/////////////////////////////////////////////////////////////////////////////////////////////////////

//case 7:

//const intValue6;   //ERROR: SyntaxError: Missing initializer in const declaration
{
  const intValue6=6.1; //defined
  console.log(intValue6); //6.1
}
//console.log(intValue6); // error: not defined
intValue6=6.2;  //const cannot be reused so here interpreter by-default consider it as var variable.
console.log(intValue6);


/*In line 96 their is syntax error as no keyword is written.but as JS is volatile lang, it will 
accept it.*/

/////////////////////////////////////////////////////////////////////////////////////

 const intValue8= 8;  //global variable(since defined outside scope)
 {
   //console.log(intValue8);  //cannot access before initialization
   const intValue8 = 8.3;         //local variable(defined within scope)
   console.log(intValue8); //8.3
 }
 console.log(intValue8); //8


 //(bad practice) here both the variable are having same name.
// just because there is local and global concept it is working.
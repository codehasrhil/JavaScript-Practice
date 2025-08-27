

// 1.  undefined: its like that varible or object either do not exist or habe not assigned a value

// example

 var a;            // declear the variable but did not assign value so it get undefined  // we get typeof undefined
 console.log(a);


 // 2.  null: it indicates an empty value like defined as an empty object

 var a = null;  // so when we get typeof null we get object
 console.log(a);



 // 3. var: var is a global scop varible we can use the varible name again to redecler or upadte the value of varible

 var name = "hasrhil";
 var name = "arbna"
 console.log(name);


 // 3. let: let is a block scop varible we are not able to re-decler the varible like var 

 let l = 10;
 l=30; // it's like update the varible  we can update but not able to re-declear
 {
    let l = 20;
    console.log(l);
 }
 console.log(l);


 // 4. const: const cannot be update or re-declear


 const num = 0;
 num=40; // we et error becaues we canno update const or  re-declear
 console.log(num)
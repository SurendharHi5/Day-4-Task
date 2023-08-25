 // 1 . Do the below programs in anonymous function & IIFE
//___________________________________________________________

// a.Print odd numbers in an array
// ____________________________________

// using anonymous function
// -----------------------------

let a=[1,2,5,3,8,6];

let odd=function(a){
    let ans = [];
    for(let value of a){
        if(value%2 == 1){
            ans.push(value);
        }
    }
   console.log(ans);

}

odd(a);

// output :
// [ 1, 5, 3 ]


// using IIFE function
// ----------------------------

let a=[1,2,5,3,8,6,7];
(function odd(a){
    let ans = [];
    for(let value of a){
        if(value%2 == 1){
            ans.push(value);
        }
    }
   console.log(ans);

})(a);


//output :
// [ 1, 5, 3, 7 ]


//b.Convert all the strings to title caps in a string array
//----------------------------------------------------------
// using anonymous function
// -----------------------------

let a = ['apple','orange','banana'];

let fru = function(a){
    for(let i = 0; i < a.length; i++){
        a[i]=a[i].charAt(0).toUpperCase(0) + a[i].slice(1);
    }
    console.log(a.join(' '));
}
fru(a);

// output :
// Apple Orange Banana

 
// using IIFE function
// ----------------------------

let a = ['apple','orange','banana'];

 (function (a){
    for(let i = 0; i < a.length; i++){
        a[i]=a[i].charAt(0).toUpperCase(0) + a[i].slice(1);
    }
    console.log(a.join(' '));
})
(a);

// output :
// Apple Orange Banana


//c.Sum of all numbers in an array

//----------------------------------------------------------
// using anonymous function
// -----------------------------

let n = [1,2,3,4,5,6];
let a = function(n){
    let ans =0;
    for(i=0;i<n.length;i++){
    ans=ans + n[i];
    }
    console.log(ans);

};
a(n);

// output :
// 21


// using IIFE function
// ----------------------------

let n = [1,2,3,4,6];
(function(n){
    let ans =0;
    for(i=0;i<n.length;i++){
    ans=ans + n[i];
    }
    console.log(ans);

})
(n);

// output :
// 16


// d.Return all the prime numbers in an array
//______________________________________________
// using in anonymous function 
---------------------------------

let n = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let primeNumber = function(n){
let prime =[];
for(i=0;i<n.length;i++){
    let count=0;
    for(j=0;j<=n[i];j++){
        if(n[i]%j==0){
            count++;

        }

    }
    if(count==2){
        prime.push(n[i]);

    }

}
console.log(prime);
}
 primeNumber(n);

 // output:
 // [ 2, 3, 5, 7, 11, 13 ]


 // using IIFE function
// ----------------------------

let n = [1,2,3,4,5,6,9,7];
(function(n){
let prime=[];
for(i=0;i<n.length;i++){
    let count = 0;
    for(j=0;j<=n[i];j++){
        if(n[i]%j==0){
            count++;

        }
    }
    if(count==2){
        prime.push(n[i]);

    }
    
}
console.log(prime)
})
(n)

// output:
// [ 2, 3, 5, 7 


// e. Return all the palindromes in an array
//______________________________________________
// using in anonymous function 
//---------------------------------
let p = ["amma","appa","ram","kumar","madam"];
let palindrome =function(p){
let pali =[];
for(i=0;i<p.length;i++){
    
    let val= p[i].split("").reverse().join("");
    if(val==p[i]){
        pali.push(p[i])

    }

}

console.log(pali);
}
palindrome(p);

// output :
// [ 'amma', 'appa', 'madam' ]


 // using IIFE function
// ----------------------------
let p = ["amma","appa","ram","radar","madam","abcd"];
 (function(p){
let pali = [];
for(i=0;i<p.length;i++){
    let r = p[i].split("").reverse().join("");
    if(p[i]==r){
        pali.push(r)

    }

}
console.log(pali)

})
(p)

// output :
// [ 'amma', 'appa', 'radar', 'madam' ]



// f.Return median of two sorted arrays of the same size.
//______________________________________________
// using in anonymous function 
//---------------------------------

let a = [4,9,3,2];
let b = [1,8,6,7];
let x = function(a,b){
let arr =[...a,...b];
arr.sort((a,b) => a-b);
let n =  arr.length;
if(n%2!==0){
    let ans = arr[Math.round(n/2)-1];
    let median = ans;
}
else{
     ans = arr[Math.round(n/2)-1]+ arr[Math.round(n/2)];
     median = ans;
}

console.log(median);
}
x(a,b)

//output :
// 10


// using IIFE function
// ----------------------------
let a = [4,9,3,2,6];
let b = [1,8,6,7,5];
(function(a,b){
let arr =[...a,...b];
arr.sort((a,b) => a-b);
let n =  arr.length;
if(n%2!==0){
    let ans = arr[Math.round(n/2)-1];
    let median = ans;
}
else{
     ans = arr[Math.round(n/2)-1]+ arr[Math.round(n/2)];
     median = ans;
}

console.log(median);
})
(a,b)

//output :
// 11


// g.Remove duplicates from an array
//______________________________________________
// using in anonymous function 
//---------------------------------
let a = [1,2,3,3,4,5,1,5,5];
let duplicates = function(a){

let dup = [];
for(i=0;i<a.length;i++){
        if(dup.indexOf(a[i])==-1){
            dup.push(a[i]);
        }
    }
    console.log(dup)
}
duplicates(a)

output :
[ 1, 2, 3, 4, 5 ]


 // using IIFE function
// ----------------------------

let a = [1,2,4,5,1,5,5,9,9];
(function(a){

let dup = [];
for(i=0;i<a.length;i++){
        if(dup.indexOf(a[i])==-1){
            dup.push(a[i]);
        }
    }
    console.log(dup)
})
(a)
// output :
// [ 1, 2, 4, 5, 9 ]


//h.Rotate an array by k times
//______________________________________________
// using in anonymous function 
//---------------------------------

let arr = [ 1,2,3,4,5,6];
let k =3;
let rotate = function(arr,k){
for ( i=0;i<k;i++){
   a = arr.pop(k);
   arr.unshift(a);
}
console.log(arr)
}
rotate(arr,k)

// output :
// [ 4, 5, 6, 1, 2, 3 ]


 // using IIFE function
// ----------------------------

let arr = [ 1,2,3,4,5,6];
let k =4;
(function(arr,k){
   for(i=0;i<k;i++){
   a = arr.pop(k);
   arr.unshift(a)
   }
   console.log(arr)

})
(arr,k)

// output :
// [ 3, 4, 5, 6, 1, 2 ]

  
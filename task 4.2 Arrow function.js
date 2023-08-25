//2.Do the below programs in arrow functions.
//______________________________________________
//a.Print odd numbers in an array
//-----------------------------

let a=[1,2,5,9,3,8,6];
let odd=(a)=>{
    let ans = [];
    for(let value of a){
        if(value%2 == 1){
            ans.push(value);
        }
    }
   console.log(ans);

}

odd(a);

// //output :
// // [ 1, 5, 9, 3 ]


//b.Convert all the strings to title caps in a string array
//----------------------------------------------------------
 let a = ['apple','orange','banana'];
 let fruit= (a)=>{
    for(let i = 0; i < a.length; i++){
        a[i]=a[i].charAt(0).toUpperCase(0) + a[i].slice(1);
    }
    console.log(a.join(' '));
}
fruit(a);

// output :
// Apple Orange Banana


//c.Sum of all numbers in an array
//----------------------------------------------

let n = [1,2,3,4,5,6,7];
let a = (n)=>{
    let ans =0;
    for(i=0;i<n.length;i++){
    ans=ans + n[i];
    }
    console.log(ans);

}
a(n);

// output :
// 28

//d.Return all the prime numbers in an array
//-----------------------------------------------

let n = [1,2,3,4,5,6,9,7,10,13];
let primeNumber=(n)=>{
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
}
primeNumber(n)

// output:
// [ 2, 3, 5, 7, 13 ] 


// e. Return all the palindromes in an array
//______________________________________________

let p = ["amma","appa","ram","kumar","madam"];
let palindrome =(p)=>{
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


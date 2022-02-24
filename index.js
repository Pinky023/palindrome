var test = "madam";
let str= test;
function checkPalindrome(str){
  let j = str.length - 1;
  console.log(str.length)
  for( let i=0; i < j/2 ; i++){
    let a= str[i]
    let b= str[j-i]
    if(a!=b){
      return false
    }
  }
  return true
}
let res= checkPalindrome(str)
console.log("res =" , res)

function reversString(str){ 
 let revers =''
 for(let i=0; i < str.length;i++){
    revers +=str[(str.length-1)-i]
 }
 return revers
}
const result = reversString('i am saimun islam')
console.log(result);
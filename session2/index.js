// for(let i =100; i>0; i--){
//    console.log(i)
// }
a=  prompt('điền giá trị a ')
b=  prompt('điền giá trị b')
c=  prompt('điền giá trị c')
Q= b*b- 4*a*c
console.log(" giá trị Q ", Q)
if(Q > 0){
    x1 = ((-b + Math.sqrt(Q)) / (2*a))
    x2 = ((-b - Math.sqrt(Q)) / (2*a))
    console.log('giá trị của x1 là', x1 , "x2",x2);
    
}
else if(Q==0){
    x= -(b/(2*a))
console.log("giá trị của x là", x)}

else{
console.log("phương trình vô nghiệm")
}

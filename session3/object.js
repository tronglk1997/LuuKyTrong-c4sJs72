let person = { 
    name:'Trọng',
    yob: 97,
    home: 'Hà Nội',
    job: 'dev',
}//init
// let key = prompt()
// console.log(person.yob)//read
// console.log(person['key'])// kiểu 2
person['height']=170 //create
person.height=170
person.home = 'BN'//update
delete person.job// delete
for(let k in person){
    console.log(k,person[k])
}   
// let monAn = ['pho', 'com', 'mi','bun','chao']//init
// console.log(monAn)
// //update
// // let a = prompt()
// // let b = prompt()
// //delete
// monAn.splice(0,2)
// monAn[1] = 'b'
// //create
// monAn.push('thit')
// //read
// for(let i=0 ; i<monAn.length ; i++){
//     console.log(i,monAn[i])
// }
// let stuff = ['vay lien','chan vay','vay ngan','tat']
// let option = prompt('bạn muốn làm gì c ,r , u ,d').toUpperCase()
// //if else
// //khi init == 'c'=> domoi = prompt (them do j)
// if( option == 'C'){
//     let newIteam = prompt('thêm đồ gì ')
//     stuff.push(newIteam)
// }
// else if( option == 'R'){
//     console.log("")
//     }
// else if( option == 'U'){
//     let index = prompt('stt can update')
//     let newValue = prompt('nhập tên mới')
//     stuff[index] = newValue
// }
// else if( option == 'D'){
//     let index = prompt('muốn xóa')
//     stuff.splice(index,1)
// }
// for(let i=0 ; i<stuff.length;i++){
//     console.log(i,stuff[i])
// }
const clothes = ["ao coc", "quan dui", "quan lot", "vay", "quan bo"];
let choice = prompt("What do you wan to do???(C,R,U,D)").toLowerCase();
const command = ["c", "r", "u", "d"];
if (!command.includes(choice)) {
alert("command is not supported!!!");
}
if (choice === "c") {
let addCloth = prompt("them do gi");
clothes.push(addCloth);
alert("Done");
console.log(clothes);
} else if (choice === "r") {
clothes.forEach((element) => {
    console.log(element);
});
} else if (choice === "u") {
let index = Number(prompt("vi tri sua"));
if (!index) {
    console.log("please enter a number");
}
if (index > clothes.length) {
    alert(`please enter a number < ${clothes.length}`);
    index = Number(prompt("vi tri sua"));
}
let fix = prompt("thay bang gi");
clothes[index] = fix;
} else if (choice === "d") {
let indexDelete = Number(prompt("xoa cho nao???"));
clothes.splice(indexDelete, 1);
}
const arr =[{name:'aa'},{name:'aaddd'},{name:'aabb'},{name:'ba'}]
// undefined
for(let i=0,len=arr.length;i<len;i++){console.log(arr[i].name)}
//aa aaddd aabb ba
for(let key in arr){
    console.log(arr[key].name)
}
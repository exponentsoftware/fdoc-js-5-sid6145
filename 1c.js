fetch('https://restcountries.com/v3/all')
.then((res) => res.json())
.then((jsonData) => {

    console.log(jsonData)
let top10 = []
for(let i = 0; i < jsonData.lengtj; i++){
    for(let j = i + 1; j < jsonData.length; j++){
        if(jsonData[i].area < jsonData[j].area ){
           top10.push(jsonData[i].area)
        }
    }
   
}

})
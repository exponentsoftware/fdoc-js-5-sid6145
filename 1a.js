fetch('https://restcountries.com/v3/all')
.then((res) => res.json())
.then((jsonData) => {
    let totalLanguages = 0
    jsonData.map((item) => {
        let lang = item.languages
        totalLanguages += Object.keys(lang).length
        console.log(totalLanguages)
    })

})




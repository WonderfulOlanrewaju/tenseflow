const dictionary = [
    {root: "come", past: "came"},
    {root: "see", past: "saw"},
    {root: "leave", past: "left"},
    {root: "wake", past: "woke"},
    {root: "shower", past: "showered"}
]


const tenseFlow = (word)=> dictionary.find(({root})=>{    
            return  root === word;
})


console.log(tenseFlow("wake").past, tenseFlow("shower").root)


module.exports = {
    tenseFlow
}
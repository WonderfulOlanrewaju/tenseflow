const dictionary = [
    {root: "come", past: "came"},
    {root: "see", past: "saw"},
    {root: "leave", past: "left"},
    {root: "wake", past: "woke"},
    {root: "shower", past: "showered"},
    {root: "go", past: "gone"},
    {root: "drive", past: "drove"},
    {root: "eat	", past: "ate"},
    {root: "fall", past: "fell"},
    {root: "draw", past: "drew"},
    {root: "drink", past: "drank"},
    {root: "take", past: "took"},
    {root: "sleep", past: "slept"},
    {root: "sing", past: "sang"},
    {root: "tear", past: "tore"},
    {root: "wear", past: "wore"},
    {root: "win", past: "won"},
    {root: "spend", past: "spent"},
    {root: "arrive", past: "arrived"},
    {root: "accept", past: "accepted"},
    {root: "ask", past: "asked"},
    {root: "write", past: "wrote"},
    {root: "feed", past: "fed"},
    {root: "do", past: "did"},
    {root: "build", past: "built"},
    {root: "bring", past: "brought"},
    {root: "catch", past: "caught"},
    {root: "fly", past: "flew"},
    {root: "bend", past: "bent"},
    {root: "catch", past: "caught"},
    {root: "buy", past: "bought"},
    {root: "fight", past: "fought"},
    {root: "wash", past: "washed"},
    {root: "forget", past: "forgot"},
    {root: "give", past: "gave"},
    {root: "run", past: "ran"},
    {root: "rise", past: "rose"},
    {root: "sell", past: "sold"},
    {root: "send", past: "sent"},
]

// The function that finds the dictionary for the word
const tenseFlow = (word)=> dictionary.find(({root})=>{    
            return  root === word;
})

// For testing
// console.log(tenseFlow("wake").past, tenseFlow("shower").root)

module.exports = {
    tenseFlow
}
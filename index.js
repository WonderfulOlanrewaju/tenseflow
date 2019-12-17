const dictionary = [
    {root: "come", past: "came"}, {root: "see", past: "saw"}, {root: "leave", past: "left"}, {root: "wake", past: "woke"},
    {root: "shower", past: "showered"}, {root: "go", past: "gone"}, {root: "drive", past: "drove"}, {root: "eat	", past: "ate"},
    {root: "fall", past: "fell"}, {root: "draw", past: "drew"}, {root: "drink", past: "drank"}, {root: "take", past: "took"},
    {root: "sleep", past: "slept"}, {root: "sing", past: "sang"}, {root: "tear", past: "tore"}, {root: "wear", past: "wore"},
    {root: "win", past: "won"}, {root: "spend", past: "spent"}, {root: "arrive", past: "arrived"}, {root: "accept", past: "accepted"},
    {root: "ask", past: "asked"}, {root: "write", past: "wrote"}, {root: "feed", past: "fed"}, {root: "do", past: "did"},
    {root: "build", past: "built"}, {root: "bring", past: "brought"}, {root: "catch", past: "caught"}, {root: "fly", past: "flew"},
    {root: "bend", past: "bent"}, {root: "catch", past: "caught"}, {root: "buy", past: "bought"}, {root: "fight", past: "fought"},
    {root: "wash", past: "washed"}, {root: "forget", past: "forgot"}, {root: "give", past: "gave"}, {root: "run", past: "ran"},
    {root: "rise", past: "rose"}, {root: "sell", past: "sold"}, {root: "pay", past: "paid"}, {root: "ring", past: "rang"},
    {root: "send", past: "sent"}, {root: "seek", past: "sought"}, {root: "say", past: "said"}, {root: "mean", past: "meant"},
    {root: "lend", past: "lent"}, {root: "leave", past: "left"}, {root: "make", past: "made"}, {root: "see", past: "saw"},
    {root: "ride", past: "rode"}, {root: "grow", past: "grew"}, {root: "hide", past: "hid"}, {root: "hang", past: "hung"},
    {root: "keep", past: "kept"}, {root: "get", past: "got"}, {root: "lay", past: "laid"}, {root: "know", past: "knew"},
    {root: "light", past: "lit"}, {root: "meet", past: "met"}, {root: "find", past: "found"}, {root: "hold", past: "held"},
    {root: "prove", past: "proved"}, {root: "freeze", past: "froze"}, {root: "steal", past: "stole"}, {root: "bleed", past: "bled"},
    {root: "dig", past: "dug"}, {root: "cut", past: "cut"}, {root: "break", past: "broke"}, {root: "hear", past: "heard"},
    {root: "choose", past: "chose"}, {root: "blow", past: "blew"}, {root: "have", past: "had"}, {root: "dive", past: "dived"},
    {root: "hit", past: "hit"}, {root: "bite", past: "bit"}, {root: "strike", past: "struck"}, {root: "stand", past: "stood"},
    {root: "tell", past: "told"}, {root: "shake", past: "shook"}, {root: "spit", past: "spat"}, {root: "lose", past: "lost"},
    {root: "teach", past: "taught"}, {root: "swing", past: "swung"}, {root: "shoot", past: "shot"}, {root: "think", past: "thought"},
    {root: "wear", past: "wore"}, {root: "learn", past: "learned"}, {root: "scream", past: "screamed"}, {root: "wink", past: "winked"}, 
    {root: "walk", past: "walked"}, {root: "work", past: "worked"}, {root: "yell", past: "yelled"}, {root: "visit", past: "visited"}, 
    {root: "use", past: "used"}, {root: "thank", past: "thanked"}, {root: "select", past: "selected"}, {root: "smoke", past: "smoked"}, 
    {root: "start", past: "started"}
]

// The function that finds the dictionary for the word
const tenseFlow = (word)=> dictionary.find(({root})=>{    
            return  root === word;
})

// For testing
console.log(tenseFlow("wake").past, tenseFlow("shower").root)

module.exports = {
    tenseFlow
}
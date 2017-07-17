var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

function randletter()
{
    var result = Math.floor(Math.random() * alphabet.length);
    return (alphabet[result]);
}

console.log(randletter());



function randWord()
{
    var word = "";
    var wordl = Math.floor(Math.random()*25)
    for(var i = 0; i<wordl; i++)
    word = randletter() + word;
    return word;
    
}

console.log(randWord());



function randSentence()
{
    var sentence = "";
    var sentencel = Math.floor(Math.random()* 30)
    for(var i=0; i<sentence1; i++)
    sentence= randWord() +  + sentence + ' ' + sentence;
    sentence+='.';
    return sentence.charAt(0).toUpperCase() + sentence.slice(1)
} 

console.log(randSentence());
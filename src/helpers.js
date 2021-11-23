//build out func that takes a string and returns titlecase


////whatever str is is now lowercase then split it  on spaces  to make it an array of  words
    // cap every word on list  we map everything he said bc every member of list is a word
    // return the word with charAt get char at certain pos in str
    // index in with that and send it to uppercase
    //get rest of the word and splice it at second letter first pos and add to end
    //whold thing is an array of words with caps at beginning
    //need  to join it  with a spave

export function titleCase(str){

    return str.toLowerCase().split(' ').map(
        (word)=> (word.charAt(0).toUpperCase()+word.slice(1))
        ).join(' ')


}

//console.log(titleCase('let this TURN INTO title case LetterInG'))
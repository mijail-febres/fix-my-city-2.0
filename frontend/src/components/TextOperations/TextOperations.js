 // Translate tags to a more friendly type
 // example: parsePropertyToHuman('this_word_in') returns 'This Word In'
export const parsePropertyToHuman = (word) => {
    let Phrase = word.split('_');
    for (let i=0; i<Phrase.length; i++) {
        let newWord = Phrase[i].split(''); 
        newWord[0] = newWord[0].toUpperCase();
        Phrase[i] = newWord.join('');
    }
    return Phrase.join(' ');
}

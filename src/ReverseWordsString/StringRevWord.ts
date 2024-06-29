

function reverseWords(s: string): string {
    const wordsArray = s.split(' ');
    const reverseArray = wordsArray.reverse();
    let returnString: string = "";
    reverseArray.forEach((stringVal) =>{
        if(stringVal === s[s.length-1])
            {
                returnString += stringVal;
            }
        returnString += stringVal + ' ';
    })
    


    return returnString.trim();
};
const revString = "a good   example"
console.log(reverseWords(revString))
/**
 * Given an array of integers citations where citations[i] is the number
 * of citations a  researcher received for their ith paper,
 * return the researchers h-index 
 * 
 * According to definition of hIndex on Wiki: 
 * The hIndex is defined as the max value of h such that the given
 * researcher has published at least h papers that have 
 * each been cited at least h times
 */

// Input: citations = [3,0,6,1,5]
// Output: 3
// Explanation: [3,0,6,1,5] means the researcher has 5 papers
// in total and each of them receive 3, 0, 6, 1, 5 citations respectively

function hIndex(citations: number[]): number {

    citations.sort((a,b) => a - b);

    for(let i =0; i< citations.length; i++)
    {
        if(citations[i]! >= citations.length - i)
        {
            return citations.length-i;
        }
    }
    return 0
}

console.log(hIndex([3,0,6,1,5]));
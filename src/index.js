const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {



    let result = '';
    
    for (let i = 0; i < Math.floor(expr.length/10); i++)
        { 	
            let oneSymbol = expr.slice(i*10, i*10 + 10)
            let firstOne = oneSymbol.indexOf("1")
            let oneSymbolText = oneSymbol.slice(firstOne);
            let textMorze = '';
            
            for (let j = 0; j < oneSymbolText.length; j += 2)
                {	
                
            if (oneSymbolText === '*') {
                    textMorze = `${textMorze}*`
        
                }
    
            else {
                
            
                if (oneSymbolText.slice(j, j+2) === '11')
                    {
                    textMorze = `${textMorze}-`
                    } 
                    else if (oneSymbolText.slice(j, j+2) === '10') 
                        {
                        textMorze = `${textMorze}.`
                        }
                }
            
            }
            
            let decodeSymbol = MORSE_TABLE[textMorze]
            
            if (decodeSymbol == undefined) {
                result = `${result} `
            } else {
                result = `${result}${decodeSymbol}`
            }
            
        }
    
    
        return result; 
    
    
    }
    
module.exports = {
    decode
}
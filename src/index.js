module.exports = function toReadable (number) {
    let str = String(number);
    let objUnits = {
        1: 'one', 
        2: 'two',	
        3: 'three',
        4: 'four',	
        5: 'five',	
        6: 'six',	
        7: 'seven',	
        8: 'eight',
        9: 'nine',
        }
        let objEens = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        }
        let objDozents = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
        };
        
        
        let mapUnits = new Map(Object.entries(objUnits));
        let mapEens = new Map(Object.entries(objEens));
        let mapDozents = new Map(Object.entries(objDozents));
        
        if(str === '0') {
            return 'zero'
        }
        
        if(str.length === 1) {
            return mapUnits.get(str);
           
        } 
        
        if(str.length === 2 && str[0] === '1') {
          return mapEens.get(str)
        
        }
        
        if(str.length === 2 && str[0] === str[0] && str[1] === '0') {
            return `${mapDozents.get(str[0])}`
        }
        
        if(str.length === 2 && str[0] === str[0]) {
            return `${mapDozents.get(str[0])} ${mapUnits.get(str[1])}`
        }
        
        if(str.length === 3 && str[1] === '0' && str[2] === '0') {
            return `${mapUnits.get(str[0])} ${'hundred'}` 
        }
        
        if(str.length === 3 && str[0] === str[0] && str[1] === '0') {
            return `${mapUnits.get(str[0])} ${'hundred'} ${mapUnits.get(str[2])}` 
        }
        
        if(str.length === 3 && str[0] === str[0] && str[1] === '1') {
            return `${mapUnits.get(str[0])} ${'hundred'} ${mapEens.get(str.slice(1))}` 
        }
        
        if(str.length === 3 && str[0] === str[0] && str[2] === '0') {
            return `${mapUnits.get(str[0])} ${'hundred'} ${mapDozents.get(str[1])}` 
        }
        
        if(str.length === 3 && str[0] === str[0] && str[1] === str[1]) {
            return `${mapUnits.get(str[0])} ${'hundred'} ${mapDozents.get(str[1])} ${mapUnits.get(str[2])}` 
        }
        
}

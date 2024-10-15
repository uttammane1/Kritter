function normalizeString(input) {
    let trimmedString = input.trim();
    
    let cleanedString = trimmedString.replace(/[^a-zA-Z0-9 ]/g, "");
    
    let singleSpacedString = cleanedString.replace(/\s+/g, " ");
    
    let words = singleSpacedString.split(" ");
    let camelCaseString = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(" ");
    
    return camelCaseString;
}

let input = " Hello! World@ This is a Test!. ";
console.log(normalizeString(input)); 


function highlightSearchTerm(text, searchTerm) {
    console.log(searchTerm);
    const regex = new RegExp(searchTerm, 'gi');//Regexp(pattern,modify) 
    
    
    const highlightedText = text.replace(regex, `*${searchTerm}*`);
    
    return highlightedText;
}
console.log(highlightSearchTerm("JavaScript is a programming language. JavaScript is widely used.", "JavaScript"));


var t1="hii  ";




















// const regex = new RegExp(searchTerm, 'gi');
//     console.log(regex);
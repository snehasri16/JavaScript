function highlightSearchTerm(text, searchTerm) {
    console.log(searchTerm);
    const val=/JavaScript/g;
    const highlightedText = text.replace(val, `*${searchTerm}*`);
    
    return highlightedText;
}

console.log(highlightSearchTerm("JavaScript is a programming language. JavaScript is widely used.", "JavaScript"));























// const regex = new RegExp(searchTerm, 'gi');
//     console.log(regex);
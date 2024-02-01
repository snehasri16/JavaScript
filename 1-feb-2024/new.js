
var mystring = "hello world test world";
console.log(mystring);
var find = "world";
var regex = new RegExp(find, "g");
console.log(regex);

console.log(mystring.replace(/world/g, "*yay*"));
console.log(mystring.replace(regex, "yay"));
///////////////////////////////////////
function highlightSearchTerm(mystring, find) {
    console.log(find);
    const val=/JavaScript/g;
    const highlightedText = mystring.replace(val, "*JavaScript*");
    
    return highlightedText;
}

console.log(highlightSearchTerm("JavaScript is a programming language. JavaScript is widely used.", "JavaScript", find));
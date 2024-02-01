function countVowels(str) {
    //const lowercaseStr = str.toLowerCase();
    let count = 0;
    for (let char of str) {
        if(/[aeiou]/i.test(char)) {//...test returns true or false......match returns value string..
            count++;
          }     
    }
    console.log(count);
  }

countVowels("Aeiou -----");  
countVowels("Java");    
  
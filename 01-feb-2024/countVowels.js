function countVowels(str) {
    //const lowercaseStr = str.toLowerCase();
    let count = 0;
    for (let char of str) {
        if(/[aeiou]/i.test(char)) {
            count++;
          }     
    }
    console.log(count);
  }

countVowels("Aeiou -----");  
countVowels("Java");    
  
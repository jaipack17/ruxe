const wrap = require("ruxe");

let textwrapped = wrap("Harry has a little farm, he has 4 cows, 15 chickens and 3 goats in his farm. He likes to grow a variety of crops such as wheat, barley, rice and corn! He loves farming! He also has good storage facilities in the farm and modern irrigation systems!", { wordsPerLine: 7 }); 

console.log(textwrapped);

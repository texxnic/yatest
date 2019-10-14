/* Кодировка:
В случае Е поменять первый и последний символ местами, в случае R каждый символ дублируется.
Цифры разделены пробелом, комбинация 3мя пробелами */

let example = `.---- E-.--. R.......... -....   -.... ..... E-..-. R----......   .---- E-.--. R.......... -....   -.... ..... E-..-. R----......`;

function morzeParse(str) { 
    let combination = str.split(`   `);
    let result = ``;
    let morse = {
        '.----': '1', '..---': '2', '...--': '3',
        '....-': '4', '.....': '5', '-....': '6', 
        '--...': '7', '---..': '8', '----.': '9',
        '-----': '0',
    }
    combination.forEach((element,index) => {
        let numbers = element.split(` `);
        
        if (index > 0) result += ` `;

        numbers.forEach((el, index) => {
            let encodedNumber = ``;

            switch (el[0]){
                case `E`:
                    encodedNumber = el.replace(/E(.)(.*)(.)$/, `$3$2$1`);
                    break;
                case `R`:
                    for (let i = 1; i < el.length; i++) { 
                        if ((i % 2) == 0) continue;
                        encodedNumber += el[i];
                    } 
                    break;
                default:
                    encodedNumber = el;
                    break;
            }

            result += morse[encodedNumber];
        });
    });
    
    return result; // 1256 6537
};
console.log(morzeParse(example));
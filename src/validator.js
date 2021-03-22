const validator = {
    isValid: creditCardNumber => {
        /* En esta expresión regular validaremos que se ingresen los números de 0 al 9*/
        /* El + evalua si hay mas numeros en la cadena, El método test() ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada. Devuelve true o false.*/


        if (/[0/9]+/.test(!creditCardNumber) || creditCardNumber == "") return false

        let suma = 0;
        let procesarNumero = false
            // console.log(typeof creditCardNumber)

        for (let i = creditCardNumber.length - 1; i >= 0; i--) {
            /*char charAt(int index) Devuelve el carácter indicado como índice. El primer carácter de la cadena será el del índice 0. Junto con el método . length() podemos recuperar todos los caracteres de la cadena de texto. */
            let caracter = creditCardNumber.charAt(i);

            /* El parseInt convierte nuestro string a un entero */
            let numeroEntero = parseInt(caracter, 10);

            // if (i % 2 == 1) {
            //     console.log(numeroEntero) //multiplcar  *2
            // }

            //en numero entero vale 8
            //numerosmultiplicados = true

            // if (numerosMultiplicados && (numeroEntero *= 2) > 9) numeroEntero -= 9

            if (procesarNumero) {
                // numeroEntero *= 2 
                numeroEntero = numeroEntero * 2
                if (numeroEntero > 9) {
                    // numeroEntero -= 9
                    numeroEntero = numeroEntero - 9
                }
            }

            suma += numeroEntero;
            procesarNumero = !procesarNumero;
            // console.log(numeroEntero)
        }

        // if (suma)
        // return (suma % 10) == 0;
        // console.log(suma % 10)
        // console.log(suma)

        let residuo = suma % 10

        if (residuo == 0) {
            return true;
            // console.log('la tarjeta es valida')
        } else {
            return false;
            // console.log('Su tarjeta No es valida')
        }
    },

    maskify: creditCardNumber => {
        let simboloEnmascarar = '#';

        if (creditCardNumber.length >= 4) {
            let ultimosDigitos = creditCardNumber.slice(-4);
            let enmascarar = simboloEnmascarar.repeat(creditCardNumber.length - 4) + ultimosDigitos;

            return creditCardNumber = enmascarar;
        } else {
            return creditCardNumber;
        }

    }


};

// let resultado1 = validator.isValid('4083952015263')
// let resultado2 = validator.isValid('4083952015264')
// let resultado3 = validator.isValid('123456789');

// console.log(resultado1, resultado2, resultado3)


export default validator;
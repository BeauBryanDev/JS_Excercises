// /* Self Exc Function 000 */

( function() { 
    //Declarative Function 
    function countWords(text0 )  {

        const word = text0.trim().split(/\S+/);

        return word.filter( p => p.length > 0 ).length;

    }
    //Expresion Function 
    const countCharacters = function( text0 ) {

        return text0.length;

    }
    // Arrow Function 

    const isWord = (phrase, word ) =>  {

        return phrase.toLowerCase().includes(word.toLowerCase());
        
    }

    document.getElementById("analyce").addEventListener( 'click' , () => {

        const  phrase = document.getElementById("phrase").value ;
        const  word   = document.getElementById('search').value ;
        const  rslt   = document.getElementById('result');

        //Basis Validations ...
        if ( phrase.trim() === "" ) {

            rslt.innerHTML = "<p>Escriba una Frase, Imbecil!</p>";
            return;

        }

        const numWords = countWords( phrase ) ;
        const numCharacters =  countCharacters( phrase );
        const contains  = isWord( phrase, word );

        rslt.innerHTML = `
            <p>Palabras: <strong>${numWords}</strong></p>
            <p>Characters : <strong>${numCharacters}</strong></p>
            <p>Contiene " ${word} "?: <strong>${contains ? "SI" :"No"}</strong> </p>
        `
    });

})() ;


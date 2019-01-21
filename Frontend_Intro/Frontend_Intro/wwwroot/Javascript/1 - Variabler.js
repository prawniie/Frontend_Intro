//var1();
//var2();
//var3();
//var4();
//var5();
//var6();
//var7();
//var8();
//var9();
//var10();
//var11();
var12();


function var1() {
    console.log('My name is Rebecka');
}

function var2() {
    /* 
    Skapa variabel och sätt det till 35. 
    Meddela värdet av siffran (med hjäp av "console.log")
    */

    let number = 35;
    console.log(number);

}

function var3() {

    /*
     Skapa en variabel "x" med värdet 12
     Skapa en variabel "y" med värdet 6
     Skapa en variabel "z" som summerar talen
     Skriv ut svaret "Svar: 18"
    */

    let x = 12;
    let y = 6;
    let z = x + y;
    console.log('Answer: ' + z);

}

function var4() {

    /*
    Modifera koden du skapat sist och se vilka effekter/felmeddelanden som dyker upp
    Experimentera!
    Skapa en variabel "x" med värdet 77
    Skapa en variabel "y" med värdet 44
    Ändra värdet av "x" till 55
    Skapa en variabel "z" som summerar talen
    Skriv ut summan
    */

    let x = 77;
    let y = 44;
    let z = x + y;
    console.log(z);

}


function var5() {

    /*
     Samma som sist men låter x vara en konstant (const)
    Vilket felmeddelande dyker upp?
    */
    const x = 77;
    let y = 44;
    let z = x + y;
    console.log(z);
}

function var6() {
    /*
    Modifera koden du skapat sist och se vilka effekter/felmeddelanden som dyker upp
    Experimentera!
    Skapa en variabel "nummer1" och sätt den till strängen "77" 
    Skapa en variabel "nummer2" och sätt den till strängen "50"
    Skriv ut nummer1+nummer2 (ska ge 7750)
    */

    let number1 = '77';
    let number2 = '50';
    console.log(number1 + number2);
}

function var7() {
    /*
    Skapa en variabel "nummer1" och sätt den till strängen "77" 
    Skapa en variabel "nummer2" och sätt den till 50
    Använd parseInt för att omvandla "nummer1" till siffran 77
    Skriv ut nummer1+nummer2 (ska ge 127)
    */
    let number1 = '77';
    let number2 = 50;
    let result = parseInt(number1) + number2;
    console.log(result);
}

function var8() {
    /*
    Skapa variabel nummer med värdet 42. 
    Skriv ut "Mitt favorittal är 42" (om det är 42).
    */

    let number = 42;
    console.log('My favourite number is ' + number);

}

function var9() {

    /* Använd "snedfnutt" (alltså teckenet `) för att lösa problemet ovan */

    let number = 42;
    console.log(`My favourite number is ${number}`)
}

function var10() {
    /*
    Skapa en variabel "middag" och sätt den till 'broccoli'
    Skapa en variabel "Middag" och sätt den till 'pasta'
    Meddela värdet av "middag"
    */

    let dinner = 'broccoli';
    let Dinner = 'pasta';
    console.log(dinner);
}

function var11() {
    /*
    Skapa en variabel x med värdet 12
    Skapa en variabel y med värdet true
    Skapa en variabel z med värdet 'måndag'
    Skapa en variabel w utan att sätta något värde
    Skriv ut typen av dessa fyra variabler mha "typeof"
    */

    let x = 12;
    let y = true;
    let z = 'monday';
    let w;
    console.log(typeof (x));
    console.log(typeof (y));
    console.log(typeof (z));
    console.log(typeof (w));
}

function var12() {
    /*
    Skapa en variabel "x". Sätt värdet till "parseInt('oscar')"
    Skriv ut x (ska ge "NaN")
    Använd "isNaN" fär att kolla om x är ett icke-nummer. Sätt y till det värdet (y kommer få värdet true)
    Skriv ut y
    */

    let x = parseInt('Oscar');
    console.log(x);

    let y = isNaN(x);
    console.log(y);
}
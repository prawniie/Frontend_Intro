//fun1();
//fun2();
//fun3();
//fun4();
//extraFun1();
//extraFun2();
extraFun3();

function fun1() {

    /*
        Gör en metod "sayHi". Anropa den två gånger
    
        sayHi()
        sayHi()
    Detta ska skrivas ut:
    --------
    -------- VÄLKOMMEN 
    --------
    --------
    -------- VÄLKOMMEN 
    --------
    */

    sayHi();
    sayHi();

}

function sayHi() {
    console.log('------------');
    console.log('------------ WELCOME');
    console.log('------------');
}

function fun2() {

    /*
    Liknande som sist men gör en metod sayHiTo() som tar ett namn som inparameter.
    Ex sayHiTo("Oscar") ska skriva ut:
    --------
    -------- VÄLKOMMEN OSCAR
    --------
    */

    sayHiTo('Oscar');
}

function sayHiTo(name) {
    console.log('------------');
    console.log('------------ WELCOME ' + name.toUpperCase());
    console.log('------------');


}

function fun3() {

    /*
    Gör en metod "myndig" med två parameterar "name" och "age". Anropa den tre gånger
    
        myndig("Peter", 16);
        myndig("Lisa", 26);
        myndig("Ragnar", 15);
    Detta ska skrivas ut:
        Obs! Peter är inte myndig!
        Lisa är myndig
        Obs! Ragnar är inte myndig!
    */

    myndig("Peter", 16);
    myndig("Lisa", 26);
    myndig("Ragnar", 15);

}

function myndig(name, age) {
    let message = (age >= 18) ? `${name} är myndig` : `${name} är inte myndig`;
    console.log(message);
}

function fun4() {

    /*
    Gör en metoden "skrivUtMoms" som tar "price" som inparameter.
    Om du t.ex anropas metoden såhär:
        skrivUtMoms(1000)
    ...så ska detta skrivas ut:
        Momsen för varan är 250kr
    */

    printTax(1000);
    printTax(10000);

}

function printTax(price) {
    console.log(`The tax for this product is ${price * 0.25} SEK`);
}

// -------- EXTRA UPPGIFTER -----------------------------------------

function extraFun1() {

    /*
    Gör en metod "inkopslista" med en parameter "stuff". Anropa den:
    
        inkopslista(["Skruv", "Hammare", "Vattenpass"]);
        inkopslista(["Penna", "Luktsuddigum"]);
    Detta ska skrivas ut:
        ATT KÖPA:
        * SKRUV
        * HAMMARE
        * VATTENPASS
        ATT KÖPA:
        * PENNA
        * LUKTSUDDIGUM
    */

    toBuyList(["Skruv", "Hammare", "Vattenpass"]);
    toBuyList(["Penna", "Luktsuddigum"]);
}

function toBuyList(stuff) {
    console.log('To buy:'.toUpperCase());

    for (let thing of stuff)
        console.log(`* ${thing.toUpperCase()}`);

}

function extraFun2() {

    /*
    Gör en metod "recept" med en parameter "recipeName" och "ingredients". Anropa den:
    
        recept("Äpplekaka", ["Äpple", "Mjöl", "Kanel"]);
        recept("Rotmos", ["Potatis", "Kålrot"]);
    Detta ska skrivas ut:
        FÖR ATT GÖRA ÄPPLEKAKA BEHÖVS:
        * ÄPPLE
        * MJÖL
        * KANEL
        FÖR ATT GÖRA ROTMOS BEHÖVS:
        * POTATIS
        * KÅLROT
    */

    recipe("Äpplekaka", ["Äpple", "Mjöl", "Kanel"]);
    recipe("Rotmos", ["Potatis", "Kålrot"]);
}

function recipe(recipeName, ingredients) {
    console.log(`In order to do ${recipeName} you need: `.toUpperCase());
    for (let ingredient of ingredients)
        console.log(`* ${ingredient}`.toUpperCase());
}

function extraFun3() {

    /*
    I sverige finns tre momssatser: 25%, 12% och 6%. Se här:
    https://www.verksamt.se/starta/skatter-och-avgifter/moms/olika-momssatser
    Skriv en metod "skrivUtMoms" som beräknar moms på en vara utifrån vilken typ av vara det är
    Dessa anrop:
        skrivUtMoms("tidning", 1000);
        skrivUtMoms("restaurangbesök", 1000);
        skrivUtMoms("flyg", 1000);
        skrivUtMoms("falafel", 1000);
        skrivUtMoms("hipsteröl", 1000);
    Ska ge svaren:
        Momsen för en/ett tidning som kostar 1000kr är 60kr
        Momsen för en/ett restaurangbesök som kostar 1000kr är 120kr
        Momsen för en/ett flyg som kostar 1000kr är 60kr
        Momsen för en/ett falafel som kostar 1000kr är 250kr
        Momsen för en/ett hipsteröl som kostar 1000kr är 250kr
    */

    printTax('restaurant visit', 500);
    printTax('flight', 3000);
    printTax('paper', 60);
    printTax('makeup', 60);

}

function printTax(product, price) {
    let message;

    //let tax;
    //let message;
    //switch (product) {
    //    case "restaurant visit":
    //        tax = 0.25;
    //        console.log(`The TAX for a ${product} is ${price * tax}`);
    //        break;
    //    case "paper":
    //        tax = 0.12;
    //        console.log(`The TAX for a ${product} is ${price * tax}`);
    //        break;
    //    case "flight":
    //        tax = 0.25;
    //        console.log(`The TAX for a ${product} is ${price * tax}`);
    //        break;
    //    default:
    //        console.log(`Sorry I dont know the TAX for ${product}`);

    //}

    switch (product) {
        case "restaurant visit":
            message = `The TAX for a ${product} is ${price * 0.25}`;
            break;
        case "paper":
            message = `The TAX for a ${product} is ${price * 0.12}`;
            break;
        case "flight":
            message = `The TAX for a ${product} is ${price * 0.25}`;
            break;
        default:
            message = `Sorry I dont know the TAX for ${product}`;
            break;

    }
    console.log(message);

}

function extraFun4() {

    /*
    Modifiera "skrivUtMoms" så det går att ange "en" eller "ett".
    Dessa anrop:
        skrivUtMoms("en", "tidning", 1000);
        skrivUtMoms("ett", "restaurangbesök", 1000);
        skrivUtMoms("ett", "flyg", 1000);
        skrivUtMoms("en", "falafel", 1000);
        skrivUtMoms("en", "hipsteröl", 1000);
    Ska ge svaret:
        Momsen för en tidning som kostar 1000kr är 60kr
        Momsen för ett restaurangbesök som kostar 1000kr är 120kr
        Momsen för ett flyg som kostar 1000kr är 60kr
        Momsen för en falafel som kostar 1000kr är 250kr
        Momsen för en hipsteröl som kostar 1000kr är 250kr
    */

}
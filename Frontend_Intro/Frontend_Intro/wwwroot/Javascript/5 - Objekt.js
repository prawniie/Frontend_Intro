//obj1();
obj2();

function obj1() {

    /*
        Skapa ett objekt "person" med uppgifter om Johan Rheborg: förnamn, efternamn, födelseår
        Skriv ut förnamnet
        Skriv ut hans fullständiga namn
    */

    let person = { firstName: 'Johan', lastName: 'Rheborg', birthYear: '1967' };
    console.log(person.firstName);
    console.log(person.firstName + ' ' + person.lastName);
}

function obj2() {

    /*
       Fortsätt bygg vidare på "person"
       Lägg till ett par rollkaraktärer (Percy Nilegård, Farbror Barbro...)
       Lägg till adressuppgifter (street, city, country)
       Skriv ut info om Johan utifrån objektet "person":
            Johan är född år 1963
            Johan bor på gatan Kammakargatan 38 lgh 1401
            Johan har spelat 3 roller, bland annat Percy Nilegård
    */

    let person = {
        firstName: 'Johan',
        lastName: 'Rheborg',
        birthYear: '1967',
        street: 'Björnbärsvägen 14',
        city: 'Borås',
        country: 'Sweden',
        rolesPlayed: ['Percy Nilegård','Farbror Barbro']
    };

    console.log(`${person.firstName} is born in ${person.birthYear}`);
    console.log(`${person.firstName} lives at ${person.street}`);
    console.log(`${person.firstName} has played 3 roles, one of which is ${person.rolesPlayed[0]}`);


}


function obj3() {

    /*
       Skapa en array "paintings" med tre målningar (tre element)
       För varje målning finns info: namn, konstnär och året den blev målad
       Skriv ut antalet målningar: "Det finns XXXst målningar"
       Skriv ut den tredje målningen t.ex: "Pablo Picasso målade Guernica år 1937"
       Loopa igenom alla målningar med "for of" och skriv ut all info i tabellform
       Tips: använd "padEnd" för att skriva ut tabellen snyggt
    */

}

function obj4() {

    /*
       Skapa ett objekt "skriet" (av Edvard Munch 1893). Lägg till den i paintingsarrayen mha "push".
       Skriv ut dess år mha variablen "paintings" 
       Använd "pop" för att plocka bort de tre sista målningarna
       Skriv ut antalet målningar i arrayen 
    */

}

// -------- EXTRA UPPGIFTER -----------------------------------------

function objExtra1() {

    /*
       Fortsätt bygg vidare på "person"
       Lägg till en metod "fullName" till person
       Lägg till en metod "numberOfRoles" till person
       Används sedan dessa för att skriva ut:
            Johan Rheborg
            Johan Rheborg har spelat i 3 roller
    */
}

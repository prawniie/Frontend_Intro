//obj1();
//obj2();
//obj3();
//obj4();
objExtra1();

function obj1() {

    /*
        Skapa ett objekt "person" med uppgifter om Johan Rheborg: förnamn, efternamn, födelseår
        Skriv ut förnamnet
        Skriv ut hans fullständiga namn
    */

    //skapa objekt: let x = {}

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

    //kan också skapa nytt objekt i objektet se oscars kod på adressen

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

    let paintings = [{ name:'Mona Lisa', artist:'Leonardo da Vinci', year: '1503' }, { name:'Skriet', artist:'Edvard Munch', year:'1893'}, { name:'Guernica', artist:'Pablo Picasso', year:1937}];
    console.log(`There are ${paintings.length} paintings`);
    //console.log(`${paintings[0].artist} painted ${paintings[0].name} in ${paintings[0].year}`);
    //console.log(`${paintings[1].artist} painted ${paintings[1].name} in ${paintings[1].year}`);
    //console.log(`${paintings[2].artist} painted ${paintings[2].name} in ${paintings[2].year}`);


    //let counter = 0;

    //while (counter < paintings.length) {
    //    console.log(`${paintings[counter].artist} painted ${paintings[counter].name} in ${paintings[counter].year}`);
    //    counter++
    //}

    for (let painting of paintings) {
        console.log(`${painting.artist} painted ${painting.name} in ${painting.year}`);
    }


}

function obj4() {

    /*
       Skapa ett objekt "skriet" (av Edvard Munch 1893). Lägg till den i paintingsarrayen mha "push".
       Skriv ut dess år mha variablen "paintings" 
       Använd "pop" för att plocka bort de tre sista målningarna
       Skriv ut antalet målningar i arrayen 
    */

    let paintings = [{ name: 'Mona Lisa', artist: 'Leonardo da Vinci', year: '1503' }, { name: 'Skriet', artist: 'Edvard Munch', year: '1893' }, { name: 'Guernica', artist: 'Pablo Picasso', year: 1937 }];

    let stjärnenatt = { name: 'Stjärnenatt', artist: 'Vincent van Gogh', year: '1889' };
    paintings.push(stjärnenatt);

    console.log(paintings[3].year);

    paintings.pop();
    paintings.pop();
    paintings.pop();

    console.log(paintings.length);

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

    let person = {
        firstName: 'Johan',
        lastName: 'Rheborg',
        birthYear: '1967',
        street: 'Björnbärsvägen 14',
        city: 'Borås',
        country: 'Sweden',
        rolesPlayed: ['Percy Nilegård', 'Farbror Barbro']
    };

    let fullName = fullName(person.firstName, person.lastName);
    console.log(fullName);
}

function fullName(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;
    return fullName;
}

/*
    1.
    Napiš funkci, která má jeden argument.
    Pokud je argument celé číslo, vrať true, pokud není celé číslo vrať false.
*/

//console.log(mojeFunkce(4) === true)
//console.log(mojeFunkce(1.123) === false)
//console.log(mojeFunkce(1048) === true)
//console.log(mojeFunkce(10.48) === false)



/*
    2.
    Napiš funkci, která má dva číselné argumenty (a, b).
    Pokud je a menší než b, poděl číslo a číslem b, jinak je obě vynásob.
*/

//console.log(mojeFunkce(10, 100)) === 0.1)
//console.log(mojeFunkce(90, 45)) === 4050)
//console.log(mojeFunkce(8, 20)) === 0.4)
//console.log(mojeFunkce(2, 0.5)) === 1)



/*
    3.
    Napiš funkci, která má dva argumenty typu string (a, b).
    Pokud string a obsahuje string b, vlož string b na začátek stringu a, jinak jej vlož na konec stringu a
*/

//console.log(mojeFunkce("cheese", "cake")) === "cheesecake")
//console.log(mojeFunkce("lips", "s")) === "slips")
//console.log(mojeFunkce("Java", "script")) === "Javascript")
//console.log(mojeFunkce(" think, therefore I am", "I")) === "I think, therefore I am")



/*
    4.
    Napiš funkci, která má jeden argument typu array.
    Pokud se všechny prvky v poli rovnají, vrať true, jinak false
*/

//console.log(mojeFunkce([true, true, true, true])) === true)
//console.log(mojeFunkce(['test', 'test', 'test'])) === true)
//console.log(mojeFunkce([1,1,1,2])) === false)
//console.log(mojeFunkce(['10',10,10,10])) === false)

/*
    5.
    Napiš funkci, která přijímá dva argumenty - pole čísel a číslo (n).
    Sečti všechny prvky z pole vetší než číslo n.
    Výsledek vrať.
*/

//console.log(mojeFunkce([1, 2, 3, 4, 5, 6, 7], 2) === 25)
//console.log(mojeFunkce([-10, -11, -3, 1, -4], -3) === 1)
//console.log(mojeFunkce([78, 99, 100, 101, 401], 99) === 602)


/*
    6.
    Napiš funkci, která přijímá dva argumenty - pole čísel a číslo (n).
    Funkce vrátí posledních n čísel z pole.
    Pokud je v poli méně prvků než jen, vrať vše
*/

//console.log(mojeFunkce([1, 2, 3, 4, 5], 2) === [4, 5])
//console.log(mojeFunkce([1, 2, 3], 6) === [1, 2, 3])
//console.log(mojeFunkce([1, 2, 3, 4, 5, 6, 7, 8], 3) === [6, 7, 8])

/*
    7.
    Napiš funkci, která přijímá jeden argument typu objekt.
    Některé z vlastností objektu jsou prázdné řetězce.
    Nahraď prázdné řetězce hodnotou null.
    Funkce vrátí objekt bez prázdných řetězců.
*/

//console.log(mojeFunkce({a: 'a', b: 'b', c: ''})) -> {a: 'a', b: 'b', c: null}
//console.log(mojeFunkce({a: '', b: 'b', c: ' ', d: 'd'})) -> {a: null, b: 'b', c: null, d: 'd'}
//console.log(mojeFunkce({a: 'a', b: 'b ', c: ' ', d: ''})) -> {a: 'a', b: 'b ', c: null, d: null}

/*
    8.
    Napiš funkci, která má jeden číselný argument.
    Funkce vrátí jednotlivé číslice v poli.
*/

//console.log(mojeFunkce(10)) -> [1, 0])
//console.log(mojeFunkce(931)) -> [9, 3, 1])
//console.log(mojeFunkce(193278)) -> [1, 9, 3, 2, 7, 8])
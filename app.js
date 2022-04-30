/*
Co je za úkol v tomto projektu:

1) Do prvku s id="recepty" vygeneruj z dat seznam všech receptů z naší "databáze".
HTML vzor, jak vygenerovaný recept vypadá, je zakomentovaný v index.html.
2) Doplň hledání - v hlavičce odkomentuj pole pro hledání. Pri kliknutí na tlačítko Hledat
by se měl seznam receptů vyfiltrovat podle hledaného slova.
3) Doplň filtrovanání receptů podle kategorie.
4) Doplň řazení receptů podle hodnocení.
5) Na recepty v seznamu by mělo jít kliknout a na pravé polovině, se objeví detail receptu.
Doplň patričné údaje receptu do HTML prvků s ID recept-foto, recept-kategorie,
recept-hodnoceni, recept-nazev, recept-popis.
6) Poslední vybraný recept ulož do Local Storage, aby se při novém otevření aplikace načetl.
*/


/* vypíšeme recepty*/



let nalezeneRecepty = recepty;
/*funkce pro zobrazení všech receptů*/

zobrazSeznamReceptu()

function zobrazSeznamReceptu() {
    let seznamReceptuElement = document.getElementById("recepty")

    nalezeneRecepty.forEach((recept) => {
        let receptElement = zobrazReceptMenu(recept)
        seznamReceptuElement.appendChild(receptElement)
    })

    /*let receptElement = zobrazReceptMenu({
        nadpis: 'Ovocný tvarohový dort',
        popis: 'Poslední roky u mě v létě vedl pusinkový dort Pavlova na mnoho a mnoho způsobů, ale letos mám nového favorita. Už jsem zkoušela mnoho verzí a je vždy výborný, lehký i svěží a tak ideální ne jen na léto.',
        hodnoceni: 4.4,
        kategorie: 'Dezert',
        stitek: 'dezert',
        img: 'https://images.pexels.com/photos/315707/pexels-photo-315707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'

    });*/





}
/*funkce pro zobrazení detailu receptu*/
function zobrazReceptDetail(recept) {
    console.log(recept)
}

/*funkce pro zobrazení receptu*/
function zobrazReceptMenu(recept) {

    let receptElement = document.createElement('div')
    receptElement.className = "recept"

    // recept - obrázek
    let receptObrazekElement = document.createElement('div')
    receptObrazekElement.className = "recept-obrazek"

    let receptObrazekSrcElement = document.createElement('img')
    receptObrazekSrcElement.src = recept.img
    receptObrazekSrcElement.alt = "Obrázek"
    receptObrazekElement.appendChild(receptObrazekSrcElement)

    // recept - info
    let receptInfoElement = document.createElement('div')
    receptInfoElement.className = "recept-info"

    let receptNadpisElement = document.createElement("h3")
    receptNadpisElement.textContent = recept.nadpis
    receptInfoElement.appendChild(receptNadpisElement)

    // spojení pod div class=recept
    receptElement.appendChild(receptObrazekElement)
    receptElement.appendChild(receptInfoElement)


    receptElement.addEventListener("click", zobrazReceptDetail(recept))

    return receptElement

}
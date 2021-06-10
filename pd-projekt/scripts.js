/* a. */
// const pobierzPostaci = async () => {
//     const data = await fetch('https://rickandmortyapi.com/api/character')
//     const json = await data.json()
//     return json.results
// }
/* b. */
// const pobierz10Postaci = async() => {
//         const data = await fetch('https://rickandmortyapi.com/api/character')
//         const json = await data.json()
//         const firstTen = await json.results.splice(0, 10)
//         return firstTen
//     }
/* c., d., e., f., g., */

const main = async() => {
    const pobierzPostaci = async() => {
        const data = await fetch(`https://rickandmortyapi.com/api/character`)
        const json = await data.json()
        const $ilosc = await  document.getElementById('ilosc')
        $ilosc.innerHTML = await json.info.count
        return json
    }
    const $strona = document.getElementById('aktualna')
    $strona.innerHTML = 1
    const $wszystkieStrony = document.getElementById('wszystkie')
    $wszystkieStrony.innerHTML = 2
    const $buttonSpecific = document.getElementById('specific')
    const $buttonPrev = document.getElementById('prev')
    const $buttonNext = document.getElementById('next')
    $buttonPrev.addEventListener('click', async (el)  => {
        const data = await fetch("https://rickandmortyapi.com/api/character?page=1")
        const json = await data.json()
        const $lista = document.getElementById('lista')
        $strona.innerHTML = 1
        $lista.innerHTML = ''
        json.results.splice(0, 10).forEach((character) => tabela(character))
    })
    $buttonNext.addEventListener('click', async (el)  => {
        const data = await fetch("https://rickandmortyapi.com/api/character?page=1")
        const json = await data.json()
        const $lista = document.getElementById('lista')
        $strona.innerHTML = 2
        $lista.innerHTML = ''
        json.results.splice(10, 10).forEach((character) => tabela(character))
        
    })
    $buttonSpecific.addEventListener('click', async (el)  => {
        const data = await fetch("https://rickandmortyapi.com/api/character?page=15")
        const json = await data.json()
        const $lista = document.getElementById('lista')
       
        $lista.innerHTML = ''
        json.results.splice(19, 1).forEach((character) => tabela(character))
        
    })

    
    const tabela = (data) => {
        const $card = document.createElement('div')
        $card.classList = 'card'
        const $img = document.createElement('img')
        $img.src = data.image
        $img.alt = data.name
        $card.appendChild($img)
        const $lista = document.getElementById('lista')
        const $container = document.createElement('div')
        $container.classList = 'container'

        const $name = document.createElement('h4')
        $name.innerHTML = data.name

        const $species = document.createElement('p')
        $species.innerHTML = data.species
 /* zrobilem tutaj species zamiast type, bo  nie kazda postac ma type, i brzydko to wygladalo :D */
        $container.appendChild($name)
        $container.appendChild($species)
        $card.appendChild($container)
        $lista.appendChild($card)
        
    }
    
    const postaci = await pobierzPostaci()
    postaci.results.splice(0, 10).forEach((character) => tabela(character))
    
}
main()
/* Najmocniej przepraszam ze to jest tak ciulowo napisane, na ten moment to max co moze ze mnie być -.- xD 
poprzednie zadania trzeba odkomentować, nie chcialem robić wszystkiego w jednym celem utrwalenia.*/
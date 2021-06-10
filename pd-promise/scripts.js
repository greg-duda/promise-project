/* 1 */
/* Gdy program napotka linijkę kody do wykonania która wymaga trochę więcej czasu(np. pobieranie jakichś wartości z serwera), w przypadku kodu asynchronicznego przegladarka nie czeka na wykonanie się tej konkretniej linijki kodu, tylko leci z kodem dalej, w międzyczasie wczytując dane, gdy te się pobiorą wykonuję się operacja.
W przypadku kodu synchronicznego, program będzie wstrzymany dopoki nie wykona sie konkretna linijka kodu wymagająca więcej czasu, co skutkuje dluzszym czasem ladowania i błędami.
/* 2., 3. */
// fetch('https://rickandmortyapi.com/api/character')
// .then(res => res.json())
// .then(data => {
//     data.results.forEach(({name}) => {
//         console.log(name)
//     })
// })
// .catch(error => {
//     console.log('UPS, cos poszło nie tak')
// })
/* 4. */
// const pobierzPostaci = async () => {
//     const data = await fetch('https://rickandmortyapi.com/api/character2')
//     const response = await data.json()
//     console.log(response.results.forEach(({ name }) => {
//         console.log(name)
//     }))
// }
// pobierzPostaci().catch(res => console.log('UPS, cos poszlo nie tak'))
/* 5 */ 
// const pobierzPostacByID = async (index) => {
//     const data = await fetch(`https://rickandmortyapi.com/api/character/${index}`)
//     const response = await data.json()
//     console.log(response)
// }
// pobierzPostacByID(114)
 /* Sory ze wszystko zakomentowane, trzeba odkomentować każde pojedynczo */

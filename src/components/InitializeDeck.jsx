import {useState, useEffect } from 'react'
import axios from 'axios'
import shuffle from 'shuffle-array'



function InitializeDeck () {
const [cards,setCards] = useState([])

useEffect(() =>{
    getData()
}, [])
    

const getData = () => {
        axios.get('https://horrormemo.herokuapp.com/memory')
            // .then(response => console.log(response.data))
            .then(response => setCards(response.data))
    
}
return shuffle(cards)
}

export default InitializeDeck
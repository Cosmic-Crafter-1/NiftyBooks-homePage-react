import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import cardDataArray from "./components/data-kids"


function App() {

  // Map and create array with all card data
  const cards = cardDataArray.map(card => {
    return <Card
      img={card.img}
      title={card.title}
    />
  })

  return (
    <div className='container'>
      <Navbar />
      <Hero />

     {/* Renders all the cards, oof , the efficiency !! */}
      {cards}

    </div>
  )
}

export default App

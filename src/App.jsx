import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Card from './components/cards/Card.jsx'

function App() {

  const [card, setcard] = useState([]);

  let getData = async () => {
    let data = await fetch('https://jsonplaceholder.typicode.com/posts');
    let datas = await data.json();

    setcard(datas);
  }

  useEffect(() => {
    getData();
    console.log(card);
    alert("Data loaded successfully");
  }, [])

  return (
    <>
      <Navbar />
      <main>
        {card.map(item => {
          return <Card userId={item.userId} id={item.id} title={item.title} content={item.body} />
        })}
      </main>
      <Footer />
    </>
  )
}

export default App

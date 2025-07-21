import React from 'react'
import './App.css'
import BgImage from './Components/BackgroundImage/bgImage'
import Nav from './Components/Nav/nav';
function App() {

  return (
    <main>
      <section className='bg-transparent absolute w-full'>
        <Nav/>
      </section>
      <BgImage />
    </main>
  );
}
export default App
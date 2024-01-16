import React from 'react'
import react from "../../../assets/react-core-concepts.png";
import './Header.css'
const Header = () => {
    const RandomReact=["Fundamentol","Crucial","Core"];
    function genRandom(max){
        return Math.floor(Math.random()*(max));
        
      }
  return (

          <header>
            <img src={react} alt="Stylized atom" />
            <h1>React </h1>
            <p>
       {RandomReact[genRandom(RandomReact.length)]} React concepts you will need for almost any app you are
              going to build!
            </p>
          </header>
         
      )
}

export default Header

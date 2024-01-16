import Header from "./assets/Components/Header/Header";
import { CORE_CONCEPTS } from "./data";
import CoreConcepts from "./assets/Components/CoreConcepts/CoreConcepts";
import TabButton from "./assets/Components/TabButton/TabButton";
import { useState } from "react";

function App() {
 const [TabContent, setTabContent] = useState('Pls click on tab button');

  function handleSelect(Selected) {
    setTabContent(Selected);
    console.log(TabContent);
   }
  return (
    <div>
     
     <Header />
      <main>
        <section id="core-concepts"> 
        <h2>Time to get started!</h2>
        <ul>
        <CoreConcepts {...CORE_CONCEPTS[0]}/>
       <CoreConcepts {...CORE_CONCEPTS[1]}/>
       <CoreConcepts {...CORE_CONCEPTS[2]}/>
         <CoreConcepts {...CORE_CONCEPTS[3]}/>
        </ul>
        </section>
       <section id="examples">
        <h2>Exemples</h2>
        <menu>
          <TabButton onSelect={() =>handleSelect("Components")}>Comonents</TabButton>
          <TabButton onSelect={() =>handleSelect("JSX")}>JSX</TabButton>
          <TabButton onSelect={() =>handleSelect("Pops")}>Pops</TabButton>
          <TabButton onSelect={() =>handleSelect("STATE")}>State</TabButton>
        </menu>
        {TabContent}
       </section>
      </main>
    </div>
  );
}

export default App;

import Header from "./assets/Components/Header/Header";
import { CORE_CONCEPTS } from "./data";
import CoreConcepts from "./assets/Components/CoreConcepts/CoreConcepts";
import TabButton from "./assets/Components/TabButton/TabButton";


function App() {
  function handleSelect(Selected) {
    console.log(Selected);
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
        
       </section>
      </main>
    </div>
  );
}

export default App;

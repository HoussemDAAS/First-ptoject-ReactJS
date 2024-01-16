import Header from "./assets/Components/Header/Header";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import CoreConcepts from "./assets/Components/CoreConcepts/CoreConcepts";
import TabButton from "./assets/Components/TabButton/TabButton";
import { useState } from "react";

function App() {
  const [TabContent, setTabContent] = useState(null);

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
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Exemples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Comonents
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Pops</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
        </section>

        {!TabContent ? <p>Select an example</p> : <div id="tab-content">
            <h3>{EXAMPLES[TabContent].title}</h3>
            <p>{EXAMPLES[TabContent].description}</p>
            <pre>
              <code>{EXAMPLES[TabContent].code}</code>
            </pre>{" "}
          </div>}
    
      </main>
    </div>
  );
}

export default App;

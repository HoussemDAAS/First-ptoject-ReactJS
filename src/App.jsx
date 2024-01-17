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
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcepts key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Exemples</h2>
          <menu>
            <TabButton
              isActive={TabContent === "components"}
              onSelect={() => handleSelect("components")}
            >
              Comonents
            </TabButton>
            <TabButton
              isActive={TabContent === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isActive={TabContent === "props"}
              onSelect={() => handleSelect("props")}
            >
              Pops
            </TabButton>
            <TabButton
              isActive={TabContent === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
        </section>

        {!TabContent ? (
          <p>Select an example</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[TabContent].title}</h3>
            <p>{EXAMPLES[TabContent].description}</p>
            <pre>
              <code>{EXAMPLES[TabContent].code}</code>
            </pre>
          </div>
        )}
        {/*/ if you wanna remove : null you can use the and &&*/}
      </main>
    </>
  );
}

export default App;

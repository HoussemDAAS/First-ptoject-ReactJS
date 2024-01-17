import React from 'react'
import { useState } from "react";
import TabButton from "../TabButton/TabButton";
import { EXAMPLES } from "../../../data";
import Section from '../Section/Section';
function Exemples() {



    const [TabContent, setTabContent] = useState(null);

    function handleSelect(Selected) {
      setTabContent(Selected);
      console.log(TabContent);
    }
  return (
    <>
    <Section id="examples" title={"Exemples"} content={
      <>  <menu>
        <TabButton 
       buttonContainer="li"
          isActive={TabContent === "components"}
          onSelect={() => handleSelect("components")}
        >
          Comonents
        </TabButton>
        <TabButton
        buttonContainer="li"
          isActive={TabContent === "jsx"} 
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
         buttonContainer="li"
          isActive={TabContent === "props"}
          onSelect={() => handleSelect("props")}
        >
          Pops
        </TabButton>
        <TabButton
        buttonContainer="li"
          isActive={TabContent === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
        
      </menu>
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
      )} </>
    }/>
  
    
    </>
  )
}

export default Exemples

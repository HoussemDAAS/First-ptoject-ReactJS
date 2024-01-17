import Concepts from "./assets/Components/Concepts/Concepts";
import Exemples from "./assets/Components/Exemples/Exemples";
import Header from "./assets/Components/Header/Header";


function App() {
 
  return (
    <>
      <Header />
      <main>
        <Concepts />
      <Exemples />
      
       {/*/ if you wanna remove : null you can use the and &&*/}
      </main>
    </>
  );
}

export default App;

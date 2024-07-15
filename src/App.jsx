import { Header } from "./components/Header/Header.jsx";
import { Examples } from "./features/Examples.jsx";
import { CoreConcepts } from "./features/CoreConcepts.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
};
export default App;

import { Header } from "./components/Header/Header.jsx";
import { Examples } from "./features/Examples.jsx";
import { CoreConcepts } from "./features/CoreConcepts.jsx";

const App = () => {
  // picked out the features => CoreConcepts and Examples
  // created new files and condensed app jsx significantly
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

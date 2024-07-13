import { useState } from "react";

import { CoreConcept } from "./components/CoreConcept/CoreConcept.jsx";
import { Header } from "./components/Header/Header.jsx";
import { TabButton } from "./components/TabButton/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";

const App = () => {
  const [tab, setTab] = useState("components");

  const handleClick = (selectedTab) => {
    setTab(selectedTab);
    // will always show previous state value
    // bc app has to execute again to see the next value
    // console.log("test", tab);
  };
  // will show updated state
  // console.log(tab);

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((cc) => (
              <CoreConcept
                key={cc.id}
                title={cc.title}
                description={cc.description}
                img={cc.image}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onclick={() => handleClick("components")}>
              Components
            </TabButton>
            <TabButton onclick={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton onclick={() => handleClick("props")}>Props</TabButton>
            <TabButton onclick={() => handleClick("state")}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[tab].title}</h3>
            <p>{EXAMPLES[tab].description}</p>
            <pre>
              <code>{EXAMPLES[tab].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
};
export default App;

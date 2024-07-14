import { useState } from "react";

import { CoreConcept } from "./components/CoreConcept/CoreConcept.jsx";
import { Header } from "./components/Header/Header.jsx";
import { TabButton } from "./components/TabButton/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";

const App = () => {
  const [tab, setTab] = useState(null);

  const handleClick = (selectedTab) => {
    setTab(selectedTab);
  };

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
            <TabButton
              isSelectedTab={tab === "components"}
              onclick={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelectedTab={tab === "jsx"}
              onclick={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              tabSelected={tab === "props"}
              onclick={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              tabSelected={tab === "state"}
              onclick={() => handleClick("state")}
            >
              State
            </TabButton>
          </menu>
          <div id="tab-content">
            {tab !== null ? (
              <>
                <h3>{EXAMPLES[tab].title}</h3>
                <p>{EXAMPLES[tab].description}</p>
                <pre>
                  <code>{EXAMPLES[tab].code}</code>
                </pre>
              </>
            ) : (
              "Please Select A Topic"
            )}
          </div>
        </section>
      </main>
    </div>
  );
};
export default App;

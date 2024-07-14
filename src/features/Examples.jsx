import { useState } from "react";

import { TabButton } from "../components/TabButton/TabButton.jsx";
import { Section } from "../components/Section.jsx";
import { EXAMPLES } from "../data.js";

export const Examples = () => {
  const [tab, setTab] = useState(null);

  const handleClick = (selectedTab) => {
    setTab(selectedTab);
  };
  return (
    <Section title="Examples" id="examples">
      <menu>
        <TabButton
          isSelectedTab={tab === "components"}
          onClick={() => handleClick("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelectedTab={tab === "jsx"}
          onClick={() => handleClick("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelectedTab={tab === "props"}
          onClick={() => handleClick("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelectedTab={tab === "state"}
          onClick={() => handleClick("state")}
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
    </Section>
  );
};

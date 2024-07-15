import { useState } from "react";

import { TabsMenu } from "./TabsMenu";
import { Tab } from "./Tab";
import { TabContent } from "./TabContent";

export const JBNCustomTabs = ({ tabTitles, data }) => {
  const [activeTab, setActiveTab] = useState(null);
  const [isDirty, setDirty] = useState(false);

  const handleClick = (selectedTab) => {
    setActiveTab(selectedTab);
    setDirty(true);
  };
  console.log("isDirty", isDirty);

  return (
    <>
      <TabsMenu
        buttons={
          <>
            {tabTitles.map((title) => (
              <Tab
                key={title}
                isSelectedTab={title === activeTab}
                tab={title}
                onClick={() => handleClick(title)}
              >
                {title}
              </Tab>
            ))}
          </>
        }
      />
      {/* <Tab
          isSelectedTab={title === tabTitles}
          onClick={() => handleClick("jsx")}
        >
          JSX
        </Tab>
        <Tab
          isSelectedTab={tab === "props"}
          onClick={() => handleClick("props")}
        >
          Props
        </Tab>
        <Tab
          isSelectedTab={tab === "state"}
          onClick={() => handleClick("state")}
        >
          State
        </Tab> */}

      <TabContent isDirty={isDirty} data={data} activeTab={activeTab} />
    </>
  );
};

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
      <TabContent isDirty={isDirty} data={data} activeTab={activeTab} />
    </>
  );
};

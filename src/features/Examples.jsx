import { Section } from "../components/Section.jsx";
import { JBNCustomTabs } from "../components/Tabs/JBNCustomTabs.jsx";

import { EXAMPLES } from "../data.js";

export const Examples = () => {
  //make sure tabTitles matches the data or wont work
  return (
    <Section title="Custom Tab Component Example" id="examples">
      <JBNCustomTabs
        data={EXAMPLES}
        tabTitles={["components", "jsx", "props", "state", "state2forTEST"]}
      />
    </Section>
  );
};

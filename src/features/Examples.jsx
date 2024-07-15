import { Section } from "../components/Section.jsx";
import { JBNCustomTabs } from "../components/CustomTabs/JBNCustomTabs.jsx";

import { EXAMPLES } from "../data.js";

export const Examples = () => {
  return (
    <Section title="Custom Tab Component Example" id="examples">
      <JBNCustomTabs
        data={EXAMPLES}
        tabTitles={["components", "jsx", "props", "state"]}
      />
    </Section>
  );
};

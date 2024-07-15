import { CoreConcept } from "../components/CoreConcept/CoreConcept.jsx";
import { Section } from "../components/Section.jsx";
import { CORE_CONCEPTS } from "../data.js";

export const CoreConcepts = () => {
  return (
    <Section title="Core Concepts" id="core-concepts">
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
    </Section>
  );
};

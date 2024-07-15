import { CoreConcept } from "../components/CoreConcept/CoreConcept.jsx";
import { Section } from "../components/Section.jsx";
import { CORE_CONCEPTS } from "../data.js";

export const CoreConcepts = () => {
  return (
    <Section title="Core Concepts" id="core-concepts">
      {/* <h2>Core Concepts</h2> 
      
      created Section Component bc TITLE/h2 is reused on the page
      and in multiple components 

      This is how to correctly make a custome wrapper in React
      
      */}
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

import { CORE_CONCEPTS } from "../../data";
import Section from "../section/Section";
import { CoreConcept } from "./CoreConcept";

export function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <section>
        <ul>
          {CORE_CONCEPTS.map((item) => (
            <li key={item.title}>
              <CoreConcept {...item} />
            </li>
          ))}
        </ul>
      </section>
    </Section>
  );
}

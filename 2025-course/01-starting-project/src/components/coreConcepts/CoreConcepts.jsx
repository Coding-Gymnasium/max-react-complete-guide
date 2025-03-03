import { CORE_CONCEPTS } from "../../data";
import { CoreConcept } from "./CoreConcept";

export function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <li key={item.title}>
            <CoreConcept {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
}

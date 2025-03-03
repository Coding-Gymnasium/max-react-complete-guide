import { CORE_CONCEPTS } from "../../data";
import Section from "../section/Section";
import { CoreConcept } from "./CoreConcept";

export function CoreConcepts() {
  let content = (
    <ul>
      {CORE_CONCEPTS.map((item) => (
        <li key={item.title}>
          <CoreConcept {...item} />
        </li>
      ))}
    </ul>
  );
  return <Section id="core-concepts" title="Core Concepts" content={content} />;
}

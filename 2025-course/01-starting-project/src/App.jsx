import { CORE_CONCEPTS } from "./data";
import Header from "./components/header/Header";
import { CoreConcept } from "./components/coreConcepts/CoreConcept";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <li key={item.id}>
                <CoreConcept {...item} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

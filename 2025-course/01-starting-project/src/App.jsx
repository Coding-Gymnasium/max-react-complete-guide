import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import { CoreConcept } from "./components/CoreConcept";

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

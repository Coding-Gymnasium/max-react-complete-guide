import reactImage from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];
const max = reactDescriptions.length - 1;

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(max)];
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept({ title, description, image }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

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
                <CoreConcept
                  {...item}
                  // title={item.title}
                  // description={item.description}
                  // image={item.image}
                />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

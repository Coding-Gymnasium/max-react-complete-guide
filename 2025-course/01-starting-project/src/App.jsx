import reactImage from "./assets/react-core-concepts.png";
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

function App() {
  return (
    <div>
      <main>
        <Header />
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;

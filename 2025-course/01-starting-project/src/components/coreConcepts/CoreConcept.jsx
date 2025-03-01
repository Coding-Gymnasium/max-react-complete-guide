import "./CoreConcepts.css";
export function CoreConcept({ title, description, image }) {
  return (
    <>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </>
  );
}

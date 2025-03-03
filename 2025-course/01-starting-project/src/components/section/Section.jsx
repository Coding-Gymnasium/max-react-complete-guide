import React from "react";

export default function Section({ id, title, content }) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      <content>{content}</content>
    </section>
  );
}

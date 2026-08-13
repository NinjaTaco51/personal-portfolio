import TechTag from "../TechTag";

function TechStack({ technologies }) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((technology, index) => (
        <TechTag key={`${technology}-${index}`}>
          {technology}
        </TechTag>
      ))}
    </div>
  );
}

export default TechStack;
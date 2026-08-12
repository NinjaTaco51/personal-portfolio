function TechTag({ children }) {
  return (
    <span className="inline-flex border border-border px-3 py-1.5 font-mono text-xs text-text-secondary transition-colors duration-200 hover:border-border-hover hover:text-text-primary">
      {children}
    </span>
  );
}

export default TechTag;
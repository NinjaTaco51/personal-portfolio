function SectionHeader({ number, title }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="font-mono text-xs uppercase tracking-wider text-accent">
        {number} / {title}
      </span>

      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

export default SectionHeader;
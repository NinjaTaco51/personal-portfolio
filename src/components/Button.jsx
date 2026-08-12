import { Link } from "react-router-dom";

function Button({
  children,
  to,
  href,
  external = false,
}) {
  const className =
    "inline-flex items-center gap-3 border border-border px-5 py-3 font-mono text-xs uppercase tracking-wider text-text-primary transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent";

  if (href) {
    return (
      <a
        href={href}
        className={className}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default Button; 
export default function Button({ children, href, bgColor }) {
  return (
    <a
      href={href}
      className="btn fade-in delay-4"
      style={{ backgroundColor: bgColor }}>
      {children}
    </a>
  );
}

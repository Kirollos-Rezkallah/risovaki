export default function ButtonTarget({ children, href, bgColor }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={"btn"}
      style={{ backgroundColor: bgColor }}>
      {children}
    </a>
  );
}

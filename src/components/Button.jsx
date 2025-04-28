export default function Button({ children, href, bgColor }) {
  return (
    <a href={href} className={"btn"} style={{ backgroundColor: bgColor }}>
      {children}
    </a>
  );
}

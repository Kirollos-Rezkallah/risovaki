export default function ButtonTarget({ children, href, bgColor, ...props }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={"btn"}
      style={{ backgroundColor: bgColor }}
      {...props}>
      {children}
    </a>
  );
}

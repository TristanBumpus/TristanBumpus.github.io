export default function contributor({ name, link }) {
  console.log("S");
  return (
    <a className="by" href={link}>
      {name}
    </a>
  );
}

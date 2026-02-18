export default function button_link({ main_link, link, name }) {
  return (
    <iframe frameBorder="0" src={main_link} width="554" height="169">
      <a href={link}>{name}</a>
    </iframe>
  );
}

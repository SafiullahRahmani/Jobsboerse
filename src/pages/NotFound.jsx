import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div>
      <h2>Seite nicht gefunden!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
        laudantium exercitationem quod. Nobis illum pariatur temporibus
        inventore soluta dolor repellat ipsa aperiam voluptas, corporis
        aspernatur? Illo dolore blanditiis nobis aliquid?
      </p>

      <p>
        Züruck zu <Link to="/">Homepage</Link>
      </p>
    </div>
  );
}

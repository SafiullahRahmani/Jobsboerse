import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Websites Hilfe</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, repellat!
      </p>

      <nav>
        <NavLink to="faq">FAQ lesen</NavLink>
        <NavLink to="contact">Kontaktieren</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

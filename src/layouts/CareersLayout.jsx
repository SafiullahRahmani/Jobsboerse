import { Outlet } from "react-router-dom";
export default function CareersLayout() {
  return (
    <div className="careers-layout">
      <h2>Karrieren</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate fuga
        quos inventore illo, labore odio necessitatibus nihil quod velit,
        doloribus, id voluptatem quam iusto maxime. Ipsum tempora sint minima
        ullam!
      </p>

      <Outlet />
    </div>
  );
}

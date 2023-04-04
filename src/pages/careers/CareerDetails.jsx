import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails() {
  const { id } = useParams();
  const career = useLoaderData();
  return (
    <div className="career-details">
      <h2>Karriere Details für {career.title}</h2>
      <p>Einstiegsgehalt: {career.salary} Euro</p>
      <p>Standort: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae hic
          non ab deserunt dolores ullam sed quae cumque quasi numquam, quidem
          cum accusamus deleniti repellat nam a aperiam et rerum.
        </p>
      </div>
    </div>
  );
}

// loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:8000/careers/" + id);

  if (!res.ok) {
    throw Error("Ihre gesuchte Stelle nicht gefunden");
  }

  return res.json();
};

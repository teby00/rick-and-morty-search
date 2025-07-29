import Rick from "../assets/rick.jpeg";
import Morty from "../assets/morty.png";
import Summer from "../assets/summer.jpeg";
import Beth from "../assets/beth.jpeg";
import { Form } from "@/components/Form";
import { Link } from "wouter";

export function Home() {
  return (
    <div className="flex flex-col justify-center items-center max-w-2xl mx-auto h-[80vh] gap-8">
      <h1 className="text-4xl font-bold">Buscador</h1>
      <Form />

      <div className="flex gap-4">
        {[Rick, Morty, Summer, Beth].map((img, i) => (
          <Link key={i} href={`/character?id=${i + 1}`}>
            <img
              src={img}
              alt={img.split("/").pop()?.split(".")[0]}
              className="w-32 aspect-square rounded-2xl cursor-pointer"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

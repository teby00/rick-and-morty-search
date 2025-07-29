import { Badge } from "@/components/ui/badge";
import type { Character } from "@/types/character";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "wouter";

export function Search() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const [characters, setCharacters] = useState<Character[]>([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then((res) => res.json())
      .then((res) => setCharacters(res.results || []))
      .catch((e) => {
        console.error(e);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [name]);

  if (!name) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">400: Error al manipular la URL</h1>
      </div>
    );
  }

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="animate-spin text-blue-500" />
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">Error al cargar la página</h1>
      </div>
    );

  return (
    <div className="flex flex-col gap-12 max-w-4xl mx-auto py-36 min-h-[80vh]">
      <h1 className="text-3xl font-bold">Resultados para "{name}"</h1>
      {characters && characters?.length < 1 ? (
        <div className="text-xl font-semibold">
          No hay resultados que coincidan
        </div>
      ) : (
        characters?.map((character) => (
          <Link key={character.id} href={`/character?id=${character.id}`}>
            <div className="flex gap-4">
              <img
                className="aspect-square rounded-2xl"
                src={character.image}
                alt=""
              />
              <div className="space-y-4">
                <h1 className="text-4xl font-bold">{character.name}</h1>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xl">
                    {character.gender}
                  </Badge>
                  <Badge variant="outline" className="text-xl">
                    {character.status}
                  </Badge>
                </div>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

import { Badge } from "@/components/ui/badge";
import type { Character } from "@/types/character";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "wouter";

export function Character() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [character, setCharacter] = useState<Character>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then(setCharacter)
      .catch((e) => {
        console.error(e);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (!id) {
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
    <div className="flex gap-12 pt-32 justify-center items-center min-h-[80vh]">
      <div className="space-y-4">
        <img
          className="aspect-square rounded-2xl"
          src={character?.image}
          alt=""
        />
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{character?.name}</h1>
          <div className="flex gap-2">
            <Badge variant="outline" className="text-xl">
              {character?.gender}
            </Badge>
            <Badge variant="outline" className="text-xl">
              {character?.status}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

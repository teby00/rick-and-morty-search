import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

import { useState } from "react";
import { useLocation } from "wouter";

export function Form({ initialValue }: { initialValue?: string }) {
  const [search, setSearch] = useState(initialValue || "");
  const [location, navigate] = useLocation();

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?name=${search}`);
  };
  return (
    <form onSubmit={handelSubmit} className="w-full flex gap-1 items-center">
      <Input
        placeholder="Rick"
        value={search}
        defaultValue={initialValue}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button>Buscar</Button>
    </form>
  );
}

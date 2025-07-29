import Logo from "/logo.png";
import { cn } from "@/lib/utils";
import { Link, useLocation, useSearchParams } from "wouter";
import { Form } from "./Form";

export function Navbar() {
  const [location] = useLocation();
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");

  return (
    <nav className="fixed bg-white flex justify-between items-center w-full h-16 px-20">
      <Link href="/">
        <div className="flex gap-2 items-center">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold">Buscador</h1>
        </div>
      </Link>
      {location !== "/" && (
        <div className="w-3xl">
          <Form initialValue={(location === "/search" && name) || ""} />
        </div>
      )}

      <div className="flex gap-4 items-center">
        <Link
          href="/"
          className={cn("text-xl", location === "/" && "text-blue-500")}
        >
          Inicio
        </Link>
        <Link href="/about" className="text-xl">
          Info
        </Link>
      </div>
    </nav>
  );
}

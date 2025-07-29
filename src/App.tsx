import { Route, Switch } from "wouter";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { Character } from "@/pages/Character";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />

        <Route path="/search" component={Search} />
        <Route path="/character" component={Character} />

        <Route>
          <div className="flex justify-center items-center h-screen">
            <h1 className="text-2xl font-bold">404: No existe esa página</h1>
          </div>
        </Route>
      </Switch>
    </>
  );
}

export default App;

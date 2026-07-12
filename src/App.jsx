import { useState } from "react";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Driver from "./pages/Driver";
import Vehicle from "./pages/Vehicle";
import Trip from "./pages/Trip";
import Maintenance from "./pages/Maintenance";
import Fuel from "./pages/Fuel";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  const [page, setPage] = useState("login");

  switch (page) {
    case "dashboard":
      return <Dashboard setPage={setPage} />;

    case "drivers":
      return <Driver setPage={setPage} />;

    case "vehicles":
      return <Vehicle setPage={setPage} />;

    case "trips":
      return <Trip setPage={setPage} />;

    case "maintenance":
      return <Maintenance setPage={setPage} />;

    case "fuel":
      return <Fuel setPage={setPage} />;

    case "reports":
      return <Reports setPage={setPage} />;

    case "settings":
      return <Settings setPage={setPage} />;

    default:
      return <Login setPage={setPage} />;
  }
}

export default App;
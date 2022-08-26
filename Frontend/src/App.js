import "./App.css";
import MainRoutes from "./Pages/MainRoutes";
import Noinvoicebox from "./Components/Bharat/Noinvoicebox"
import Invoiceedit from "./Components/Bharat/Invoiceedit ";
import Trialbox from "./Components/Bharat/trialbox";
import Homepage1 from "./Pages/Homepage1";
import { DashSidebar } from "./Components/DashSidebar";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div>
      {/* <Trialbox/> */}
      {/* <MainRoutes></MainRoutes> */}
      {/* <Homepage1/> */}
      {/* <DashSidebar/> */}
      <Dashboard></Dashboard>
      {/* <Noinvoicebox/> */}
      {/* <Invoiceedit/> */}
    </div>
  );
}

export default App;

import "./App.css";
import MainRoutes from "./Pages/MainRoutes";
import Noinvoicebox from "./Components/Bharat/Noinvoicebox"
import Invoiceedit from "./Components/Bharat/Invoiceedit ";
import Trialbox from "./Components/Bharat/trialbox";

function App() {
  return (
    <div>
      <Trialbox/>
      {/* <MainRoutes></MainRoutes> */}
      <Noinvoicebox/>
      {/* <Invoiceedit/> */}
    </div>
  );
}

export default App;

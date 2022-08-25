import "./App.css";
import MainRoutes from "./Pages/MainRoutes";
import Noinvoicebox from "./Components/Bharat/Noinvoicebox"
import Invoiceedit from "./Components/Bharat/Invoiceedit ";
import Trialbox from "./Components/Bharat/trialbox";
import Invoicestable from "./Components/Bharat/Invoicestable";

function App() {
  return (
    <div>
      {/* <MainRoutes></MainRoutes> */}

      <Invoicestable/>
    </div>
  );
}

export default App;

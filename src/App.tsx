import { Average } from "./components/Average";
import { Quotes } from "./components/Quotes";
import { Slippage } from "./components/Slippage";

function App() {
  return (
    <>
      <h1 className="p-3 mb-2 bg-success text-white text-center border-bottom">Pluggy Dolar App</h1>

      <Quotes />


      <Average />


      <Slippage />

      <footer className="page-footer font-small bg-success">
        <div className="footer-copyright text-center py-3">© 2021 Copyright:
          <a className="text-white text-decoration-none" href="https://pluggy.ai/en"> Pluggy.ai</a>
        </div>
      </footer>
    </>
  );
}

export default App;

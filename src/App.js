import "./App.css";
import Header from "./containers/Header";
import ProductComponent from "./containers/ProductComponent";
import ProductDetails from "./containers/ProductDetails";
import ProductListing from "./containers/ProductListing";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductListing />
      <ProductComponent />
      <ProductDetails />
    </div>
  );
}

export default App;

import "./App.css";
import Class1 from "./class1";
function App() {
  const fruits = ["Apple", "Orange", "Banana"];

  function forMap(item, index) {
    return (
      <div>
        {index}) {item}
      </div>
    );
  }

  const forMapArrow = (index, item) => {
    return (
      <div>
        {index}) {item}
      </div>
    );
  };

  (function (item, index) {
    return (
      <div>
        {index}) {item}
      </div>
    );
  })();

  // (
  //   (index, item) => {
  //     return <div>{index}) {item}</div>
  //   }
  // )()

  // array_name.map(callbackFunction)

  return (
    <>
      <div className="App">
        <header className="App-header">{fruits.map(forMap)}</header>
      </div>
    </>
  );
}

export default App;

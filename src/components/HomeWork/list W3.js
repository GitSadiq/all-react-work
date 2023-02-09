import './App.css';


function Car(props) {
  return <li>I am a {props.key} {props.car}</li>;
}

function App() {
  const cars = [
    { id: 1, brand: 'Ford' },
    { id: 2, brand: 'BMW' },
    { id: 3, brand: 'Audi' }
  ];
  return (
    <div className="App-header">
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((item) => <Car key={item.id} car={item.brand} />)}
      </ul>
    </div >
  );
}

export default App;

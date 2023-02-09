import './App.css';


function App() {

  function Pro(props) {
    return (
      <>
        {/* <p>We are using pros here <br></br> Name {props.name} Age {props.age}</p> */}
        <p>We are using pros here for object<br></br> Name {props.PickObj.Name} Age {props.PickObj.Age}</p> {/*for Object*/}
      </>
    )
  }

  const proObj = { Name: "sadiq", Age: 25 }

  return (
    <div className="App-header">
      <h1>Learn props</h1>
      {/* <Pro name="sadiq" age="24" /> */}
      <Pro PickObj={proObj} />{ /*For object */}
      <map>js</map>
    </div >
  );
}

export default App;

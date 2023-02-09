import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Rizwan'
  const number = 18
  const fruits = ['Apple', 'Orange', 'Banana']
  const userData = {
    name: 'Nabeel',
    age: '22',
    profilePic: ""
  }
  // html syntax style='color:blue;'
  //react syntax style={{backgroundColor: 'blue'}}

  //html class
  //react className
  return <>
    <div className="App">
      <header className="App-header">
        <div style={{ backgroundColor: 'blue', color: 'white' }} >
          <div>
            {name}

          </div>
          <div>
            {number}
          </div>
          <div>
            {fruits}
          </div>
          <div>
            {fruits.map((item, index) => {
              console.log(index)
              return <h3>
                {item + 1}
              </h3>
            })}
          </div>
          {/* () => { let a = "nabee"} */}
          <div>
            {userData.age}
            {userData.name}
          </div>
        </div>
      </header>
    </div>
  </>
}

export default App;

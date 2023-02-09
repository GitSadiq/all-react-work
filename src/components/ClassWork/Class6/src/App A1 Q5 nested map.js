import './App.css';
import { useState } from 'react'

//Hooks
//React ke built in functions
//Use state Rerenders virtural DOM
function App() {

  const complex = [{ company: 'XYZ', jobs: ['JavaScript', 'React'] },
  { company: 'ABC', jobs: ['Angular', 'Ionic'] }] //Show these in a Table

  return <>
    <div className="App">
      <header className="App-header">
        <table>
          <tr>
            <td>company</td>
            <td>jobs
            </td>
            <td>new col</td>
          </tr>
          {
            complex.map((item, index) => {
              console.log(index,item)
              return<tr>
                <td>{item.company}</td>
                {/* <td><p>{item.jobs[0]}</p>, {item.jobs[1]}</td> */}
                {/* <td>{item.jobs}</td> */}
                  {item.jobs.map((item)=> {
                    console.log("nested map", item)
                    return<td>
                    {item}
                    </td>
                  })}
                
              </tr>
            })
          }

        </table>
      </header>
    </div>
  </>
}
export default App;

//Types of components
//1. Functional Component
//2. Class component

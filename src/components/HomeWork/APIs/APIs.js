import { useEffect, useState } from "react";
import "./API.css";
import axios from "axios";
import useFetch from "react-fetch-hook";

function App() {
  const [state, setState] = useState();

  // 1. {Fetch Data from API using fetch}
  // I.console repeatation seen due setstate update
  // fetch("https://my-json-server.typicode.com/GitSadiq/secondapi/posts")
  //   .then((response) => response.json())
  //   .then((result) => setState(result));
  // console.log(state);

  // II. By using useeffect solve the problem the fetch only run one time
  // const fetchData = () => {
  //   fetch("https://my-json-server.typicode.com/GitSadiq/secondapi/posts")
  //     .then((response) => response.json())
  //     .catch((error) => console.log("get error", error))
  //     .finally(() => console.log("always run"))
  //     .then((result) => setState(result));
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // III. short sytnax of above
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((result) => setState(result));
  // }, []);

  // 2. {Fetch Data from API using axios}
  // need to install axios npm i axios
  // same as fetch, data no need to change in json but data in 
  // object which have mulitpes keys e.g. data, status etc reponse come in data
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((result) => setState(result.data));
  }, []);

  // 3. {Fetch Data from API using async await syntax}
  const fetchData = async () => {
    try {
      const resp = await axios.get("https://my-json-server.typicode.com/GitSadiq/secondapi/posts")
      setState(resp.data)
      // await axios.get("https://jsonplaceholder.typicode.com/posts")
      // .then((result) => { setState(result.data) })
    }
    catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])


  return (
    <>
      <div className="App-header">
        <h1>FaceBook Post</h1>
        {state?.map((item, index) => {
          return (
            <div key={index} className="post">
              <h3>{item.UserName}</h3>
              <p>{item.body}</p>
              <div className="image-div">
                <img
                  alt=""
                  src={item.url}
                />
              </div>
              <div className="comments-section">
                <div className="like">like</div>
                <div className="like">comments</div>
                <div className="like">Share</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;

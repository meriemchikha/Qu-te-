import { useEffect, useState } from "react";
import "./App.css";
import DisplayEmployee from "./DisplayEmployee";
function App() {
  const [employee, setEmployee] = useState({});
  const [show, setShow] = useState(false);
  const getEmployee = () => {
    // Consommer L'API random user
    // cas avec fetch
    fetch("https://randomuser.me/api?nat=en")
      .then((res) => res.json())
      .then((res) => {
        // destructuration d'un array
        // const array = ["red","blue", "yellow"]
        // array[0]
        // const [monPremierElementDeArray] = array
        const [data] = res.results;
        setEmployee(data);
      })
      .catch((err) => console.log("err", err));
  };

  useEffect(() => {
    getEmployee();
  }, [show]);

  return (
    <>
      <DisplayEmployee employee={employee} />
      <button type="button" onClick={() => setShow(!show)}>
        Get employee
      </button>
    </>
  );
}

export default App;

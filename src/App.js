import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [houses, setHouses] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SERVER_URI)
      .then((houses) => {
        setHouses(houses.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      {houses.map((house) => (
        <div>
          {house._id} - {house.name}
        </div>
      ))}
    </div>
  );
}

export default App;

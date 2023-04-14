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
      <h1>my name is feras wane</h1>
      <h2>very small eggs and large ass</h2>
      <img src="https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.6435-9/50616258_1174612056045609_928893175769071616_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=nnG5L_wHb10AX-x_-pD&_nc_ht=scontent.ftlv6-1.fna&oh=00_AfAMMPTk5mIpxvlacWVEYq7BHKkC87dXBN1VFXoVR8XRmg&oe=64609795" />
    </div>
  );
}

export default App;

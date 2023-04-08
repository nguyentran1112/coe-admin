
import { Button } from "@mui/material";
import Map from "../components/Map";
import { useEffect, useState } from "react";
import img from "../constants/index";
export default function MapPage() {
  const [coords, setCorrds] = useState({
    latitude: "",
    longitude: "",
  });
  const [display_name, setName] = useState("");
  const [address, setAddress] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      getCurrentCityName,
      error,
      options
    );
  }, []);

  function error(err) {
    if (
      err.code === 1 || //if user denied accessing the location
      err.code === 2 || //for any internal errors
      err.code === 3 //error due to timeout
    ) {
      alert(err.message);
    } else {
      alert(err);
    }
  }

  const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
  };

  //get current location when the app loads for the first time
  function getCurrentCityName(position) {
    setCorrds({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
    console.log(coords.latitude,coords.longitude);

    let url =
      "https://nominatim.openstreetmap.org/reverse?format=jsonv2" +
      "&lat=" +
      coords.latitude +
      "&lon=" +
      coords.longitude;

    fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "https://o2cj2q.csb.app",
      },
    })
      .then((response) => {
        response.json()
        //console.log(response.json)
      })
      
      .then((data) => setName(data.display_name));
  }

  //get input from text fields and append it to address object
  function update(field) {
    return (e) => {
      const value = e.currentTarget.value;
      setAddress((address) => ({ ...address, [field]: value }));
    };
  }

  //send the data on the state to the API
  function getData(url) {
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "https://o2cj2q.csb.app",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        //console.log(data);
        setName(data[0].display_name);
        setCorrds({
          latitude: data[0].lat,
          longitude: data[0].lon,
        });
      })
      .catch((e) => {
        console.log(e);
        error("Please Check your input");
      });
  }

  //set form input( data entered ) to state on form submit
  function submitHandler(e) {
    e.preventDefault();
    console.log(address);

    let url = `https://nominatim.openstreetmap.org/search?
    street=${address.street}
    &city=${address.city}
    &state=${address.state}
    &country=${address.country}
    &postalcode=${address.postalcode}&format=json`;

    getData(url);
  }

  return (
    <div className="App">
      <img
              alt="logo"
              src={img.logoCOE}
              style={{ width: 50, height: 50 }}
              loading="lazy"
            />
      <section className="form-container">
        <form>
          <label
            style={{
              color: "#1976D2",
              width: "150px",
            }}
          >
            Tên đường:
          </label>
          <input
            value={address.street}
            placeholder="Tên đường"
            onChange={update("street")}
            id="street"
            type="text"
          />
          <label style={{
              color: "#1976D2",
            }}>Thành phố/Tỉnh</label>
          <input
            style={{ width: "100px", padding: "2px", margin: "5px" }}
            placeholder="Thành phố/Tỉnh"
            type="text"
            value={address.city}
            onChange={update("city")}
            id="city"
          />
          <br />
          <label style={{
              color: "#1976D2",
            }}>Quận/Huyện:</label>
          <input
            style={{ width: "100px", padding: "2px", margin: "5px" }}
            placeholder="Quận/Huyện"
            type="text"
            value={address.state}
            onChange={update("state")}
            id="state"
          />
          <label
          style={{
            color: "#1976D2",
          }}>Mã code:</label>
          <input
            style={{ width: "100px", padding: "2px", margin: "5px" }}
            placeholder="91423"
            type="text"
            value={address.postalcode}
            onChange={update("postalcode")}
            id="postalcode"
          />
          <br />
          <label
          style={{
            color: "#1976D2"
          }}>Quốc gia:</label>
          <input
            style={{ width: "100px", padding: "2px", margin: "5px" }}
            placeholder="Việt Nam"
            type="text"
            value={address.country}
            onChange={update("country")}
            id="country"
          />
          <br />
          <Button
          sx={{ mt: 3, boxShadow: "1px 2px 9px #1976D2" }}
          variant="contained"
            style={{
              width: "100px",
              margin: "10px",
            }}
            onClick={(e) => submitHandler(e)}
          >
            Tìm kiếm
          </Button>
        </form>
      </section>
      <Map coords={coords} dispaly_name={display_name} />
    </div>
  );
}

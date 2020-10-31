import React, { useState, useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import axios from "axios";
import apiKey from "../config";

//Componenets imports
import Form from "./Form";
import Nav from "./Nav";
import PhotoList from "./PhotoList";
import PageNotFound from "./PageNotFound";

function App() {
  const [search, setSearch] = useState("spring");
  const [photos, setPhotos] = useState([]);
  const [isLoading, setLoadStatus] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((res) => {
        setPhotos(res.data.photos.photo);
        setLoadStatus(false);
      })
      .catch((err) => console.log("error fetching data from flicker", err));
    return () => {
      setLoadStatus(true); //component did unmount
    };
  }, [search]); //Compoenent did update

  return (
    <div className="container">
      <Form handle={setSearch} />
      <Nav />
      {!isLoading ? (
        <>
          <Switch>
            <Route
              exact
              path={["/spring", "/summer", "/autumn", "/winter"]}
              render={() => <PhotoList photos={photos} handle={setSearch} />}
            />
            <Route
              exact
              path="/search/:search"
              render={() => <PhotoList photos={photos} handle={setSearch} />}
            />
            <Redirect exact path="/" to="/spring" />
            <Route component={PageNotFound} />
          </Switch>
        </>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
}

export default App;

import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Photo from "./Photo";
import NotFound from "./NotFound";

function PhotoList({ match, photos, handle }) {
  useEffect(() => {
    let seasonParam = match.url;
    if (seasonParam === "/spring") {
      handle("spring");
    } else if (seasonParam === "/summer") {
      handle("summer");
    } else if (seasonParam === "/autumn") {
      handle("autumn");
    } else if (seasonParam === "/winter") {
      handle("winter");
    } else if (match.params.search) {
      handle(match.params.search);
    }
  });

  let pics = photos.map((x) => (
    <Photo
      src={`https://live.staticflickr.com/${x.server}/${x.id}_${x.secret}.jpg`}
      key={x.id}
    />
  ));

  return (
    <div className="photo-container">
      {photos.length === 0 ? (
        <NotFound />
      ) : (
        <>
          <h2>Results</h2>
          <ul> {pics} </ul>
        </>
      )}
    </div>
  );
}

export default withRouter(PhotoList);

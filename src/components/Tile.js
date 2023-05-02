import React, { useState } from 'react';

function Tile({ hogs, sort }) {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedHog, setSelectedHog] = useState(null);

  function handleClick(hog) {
    setShowDetails(true);
    setSelectedHog(hog);
  }

  function compareByName(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    }
    return 0;
  }

  function compareByWeight(a, b) {
    return a.weight - b.weight;
  }

  function sortHogs(hogs, sort) {
    if (sort === 'name') {
      return hogs.sort(compareByName);
    } else if (sort === 'weight') {
      return hogs.sort(compareByWeight);
    } else {
      return hogs;
    }
  }

  const sortedHogs = sortHogs(hogs, sort);

  const hogCards = sortedHogs.map((hog) => (
    <li
      key={hog.name}
      className="ui six wide column pigTile minPigTile maxPigTile"
      onClick={() => handleClick(hog)}
    >
      <h3>{hog.name}</h3>
      <img src={hog.image} alt={hog.name} />
      {selectedHog === hog && (
        <>
          <p className="hoggyText">{selectedHog.specialty}</p>
          <p className="hoggyText">weight: {selectedHog.weight}lbs</p>
          <p className="hoggyText">
            <span className="achievementText">
              {selectedHog['highest medal achieved']}
            </span>{' '}
            medalist
          </p>
        </>
      )}
    </li>
  ));

  return <ul className="ui grid container">{hogCards}</ul>;
}

export default Tile;

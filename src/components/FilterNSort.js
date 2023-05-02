import React from 'react'

function FilterNSort({ setGreased, greased, setSort, sort }) {

function handleChecked() {
    setGreased(!greased)
}

function handleSort(e) {
    setSort(e.target.value)
}

  return (
    <div>
        <label for="greased">Greased: </label>
        <input type="checkbox" value="greased"  checked={greased} onClick={handleChecked}/>
        <label for="sort">Sort By: </label>
        <select type="sort" onChange={handleSort}>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
        </select>
    </div>
  )
}

export default FilterNSort
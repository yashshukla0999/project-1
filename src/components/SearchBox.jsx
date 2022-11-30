import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './SearchBox.css';


function SearchBox() {
    
const options = [
   'Search with Search Bar', 'one', 'two', 'three', 'four'
  ];
  const defaultOption = options[0];
  return (
    <div className='searchDiv'>

        {/* search header */}
        <div className="searchHeader">
            <h1>Search properties to rent</h1>
            <Dropdown className='searchDropdown' options={options} value={defaultOption} />
        </div>

        {/* search box holder */}
        <div className="searchHolder">

            <div className="Box">
                <span>Location</span>
                <h4>New York, USA</h4>
            </div>

            <div className="Box">
                <span>When</span>
                <h4>Select Move-in Date</h4>
            </div>

            <div className="Box">
                <span>Price</span>
                <h4>$500 - $2,500</h4>
            </div>

            <div className="Box">
                <span>Property Type</span>
                <h4>Houses</h4>
            </div>

            <button className='purple'><a href="#">Search</a></button>
        </div>
    </div>
  )
}

export default SearchBox
import React, {useState, useEffect} from 'react'
import TextField from '@mui/material/TextField';
var data = require("../data.json");



const SmartSearch = () => {
    

    // const people = [
    //     "bob",
    //     "jen",
    //     "dev",
    //     "ajit",
    //     "doe",
    //     "shakti",
    //     "akash",
    //     "arpit",
    // ]
    
    const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };


  return (
    <div>
      <div >
        <TextField 
                id="smart-search"
                label="search"
                variant="outlined"
                placeholder="Search places"
                fullWidth
                value={value} 
                onChange={onChange}
    
        />
         <div className="dropdown">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.full_name.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0,5)
            .map((item) => (
              <div
                onClick={() => onSearch(item.full_name)}
                className="dropdown-row"
                key={item.full_name}
              >
                {item.full_name}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}



export default SmartSearch

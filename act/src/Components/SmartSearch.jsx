import React, {useState, useEffect} from 'react'
import TextField from '@mui/material/TextField';
var data = require("../data.json");
var data2 = require("../db.json");




const SmartSearch = () => {
<<<<<<< HEAD
  const [searITemss,setSearchItems] = useState([{full_name:""}])
  // const [searITemss,setSearchItems] = useState([{full_name:""}])
  const stateName  = JSON.parse(localStorage.getItem("statesName"))

  console.log('data2[stateName]', data2[stateName]);
=======
    
>>>>>>> 9ce1361726bdecc700e2c4e1e3cc8c481bcba391

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
<<<<<<< HEAD
    
=======
    const stateName  = JSON.parse(localStorage.getItem("statesName")
    
    )
>>>>>>> 9ce1361726bdecc700e2c4e1e3cc8c481bcba391
    console.log("selected-city",stateName)

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
        
<<<<<<< HEAD
          {data2[stateName]?.filter((item) => {
=======
          {data
            .filter((item) => {
>>>>>>> 9ce1361726bdecc700e2c4e1e3cc8c481bcba391
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

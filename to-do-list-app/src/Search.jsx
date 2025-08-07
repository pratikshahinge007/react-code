import React, { useState, useEffect } from 'react';
import debounce from 'lodash'

function Search() {
  // States to store API data, filtered data, search term, loading, and error
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dataNumbers = [1,2,3,4,5];

  const filteredNumbers = dataNumbers.filter((item,index) => item % 2 === 0);
  console.log("filteredNumbers++", filteredNumbers)

  const reduceData = dataNumbers.reduce((acc,data) => {
    return acc + data;
  })

  console.log("reduceData++", reduceData)

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API endpoint

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();  // Parse the JSON data
      })
      .then(data => {
        setData(data);  // Store all users in the state
        setFilteredData(data);  // Initialize filtered data with all users
        setLoading(false);  // Data is loaded, set loading to false
      })
      .catch(error => {
        setError(error);  // Set error if something goes wrong
        setLoading(false);  // Set loading to false in case of error
      });
  },[]);  // Empty dependency array means it only runs once

  // Handle the search functionality
  const handleSearch = debounce((event) => {
    const query = event.target.value;
    setSearchTerm(query);

    if (query === '') {
      setFilteredData(data);  // If search is empty, display all users
    } else {
      const filtered = data.filter(user => 
        user.username.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);  // Update filtered data
    }
  },500);

  return (
    <div className="App">
      <h1>User List</h1>

      {loading && <p>Loading...</p>} {/* Show loading state */}
      {error && <p>Error: {error.message}</p>} {/* Show error if any */}

      <input
        type="text"
        placeholder="Search by username"
        value={searchTerm}
        onChange={handleSearch}
      />

      <div>
        {filteredData.map(user => (
          <div key={user.id}>
            <h3>{user.name} ({user.username})</h3>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;

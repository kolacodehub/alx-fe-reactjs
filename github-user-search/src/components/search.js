import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  // 1. State for the input field
  const [username, setUsername] = useState("");

  // 2. States for API handling
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // 3. Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Basic validation: Don't search if input is empty
    if (!username.trim()) return;

    // Reset UI states before starting
    setLoading(true);
    setError(false);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data); // Success: Store data
    } catch (err) {
      setError(true); // Failure: Trigger error message
      console.log(err);
    } finally {
      setLoading(false); // Cleanup: Hide loading spinner
    }
    
  };

  return (
    <div className="search-container">
      {/* Search Input Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Results Display Areajjj */}
      <div className="results-section">
        {/* State: Loading */}
        {loading && <p>Loading...</p>}

        {/* State: Error */}
        {error && <p>Looks like we cant find the user</p>}

        {/* State: Success */}
        {userData && !loading && !error && (
          <div className="user-card">
            <img
              src={userData.avatar_url}
              alt={`${userData.login} avatar`}
              width="100"
              style={{ borderRadius: "50%" }}
            />
            <h3>{userData.name || userData.login}</h3>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;

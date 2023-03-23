/* eslint-disable */

import React, { useState, useEffect } from "react";

const category = 'funny';
const url = "https://api.api-ninjas.com/v1/quotes?category=" + category;
const key = "8d3AEu5Zw1oN3/7ZcRczQw==Pttifja0qKZnwTuq";


function Quote() {

// state for quote
  const [quote, setQuote] = useState(""); 
// state for loading 
  const [loading, setLoading] = useState(true);
// state for error  
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
        setLoading(true);
        try {
            const response = await fetch(
                url,
                {
                headers: {
                    'X-Api-Key': key,
                },
                }
            );
            const data = await response.json();
            setQuote(data[0].quote);
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div id="loading">Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div id="quote-container">
      <h1>Random funny quote:</h1>
      <h2 id="quote">{quote}</h2>
    </div>
  );
}

export default Quote;

import { useState, useEffect } from "react";

// function SearchText({ searchText, setSearchText }) {
function SearchText({ setSearchText }) {
  const [input, setInput] = useState("");
  // const handleChange = (e) => setSearchText(e.target.value);

  useEffect(() => {
    const timeoutID = setTimeout(() => setSearchText(input), 1000);
    // const timeoutID = setTimeout(() => console.log(input), 3000);
    return () => clearTimeout(timeoutID);
  }, [input, setSearchText]); 
  // }, [input]); //same

  const handleChange = (e) => {
    setInput(e.target.value);

  };

  return (
    <div className="input-group">
      <input
        type="text"
        // value={searchText}
        value={input}
        onChange={handleChange}
        className="form-control rounded-0"
      />
      <button
        onClick={() => setInput("")}
        className="btn btn-secondary rounded-0"
      >
        <i className="fas fa-times" />
      </button>
    </div>
  );
}

export default SearchText;

import React, { useState } from "react";
import "./styles.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Wordc() {
  const [wordCount, setWordCount] = useState(0);

  const handleTextareaChange = (event) => {
    const text = event.target.value;
    const words = text.trim().split(/\s+/);
    if (text === "") {
      setWordCount(0);
    } else {
      setWordCount(words.length);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row" id="row1">
        <div className="jumbotron p-3">
          <h2 className="text-center">Responsive Paragraph Word Counter</h2>

          <textarea
            id="text"
            rows="6"
            className="form-control"
            onChange={handleTextareaChange}
          ></textarea>
        </div>

        <div className="row">
          <div className="col" id="col1">
            Word Count: <span id="wordCount">{wordCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wordc;

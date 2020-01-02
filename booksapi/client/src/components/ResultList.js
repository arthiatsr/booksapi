import React from "react";
import { ul } from 'react-bootstrap';
import { li } from 'react-bootstrap';
import { p } from 'react-bootstrap';
import { div } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const ResultList = props => (
  <div className="panel panel-default">
    <div className="panel-heading">
        <h3 className="panel-title">Result</h3>
    </div>
    <div className="panel-body">
      <ul className="list-group">
        {props.results.map(result => (
          <li className="list-group-item" key={result.id}>
            <h3>Headline:{result.headline.main}</h3>
            <p>Publication Date:{result.pub_date}</p>
            <p><a href={result.web_url}>More</a></p>
            <button
                onClick={handleSaveSubmit}
                className="btn btn-success mt-3"
                >
                Save Article
                </button>
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
  
  export default ResultList;
import React from "react";
import { form } from 'react-bootstrap';
import { button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Search = props => (    
<div className="panel panel-default">
    <div className="panel-heading">
        <h3 className="panel-title">Search</h3>
    </div>
    <div className="panel-body">
        <form>
            <div className="form-group">
                <label htmlFor="topic">Topic:</label>
                <input
                onChange={props.handleInputChange}
                value={props.topic}
                name="topic"
                type="text"
                className="form-control"
                placeholder="topic"
                id="topic"
                />
                <label htmlFor="startyear">Start Year in yyyymmdd Format:</label>
                <input
                onChange={props.handleInputChange}
                value={props.startyear}
                name="startyear"
                type="text"
                className="form-control"
                id="startyear"
                />
                <label htmlFor="endyear">End Year in yyyymmdd Format:</label>
                <input
                onChange={props.handleInputChange}
                value={props.endyear}
                name="endyear"
                type="text"
                className="form-control"
                id="endyear"
                />
                <button
                onClick={props.handleFormSubmit}
                className="btn btn-primary mt-3"
                >
                Search
                </button>
            </div>
        </form>
    </div>
</div>
);

export default Search;
    
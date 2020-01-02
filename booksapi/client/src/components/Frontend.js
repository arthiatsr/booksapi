import React, { Component } from "react";
import Search from "./Search";
import ResultList from "./ResultList";
import API from "../utils/API";
import 'bootstrap/dist/css/bootstrap.min.css';
import { div } from 'react-bootstrap';

class Frontend extends Component {
    state = {
      topic: "",
      startyear: "",
      endyear: "",
      results: []
    };

    searchArticle = query => {
        API.search(query)
        .then(res => this.setState({results: res.data.response.docs, output: console.log(res)}))
        .catch(err => console.log(err));
      };
    
      handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
      };
    
    
      handleFormSubmit = event => {
        event.preventDefault();
        let queryParm = this.state.topic + "&facet_fields=day_of_week&facet=true&begin_date="+ this.state.startyear+"&end_date="+this.state.endyear;
        console.log("queryParam: ",queryParm);
        this.searchArticle(queryParm);
    
      };

      render() {
        return (
          <div>
            <Search
              topic={this.state.topic}
              startdate={this.state.startdate}
              enddate={this.state.enddate}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
            <ResultList results={this.state.results} />
          </div>
        );
      }

}

export default Frontend;
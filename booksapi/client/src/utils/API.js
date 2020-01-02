import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=";
const APIKEY = "&api-key=j9Zu2vmg7a3jpPvgXRbGKZTucVErN8O1";

export default {
    search: function(query){
        return axios.get(BASEURL + query + APIKEY);
    },
    // Saves a book to the database
    saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};


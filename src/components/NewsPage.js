import React, { Component } from "react";
import HeaderNews from "./HeaderNews";
import "../NewsPage.css";
class NewsPage extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=baa351b96cbf41aebb9eca53577868c8"
    )
      .then((Response) => Response.json())
      .then((json) => {
        this.setState({ data: json.articles });
        console.log(this.state.data);
      });
  }

  render() {
    return (
      <div>
        <HeaderNews />
        <div className="divs">
          {this.state.data && this.state.data.map((abc) => (
            <article className="articles" key={abc.id}>
              <img src={abc.urlToImage} alt=""></img>
              <h1>{abc.title}</h1>
              <p id="content">{abc.content}</p>
              <button>
                {" "}
                <a href={abc.url}>Read More</a>
              </button>
              <h6>{abc.publishedAt}</h6>
              <p id="author">{abc.author}</p>
            </article>
          ))}
        </div>
      </div>
    );
  }
}

export default NewsPage;

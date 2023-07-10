import React, { Component } from "react";
import NewsItem from "./NewsItem";
import noImageIcon from "./../img/noImageIcon.png";
import Spinner from "./Spinner";
import filtericon from './../img/filtericon.png';
import applogo from './../img/applogo.png';


export class News extends Component {
  constructor() {
    super();
    console.log("I am a constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      country: "in",
      category: "general",
      categoryName:'Category',
      countryName:'Country',
      pageSize:6
    };
  }

  async componentDidMount() {
    let url =`https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&apiKey=bb74ade411174f35a6884e6102eca77f&page=1&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
    console.log("Fetched data");
  }

  handlePreviousClick = async () => {
    console.log("Previous");
    let url =`https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&apiKey=bb74ade411174f35a6884e6102eca77f&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  handleNextClick = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
      console.log("Next button is disabled");
    } else {
      console.log("Next");
      let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&apiKey=bb74ade411174f35a6884e6102eca77f&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
      this.setState({
        loading: true,
      });
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };

  countryclicked = (event) => {
    let countryval = event.target.id;
    const name = document.getElementById(countryval).innerHTML;
    this.setState({
      country: countryval,
      countryName: name
    });
  }

  categoryclicked = (event) => {

    const categoryval = event.target.id;
    const name = document.getElementById(categoryval).innerHTML;
    this.setState({
      category: categoryval,
      categoryName: name
    });
  }

  floatingLabelClicked = () =>{
    const pageSizeClicked = document.getElementById('floatingSelect').value;
    this.setState({
      pageSize: pageSizeClicked
    })

  }

  applyfilters = () => {
    console.log("Applying filters");
    this.floatingLabelClicked();
    this.componentDidMount();
  }

  render() {
    console.log("render");
    return (
      <>
        <div className="container my-3">
          <h2 style={{ textAlign: "center"}}>
            <img src={applogo} alt="News App logo"/>
            NewsApp- Today's Top Headlines
          </h2>
          <div className="d-flex justify-content-between filterbar my-5 mx-4">
            <div className="d-flex justify-content-start filters-3btns">
              <button type="button" className="btn btn-primary mx-3" >Filters <img src={filtericon} alt="filter icon" width='20px' height='20px'></img></button>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle mx-4"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {this.state.countryName}
                  <span><i className="bi bi-x-circle"></i></span>
                </button>
                <ul className="dropdown-menu">
                  <li className="dropdown-item" id="in" onClick={this.countryclicked}>India</li>
                  <li className="dropdown-item" id="us" onClick={this.countryclicked}>USA</li>
                  <li className="dropdown-item" id="au" onClick={this.countryclicked}>Australia</li>
                  <li className="dropdown-item" id="ae" onClick={this.countryclicked}>United Arab Emirates</li>
                  <li className="dropdown-item" id="ve" onClick={this.countryclicked}>Venezuela</li>
                  <li className="dropdown-item" id="fr" onClick={this.countryclicked}>France</li>
                  <li className="dropdown-item" id="ua" onClick={this.countryclicked}>Ukraine</li>
                </ul>
              </div>

              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle mx-4"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {this.state.categoryName}
                </button>
                <ul className="dropdown-menu">
                  <li className="dropdown-item" id="general" onClick={this.categoryclicked}>General</li>
                  <li className="dropdown-item" id="business" onClick={this.categoryclicked}>Business</li>
                  <li className="dropdown-item" id="entertainment" onClick={this.categoryclicked}>Entertainment</li>
                  <li className="dropdown-item" id="health" onClick={this.categoryclicked}>Health</li>
                  <li className="dropdown-item" id="science" onClick={this.categoryclicked}>Science</li>
                  <li className="dropdown-item" id="sports" onClick={this.categoryclicked}>Sports</li>
                  <li className="dropdown-item" id="technology" onClick={this.categoryclicked}>Technology</li>
                </ul>
              </div>
              <div className="form-floating" style={{width:'150px', height:'40px'}}>
                <select className="form-select form-select" id="floatingSelect" aria-label="Floating label select example" onClick={this.floatingLabelClicked}>
                  <option>3</option>
                  <option selected>6</option>
                  <option>9</option>
                  <option>12</option>
                </select>
                <label htmlFor="floatingSelect">Cards per page</label>
              </div>



            </div>
            <div className="mx-4" style={{width:'13%'}}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.applyfilters}
              >
                Apply
              </button>
            </div>
          </div>
          {this.state.loading === true ? (
            <Spinner />
          ) : (
            <div className="row my-5 mx-4">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 my-3" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imageUrl={
                        element.urlToImage ? element.urlToImage : noImageIcon
                      }
                      url={element.url ? element.url : ""}
                    />
                  </div>
                );
              })}
            </div>
          )}
          <div className="d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark text-nowrap"
              onClick={this.handlePreviousClick}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.state.pageSize)
              }
              type="button"
              className="btn btn-dark text-nowrap"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;

// import React from 'react'
import React, { Component } from "react";
import "./style.css";
import axios from "axios";

import image from "./download.jpg";
import image1 from "./image1.jpg";

import Article from "./Components/Article";
import Trending from "./Components/Trending";
import TwoBlog from "./Components/TwoBlog";
import PopularArticle from "./Components/PopularArticle";
import TrendingArt from "./Components/TrendingArt";

export default class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trendingArticles: [],
      feed: [],
      bid: 0,
      message: "",
      showMore: false,
      empty: false,
    };
  }

  handleClick() {
    if (this.state.showMore) {
      this.loadmore();
    } else {
      this.setState({ showMore: true });
    }
  }

  loadmore() {
    //load next batch of articles
    axios({
      method: "data",
      url:
        "https://www.spectrumoutr.com/techonicle/getBlogs.php?bid=" +
        this.state.bid,
    })
      .then((res) => {
        if (res.data.blogs) {
          if (res.data.status) {
            let tempArr = [...this.state.feed];
            res.data.blogs.forEach((e) => {
              tempArr.push(e);
            });

            this.setState({
              feed: tempArr,
              bid: res.data.bid,
              message: res.data.response,
            });
          } else {
            this.setState({
              message: res.data.response,
            });
          }
        } else {
          this.setState({
            empty: true,
          });
        }
      })
      .catch(console.error());
  }

  componentDidMount() {
    //trending articles
    axios({
      method: "data",
      url: "https://www.spectrumoutr.com/techonicle/trendingArticles.php",
    })
      .then((res) => {
        if (res.data.status) {
          this.setState({
            trendingArticles: res.data.trendingArticles,
            message: res.data.response,
          });
        } else {
          this.setState({
            message: res.data.response,
          });
        }
      })
      .catch(console.error());

    //feed articles
    axios({
      method: "data",
      url:
        "https://www.spectrumoutr.com/techonicle/getBlogs.php?bid=" +
        this.state.bid,
    })
      .then((res) => {
        if (res.data.status) {
          this.setState({
            feed: res.data.blogs,
            bid: res.data.bid,
            message: res.data.response,
          });
        } else {
          this.setState({
            message: res.data.response,
          });
        }
      })
      .catch(console.error());
  }

  render() {
    const twoBlogArr = this.state.trendingArticles.slice(0, 2);
    const popularArr = this.state.trendingArticles.slice(2);
    const numberOfItems = this.state.showMore ? this.state.feed.length : 3;
    const feedArr = this.state.feed.slice(0, numberOfItems);

    const addBlog = document.getElementById("addBlogs");

    if (this.state.empty) {
      addBlog.innerHTML = "<h4>No more articles to load</h4>";
    }

    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 1200 },
        items: 4,
      },
      desktop: {
        breakpoint: { max: 1200, min: 768 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 768, min: 550 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 550, min: 0 },
        items: 1,
      },
    };

    return (
      <div style={{ backgroundColor: "#F6F6F2" }}>
        <Trending reponsive={responsive} />

        <div className="container-fluid mt-4">
          <div className="row justify-content-center align-items-center">
            {twoBlogArr.map((e) => (
              <TwoBlog img={image} obj={e} key={e.id} />
            ))}

            <div className="col-md-5 col-sm-12 content2div">
              <div className="content2">
                <div
                  className="mb-3"
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h3>Popular Articles</h3>
                </div>
                {popularArr.map((e) => (
                  <PopularArticle img={image} obj={e} key={e.id} />
                ))}
              </div>
            </div>
          </div>
          <div className="container-fluid mb-4">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-8 col-md-10 p-0 py-4">
                {feedArr.map((e) => (
                  <Article
                    profilePic={image1}
                    articlePic={image}
                    obj={e}
                    key={e.id}
                  />
                ))}

                <div
                  id="addBlogs"
                  className="pt-4"
                  style={{ textAlign: "center" }}
                >
                  <button
                    type="button"
                    className="button"
                    onClick={() => this.handleClick()}
                  >
                    Show more
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="mb-2 pe-4"
            style={{
              padding: "0px 15px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div className="live mt-1 mb-0 ms-1">
              <h3 className="m-0 mb-1">Trending Articles</h3>
            </div>
          </div>
          <TrendingArt img={image} responsive={responsive} />
        </div>
      </div>
    );
  }
}

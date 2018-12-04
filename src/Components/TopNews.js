import React, { Component } from "react";
import NewsItem from "./NewsItem";
import NewsDetail from "./NewsDetail";
import ReactPaginate from "react-paginate";

class TopNews extends Component {
  constructor() {
    super();
    this.state = {
      currentNews: 0
    };
  }
  showFullNews = i => {
    this.state.currentNews !== i &&
      this.setState({
        currentNews: i
      });
  };
  pageChange() {
    this.setState({
      currentPage: arguments[0].selected + 1
    });
  }
  render() {
    const { topNews } = this.props;
    return (
      <div className="topNews">
        <div className="row">
          <div className="col s12">
            <h3 className="moduleTitle">آخرین اخبار</h3>
            <div className="newsWrapper">
              <div className="newsList">
                {topNews.map((item, key) => (
                  <NewsItem
                    data={item}
                    key={key}
                    index={key}
                    currentNews={this.state.currentNews}
                    showFullNews={this.showFullNews}
                  />
                ))}
                <div className="pagination">
                  <ReactPaginate
                    pageCount={20}
                    onPageChange={this.pageChange.bind(this)}
                    previousLabel="قبلی"
                    nextLabel="بعدی"
                  />
                </div>
              </div>
              <NewsDetail data={topNews[this.state.currentNews]} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopNews;

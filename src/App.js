import React, { Component } from "react";
import "./Styles/style.scss";

import Preloader from "./Components/Preloader";

import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import TopNews from "./Components/TopNews";

//Detail
//https://api.myjson.com/bins/18rd4y

//News
//https://api.myjson.com/bins/dzn1u

class App extends Component {
  state = {
    detail: {},
    news: {},
    data_received: false
  };

  componentDidMount() {
    Promise.all([
      fetch("https://api.myjson.com/bins/18rd4y"),
      fetch("https://api.myjson.com/bins/dzn1u")
    ])
      .then(([detail, news]) => Promise.all([detail.json(), news.json()]))
      .then(([detail, news]) =>
        this.setState({
          detail,
          news,
          data_received: true
        })
      );
  }

  render() {
    return (
      <div className="App">
        <Preloader data_received={this.state.data_received} />

        {!this.state.detail.data ? (
          "Loading"
        ) : (
          <React.Fragment>
            <Navbar
              title={this.state.detail.data.name}
              address={this.state.detail.data.address}
            />
            <div className="container mainContent">
              <div className="row">
                <Card
                  firstColor="#4bcaff"
                  secondColor="#6647ff"
                  icon="box"
                  title="متوسط خبر منتشرشده"
                  data={[this.state.detail.data.avgnews]}
                />
                <Card
                  firstColor="#9fbbed"
                  secondColor="#8552db"
                  icon="users"
                  title="متوسط بازدید روزانه"
                  data={[this.state.detail.data.reach]}
                />
                <Card
                  firstColor="#f48414"
                  secondColor="#fdaf43"
                  icon="bar-chart"
                  title="رتبه الکسا"
                  data={[
                    "ایران : " + this.state.detail.data.ir_rank,
                    "جهان : " + this.state.detail.data.alexa_rank
                  ]}
                />
              </div>

              <TopNews topNews={this.state.news.topNews} />
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;

import React from "react";
import IntroPresenter from "./IntroPresenter";

const IntroContainer = class extends React.Component {
  state = {
    lang: "KR",
    innerWidth: window.innerWidth,
  };
  componentDidMount = () => {
    window.addEventListener("resize", () =>
      this.setState({ innerWidth: window.innerWidth })
    );
  };
  setLang = (clickedLang) => this.setState({ lang: clickedLang });
  render() {
    return (
      <IntroPresenter
        lang={this.state.lang}
        setLang={this.setLang}
        innerWidth={this.state.innerWidth}
      />
    );
  }
};

export default IntroContainer;

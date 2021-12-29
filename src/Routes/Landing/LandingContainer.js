import React from "react";
import LandingPresenter from "./LandingPresenter";

const LandingContainer = class extends React.Component {
  state = {
    scroll: window.scrollY,
    animationDone: false,
  };
  scrollChange = () => {
    this.setState({ scroll: window.scrollY });
  };
  componentDidMount = () => {
    window.addEventListener("scroll", this.scrollChange);
  };
  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.scrollChange);
  };
  render() {
    return <LandingPresenter scroll={this.state.scroll} />;
  }
};

export default LandingContainer;

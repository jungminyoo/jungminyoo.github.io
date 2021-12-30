import React from "react";
import LandingPresenter from "./LandingPresenter";

const LandingContainer = class extends React.Component {
  state = {
    scroll: window.scrollY,
  };
  scrollChange = () => {
    this.setState({ scroll: window.scrollY });
  };
  componentDidMount = () => {
    const location = window.location.pathname;

    window.addEventListener("scroll", this.scrollChange);
    if (location === "/") {
      window.scrollTo(0, 0);
    }
  };
  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.scrollChange);
  };
  render() {
    return (
      <LandingPresenter
        scroll={this.state.scroll}
        animationDone={this.props.animationDone}
      />
    );
  }
};

export default LandingContainer;

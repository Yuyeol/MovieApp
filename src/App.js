import React from "react";

// function component는 retunr으로 screen에 표시,
// class component는 react component로부터 확장되고 screen에 표시됨
// 요거는 class component임.
class App extends React.Component {
  state = {
    isLoading: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;

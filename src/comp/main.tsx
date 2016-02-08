import * as React from "react"

export class App extends React.Component<{}, {}> {
  render() {
    return <div>fooooooo2 <Timer /></div>;
  }
}

interface TimerState {
  elapsed: number
}

export class Timer extends React.Component<any, TimerState> {
  state = {elapsed: 0}
  timer: number = null

  componentDidMount() {
    this.timer = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount():void {
    clearInterval(this.timer)
  }

  tick() {
    this.setState({elapsed: this.state.elapsed + 1});
  }

  render() {
    return <div>Timer: {this.state.elapsed}</div>;
  }
}


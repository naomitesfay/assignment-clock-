import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

componentDidMount() {
    this.startTimer ()
  }

componentWillUnmount() {
  this.stopTimer()
}

stopTimer = () => {
  clearInterval(this.timerID)
}

startTimer = () => {
  this.timerID = setInterval(
    () => this.tick(),
    1000
  )
}

tick() {
  this.setState({
      date: new Date()

  })

}



  render() {
    return (
      <div>
      <div className="container">
        <h1>What time is it?</h1>
        <h2>{this.state.date.toLocaleTimeString()}.</h2>
        <button onClick={this.stopTimer}>Stop</button>
        <button onClick={this.startTimer}>Start</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

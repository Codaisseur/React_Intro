import React, { PureComponent } from 'react';
import './App.css';

class App extends PureComponent {
  state = { 
    hours: '',
    minutes: '',
    seconds: '',
  }

  updateState = () => { // updateState is too generic of a name. I would call this function 'tick' (like a clock ticking!)
    const date = new Date()
    this.setState({
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds()
    })
  }

  checkNewTime = () => {
    setInterval(this.updateState, 1000)
  }

  formatTime = (timeUnit) => {
    if (timeUnit.toString().length < 2) return `0${timeUnit}`
    return `${timeUnit}`
  }

  render() {
    this.checkNewTime() // I would call this function in ComponentDidMount and only once, 
    // since by setting the interval it will get called multiple times
    return (
      <div className="App">
        <span className='hours'> { this.formatTime(this.state.hours) } </span>
        : 
        <span className='minutes'> { this.formatTime(this.state.minutes) } </span>
        :
        <span className='seconds'> { this.formatTime(this.state.seconds) } </span>
      </div>
    );
  }
}

export default App;

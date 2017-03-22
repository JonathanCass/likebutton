import React from 'react'
import './App.css'

var App = React.createClass({
  getInitialState: function() {
    return {
      count : 0
    }
  },
  render: function() {
    return (
      <div className="App">
        <button type="button" onClick={this.increment}> {this.state.count} like{(this.state.count === 1) ? '' : 's'} </button>  
      </div>
    )
  },
  increment: function(){
    this.setState({
      count: this.state.count + 1          
    })
  }
})

export default App;

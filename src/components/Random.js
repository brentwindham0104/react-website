import React from 'react';
import Button from '../components/Button.js';
//import ReactDOM from 'react-dom';

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      color : [100,200,300],
      date : new Date()
    };
    this.handleColorClick = this.handleColorClick .bind(this);
  }
  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }
  handleColorClick() {
    this.setState({
      color : this.chooseColor()
    })
  }

  render() {
    return (
      <div>
        <h1 className={this.isLight() ? 'white' : 'black'}>
          Your color is {this.formatColor(this.state.color)}
        </h1>
        <Button onClick={this.handleColorClick} light={this.isLight()}/>
        <h1 style={ {color:"yellow"} }>
        {this.state.date.toLocaleDateString()}
      
          </h1>
      </div>
    );
  }
}
export  default Random;
// ReactDOM.render(
//   <Random />, 
//   document.getElementById('app')
// );
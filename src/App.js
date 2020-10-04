import React, {Component} from 'react';
import './App.css';
import TDLHeader from "./components/TDLHeader";
import TDLElement from "./components/TDLElement";
import TDLInput from "./components/TDLInput";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      source: [
        {name: 'Go for a walk',
         mark: false,
         done: false,
        id: 123432112,},
        {name: 'Buy milk',
          mark: true,
          done: false,
        id:123121211,},
      ]
    }
  };

  getCount = () => {
    const {source} = this.state;
    const len = source.length;
    const count = source.filter( (item) => item.done).length;
    return [count, len];
  };

  markElem = index => this.setState({
    source: this.state.source.map( (elem, ind) => ind === index ? {...elem, mark : !elem.mark} : elem)
  });

  doneElem = index => this.setState({
    source: this.state.source.map( (elem, ind) => ind === index ? {...elem, done : !elem.done} : elem)
  });

  addElem = elem => this.setState({
      source: [...this.state.source, elem]
  });

  removeElem = index => this.setState({
      source: this.state.source.filter( (elem,ind) => ind !== index)
  });

  render() {
    const arrayOfElements = this.state.source;
    return (
      <div>
        <TDLHeader className="header" getCount={this.getCount}/>
        {arrayOfElements.map((prop,index) => <TDLElement
          key={prop.id} index={index} prop={prop} doneElem={this.doneElem}
          markElem={this.markElem} removeMethod={this.removeElem}
        />)}
        <TDLInput addElem={this.addElem}/>
      </div>
    )
  }
}


export default App;

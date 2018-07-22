import React, {Component} from 'react';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [{title: 'Business', category: 'Dev'},{title: 'NotBusiness', category: 'NotDev'}]
    };
  }

  render(){
    return (
      <div className="App">
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;

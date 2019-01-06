import './App.css';
import React, {Component} from 'react';
import Projects from './Components/Projects/Projects';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [
        {artist: 'Tekkerkane', category: 'Techno', url: 'tekkerkane'},
        {artist: 'Cannibal Cooking Club', category: 'Techno', url: 'cannibal-cooking-club'},
        {artist: 'Schrempf', category: 'Techno', url: 'schrempf'},
        {artist: 'Andi Teller', category: 'Techno', url: 'AndiTeller'},
        {artist: 'Sutura', category: 'Techno', url: 'suturamusic'},
        {artist: 'Maytrixx', category: 'Techno', url: 'maytrixxone'},
        {artist: 'I:Gor', category: 'Techno', url: 'i-gor'},
        {artist: 'Stormtrooper', category: 'Techno', url: 'stormtrooper'},
        {artist: 'Petduo', category: 'Techno', url: 'petduo'},
        {artist: 'Zahni', category: 'Techno', url: 'zahni_live'},
        {artist: 'KaNNa[d]iSs-L!vE', category: 'Techno', url: 'kanna-d-iss-l-ve'},
        {artist: 'Borderline', category: 'Techno', url: 'borderlinelive'},
        {artist: 'Lukas', category: 'Techno', url: 'djlukas'},
        {artist: 'Fernanda Martins', category: 'Techno', url: 'djfernandamartins'},
        {artist: 'ViperXL', category: 'Techno', url: 'viperxxl'}
      ]
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

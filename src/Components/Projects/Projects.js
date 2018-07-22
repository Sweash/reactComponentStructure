import './Projects.css';
import React, {Component} from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  render(){
    let projects = this.props.projects;
    let projectItems;

    if(projects){
      projectItems = projects.map(project =>{
        return (<ProjectItem key={project.url} project={project}/>);
      });
    }

    return (
      <div className="Projects">
        <h4>Soundcloud Artists</h4>
        {projectItems}
      </div>
    );
  }
}

export default Projects;

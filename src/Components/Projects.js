import React, {Component} from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  render(){
    let projects = this.props.projects;
    let projectItems;

    if(projects){
      projectItems = projects.map(project => {
        return (<ProjectItem key={project.title} project={project}/>)
      })
    }

    return (
      <div className="Projects">
        {projectItems}
      </div>
    );
  }
}

export default Projects;

import React, {Component} from 'react';

class ProjectsItem extends Component {
  render(){
    let project = this.props.project;
    return (
      <li className="Projects">
        {project.title}
      </li>
    );
  }
}

export default ProjectsItem;

import React, {Component} from 'react';

class ProjectsItem extends Component {
  render(){
    let project = this.props.project;
    let ref = 'https://soundcloud.com/' + project.url;
    return (
      <div className="Projects">
        <li>
          <span>{project.category} - </span>
          <a href={ref} target="_blank">{project.artist}</a>
        </li>
      </div>
    );
  }
}

export default ProjectsItem;

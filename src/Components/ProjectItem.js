import React, {Component} from 'react';

class ProjectsItem extends Component {
  render(){
    let project = this.props.project;
    let ref = 'https://soundcloud.com/' + project.url;
    return (
      <div className="Projects">
        <a href={ref}>
          {project.artist} - {project.category}
        </a>
      </div>
    );
  }
}

export default ProjectsItem;

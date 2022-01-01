import React, { Component } from "react";
import ExperienceCard from "./ExperienceCard.js";
class  Example extends Component {
  render() {
    
    return (
      <div>
       
          {this.props.sections.map((section) => {
            return (
              <div className="panel panel-primary">
              <div className="panel-heading home-header"><h1>{section["title"]}</h1></div>
              <div className="panel-body">
           
                {section["experiences"].map((experience) => {
                  return (
                    <ExperienceCard experience={experience}  />
                  );
                })}
                </div>
               </div>
            );
          })}
       
      </div>
    );
  }
}

export default Example;

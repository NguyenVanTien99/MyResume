import React, { Component } from 'react';
import {Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';


class Projects extends Component {


  toggleCategories() {

      return(
        <div className="projects-grid">
        <Card shadow={5} style={{minWidth: '900px', height: '450px', margin: 'auto'}}>
          <CardTitle className="projects-cf" >FreeCodeCamp</CardTitle>
          <CardText>
          JavaScript Algorithms and Data Structures
          </CardText>
          <CardActions border>
            <a href="https://www.freecodecamp.org/certification/tienvng99/javascript-algorithms-and-data-structures" target='_blank'><Button colored>Link</Button></a>
          </CardActions>
        </Card>
  <Card shadow={5} style={{minWidth: '900px', height: '450px', margin: 'auto'}}>
          <CardTitle className="projects-cf1" >FreeCodeCamp</CardTitle>
          <CardText>
          APIs And Microservices
          </CardText>
          <CardActions border>
            <a href="www.freecodecamp.org" target='_blank'><Button colored>Link</Button></a>
          </CardActions>
        </Card>
        </div>

      )
   
    }

  render() {
    return(
      <div>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}


export default Projects;

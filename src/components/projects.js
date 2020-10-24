import React, { Component } from 'react';
import {Grid, Cell, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';


class Projects extends Component {


  toggleCategories() {

      return(
        <div className="projects-grid">

          <Card shadow={5} style={{minWidth: '500px', height: '450px', margin: 'auto'}}>
            <CardTitle className="projects-bg" >FlashCard</CardTitle>
            <CardText>
            FlashCards are a time tested technique used by students to review and test their knowledge on a particular subject.
            </CardText>
            <CardActions border>
              <a href="https://github.com/wearehfteam/wearehfteam.github.io" target='_blank'><Button colored>GitHub</Button></a>
              <a href="https://wearehfteam.github.io/" target='_blank'><Button colored>Live Demo</Button></a>
            </CardActions>
          </Card>

 
          <Card shadow={5} style={{minWidth: '500px', height: '450px', margin: 'auto'}}>
            <CardTitle className="projects-bg1" >Brick Break Game</CardTitle>
            <CardText>
            Coding game 2D break brick with Html-canvas, CSS and Javascript.
            </CardText>
            <CardActions border>
              <a href="https://github.com/wearehfteam/wearehfteam.github.io" target='_blank'><Button colored>GitHub</Button></a>
              <a href="https://wearehfteam.github.io/" target='_blank'><Button colored>Live Demo</Button></a>
            </CardActions>
          </Card>


          <Card shadow={5} style={{minWidth: '500px', height: '450px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '300px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Mern - ToDo App</CardTitle>
            <CardText>
            MERN STACK
            </CardText>
            <CardActions border>
              <a href="https://github.com/wearehfteam/wearehfteam.github.io" target='_blank'><Button colored>GitHub</Button></a>
              <a href="https://wearehfteam.github.io/" target='_blank'><Button colored>Live Demo</Button></a>
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

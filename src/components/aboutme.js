import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class About extends Component {
  render() {
    return(
      <Grid>
      <Cell className="resume-right-col" col={12}>
        <h2>NGUYEN VAN TIEN</h2>
        <h5>Day of birth: 18/05/1999</h5>
        <h5>Gender: Male</h5>
        <h5>Address: Hai Chau, Da Nang City</h5> <br></br>
        <h3>Career Goals</h3>
        <hr style={{borderTop: '3px solid #e22947', width: '100%'}}/>
        <h6>Desiring to find a professional and suitable environment to apply what has been learned while acquiring and learning new knowledge. Thereby, perfecting yourself and completing the job well.</h6>
        <hr style={{borderTop: '3px solid #e22947', width: '100%'}}/> <br></br>
        <h3 >Hobbies</h3>
        <hr style={{borderTop: '3px solid #e22947', width: '100%'}}/>
        <h6>- Soccer</h6>
        <h6>- Travel</h6>
        <h6>- Cuisine</h6>
        <h6>- Coding</h6>
        <hr style={{borderTop: '3px solid #e22947', width: '100%'}}/>
      </Cell> 
      </Grid>
    )
  }
}

export default About;

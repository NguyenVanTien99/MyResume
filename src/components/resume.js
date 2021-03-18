import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell className="resume-right-col" col={12}>
            <h2>Education</h2>

            <Education
              startYear={2017}
              endYear={'Now'}
              schoolName="The University of Da Nang - University of Science and Education"
              schoolDescription="Information Technology"
               />

               <Education
                 startYear={'8/2020'}
                 endYear={'now'}
                 schoolName="CODEGYM"
                 schoolDescription="Bootcamp Java3 2020"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;

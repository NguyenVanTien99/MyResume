import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://ca.slack-edge.com/TEBPXS5HQ-U01AVPPTD62-76ddd7c78024-512"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Hi, i'm Tien</h1>
              <h2>WEB DEVELOPER</h2>
            <hr/>

          <p>JavaScript | Java | React | Spring | HTML/CSS |  </p>

        <div className="social-links">


          <a href="https://github.com/NguyenVanTien99" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>


          <a href="https://www.freecodecamp.org/tienvng99" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>


          <a href="https://www.facebook.com/tien.tienngng/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true" />
          </a>


          <a href="https://www.facebook.com/tien.tienngng/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;

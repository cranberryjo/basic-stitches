import React from 'react';
import Typography from '@material-ui/core/Typography'

class About extends React.Component {
  render() {
    return (
      <div className="componentOutline">
        <Typography variant="h3" component="h3">About</Typography>
        <Typography variant="body1" component="body1">
        I built #basic-stitches to help me visualize basic knitting patterns and track my progress on knitting projects. I recently picked up what I thought was a beginner's knitting kit, and soon found out that I had no idea how to follow a pattern let alone keep count of my rows and stitches. After stopping and re-starting my project a few times for that same reason (the worst! so frustrating!), I developed a manual way to track my project progress in my bullet journal. But, I have a tendancy to misplace my bujo more than my phone - so welcome #basic-stitches: a web app that allows you to generate custom pattern visualizations and trackers for multiple knitting projects on the go. You'll never lose your place, and you'll always know what lies ahead!
        <br />
        <br />
        Bringing #basic-stitches to life gave me the opportunity to play with: </Typography>
          <ul>
            <li>React</li>
            <li>ES6</li>
            <li>Material-UI</li>
          </ul>
      </div>
    )
  }
}

export default About;

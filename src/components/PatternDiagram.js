import React from 'react';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';


class PatternDiagram extends React.Component {



  getPatternValues = () => {
    var maxStitch = 0;
    var rowTotal = 0;
    this.props.blockDetails.forEach(block => {
      maxStitch = block.stitchCount > maxStitch ?  parseInt(block.stitchCount) : maxStitch;
      rowTotal = rowTotal + parseInt(block.rowCount);
    })

    var stitchWidth = [...Array(maxStitch)];
    var stitchGrid =[];

      this.props.blockDetails.forEach(block =>{

        // this is still in Progress
        var blockRows = parseInt(block.rowCount);
        var blockStitches = parseInt(block.stitchCount);
        var blockGrid = [...Array(blockRows)];
        var patternRepeat;
        console.log(blockRows);
        console.log(block.pattern)
        blockGrid.forEach((blockRow,indexRow) => {
          patternRepeat = patternRepeat > block.pattern.length ? 0 : patternRepeat;
          blockGrid[blockRow] = stitchWidth;
          blockGrid[blockRow].forEach((blockStitch, indexStitch) => {
            blockStitch[indexStitch] = {
              stitch: block.pattern[patternRepeat],
              complete: false
            }
          })
          patternRepeat += patternRepeat;
        })
        stitchGrid = blockGrid;
  })

    console.log(stitchGrid)





  }



  //blockDetails: [{
    //  name: "",
      //rowCount: undefined,
    //  stitchCount: undefined,
      //pattern: [{
        //ratio: 1,
      //  stitchType: "None"
    //  }]
  //  }]
//    }

//3. put those values along top and bottom of pattern

  render() {
    return (
      <div className="componentOutline">
        <Typography variant="h3" component="h3">Pattern Diagram</Typography>
        <Box>

        <Button variant="contained" color="secondary" onClick={this.getPatternValues}>Generate Pattern</Button>

        </Box>
      </div>
    )
  }
}

export default PatternDiagram;

import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import BlockDetails from './BlockDetails'
import Typography from '@material-ui/core/Typography'

class PatternGenerator extends React.Component {

  nameRef = React.createRef();
  rowCountRef = React.createRef();
  stitchCountRef = React.createRef();



  render() {
    return (
      <div className="componentOutline">
        <Typography variant="h3" component="h3">Generate your Pattern</Typography>
        {this.props.blockDetails.length == 0 ? this.props.addPatternBlock() : this.props.blockDetails.map((block,index) =>
            <BlockDetails  key={index} index={index} block= {index} blockDetails ={block} addDetailsInput = {this.props.addDetailsInput}
            addPatternBlock = {this.props.addPatternBlock} updatePatternDetails = {this.props.updatePatternDetails} updateBlockDetails = {this.props.updateBlockDetails} deletePatternDetails={this.props.deletePatternDetails} deleteBlockDetails={this.props.deleteBlockDetails}/>
          )
        }

      </div>

    )
  }
}

export default PatternGenerator

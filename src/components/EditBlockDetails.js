import React from 'react';
import RowDetails from './RowDetails'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';




class BlockDetails extends React.Component {

  handleChange = (event) => {
    const updatedBlockDetails = {
      ...this.props.blockDetails,
      [event.currentTarget.name]: event.currentTarget.value
    }
    //console.log(event.currentTarget)
    this.props.updatePatternDetails(this.props.block,updatedBlockDetails);
  }

  render() {
    return (
<FormControl onSubmit={this.createNewBlock}>
<Box display="flex">
  <p>Section Name:</p>
  <TextField name="name" inputRef={this.nameRef} value={this.props.blockDetails.name} onChange={this.handleChange}/>
</Box>
<Box display="flex">
  <p>Number of Stitches:</p>
  <TextField name="stitchCount" inputRef={this.stitchesRef} value={this.props.blockDetails.stitchCount} onChange={this.handleChange}/>
</Box>
<Box display="flex">
  <p>Number of Rows:</p>
  <TextField name="rowCount" inputRef={this.rowsRef} value={this.props.blockDetails.rowCount} onChange={this.handleChange}/>
</Box>
<p>Repeating Row Pattern:</p>
<Box display="flex">
  <div>
  {this.props.blockDetails.pattern.map((p,index) =>
    <RowDetails key={index+1} index={index+1} block={this.props.block} rowDetails={p} updatePatternDetails={this.props.updatePatternDetails}/>
  )}
  </div>
  <Box alignSelf="flex-end">
    <Button variant="contained" color="primary"
      onClick={() => this.props.addDetailsInput(this.props.block)}>
      + Custom Row
    </Button>
  </Box>
</Box>
<Button variant="contained"
  onClick={this.createNewBlock}>
  Generate Pattern
</Button>
</FormControl>

)}
}

export default BlockDetails;

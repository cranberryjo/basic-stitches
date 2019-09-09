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
    this.props.updateBlockDetails(this.props.block,updatedBlockDetails);
  }

  render() {
    return (
      <div className="componentOutline">

<FormControl onSubmit={this.props.addPatternBlock} autoComplete="off">
<Box display="flex">
  <TextField type="text" name="name" placeholder="Give a name to this block (i.e. Block # or Rib Knit)" value={this.props.blockDetails.name} onChange={this.handleChange}/>

  <Button variant="contained"
    onClick={this.props.deleteBlockDetails}>
    Delete Block
  </Button>

</Box>
<Box display="flex">
  <p>Number of Stitches:</p>
  <TextField type="number" name="stitchCount" inputRef={this.stitchesRef} placeholder="0" value={this.props.blockDetails.stitchCount} onChange={this.handleChange}/>
</Box>
<Box display="flex">
  <p>Number of Rows:</p>
  <TextField type="number" name="rowCount" inputRef={this.rowsRef} placeholder="0" value={this.props.blockDetails.rowCount} onChange={this.handleChange}/>
</Box>
<p>Repeating Row Pattern:</p>
<Box display="flex">
  <div>
  {this.props.blockDetails.pattern.map((p,index) =>
    <RowDetails key={index+1} index={index+1} block={this.props.block} rowDetails={p} updatePatternDetails={this.props.updatePatternDetails} deletePatternDetails={this.props.deletePatternDetails}/>
  )}
  </div>
  <Box alignSelf="flex-end">
    <Button variant="contained" color="primary"
      onClick={() => this.props.addDetailsInput(this.props.block)}>
      Add Custom Row
    </Button>
  </Box>
  </Box>

</FormControl>
<Button variant="contained"
  onClick={this.props.addPatternBlock}>
  Add Another Block
</Button>
</div>


)}
}

export default BlockDetails;

import React from 'react';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';


class RowDetails extends React.Component {

  patternRef = React.createRef();

  handleChange = (event) => {
    const updatedPatternDetails = {
      ...this.props.rowDetails,
      [event.target.name]: event.target.value
    }

    this.props.updatePatternDetails(this.props.block,this.props.index,updatedPatternDetails);
  }



  render() {
    const values = {
      stitch: {Knit:'knit',
        Purl:'purl'}
    }

    return (
      <div className="componentOutline">
      <Box display="flex">
        <p>Row {this.props.index}:</p>
        <FormControl variant="outlined" className="{classes.formControl}" style={{minWidth: 200}}>
          <InputLabel ref="Stitch Type" htmlFor="Stitch Type">Stitch Type</InputLabel>
          <Select
          inputRef={this.patternRef}
          onChange={this.handleChange}
          name="stitchType"
          type="text"
          value={this.props.rowDetails.stitchType}
            input={<OutlinedInput
            autowidth="true"
            id="stitch-type"/>}>

            <MenuItem value="None">None</MenuItem>
            <MenuItem value="Knit">Knit</MenuItem>
            <MenuItem value="Purl">Purl</MenuItem>
          </Select>
        </FormControl>
          <Button variant="contained" color="primary"
            onClick={() => this.props.deletePatternDetails(this.props.block, this.props.index)}>
            x
          </Button>
      </Box>
      </div>
    )
  }
}

export default RowDetails

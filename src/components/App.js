import React from 'react';
import '../App.css';
import PatternGenerator from './PatternGenerator';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import About from './About';
import PatternDiagram from './PatternDiagram';


class App extends React.Component {
  state = {
    blockDetails: []
      }

  addDetailsInput = (block) => {
    //can't figure out how to make blockDetails iterable in this function
    const blockDetails = this.state.blockDetails;
    blockDetails[block].pattern.push({stitchType: "None", ratio: 1});
    this.setState({blockDetails});
  }

  addPatternBlock = () => {
    const blockDetails = [...this.state.blockDetails];
    const newBlock = {
        name: "",
        rowCount: undefined,
        stitchCount: undefined,
        pattern: [{
          ratio: 1,
          stitchType: "None"
        }]
};
    this.setState({blockDetails: [...blockDetails,newBlock]});
  }

  updateBlockDetails = (block,updatedBlockDetails) => {
    const blockDetails = [...this.state.blockDetails];
    blockDetails[block] = updatedBlockDetails;
    this.setState({blockDetails: blockDetails});
  }

  updatePatternDetails = (block,index,updatedPatternDetails) => {
    const blockDetails = [...this.state.blockDetails];
    blockDetails[block].pattern[index-1] = updatedPatternDetails;
    this.setState({blockDetails: blockDetails});
  };

  deleteBlockDetails = (block) => {
    const blockDetails = [...this.state.blockDetails];
    blockDetails.splice(block,1)
    this.setState({blockDetails: blockDetails});
  }

  deletePatternDetails = (block, index) => {
    const blockDetails = [...this.state.blockDetails];
    blockDetails[block].pattern.splice(index-1,1);
    this.setState({blockDetails: blockDetails});
  }



  render() {
    return (
     <Container maxWidth="md">
      <Typography variant="h1" component="h1">#basic-stitches</Typography>
      <About />
      <PatternGenerator
      blockDetails = {this.state.blockDetails}
      addDetailsInput = {this.addDetailsInput}
      addPatternBlock = {this.addPatternBlock}
      updatePatternDetails = {this.updatePatternDetails}
      updateBlockDetails = {this.updateBlockDetails}
      deletePatternDetails = {this.deletePatternDetails}
      deleteBlockDetails = {this.deleteBlockDetails} />
      <PatternDiagram blockDetails = {this.state.blockDetails}/>
    </Container>
  )
  }
}

export default App;

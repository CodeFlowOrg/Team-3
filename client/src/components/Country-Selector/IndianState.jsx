import React from 'react';
import { StateDropdown, RegionDropdown } from 'react-indian-state-region-selector';
 
 
class IndianState extends React.Component {
  constructor (props) {
    super(props);
    this.state = { State: '', region: '' };
  }
 
  selectState (val) {
    this.setState({ State: val });
  }
 
  selectRegion (val) {
    this.setState({ region: val });
  }
 
  render () {
    const { State, region } = this.state;
    return (
      <div>
        <StateDropdown
          value={State}
          onChange={(val) => this.selectState(val)} />
        <RegionDropdown
          State={State}
          value={region}
          onChange={(val) => this.selectRegion(val)} />
      </div>
    );
  }
}
export default IndianState;
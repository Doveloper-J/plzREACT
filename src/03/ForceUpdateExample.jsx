import React from 'react';

class ForceUpdateExample extends React.Component {
  constructor(props) {
    super(props);
    //state define
    this.loading = true;
    this.formData = 'no data';
    this.handleData = this.handleData.bind(this);
    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = 'new data';
    // change state
    this.loading = false;
    this.formData = data + this.formData;
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        <span>loading : {String(this.loading)}</span>
        <span>result : {this.formData}</span>
      </div>
    );
  }
}

export default ForceUpdateExample;

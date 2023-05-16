import React from 'react';

class LifecycleExample extends React.Component {
  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps 호출');
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {};
    console.log('constructor called');
  }
  componentDidMount() {
    console.log('componentDidMount called - 생성 과정');
    this.forceUpdate();
  }
  componentDidUpdate() {
    console.log('componentDidUpdate called - 갱신과정');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount called - 소멸과정 ');
  }
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate called - 갱신과정');
    return {};
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate called - 갱신과정');
    return false;
  }

  render() {
    console.log('render called');
    return null;
  }
}

export default LifecycleExample;

import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // count 초기값을 프로퍼티에서 전달된 값으로 설정
      count: props.count,
    };
    this.increaseCount = this.increaseCount.bind(this);
  }
  increaseCount() {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  }
  render() {
    return (
      <div>
        현재 카운트 : {this.state.count}
        <button onClick={this.increaseCount}> 카운트 증가</button>
      </div>
    );
  }
}

export default Counter;

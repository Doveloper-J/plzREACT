import React from 'react';

class BooleanComponent extends React.Component {
  render() {
    // 불리언 타입을 조건문에 적용한 예제
    const message = this.props.bored ? 'let me go' : 'just do it';
    return <div className="message-container">{message}</div>;
  }
}

export default BooleanComponent;

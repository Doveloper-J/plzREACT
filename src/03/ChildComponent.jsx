import React from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends React.Component {
  render() {
    // 객체 구조 분해 할당식을 사용하여 프로퍼티에 전달된 값들을 render()함수내의 지역 변수로 재정의
    const { boolValue, numValue, arrayValue, objValue, nodeValue, funcValue } = this.props;

    return (
      <div>
        <span>boolean val is : {boolValue}</span>
        <span>number val is : {numValue}</span>
        <span>array val is : {arrayValue}</span>
        <span>obj val is : {objValue}</span>
        <span>node val is : {nodeValue}</span>
        <span>fun val is : {String(funcValue)}</span>
      </div>
    );
  }
}

ChildComponent.propTypes = {
  boolValue: PropTypes.bool,
  numValue: PropTypes.number,
  arrayValue: PropTypes.arrayOf(PropTypes.number),
  objValue: PropTypes.object,
  nodeValue: PropTypes.node,
  funcValue: PropTypes.func,
};

export default ChildComponent;

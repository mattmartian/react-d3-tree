/* eslint-disable react/wrap-multilines */
import React from 'react';
import T from 'prop-types';

export const BASE_MARGIN = 24;

export default class ForeignObjectElement extends React.PureComponent {
  render() {
    const { nodeData, nodeSize, render, foreignObjectWrapper, handleCollapse } = this.props;
    return (
      <foreignObject
        width={nodeSize.x - BASE_MARGIN}
        height={nodeSize.y - BASE_MARGIN}
        {...foreignObjectWrapper}
      >
        {React.cloneElement(render, { nodeData, handleCollapse })}
      </foreignObject>
    );
  }
}

ForeignObjectElement.defaultProps = {
  foreignObjectWrapper: {},
};

ForeignObjectElement.propTypes = {
  render: T.oneOfType([T.element, T.node]).isRequired,
  nodeData: T.object.isRequired,
  handleCollapse: T.func.isRequired,
  nodeSize: T.shape({
    x: T.number,
    y: T.number,
  }).isRequired,
  foreignObjectWrapper: T.object,
};

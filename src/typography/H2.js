import React from 'react'

class H2 extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {children} = this.props
    return (
      <h2>{children}</h2>
    );
  }
};

export {H2};

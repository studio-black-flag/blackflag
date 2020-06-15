import React from 'react'

class H1 extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {children} = this.props
    return (
      <h1>{children}</h1>
    );
  }
};

export {H1};

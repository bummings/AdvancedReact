import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled from 'styled-components';

const MyButton = styled.button`
  background: red;
  font-size: 8rem;
`;

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <MyButton>clik dat</MyButton>
        {this.props.children}
      </div>
    );
  }
}

export default Page;

import React from 'react'
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';

  const FooterStyled = styled.div`
    background: #ffe941;
    height: 20em;
    width: 100%;
  `;
const Footer = ({location}) => {
  return (location.pathname === "/shopping-card") ? null :(
    <footer className="mt-5">
      <div className="container-footer">
        <FooterStyled>
          <h1>Footer</h1>
        </FooterStyled>
      </div>
    </footer>
  );
}

export default withRouter(Footer)

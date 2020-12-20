import React from 'react';
import styled from "styled-components";


 const StyledH3 = styled.h3`
   position: absolute;
   z-index: 9;
   margin-left: 1.4em;
   color: #ffff;
   text-shadow: 2px 2px 2px rgba(5,5,5,0.5);
 `;

const H4Styled = ({name}) =>  (<StyledH3>{name}</StyledH3>)


export default H4Styled

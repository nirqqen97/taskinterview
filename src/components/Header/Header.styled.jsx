import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Border = styled.div`
    display : flex;
    border-bottom : 8px solid;
    border-color: #EBD8FF;
    padding : 25px;
    align-items : center;
    justify-content : center;
    margin-bottom : 20px`;

// export const HeaderText = styled.p`
//     font-family: 'Montserrat';
//     font-style: normal;
//     font-weight: 600;
//     font-size: 20px;
//     line-height: 1.2;
//     text-transform: uppercase;
//     color: #373737;
//     `

export const Container = styled.div`
    width: 1200px;
    margin-left: 20px;
    margin-right: 20px;
  `;



export const Nav = styled(NavLink)`
  text-decoration: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #373737;
  
  &:hover {
    color: #EBD8FF;
  }
`;

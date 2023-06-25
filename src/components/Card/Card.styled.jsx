import styled from '@emotion/styled';

export const CircleImage = styled.img`
    position : absolute;
    border-radius: 50%;
    border : 8px solid;
    border-color : #EBD8FF;
    background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
`    
export const GoImage = styled.img`
    margin-top : 20px;
    margin-left : 20px;
    position : absolute`

export const Image = styled.img`
    margin-bottom : 18px;
    margin-left : 36px;
    margin-right : 36px;
    margin-top : 28px`;

export const UpSidePart = styled.div`
    display : flex;
    justify-content : center; 
    align-items : center;`;

export const DownSidePart = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    margin-top : 62px;
    flex-direction : column;
    gap: 16px`;

export const CardView = styled.div`
    display : block;
    width: 380px;
    height: 540px;
    border: 1px solid;
    background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
    border-radius: 20px;`;



export const Line = styled.div`
    align-items : center;
    display : flex;
    justify-content : center;
    border-bottom : 8px solid ;
    border-color : #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;`;

export const Info = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    text-transform: uppercase;
    color: #EBD8FF;`

    export const Button = styled.button`
    border: none;
    background: ${props => (props.followed ? "#5CD3A8" : "#EBD8FF")};
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.2;
    text-transform: uppercase;
    color: "#EBD8FF";
    flex: none;
    order: 0;
    flex-grow: 0;
    margin-top: 10px;
    padding: 10px 56px;
  `;

  
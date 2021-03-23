import styled from 'styled-components';

import {colors, percents, sizes, widths} from '../../constants/css';

const Input = styled.input.attrs(() => ({
    type: "text",
    size: "1em",
  }))`
    font-size: 1em;
    border: 2px solid ${colors.FORMS};
    padding: 0.5em;
`;

const Button = styled.button`
  background: ${colors.CONTAINER};
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${colors.FORMS};
  border-radius: 3px;
  
  &:hover
  {
    cursor: pointer
  }
  &:active 
  {
    border: 2px solid ${colors.ACTIVE};
  }
`;

const Container = styled.div`
    font-family: Tahoma, sans-serif;
    min-height: 100vmin;
    background-color: ${colors.CONTAINER};
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: ${colors.TEXT};

    &:after
    {
        clear: both;
        content: "";
        display: block;
    }
`;

const Column = styled.div`
    display: block;
    float: left;
    width: ${percents.FULL};
    padding: 10px;
    font-family: Arial;
`;

const AxisColumn = styled(Column)`
    margin-top: 5%;
    text-align: center;
    align-items: center;
    background-color: ${colors.AXIS};
    border-radius: 10px;
    color: ${colors.TITLE};
    width: ${percents.AXIS};

    @media only screen and (max-width: ${widths.MEDIUM}){
        width: ${percents.FULL};
        font-size: ${sizes.SMALL};
    }

    @media only screen and (min-width: ${widths.LARGE}){
        width: ${percents.AXIS};
        font-size: ${sizes.INHERITED};
    }    
`;

const WingColumn = styled(Column)`
    padding-left: 10px;
    width: ${percents.WING};

    @media only screen and (max-width: ${widths.MEDIUM}){
        width: ${percents.FULL};
        font-size: ${sizes.SMALL};
    }
    
    @media only screen and (min-width: ${widths.LARGE}){
        width: ${percents.WING};
        font-size: ${sizes.INHERITED};
    }    
`;

const ColumnNineTenths = styled(Column)`
    width: ${percents.NINE_TENTHS};

    @media only screen and (max-width: ${widths.SMALL}){
        width: ${percents.FULL};
        font-size: ${sizes.INHERITED};
    }
    
    @media only screen and (min-width: ${widths.LARGE}){
        width: ${percents.NINE_TENTHS};
        font-size: ${sizes.INHERITED};
    }    
`;

const ColumnThreeFifths = styled(Column)`
    width: ${percents.THREE_FIFTHS};

    @media only screen and (max-width: ${widths.SMALL}){
        width: ${percents.FULL};
        font-size: ${sizes.INHERITED};
    }
    
    @media only screen and (min-width: ${widths.LARGE}){
        width: ${percents.THREE_FIFTHS};
        font-size: ${sizes.INHERITED};
    }    
`;

const ColumnHalf = styled(Column)`
    width: ${percents.HALF};

    @media only screen and (max-width: ${widths.SMALL}){
        width: ${percents.FULL};
        font-size: ${sizes.INHERITED};
    }
    
    @media only screen and (min-width: ${widths.LARGE}){
        width: ${percents.HALF};
        font-size: ${sizes.INHERITED};
    }    
`;

const ColumnTwoFifths = styled(Column)`
    width: ${percents.TWO_FIFTHS};

    @media only screen and (max-width: ${widths.SMALL}){
        width: ${percents.FULL};
        font-size: ${sizes.INHERITED};
    }

    @media only screen and (min-width: ${widths.LARGE}){
        width: ${percents.TWO_FIFTHS};
        font-size: ${sizes.INHERITED};
    }    
`;

const ColumnOneTenth = styled(Column)`
    width: ${percents.ONE_TENTH};

    @media only screen and (max-width: ${widths.SMALL}){
        width: ${percents.FULL};
        font-size: ${sizes.INHERITED};
    }

    @media only screen and (min-width: ${widths.LARGE}){
        width: ${percents.ONE_TENTH};
        font-size: ${sizes.INHERITED};
    }    
`;

export {
    AxisColumn,
    Button,
    Input,
    Column,
    ColumnHalf,
    ColumnNineTenths,
    ColumnOneTenth,
    ColumnThreeFifths,
    ColumnTwoFifths,
    Container,
    WingColumn
}

import React from 'react';
import styled from 'styled-components';

const  Form= (props) => {
    return (
     <>
         <StyledDiv>
             <AlbumNameInput type ="text"/> 
             <button>submit</button>
         </StyledDiv>
     </>
    );
 }

 export default Form;

 const AlbumNameInput = styled.input`
  
    background-color: gray;
`

const StyledDiv = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    width: 70%;
    padding: 10px;
    background-color: aquamarine;
    margin: 0px auto 20px auto;

`
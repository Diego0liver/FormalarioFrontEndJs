import styled from "styled-components";


export const AddFormStyled = styled.div`
h1{
    color: #91BBF2;
    background-color: #023059;
    margin: 0px;
    padding: 20px;
}
.form-cont{
margin-top: 20px;
}
label{
    margin-left: 25px;
    margin-right: 5px;
    color: #023059;
    font-weight: bold;
}
input{
    border: none;
    background-color: #91bbf2a8;
    padding: 5px;
    border-radius: 5px;
    text-transform:capitalize;
}
input:focus{
    box-shadow: 0 0 0 0;
    outline:0;
    border-left: solid 2px #023059;
    border-right: solid 2px #023059
}
.btn{
    margin-right: 10px;
    cursor: pointer;
    background-color: #023059;
    color: #91BBF2;
    border: none;
    border-radius: 5px;
    padding: 10px
}
.ok{
    background-color: #91bbf2a8;
}
.no{
    border: solid 1px rgba(250,0,0,0.61);
}

`
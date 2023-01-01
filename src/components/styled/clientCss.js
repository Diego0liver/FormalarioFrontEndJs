import styled from "styled-components";


export const ClientStyled = styled.div`
.header{
    display: flex;
    justify-content: center;
    background-color: #023059;
    margin: 0px;
    padding: 20px;
    img{
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 20px;
        height: 50px;
    }
    h1{
        color: #91BBF2;
    }
}
li{
    list-style: none;
    border-bottom: dotted 2px #91bbf2;
    padding: 10px;
    color: #023059;
    font-weight: bold;
}
ul{
    width: 800px;
    border-radius: 10px;
    background-color: #91bbf2a8;
    margin-left: 250px
}
button{
    margin-right: 10px;
    cursor: pointer;
    background-color: #023059;
    color: #91BBF2;
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin-bottom:50px
}

`
import styled from "styled-components";


export const HomeStyled = styled.div`

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
.topo{
    width:900px;
    display:flex;
    justify-content:space-around;
    margin-left: 200px;
    margin-top:20px;
    margin-bottom:50px;
    button{
        margin-right: 10px;
        cursor: pointer;
        background-color: #023059;
        color: #91BBF2;
        border: none;
        border-radius: 5px;
        padding: 10px
    }
    input{
       border: none;
       background-color: #91bbf2a8;
       padding: 5px;
       border-radius: 5px;
       height: 40px;
    }
    input:focus{
       box-shadow: 0 0 0 0;
       outline:0;
       border: solid 2px #023059;
}
}   
ul{
    display: flex;
    justify-content: space-around;
    list-style:none;
    background-color: #91BBF2;
    padding: 10px;
    font-weight: bold;
    width: 800px;
    margin-left: 250px;
    border-radius: 5px;
    border-left: solid 3px #023059;
}
.btn-home{
    display: flex;
    button{
        margin-right: 10px;
        cursor: pointer;
        background-color: #023059;
        color: #91BBF2;
        border: none;
        border-radius: 5px;
        padding: 10px
    }
    .btn-del{
        background-color: rgba(250,0,0,0.81);;
        color: white;
    }
}

.pesquisa{
    display: flex;
    
    img{
        width: 30px;
        height: 30px;
        padding-right: 10px;
    }
}
`
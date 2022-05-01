import React,{useState,useEffect} from 'react';
import Styled from 'styled-components';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feeds';
import Widget from './Components/Widget';
import Login from './Components/Login';
import { useStateValue } from './StateProvider';


function App(){
    const [{user}, dispatch]=useStateValue();
    return(
        <AppWrapper className='app'>
            {user? <div>
            <Header />
            <div className='app__body'>
                <Sidebar />
                <Feed />
                <Widget />
            </div> </div>
            : <Login />}
        </AppWrapper>
    )
}

const AppWrapper = Styled.div`
background-color:#f1f2f5;
.app__body{
    display:flex
}
`
export default App;
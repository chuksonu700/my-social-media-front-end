import React,{useState,useEffect} from 'react';
import Styled from 'styled-components';
import Header,{MobileHeader} from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feeds';
import Widget from './Components/Widget';
import Login from './Components/Login';
import { useStateValue } from './StateProvider';


function App(){
    const [{user}, dispatch]=useStateValue();
    return(
        <>
        <AppWrapper2MobileFirst className='container-fluid g-0'>
        {user? <div >
        <MobileHeader />
        </div>
        :<Login />
        }
        </AppWrapper2MobileFirst>
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
        </>
    )
}

const newApp =()=>{
    console.log("start Mobile view")
}

const AppWrapper2MobileFirst= Styled.div`
background-color:#f1f2f5
`
const AppWrapper = Styled.div`
background-color:#f1f2f5;
.app__body{
    display:flex
}
`
export default App;
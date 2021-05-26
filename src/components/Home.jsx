import React from 'react';  


import { Link, withRouter } from "react-router-dom";    

 

function Home(props){ 
  return (  
    <div>   

        <div className="home">
            <nav class="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">   
                    <Link class="navbar-brand" to="/">    
                        React Two Pages App 
                    </Link>     
                <div>   
                <ul class="navbar-nav ml-auto"> 
                    <li class={`nav-item  ${props.location.pathname === "/search" ? "active" : "" }`}>  
                        <Link class="nav-link" to="/search">    
                            Search  
                        </Link> 
                    </li>   

                    <li class={`nav-item  ${props.location.pathname === "/history" ? "active" : ""  }`} >   
                        <Link class="nav-link" to="/history">   
                            History 
                        </Link> 
                    </li>   
                </ul>   
                </div>  
                </div>
            </nav>

            
        </div>    
    </div>  
  );    
}   


  
export default withRouter(Home);  

import React from 'react';  
import algoliasearch from 'algoliasearch/lite'; 
import {    
  InstantSearch,    
  Hits, 
  SearchBox,    
  Pagination,   
} from 'react-instantsearch-dom';   
import PropTypes from 'prop-types'; 
  


const searchClient = algoliasearch( 
  'latency',    
  '6be0576ff61c053d5f9a3225e2a90f76'    
); 






function Search(){ 
  return (  
    <div>   

        <div className="search">
                <InstantSearch searchClient={searchClient} indexName="instant_search">  
                    <div className="search-panel">    
                        <div className="search-panel__results"> 
                            <SearchBox    
                                className="searchbox"   
                                translations={{ 
                                placeholder: '',                          
                                }}/>  
                                
                            <Hits hitComponent={Hit} />   
                        </div>    
                    </div>  

                    <div className="pagination">  
                      <Pagination /> 
                    </div>
                </InstantSearch>  
            
        </div>    
    </div>  
  );    
}   


function Hit(props) {   
    return (  
      <article>   
        <p>   
          <code>{JSON.stringify(props.hit).slice(0, 100)}...</code>   
        </p>  
      </article>  
    );    
  }   
  
  Hit.propTypes = {   
    hit: PropTypes.object.isRequired, 
  };  
  
export default Search;  

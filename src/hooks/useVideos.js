import React, { useState, useEffect } from 'react';
import youtube from '../api/youtubeAPI';


const useVideos = (defaultSearchTerm) => {
const [videos, setVideos] = useState([]);

useEffect(() => {
    Search(defaultSearchTerm);
  },[defaultSearchTerm] );


const Search = async (term)=>{
    const response = await youtube.get('/search',{
  params:{
     q: term
    }
  })
  //.then((response)=>this.setState({videos: response.data.items}))       ---Alternative
  setVideos(response.data.items);
  
  };
  return [ videos, Search ];
}


export default useVideos;
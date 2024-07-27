import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { GrNext, GrPrevious } from "react-icons/gr";

const HealthNews = () => {
    const API_KEY = "fc49069c3a6c4b40a99aebd345795f91"
    const url =`https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${API_KEY}`
    const [articles, setArticles] = useState([]);
    const [index, setIndex] = useState(0);

    async function fetchNewsData(){
      try{
        const res = await fetch(url);
        const data = await res.json();
        setArticles(data.articles);

      }

      catch(e){
        console.log("Error");
        setArticles([]);
      }

    }

    useEffect( ()=>{
       fetchNewsData();
    },[]);

   
return (
    <div>

      <NavBar></NavBar>

      <div className='flex justify-center items-center mt-28 gap-12'>
      <div className='bg-green-800 rounded-full p-2 text-center text-white font-bold text-2xl hover:shadow-md'>
        <GrPrevious onClick={ () => index > 0 ? setIndex(index-1) : setIndex(articles.length - 1) } ></GrPrevious>
      </div>
      {articles.length > 0 ?
      (
        <div className='border flex rounded-lg shadow-lg max-w-[600px]'>
          <div className='flex flex-col p-2 m-4'>
            <h1 className='text-3xl font-semibold text-green-900'>{articles[index].title}</h1>
            <div className='flex justify-between mt-2 mb-2'>
            <p className='text-[1.1rem] font-semibold text-green-900'>Article By: {articles[index].author}</p>
            <p className='text-[1.1rem] font-semibold text-green-900'>Date: {articles[index].publishedAt.substr(0, 10)}</p>
            </div>

            <div >
              {
                articles[index] && <p className='mt-4 mb-4' >{articles[index].description}</p>
              }
              
            </div>
            
            <div className='mt-4 mb-4'>
            <a className=' border shadow-md  rounded-full p-2 px-4 text-green-700 hover:bg-green-700 hover:text-white font-semibold hover:shadow-lg ' 
            href={articles[index].url}>Read full Article</a>
            </div>
            
          </div>

        </div>
      ) : 
      (
        <div>
            <h1>No News Found!</h1>
        </div>
      )}

      <div className='bg-green-800 rounded-full p-2 text-center text-white font-bold text-2xl hover:shadow-md'>
        <GrNext onClick={ () => index < articles.length - 1 ? setIndex(index+1) : setIndex(0) } ></GrNext>
        </div>
      </div>
      
    </div>
  )
}

export default HealthNews

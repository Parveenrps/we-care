import React, { useState } from 'react';
import aiImg from './doctorai.jpg';
import NavBar from '../components/NavBar';
import axios from 'axios';

const DoctorAI = () => {
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleAskClick = async () => {
    try {
      const response = await getAiResponse(userInput);
      setAiResponse(response);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setAiResponse('Sorry, there was an error processing your request.');
    }
  };

  const getAiResponse = async (input) => {
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
    console.log('API Key:', apiKey); // Debug: Check if the API key is loaded correctly

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: input,
          max_tokens: 150,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );
      console.log('Response:', response.data); // Debug: Check the response data
      return response.data.choices[0].text.trim();
    } catch (error) {
      console.error('Error in API request:', error); // Debug: Check if there is an error in the API request
      throw error;
    }
  };

  return (
    <div className='w-full h-full'>
      <NavBar />
      <div className='flex flex-col max-w-[1180px] mx-auto items-center justify-center mt-24'>
        <img src={aiImg} className='w-[200px] border rounded-full overflow-hidden shadow-md' alt='Doctor AI' />
        <div className='text-center'>
          <h1 className='text-3xl font-semibold text-green-800'>Hello! I'm your Doctor AI</h1>
          <p className='text-xl mt-2 mb-2'>You can describe your health issue here our Doctor AI will try to give you the best health tips.</p>
        </div>
        <input
          type='text'
          value={userInput}
          onChange={handleInputChange}
          placeholder='Please describe here'
          className='border rounded-lg mt-4 mb-4 pl-2 py-1 w-[580px]'
        />
        <div>
          <button
            onClick={handleAskClick}
            className='text-start border shadow-md rounded-full p-2 px-8 text-green-700 hover:bg-green-700 hover:text-white font-semibold hover:shadow-lg'
          >
            Ask
          </button>
        </div>
        {aiResponse && (
          <div className='mt-4 p-4 border rounded-lg shadow-md'>
            <p className='text-xl text-green-800'>{aiResponse}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorAI;

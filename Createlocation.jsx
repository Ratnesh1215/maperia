import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Backbutton from '../components/Backbutton';
import Spinner from '../components/Spinner';

const CreateLocation = () => {
  const [lc_id, setLc_id] = useState('');
  const [name, setName] = useState('');
  const [area, setArea] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [annual_revenue, setAnnual_revenue] = useState('');
  const [ph_no, setPh_no] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveLocation = () => {
    const data = {
      lc_id: lc_id,
      name: name,
      area: area,
      city: city,
      state: state,
      annual_revenue: annual_revenue,
      ph_no: ph_no,
    };

    setLoading(true);

    axios
      .post('http://localhost:5555/locations', data)
      .then(() => {
        setLoading(false);
        navigate('/locations/home');  // Navigate to the homepage
      })
      .catch((error) => {
        setLoading(false);
        console.error('Error:', error);

        if (error.response && error.response.status === 400) {
          console.log('Validation Errors:', error.response.data);
        }
      });
  };

  return (
    <div className='p-5 bg-black text-white'>
      <Backbutton />
      <h1 className='text-3xl my-4 font-bold'>CREATE LOCATION</h1>
      {loading && <Spinner />}
      <div className='flex flex-col border-4 border-sky-300 rounded-md w fit p-4'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-yellow-500'>Location ID</label>
          <input
            type='text'
            value={lc_id}
            onChange={(e) => setLc_id(e.target.value)}
            className='border-2 border-gray-500 bg-black text-white px-4 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-yellow-500'>Name</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border-2 border-gray-500 bg-black text-white px-4 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-yellow-500'>Area</label>
          <input
            type='text'
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className='border-2 border-gray-500 bg-black text-white px-4 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-yellow-500'>City</label>
          <input
            type='text'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className='border-2 border-gray-500 bg-black text-white px-4 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-yellow-500'>State</label>
          <input
            type='text'
            value={state}
            onChange={(e) => setState(e.target.value)}
            className='border-2 border-gray-500 bg-black text-white px-4 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-yellow-500'>Annual revenue</label>
          <input
            type='number'
            value={annual_revenue}
            onChange={(e) => setAnnual_revenue(e.target.value)}
            className='border-2 border-gray-500 bg-black text-white px-4 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-yellow-500'>Contact</label>
          <input
            type='number'
            value={ph_no}
            onChange={(e) => setPh_no(e.target.value)}
            className='border-2 border-gray-500 bg-black text-white px-4 w-full'
          />
        </div>

        {/* Button to save location and navigate to the homepage */}
        <button
          className="bg-black text-white py-3 px-6 rounded-lg border-4 border-white mb-12"
          onClick={handleSaveLocation}
        >
          SAVE
        </button>
      </div>
    </div>
  );
};

export default CreateLocation


import React, { useState, useEffect } from 'react';

import './style.css';

function DevForm({ onSubmit }) {
  const [git_username, setGitUsername] = useState('');
  const [techs, setTechs] = useState(''); 
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState(''); 

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    await onSubmit({
      git_username,
      techs,
      latitude,
      longitude
    });

    setGitUsername('');
    setTechs('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="git_username">Usuário do Github</label>
        <input 
          name="git_username" 
          id="git_username"
          required
          value={git_username}
          onChange={e => setGitUsername(e.target.value)} 
          />
      </div>

      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input 
          name="techs" 
          id="techs"
          required
          value={techs}
          onChange={e => setTechs(e.target.value)} 
          />
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input 
            name="latitude" 
            type="number" 
            id="latitude"
            required
            value={latitude}
            onChange={e => setLatitude(e.target.value)}
            />
        </div>

        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input 
            name="longitude" 
            type="number" 
            id="longitude"
            required 
            value={longitude} 
            onChange={e => setLongitude(e.target.value)}
            />
        </div>
      </div>

      <button type="submit">Salvar</button>

    </form>
  );
}

export default DevForm;
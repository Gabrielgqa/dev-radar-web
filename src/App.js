import React, { useState, useEffect } from 'react';

import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [devs, setDevs] = useState([]);
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

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response);
    }

    loadDevs();
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      git_username,
      techs,
      latitude,
      longitude
    });

    setGitUsername('');
    setTechs('');
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
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
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/6667778?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Gabriel Almeida</strong>
                <span>PHP, Node.js, React.js, React Native, Rails</span>
              </div>
            </header>
            <p>Full Stack Developer - PHP, Ruby, JS</p>
            <a href="https://github.com/Gabrielgqa">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/6667778?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Gabriel Almeida</strong>
                <span>PHP, Node.js, React.js, React Native, Rails</span>
              </div>
            </header>
            <p>Full Stack Developer - PHP, Ruby, JS</p>
            <a href="https://github.com/Gabrielgqa">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/6667778?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Gabriel Almeida</strong>
                <span>PHP, Node.js, React.js, React Native, Rails</span>
              </div>
            </header>
            <p>Full Stack Developer - PHP, Ruby, JS</p>
            <a href="https://github.com/Gabrielgqa">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/6667778?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Gabriel Almeida</strong>
                <span>PHP, Node.js, React.js, React Native, Rails</span>
              </div>
            </header>
            <p>Full Stack Developer - PHP, Ruby, JS</p>
            <a href="https://github.com/Gabrielgqa">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;

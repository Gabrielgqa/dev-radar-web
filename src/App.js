import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="git_username">Usuário do Github</label>
            <input name="git_username" id="git_username" required/>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
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

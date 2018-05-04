import React, { Component } from 'react';
import './index.scss';
import initVideo from 'src/lib/main.js';

export default class HomePage extends Component {

  componentDidMount() {
    initVideo();
  }

  render() {
    return (
      <div>
        <p>
          Room URL: <br/>
          <code id="url">...</code>
        </p>

        <video className="camera" autoPlay></video>
        <div className="controls">
          <canvas id="photo"></canvas>
          <p>
              <button id="snap">snap</button>-then-<button id="send">send</button> 
              <br/> - or - <br/>
              <button id="snapAndSend">snap & send</button>
          </p>
        </div>

        <div className="incoming">
          <h2>Incoming photos</h2>
          <div id="trail"></div>
        </div>
      </div>
    );
  }
}
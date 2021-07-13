import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/style.css';
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import 'tachyons';

const musicList = {
  songName: 'Zara zara',
  url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  albumCover:
    'data:image/jpeg;base64,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'
};

export class App extends Component {
  render() {
    return <MusicAlbum />;
  }
}
export class MusicAlbum extends Component {
  playAudio() {
    const audioEl = document.getElementsByClassName('audio-element')[0];
    audioEl.play();
  }

  stopAudio() {
    const audioEl = document.getElementsByClassName('audio-element')[0];
    audioEl.pause();
    audioEl.currentTime = 0;
  }

  render() {
    return (
      <div className="tc">
        <div className="ImagePlaceholder">
          <img src={musicList.albumCover} className="albumCover" />
        </div>
        <div>
          <audio className="audio-element">
            <source src={musicList.url} />
          </audio>
        </div>
        <h1>{musicList.songName}</h1>
        <div className="buttonpack tc">
          <Button className="buttonpack" variant="light">
            <img
              src=" https://image.flaticon.com/icons/png/128/151/151863.png"
              width="10px"
            />
          </Button>
          <Button
            className="buttonpack"
            variant="light"
            onClick={this.playAudio}
          >
            <img
              src="https://image.flaticon.com/icons/png/512/27/27223.png"
              width="10px"
            />
          </Button>
          <Button
            className="buttonpack"
            variant="light"
            onClick={this.stopAudio}
          >
            <img
              src="https://image.flaticon.com/icons/png/512/727/727260.png"
              width="10px"
            />
          </Button>
          <Button className="buttonpack" variant="light">
            <img
              src="https://image.flaticon.com/icons/png/128/724/724956.png"
              width="10px"
            />
          </Button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

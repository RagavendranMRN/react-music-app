import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/style.css';
import 'tachyons';

const musicList = [
  {
    id: 1,
    songName: 'Zara zara',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    albumCover: 'https://picsum.photos/200?random=1'
  },
  {
    id: 2,
    songName: 'Green Lights',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    albumCover: 'https://picsum.photos/200?random=2'
  }
];

export class App extends Component {
  render() {
    return <MusicAlbum />;
  }
}
let id = 0;
export class MusicAlbum extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  playAudio() {
    const audioEl = document.getElementsByClassName('audio-element')[0];
    console.log('Playing');
    audioEl.play();
  }

  stopAudio() {
    const audioEl = document.getElementsByClassName('audio-element')[0];
    audioEl.pause();
    audioEl.currentTime = 0;
  }

  playNext() {
    id++;
    this.setState({ count: id });
    console.log();
  }

  playPrevious() {
    id--;
    this.setState({ count: id });
  }

  render() {
    const { count } = this.state;
    console.log(count);
    console.log(musicList);
    return (
      <div className="tc">
        <div className="ImagePlaceholder">
          <Button
            className="buttonpack"
            variant="light"
            className="leftAngle"
            onClick={this.playPrevious.bind(this)}
          >
            <i class="fa fa-angle-left" />
          </Button>
          <img src={musicList[count].albumCover} className="albumCover" />
          <Button
            className="buttonpack"
            variant="light"
            className="rightAngle"
            onClick={this.playNext.bind(this)}
          >
            <i class="fa fa-angle-right" />
          </Button>
        </div>
        <div>
          <h1>{musicList[count].songName}</h1>
          <audio className="audio-element" controls>
            <source src={musicList[count].url} />
          </audio>
        </div>

        {/* <div className="buttonpack tc">
          <Button
            className="buttonpack"
            variant="light"
            onClick={this.playPrevious.bind(this)}
          >
            <i class="fa fa-step-backward" />
          </Button>
          <Button
            className="buttonpack"
            variant="light"
            onClick={this.playAudio}
          >
            <i class="fa fa-play" />
          </Button>
          <Button
            className="buttonpack"
            variant="light"
            onClick={this.stopAudio}
          >
            <i class="fa fa-stop" />
          </Button>
          <Button
            className="buttonpack"
            variant="light"
            onClick={this.playNext.bind(this)}
          >
            <i class="fa fa-step-forward" />
          </Button>
        </div> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

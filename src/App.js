
import './App.css';
import Maze from './maze.js';
import {useEffect,useState} from 'react';
import ship from './images/ship.png';
import waves from './images/waves.png';
import lightning from './images/lightning.png';
import cloud from './images/cloud.png';
import moon from './images/moon.png';
import train from './images/train.png';
import video1 from './videos/vid1.mp4';
import video2 from './videos/vid2.mp4';
import pic from './images/coolpic.jpeg';
import neon1 from './images/neon1.png';
import neon2 from './images/neon2.png';

function App() {
  useEffect(() => {
    var bg = document.getElementById('bg');
    var moon = document.getElementById('moon');
    var mountain = document.getElementById('mountain');
    var road = document.getElementById('road');
    var texto = document.getElementById('text');
    window.addEventListener('scroll', function(){
      var value = window.scrollY;
      if(bg){bg.style.top = value * 0.5 + 'px';}
      if(moon){
        moon.style.left = value * 0.7 + 700 + 'px';
        moon.style.top = value * 0.5 + 80 + 'px';
      }
      if(mountain){mountain.style.top = -value * 0.15 + 'px';}
      if(road){road.style.top = value * 0.15 + 400 + 'px';}
      if(texto){texto.style.marginTop = value * 1.5 + 120 + 'px';}
      })
    var storm = document.getElementById('storm');
    if(storm){window.addEventListener('scroll', e => {
      let value =1 + window.scrollY/-1400;
      storm.style.opacity = value;
    })};
    function makeTextCool(id){
      var element = document.getElementById(id);
      if(element){
        var text = element.innerText.split('');
        element.innerText = '';
        text.forEach((letter) => {
          const span = document.createElement('span');
          span.innerText = letter;
          span.classList.add('letter');
          element.appendChild(span);
        })
      }
    }
    makeTextCool('special');
    makeTextCool('secspec');
  })
  return (
    <div className="App">
      
      <section>
        <img id='bg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0mgTU0SG8Y5FbevOy8ONt_mJbeA9EPy3xCQ&s'></img>
        <img id='moon' src={moon}></img>
        <img id='mountain' src='https://i.pinimg.com/originals/97/2b/af/972baf30be0a1e7ab221dd20344afc0b.png'></img>
        <img id='road' src={train}></img>
        <h2 id='text'>Website</h2>
      </section>
      <section id='storm'>
        <img id='cloud' src={cloud}></img>
        <img id='cloud2' src={cloud}></img>
        <img id='ship' src={ship} alt='ship'></img>
        <img id='waves' src={waves}></img>
        <img id='waves2' src={waves}></img>
        <img id='waves3' src={waves}></img>
        <img id='waves4' src={waves}></img>
        <img id='lightning' src={lightning}></img>
      </section>
      <section id='info'>
        <h3 id='text2'>
          <span className='span1'>L</span>
          <span className='span2'>I</span>
          <span className='span3'>F</span>
          <span className='span4'>E</span>
          <span className='span5'>Q</span>
          <span className='span1'>U</span>
          <span className='span2'>O</span>
          <span className='span3'>T</span>
          <span className='span4'>E</span>
        </h3>
        <p>Life-storms drown the weak and rescue the strong. You are the captain of your ship; learn to navigate it and you will be rewarded.</p>
        <p>Life is a <span className='span1'>Maze</span>. Don't just <span className='span2'>gaze</span>. Change your <span className='span3'>pace</span>, to win the <span className='span4'>race</span></p>
        <p>Turbulent like these jiggling words.</p>
      </section>
      <div id='instruction'>
        <h2>hover over vids to see something</h2>
      </div>
      <div id='smthere'>
        <div className='container'>
          <div className='box'>
            <div className='vbx'>
              <video src={video1} autoPlay loop muted></video>
            </div>
            <div className='cbx'>
              <div className='content'>
                <h2>RANDOM PLACE</h2>
                <p>some inspirational text about how you can live your life. suggestions: bold and fierce</p>
              </div>
            </div>
          </div>
          <div className='box'>
            <div className='vbx'>
              <video src={video2} autoPlay loop muted></video>
            </div>
            <div className='cbx'>
              <div className='content'>
                <h2>RANDOM MOUNTAIN</h2>
                <p>more motivational speech about climbing a mountain and compare it to maturing in life</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='yeppi'>
        <div className='pictn'>
          <img src={pic}></img>
        </div>
        <div id='neonctn'>
          <img className='neon1' src={neon1}></img>
          <img className='neon1' src={neon1}></img>
          <img className='neon1' src={neon1}></img>
          <img className='neon1' src={neon1}></img>
          <img className='neon1' src={neon1}></img>
          <img className='neon1' src={neon1}></img>
          <img className='neon1' src={neon1}></img>
      
        </div>
        <div id='cooltext'>
          <div className='line'>
            <p className='word'>COOL</p>
            <p className='word'>EFFECT</p>
          </div>
          <div className='line'>
            <p className='word'>HOVER</p>
            <p className='word'>TO SEE</p>
          </div>
          <div className='line'>
            <p id='secspec' className='word fancy'>UNIQUENESSSS</p>
          </div>
          <div className='line'>
            <p id='special' className='word fancy'>EXTRAODINARY</p>
          </div>
        </div>
      </div>
      <div id='maze'>
        <Maze/>
      </div>
    </div>
  );
}

export default App;

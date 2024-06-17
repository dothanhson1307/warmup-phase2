import React from 'react';
import './maze.css';
function Maze(){
    // var c = document.getElementById('canvas');
    // var ctx = c.getContext('2d');
    var map = [
        [0,1,0,0,2],
        [0,1,1,0,0],
        [0,0,0,0,0]
    ];
    var player = {
        x:0,
        y:0,
        newX:0,
        newY:0
    }
    var collBox =[]
    function drawMap(m){
        var c = document.getElementById('canvas');
        if(c){
        var ctx = c.getContext('2d');
        for(var i=0;i<m.length;i++){
            for(var j=0;j<m[i].length;j++){
                if(m[i][j] === 1){
                    ctx.beginPath();
                    ctx.fillStyle = '#000000';
                    ctx.fillRect(j*20,i*20,20,20);
                    collBox.push({x:j*20,y:i*20});
                }
                else if(m[i][j] === 2){
                    ctx.beginPath();
                    ctx.fillStyle = '#00ff00';
                    ctx.fillRect(j*20,i*20,20,20);
                }
            }
        }
        }
        console.log(collBox);
    }
    function drawPlayer(x,y){ 
        var c = document.getElementById('canvas');
        if(c){
        var ctx = c.getContext('2d');
        ctx.beginPath();
        ctx.fillStyle = '#B71514';
        ctx.fillRect(x,y,20,20);
        console.log('yes');
        }
    }
    function move(x,y){
        var c = document.getElementById('canvas');
        if(c){
        var ctx = c.getContext('2d');
        ctx.clearRect(0,0,100,60);
        drawPlayer(x,y);
        // drawMap(map);
        player.x = player.newX;
        player.y = player.newY;
        }
    } 
    window.onkeydown = function(e){

        for(var i=0;i<collBox.length;i++){
            for(var j=0;j<collBox[i].length;j++){
                if(collBox[i][j].x!==player.x -20){
                    if(e.keyCode === 37){
                        player.newX = player.x - 20;
                        player.newY = player.y;
                        console.log('left');
                        move(player.newX,player.newY);
                    }
                }
                if(collBox[i][j].y!==player.y -20){
                    if(e.keyCode === 38){
                        player.newY = player.y - 20;
                        player.newX = player.x;
                        console.log('up');
                        move(player.newX,player.newY);
                    }
                }
            }
        }
        
        // if(e.keyCode === 37){
        //     player.newX = player.x - 20;
        //     player.newY = player.y;
        //     console.log('left');
        // }
        // if(e.keyCode === 38){
        //     player.newY = player.y - 20;
        //     player.newX = player.x;
        //     console.log('up');
        // }
        if(e.keyCode === 39){
            player.newX = player.x + 20;
            player.newY = player.y;
            console.log('right');
        }
        if(e.keyCode === 40){
            player.newY = player.y + 20;
            player.newX = player.x;
            console.log('down');
        }
    } 
    return(
        <div className='maze-container'>
            <canvas width='100' height='60' id='canvas' onLoad={()=>{drawMap(map);drawPlayer()}}></canvas>
            <button onClick={()=>{drawMap(map);drawPlayer()}} id='button'>Staert</button>
            <h1> R U  AMAZEd</h1>
        </div>
        
    )
}
export default Maze
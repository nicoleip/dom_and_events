/**
 * 
 */


 var planeLeft = 0;
 var bulletLeft = 70;
 var bulletTop = 520;

var step = 2;
var d_x = 0;
var d_y = 0;
var bullseye_step = 8;
var bullet_step = 10;

var move = {
	west: false,
	east: false,
	isShooting: false,

};

function handleMove(keyCode, state) {
	switch (keyCode) {
		
		case 37:
			move.west = state;
			break;
		case 39:
			move.east = state;
			break;
			
		case 32:
			move.isShooting = state;
			break;
	
		default:
			break;
	}
}
window.addEventListener('DOMContentLoaded', function() {
	var plane = document.getElementById('plane');
	
	document.addEventListener('keydown', function(event) {
		handleMove(event.keyCode, true);
	}, false);
	
	document.addEventListener('keyup', function(event) {
		handleMove(event.keyCode, false);
	}, false);
	
	function gameLoop() {
		
		if (move.west && planeLeft > 0) {
			planeLeft -= step;
		}

		if (move.east && planeLeft < (window.innerWidth - 170)) {
			planeLeft += step;
		}		
		

		plane.style.left = planeLeft + 'px';
		bullet.style.left= bulletLeft + planeLeft + 'px';
	/*	
		if (move.isShooting){
			
		}*/
		
		requestAnimationFrame(gameLoop)
	}
	
	gameLoop();
}, false)

       function init(){
          
            var el = document.getElementById("bullseye")
           
            x = parseInt(el.style.left);
            
            if(isNaN(x)){
             
                x = 1600;
            }
           
          
            moveImage();
            
        }

     
        function moveImage() {
            if(d_x < x){
                x = x - bullseye_step;
            }else{
              
                x = 1600;
            }
         
        
            var el = document.getElementById("bullseye")
            el.style.left = x + 'px'; 
           

         
            setTimeout(moveImage, 100);

        }  
        
      /*  
        function userScore{
        	document.getElementById('score').innerHTML = playerScore;
        }

        
        function bullestLeft{
        	document.getElementById('bullets-left').innerHTML = bulletsLeft;
        }*/
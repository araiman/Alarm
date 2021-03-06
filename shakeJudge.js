	var sensorFrom = 0;
	var sensorTo = 0;
	var shakeTimes = 0;

    document.addEventListener("DOMContentLoaded", drawNormalFace, false);


    window.addEventListener("devicemotion",accelerate);

	function accelerate(event){
                var x = event.acceleration.x; //横方向の加速度
                var y = event.acceleration.y; //縦方向の加速度
                var z = event.acceleration.z; //上下方向の傾斜
	    	
		sensorTo = absAccelerator(x,y,z);
		
		if(checkSensorCount(sensorFrom,sensorTo)){
			shakeTimes++;
			console.log(shakeTimes);	
			var htmlElem = document.getElementById("result");
			htmlElem.innerHTML= shakeTimes;	
		
			var harisenButton = document.getElementById("harisenButton");
			harisenButton.click();

            drawBeatedFace();

            setTimeout(drawNormalFace,195);
	    		if(shakeTimes > 30){
				alarmSound.stop();
			}
		}


    }

	function absAccelerator(x,y,z){
		return Math.abs(x)+Math.abs(y)+Math.abs(z);
	}

	
	function checkSensorCount(sensorFrom,sensorTo){
		var offset = 130;

		if((sensorFrom - offset) > sensorTo){
			sensorFrom = sensorTo;
		} else {

			if((sensorFrom + offset) <  sensorTo){
				sensorFrom = sensorTo;
				return true;

			}
		}
		return false;

	}

	function playSound(){
		try{

			var harisenSound = document.getElementById("harisenSound")
			if(harisenSound.currentTime > 0){
				harisenSound.currentTime = 0;
				harisenSound.play();
			}else{
				harisenSound.play();
			}
		}catch(e){
			alert(e);
		}
	}


//顔
    function drawNormalFace(){
            var canvas = document.getElementById("oyaji");
            var ctx = canvas.getContext("2d");

            ctx.clearRect(0,0,200,200);

            //輪郭を描く
            ctx.beginPath();
            ctx.arc(70, 70, 60, 0, Math.PI*2, false);
            ctx.stroke();

            //目を描く（自分から見て、左側）
            ctx.beginPath();
            ctx.arc(45, 45, 15, 0, Math.PI*2, false);
            ctx.stroke();

            //目を描く（自分から見て、右側）
            ctx.beginPath();
            ctx.arc(95, 45, 15, 0, Math.PI*2, false);
            ctx.stroke();

            //眼球を描く（左側）
            ctx.beginPath();
            ctx.arc(39, 35, 3, 0, Math.PI*2, false);
            ctx.fill();
            ctx.stroke();

            //眼球を描く（右側）
            ctx.beginPath();
            ctx.arc(103, 35, 3, 0, Math.PI*2, false);
            ctx.fill();
            ctx.stroke();

            //口を描く
            ctx.beginPath();
            ctx.arc(40, 180, 40, 0 * Math.PI / 180, 180 * Math.PI / 180, false);
            ctx.stroke();

            //ベロを描く
            ctx.beginPath();
            ctx.arc(70, 82, 20, 0 * Math.PI / 180, 180 * Math.PI / 180, false);
            ctx.stroke();


            //鼻を描く（左側）
            ctx.beginPath();
            ctx.arc(60, 70, 6, 0, Math.PI*2, false);
            ctx.fill();

            //鼻を描く（右側）
            ctx.beginPath();
            ctx.arc(80, 70, 6, 0, Math.PI*2, false);
            ctx.fill();
    }

    function   drawBeatedFace(){
        var canvas = document.getElementById("oyaji");
        var ctx = canvas.getContext("2d");

        ctx.clearRect(0,0,200,200);
        ctx.scale(1,1);

        //輪郭を描く
        ctx.beginPath();
        ctx.arc(70, 70, 60, 0, Math.PI*2, false);
        ctx.stroke();

        //目を描く（左側、1番目）
        ctx.beginPath();
        ctx.moveTo(37, 35);
        ctx.lineTo(50,45);
        ctx.stroke();

        //目を描く（左側、2番目）
        ctx.beginPath();
        ctx.moveTo(35, 45);
        ctx.lineTo(50,45);
        ctx.stroke();

        //目を描く（左側、3番目）
        ctx.beginPath();
        ctx.moveTo(37, 55);
        ctx.lineTo(50,45);
        ctx.stroke();

        //目を描く（右側、1番目）
        ctx.beginPath();
        ctx.moveTo(103, 35);
        ctx.lineTo(90,45);
        ctx.stroke();

        //目を描く（右側、2番目）
        ctx.beginPath();
        ctx.moveTo(105, 45);
        ctx.lineTo(90,45);
        ctx.stroke();

        //目を描く（右側、3番目）
        ctx.beginPath();
        ctx.moveTo(103, 55);
        ctx.lineTo(90,45);
        ctx.stroke();

        //鼻を描く（左側）
        ctx.beginPath();
        ctx.arc(65, 55, 6, 0, Math.PI*2, false);
        ctx.fill();

        //鼻を描く（右側）
        ctx.beginPath();
        ctx.arc(75, 55, 6, 0, Math.PI*2, false);
        ctx.fill();

        //口を描く（左側）
        ctx.beginPath();
        ctx.moveTo(50,85);
        ctx.lineTo(70,75);
        ctx.stroke();

        //口を描く（右側）
        ctx.beginPath();
        ctx.moveTo(90,85);
        ctx.lineTo(70,75);
        ctx.stroke();


    }








function drawNormalFace(){
    var canvas = document.getElementById("oyaji");
    var ctx = canvas.getContext("2d");
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
    ctx.scale(1.4, 0.6);
    ctx.arc(50, 150, 20, 0 * Math.PI / 180, 180 * Math.PI / 180, false);
    ctx.stroke();

    //ベロを描く
    ctx.beginPath();
    ctx.scale(0.6, 2.0);
    ctx.arc(82, 82, 20, 0 * Math.PI / 180, 180 * Math.PI / 180, false);
    ctx.stroke();

    //ベロのラインを描く
    ctx.beginPath();
    ctx.moveTo(82, 84);
    ctx.lineTo(82,100);
    ctx.stroke();

    //鼻を描く（左側）
    ctx.beginPath();
    ctx.scale(0.9, 1.1);
    ctx.arc(85, 50, 6, 0, Math.PI*2, false);
    ctx.fill();

    //鼻を描く（右側）
    ctx.beginPath();
    ctx.scale(0.9, 1.05);
    ctx.arc(113, 48, 6, 0, Math.PI*2, false);
    ctx.fill();
}

function   drawBeforeBeatedFace(){
    var canvas = document.getElementById("oyaji");
    var ctx = canvas.getContext("2d");

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

function   drawBeatedFace(){
    var canvas = document.getElementById("oyaji");
    var ctx = canvas.getContext("2d");

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
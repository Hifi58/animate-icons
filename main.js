function balanceScale() {
    let balance = document.getElementById('balanceIcon');
    balance.innerHTML="&#xf24e;";
    setTimeout(function(){balance.innerHTML="&#xf515";}, 2000);
    setTimeout(function(){balance.innerHTML="&#xf516";}, 3000);
    }
    balanceScale();
    setInterval(balanceScale, 4000)

function openLock(){
    let lock = document.getElementById('lock');
    lock.innerHTML="&#xf023;";
    setTimeout(function(){lock.innerHTML="&#xf3c1";}, 2000);
    }
    openLock();
    setInterval(openLock, 4000);

function batteryLevel(){
    let battery = document.getElementById('battery');
    battery.innerHTML="&#xf244;";
    setTimeout(function(){battery.innerHTML="&#xf244;"}, 1000);
    setTimeout(function(){battery.innerHTML="&#xf243;"}, 2000);
    setTimeout(function(){battery.innerHTML="&#xf242;"}, 3000);
    setTimeout(function(){battery.innerHTML="&#xf241;"}, 4000);
    setTimeout(function(){battery.innerHTML="&#xf240;"}, 5000);
    }
    batteryLevel();
    setInterval(batteryLevel, 4000);

function jetPlane(){
    let plane = document.getElementById('plane');
    plane.innerHTML="&#xf5b0;";
    setTimeout(function(){plane.innerHTML="&#xf5b0;"}, 1000);
    setTimeout(function(){plane.innerHTML="&#xf072;"}, 2000);
    setTimeout(function(){plane.innerHTML="&#xf5af;"}, 3000);
    }
    jetPlane();
    setInterval(jetPlane, 4000);

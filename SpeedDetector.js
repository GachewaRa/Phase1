let speed=104;
let extra;
let points;
if (speed<=70){console.log("OK")}
else if (speed>70){
    extra=speed-70;
    points=(Math.floor(extra/5));
    if (points>12){console.log("LICENSE SUSPENDED!")}
    else{console.log("Points: " + points)}

}
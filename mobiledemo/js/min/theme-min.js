!function(){var t=function(){this.checkIfDown=function(t){Math.floor(t.y)>1||Math.floor(t.x)>1?$(".overlay").show():$(".overlay").hide()}},n=new t,o=0,e=0,c=!1;gyro.frequency=200,gyro.startTracking(function(t){var o=t.beta;o>5?(clearTimeout(c),$("#accel").html("Spin strength: "+Math.floor(distance))):$("#accel").html("Spin strength: 0"),n.checkIfDown(t)})}(jQuery);
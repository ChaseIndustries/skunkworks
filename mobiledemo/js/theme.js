(function(){
    var PhoneObj = function(){
      this.checkIfDown = function(o){
        if(Math.floor(o.y) > 1 || Math.floor(o.x) > 1){
          $(".overlay").show();
        } else {
          $(".overlay").hide();
        }
      }
    }
    var phone = new PhoneObj();
    var lastPos = 0, accel = 0, timeout = false;
    gyro.frequency = 200;
		gyro.startTracking(function(o) {
  		//o.beta is the position we are trying to get
  		var pos = o.beta;
      // calculate how much 'ground' has been covered since last time checked.
      if(pos > 5){
        clearTimeout(timeout);
        $("#accel").html("Spin strength: " + Math.floor(distance));
      } else {
         $("#accel").html("Spin strength: 0");
      }
      phone.checkIfDown(o);
		});
  
})(jQuery);
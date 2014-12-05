(function(){
  
  // character
  var Character = function(options){
    var self = this;
    //default options
    self._options = {container:".main-content"};

    this.init = function(options){
      self.winner = options.winner || false,
      self.type = options.type,
      $container = $(self._options.container);
      //create the element on the screen 
      self.el = document.createElement("div");
      self.el.setAttribute("class", self.type + " character");
      $container.append(self.el);
      // start moving in random directions
      self.startAnimation();
    }
    self.startAnimation = function(){
      var topVal = Math.random()*$(document).height() - $(self.el).height(),
      leftVal = Math.random()*$(document).width() - $(self.el).width();
      topCur = $(self.el).position().top,
      leftCur = $(self.el).position().left,
      speed = 30 //pixels/sec
      //calculate duration by distance.
      topDist = Math.abs(topVal - topCur),
      leftDist = Math.abs(leftVal - leftCur);
      duration = ((topDist + leftDist/2) / speed) / 10;
      var tween = self.tween = new TweenLite(self.el,duration,{top:topVal,left:leftVal,ease : Linear.easeNone});
      
      tween.vars.onCompleteParams = ["{self}"];
      tween.vars.onComplete = self.startAnimation;
      tween.defaultEase = "none";
      tween.play();  
    }
    this.options = function(key, value) {
      if (typeof key === 'string') {
        if (typeof value === 'undefined') {
          return typeof this.options[key] === 'undefined' ?
          null :
          this._options[key];
        }
        this._options[key] = value;
      } else {
        this._options = $.extend({}, this._options, key);
      }
      return this;
    }
    this.init(options);
  }
  
  
  
  //some food options
  var options = ["mexican","chinese","wings"],
  characters = [];
  $.each(options,function(i,v){
    characters.push(new Character({type:options[i]}));
  })
  function stopAnimations(){
    $.each(characters,function(i){
      var character = characters[i];
      if(character.tween.isActive()){
        character.tween.pause();
      } else {
        character.tween.play();
      }
    })
  }
  
  $(window).click(function(){
    stopAnimations();
  })
})(jQuery);
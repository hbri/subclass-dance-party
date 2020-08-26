var makeAnimateDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeBlueDancer.call(this, top, left, timeBetweenSteps);
  // blinky Dancer
  this.$node = $('<span class="dancer4"></span>');
  // var oldStep = this.step.bind(makeDancer.prototype);
  // oldStep();
  this.setPosition(top, left);
  // return blinkyDancer;
};
makeAnimateDancer.prototype = Object.create(makeDancer.prototype);
makeAnimateDancer.prototype.constructor = makeAnimateDancer;
// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function

makeAnimateDancer.prototype.oldStep = makeDancer.prototype.step;


makeAnimateDancer.prototype.step = function(top, left) {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // console.log(this);
  // this.$node.fadeIn();
  // this.$node.fadeOut();


  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);

  this.$node.animate({
    opacity: .45,
    borderWidth: 40
    // "border-radius": "4px",
    // position: "relative"
  }, 500, function () {});

  this.$node.animate({
    opacity: 1.00,
    borderWidth: 10
    // "border-radius": "12px",
    // position: "relative"
  }, 1000, function () {});

};
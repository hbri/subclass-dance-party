$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    if (window.dancers.length < 7) {
      $('body').append(dancer.$node);
      window.dancers.push(dancer);
    } else {
      dancer.$node.css('padding', 50);
      $('body').append(dancer.$node);
      window.dancers.push(dancer);
    }



  });

  $('.lineUpButton').on('click', function(event) {
    // iterate over dancers array
    for (var i = 0; i < window.dancers.length; i++) {
      var currentDancer = window.dancers[i];
      currentDancer.$node.css('left', 0);
    }

  });

  $('.hover').on('mouseover', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      var currentDancer = window.dancers[i];
      currentDancer.$node.css('left', 0);
    }
  });

  $('.dancer5').on('mouseover', '.dancer5', function(event) {
    for (var j = 0; j < window.dancers.length; j++) {
      var hoverDancer = window.dancers[i];
      hoverDancer.$node.addClass('hover');
    }
  });

  $('.dancer5').on('mouseleave', '.dancer5', function(event) {
    $(this.$node).removeClass('hover');
  });

});

// use right angle to find minimum distance of each element
  // iterate dancer
    // check its left and top
    // change remaining dancers' top + minVal and left + minVal;



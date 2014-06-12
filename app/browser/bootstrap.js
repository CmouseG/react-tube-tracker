/** @jsx React.DOM */
var React = require("react");
var config = require("../../config");
var networkData = require("../common/data");
var TubeTracker = require("../component/tube-tracker");

window.app = (function(scope) {
  var requiredFeatures = {
    "the selectors API": document.querySelector,
    "ES5 array methods": Array.prototype.forEach,
    "DOM level 2 events": window.addEventListener,
    "the HTML5 history API": window.history.pushState
  };

  for (var feature in requiredFeatures) {
    if (!requiredFeatures[feature]) {
      return alert("Sorry, but your browser does not support " + feature + " so this app won't work properly.");
    }
  }

  return React.renderComponent(<TubeTracker config={config} networkData={networkData} />, document.body);
})();

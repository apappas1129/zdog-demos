/* globals TAU, navy, red */

window.lilPyramid = function( options ) {
  var anchor = new Zdog.Anchor({
    addTo: options.addTo,
    translate: options.translate,
  });

  var panel = new Zdog.Shape({
    path: [
      { x: 0, y: -3, z: 0 },
      { x: 3, y:  0, z: 0 },
      { x: 0, y:  0, z: 3 },
    ],
    addTo: anchor,
    color: red,
  });

  panel.copy({
    rotate: { y: TAU/4 },
    color: red,
  });
  panel.copy({
    rotate: { y: TAU/2 },
    color: navy,
  });
  panel.copy({
    rotate: { y: TAU * 3/4 },
    color: navy,
  });

};

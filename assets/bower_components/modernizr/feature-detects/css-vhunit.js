Modernizr.addTest("cssvhunit",function(){var e;return Modernizr.testStyles("#modernizr { height: 50vh; }",function(t,n){var i=parseInt(window.innerHeight/2,10),r=parseInt((window.getComputedStyle?getComputedStyle(t,null):t.currentStyle).height,10);e=r==i}),e});
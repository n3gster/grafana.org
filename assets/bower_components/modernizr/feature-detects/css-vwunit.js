Modernizr.addTest("cssvwunit",function(){var e;return Modernizr.testStyles("#modernizr { width: 50vw; }",function(t,n){var i=parseInt(window.innerWidth/2,10),r=parseInt((window.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);e=r==i}),e});
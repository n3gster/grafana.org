describe("Modernizr Base",function(){var e,t;before(function(n){define("package",[],function(){return{}});var i=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}});i(["Modernizr","cleanup"],function(i,r){e=i,t=r,n()})}),it("should return an object",function(){expect(e).to.be.an("object")}),after(function(){t()})});
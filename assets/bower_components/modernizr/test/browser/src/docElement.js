describe("docElement",function(){var e,t;before(function(n){var i=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}});i(["docElement","cleanup"],function(i,r){e=i,t=r,n()})}),it("is an alias to document.documentElement",function(){expect(e).to.equal(document.documentElement)}),it("is valid and correct",function(){expect(e).to.equal(document.getElementsByTagName("html")[0])}),after(function(){t()})});
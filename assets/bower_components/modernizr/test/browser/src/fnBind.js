describe("fnBind",function(){var e,t;before(function(n){var i=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}});i(["fnBind","cleanup"],function(i,r){e=i,t=r,n()})}),it("binds to `this`",function(){var t={x:1},n=function(){return this.x};expect(e(n,t)()).to.equal(1)}),after(function(){t()})});
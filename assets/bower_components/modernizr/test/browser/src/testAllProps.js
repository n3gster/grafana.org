describe("testAllProps",function(){var e,t,n,o,r,i={};before(function(e){r=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{sinon:"../test/js/lib/sinon",cleanup:"../test/cleanup"}}),define("ModernizrProto",[],function(){return i}),define("package",[],function(){return{}}),r(["cleanup","sinon"],function(t,r){n=t,o=r,e()})}),beforeEach(function(n){t=o.spy(),define("testPropsAll",function(){return t}),r(["testAllProps"],function(t){e=t,n()})}),it("is a curried version of `testPropsAll`",function(){e("flexAlign","end",!0),expect(t.calledOnce).to.be(!0),expect(t.calledWithExactly("flexAlign",void 0,void 0,"end",!0)).to.be(!0)}),it("is added to ModernizrProto",function(){expect(e).to.equal(i.testAllProps)}),after(function(){n()})});
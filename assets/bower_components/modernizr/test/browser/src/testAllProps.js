describe("testAllProps",function(){var t,e,n,i,r,o={};before(function(t){r=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{sinon:"../test/js/lib/sinon",cleanup:"../test/cleanup"}}),define("ModernizrProto",[],function(){return o}),define("package",[],function(){return{}}),r(["cleanup","sinon"],function(e,r){n=e,i=r,t()})}),beforeEach(function(n){e=i.spy(),define("testPropsAll",function(){return e}),r(["testAllProps"],function(e){t=e,n()})}),it("is a curried version of `testPropsAll`",function(){t("flexAlign","end",!0),expect(e.calledOnce).to.be(!0),expect(e.calledWithExactly("flexAlign",void 0,void 0,"end",!0)).to.be(!0)}),it("is added to ModernizrProto",function(){expect(t).to.equal(o.testAllProps)}),after(function(){n()})});
describe("domPrefixes",function(){var e,t,n,i=function(n,i){return function(){define("ModernizrProto",[],function(){return{_config:{usePrefixes:i}}}),e(["domPrefixes"],function(e){t=e,n()})}()},r=function(){t=void 0,e.undef("domPrefixes"),e.undef("ModernizrProto")};before(function(t){define("package",[],function(){return{version:"v9999"}}),(e=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}}))(["cleanup"],function(e){n=e,t()})}),describe("prefixes enabled",function(){before(function(e){i(e,!0)}),after(r),it("returns prefixes",function(t){e(["domPrefixes"],function(e){expect(e).to.not.have.length(0),t()})})}),describe("prefixes disabled",function(){before(function(e){i(e,!1)}),after(r),it("returns no prefixes",function(t){e(["domPrefixes"],function(e){expect(e).to.have.length(0),t()})})}),after(function(){n()})});
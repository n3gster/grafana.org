describe("addTest",function(){var e,t,n,i,r,o,a;before(function(e){(a=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup",sinon:"../test/js/lib/sinon"}}))(["cleanup","sinon"],function(t,n){r=t,o=n,e()})}),beforeEach(function(r){e={},n={_q:[],_config:{}},t=o.spy(),define("ModernizrProto",[],function(){return e}),define("Modernizr",[],function(){return n}),define("setClasses",[],function(){return t}),define("package",[],function(){return{}}),a(["addTest"],function(e){i=e,r()})}),afterEach(function(){a.undef("ModernizrProto"),a.undef("setClasses"),a.undef("Modernizr"),a.undef("package"),a.undef("addTest")}),describe("setup",function(){it("adds an object for test listeners",function(){expect(e._l).to.be.an("object")}),it("should define the `ModernizrProto._trigger` function",function(){expect(e._trigger).to.be.an("function")}),it("should push the Modernizr.addTest definition to the `_q`",function(){expect(n._q).to.have.length(1),expect(n._q[0]).to.be.a("function")}),it("should define Modernizr.addTest at the end of the _q",function(){n._q[0](),expect(e.addTest).to.be(i)})}),describe("Modernizr.on",function(){var t=function(){};it("keeps track of requests",function(){e.on("fakeDetect",t),expect(e._l.fakeDetect).to.be.an("array"),expect(e._l.fakeDetect[0]).to.be(t)}),it("does not recreate the queue with duplicate requests",function(){e.on("fakeDetect",t),e.on("fakeDetect",t),expect(e._l.fakeDetect.length).to.be(2)}),it("triggers results if the detect already ran",function(i){n.fakeDetect="fake",n._trigger=o.spy(),e.on("fakeDetect",t),setTimeout(function(){expect(n._trigger.calledOnce).to.be(!0),expect(n._trigger.calledWith("fakeDetect",n.fakeDetect)).to.be(!0),i()},0)})}),describe("Modernizr._trigger",function(){it("skips the callback if it does not exist",function(){expect(function(){e._trigger("fakeDetect")}).to.not.throwError()}),it("runs the listener calledback if it does exist",function(t){var n=o.spy();e.on("fakeDetect",n),e._trigger("fakeDetect","fakeRes"),setTimeout(function(){expect(n.calledOnce).to.be(!0),t()})}),it("deletes the listener after it runs",function(t){e.on("fakeDetect",function(){}),expect(e._l.fakeDetect).to.be.an("array"),e._trigger("fakeDetect","fakeRes"),setTimeout(function(){expect(e._l.fakeDetect).to.be(void 0),t()})})}),describe("Modernizr.addTest",function(){beforeEach(function(){n._trigger=o.spy(),n._trigger=o.spy(),expect(n.fakedetect).to.be(void 0),expect(n.fake).to.be(void 0),expect(n.detect).to.be(void 0)}),it("sets the proper bool on the Modernizr object with a function",function(){i("fakedetect",function(){return!0}),expect(n.fakedetect).to.be(!0)}),it("sets the proper bool on the Modernizr object with a bool",function(){i("fakedetect",!1),expect(n.fakedetect).to.be(!1)}),it("does not cast to a bool on the Modernizr object with a truthy value",function(){i("fakedetect",function(){return 100}),expect(n.fakedetect).to.be(100)}),it("sets a true class for a true value",function(){i("fakedetect",function(){return 100}),expect(t.callCount).to.be(1),expect(t.calledWith(["fakedetect"])).to.be(!0)}),it("sets a truthy class for a truthy value",function(){i("fakedetect",function(){return 100}),expect(t.callCount).to.be(1),expect(t.calledWith(["fakedetect"])).to.be(!0)}),it("sets a negative class for a false value",function(){i("fakedetect",function(){return!1}),expect(t.callCount).to.be(1),expect(t.calledWith(["no-fakedetect"])).to.be(!0)}),it("sets a negative class for a falsey value",function(){i("fakedetect",function(){return void 0}),expect(t.callCount).to.be(1),expect(t.calledWith(["no-fakedetect"])).to.be(!0)}),it("does not cast to a bool on the Modernizr object with a falsy value",function(){i("fakedetect",function(){return void 0}),expect("fakedetect"in n).to.be(!0),expect(n.fakedetect).to.be(void 0)}),it("forces detect names are lowercase",function(){i("FaKeDeTeCt",!0),expect(n.fakedetect).to.be(!0)}),it("supports nested properties with a bool base",function(){i("fake",new Boolean(!0)),i("fake.detect",!0),expect(n.fake).to.be.an("object"),expect(n.fake.detect).to.be(!0)}),it("supports nested properties",function(){i("fake",!0),i("fake.detect",!0),expect(n.fake).to.be.an("object"),expect(n.fake.detect).to.be(!0)}),it("does not overwrite values once they are set",function(){i("fakeDetect",!1),expect(n.fakedetect).to.be(!1),expect(n._trigger.calledOnce).to.be(!0),i("fakeDetect",!0),expect(n.fakedetect).to.be(!1),expect(n._trigger.calledOnce).to.be(!0)}),it("allows feature to be an object of features",function(){i({fake:!0,detect:!1}),expect(n.fake).to.be(!0),expect(n.detect).to.be(!1),expect(t.callCount).to.be(2),expect(t.calledWith(["fake"])).to.be(!0),expect(t.calledWith(["no-detect"])).to.be(!0)}),it("properly filters out monkey patched object properties",function(){var e=function(){};Object.prototype.MOD_FAKE_VALUE=e;var r={detect:!1};expect(r.MOD_FAKE_VALUE).to.be(e),i(r),delete Object.prototype.MOD_FAKE_VALUE,expect(n.MOD_FAKE_VALUE).to.be(void 0),expect(n.mod_fake_value).to.be(void 0),expect(n.detect).to.be(!1),expect(t.callCount).to.be(1)}),it("returns an instance of Modernizr for chaining",function(){expect(i("fakeDetect",!0)).to.be(n)})}),after(function(){r()})});
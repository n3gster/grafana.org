/*!
{
  "name": "JPEG 2000",
  "async": true,
  "aliases": ["jpeg-2000", "jpg2"],
  "property": "jpeg2000",
  "tags": ["image"],
  "authors": ["@eric_wvgg"],
  "notes": [{
    "name": "Wikipedia Article",
    "href": "https://en.wikipedia.org/wiki/JPEG_2000"
  }]
}
!*/
define(["Modernizr","addTest"],function(A,w){A.addAsyncTest(function(){var A=new Image;A.onload=A.onerror=function(){w("jpeg2000",1==A.width)},A.src="data:image/jp2;base64,/0//UQAyAAAAAAABAAAAAgAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAEBwEBBwEBBwEBBwEB/1IADAAAAAEAAAQEAAH/XAAEQED/ZAAlAAFDcmVhdGVkIGJ5IE9wZW5KUEVHIHZlcnNpb24gMi4wLjD/kAAKAAAAAABYAAH/UwAJAQAABAQAAf9dAAUBQED/UwAJAgAABAQAAf9dAAUCQED/UwAJAwAABAQAAf9dAAUDQED/k8+kEAGvz6QQAa/PpBABr994EAk//9k="})});
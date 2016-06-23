/*!
{
  "name": "CSS Hyphens",
  "caniuse": "css-hyphens",
  "property": ["csshyphens", "softhyphens", "softhyphensfind"],
  "tags": ["css"],
  "builderAliases": ["css_hyphens"],
  "async" : true,
  "authors": ["David Newton"],
  "warnings": [
    "These tests currently require document.body to be present",
    "If loading Hyphenator.js via yepnope, be cautious of issue 158: http://code.google.com/p/hyphenator/issues/detail?id=158",
    "This is very large – only include it if you absolutely need it"
    ],
  "notes": [{
    "name": "The Current State of Hyphenation on the Web.",
    "href": "http://davidnewton.ca/the-current-state-of-hyphenation-on-the-web"
  },{
    "name": "Hyphenation Test Page",
    "href": "http://davidnewton.ca/demos/hyphenation/test.html"
  },{
    "name": "Hyphenation is Language Specific",
    "href": " http://code.google.com/p/hyphenator/source/diff?spec=svn975&r=975&format=side&path=/trunk/Hyphenator.js#sc_svn975_313"
  },{
    "name": "Related Modernizr Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/312"
  }]
}
!*/
define(["Modernizr","prefixes","createElement","testAllProps","addTest"],function(A,e,t,n,i){A.addAsyncTest(function(){function A(){function a(){try{var A=t("div"),n=t("span"),i=A.style,o=0,a=0,d=!1,w=document.body.firstElementChild||document.body.firstChild;return A.appendChild(n),n.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",document.body.insertBefore(A,w),i.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",o=n.offsetHeight,a=n.offsetWidth,i.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+e.join("hyphens:auto; "),d=n.offsetHeight!=o||n.offsetWidth!=a,document.body.removeChild(A),A.removeChild(n),d}catch(r){return!1}}function d(A,e){try{var n=t("div"),i=t("span"),o=n.style,a=0,d=!1,w=!1,r=!1,D=document.body.firstElementChild||document.body.firstChild;return o.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;",n.appendChild(i),document.body.insertBefore(n,D),i.innerHTML="mm",a=i.offsetHeight,i.innerHTML="m"+A+"m",w=i.offsetHeight>a,e?(i.innerHTML="m<br />m",a=i.offsetWidth,i.innerHTML="m"+A+"m",r=i.offsetWidth>a):r=!0,w===!0&&r===!0&&(d=!0),document.body.removeChild(n),n.removeChild(i),d}catch(s){return!1}}function w(A){try{var e,n=t("input"),i=t("div"),o="lebowski",a=!1,d=document.body.firstElementChild||document.body.firstChild;i.innerHTML=o+A+o,document.body.insertBefore(i,d),document.body.insertBefore(n,i),n.setSelectionRange?(n.focus(),n.setSelectionRange(0,0)):n.createTextRange&&(e=n.createTextRange(),e.collapse(!0),e.moveEnd("character",0),e.moveStart("character",0),e.select());try{window.find?a=window.find(o+o):(e=window.self.document.body.createTextRange(),a=e.findText(o+o))}catch(w){a=!1}return document.body.removeChild(i),document.body.removeChild(n),a}catch(w){return!1}}return document.body||document.getElementsByTagName("body")[0]?(i("csshyphens",function(){if(!n("hyphens","auto",!0))return!1;try{return a()}catch(A){return!1}}),i("softhyphens",function(){try{return d("&#173;",!0)&&d("&#8203;",!1)}catch(A){return!1}}),void i("softhyphensfind",function(){try{return w("&#173;")&&w("&#8203;")}catch(A){return!1}})):void setTimeout(A,o)}var o=300;setTimeout(A,o)})});
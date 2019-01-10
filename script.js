(function() {
  var se = document.createElement('script'); se.type = 'text/javascript'; se.async = true;
  se.src = '//storage.googleapis.com/snapabug-hr-staging/js/59a899a5-0f8a-47bf-9232-8cf7a9a30501.js';
  var done = false;
  se.onload = se.onreadystatechange = function() {
    if (!done&&(!this.readyState||this.readyState==='loaded'||this.readyState==='complete')) {
      done = true;
      /* Place your SnapEngage Staging JS API code below */
      /* SnapEngage.allowChatSound(true); Example JS API: Enable sounds for Visitors. */
    }
  };
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(se, s);
})();

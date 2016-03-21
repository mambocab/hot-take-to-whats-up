(function() {
  // derived from http://stackoverflow.com/a/5915122
  function randomElement (items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function whatsup() {
    return [
      ["w", "W"], ["hat"], ["'", ""], ["s up "], // "[wW]hat'?s up "
      ["u", "you"], [" "],                       // "(u|you) "
      ["d", "D"], ["iscourse"], ["-", " "],      // "[Dd]iscourse[- ]"
      ["lovin"], ["g", "", "'"],                 // "lovin[g']?"
      [" fuck"], ["s", ""]                       // " fucks?"
    ].map(randomElement).join("");
  }

  function replaceHotTakes() {
    var tweets = document.querySelectorAll(".tweet-text");

    [].slice.call(tweets).forEach(function(el){
      // remove strong tags so text is replaced on the search page
      var oldText = el.innerHTML.replace(/<\/?strong>/gi, "");
      var newText = oldText.replace(/hot take:/i, whatsup() + ":");
      if (newText != oldText) {
        el.innerHTML = newText;
      }
    });
  }

  function tick() {
    replaceHotTakes();
    window.setTimeout(tick, 5000);
  }

  tick();
})();

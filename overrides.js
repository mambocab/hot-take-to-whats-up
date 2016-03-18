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
      var oldValue = el.innerHTML;
      var newValue = oldValue.replace(/hot take:/i, whatsup() + ":");
      if (newValue != oldValue) {
        el.innerHTML = newValue;
      }
    });
  }

  function tick() {
    replaceHotTakes();
    window.setTimeout(tick, 5000);
  }

  tick();
})();

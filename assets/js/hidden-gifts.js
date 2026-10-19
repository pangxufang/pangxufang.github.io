(function () {
    "use strict";

    var mysteryGift = document.getElementById("mystery-gift");
    if (!mysteryGift) return;

    mysteryGift.addEventListener("click", function () {
        mysteryGift.classList.toggle("is-open");
    });
})();

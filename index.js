// import { animate } from "popmotion";

import { hasIn } from "lodash";
console.log("first");


animate({
  from: "0px",
  to: "100px",
  repeat: Infinity,
  repeatType: "mirror",
  type: "spring",
  onUpdate(update) {
    ball.style.left = update;
  },
});


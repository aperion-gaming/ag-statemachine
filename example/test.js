import { createState, trigger } from "../dist/esm/index.js";
import { WheelMap } from "./map.js";

const state = createState({
  bla: false,
});

async function triggerWheel(event) {
  await trigger(event, WheelMap, state);
}

(async () => {
  await triggerWheel("step");
  await triggerWheel("step");
  await triggerWheel("step");
  await triggerWheel("step");
  await triggerWheel("step");
  await triggerWheel("step");

  state.bla = true;

  await triggerWheel("step");
  await triggerWheel("rotate");

})();

import { createState, trigger } from "../dist/esm/index.js";
import { WheelMap } from "./map.js";

const state = createState({
  bla: false,
});

async function triggerWheel(event, state, context) {
  await trigger(event, WheelMap, state, context);
}

(async () => {
  await triggerWheel("next", state, context);
})();

const { createState, trigger } = require("../dist/index.min.js");
const WheelMap = require("./map.js");

const state = createState({
  bla: false,
});

async function triggerWheel(event, state, context) {
  return await trigger(event, WheelMap, state, context);
}

(async () => {

  

  const ret = await triggerWheel("next", state, {});

  console.log(ret);
})();

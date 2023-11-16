module.exports = {
  initialState: "idle",
  states: {
    idle: {
      enter() {
        console.log("idle enter");
        return ["running", { ret: "asdasdasd" }];
      },
      next(state) {
        if (state.success) {
          return "running";
        }
      },
      pointerup: "error",
    },
    running: {
      enter() {
        console.log("running enter");
      },
    },
    error: {
      enter() {},
    },
  },
};

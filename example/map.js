export const WheelMap = {
  initialState: "betting",
  states: {
    betting: {
      enter() {
        console.log("entered betting");
      },
      exit() {
        console.log("exited betting");
      },
      step(state) {
        if (state.bla) {
          return "starting";
        }
        console.log("looping");
      },
    },
    starting: {
      enter: "playing",
    },
    playing: {
      enter() {
        console.log("entering playing");
      },
      rotate(state) {
        if (state.time === 1000) {
          return "stopping";
        }
        console.log("rotating");
      },
    },
    stopping: {},
    results: {
      exit: "betting",
    },
  },
};

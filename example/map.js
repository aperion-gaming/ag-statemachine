/*export const WheelMap = {
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
};*/

export const WheelMap = {
  initialState: "idle",
  states: {
    idle: {
      enter() {
        console.log("idle enter");
      },
      next(state){
        if(state.success){
          return 'running';
        }
      },
      pointerup:'error'
    },
    running: {
      enter() {
        console.log("running enter");
      },
    },
    error:{
      enter(){
        
      }
    }
  },
};

//@ts-ignore
export async function trigger(
  event: string,
  map: object,
  state: object,
  context: object
) {
  //@ts-ignore
  let evt = getEvent(map, event, state.currentState);

  if ((event === "enter" || event === "exit") && !evt) {
    return;
  }

  //@ts-ignore
  if (!state.currentState) {
    //@ts-ignore
    await transitionState(map.initialState, map, state, context);
    //@ts-ignore
    evt = getEvent(map, event, state.currentState);
  }

  let nextState;

  //@ts-ignore
  if (!evt) {
    //@ts-ignore
    throw new Error(`Event ${event} not found in state ${state.currentState}`);
  }

  if (typeof evt === "string") {
    nextState = evt;
  } else if (typeof evt === "function") {
    nextState = await evt.call(null, state, context);
  }

  if (!nextState) {
    return;
  }

  //@ts-ignore
  await transitionState(nextState, map, state, context);
}

export function createState(state: object) {
  return {
    currentState: "",
    ...state,
  };
}

//@ts-ignore
async function transitionState(
  nextState: string,
  map: object,
  state: object,
  context: object
) {
  //@ts-ignore
  if (nextState === state.currentState) {
    return;
  }

  await trigger("exit", map, state, context);

  //@ts-ignore
  state.currentState = nextState;

  //@ts-ignore
  await trigger("enter", map, state, context);
}

function getEvent(map: object, event: string, currentState: string) {
  //@ts-ignore
  return map.states[currentState]?.[event];
}

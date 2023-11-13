/**
 * Trigger an event on a state machine
 * @param event The event to trigger 
 * @param map The state map to use
 * @param state The current state of the machine
 * @param context The context to pass to the state
 * @returns void
 */
// @ts-ignore
export function trigger(
  event: string,
  map: object,
  state: object,
  context: object
): void {
  //@ts-ignore
  let evt = getEvent(map, event, state.currentState);

  if ((event === "enter" || event === "exit") && !evt) {
    return;
  }

  //@ts-ignore
  if (!state.currentState) {
    //@ts-ignore
    transitionState(map.initialState, map, state, context);
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
    nextState = evt.call(null, state, context);
  }

  if (!nextState) {
    return;
  }

  transitionState(nextState, map, state, context);
}

/**
 * Create a state object
 * @param state The state to create
 * @returns The state with the currentState property and the state object
 */
export function createState<T extends object>(
  state: T
): { currentState: string } & T {
  return {
    currentState: "",
    ...state,
  };
}

/**
 * Trigger an event on a state machine
 * @param event The event to trigger 
 * @param map The state map to use
 * @param state The current state of the machine
 * @param context The context to pass to the state
 * @returns  void
 */
export async function triggerAsync(
  event: string,
  map: object,
  state: object,
  context: object
): Promise<void> {
  //@ts-ignore
  let evt = getEvent(map, event, state.currentState);

  if ((event === "enter" || event === "exit") && !evt) {
    return;
  }

  //@ts-ignore
  if (!state.currentState) {
    //@ts-ignore
    await transitionStateAsync(map.initialState, map, state, context);
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
  await transitionStateAsync(nextState, map, state, context);
}

function transitionState(
  nextState: string,
  map: object,
  state: object,
  context: object
) {
  //@ts-ignore
  if (nextState === state.currentState) {
    return;
  }

  trigger("exit", map, state, context);

  //@ts-ignore
  state.currentState = nextState;

  //@ts-ignore
  trigger("enter", map, state, context);
}

async function transitionStateAsync(
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

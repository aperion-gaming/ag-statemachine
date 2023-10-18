declare function trigger(event: string, map: object, state: object): Promise<void>;
declare function createState(state: object): {
    currentState: string;
};

export { createState, trigger };

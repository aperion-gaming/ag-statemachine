declare function trigger(event: string, map: object, state: object, context: object): Promise<void>;
declare function createState<T extends object>(state: T): {
    currentState: string;
} & T;

export { createState, trigger };

declare function trigger(event: string, map: object, state: object, context: object): void;
declare function createState<T extends object>(state: T): {
    currentState: string;
} & T;
declare function triggerAsync(event: string, map: object, state: object, context: object): Promise<void>;

export { createState, trigger, triggerAsync };

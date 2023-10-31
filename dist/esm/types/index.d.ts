export declare function trigger(event: string, map: object, state: object, context: object): Promise<void>;
export declare function createState<T extends object>(state: T): {
    currentState: string;
} & T;

export declare function trigger(event: string, map: object, state: object, context: object): Promise<void>;
export declare function createState(state: object): {
    currentState: string;
};
export declare function transitionState(nextState: string, map: object, state: object, context: object): Promise<void>;
export declare function getEvent(map: object, event: string, currentState: string): any;
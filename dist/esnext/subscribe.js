import { unsubscribe } from "./unsubscribe.js";
import { emitMeta } from "./emit.js";
export const subscribe = (eventMap) => (event) => (...handlers) => {
    const unsub = (...handlers) => () => unsubscribe(eventMap)(event)(...handlers);
    return unsub(...handlers.map(handler => (emitMeta("SUBSCRIBE")(eventMap, event, handler),
        event in eventMap && eventMap[event].set(handler, unsub(handler)),
        handler)));
};
export const on = subscribe;
//# sourceMappingURL=subscribe.js.map
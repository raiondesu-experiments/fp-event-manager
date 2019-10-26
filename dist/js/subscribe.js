"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var unsubscribe_1 = require("./unsubscribe");
var meta_events_1 = require("./meta-events");
var util_1 = require("./util");
/**
 * A subscriber factory
 *
 * @param eventMap - an event collection to subscribe to
 * @param [unsubscribe] - (optional) a custom unsubscribe handler
 * @param [meta] - (optional) a custom meta events handler collection
 * @returns a function that subscribes handlers to a given event in a collection
 */
exports.subscribe = function (eventMap) { return function (eventOrOpts, onceArg) {
    if (onceArg === void 0) { onceArg = false; }
    var event = eventOrOpts.event || eventOrOpts;
    return function () {
        var handlers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            handlers[_i] = arguments[_i];
        }
        return (handlers.forEach(function (handler) {
            // Emit meta-event (ignore promise)
            meta_events_1.emitMeta('subscribe')(eventMap, event, handler);
            eventMap[event].set(handler, eventOrOpts.once || onceArg);
        }),
            function () { return unsubscribe_1.unsubscribe(eventMap)(event)
                .apply(null, handlers); });
    };
}; };
exports.on = exports.subscribe;
/**
 * A subscriber factory for all events of a given collection
 *
 * @param eventMap - an event collection to subscribe to
 * @returns a function that subscribes handlers to all events in the given event collection
 */
exports.subscribeToAll = util_1.doForAll(exports.subscribe);
exports.onAll = exports.subscribeToAll;
//# sourceMappingURL=subscribe.js.map
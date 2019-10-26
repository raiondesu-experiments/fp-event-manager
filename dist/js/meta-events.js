"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = require("./events");
var emit_1 = require("./emit");
exports.metaEvents = events_1.eventMap({
    subscribe: function (_, _eventMap, _eventName, _handler) { },
    unsubscribe: function (_, _eventMap, _eventName, _handler) { },
    emit: function (_, _eventMap, _eventName, _args) { },
});
exports.emitMeta = function (event) { return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return Promise.resolve(args[0] !== exports.metaEvents
        ? emit_1.emit(exports.metaEvents)(event).apply(null, args)
        : void 0);
}; };
//# sourceMappingURL=meta-events.js.map
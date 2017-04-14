import {Core} from "scaleApp";

class Sandbox {
    constructor(core, instanceId, options, moduleId) {
        this.message = "Hello there";
        core._mediator.installTo(this);
        this.id = instanceId;
    }
}

var core = new Core(Sandbox);
core.register("testModule", function (sandbox) {
    return {
        init: function() { alert("Init"); },
        destroy: function() { alert("Destroy"); }
    };
});

core.start();
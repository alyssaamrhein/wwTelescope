// declare global Worldwide Telescope object
var wwt;

// This function initializes the wwt object and registers the wwtReady event
// once the initialization is done the wwtReady event will be fired
function initialize() {
    wwt = wwtlib.WWTControl.initControl("WWTCanvas");
    wwt.add_ready(wwtReady);
}
// This is the ready event function where you would put your custom code for WWT
// following the initForWwt() call
function wwtReady() {
    wwt.loadImageCollection("http://www.worldwidetelescope.org/COMPLETE/wwtcomplete.wtml");
    // put your custom initialization code here
}
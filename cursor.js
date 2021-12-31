import * as LegendaryCursor from "/node_modules/legendary-cursor/dist/main.js";

window.addEventListener("load", () => {
    LegendaryCursor.init({
        lineSize:         0.05,
        opacityDecrement: 5.55,
        speedExpFactor:   555.98,
        lineExpFactor:    0.96,
        sparklesCount:    315,
        maxOpacity:       0.39,  // should be a number between [0 ... 1]
        // texture1:         "http://path_to_texture",      // texture displayed on mouse hover
        // texture2:         "http://path_to_texture",      // texture displayed on mouse click
        // texture3:         "http://path_to_texture",      // texture displayed on sparkles
    });
});
import PlayScreen from "./screens/play.js";
import resources from "./resources.js";
import data from "./data.js";

/**
 * Whack-A-Mole
 * Freely reused from the Cocos2d Whack-a-mole Tutorial
 * http://maniacdev.com/2011/01/tutorial-cocos2d-example-whack-a-mole-game/
 * Original version by Ray Wenderlich, the creator of the Space Game Starter
 * Kit and co-author of the Learning Cocos2D book, as part of an excellent set
 * of iOS tutorials on how to create a whack-a-mole game using the open source
 * iPhone game engine Cocos2D.
 **/
export default function onload() {

    // Initialize the video.
    if (!me.video.init(1024, 768, {parent : "screen", scale : "auto"})) {
        alert("Your browser does not support HTML5 canvas.");
        return;
    }

    // initialize the "sound engine"
    me.audio.init("mp3,ogg");

    // add a new hiscore key if not yet defined
    me.save.add({hiscore : 0});

    // set the local hiscore value
    data.hiscore = me.save.hiscore;

    // set all ressources to be loaded
    me.loader.preload(resources, () => {
        // set the "Play/Ingame" Screen Object
        me.state.set(me.state.PLAY, new PlayScreen());

        // set a fade transition effect
        me.state.transition("fade","#000000", 250);

        // start the game
        me.state.change(me.state.PLAY);
    });
};

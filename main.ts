let bot = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    bot = randint(1, 3)
    if (bot == 1) {
        basic.showLeds(`
            . . # # .
            . # # # #
            . # # # #
            . . # # .
            . . . . .
            `)
    } else if (bot == 2) {
        basic.showLeds(`
            . # # # #
            . # # # #
            . # # # #
            . # # # #
            . # # # #
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})

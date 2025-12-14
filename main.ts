let playing = false
let mode = 0
input.onButtonPressed(Button.A, function () {
    if (playing) {
        return
    }
    playing = true
    mode = 1
    music.setTempo(120)
    // Harry Potter - Hedwig's Theme
    music.playTone(247, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Double))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Double))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(370, music.beat(BeatFraction.Double))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(311, music.beat(BeatFraction.Whole))
    music.playTone(311, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(247, music.beat(BeatFraction.Double))
    music.playTone(247, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Double))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Double))
    music.playTone(554, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Double))
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Whole))
    music.playTone(233, music.beat(BeatFraction.Double))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Double))
    basic.pause(400)
    mode = 0
    playing = false
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    if (playing) {
        return
    }
    playing = true
    mode = 2
    music.setTempo(88)
    // ===== ТЕМА 1 =====
    // A
    music.playTone(440, music.beat(BeatFraction.Whole))
    // F#
    music.playTone(370, music.beat(BeatFraction.Whole))
    // A
    music.playTone(440, music.beat(BeatFraction.Whole))
    // F#
    music.playTone(370, music.beat(BeatFraction.Whole))
    // D
    music.playTone(587, music.beat(BeatFraction.Double))
    // A
    music.playTone(440, music.beat(BeatFraction.Whole))
    basic.pause(200)
    // ===== ТЕМА 2 =====
    // F#
    music.playTone(370, music.beat(BeatFraction.Whole))
    // G
    music.playTone(392, music.beat(BeatFraction.Whole))
    // A
    music.playTone(440, music.beat(BeatFraction.Whole))
    // B (ключевая)
    music.playTone(494, music.beat(BeatFraction.Double))
    // A
    music.playTone(440, music.beat(BeatFraction.Half))
    // G
    music.playTone(392, music.beat(BeatFraction.Half))
    // F#
    music.playTone(370, music.beat(BeatFraction.Double))
    basic.pause(300)
    // ===== ВОЗВРАТ ТЕМЫ 1 =====
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Double))
    music.playTone(440, music.beat(BeatFraction.Whole))
    basic.pause(300)
    // ===== КУЛЬМИНАЦИЯ =====
    // A
    music.playTone(440, music.beat(BeatFraction.Whole))
    // B
    music.playTone(494, music.beat(BeatFraction.Whole))
    // C#
    music.playTone(554, music.beat(BeatFraction.Whole))
    // D
    music.playTone(587, music.beat(BeatFraction.Double))
    // C#
    music.playTone(554, music.beat(BeatFraction.Whole))
    // B
    music.playTone(494, music.beat(BeatFraction.Whole))
    // A
    music.playTone(440, music.beat(BeatFraction.Double))
    basic.pause(600)
    mode = 0
    playing = false
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    if (playing) {
        return
    }
    playing = true
    mode = 3
    music.setTempo(120)
    // We wish you a Merry Christmas,
    // D
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    // G
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // G
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // A
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // G
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // F#
    music.play(music.tonePlayable(370, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // E
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    // E
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // We wish you a Merry Christmas,
    // E
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // A
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // A
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // B
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // A
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // G
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // F#
    music.play(music.tonePlayable(370, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    // D
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    // We wish you a Merry Christmas and a Happy New Year!
    // D
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    // B
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // B
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // C
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // B
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // A
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // G
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    // E
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // D
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // D
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // E
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // A
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // F#
    music.play(music.tonePlayable(370, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // G
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    // Good tidings we bring to you and your kin;
    // D
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // G
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // G
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // G
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // F#
    music.play(music.tonePlayable(370, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // F#
    music.play(music.tonePlayable(370, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // G
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // F#
    music.play(music.tonePlayable(370, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // E
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // D
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    // Good tidings for Christmas and a Happy New Year!
    // A
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // B
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // A
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // G
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // D
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // D
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // E
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // E
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // E
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // A
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // F#
    music.play(music.tonePlayable(370, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    // G
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    mode = 0
    playing = false
    basic.clearScreen()
})
basic.forever(function () {
    if (mode == 1) {
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                # # . # #
                . # . # .
                . # # # .
                . # . # .
                # # . # #
                `)
            basic.pause(200)
            basic.showLeds(`
                . . . # .
                . . # . .
                . # # # .
                . . # . .
                . # . . .
                `)
            basic.pause(200)
        }
        basic.clearScreen()
    }
    if (mode == 2) {
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                . # # # .
                . # # # .
                `)
            basic.pause(200)
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                . # . # .
                . # # # .
                `)
            basic.pause(200)
        }
        basic.clearScreen()
    }
    if (mode == 3) {
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                # . # . #
                . # # # .
                # # # # #
                . # # # .
                # . # . #
                `)
            basic.pause(200)
            basic.showLeds(`
                . # . # .
                # # # # #
                . # # # .
                # # # # #
                . # . # .
                `)
            basic.pause(200)
        }
        basic.clearScreen()
    }
})

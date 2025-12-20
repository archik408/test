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
input.onButtonPressed(Button.AB, function () {
    if (playing) {
        return
    }
    playing = true
    mode = 4
    // Jingle Bells
    // Бодрый темп для рождественской песни
    music.setTempo(80)
    // Первая часть: "Jingle bells, jingle bells"
    // СОЛЬ
    music.playTone(392, music.beat(BeatFraction.Quarter))
    // короткая пауза
    music.rest(music.beat(BeatFraction.Sixteenth))
    // СОЛЬ
    music.playTone(392, music.beat(BeatFraction.Quarter))
    // короткая пауза
    music.rest(music.beat(BeatFraction.Sixteenth))
    // СОЛЬ
    music.playTone(392, music.beat(BeatFraction.Half))
    // короткая пауза
    music.rest(music.beat(BeatFraction.Sixteenth))
    // СОЛЬ
    music.playTone(392, music.beat(BeatFraction.Quarter))
    // короткая пауза
    music.rest(music.beat(BeatFraction.Sixteenth))
    // СОЛЬ
    music.playTone(392, music.beat(BeatFraction.Quarter))
    // короткая пауза
    music.rest(music.beat(BeatFraction.Sixteenth))
    // СОЛЬ
    music.playTone(392, music.beat(BeatFraction.Half))
    // короткая пауза
    music.rest(music.beat(BeatFraction.Sixteenth))
    // СОЛЬ
    music.playTone(392, music.beat(BeatFraction.Quarter))
    // ЛЯ
    music.playTone(440, music.beat(BeatFraction.Quarter))
    // МИ
    music.playTone(330, music.beat(BeatFraction.Quarter))
    // ФА
    music.playTone(349, music.beat(BeatFraction.Quarter))
    // СОЛЬ
    music.playTone(392, music.beat(BeatFraction.Whole))
    // короткая пауза
    music.rest(music.beat(BeatFraction.Sixteenth))
    // Вторая часть: "Jingle all the way"
    // СИ
    music.playTone(494, music.beat(BeatFraction.Quarter))
    // короткая пауза
    music.rest(music.beat(BeatFraction.Sixteenth))
    // СИ
    music.playTone(494, music.beat(BeatFraction.Quarter))
    // короткая пауза
    music.rest(music.beat(BeatFraction.Sixteenth))
    // СИ
    music.playTone(494, music.beat(BeatFraction.Quarter))
    // короткая пауза
    music.rest(music.beat(BeatFraction.Sixteenth))
    // СИ
    music.playTone(494, music.beat(BeatFraction.Quarter))
    // короткая пауза
    music.rest(music.beat(BeatFraction.Sixteenth))
    // СИ
    music.playTone(494, music.beat(BeatFraction.Quarter))
    // ЛЯ
    music.playTone(440, music.beat(BeatFraction.Quarter))
    // короткая пауза
    music.rest(music.beat(BeatFraction.Sixteenth))
    // ЛЯ
    music.playTone(440, music.beat(BeatFraction.Quarter))
    // СОЛЬ
    music.playTone(392, music.beat(BeatFraction.Quarter))
    // ЛЯ
    music.playTone(440, music.beat(BeatFraction.Quarter))
    // короткая пауза
    music.rest(music.beat(BeatFraction.Sixteenth))
    // ЛЯ
    music.playTone(440, music.beat(BeatFraction.Quarter))
    // СОЛЬ
    music.playTone(392, music.beat(BeatFraction.Half))
    // пауза
    music.rest(music.beat(BeatFraction.Sixteenth))
    // Третья часть: "Oh what fun it is to ride"
    // СОЛЬ
    music.playTone(392, music.beat(BeatFraction.Quarter))
    // короткая пауза
    music.rest(music.beat(BeatFraction.Sixteenth))
    // СОЛЬ
    music.playTone(392, music.beat(BeatFraction.Quarter))
    // короткая пауза
    music.rest(music.beat(BeatFraction.Sixteenth))
    // СОЛЬ
    music.playTone(392, music.beat(BeatFraction.Half))
    // короткая пауза
    music.rest(music.beat(BeatFraction.Sixteenth))
    // СОЛЬ
    music.playTone(392, music.beat(BeatFraction.Quarter))
    // короткая пауза
    music.rest(music.beat(BeatFraction.Sixteenth))
    // СОЛЬ
    music.playTone(392, music.beat(BeatFraction.Quarter))
    // короткая пауза
    music.rest(music.beat(BeatFraction.Sixteenth))
    // СОЛЬ
    music.playTone(392, music.beat(BeatFraction.Half))
    // короткая пауза
    music.rest(music.beat(BeatFraction.Sixteenth))
    // СОЛЬ
    music.playTone(392, music.beat(BeatFraction.Quarter))
    // ЛЯ
    music.playTone(440, music.beat(BeatFraction.Quarter))
    // МИ
    music.playTone(330, music.beat(BeatFraction.Quarter))
    // ФА
    music.playTone(349, music.beat(BeatFraction.Quarter))
    // СОЛЬ
    music.playTone(392, music.beat(BeatFraction.Whole))
    // короткая пауза
    music.rest(music.beat(BeatFraction.Sixteenth))
    // Четвертая часть: "In a one horse open sleigh"
    // ЛЯ
    music.playTone(440, music.beat(BeatFraction.Quarter))
    // короткая пауза
    music.rest(music.beat(BeatFraction.Sixteenth))
    // ЛЯ
    music.playTone(440, music.beat(BeatFraction.Quarter))
    // короткая пауза
    music.rest(music.beat(BeatFraction.Sixteenth))
    // ЛЯ
    music.playTone(440, music.beat(BeatFraction.Quarter))
    // короткая пауза
    music.rest(music.beat(BeatFraction.Sixteenth))
    // ЛЯ
    music.playTone(440, music.beat(BeatFraction.Quarter))
    // короткая пауза
    music.rest(music.beat(BeatFraction.Sixteenth))
    // ЛЯ
    music.playTone(440, music.beat(BeatFraction.Quarter))
    // СОЛЬ
    music.playTone(392, music.beat(BeatFraction.Quarter))
    // короткая пауза
    music.rest(music.beat(BeatFraction.Sixteenth))
    // СОЛЬ
    music.playTone(392, music.beat(BeatFraction.Quarter))
    // короткая пауза
    music.rest(music.beat(BeatFraction.Sixteenth))
    // СОЛЬ
    music.playTone(392, music.beat(BeatFraction.Quarter))
    // МИ
    music.playTone(330, music.beat(BeatFraction.Quarter))
    // СОЛЬ
    music.playTone(392, music.beat(BeatFraction.Quarter))
    // МИ
    music.playTone(330, music.beat(BeatFraction.Half))
    // РЕ
    music.playTone(294, music.beat(BeatFraction.Half))
    // ДО
    music.playTone(262, music.beat(BeatFraction.Whole))
    // длинная пауза в конце
    music.rest(music.beat(BeatFraction.Whole))
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
    music.setTempo(92)
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
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (playing) {
        return
    }
    playing = true
    mode = 5
    // В лесу родилась ёлочка
    // Установлен темп чуть быстрее для детской песенки
    music.setTempo(83)
    // Куплет 1
    // "В ле-су"
    // соль (нижнее)
    music.playTone(196, music.beat(BeatFraction.Quarter))
    // МИ (верхнее)
    music.playTone(329, music.beat(BeatFraction.Quarter))
    // пауза между фразами
    music.rest(music.beat(BeatFraction.Sixteenth))
    // "ро-ди-лась"
    // МИ
    music.playTone(329, music.beat(BeatFraction.Quarter))
    // РЕ
    music.playTone(294, music.beat(BeatFraction.Quarter))
    // МИ
    music.playTone(329, music.beat(BeatFraction.Quarter))
    // "Ё-ЛОЧ-КА"
    // ДО (вниз)
    music.playTone(262, music.beat(BeatFraction.Quarter))
    // соль (нижнее)
    music.playTone(196, music.beat(BeatFraction.Quarter))
    // пауза между фразами
    music.rest(music.beat(BeatFraction.Sixteenth))
    // соль (нижнее) - длинная нота
    music.playTone(196, music.beat(BeatFraction.Half))
    // пауза между фразами
    music.rest(music.beat(BeatFraction.Sixteenth))
    // Куплет 2
    // "В ле-су"
    // соль (нижнее)
    music.playTone(196, music.beat(BeatFraction.Quarter))
    // МИ (наверх)
    music.playTone(329, music.beat(BeatFraction.Quarter))
    // пауза между фразами
    music.rest(music.beat(BeatFraction.Sixteenth))
    // "о-на"
    // МИ
    music.playTone(329, music.beat(BeatFraction.Quarter))
    // ФА (наверх)
    music.playTone(349, music.beat(BeatFraction.Quarter))
    // "рос-ла"
    // РЕ
    music.playTone(294, music.beat(BeatFraction.Quarter))
    // СОЛЬ (верхнее)
    music.playTone(392, music.beat(BeatFraction.Half))
    // пауза между фразами
    music.rest(music.beat(BeatFraction.Sixteenth))
    // Припев
    // "Зи-мой"
    // СОЛЬ (верхнее)
    music.playTone(392, music.beat(BeatFraction.Quarter))
    // ля (нижнее)
    music.playTone(220, music.beat(BeatFraction.Quarter))
    // пауза между фразами
    music.rest(music.beat(BeatFraction.Sixteenth))
    // "и ле-том"
    // ля (нижнее)
    music.playTone(220, music.beat(BeatFraction.Quarter))
    // ФА (наверх)
    music.playTone(349, music.beat(BeatFraction.Quarter))
    // пауза между фразами
    music.rest(music.beat(BeatFraction.Sixteenth))
    // ФА
    music.playTone(349, music.beat(BeatFraction.Quarter))
    // "строй-на-я"
    // МИ (вниз)
    music.playTone(329, music.beat(BeatFraction.Quarter))
    // РЕ
    music.playTone(294, music.beat(BeatFraction.Quarter))
    // ДО (вниз)
    music.playTone(262, music.beat(BeatFraction.Half))
    // пауза между фразами
    music.rest(music.beat(BeatFraction.Sixteenth))
    // "Зе-ле-на-я"
    // соль (нижнее)
    music.playTone(196, music.beat(BeatFraction.Quarter))
    // МИ (наверх)
    music.playTone(329, music.beat(BeatFraction.Quarter))
    // пауза между фразами
    music.rest(music.beat(BeatFraction.Sixteenth))
    // МИ
    music.playTone(329, music.beat(BeatFraction.Quarter))
    // РЕ
    music.playTone(294, music.beat(BeatFraction.Quarter))
    // "бы-ла"
    // МИ
    music.playTone(329, music.beat(BeatFraction.Quarter))
    // ДО (вниз)
    music.playTone(262, music.beat(BeatFraction.Half))
    // длинная пауза перед повторением
    music.rest(music.beat(BeatFraction.Whole))
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
})
basic.forever(function () {
    if (mode == 1) {
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
    if (mode == 2) {
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
    if (mode == 0 || mode == 3) {
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
    if (mode == 5) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . # # # .
            # # # # #
            `)
        basic.pause(200)
        basic.showLeds(`
            . # . # .
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.pause(200)
    }
    if (mode == 4) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            # # # # #
            . . # . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            # # # # #
            . # . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            # # # # #
            . . # . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            # # # # #
            . . . # .
            `)
    }
})

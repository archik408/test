let электричество = 0
pins.setPull(DigitalPin.P0, PinPullMode.PullDown)
basic.forever(function () {
    электричество = pins.analogReadPin(AnalogPin.P0)
    // Показываем "L" если < 100, "H" если > 100
    if (электричество > 100) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(200)
})

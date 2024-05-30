input.onSound(DetectedSound.Loud, function () {
    Zufall = randint(0, 4)
    if (Zufall == 0) {
        basic.showString("Hallo Tiger!", 300)
    } else if (Zufall == 1) {
        basic.showString("Du bist der coolste Rocka!", 300)
    } else if (Zufall == 2) {
        basic.showString("Du bist der putzigste Tiger!", 300)
    } else if (Zufall == 3) {
        music.play(music.createSoundExpression(WaveShape.Sine, 3597, 5000, 84, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("G - - C A E G C5 ", 297), music.PlaybackMode.UntilDone)
        music.playMelody("G F G A - F E D ", 182)
        basic.showIcon(IconNames.SmallHeart, 3000)
    } else {
        basic.setLedColors(0x00ff00, 0x0000ff, 0xffff00, 20)
        basic.pause(3000)
    }
    basic.turnRgbLedOff()
    music.stopMelody(MelodyStopOptions.All)
    basic.pause(150)
    basic.showIcon(IconNames.Heart)
    basic.pause(2500)
    basic.clearScreen()
})
let Zufall = 0
music.playTone(262, music.beat(BeatFraction.Whole))
basic.forever(function () {
    if (6 >= maqueen.ultrasonic(maqueen.DistanceUnit.Centimeters)) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 78)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 72)
        music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 112)
    }
})

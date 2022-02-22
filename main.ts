input.onButtonPressed(Button.A, function () {
    basic.showString("tmp C")
    basic.showString("" + (input.temperature()))
    basic.showLeds(`
        # . . # #
        . . . # .
        . . . # .
        . . . # .
        . . . # #
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("133333.33333333334 foie 3")
    basic.showString("" + (133333.33333333334 * 3))
    basic.showLeds(`
        # # . # #
        # # # # #
        . # # # .
        # # # # #
        # # . # #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("400000 div 3")
    basic.showString("" + (400000 / 3))
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        `)
})

input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.temperature()))
    basic.showLeds(`
        # . . # #
        . . . # .
        . . . # .
        . . . # .
        . . . # #
        `)
})

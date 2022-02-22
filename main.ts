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

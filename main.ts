input.onGesture(Gesture.TiltLeft, function () {
    basic.clearScreen()
    if (a > 0) {
        a = a - 1
    }
    radio.sendString("" + convertToText(a) + "|" + convertToText(b))
    wyswietlanie()
})
input.onGesture(Gesture.LogoDown, function () {
    basic.clearScreen()
    if (b > 0) {
        b = b + -1
    }
    radio.sendString("" + convertToText(a) + "|" + convertToText(b))
    wyswietlanie()
})
input.onGesture(Gesture.TiltRight, function () {
    basic.clearScreen()
    if (a < 4) {
        a = a + 1
    }
    radio.sendString("" + convertToText(a) + "|" + convertToText(b))
    wyswietlanie()
})
function fala () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . # # # .
        # . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # #
        # # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # .
        # # . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # . .
        # . . # .
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        . . # . .
        . . . # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . # . . #
        . . # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . # #
        . # # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # # #
        # # . . .
        `)
}
function wyswietlanie () {
    if (a == parseFloat(lista[0]) && b == parseFloat(lista[1])) {
        Boom()
    } else {
        led.plot(parseFloat(lista[0]), parseFloat(lista[1]))
        led.plotBrightness(a, b, 4)
    }
}
radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    lista = receivedString.split("|")
    wyswietlanie()
})
input.onGesture(Gesture.LogoUp, function () {
    basic.clearScreen()
    if (b < 4) {
        b = b + 1
    }
    radio.sendString("" + convertToText(a) + "|" + convertToText(b))
    wyswietlanie()
})
function Boom () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.Chessboard)
    basic.showIcon(IconNames.SmallSquare)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
    a = 4
    b = 4
    radio.sendString("" + convertToText(a) + "|" + convertToText(b))
    led.plotBrightness(a, b, 4)
    led.plot(parseFloat(lista[0]), parseFloat(lista[1]))
}
let lista: string[] = []
let b = 0
let a = 0
a = 4
b = 4
led.plotBrightness(a, b, 4)
radio.setGroup(1)
radio.sendString("" + convertToText(a) + "|" + convertToText(b))

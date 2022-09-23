let HAND = 0
input.onGesture(Gesture.Shake, function () {
    HAND = randint(1, 3)
    if (HAND == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (HAND == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})

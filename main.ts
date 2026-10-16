input.onButtonPressed(Button.A, function () {
    USB送信 = 1
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    USB送信 = 0
    basic.showIcon(IconNames.No)
})
radio.onReceivedValue(function (name, value) {
    if (USB送信) {
        serial.writeValue(name, value)
    }
})
let USB送信 = 0
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
radio.setGroup(191)
USB送信 = 1
basic.showIcon(IconNames.Happy)

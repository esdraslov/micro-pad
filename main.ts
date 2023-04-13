//% color='#A00'
namespace microPad{
    //% block='on button connected in pin 0 is pressed'
    export function onButtonPressedPZero(){
        input.onPinPressed(TouchPin.P0, function() {
            return true
        })
    }
}
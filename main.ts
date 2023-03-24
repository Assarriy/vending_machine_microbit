basic.showIcon(IconNames.Happy)
servos.P0.setAngle(45)
// LDR Sensor Calibrator
basic.forever(function () {
	
})
// Servo and LDR Sensor code
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        servos.P0.setAngle(0)
        basic.pause(500)
    } else {
        servos.P0.setAngle(45)
        basic.pause(500)
    }
})
// Servo Calibrator
basic.forever(function () {
	
})

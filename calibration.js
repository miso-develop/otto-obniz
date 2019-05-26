const Obniz = require("obniz")

const obniz = new Obniz("3418-4150")
obniz.onconnect = async function () {
    const rightLeg = obniz.wired("ServoMotor", {signal:0, vcc:1, gnd:2})
    const leftLeg = obniz.wired("ServoMotor", {signal:3, vcc:4, gnd:5})
    const rightFoot = obniz.wired("ServoMotor", {signal:6, vcc:7, gnd:8})
    const leftFoot = obniz.wired("ServoMotor", {signal:9, vcc:10, gnd:11})
    
    rightLeg.angle(90)
    leftLeg.angle(90)
    rightFoot.angle(90)
    leftFoot.angle(90)
}

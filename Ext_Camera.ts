
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

/**
 * Custom blocks
 */
//% weight=100 color=#6495ED icon="\uf030"
namespace Camera {
	
	// -------------- 1. Intialize Camera ----------------
    //% blockId=initialize_camera
	//% block="Initialize Camera Module"   
	//% weight=60
    export function initizlizeCamera(): void {
        serial.redirect(
			SerialPin.P16,
			SerialPin.P8,
			BaudRate.BaudRate115200
		)
    }
	// -------------- 2. Start Face Detection ----------------
    //% blockId="Camera_FaceDetection 
    //% block="Face Detection"
    //% weight=70
    	
    export function FaceDetection(): void {
		
		serial.writeString("faces")
		
    }
	// -------------- 3. Start Object Detection ----------------
    //% blockId="Camera_ObjDetection 
    //% block="Object Detection"
    //% weight=80
    	
    export function ObjDetection(): void {
		
		serial.writeString("object")
		
    }
	// -------------- 4. Return Detection Value ----------------
    //% blockId="Camera_dataResponse_faces
    //% block="Data Response(faces)"
    //% weight=90
    	
    export function DataResponse_faces(): string {
        let temp = ""
        temp = serial.readLine()
		if (temp == "faces") {
			basic.showIcon(IconNames.Happy)
		} else if (temp == "no") {
			basic.showIcon(IconNames.Asleep)
        }
		serial.writeString("got")
        return temp;
    }
	
	//% blockId="Camera_dataResponse_obj
    //% block="Data Response(object)"
    //% weight=100
	export function DataResponse_obj(): string {
        let temp = ""
        temp = serial.readLine()
		if (temp == "notebook") {
            basic.showIcon(IconNames.Sad)
        } else if (temp == "no") {
			basic.showIcon(IconNames.Asleep)
        }
		serial.writeString("got")
        return temp;
    }
	
    
}

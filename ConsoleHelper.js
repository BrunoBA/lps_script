const colors = require('colors');

class ConsoleHelper {
    constructor() {
        this.text = "";
        this.color = "red";
        this.height = null
        this.width = null
    }

    static fullSizeText (text, color = "red") {
        if (process.stdout.isTTY) {
            let sizes = process.stdout.getWindowSize();
            this.width = sizes[0];
            this.height = sizes[1];
            
            let line = Math.round(( this.width - text.length - 2 ) / 2);
            let lineString = "";

            for (let index = 0; index < line; index++) {
                lineString = lineString + "=";
            }            

            console.log(`${lineString[color]}${text[color]}${lineString[color]}`)
        } else {
            console.log("stdout is not a console").red.underline;
        } 
    }
}

module.exports = ConsoleHelper;
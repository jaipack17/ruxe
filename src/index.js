/**
 * _config = {
 *   color: string,
 *   align: string,
 *   wordsPerLine: integer
 * }
 */

const config = require("../config/default");
const alignments = require("../utils/alignments");
const colors = require("../utils/colors");
var center = require('center-align');

/**
 * 
 * @param {string} _str 
 * @param {object} _config 
 * @param {string} _config.color
 * @param {string} _config.align
 * @param {string} _config.wordsPerLine
 * @returns {string}
 */

module.exports = function (_str, _config) {
    function typechecks() {
        if (typeof _config != "object" && typeof _config != "undefined") throw new TypeError("config must be an object.");
        if (typeof _config == "undefined") return;
        if (typeof _config.color != "undefined" && typeof _config.color != "string") throw new TypeError("config.color must be a string.");
        if (typeof _config.align != "undefined" && typeof _config.align != "string") throw new TypeError("config.align must be a string.");
        if (typeof _config.wordsPerLine != "undefined" && typeof _config.wordsPerLine != "number") throw new TypeError("config.wordsPerLine must be a string.");
    }

    function setParams() {
        var color = config.color;
        var align = config.align;
        var wordsPerLine = config.wordsPerLine;

        if(!_config) return [ color, align, wordsPerLine ];
        if (_config.color && _config.color.toLowerCase() in colors) color = colors[_config.color.toLowerCase()];
        if (_config.align && alignments.includes(_config.align.toLowerCase())) align = _config.align;
        if (_config.wordsPerLine) wordsPerLine = _config.wordsPerLine;

        return [ color, align, wordsPerLine ];
    }

    function edit(s, p) {
        let res = "";
        let words = s.split(config.wordSeparater);
            
        for(var i = 0; i < words.length; i++) {
            if (i != 0 && i%p[2] == 0) {
                res += words[i] + "\n";
            } else {
                res += words[i] + " ";
            }
        }
        return res.replace(/(\s)\1+/g, '$1');
    }

    function paint(s, p) {
        return `${p[0]}${s}\x1b[0m`;
    }

    function changeAlign(s, p) {
        let a = s.split(/\r\n|\r|\n/);
        let fin = "";
        let maxLen = -2147483648;

        a.forEach(e => {
            if (e.length > maxLen) {
                maxLen = e.length + 5;
            }
        })

        if (p[1] == "right") {
            for(var i = 0; i < a.length; i++){
                let spaces = maxLen - a[i].length;
                if(i == a.length - 1) {
                    spaces += 5;
                }
                if(i == 0) {
                    fin += " ".repeat(10) + a[i] + "\n"
                } else {
                    fin += " ".repeat(spaces) + a[i] + "\n";
                }
            }

            return fin;
        }
        else if (p[1] == "center") {
            let centered = center(a);
            centered.forEach(line => {
                fin += line + "\n";
            })

            return fin;
        }
        return s;
    }

    typechecks();
    const _params = setParams();
    const result = edit(_str, _params);
    const colored = paint(result, _params);
    const aligned = changeAlign(colored, _params);

    return aligned;
}
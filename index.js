exports.decodeTQ = (text) => {
    try {
        return text.replace(/0/g, "o").replace(/1/g, "i").replace(/2/g, "s").replace(/3/g, "e").replace(/4/g, "a").replace(/5/g, "s").replace(/6/g, "g").replace(/7/g, "l").replace(/8/g, "B").replace(/9/g, "g").replace(/\$/g, "s").replace(/\^/g, "'").replace(/\/\\\/\\/g, "m").replace(/\/\\\//g, "n").replace(/\|\_\|/g, "L").replace(/\|_\|/g, "U") + ""
    } catch (err) {
        throw new Error('Error occured in function decodeTQ\n' + err)
    };
};
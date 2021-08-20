const crypto = require("crypto");

//系统加密规则
//params为一个对象
exports.sign = function (obj,accessSecret) {
    function sortKey(info) {
        var str = "";
        var keyArr = [];
        for (var key in info) {
            if (info[key] == "" || !info[key]) {
                continue;
            }
            keyArr.push(key);
        }
        keyArr.sort();
        for (var i = 0; i < keyArr.length; i++) {
            if (i > 0) {
                str += "&";
            }
            var value = typeof (info[keyArr[i]]) == "object" ? JSON.stringify(info[keyArr[i]]) : info[keyArr[i]];
            str += (keyArr[i] + "=" + value)
        }
        // console.log("params:"+str);
        // return encodeURIComponent(str);
        return str;
    };

    var str = sortKey(obj);
    var sha256 = crypto.createHash("SHA256");
    sha256.update(str);
    str = sha256.digest("hex");
    var hmac = crypto.createHmac("SHA1", accessSecret);
    hmac.update(str, 'utf-8');
    str = hmac.digest('Base64');
    return str;
}
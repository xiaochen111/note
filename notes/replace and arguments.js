var email = 'abc@163.com';
function handle() {
    return arguments[1] + arguments[2] + arguments[3]; //${1} ${2} ${3},相当于分组
}
var RegExp = /(.*)@(.*)\.(.*)/;
// email = email.replace(RegExp, handle);

// replace还可以这么用，厉害

var result;
result = email.match(RegExp);
email = result[1] + result[2] + result[3];

//等同于match

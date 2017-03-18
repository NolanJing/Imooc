// 我们这里使用CommonJS的风格
function generateText() {
    var element = document.createElement('con');
    let info = '<br>(stylus 計画通り)';
    element.innerHTML = `${info}`;
    return element;
}

module.exports = generateText;

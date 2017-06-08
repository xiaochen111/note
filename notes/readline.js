const readline = require('readline');
const question = ['what is your name ? > ', 'how old are you ? > '];
const index = 0;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: question[0]
})
rl.prompt();
rl.on('line', data => {
    console.log('hello ' + data);
    index += 1;
    if(question[index]) {
        rl.setPrompt(question[index]);
        rl.prompt();
    } else {
        rl.close();
    }
}).on('close', () => {
    console.log('再见！');
});
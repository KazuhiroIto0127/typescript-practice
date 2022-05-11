import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question('文字列を入力してね:', (line) => {
//     console.log(`${line}が入力されました。`)
//     rl.close();
// })

rl.question('数字を入力してね:', (line) => {
    const input = Number(line);
    console.log(`${input + 1000}`)
    rl.close();
})


// runtime error
// const bigint = BigInt("foooo");
// console.log(`${bigint}`);
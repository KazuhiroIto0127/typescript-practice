const message: string = 'Hello';
const target: string = 'World';
console.log(message + target);


/***********
/ Number型
*************/
// 53bitに収まらないため正確に表示できない
console.log(9007199254740993);

// おかしな結果になる。なぜか0.30000000000..4
console.log(0.1 + 0.2);

/***********
/ BigInt型
*************/
const bignum: bigint = (123n + 456n);
console.log(bignum);


/***********
/ テンプレートリテラル
*************/
const str1 = `Hello
world!!!!!!!!
`;
console.log(`${str1}`);

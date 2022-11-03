export const sayHello = (name: string): void => {
    console.log(`hello ${name}`)
}

export const addKinoko = (strArray: string[]): string[] => {
    strArray.push('きのこ');
    return strArray;
}

export const OutputUnionArray = (): void => {
    let unionArray: (string|number)[] = []
    unionArray.push('きのこ');
    unionArray.push(1);
    console.log(unionArray);
}

type UserType = {
    name: string,
    age: number,
    height?: number
}
export const OutputUserObject = (user: UserType): void => {
    console.log(`${user.name}さんは${user.age}歳です`);
    if(user.height) {
        console.log(`${user.height}cmです。`);
    }
}

type AnimalType = {
    [key: string]: string
}
export const OutputAnimalObject = (animal: AnimalType): void => {
    console.log(`${animal.name}という動物は${animal.legs ? animal.legs : 0}本の足があります`);
}

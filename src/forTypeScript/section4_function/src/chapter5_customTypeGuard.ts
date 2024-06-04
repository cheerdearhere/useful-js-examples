
type Dog = {
    name: string;
    isBark: boolean;
}
type Cat = {
    name: string;
    isScratch:boolean;
}
type Animal = Dog | Cat;

function isDog(animal:Animal): animal is Dog{
    return (animal as Dog).isBark !== undefined;
}
function isCat(animal:Animal): animal is Cat{
    return (animal as Cat).isScratch !== undefined;
}
function waring(animal:Animal){
    if(isDog(animal)){
        console.log(animal.isBark);
    }
    else if(isCat(animal)){
        console.log(animal.isScratch);
    }
}
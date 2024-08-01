const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button');

type NumOrString = number |string;
// type resultObj = {val:number,timestamp:Date} type alias

interface resultObj{
    val:number,
    timestamp :Date
}

function Add(num1: NumOrString , num2: NumOrString) {

    if(typeof num1 ==='number' && typeof num2 === 'number'){
        return num1 + num2;
    }
    if(typeof num1 ==='string' && typeof num2 === 'string'){
        return num1 +' '+ num2;
    }
   return  +num1 + +num2;
}

const numResult:Array<number>= []
const stringResult:string[] =[]


function printObj(resultObj:resultObj){
    console.log(resultObj.val)
}

buttonElement?.addEventListener('click', () => {
    const num1= num1Input.value;
    const num2 = num2Input.value;
    const numberresult = Add(+num1, +num2); 
    numResult.push(numberresult as number)
    const textresult = Add(num1, num2); 
    stringResult.push(textresult as string)
    printObj({val:numberresult as number,timestamp:new Date()})
    console.log(numberresult); 
});


// console.log(Add('1', '2')) this will throw error as type arguments are not of type number


const myPromise = new Promise<string>((resolve,reject)=>{
    setTimeout(()=>{
        resolve('it worked')
    },1000)
})

myPromise.then((res)=>{
    console.log(res.split('w'))
})
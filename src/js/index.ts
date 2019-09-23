let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");

let buttonDoIt: HTMLButtonElement = <HTMLButtonElement> document.getElementById("DoIt");
buttonDoIt.addEventListener("click", isEqual);

function isEqual(): void {

let result: string;

    let inputElement: HTMLInputElement = <HTMLInputElement> document.getElementById("TextInput");
    
    let signElement: HTMLInputElement = <HTMLInputElement> document.getElementById("Operator");
    let Operator: string = signElement.value; // fisker navnet ud fra min "Select".
    
    let TextInput: string = inputElement.value; // fisker navnet ud af min input field.

    switch (Operator) {
        case "ToUpper": result = TextInput.toUpperCase()//code block statement1;
            break;
        case "ToLower": result = TextInput.toLowerCase() //code block statement2;
            break;
    }


    element.innerHTML = result;
}

const init = () => {
    const input = [1, 3, 1, 2, 3, 4, 3, 4];
    
    document.querySelector('.input').value = input;
    
    const numberOfTestCases = input[0];
    const lengthOfFirstArray = input[1];
    const firstArray = input.slice(2, lengthOfFirstArray + 2);
    const lengthOfSecondArray = input.slice(lengthOfFirstArray + 2, lengthOfFirstArray + 3);
    const secondArray = input.slice(lengthOfFirstArray + 3, input.length);
    
    const mergeList = (first, second) => {
        const output = first.concat(second);
        document.querySelector('.output').value = output;
    }
    
    mergeList(firstArray, secondArray);
}

document.querySelector('.button').addEventListener('click', init);
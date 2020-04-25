
const init = () => {
    const input = {
        numberOfElements: document.querySelector('.length').value,
        numberOfRotations: document.querySelector('.rotations').value,
        valuesOfArray: Array.from(document.querySelector('.array').value.split(',')),
    };
    
   
    const samFunction = (n, d, array) => {
        const temp = array.slice(d, n);
        array = array.slice(0, d);
        console.log(temp + ',' + array);
    }
                 
    samFunction(input.numberOfElements, input.numberOfRotations, input.valuesOfArray);
}

const checkfunction = () => {
    if(document.querySelector('.length').value <= 0) {
        alert('Number of the array elements can\'t be 0 or negative');
    } else if (document.querySelector('.rotations').value > document.querySelector('.length').value) {
        alert('Number of the rotations can\'t be greater than number of elements');
    } else if(document.querySelector('.length').value != Array.from(document.querySelector('.array').value.split(',')).length) {
        alert('Number of the element not equal');
    }
}

document.querySelector('.ready').addEventListener('click', init);
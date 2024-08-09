const input = document.getElementById('input')
const submit = document.getElementById('submit')
const ul = document.querySelector('ul')
const messageToast = document.getElementById('messageToast')

submit.addEventListener('click', (event) => {
    event.preventDefault()
    if(input.value != '') {
        addItem(input.value)
    } else {
        alert('Digite um item antes de adicionar na lista')
    }
})

function addItem(item) {
    const newLi = document.createElement('li')
    const newCheckBox = document.createElement('input')
    newCheckBox.setAttribute("type", "checkbox");
    const newSpan = document.createElement('span')
    const newBin = document.createElement('img')
    newBin.setAttribute('src', './assets/bin.svg')

    newSpan.textContent = item

    newLi.append(newCheckBox, newSpan, newBin)

    ul.append(newLi)

    newBin.addEventListener('click', () => {
        newLi.remove();
        showToastMessage();
    });
}

function showToastMessage() {
    messageToast.classList.remove('hidden')
    setTimeout(() => {
        messageToast.classList.add('hidden')
    }, '2000')
}




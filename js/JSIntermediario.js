//objeto é uma coleção de dados e ou funcionalidades que podem conter propriedades e metodos


//criação de um objeto vazio
const obj = {}
console.log(typeof obj)


//criação de um objeto com propriedades e metodos
const user = {
    email: 'lads@das.com',
    age: 18,
    name: {//aninhada
        firstName: 'luiz',
        surname: 'scarparo'
    },
    adress: {
        street: 'rua x',
        number: 23,
        city: 'pf',
        postalCode: '123321-22'
    },
    message: (mensagem) => {//é possivel criar mensagens dentro de um objeto
        console.log(`${mensagem}`)
    }
}

//acessando propriedades e metodos usando notação de ponto
console.log(user.name)
console.log(user.name.firstName)
console.log(user.message('alo'))

    //outra forma de acessar
    console.log(user['email'])
    console.log(user['name']['surname'])

//Acessando propriedades no contexto do objeto

const nome = {
    name: 'joao',
    picture: undefined,
    message: () => {
        console.log(nome.name) //UMA DAS FORMAS
        console.log(this.name) //OUTRA FORMA
    }
}
    console.log(nome.name)

    nome.name = 'luiz' //reatribuir o objeto

    console.log(nome.name) 

    //Optional chaining

    console.log(nome?.name) //interroga usado para mostrar incerteza, retorna undefined caso nao tenha nada ao invez de um erro

    //COALESCENCIA NULA: operador logico que retorna o seu operando do lado direito quando o seu do esquero for null ou unidefined, se nao, ele retorna o lado esquerdo

    let content = null
    console.log(content ?? 'conteudo padrão')
    console.log(nome.picture ?? fotoPadrao)


//FUNCAO CONSTRUTORA
    

function createProduct(name) {
    const product = {} //cria obj vazio

    product.name = name //adiciona name ao obj vazio

    product.details = function () {
        console.log(`O nome do produto é ${this.name}`)
    }

    return product
}

//o new cria um novo objeto utilizando a estrutura da função construtora 

const product1 = new createProduct('teclado')
console.log(product1.name)
product1.details()

const product2 = new createProduct('mouse')
console.log(product2.name)
product2.details()

console.log (product1 === product2) //false

//exemplos de funções construtoras no js

let myName = new String('luiz')
console.log(myName) //String{'luiz'}

let price = '40.6'.replace('.', '')
console.log(price) // 406

let date = new Date('2024-1-1')
console.log(date) //mon jan 01 2024 00:00:00

//CONTEUDO STRING

    let string = 'aloo'
    let stringSpace = '    alo'

    console.log(string.toLowerCase()) //tudo pra minuscula aloo
    console.log(string.toUpperCase()) //tudo pra maiuscula ALOO

    console.log(string.length) //descobre o tamanho, LENGTH FUNCIONA APENAS PRA STRING NESSES CASOS 4

    console.log(string.replace('aloo', 'oola')) //substitui parte do texto oola

    //extrair uma parte do texto (start, end)
    console.log(string.slice(0, 1)) // al
    console.log(string.slice(-2)) // ool

    console.log(stringSpace.trim().length) //retira os espacos do inicio e final da string

    const maskedStringX = string.padStart(10, 'x') //xxxxxxaloo
    const maskedStringY = string.padEnd(10, 'Y') //alooYYYYYY

    let text = 'estudar, aprender, praticar'
    let separetedText = text.split(',') //['estudar', ' aprender', ' praticar']

    let joined = separetedText.join(' - ') //estudar ,  aprender,  praticar

    //Encontrando um conteúdo no texto

    let messageFinding = 'estou estudando Javascript na stara'
    console.log(messageFinding.indexOf('estudando')) //6
    //quando nao encontra retorna -1
    console.log(messageFinding.includes('estudando')) //retorna boolean se existe ou nao

 // ARRAYS

    let estrutura = []

    estrutura.push('alo') //adiciona um item ao final do array
    estrutura.push('teste')
    estrutura.unshift('um') //adiciona um item ao inicio do array

    estrutura.shift() //REMOVE um item ao inicio do array
    estrutura.pop() //REMOVE um item ao final do array

    let frutas = ['maçã', 'banana', 'melao', 'melancia']

    frutas.splice(1, 2) // remove elementos da posição tal a tal //[maça, melancia]

    //ou é possivel achar a posição de determinado item

    let position = frutas.indexOf('melao') //2
    frutas.splice(position, 1) // remove melao pela posicao do indice,1 é o numero de itens para remover


    console.log(frutas.include('maçã')) //verifica se tem ou nao, retorna boolean

//LOOP WHILE

        // let executeWhile = true

        // while(executeWhile) {
        //     let response = window.prompt('deseja continuar?')
        //     console.log(response)
        //     if (response === "a") {
        //         executeWhile = false
        //     }
        // }

            //enquanto a condição for atendida, executa

    //LOOP INFINITO
        //VALUE = TRUE
        //WHILE (VALUE == TRUE) {
        //FAZ ISSO}

    //LOOP DO WHILE: repete ate que a condição especificada seja verdadeira, porem, a instrução será executada pelo menos uma vez antes da condição ser verificada

    let value = 11

    do {
        value++
        console.log(value)
    } while(value < 10)

    console.log('fora')

    //LOOP FOR: repete ate que a condição seja falsa

    //declara index = 0, até que a condição seja falsa, faz tal coisa
    for(index = 0; index < 10; index++) {
        console.log(index)
    }
//METODOS DE ARRAY
    
    //MAP chama a função callback recebida por parametro para cada elemento do array original, em ordem, e constroi um novo array com base nos retornos de cada chamada

    const produtos = ['teclado', 'mouse', 'monitor']

    //percorrer os itens do array
                //callback
    produtos.map((produto) => {
        console.log(produto)
    })

    //utilizando o novo objeto retornado
    const formatted = produtos.map((produto) => {
        // return produto.toUpperCase() retornara um array ['TECLADO', 'MOUSE', 'MONITOR']

        return {
            id: Math.random(),
            description: produto,
        } //retornara um array de objetos {id:123213, description: 'nome dos 3 produtos'}
    })

    console.log(formatted)

    //FILTER cria um novo array com os elementos que passaram certa condição

    const words = ['alo', 'luiz', 'emanuel', 'JS']

    const result = words.filter((word) => word.length > 3)
    console.log(result) //luiz emanuel

    const products = [
        {
            description: 'mouse',
            price: 70,
            promotion: true
        },
        {
            description: 'keyboard',
            price: 170,
            promotion: true
        },
        {
            description: 'pc',
            price: 1000,
            promotion: false
        }
    ]

    const promotion = products.filter((product) => product.promotion == true)
    console.log(promotion) //retornara apenas mouse e keyboard

    //FINDINDEX() sera usado para retornar a posição de um primeiro elemento em determinada posição de um array

    const valueFindIndex = [3, 5, 6, 10]

    const index = valueFindIndex.findIndex((value) => value > 4) 
    
    console.log(index) //retorna 1 pq o 5 é o elemento q satisfaz > 4
    console.log(index) //retorna 3 pq o 5 é o elemento q satisfaz > 9
    console.log(index) //retorna -1 pq nenhum elemento  satisfaz > 10
    
    //FIND() sera usado para retornar um primeiro elemento em determinada posição de um array

    const valueFind = [3, 5, 6, 10]

    const indexFind = valueFind.find((value) => value > 11) 
    
    console.log(indexFind) //retorna 5 pq o 5 é o elemento q satisfaz > 4
    console.log(indexFind) //retorna 10 pq o 10 é o elemento q satisfaz > 9
    console.log(indexFind) //retorna undefined pq nenhum elemento  satisfaz > 11
  
    //EVERY() sera usada quando TODOS os item atenderem uma condição

    const everyArray = [3, 5, 6, 10]

    const everyNewArray = everyArray.every((obj) => obj == 3) 
    
    console.log(everyNewArray) //retorna false
11

    
<body>
    <main>
        <h1 id="mainTitle" class="title">Convidados</h1>
        <div class="inputButtonWrapper" id="inputButtonWrapper">
            <form action="">
                <input type="text" name="Digite o Nome" id="input">
                <button id="button" type="submit" class="button">Adicionar</button>
            </form>
        </div>
        <div class="listWrapper" id="listWrapper">
            <ul>
                <li id="guest-1" class="guest">
                    <span>Luiz</span>
                </li>
                <li id="guest-2" class="guest">
                    <span>Henrique</span>
                </li>
                <li id="guest-3" class="guest">
                    <span>Giasson</span>
                </li>
                <li id="guest-4" class="guest">
                    <span>Scarparo</span>
                </li>
                <li id="guest-5" class="guest">
                    <span>Yuri</span>
                </li>
                <li id="guest-6" class="guest">
                    <span>Nicolas</span>
                </li>
            </ul>
        </div>
    </main>
    <script src="scripts.js"></script>
</body>

.input-error {
    border: 1px solid red;
}

.guest {
    background-color: grey;
}

//SELETORES DE ELEMENTOS NO DOCUMENTO - getElementById(), querySelector(), querySelectorAll(), getElementsByClassName()
        // //obter o titulo da pagina
        // console.log(document.title)

        // //acessar o elemento por ID(seletor id)
        // const guest = document.getElementById('guest-2')
        // console.log(guest)

        // //mostra as propriedades do objeto
        // console.log(guest.dir)

        // //acessar com classe
        // const guestByClass = document.getElementsByClassName('guest')
        // console.log(guestByClass) //retorna uma lista com os elementos guest(1 e 2 nesse caso)

        // //exibir os elementos da lista, mais de uma forma para pegar a primera posição
        // console.log(guestByClass.item(0))
        // console.log(guestByClass[0])

        // //selecionar uma lista de elementos pela tag

        // const guestsByTag = document.getElementsByTagName('li')
        // console.log(guestsByTag)
        // //para exibir usa a mesma logica do getElementsByClass



        // // querySelector -> mesmo comportamento do getElementById, porém, acessamos os dados pelo seletor dentro dos parenteses, '.' para classe e '#' para id. -> 'Retorna o primeiro elemento dentro do documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que corresponde ao grupo especificado de seletores.' (MDN)
        // const guestQuerySelector = document.querySelector('.guests')

        // //para retornar todos é possivel usar o .querySelectorAll('parametro')

//MANIPULANDO O CONTEUDO - 

    //texto - textContent, innerHTML, innerText

        // const guest = document.getElementById('guest-1')
        // console.log(guest.textContent) //obtem APENAS o texto do span
        // guest.textContent = 'João' //IRÁ TROCAR TUDO DENTRO DO 'LI' por João, inclusive o span

        // const guest = document.querySelector('#guest-1 span')
        // guest.textContent = 'João' //devido ao querySelector('#guest-' *SPAN*), o text content irá para o lugar certo sem substituir tudo como no exemplo acima

        //textContent -> retorna o texto oculto e visivel. (tags com display none)
        //innerText -> retorna o conteudo visivel.
        //innerHTML -> retorna o HTML como texto.

    //estilos
    //     const input = document.querySelector('#input') //pega o input
    //     input.classList.add('input-error') //adiciona a classe input-error
    //     input.classList.remove('input-error') //remove a classe
    //     input.classList.toggle('input-error') //se nao tiver a classe adiciona, se tiver tira

    //     const button = document.querySelector('button')
    //     button.style.backgroundColor = 'red'  //da pra setar a cor por aqui

    // //inserindo elementos
    //     const guests = document.querySelector('ul') //seleciona a ul
    //     const newGuest = document.createElement('li') //cria um novo elemento li
    //     newGuest.classList.add('guest')//adiciona um estilo na li criada
    //     const guestName = document.createElement('span')//cria um span
    //     guestName.textContent = 'Diego'//setta o span pra ser diego
    //     newGuest.append(guestName)//adiciona o span no li
    //     guests.append(newGuest)//adiciona o li no ul

    //manipular atributos
    // const input = document.querySelector('input')
    // input.setAttribute('disabled', true) //como o nome diz, setta um atributo e um valor :)

//EVENTOS
    // window.addEventListener('load', () => {
    //     console.log('a pagina foi recarregada')
    // }) //'escuta' o evento de load e executa a função
    
    // addEventListener('click', (event) => {
    //     event.preventDefault()//previne a pagina de recarregar
    //     console.log(event)
    //     console.log(event.target) //mostra o elemento clicado
    //     console.log(event.target.textContent) //mostra o texto clicado
    // }) //escuta o clique em toda a pagina e mostra o evento quando ocorre
    //'registra uma única espera de evento em um único alvo. O alvo do evento pode ser um único elemento em um documento, o documento em si, uma janela, ou um XMLHttpRequest.'(MDN)
    //sintaxe: alvo.addEventListener(type,listener[, options]);
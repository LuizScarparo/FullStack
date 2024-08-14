operadores aritmeticos na ordem * / + -
    % retorna o resto   12 % 6 == 0       12 % 5 == 2
    ++ incrementa 1 variavel++
    -- decrementa 1 variavel--
    ** exponenciação 2**2 == 4

operadores de atribuição
    x += y => x = x + y
    x -= y => x = x - y
    x *= y => x = x * y
    x /= y => x = x / y
    x %= y => x = x % y


operadores de comparação 
    == igual
    != nao igual
    === estritamente igual (tipo e valor)
    !== estritamente não igual (tipo e valor)
    > maior que
    < menor que
    >= maior igual
    <= menor igual

operadores logicos
    && - AND
    || - OR
    !var = negação

            var a1 = true && true; // t && t retorna true
            var a2 = true && false; // t && f retorna false
            var a3 = false && true; // f && t retorna false
            var a4 = false && 3 == 4; // f && f retorna false
            var a5 = "Gato" && "Cão"; // t && t retorna Cão
            var a6 = false && "Gato"; // f && t retorna false
            var a7 = "Gato" && false; // t && f retorna false
            var n1 = !true; // !t retorna false
            var n2 = !false; // !f retorna true
            var n3 = !"Gato"; // !t retorna false


operador ternario
    let age = 16
    age >= 18 ? 'voce pode dirigir' : 'não pode dirigir'
    condição     true                  false

operadores condicionais
    estrutura: if() {} else {}

    é possivel usar sem chaves, porém, so conta a primeira linha
        if(condição atendida)
            vai mostrar aqui
            aqui nao mostra mais

    é possivel usar o else if (ou se), tambem, para excluir alguns condicionais

    estrutura : 
    
    switch (option) {
        case 1: 
            faz isso;
            break
        case 2:
            faz aquilo
            break
        case 3:
            faz outra coisa;
            break
        default: //caso nao encaixe em nenhuma opção
            break
    }

tratamento de excessões - feito para capturar erros
    estrutura :

        if(condição) {
            throw new Error('erro tal')
        } catch(error) {
            faz tal coisa, mostra oq quiser
        } finally {
            enfim faz outra coisa
        }

comentarios foda estilo js -- muito legal

usa /**  */ e se vira 


function callback - chamar um função e usar outra como parametro

function primeira(parametro1, callback) {
    console.log(parametro1)
    callback()
}

function callback() {
    console.log('encerrar aplicação)
}

primeira('a aplicação iniciou', callback)


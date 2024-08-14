let dateMethods = new Date('August 14, 2024 10:00:00')

    //VISUALIZAR A DATA

    //dia da semana de 0 a 6, 0 domingo
    console.log(dateMethods.getDay())

    //dia do mes
    console.log(dateMethods.getDate())

    //mes 0 a 11
    console.log(dateMethods.getMonth())

    //ano
    console.log(dateMethods.getFullYear())

    //horas
    console.log(dateMethods.getHours())

    //minutos e segundos
    console.log(dateMethods.getMinutes())
    console.log(dateMethods.getSeconds())

    //MODIFICAR A DATA

    //modifica metodos
    dateMethods.setFullYear(2030)
    dateMethods.setMonth(11)
    dateMethods.setDate(15)
    console.log(dateMethods)

    //FORMATAR DATA
    let dateFormatter = new Date('2024-08-14T08:41:00')
    let day = dateFormatter.getDate().toString().padStart(2, 0) //dois digitos pro dia
    
    let month = (dateFormatter.getMonth() + 1).toString().padStart(2, 0) //formatar o mes com mais um digito e para ter dois digitos

    let year = dateFormatter.getFullYear()
    let hour = dateFormatter.getHours()
    let minutes = dateFormatter.getMinutes()

    console.log(`${day}/${month}/${year} ${hour}:${minutes}`)

    //converte uma data pra string
    console.log(dateFormatter.toString()) //wed aug 14 2024 08:41:00 GMT

    //RETORNA SOMENTE A DATA
    console.log(dateFormatter.toDateString()) //wed aug 14 2024
    
    //RETORNA SOMENTE A HORA
    console.log(dateFormatter.toTimeString()) //08:41:00 gmt-0300

    //EXIBIR DATA E HORA NO LOCAL FORMATADAO
    console.log(dateFormatter.toLocaleDateString()) //14/08/2024
    console.log(dateFormatter.toLocaleDateString('en')) //08/14/2024
    console.log(dateFormatter.toLocaleTimeString()) //08:41:00
    console.log(dateFormatter.toLocaleTimeString('en')) //08:41:00 AM

    console.log(dateFormatter.toLocaleString()) //14/08/2024, 08:41:00
    
    console.log(dateFormatter.toLocaleString('pt-BR', {
        dateStyle: 'full',
    })) //quarta-feira, 14 de agosto de 2024
    
    console.log(dateFormatter.toLocaleString('pt-BR', {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    })) //14/08, 08:41

    //Intl é a API de internacionalização do ECMAScript

    const currentLocale = Intl.DateTimeFormat().resolvedOptions()
    console.log(currentLocale)

    console.log(new Intl.DateTimeFormat('pt-BR').format(new Date()))

    




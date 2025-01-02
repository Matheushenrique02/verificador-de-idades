function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')

    if (fano.value == 0 || fano.value > ano || fano.value < 1900 ){
        alert('[ERRO] Verifique os dados novamente!!')
    }
    else{
        varsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (varsex[0].checked){
            genero = 'Masculino'
                if (idade >= 0 && idade < 10){
                img.setAttribute('src','https://img.freepik.com/fotos-gratis/roupa-de-bebe_53876-97831.jpg')
                }
                else if (idade <21){ 
                img.setAttribute('src','https://img.freepik.com/fotos-gratis/retrato-de-um-adolescente-sorridente_171337-893.jpg')
                }
                else if (idade < 50){
                img.setAttribute('src','https://st2.depositphotos.com/2931363/5249/i/450/depositphotos_52492703-stock-photo-confident-mature-man-in-shirt.jpg')
            }
                else{
                img.setAttribute('src','https://images.pexels.com/photos/3782954/pexels-photo-3782954.jpeg?auto=compress&cs=tinysrgb&w=600')
            }
        }


        else if(varsex[1].checked){
            genero = 'Feminino'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'https://img.freepik.com/fotos-gratis/crianca-bebe-menina-crianca-engatinhando-feliz-olhando-em-linha-reta-isolada-em-uma-parede-branca_496169-789.jpg?semt=ais_hybrid')
            }
            else if (idade <21){
                img.setAttribute('src','https://img.freepik.com/fotos-premium/retrato-positivo-de-menina-adolescente-com-pele-bonita-isolada-em-fundo-branco-retrato-de-menina-adolescente_474717-138514.jpg')
            }
            else if (idade < 50){
                img.setAttribute('src','https://st3.depositphotos.com/15505600/32336/i/450/depositphotos_323362214-stock-photo-concept-adult-girl-on-a.jpg')
            }
            else{
                img.setAttribute('src','https://img.freepik.com/fotos-premium/velha-mulher-isolada-fundo-branco-mulher-idosa-feliz-sobre-fundo-branco_742418-629.jpg')
            }
        }
        
        res.innerHTML = `Detectamos o genêro ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}
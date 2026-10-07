function verificar() {
    const data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano');
    let res = document.querySelector('div#res');
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] verifique os dados novamente.');
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade <=10){
                img.setAttribute('src', 'homemcrianca.png')
                //criança
            } else if (idade >= 10 && idade < 21){
                img.setAttribute('src', 'homemJovem.png')
                // jovem
            } else if (idade >= 21 && idade < 50){
                img.setAttribute('src', 'homemAdulto.png')
                // adulto
            } else {
                img.setAttribute('src', 'homemIdoso.png')
                // idoso
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
             if(idade >= 0 && idade <=10){
                img.setAttribute('src', 'mulhercrianca.png')
                //criança
            } else if (idade >= 10 && idade < 21){
                img.setAttribute('src', 'mulherJovem.png')
                // jovem
            } else if (idade >= 21 && idade < 50){
                img.setAttribute('src', 'mulherAdulta.png')
                // adulto
            } else {
                img.setAttribute('src', 'mulherIdosa.png')
                // idoso
            }
        }
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }


}
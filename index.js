function verificar()
{
document.getElementById('foto')?.remove();
const ano = document.getElementById('nasceu').value
const sexosel = document.querySelector("input[name='sexo']:checked")
let sexo = sexosel.value;
const data = new Date()
const anoatual = data.getFullYear()
const idade = anoatual - ano;
let res = document.getElementById('resultado')
let img = document.createElement(`img`) 
img.setAttribute('id' , 'foto')

if(idade < 0 || idade > 126)
{
        alert('Idade inválida!');
    return;
}


if(sexo == "masculino" && idade >= 18 && idade < 65)
{
    img.setAttribute('src', 'mark.jpg')
    res.innerHTML = `Voce tem ${idade} anos e voce é do sexo ${sexo}, voce é adulto.`
}
else if(sexo == "masculino" && idade >= 65)
    {
    img.setAttribute('src', 'idosom.jpg')
     res.innerHTML = `Voce tem ${idade} anos e voce é do sexo ${sexo}, voce é idoso.`
}
else if(sexo == "masculino" && idade < 18 && idade >= 12)
    {
      img.setAttribute('src', 'adolescentem.jpg')
       res.innerHTML = `Voce tem ${idade} anos e voce é do sexo ${sexo}, voce é jovem.`
}

else if(sexo == "masculino" && idade < 12)
    {
    img.setAttribute('src', 'criancam.jpg')
     res.innerHTML = `Voce tem ${idade} anos e voce é do sexo ${sexo}, voce é uma criança.`
}

else if(sexo == "feminino" && idade >= 18 && idade < 65)
{
    img.setAttribute('src', 'mulher.jpg')
     res.innerHTML = `Voce tem ${idade} anos e voce é do sexo ${sexo}, voce é adulto.`
}
else if(sexo == "feminino" && idade >= 65)
    {
    img.setAttribute('src', 'idosaf.jpg')
     res.innerHTML = `Voce tem ${idade} anos e voce é do sexo ${sexo}, voce é idoso.`
}
else if(sexo == "feminino" && idade < 18 && idade >= 12)
    {
    img.setAttribute('src', 'adolescef.jpg')
     res.innerHTML = `Voce tem ${idade} anos e voce é do sexo ${sexo}, voce é jovem.`
}

else if(sexo == "feminino" && idade < 12)
    {
    img.setAttribute('src', 'criancaf.jpg')
     res.innerHTML = `Voce tem ${idade} anos e voce é do sexo ${sexo}, voce é uma criança.`
}
res.style.textAlign = 'center'
res.appendChild(img)
}
function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/bkaDrKcBl/model.json', modelReady);//responsavel por fazer o som//
}function gotResults(error, results) { //precisamos verificar se há um error. Se verdadeiro, então, coloque-o no console, senão, coloque no console results//
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;//Primeiro, geramos três números aleatórios entre 1 e 255. Esses números aleatórios nos ajudam a formar cores, as quais serão aplicadas às tags heading - h3 e h4.//
    random_number_g = Math.floor(Math.random() * 255) + 1;//Para gerar números aleatórios, utilizamos a função Math.random(). Essa função fornece um número decimal aleatório entre 0 e 1.//
    random_number_b = Math.floor(Math.random() * 255) + 1;//Math.floor(). Essa função arredonda o valor decimal para o menor valor inteiro mais próximo.//Math.floor(79.05) será arredondado para 79.//como o código Math.floor(Math.random() * 255) fornecerá um valor entre 0 e 255, vamos ter que fazer uma modificação no código.//

    document.getElementById("result_label").innerHTML = 'Posso ouvir - '+ results[0].label;//posso ouvir é o ruido de fundo//
    document.getElementById("result_confidence").innerHTML = 'Precisão - '+ (results[0].confidence*100).toFixed(2)+" %";//gora sabemos como obter o valor da primeira confidence, que está dentro de result. Assim, atualizaremos o elemento HTML que definimos para conter a precisão do áudio, em index.html, com results[0].confidence.//precisamos multiplicar a confidence por 100. Isso nos fornecerá a precisão em porcentagem.//Agora, para limitar os números decimais, após a vírgula decimal, precisamos aplicar a função toFixed() a esse número e passar a quantidade de números decimais que deseja após a vírgula.//
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";//altera o valor da tag 3//
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";//os valores de cores são armazenados nas variáveis. Queremos utilizar o símbolo ‘+’ para unir as variáveis e strings, deste modo://

    img = document.getElementById('') //Utilizaremos document.getElementById() e passaremos os nomes das ids das imagens para acessar os elementos imagens definidos no arquivo index.html.//
    img1 = document.getElementById('')
    img2 = document.getElementById('')
    img3 = document.getElementById('')

    if (results[0].label == "cachorro") { //utilizaremos essa label e verificaremos se ela contém a string ‘Palmas’ Isso significa que o som de palmas foi reproduzido.//
      img.src = 'gifcachorro.gif';
      img1.src = 'desenho-de-gatinho-para-imprimir.png';
      img2.src = 'cute-tiger-cartoon-illustration-for-kids-png.webp';
      img3.src = 'cartoon-of-cow-in-format-image-illustration-of-cow-free-png.webp';
    } else if (results[0].label == "gato") {//utilizaremos essa label e verificaremos se ela contém a string ‘vidro’ Isso significa que o som de vidro foi reproduzido.
      img.src = 'Desenho-de-um-cachorro-de-frente-921x1024.png';
      img1.src = 'gifgato.gif';
      img2.src = 'cute-tiger-cartoon-illustration-for-kids-png.webp';
      img3.src = 'cartoon-of-cow-in-format-image-illustration-of-cow-free-png.webp';
    } else if (results[0].label == "vaca") {//utilizaremos essa label e verificaremos se ela contém a string ‘digitação’ Isso significa que o som de digitação foi reproduzido.
      img.src = 'Desenho-de-um-cachorro-de-frente-921x1024.png';
      img1.src = 'desenho-de-gatinho-para-imprimir.png';
      img2.src = 'giftigre.gif';
      img3.src = 'cartoon-of-cow-in-format-image-illustration-of-cow-free-png.webp';
    }else if (results[0].label == "tigre") {
      img.src = 'Desenho-de-um-cachorro-de-frente-921x1024.png';
      img1.src = 'desenho-de-gatinho-para-imprimir.png';
      img2.src = 'cute-tiger-cartoon-illustration-for-kids-png.webp';
      img3.src = 'gifvaca.gif';
    }
  }
}


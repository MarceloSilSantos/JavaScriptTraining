function chamarPrevisao() {

    const chave = '777fd6c175f16899b669ab9b22be7638'
    const cidade = 'São Paulo';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&appid=${chave}&units=metric`
  
  
  
    fetch(url)
          .then(response => response.json())
          .then (data => {
            const descricao = data.weather[0].description;
            const temperatura = data.main.temp;
          
            document.getElementById('mensagem').innerHTML = 'Previsao para ${cidade}: ${descricao}.Temperatura: ${temperatura} °C';
          })
          
          .catch(erro => {
              console.error('Ocorreu erro ao buscar dados da API', erro);
            })
   
   window.onload = chamarPrevisao();
  
  }       
  
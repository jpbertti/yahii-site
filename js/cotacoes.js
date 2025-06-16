async function buscarCotacoes() {
  try {
    const url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL";
    const response = await fetch(url);
    const data = await response.json();

    // Moedas
    document.getElementById("usd-bid").innerText = `R$ ${parseFloat(data.USDBRL.bid).toFixed(2)}`;
    document.getElementById("usd-ask").innerText = `R$ ${parseFloat(data.USDBRL.ask).toFixed(2)}`;

    document.getElementById("eur-bid").innerText = `R$ ${parseFloat(data.EURBRL.bid).toFixed(2)}`;
    document.getElementById("eur-ask").innerText = `R$ ${parseFloat(data.EURBRL.ask).toFixed(2)}`;

    // Criptoativos
    document.getElementById("btc-bid").innerText = `R$ ${parseFloat(data.BTCBRL.bid).toLocaleString('pt-BR', {minimumFractionDigits: 0})}`;
    document.getElementById("btc-ask").innerText = `R$ ${parseFloat(data.BTCBRL.ask).toLocaleString('pt-BR', {minimumFractionDigits: 0})}`;

    document.getElementById("eth-bid").innerText = `R$ ${parseFloat(data.ETHBRL.bid).toLocaleString('pt-BR', {minimumFractionDigits: 0})}`;
    document.getElementById("eth-ask").innerText = `R$ ${parseFloat(data.ETHBRL.ask).toLocaleString('pt-BR', {minimumFractionDigits: 0})}`;
  } catch (erro) {
    console.error("Erro ao buscar cotações:", erro);
  }
}

// Atualiza ao carregar e a cada 1 minuto
buscarCotacoes();
setInterval(buscarCotacoes, 60000);



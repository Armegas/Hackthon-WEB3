window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        try {
            // Solicita acceso a la cuenta si es necesario
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            // Las cuentas ahora están expuestas
            const transactionParameters = {/* ... */};
            const response = await ethereum.request({
                method: 'eth_sendTransaction',
                params: [transactionParameters],
            });
        } catch (error) {
            // El usuario denegó el acceso a la cuenta
            console.error("Se produjo un error al intentar acceder a la cuenta del usuario:", error);
        }
    }
    // Navegadores web3 heredados...
    else if (window.web3) {
        const web3 = new Web3(web3.currentProvider);
        // Las cuentas siempre están expuestas
        web3.eth.sendTransaction({/* ... */});
    }
    // No detectó billeteras web3 inyectadas.
    else {
        console.log('No se detectó MetaMask.');
    }
});
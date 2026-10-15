Como executar a aplicação React

cd client
npm install
npm run dev

3. Construção do HTML

No site Express (porta 3000), o HTML é construído no servidor e enviado ao navegador na resposta HTTP.
No site React (porta 5173), o HTML inicial é carregado e a interface é construída dinamicamente no navegador através de JavaScript.
Esta diferença pode ser observada no separador View Source e comparada com o separador Elements das ferramentas de programador.



4. Pedidos de rede (Network)

No site Express, filtrar cartas ou mudar de página pode gerar novos pedidos HTTP ao servidor, dependendo da implementação.
Na aplicação React, se estas operações forem realizadas localmente com os dados já carregados, não são necessários novos pedidos HTTP para cada alteração.
Esta diferença explica-se pelo processamento no servidor, no Express, e pelo processamento no cliente, no React.
O número exato de pedidos deve ser confirmado no separador Network durante os testes.

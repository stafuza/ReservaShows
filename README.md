# Reserva Shows

É uma plataforma interativa desenvolvida em React que permite aos usuários pesquisar artistas, visualizar os mais populares e fazer reservas para eventos. A aplicação oferece uma interface amigável, onde os usuários podem descobrir novos talentos e gerenciar suas reservas de forma simples e eficiente.

## Funcionalidades

- Pesquisa de artistas.
- Exibição de artistas em alta.
- Formulário de reserva para artistas selecionados.
- Exibição de reservas anteriores.

## Tecnologias Utilizadas

- React
- React Router
- Axios (para chamadas à API)
- CSS (para estilização)
- Framer Motion (para animações)

## Pré-requisitos

Antes de executar a aplicação, você precisa ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (geralmente instalado junto com o Node.js)

## Configuração do Projeto

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio

2. Instale as dependências
**Execute o seguinte comando para instalar as dependências do projeto:**

npm install axios
npm isntall vite
npm install motion
npm install react-router-dom

3. **Para que a aplicação funcione, você precisará de um token de acesso da API do Spotify. Siga estas etapas:**

Acesse o link: https://apidog.com/pt/blog/spotify-web-api/;
Crie uma conta;
Crie um novo projeto;
Clique no "+" e em seguida em "importar cURL"
Insira: curl -X POST "https://accounts.spotify.com/api/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=client_credentials&client_id=603ca73bda344b0abbda53b3636a038d&client_secret=ebaad2e8b9984494b919bd8f6acac74c";
Clique em "Send";
Copie o token gerado (o token expirará após 1 hora, devido a API  do spotify);
Vá no arquivo "fetchArtists.js" e cole o token gerado (linha 4).

4. **Execute a Aplicação**
Após a configuração, você pode executar a aplicação localmente com o seguinte comando:

npm start
A aplicação será iniciada (ex: http://localhost:3000)

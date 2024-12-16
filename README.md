# 🦃 **TamperTurkey** 
**TamperTurkey** é uma ferramenta incrível para gerenciar seus scripts personalizados de forma simples e intuitiva. Com ela, você pode adicionar, editar, excluir e executar scripts rapidamente, tudo na ponta dos seus dedos! 💻✨

## Funcionalidades 🔧
- **Adicionar Scripts ➕**: Adicione facilmente scripts personalizados para serem executados em suas páginas web.
- **Editar Scripts ✏️**: Edite qualquer script que você tenha adicionado.
- **Excluir Scripts 🗑️**: Remova scripts da lista com um simples clique.
- **Logo Flutuante 🌟**: Um logo interativo que abre o painel de gerenciamento de scripts.
- **Execução de Scripts ▶️**: Execute seus scripts diretamente da interface.
- **Interface Personalizável 🎨**: Personalize a interface para uma experiência mais agradável.
- **Informações do Script 📝**: Exibe informações detalhadas sobre cada script, como nome, versão, autor e descrição.

## Script ⚙️
```js
javascript:fetch(`https://raw.githubusercontent.com/JuniorSchueller/TamperTurkey/refs/heads/main/tamperturkey.js`).then(r => r.text()).then(r => eval(r))
```


## Instalação 🛠️
Para usar o **TamperTurkey**, você precisará executar o script diretamente no navegador. Siga os passos abaixo:

1. Abra o navegador e acesse a página que você quer ativar o TamperTurkey.
2. Pressione `F12` para abrir o console de desenvolvedor / Clique na barra de pesquisa.
3. Copie todo o código do script e cole.
4. Verifique se o `javascript:` está presente no começo do script (se não estiver escreva manualmente).
5. Pressione `Enter` para executar o script.

## Como Usar 🚀
1. **Clique no Logo Flutuante 🦃**: Clique no logo para abrir o painel de gerenciamento.
2. **Adicionar Novo Script ➕**: Clique no botão "+" para adicionar um novo script. Cole seu código e salve!
3. **Visualizar Scripts 📜**: Seus scripts adicionados aparecerão no painel com todas as informações essenciais.
4. **Editar ou Excluir Scripts 🛠️🗑️**: Edite ou remova qualquer script facilmente, clicando nos ícones de ação ao lado de cada script.
5. **Executar Scripts ▶️**: Execute qualquer script com um simples clique na lista.

## Configuração 🎛️
A interface do **TamperTurkey** é super personalizável! 💫
- **Logo Flutuante 🌟**: Customize a posição, tamanho e efeitos de hover do logo flutuante.
- **Estilos do Painel 🎨**: Modifique o esquema de cores, layout e muito mais.
- **Botões 👆**: Ajuste os estilos dos botões para uma aparência mais personalizada e atraente.

## Armazenamento Local 💾
Todos os scripts são armazenados localmente no navegador, garantindo que seus scripts permaneçam disponíveis entre atualizações e sessões. 🔒

## Exemplo de Script 💡
```javascript
=START
= SCRIPT_ID - MeuIDUnico
= SCRIPT_NAME - Novo Script
= SCRIPT_DESCRIPTION - Esse é meu novo script do TamperTurkey
= SCRIPT_AUTHOR - Você
= SCRIPT_VERSION - 1.0
=END
window.alert('TamperTurkey está funcionando! 🎉');
```

## Licença 📜
Este projeto está licenciado sob a Licença MIT.

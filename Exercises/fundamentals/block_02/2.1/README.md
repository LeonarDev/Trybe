# GIT - Instalação e configuração

### Instalação
- [x] Para instalar o Git abra o seu terminal e digite o seguinte comando:
```
sudo apt-get install git-all
```

<br> 

### Identidade
O primeiro passo é configurar sua identidade, seu nome e endereço de e-mail, isso é importante pois cada commit usa esta informação, e ela é carimbada de forma imutável nos commits que você criar. Para configurar isso:
- [x] Digite o comando abaixo em seu terminal:
```
git config --global user.name "Seu nome"
git config --global user.email seuemail@exemplo.br
```

<br> 

### Editor
Um outro ponto legal de se configurar é o editor onde você poderá abrir o arquivo de configuração do Git, .gitconfig, fica fácil de você visualizar as configurações do Git e também adicionar outras que julgue necessário. Para isso execute o comando à seguir no seu terminal:
```
git config --global core.editor "code --wait"
```
*Esse comando define o editor do .gitconfig como o VS Code, que é o editor que você usará ao longo curso. Caso queira abrir o arquivo de configuração no VS Code basta executar em seu terminal o comando abaixo. Para isso certifique-se que você se encontra no diretório onde o arquivo .gitconfig está localizado.*
```
code .gitconfig
```

<br>

### Gerando uma chave SSH
Adicionar uma chave SSH à sua conta do GitHub, vai te permitir fazer push's e pull's sem ter que ficar digitando usuário e senha.
```
ssh-keygen -t rsa -b 4096 -C "seuemail@gmail.com"
```

Durante o processo irá aparecer escrito no terminal ***Enter a file in which to save the key***, quando isso acontecer pressione **Enter** para aceitar a localização padrão ***/home/you/.ssh/id_rsa***.
```
Enter a file in which to save the key (/home/you/.ssh/id_rsa): [Press enter]
```

Agora digite uma senha segura.
```
Enter passphrase (empty for no passphrase): [Type a passphrase]
Enter same passphrase again: [Type passphrase again]
```

<br>

### Adicionando sua chave SSH ao ssh-agent
```
eval "$(ssh-agent -s)"
```

```
ssh-add ~/.ssh/id_rsa
```

```
sudo apt-get install xclip
```

<br>

### Copia o conteúdo da sua chave id_rsa.pud
```
xclip -sel clip < ~/.ssh/id_rsa.pub
```

Entre no seu GitHub e siga os passos abaixo:
* No canto superior direito do GitHub, clique na sua foto de perfil e clique em Settings;
* Na barra lateral esquerda, clique em SSH and GPG keys;
* Clique em New SSH key ou Add SSH key;
* No campo Título, adicione um descrição para a nova chave;
* Cole sua chave dentro do campo Key;
* Clique em Add SSH key;
* Caso seja solicitado, confirme sua senha do Github.

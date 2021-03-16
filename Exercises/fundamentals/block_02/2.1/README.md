# 2.1 Git e GitHub - What it is and what it is for

Installation
- [x] To install Git open your terminal and type the following command:
```
sudo apt-get install git-all
```

<br> 

### Identity
The first step is to configure your identity, your name and e-mail address, this is important because each commit uses this information, and it is stamped immutably on the commits you create. To configure this:
- [x] Type the command below in your terminal:
```
git config --global user.name "Seu nome"
git config --global user.email seuemail@exemplo.br
```

```
git config --global user.name "LeonarDev"
git config --global user.email leonardo.majevski@gmail.com.br
```

<br> 

### Editor
Another nice point to set up is the editor where you can open the Git configuration file, .gitconfig, it is easy for you to view the Git settings and also add others that you deem necessary. To do this, run the following command on your terminal:
```
git config --global core.editor "code --wait"
```
* This command defines the .gitconfig editor as the VS Code, which is the editor that you will be using throughout the course. If you want to open the configuration file in VS Code, just execute the command below on your terminal. To do this, make sure that you are in the directory where the .gitconfig file is located. *
```
code .gitconfig
```

<br>

### Generating an SSH key
Adding an SSH key to your GitHub account will allow you to push and pull without having to enter your username and password.
```
ssh-keygen -t rsa -b 4096 -C "youremail@gmail.com"
```

During the process it will appear written in the terminal *** Enter a file in which to save the key ***, when this happens press ** Enter ** to accept the default location ***/home/you/.ssh/id_rsa***.
```
Enter a file in which to save the key (/home/you/.ssh/id_rsa): [Press enter]
```

Now enter a secure password.
```
Enter passphrase (empty for no passphrase): [Type a passphrase]
Enter same passphrase again: [Type passphrase again]
```

<br>

### Adding your SSH key to ssh-agent
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

### Copy the contents of your id_rsa.pud key
```
xclip -sel clip < ~/.ssh/id_rsa.pub
```

Log into your GitHub and follow the steps below:
* In the upper right corner of GitHub, click on your profile photo and click on Settings;
* In the left sidebar, click on SSH and GPG keys;
* Click on New SSH key or Add SSH key;
* In the Title field, add a description for the new key;
* Paste your key into the Key field;
* Click Add SSH key;
* If prompted, confirm your Github password.

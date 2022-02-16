# EM DESENVOLVIMENTO 



## ToDoList-Ebytr



Projeto de desafio tecnico para Ebytr



Projeto feito com:


* FrontEnd

React

Context

* BackEnd

Mongodb

Node.js

Express

* Testes

mocha

Sinon



## Rodar server mongo com docker



```
$ docker run --name mongodb -d -p 27017:27017 mongo
```
**Somente para se tiver o Docker**

# Rodando o projeto



## 1 - clonando repositório



    clonando com SSH:    
```
git clone git@github.com:Gabriel-Lobin/ToDoList-Ebytr.git
```

    clonando com HTTPS:
```    
git clone https://github.com/Gabriel-Lobin/ToDoList-Ebytr.git
```

## 2 - Testando Back

```
cd BackEnd
```

```
npm test
```


## 3 - rodando Front e Back



Back:
  
  
```
cd BackEnd
```
 
```
npm install
```
    
```
npm start
```
    
**Agora o Console deve Avisar "servidor rodando na porta: 3001!"**


Front:


**caso esteja na pasta do backend ainda :D**
 ```
 cd..
 ```
    

```
cd BackEnd
```
 
```
npm install
```
    
```
npm start
```
**Agora o Console mostra o server React e abre uma aba no navegador**

## Autoria

projeto feito por Gabriel-Lobin

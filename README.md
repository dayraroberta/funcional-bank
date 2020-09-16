# Funcional Health Bank
--- 
Este projeto de banco digital ilustra as principais funções de movimentação de dinheiro em conta. Nele é possível sacar dinheiro, depositar e verificar o saldo.

## Começando
Para iniciar o projeto, é necessário clonar esse repositório num diretório de sua preferência.

**Para clonar via SSH execute o seguinte comando em seu terminal:**

```git clone git@github.com:dayraroberta/funcional-bank-rest.git```

**Para clonar via HTTPS execute o seguinte comando em seu terminal:**

```git clone https://github.com/dayraroberta/funcional-bank-rest.git```

## Build
Dentro da pasta do projeto que foi clonado, execute os comandos abaixo:

```docker-compose build```

```docker-compose up```

Ou se preferir:

```start.sh```

**Atenção: este projeto utiliza a tecnologia docker-compose, onde temos em containers: API e banco de dados. Ao executar os comandos acima, a aplicação demorará 20 segundos para se inicializar. Esta medida foi tomada por motivos de esperar o container do banco de dados estar saudável para execução de migrates.**

# Rotas
### URL:
`/account/criar`
* **Método:**
`POST`
*  **Body Params**
   ```
   {
	"name": string,
	"lastname": string,
	"cpf": string,
	"birthday": "yyyy-mm-dd",
	"password": string
   }
   ```
* **Success Response:**

* **Code:** 200

    **Exemple content:** 
    ```
    {
        'success': true,
        'message': '',
        'payload': [{
            agency: 1968,
            account: 6463659,
            balance: 0
        }]
    }
    ```

## URL:
`/account/depositar`
* **Método:**
`PUT`
*  **Body Params**
   ```
   {
	"account": string,
	"agency": string,
	"password": string,
	"value":  float
    }
    ```
 
* **Success Response:**

**Code:** 200

**Exemple content:** 

    ```
    {
        'success': true,
        'message': '',
        'payload': [{
            balance: 54.50
        }]
    }
    ```
    
## URL:
`/account/sacar`
* **Método:**
`PUT`
*  **Body Params**
   ```
   {
	"account": string,
	"agency": string,
	"password": string,
	"value":  float
    }
    ```
 
* **Success Response:**

**Code:** 200

**Exemple content:** 

    ```
    {
        'success': true,
        'message': '',
        'payload': [{
            balance: 0.50
        }]
    }
    ```

## URL:
`/account/saldo`
* **Método:**
`GET`
*  **Query Params**
   ```/agency=6819&account=33595226&password=1234```
 
* **Success Response:**

**Code:** 200

**Exemple content:** 

    ```
    {
        'success': true,
        'message': '',
        'payload': [{
            balance: 54.50
        }]
    }
    ```

**Postman Collection:**
- https://www.getpostman.com/collections/39d20c6cede762078885


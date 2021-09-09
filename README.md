# Praia App

```
const Criadores = [
    {
        Nome: "João Vinicius Vitral",
        Github: "https://github.com/JxVtrl/",
    },
    {
        Nome: "Luiz Cipriano",
        Github: "https://github.com/luizcipriano/",
    }
]
```

*   Lembretes
*   Ferramentas
*   Caminhos Lógicos
*   Próximos Passos

### APIs Usadas
    - Google Identity Toolkit (Firebase Auth)
    - Google Cloud Storage (Firestore Database)
    - Google Maps


### Landing Page
    - [✔] Design **A melhorar**
    - [✔] Inputs
    - [ ] Credenciamento
        ✔ Login Interno
        ✔ Verificar Email ao Cadastrar
        ✔ Salvar Nome e Email no Banco de Dados
        - Login Via Google, Facebook, etc


### Main Page
    - [] Menu de Navegação
        * Web (Topo)
            - Logo
            - Home
            - Barracas
            - Esportes
            - Perfil
            - Config

        * App (Lateral)
            - Perfil
            - Barracas
            - Esportes
            - Config

    - [] Background da página
        * Cor Estática

    - [] Gratificação
        * Gratificação ao usuário

    - [] Cards (Scroll Horizontal ou Vertical)
        * Tempo Hoje
            - Background do tempo (gif ou png)
            - Título do card (Cidade)
            - Descrição rápida do tempo e temperatura

        * Barracas
            - Background
            - Título (Barracas & comercio local)
            - Alugue seu espaço na praia

        * Esporte
            - Background (Img de esportes jogados na praia aleatoriamente)
            - Título (Esportes)
            - Encontre ou monte seu time

        * ... Outros cards

    - [] Extra Icons
        * App (Top-Right corner)
            - Mapa
            - Música

### Hoje Card Page
    * Informações do tempo hoje
        - Local
        - Estado do Céu (Descrição do tempo)
        - Vento
        - Temperatura
        - Pressão
        - Umidade
        - Sensação Térmica
        - Sol
        - ... Outros
    
    * Possibilidade de ser um bom dia de Praia
        * Com base no
            - Tempo Atual
            - Dia da Semana
            - Média de Movimento/Quantidade de pessoas
            - Temperatura

### Barracas Card Page
    * Mapa 
    * Barracas online
    * Lista de Barracas Favoritas
        * Acessando a barraca selecionada
            - Nome da Barraca
            - Posicionamento no mapa/endereço/direção
            - Horário de funcionamento
            - Opções/Cards
                - Alugar Barraca e Cadeira
                    * Se tiver Barraca e Cadeira disponíveis

                - Promoções (True/False - Se tiver)

                - Comprar Produto da barraca selecionada


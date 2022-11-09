/*

Um hotel deve possuir: id, nome, categoria, endereço e telefone;
Uma reserva deve possuir: id, id do hotel, nome do responsável, dia de entrada e
dia de saída;

1. Criar funções para cadastrar um hotel e uma reserva;

2. Criar uma função que recebe como parâmetro o id do hotel e exibe na tela todas as
reservas neste hotel com as seguintes informações: nome do hotel - nome do
responsável da reserva - dia de entrada - dia de saída

3. Criar uma função que recebe como parâmetro o id de uma reserva e exibe no
console: nome do hotel - endereço - dia de entrada - dia de saída

4. Criar uma função que recebe como parâmetro o nome de uma pessoa e exibe na
tela todas as suas reservas;

5. Criar uma função que recebe como parâmetro uma categoria e retorna um array
com todos os hotéis nessa categoria;

6. Criar uma função que recebe o id de um hotel e um telefone como parâmetro, a
função deve atualizar o telefone de cadastro com o do parâmetro

Algumas validações devem ser feitas na hora de fazer os cadastros:
● O id não pode ser igual a nenhum outro já existente;
● O dia de entrada não pode ser maior que o de saída;
● No cadastro de uma reserva o id do hotel deve ser válido, ou seja, não deve permitir
o cadastro de um hotel que não esteja no sistema;
*/

/* variaveis hotel */
let idHotel = 1
let nomeHotel = []
let categoria = []
let endereco = []
let telefone = []
let indexGeralHotel = 0
/* variaveis reserva */

let idReserva = 1
let nomeResponsavel = []
let idHotelEscolhido = []
let diaEntrada = []
let diaSaida = []
let indexGeralReserva = 0

let condicao = "0"

DesejaFazer(condicao)

function CadastrarHotel(){
    idHotel++
    nomeHotel[indexGeralHotel] = prompt("informe o nome do hotel.")
    categoria[indexGeralHotel] = prompt("informe a categoria do hotel.")
    endereco[indexGeralHotel] = prompt("informe o endereço do hotel.")
    telefone[indexGeralHotel] = prompt("informe o telefone do hotel.")
    console.log(nomeHotel, categoria, endereco, telefone)
    indexGeralHotel++
    DesejaFazer(condicao)

}

function CadastrarReserva(){
    idReserva++
    nomeResponsavel[indexGeralReserva] = prompt("informe o nome do responsavel da reserva.")
    idHotelEscolhido[indexGeralReserva] = parseInt(prompt("informe o id do hotel que deseja reservar."))
    for (let index = 0; index < indexGeralHotel; index++) {
        if(idHotelEscolhido[indexGeralReserva]<idHotel && idHotelEscolhido[indexGeralReserva]>0){
            alert("Hotel encontrado com sucesso!")
        }else{
            alert("não conseguimos encontrar esse hotel em nosso sistema!")
            DesejaFazer(condicao)
        }
    }
    diaEntrada[indexGeralReserva] = parseInt(prompt("informe o dia da entrada no hotel."))
    diaSaida[indexGeralReserva] = parseInt(prompt("informe o dia da saida do hotel."))

    while(diaSaida[indexGeralReserva] <= diaEntrada[indexGeralReserva]){
        diaSaida[indexGeralReserva] = prompt("Esse dia não pode ser reservado. informe o dia da saida do hotel.")
    }
    
    console.log(nomeResponsavel, idHotelEscolhido, diaEntrada, diaSaida)
    indexGeralReserva++
    DesejaFazer(condicao)
}

function DesejaFazer(condicao){

    condicao = prompt("O que você deseja no nosso sistema?" + "\n" 
    + "1 = Cadastrar um hotel." + "\n" 
    + "2 = Realizar uma reserva." + "\n" 
    + "3 = Excluir um cadastro." + "\n" 
    + "4 = Finalizar programa.")

    switch (condicao) {
        case "1":
            CadastrarHotel()
            break;
        
        case "2":
            CadastrarReserva()
            break;
            
        default:
           
            break;
    }
}


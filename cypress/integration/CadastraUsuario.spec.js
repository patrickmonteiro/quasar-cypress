/// <reference types="Cypress" />

// GUARDA E RE-SETA O LOCALSTORAGE A CADA ITERAÇÃO DE TESTE.
// beforeEach(() => {
//   cy.restoreLocalStorage();
// });

// afterEach(() => {
//   cy.saveLocalStorage();
// });

context('Cadastro de Usuário', () => {
  // beforeEach(() => {
  //   cy.visit('/usuario')
  //   cy.wait(2000)
  // })

  it('Acesso Usuários', () => {
    cy.visit('/usuario')
    cy.wait(2000)
  })

  it('Preenche Campo Nome', () => {
    cy.get('input[data-cy="nome"]').focus().type('Patrick')
  })

  it('Preenche Campo Sobrenome',  () => {
    cy.get('input[data-cy="sobrenome"]').focus().type('Monteiro')
  })

  it('Preenche Campo CPF',  () => {
    cy.get('input[data-cy="cpf"]').focus().type('00700800910')
  })

  it('Preenche Campo Endereço', () => {
    cy.get('input[data-cy="endereco"]').focus().type('Rua Duque de Caxias 555')
  })

  it('Seleciono o Gênero', () => {
    cy.get('[data-cy="genero"]').click()
    cy.wait(500)
    cy.get('div.q-item-division').contains('Masculino').click()
    // cy.get('div[link=true]').eq(1).click()
  })

  it('Seleciono o Idioma', () => {
    cy.get('div[data-cy="idioma"] button').contains('Português').click()
    cy.wait(1000)
    // cy.get('div.q-item-division').contains('Masculino').click()
    // cy.get('div[link=true]').eq(1).click()
  })

  it('Clica no Botão Confirmar', () => {
    cy.get('button[data-cy="salvarUsuario"]').click()
  })

  it('Aguardo 1 Segundo', () => {
    cy.wait(500)
    cy.get('[data-cy="msg-success"]').scrollIntoView()
    cy.wait(500)
  })

  it('Verifico mensagem de confirmação', () => {
    cy.get('span[data-cy="alert-sucesso"]').contains("Usuário cadastrado com sucesso")
  })

})
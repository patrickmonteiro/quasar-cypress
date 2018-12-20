/// <reference types="Cypress" />

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

  it('Preenche Campo Sobre Nome',  () => {
    cy.get('input[data-cy="sobrenome"]').focus().type('Monteiro')
  })

  it('Preenche Campo Endereço', () => {
    cy.get('input[data-cy="endereco"]').focus().type('Rua Duque de Caxias 555')
  })

  it('Clica no Botão Confirmar', () => {
    cy.get('button[data-cy="salvarUsuario"]').click()
  })

  it('Aguardo 1 Segundo', () => {
    cy.wait(1000)
  })

  it('Verifico mensagem de confirmação', () => {
    cy.get('span[data-cy="alert-sucesso"]').contains("Usuário cadastrado com sucesso")
  })

})
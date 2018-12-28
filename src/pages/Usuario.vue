<template>
  <q-page class="container" padding>
    <h2>Usuario</h2>
    <div class="row gutter-y-sm">

      <div class="col-12">
        <q-input v-model="nome" float-label="Nome" data-cy="nome" inverted-light color="grey-3" />
      </div>

      <div class="col-12">
        <q-input v-model="sobrenome" float-label="Sobrenome" data-cy="sobrenome" inverted-light color="grey-3" />
      </div>

      <div class="col-12">
        <q-input v-model="endereco" float-label="Endereço" inverted-light data-cy="endereco" color="grey-3" />
      </div>

      <div class="col-12">
         <q-select
            v-model="selectGenero"
            float-label="Gênero"
            :options="selectOptions"
            data-cy="genero"
            inverted-light
            color="grey-3"
          />
      </div>

      <div class="col-12">
        <q-btn label="Confirmar" color="primary" size="lg"
          data-cy="salvarUsuario" class="float-right" @click="confirmarCadastro()" />
      </div>
    </div>
    <div class="row" v-if="msg" data-cy="msg-success">
      <span class="q-title" data-cy="alert-sucesso">Usuário cadastrado com sucesso</span>
      <div class="col-12">
        Nome: {{ nome }}
      </div>
      <div class="col-12">
        Sobrenome: {{ sobrenome }}
      </div>
      <div class="col-12">
        Endereco: {{ endereco }}
      </div>
      <div class="col-12">
        Gênero: {{ selectGenero }}
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Usuario',
  data () {
    return {
      nome: '',
      sobrenome: '',
      endereco: '',
      msg: false,
      selectOptions: [
        {
          label: 'Masculino',
          value: 'masculino'
        },
        {
          label: 'Feminino',
          value: 'feminino'
        }
      ],
      selectGenero: ''
    }
  },
  methods: {
    confirmarCadastro () {
      this.msg = true
    }
  }
}
</script>

<style>
</style>

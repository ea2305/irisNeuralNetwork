

<template>

  <div id="user_container" class="slide">

    <div class="" style="width: 100%; text-align: center;margin: 1em 0em; font-size: 1.5em;">
      <h1>{{ title_component }}</h1>
    </div>

    <div class="columns">

      <div class="column is-half" style="padding: 2em;">
        <form class="form">

          <div class="field">

            <label for="name">Name</label>

            <p class="control">
              <input name="name" v-model="name" class="input" type="text" placeholder="Escriba el nombre de usaurio">
            </p>

          </div>

          <div class="field">

            <label for="email">Correo</label>
            <p class="control">
              <input name="email" v-model="email" class="input" type="text" placeholder="Escriba tu correo">
            </p>

          </div>

          <div class="field">

            <label for="phone">Teléfono</label>
            <p class="control">
              <input name="phone" v-model="phone" class="input" type="text" placeholder="Escriba su telefono">
            </p>

          </div>

          <div class="field">

            <label for="vector">Vector de iris</label>
            <p class="control">
              <input name="vector" v-model="vector" class="input" type="text" placeholder="Vector de datos" value="[ [1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,0,0,1,1], [0,0,1,1,1,1,1,1,1,1,1,1] ]">
            </p>

          </div>

          <div class="field">

            <label for="password">Contraseña</label>
            <p class="control">
              <input name="password" v-model="password" class="input" type="password" placeholder="Escriba una contraseña">
            </p>

          </div>

          <button v-on:click="send" class="button" type="button">Registrar</button>

        </form>
      </div>

      <div class="viewer column is-half">
        <div class="card">

          <h1 style="display: flex;justify-content: center;align-self: center; padding-top: 1%; font-size: 1.4em;">
            Todos los usuarios
          </h1>

          <div class="card-content" v-for="user in usersWeb">

            <card-media :nameComponent="user.name" :body="user.email"></card-media>

          </div>
        </div>
      </div>

    </div>

  </div>

</template>

<script>

  //Importacion de elementos
  import cardMedia from './CardMedia.vue';
  import axios from 'axios';

  export default {
    name: 'user',
    components: {
      'card-media': cardMedia
    },
    data () {
        return {
            title_component: 'Opciones de usuarios',
            usersWeb : [],
            nameComponent: 'User_1',
            body: 'Components nasdfkahsgdfkhgjg',
            vector: "[ [1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,0,0,1,1], [0,0,1,1,1,1,1,1,1,1,1,1] ]",
            name: "",
            email: "test@gmail.com",
            phone: "",
            password: "www"
        }
    },
    methods: {
      send : function (event) {

        const vm = this;
        axios.post('http://localhost:3000/user', {

          name: vm.name,
          phone: vm.phone,
          password: vm.password,
          vector: vm.vector,
          email: vm.email

        })
          .then(function (response) {
            console.log("ok : " + response);
          })
          .catch(function (error) {
            console.log("err: " + error);
          });
      }
    },
    created () {
      // Get context of vue variables
      const vm = this;
      axios.get('http://localhost:3000/user')
        .then( function ( users ) {
            vm.usersWeb = users.data.users
            console.log( users );
        }.bind(this))
        .catch(function ( err ) {
            console.log( err );
        })
    }
  }
</script>

<style scoped></style>

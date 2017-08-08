
<template>

  <div id="file_container" class="slide">

    <div class="" style="width: 100%; text-align: center;margin: 1em 0em; font-size: 1.5em;">
      <h1>{{ title_component }}</h1>
    </div>

    <div class="columns">

      <div class="column is-half" style="padding: 2em;">
        <form action="#" class="form ">

          <div class="field">

            <label for="name">Nombre</label>
            <p class="control">
              <input name="name" class="input" type="text" placeholder="Escriba el nombre del archivo">
            </p>

          </div>

          <div class="field">

            <label for="description">Correo</label>
            <p class="control">
              <input name="description" class="input" type="text" placeholder="Descripción">
            </p>

          </div>

        </form>
      </div>

      <div class="viewer column is-half">
        <div class="card">

          <h1 style="display: flex;justify-content: center;align-self: center; padding-top: 1%; font-size: 1.4em;">
            Todos los usuarios
          </h1>

          <div class="card-content">

            <card-media :name="name" :body="body"></card-media>

          </div>
        </div>
      </div>

    </div>

  </div>

</template>

<script>

  import cardMedia from './CardMedia.vue';

  export default {
    name: 'file',
    components: {
      'card-media': cardMedia
    },
    data() {
        return {
            title_component: 'Opciones de archivos',
            name: 'File_1',
            body: 'lashdjfhaskdfhk'
        }
    }
  }
</script>

<style scoped></style>

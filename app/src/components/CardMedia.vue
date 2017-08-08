<template>

  <div class="media">

    <div class="media-left">
      <figure class="image is-32x32">
        <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
      </figure>
    </div>

    <div class="media-content">
      <p class="title is-4">{{ nameComponent }}</p>
      <p class="subtitle is-6">{{ body }}</p>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'card-media',
    props: ['nameComponent','body']
  }
</script>

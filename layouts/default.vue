<!-- Default app layout -->

<template lang="pug">
div(id="app")
  Header

  slot

  Footer
  .container
    SubscribeFormBlock
</template>

<script>

export default {
  name: 'DefaultLayout',
}
</script>

<template lang="pug">
footer.footer
	.container
		span
			| Created by&#20;
			a(href="https://instagram.com/alexbelostozky" target="_blank") anamorphic enthusiast
			| &#20;for anamorphic enthusiasts
</template>

<script setup lang="ts">
defineOptions({
  name: 'Footer'
})
</script>

<style lang="sass">
	.footer
		display: flex
		justify-content: center
		padding: 20px 0

		span
			display: block
			text-align: center
			margin: 0
</style>
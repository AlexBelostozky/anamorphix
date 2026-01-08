<template lang="pug">
header.header
	.container
		h1.header__heading Anamorphix
</template>

<script setup lang="ts">
defineOptions({
  name: 'Header'
})
</script>

<style lang="sass">
	.header
		padding: 20px 0

	.header__heading
		font-size: min(3.6vw, 52px)
		margin: 0

		@media (max-width: 1023px)
			font-size: min(4.6vw, 40px)

		@media (max-width: 769px)
			font-size: min(9.6vw, 36px)
			text-align: center
</style>
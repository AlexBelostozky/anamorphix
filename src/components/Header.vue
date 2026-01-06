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
		margin: 0

		@media (max-width: 769px)
			text-align: center
</style>
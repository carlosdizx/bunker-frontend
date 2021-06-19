<template>
	<v-app-bar app color="indigo" dark>
		<v-toolbar-title class="mr-8"><v-btn text>Bunker</v-btn></v-toolbar-title>
		<v-btn icon>
			<v-icon>mdi-plus-circle-outline</v-icon>
		</v-btn>
		<v-btn icon>
			<v-icon>mdi-cash-register</v-icon>
		</v-btn>
		<v-btn icon>
			<v-icon>mdi-account</v-icon>
		</v-btn>
		<v-btn icon>
			<v-icon>mdi-food</v-icon>
		</v-btn>
		<v-btn icon>
			<v-icon>mdi-google-analytics</v-icon>
		</v-btn>
	</v-app-bar>
</template>

<script>
	export default {
		name: 'ToolbarNav',
	};
</script>

<style scoped></style>

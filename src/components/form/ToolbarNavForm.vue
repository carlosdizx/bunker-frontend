<template>
	<v-app-bar app dark>
		<template v-slot:extension>
			<v-btn icon>
				<v-icon>mdi-arrow-left-circle</v-icon>
			</v-btn>
			<v-spacer></v-spacer>
			<v-tabs align-with-title>
				<v-tab>Venta</v-tab>
				<v-tab>Persona</v-tab>
				<v-tab>Producto</v-tab>
			</v-tabs>
		</template>
	</v-app-bar>
</template>

<script>
	export default {
		name: 'ToolbarNavForm',
	};
</script>

<style scoped></style>

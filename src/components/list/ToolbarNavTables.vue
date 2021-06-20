<template>
	<div>
		<v-app-bar app dark>
			<template v-slot:extension>
				<v-spacer></v-spacer>
				<v-tabs align-with-title>
					<v-tab @click="changeIndex(1)">Ventas</v-tab>
					<v-tab @click="changeIndex(2)">Personas</v-tab>
					<v-tab @click="changeIndex(3)">Productos</v-tab>
				</v-tabs>
			</template>
		</v-app-bar>
		<TablePerson v-if="index === 2" />
		<TableProdcut v-if="index === 3" />
	</div>
</template>

<script>
	import TablePerson from './TablePerson';
	import TableProdcut from './TableProdcut';
	export default {
		name: 'ToolbarNavTables',
		components: {
			TablePerson,
			TableProdcut,
		},
		data: () => ({ index: 1 }),
		methods: {
			changeIndex(index) {
				this.index = index;
			},
		},
	};
</script>

<style scoped></style>

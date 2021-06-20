<template>
	<div>
		<v-app-bar app dark>
			<template v-slot:extension>
				<v-spacer></v-spacer>
				<v-tabs align-with-title>
					<v-tab @click="changeIndex(1)">Venta</v-tab>
					<v-tab @click="changeIndex(2)">Persona</v-tab>
					<v-tab @click="changeIndex(3)">Producto</v-tab>
				</v-tabs>
			</template>
		</v-app-bar>
    <SaleRegister v-if="index === 1" />
    <PersonRegister v-if="index === 2" />
		<ProductRegister v-if="index === 3" />
	</div>
</template>

<script>
	import PersonRegister from './PersonRegister';
	import ProductRegister from './ProductRegister';
	import SaleRegister from './SaleRegister';
	export default {
		name: 'ToolbarNavForm',
		components: {
			PersonRegister,
			ProductRegister,
			SaleRegister,
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

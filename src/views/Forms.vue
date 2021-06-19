<template>
	<v-app>
		<ToolbarNavForm />
		<PersonRegister />
		<ProductRegister />
		<SaleRegister />
	</v-app>
</template>

<script>
	import ToolbarNavForm from '../components/form/ToolbarNavForm';
	import PersonRegister from '../components/form/PersonRegister';
	import ProductRegister from '../components/form/ProductRegister';
	import SaleRegister from '../components/form/SaleRegister';
	export default {
		name: 'Forms',
		components: {
			ToolbarNavForm,
			PersonRegister,
			ProductRegister,
			SaleRegister,
		},
	};
</script>

<style scoped></style>

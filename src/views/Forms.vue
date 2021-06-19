<template>
	<v-app>
		<ToolbarNavForm />
		<PersonRegister />
		<ProductRegister />
	</v-app>
</template>

<script>
	import ToolbarNavForm from '../components/form/ToolbarNavForm';
	import PersonRegister from '../components/form/PersonRegister';
	import ProductRegister from '../components/form/ProductRegister';
	export default {
		name: 'Forms',
		components: {
			ToolbarNavForm,
			PersonRegister,
			ProductRegister,
		},
	};
</script>

<style scoped></style>

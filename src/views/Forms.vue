<template>
	<v-app>
		<ToolbarNavForm />
		<PersonRegister />
	</v-app>
</template>

<script>
	import ToolbarNavForm from '../components/form/ToolbarNavForm';
	import PersonRegister from '../components/Person/PersonRegister';
	export default {
		name: 'Forms',
		components: {
			ToolbarNavForm,
			PersonRegister,
		},
	};
</script>

<style scoped></style>

<template>
	<h1>Pero que pasa chavales</h1>
</template>

<script lang="ts">
	import { LIST_PERSON } from '@/services/ResourceService';

	export default {
		name: 'Home',
		data: () => ({
			list_persons: LIST_PERSON,
		}),
		components: {},
		created() {
			LIST_PERSON()
				.then((response: any) => {
					console.log(response);
				})
				.catch((error: any) => console.log(error));
		},
	};
</script>

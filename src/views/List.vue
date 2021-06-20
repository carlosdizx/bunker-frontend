<template>
	<v-app>
		<ToolbarNavTables />
	</v-app>
</template>

<script>
	import ToolbarNavTables from '@/components/list/ToolbarNavTables';
	export default {
		name: 'List',
		components: {
			ToolbarNavTables,
		},
	};
</script>

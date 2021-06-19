<template>
	<v-app>
		<ToolbarNav />
		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
	import ToolbarNav from '@/components/ToolbarNav';
	export default {
		name: 'App',
		components: { ToolbarNav },

		data: () => ({
			//
		}),
	};
</script>

<template>
	<div class="text-center">
		<v-dialog v-model="vista" width="500">
			<v-card>
				<v-card-title class="text-h5 grey lighten-2">
					{{ title }}
				</v-card-title>

				<v-card-text>
					{{ information }}
				</v-card-text>

				<v-divider></v-divider>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="primary" text @click="close">
						Cerrar
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
	export default {
		name: 'DialogInfo',
		data: () => ({}),
		props: {
			title: String,
			information: String,
      vista: false,
		},
		mounted() {
			this.show = this.vista;
		},
		methods: {
			close() {
				this.$router.push('/');
			},
		},
	};
</script>

<style scoped></style>

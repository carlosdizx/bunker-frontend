<template>
	<v-card>
		<v-card-title>Agregar venta</v-card-title>
		<v-card-text>
			<v-form @submit.prevent="submit">
				<v-select :items="names" item-text="name" label="Clientes" />
				<div>
					<v-row>
						<v-col cols="10">
							<v-select :items="products" item-text="name" label="Productos" />
						</v-col>
						<v-col cols="2">
							<v-btn icon>
								<v-icon>mdi-cart-plus</v-icon>
							</v-btn>
						</v-col>
					</v-row>
				</div>
			</v-form>
		</v-card-text>
		<v-card-actions>
			<v-btn @click="submit" color="info">Registrar</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
	import { LIST_PERSONS_CLIENTS, LIST_PRODUCTS } from '../../services/ResourceService';
	export default {
		name: 'PersonRegister',
		data: () => ({
			names: [],
			products: [],
		}),
		methods: {
			submit() {
				console.log('xd');
			},
		},
		mounted() {
			LIST_PERSONS_CLIENTS()
				.then((response) => {
					this.names = response.data;
				})
				.catch((error) => console.log(error));
			LIST_PRODUCTS()
				.then((response) => {
					console.log(response);
					this.products = response.data;
				})
				.catch((error) => console.log(error));
		},
	};
</script>

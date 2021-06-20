<template>
	<v-card>
		<v-card-title>Agregar producto</v-card-title>
		<v-card-text>
			<v-form @submit.prevent="submit">
				<v-text-field
					v-model="product.name"
					label="Nombre"
					prepend-icon="mdi-tag-text-outline"
				/>
				<v-text-field
					v-model.number="product.costPrice"
					label="Precio de compra"
					prepend-icon="mdi-cash-minus"
          type="number"
				/>
				<v-text-field
					v-model.number="product.salePrice"
					label="Precio de venta"
					prepend-icon="mdi-cash-plus"
          type="number"
				/>
			</v-form>
		</v-card-text>
		<v-card-actions>
			<v-btn @click="submit" color="info">Registrar</v-btn>
      <DialogInfo :title="messages.title" :information="messages.info" :vista="dialog" />
		</v-card-actions>
	</v-card>
</template>

<script>
	import { REGISTER_PRODUCT } from '../../services/ResourceService';
	import DialogInfo from '../general/DialogInfo';
	export default {
		name: 'PersonRegister',
		components: { DialogInfo },
		data: () => ({
			dialog: false,
			product: {
				name: 'Salchipapa Mixta',
				costPrice: 5000.0,
				salePrice: 6000.0,
			},
      messages: {
        title: '',
        info: '',
      },
		}),
		methods: {
			submit() {
				REGISTER_PRODUCT(this.product)
					.then((response) => {
						this.messages.title = 'Felicidades!';
						this.messages.info = response.data.Mensaje;
						this.dialog = !this.dialog;
					})
					.catch((error) => {
						this.messages.title = 'Error';
						this.messages.info = error;
						this.dialog = !this.dialog;
					});
			},
		},
	};
</script>

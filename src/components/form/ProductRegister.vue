<template>
	<v-card>
		<v-card-title>Agregar una producto</v-card-title>
		<v-card-text>
			<v-form @submit.prevent="submit">
				<v-text-field label="Nombre" prepend-icon="mdi-tag-text-outline" />
				<v-text-field label="Precio de compra" prepend-icon="mdi-cash-minus" />
				<v-text-field label="Precio de venta" prepend-icon="mdi-cash-plus" />
			</v-form>
		</v-card-text>
    <v-card-actions>
      <v-btn @click="submit" color="info">Registrar</v-btn>
    </v-card-actions>
	</v-card>
</template>

<script>
	import { TYPES } from '../../global/itemsFormPerson';

	export default {
		name: 'PersonRegister',
		data: () => ({
			types: TYPES,
		}),
		methods: {
			submit() {
        console.log('xd')
      },
		},
	};
</script>

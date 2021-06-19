<template>
	<v-card>
		<v-card-title>Agregar venta</v-card-title>
		<v-card-text>
			<v-form @submit.prevent="submit">
        <v-select :items="names" item-text="name" label="Clientes" />
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-cart-plus</v-icon>
        </v-btn>
			</v-form>
		</v-card-text>
    <v-card-actions>
      <v-btn @click="submit" color="info">Registrar</v-btn>
    </v-card-actions>
	</v-card>
</template>

<script>
	import { EXAMPLES_NAMES } from '../../global/itemsFormPerson';

	export default {
		name: 'PersonRegister',
		data: () => ({
			names: EXAMPLES_NAMES,
		}),
		methods: {
			submit() {
        console.log('xd')
      },
		},
	};
</script>

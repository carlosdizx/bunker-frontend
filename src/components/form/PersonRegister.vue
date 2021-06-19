<template>
	<v-card>
		<v-card-title>Agregar persona</v-card-title>
		<v-card-text>
			<v-form @submit.prevent="submit">
				<v-select :items="types" item-text="name" label="Tipo de persona" />
				<v-text-field label="Nombre y apellido" prepend-icon="mdi-account-details" />
				<v-text-field label="Direccion" prepend-icon="mdi-home" />
				<v-text-field label="Celular" prepend-icon="mdi-phone" />
				<v-text-field label="Correo" prepend-icon="mdi-email" />
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

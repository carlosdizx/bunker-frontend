<template>
	<v-card>
		<v-card-title>Agregar persona</v-card-title>
		<v-card-text>
			<v-form @submit.prevent="submit">
				<v-select
					v-model="person.type"
					:items="types"
					item-text="name"
					label="Tipo de persona"
				/>
				<v-text-field
					v-model="person.name"
					label="Nombre y apellido"
					prepend-icon="mdi-account-details"
				/>
				<v-text-field
					v-model="person.address"
					label="Direccion"
					prepend-icon="mdi-home"
				/>
				<v-text-field
					v-model.number="person.phone"
					type="number"
					label="Celular"
					prepend-icon="mdi-phone"
				/>
				<v-text-field
					v-model="person.email"
					type="email"
					label="Correo"
					prepend-icon="mdi-email"
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
	import { TYPES } from '../../global/itemsFormPerson';
	import { REGISTER_PERSON } from '../../services/ResourceService';
	import DialogInfo from '../general/DialogInfo';

	export default {
		name: 'PersonRegister',
		components: {
			DialogInfo,
		},
		data: () => ({
			types: TYPES,
			dialog: false,
			person: {
				name: 'Carlos',
				type: '',
				address: 'Mz G casa 5, los heroes',
				phone: '3163930876',
				email: 'carlodiaz@umariana.edu.co',
			},
			messages: {
				title: '',
				info: '',
			},
		}),
		methods: {
			submit() {
				REGISTER_PERSON(this.person)
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

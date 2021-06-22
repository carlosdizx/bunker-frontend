<template>
	<v-card dark>
		<v-card-title>Listado de personas</v-card-title>
		<v-data-table
			:headers="columnas"
			:items="list"
			:items-per-page="5"
			:footer-props="{
				showFirstLastPage: true,
				firstIcon: 'mdi-arrow-collapse-left',
				lastIcon: 'mdi-arrow-collapse-right',
				prevIcon: 'mdi-minus',
				nextIcon: 'mdi-plus',
			}"
			class="elevation-1"
		>
		</v-data-table>
		<template v-slot:item.name="{ item }">
			<v-btn color="orange" dark>
				{{ item.name }}
			</v-btn>
		</template>
	</v-card>
</template>

<script>
	import { LIST_PERSONS,LIST_PERSONS_CLIENTS } from '@/services/ResourceService';
	export default {
		name: 'TablePerson',
		data: () => ({
			columnas: [
				{ text: 'ID', value: 'id' },
				{ text: 'Nombres', value: 'name' },
				{ text: 'Tipo', value: 'type' },
				{ text: 'Direccion', value: 'address' },
				{ text: 'Telefono', value: 'phone' },
				{ text: 'Correo', value: 'email' },
				{ text: 'Fecha Registro', value: 'created' },
			],
			list: [],
			listPersons: LIST_PERSONS,
		}),
		mounted() {
			this.listPersons()
				.then((response) => {
					this.list = response.data;
				})
				.catch((error) => console.log(error));
		},
	};
</script>

<style scoped></style>

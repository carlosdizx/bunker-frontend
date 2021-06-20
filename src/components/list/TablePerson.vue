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

<script lang="ts">
	import { LIST_PERSON } from '@/services/ResourceService';
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
			list_products: LIST_PERSON,
		}),
		mounted() {
			this.list_products()
				.then((response: any) => {
					this.list = response.data;
				})
				.catch((error: any) => console.log(error));
		},
	};
</script>

<style scoped></style>

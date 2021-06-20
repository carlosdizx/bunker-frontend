<template>
	<v-card dark>
		<v-card-title>Listado de prodcutos </v-card-title>
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
	import { LIST_PRODUCTS } from '@/services/ResourceService';
	export default {
		name: 'TableProdcut',
		data: () => ({
			columnas: [
				{ text: 'ID', value: 'id' },
				{ text: 'Nombres', value: 'name' },
				{ text: 'Costo', value: 'costPrice' },
				{ text: 'Precio venta', value: 'salePrice' },
			],
			list: [],
			list_products: LIST_PRODUCTS,
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

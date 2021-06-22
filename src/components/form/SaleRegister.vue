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
import {LIST_PERSONS_CLIENTS} from "../../services/ResourceService";
	export default {
		name: 'PersonRegister',
		data: () => ({
			names: [],
      listPersons: LIST_PERSONS_CLIENTS,
		}),
		methods: {
			submit() {
        console.log('xd')
      },
		},
    mounted() {
      this.listPersons()
          .then((response) => {
            this.names = response.data;
          })
          .catch((error) => console.log(error));
    },
	};
</script>

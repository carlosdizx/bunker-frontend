<template>
  <TableCRUD></TableCRUD>
</template>

<script lang="ts">
import TableCRUD from '@/components/person/TableCRUD'
	const moment = require('moment');
	require('moment/locale/es');

	export default {
		name: 'Home',
    components:{
      TableCRUD
    }
	};
</script>

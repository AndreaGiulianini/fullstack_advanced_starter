<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Users</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	{#each data.users as user (user.id)}
		<div class="user">
			<p>{user.id}</p>
			<p>{user.name}</p>
			<p>{user.email}</p>
		</div>
	{/each}
</div>

<script lang="ts">
	type User = {
		id: number;
		email: String;
		name: String | null;
	};

	export let users: User[];
</script>

<svelte:head>
	<title>Users</title>
	<meta name="description" content="A users list" />
</svelte:head>

<div class="users">
	<h1>Users</h1>

	{#each users as user (user.id)}
		<div class="user">
			<p>{user.id}</p>
			<p>{user.name}</p>
			<p>{user.email}</p>
		</div>
	{/each}
</div>

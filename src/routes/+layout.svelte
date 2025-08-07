<style>
  	:global(:root) {
	  --text-light: #fdfdff;
	  --background-dark: #263238;
	  --background-light: #f5f5f5;
	}
	:global(body) {
		font-family: Arial, sans-serif;
		background-color: var(--background-dark);
		color: var(--text-light);
		font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
		padding: 2rem;
	}
</style>

<slot />
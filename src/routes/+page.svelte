<div class="task-container">
  <p><span>TASK 1:</span> Make a query which shows all data from all fields in person-table.</p>
</div>
<div class="container">
  <div class="box textarea-container">
    <textarea class="full-size-textarea" placeholder="Enter your query here..."></textarea>
    <button class="execute-button">Run ▶</button>
  </div>
  <div class="box" style="padding:1.5rem;box-sizing: border-box;">
    Results
  </div>
</div>

<style>
	:root {
	  --text-light: #fdfdff;
	  --background-dark: #263238;
	  --background-light: #f5f5f5;
	}
	:global(body) {
		font-family: Arial, sans-serif;
		background-color: var(--background-dark);
		color: var(--text-light);
		font-family: monospace, "Courier New", Courier;
		padding: 2rem;
	}
	.task-container {
		width: 100%;
		background-color: #455A64;
		color: var(--text-light);
		font-size: 1.25rem;
		padding: 1rem 2rem;
		margin-bottom: 3rem;
		border-radius: 2rem;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		box-sizing: border-box;

		& span {
			font-weight: bold;
			color: #fff;
			background-color: none;
			padding: 0.5rem rem;
			border-radius: 1rem;
		}
	}
	.container {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		width: 100%;
		margin: 0 auto;
		flex-wrap: wrap;
	}
	.box {
		flex: 1;
		height: 40dvh;
		background-color: var(--background-light);
		color: black;
		font-size: 1.5rem;
		border: 1px solid #444;
		border-radius: 2rem;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	}
	.full-size-textarea {
		width: 100%;
		height: 100%;
		resize: none;
		border: none;
		outline: none;
		font-size: 1.5rem;
		padding: 1.5rem;
		border-radius: 2rem;
		box-sizing: border-box;
		background-color: transparent;
		color: #000;
		font-family: monospace, "Courier New", Courier;
	}

	@media (max-width: 1000px) {
		.container {
			flex-direction: column;
		}
	}

	.textarea-container {
		position: relative;
	}

	.execute-button {
		position: absolute;
		bottom: 0.5rem;
		right: 0.5rem;
		width: auto;
		height: 3rem;
		padding: 0 1rem 0 1.25rem;
		border-radius: 2rem;
		border: none;
		background-color: #546E7A;
		color: #fff;
		font-size: 1.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
		transition: background-color 0.1s;
	}

	.execute-button:hover {
		background-color: #455A64;
	}

  </style>
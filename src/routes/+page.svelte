<script lang="ts">
  import { onMount } from 'svelte';
  import initSqlJs from 'sql.js';

  let db: any;
  let query = '';
  let result = '';

  onMount(async () => {
    const SQL = await initSqlJs({
      locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.13.0/${file}`
    });

    db = new SQL.Database();

    // Create a sample table and data
    db.run(`
      CREATE TABLE person (id INTEGER PRIMARY KEY, firstname TEXT, lastname TEXT);
    `);
    db.run(`
      INSERT INTO person (firstname, lastname) VALUES
      ('Matti', 'Meikäläinen'), ('Maija', 'Mehiläinen'), ('Liisa', 'Laitinen');
    `);
  });

  function runQuery() {
    try {
      const res = db.exec(query);
      if (res.length > 0) {
        const columns = res[0].columns;
        const values = res[0].values;
        result = `
          <table>
            <thead><tr>${columns.map(c => `<th>${c}</th>`).join('')}</tr></thead>
            <tbody>
              ${values.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}
            </tbody>
          </table>
        `;
      } else {
        result = '<p>No results</p>';
      }
    } catch (e) {
      result = `<p style="color:red;">Error: ${e.message}</p>`;
    }
  }
</script>

<div class="task-container">
  <p><span>TASK 1:</span> Make a query which shows all data from all fields in person-table.</p>
</div>
<div class="container">
  <div class="panel">
    <h3 class="panel-title">SQL Query</h3>
    <div class="box textarea-container" id="left-panel">
      <textarea bind:value={query} class="full-size-textarea" placeholder="Enter your query here..."></textarea>
      <button class="execute-button" on:click={runQuery}>Run ▶</button>
    </div>
  </div>
  <div class="panel">
    <h3 class="panel-title">Query Result</h3>
    <div class="box" style="padding:1.5rem;box-sizing: border-box;">
      {@html result}
    </div>
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
		font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
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
		font-family: monospace, "Courier New", Courier;
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

	.panel {
	  display: flex;
	  flex-direction: column;
	  flex: 1;
	}

	.panel-title {
	  font-size: 1.2rem;
	  margin-bottom: 0.5rem;
	  margin-left: 1.5rem;
	  color: var(--text-light);
	  font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
	  font-weight: 600;
	}

  </style>
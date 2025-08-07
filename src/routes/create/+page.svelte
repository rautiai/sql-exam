<script lang="ts">

  let title = '';
  let databaseSchema = '';
  let tasks = [''];

  function addTask() {
    tasks = [...tasks, ''];
  }

  function updateTask(index: number, value: string) {
    tasks[index] = value;
  }

  function submitExam() {
    console.log('Exam Created:', { title, databaseSchema, tasks });
    alert('Exam submitted! (Check console for data)');
  }

</script>

<svelte:head>
  <title>Create Exam - SQL Exam App</title>
</svelte:head>

<div class="create-exam-container">
  <h1>Create New Exam</h1>

  <label>
    Exam Title:
    <input type="text" bind:value={title} placeholder="Enter exam title" />
  </label>

  <label>
    Database Schema:
    <textarea bind:value={databaseSchema} placeholder="Write CREATE TABLE statements here"></textarea>
  </label>

  <h2>Tasks</h2>
  {#each tasks as task, index}
    <div class="task-field">
      <label for={"task-" + index}>Task {index + 1}:</label>
      <input id={"task-" + index} type="text" bind:value={tasks[index]} placeholder="Enter task" />
    </div>
  {/each}
  <button type="button" on:click={addTask}>+ Add New Task</button>
  <button class="submit-btn" on:click={submitExam}>Submit Exam</button>
</div>

<style>

  .create-exam-container {
    max-width: 700px;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-family: 'Segoe UI', Roboto, sans-serif;
    color: #fdfdff;
    background-color: #263238;
    padding: 2rem;
    border-radius: 1rem;
  }

  input[type="text"], textarea {
    width: 100%;
    padding: 0.8rem;
    border-radius: 0.5rem;
    border: 1px solid #555;
    background-color: #2b2b2b;
    color: #fff;
    font-size: 1rem;
  }

  textarea {
    height: 150px;
    resize: vertical;
  }

  .task-field {
    margin-bottom: 0.5rem;

	& label {
		display: block;
		margin-bottom: 0.25rem;
		margin-left: 0.5rem;
		font-weight: 600;
		color: #fff;
	}

	& input {
	  border-radius: 1rem;
	}
  }

  .submit-btn {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    background-color: #546E7A;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    align-self: flex-start;
  }

  .submit-btn:hover {
    background-color: #455A64;
  }

  button[type="button"] {
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    background-color: #37474F;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  button[type="button"]:hover {
    background-color: #455A64;
  }
</style>
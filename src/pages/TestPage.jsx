import {
  createInitialCollectionStructure,
  createTaskItem,
  createContributor,
  createTag,
  updateTaskStatus,
  fetchTasks,
  updateTaskCountREJECTED
} from "../functions/functions";

import React, { useEffect, useState } from 'react';

export default function TestPage() {
  const [tasks, setTasks] = useState([]); // State to hold tasks
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error state

  useEffect(() => {
    const getTasks = async () => {
      try {
        const fetchedTasks = await fetchTasks(4804); // Fetch tasks
        setTasks(fetchedTasks); // Update state with fetched tasks
      } catch (err) {
        setError(err); // Set error state if fetching fails
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    getTasks(); // Call the function to fetch tasks
  }, []); // Dependency array to re-fetch if collectionID changes

  if (loading) return <p>Loading tasks...</p>; // Loading state
  if (error) return <p>Error fetching tasks: {error.message}</p>; // Error state

  const handleClick = async () => { // Make the handler async
    try {
      await createInitialCollectionStructure(); // Await the promise
      console.log("Collection structure created successfully!");
    } catch (error) {
      console.error("Error creating collection structure:", error);
    }
  };

  const handleCreateTaskItem = async () => {
    try {
      await createTaskItem(4804)
      console.log("task created successfully")
    } catch (err) {
      console.error("error in creating task", err)
    }
  }

  const handleCreateContributor = async () => {
    try {
      await createContributor(4804);
      console.log("Contributor Created Successfully");
    } catch (error) {
      console.error("Error creating contributor", err)
    }
  }

  const handleCreateTag = async () => {
    try {
      await createTag(4804);
      console.log("Tag Created Successfully");
    } catch (error) {
      console.error("Error creating tag", error)
    }
  }

  const handleRejectTask = async (taskID) => {
   try {
    await updateTaskCountREJECTED(4804, taskID)
   } catch (error) {
    console.error("error rejecting task", error)
   }
  }

  const handleUpdateTaskStatus = async (taskID) => {
    try {
      console.log(taskID, " is used to scan for the document")
      await updateTaskStatus(4804, taskID);
    } catch (error) {
      console.error("Error creating tag", error)
    }
  }

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        {/* <button onClick={handleClick}>Click</button> */}
        <button onClick={handleCreateTaskItem}>Create Task</button>
        {/* <button onClick={handleCreateContributor}>Create Contributor</button> f6XpTUtijns0hxa6Axf7*/}
        {/* <button onClick={handleCreateTag}>Create Tag</button> */}
        {/* <button onClick={handleUpdateTaskStatus}>Update Task</button> */}
        <div>
          <h2>Task List</h2>
          <ul>
            {tasks.map(task => (
              <div key={task.id} className="mt-[15px]">
                <li>{task.id} <br /> {task.task_status}</li>
                <button onClick={() => {handleUpdateTaskStatus(task.id)}}>Update Task</button>
                <button onClick={() => {handleRejectTask(task.id)}}>Reject Task</button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
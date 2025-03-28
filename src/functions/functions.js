import { db } from "../firebase";
import { collection, doc, setDoc, addDoc, getDocs, updateDoc, getDoc, FieldValue } from "firebase/firestore";

function randomCollectionCode() {
    return Math.floor(1000 + Math.random() * 9000);
}

async function createInitialCollectionStructure() {
    const randomCode = randomCollectionCode();
    const boardTitleInput = "BSIS 3 | CAPSTONE 4";
    const boardDescInput = "Lumina is a dynamic project management tool designed to facilitate collaboration and streamline workflow for teams engaged in incremental and progressive development. By visually organizing tasks into stages and allowing for flexible integration of new features, it empowers teams to adapt to changing requirements while ensuring timely delivery of quality deliverables";

    try {
        // 1. Create a document reference with an auto-generated ID
        const docRef = doc(collection(db, String(randomCode))); //Convert randomCode to string

        console.log(randomCode + " is the 4 digit randomly generated board code");

        // 2. Set the fields in the document
        await setDoc(docRef, {
            board_title: boardTitleInput,
            completed: 0,
            contributors_count: 0,
            description: boardDescInput,
            in_progress: 0,
            in_review: 0,
            reject: 0,
            tags_count: 0,
            to_do: 0,
            total_tasks: 0,
        });

        await addDoc(collection(docRef, "contributors"), { 
            contributor_name: "Archivist",
            contributor_role: "Board Admin",
            contributor_profile: 13
         });
        await addDoc(collection(docRef, "tags"), { 
            tag_color: "#ffffff",
            tag_name: "White Tag"
        });
        await addDoc(collection(docRef, "task_items"), { 
            task_title: "Project Kick Off",
            task_desc: "To Start your project making process",
            task_status: 0,
            task_due: "February 14, 2003",
        });

        console.log("Collection Created Successfully");
    } catch (err) {
        console.log(err);
    }
}

async function createTaskItem(collectionID, taskTitle, taskDesc, TaskDue, taskTags, taskConts) {
    try {
        console.log("Starting createTaskItem...");
        
        const collectionRef = collection(db, String(collectionID));
        const querySnapshot = await getDocs(collectionRef);

        if (querySnapshot.empty) {
            console.error("No documents found in the collection:", collectionID);
            return;
        }

        const documentId = querySnapshot.docs[0].id;
        console.log("Found document ID:", documentId);

        // Target task_items subcollection
        const taskItemsSubCollectionRef = collection(db, String(collectionID), documentId, "task_items");
        
        // Add Task Item
        const taskItemRef = await addDoc(taskItemsSubCollectionRef, {
            task_title: taskTitle,
            task_desc: taskDesc,
            task_status: 1,
            task_due: TaskDue,
        });
        console.log("Task Item created with ID:", taskItemRef.id);

        // Double-check the created task
        const taskItemDocumentId = taskItemRef.id;
        
        /*** Handling Task Tags ***/
        if (!Array.isArray(taskTags) || taskTags.length === 0) {
            console.warn("taskTags is empty or not an array:", taskTags);
        } else {
            console.log(`Processing ${taskTags.length} task tags...`);
            const taskTagsSubSubCollectionRef = collection(db, String(collectionID), documentId, "task_items", taskItemDocumentId, "task_tags");

            const tagsPromises = taskTags.map(async (tag, index) => {
                console.log(`Adding Tag ${index + 1}/${taskTags.length}:`, tag);
                return await addDoc(taskTagsSubSubCollectionRef, {
                    tag_ID: tag.id,
                    tag_name: tag.tag_name,
                    tag_color: tag.tag_color
                });
            });

            await Promise.all(tagsPromises);
            console.log("✅ All task tags added successfully.");
        }

        /*** Handling Task Contributors ***/
        if (!Array.isArray(taskConts) || taskConts.length === 0) {
            console.warn("taskConts is empty or not an array:", taskConts);
        } else {
            console.log(`Processing ${taskConts.length} contributors...`);
            const taskContributorsSubSubCollectionRef = collection(db, String(collectionID), documentId, "task_items", taskItemDocumentId, "task_contributors");

            const contributorPromises = taskConts.map(async (cont, index) => {
                console.log(`Adding Contributor ${index + 1}/${taskConts.length}:`, cont);
                return await addDoc(taskContributorsSubSubCollectionRef, {
                    contributor_ID: cont.id,
                    contributor_name: cont.contributor_name,
                    contributor_profile: cont.contributor_profile
                });
            });

            await Promise.all(contributorPromises);
            console.log("✅ All contributors added successfully.");
        }

        /*** Updating Task Counters in Parent Collection ***/
        const docRef = doc(collectionRef, documentId);
        const currentCountsDoc = await getDoc(docRef);

        if (currentCountsDoc.exists()) {
            const newTotalTaskCount = (currentCountsDoc.data().total_tasks || 0) + 1;
            const newTodoCount = (currentCountsDoc.data().to_do || 0) + 1;
            
            await updateDoc(docRef, {
                total_tasks: newTotalTaskCount,
                to_do: newTodoCount
            });
            console.log("✅ Task counters updated.");
        } else {
            console.warn("⚠️ Document for updating counters not found.");
        }

        // Final Debug Alerts
        alert("✅ Task added successfully!");
        alert("Tags: " + JSON.stringify(taskTags, null, 2));
        alert("Contributors: " + JSON.stringify(taskConts, null, 2));

        console.log("🎉 Task Item created Successfully!");
    } catch (error) {
        console.error("❌ Error in creating task:", error);
    }
}


async function createContributor(collectionID, contName, contRole, contProfile) {
    try {
        const collectionRef = collection(db, String(collectionID));
        const querySnapshot = await getDocs(collectionRef);

        const documentId = querySnapshot.docs[0].id;

        const contributorsSubCollectionRef = collection(db, String(collectionID), documentId, "contributors");
        await addDoc(contributorsSubCollectionRef, {
            contributor_name: contName,
            contributor_role: contRole,
            contributor_profile: contProfile
        })
    } catch (error) {
        console.error("error creating contributor", err)
    }
}

async function createTag(collectionID, tagName, tagColor) {
    try {
        const collectionRef = collection(db, String(collectionID));
        const querySnapshot = await getDocs(collectionRef);

        const documentId = querySnapshot.docs[0].id;

        const tagsSubCollectionRef = collection(db, String(collectionID), documentId, "tags");
        await addDoc(tagsSubCollectionRef, {
            tag_color: tagColor,
            tag_name: tagName
        })
        alert('Tag Added Successfuly');
    } catch (error) {
        console.error("error creating tag", err)
    }
}

async function updateTaskStatus(collectionID, taskID, newTaskDue) {
    try {
        const collectionRef = collection(db, String(collectionID));
        const querySnapshot = await getDocs(collectionRef);
        const documentId = querySnapshot.docs[0].id;

        const taskItemsSubCollectionRef = collection(db, String(collectionID), documentId, "task_items");
        const taskItemsSnapshot = await getDocs(taskItemsSubCollectionRef);
        const taskDoc = taskItemsSnapshot.docs.find(doc => doc.id === taskID);

        console.log(taskID, "is used in updating the tasks");
        if (!taskDoc) {
            console.error("No task found with the specified taskID:", taskID);
            return;
        }
        const taskDocRef = doc(taskItemsSubCollectionRef, taskDoc.id);
        const currentTaskDoc = await getDoc(taskDocRef);
        const currentTaskStatus = currentTaskDoc.data().task_status;  

        await updateDoc(taskDocRef, {
            task_due: newTaskDue
        });
        
        if (currentTaskStatus == 1) {
            await updateTaskCountTODOtoINPROGRESS(collectionID);
            await updateDoc(taskDocRef, {
                task_status: 2
            });
        }
        if (currentTaskStatus == 2) {
            await updateTaskCountINPROGRESStoINREVIEW(collectionID);
            await updateDoc(taskDocRef, {
                task_status: 3
            });
        }
        if (currentTaskStatus == 3) {
            await updateTaskCountINREVIEWtoCOMPLETED(collectionID);
            await updateDoc(taskDocRef, {
                task_status: 4
            });
        }

        console.log("Task status updated successfully!");
    } catch (error) {
        console.error("Error updating task status:", error);
    }
}

async function fetchTasks(collectionID) {
    try {
        // Reference to the specified collection
        const collectionRef = collection(db, String(collectionID));
        const querySnapshot = await getDocs(collectionRef);

        const documentId = querySnapshot.docs[0].id;

        // Corrected line: target task_items directly under the document
        const taskItemsSubCollectionRef = collection(db, String(collectionID), documentId, "task_items");

        const taskSnapshot = await getDocs(taskItemsSubCollectionRef);

        // Array to hold the fetched tasks
        const tasks = [];

        // Iterate over each document in the query snapshot
        taskSnapshot.forEach((doc) => {
            // Push the document data into the tasks array
            tasks.push({ id: doc.id, ...doc.data() });
        });

        // Return the array of tasks
        return tasks;
    } catch (error) {
        console.error("Error fetching tasks:", error);
    }
}

async function updateTaskCountTODOtoINPROGRESS(collectionID) {
    try {
        const collectionRef = collection(db, String(collectionID));
        const querySnapshot = await getDocs(collectionRef);

        const documentId = querySnapshot.docs[0].id;
        const docRef = doc(collectionRef, documentId)
        const currentCountsDoc = await getDoc(docRef);

        const todoCount = currentCountsDoc.data().to_do || 0;
        const inProgressCount = currentCountsDoc.data().in_progress || 0;
        const newTodoCount = todoCount - 1;
        const newInProgressCount = inProgressCount + 1;

        await updateDoc(docRef, {
            to_do: newTodoCount,
            in_progress: newInProgressCount
        });
        console.log("count updated successfully!")
        
    } catch (error) {
        console.error ("error updating task count", error)
    }
}

async function updateTaskCountINPROGRESStoINREVIEW(collectionID) {
    try {
        const collectionRef = collection(db, String(collectionID));
        const querySnapshot = await getDocs(collectionRef);

        const documentId = querySnapshot.docs[0].id;
        const docRef = doc(collectionRef, documentId)
        const currentCountsDoc = await getDoc(docRef);

        const inProgressCount = currentCountsDoc.data().in_progress || 0;
        const inReviewCount = currentCountsDoc.data().in_review || 0;
        const newInProgressCount = inProgressCount - 1;
        const newInReviewCount = inReviewCount + 1;

        await updateDoc(docRef, {
            in_progress: newInProgressCount,
            in_review: newInReviewCount
        });
        console.log("count updated successfully!")
        
    } catch (error) {
        console.error ("error updating task count", error)
    }
}

async function updateTaskCountINREVIEWtoCOMPLETED(collectionID) {
    try {
        const collectionRef = collection(db, String(collectionID));
        const querySnapshot = await getDocs(collectionRef);

        const documentId = querySnapshot.docs[0].id;
        const docRef = doc(collectionRef, documentId)
        const currentCountsDoc = await getDoc(docRef);

        const inReviewCount = currentCountsDoc.data().in_review || 0;
        const completedCount = currentCountsDoc.data().completed || 0;
        const newInReviewCount = inReviewCount - 1;
        const newCompletedCount = completedCount + 1;

        await updateDoc(docRef, {
            in_review: newInReviewCount,
            completed: newCompletedCount,
        });
        console.log("count updated successfully!")
        
    } catch (error) {
        console.error ("error updating task count", error)
    }
}

async function updateTaskCountREJECTED(collectionID, taskID) {
    try {
        const collectionRef = collection(db, String(collectionID));
        const querySnapshot = await getDocs(collectionRef);
        const documentId = querySnapshot.docs[0].id;

        

        const taskItemsSubCollectionRef = collection(db, String(collectionID), documentId, "task_items");
        const taskItemsSnapshot = await getDocs(taskItemsSubCollectionRef);
        const taskDoc = taskItemsSnapshot.docs.find(doc => doc.id === taskID);

        const taskDocRef = doc(taskItemsSubCollectionRef, taskDoc.id);

        const currentTaskDoc = await getDoc(taskDocRef);
        const currentTaskStatus = currentTaskDoc.data().task_status;

        await updateDoc(taskDocRef, {
            task_status: 5 // Set task_status to 5
        });

        const docRef = doc(collectionRef, documentId)
        const currentCountsDoc = await getDoc(docRef);
        const newRejectCount = currentCountsDoc.data().reject + 1

        //if the current task doc status is in the completed
        if (currentTaskStatus == 1) {
            const newToDoCount = currentCountsDoc.data().to_do - 1
            try {
                await updateDoc(docRef, {
                    to_do: newToDoCount,
                    reject: newRejectCount
                });
                console.log("todo count updated successfully!")
            } catch (error) {
                console.error("error updating to do count", error)
            }
        }
        if (currentTaskStatus == 2) {
            const newInProgressCount = currentCountsDoc.data().in_progress - 1;
            try {
                await updateDoc(docRef, {
                    in_progress: newInProgressCount,
                    reject: newRejectCount
                });
                console.log("in progress count updated successfully!")
            } catch (error) {
                console.error("error updating to do count", error)
            }
        }
        if (currentTaskStatus == 3) {
            const newInReviewCount = currentCountsDoc.data().in_review - 1;
            try {
                await updateDoc(docRef, {
                    in_review: newInReviewCount,
                    reject: newRejectCount
                });
                console.log("in review count updated successfully!")
            } catch (error) {
                console.error("error updating to do count", error)
            }
        }

    } catch (error) {
        console.error("Error updating task to failure", error)
    }
}

async function fetchTags(collectionID) {
    try {
        const collectionRef = collection(db, String(collectionID));
        const querySnapshot = await getDocs(collectionRef);

        const documentId = querySnapshot.docs[0].id;

        const tagsSubCollectionRef = collection(db, String(collectionID), documentId, "tags");
        const tagsSnapshot = await getDocs(tagsSubCollectionRef);
        const tags = [];
        tagsSnapshot.forEach((doc) => {
            tags.push({ id: doc.id, ...doc.data() });
        });
        return tags;
    } catch (error) {
        console.error("error creating tag", err)
    }
}

async function fetchContributors(collectionID) {

    try {
        const collectionRef = collection(db, String(collectionID));
        const querySnapshot = await getDocs(collectionRef);
        const documentId = querySnapshot.docs[0].id;
        const contributorsSubCollectionRef = collection(db, String(collectionID), documentId, "contributors");
        const contSnapshot = await getDocs(contributorsSubCollectionRef);
        const conts = [];
        contSnapshot.forEach((doc) => {
            conts.push({ id: doc.id, ...doc.data() });
        });
        return conts;
    } catch (error) {
        console.error("error creating contributor", err)
    }
}

async function fetchBoardInfo(collectionID) {
    try {
        const collectionRef = collection(db, String(collectionID));
        const querySnapshot = await getDocs(collectionRef);
        const documentId = querySnapshot.docs[0];
        const docData = {
            id: documentId.id,
            ...documentId.data()
        }
        return docData
    } catch (error) {
        console.error("Error fetching documents", error)
    }
}

async function fetchTaskItems(collectionID) {
    try {
        // Reference to the main collection
        const collectionRef = collection(db, String(collectionID));
        const querySnapshot = await getDocs(collectionRef);
        
        // Check if there are any documents in the collection
        if (querySnapshot.empty) {
            return []; // Return an empty array if no documents found
        }

        const documentId = querySnapshot.docs[0].id;
        const taskItemsSubCollectionRef = collection(db, String(collectionID), documentId, "task_items");
        const taskItemsSnapshot = await getDocs(taskItemsSubCollectionRef);
        
        // Fetch task items and their associated tags and contributors
        const taskItems = await Promise.all(taskItemsSnapshot.docs.map(async (doc) => {
            const taskItemData = {
                id: doc.id, // Document ID
                ...doc.data() // Document data
            };

            // Fetch task tags
            const taskTagsSubCollectionRef = collection(db, String(collectionID), documentId, "task_items", doc.id, "task_tags");
            const taskTagsSnapshot = await getDocs(taskTagsSubCollectionRef);
            const taskTags = taskTagsSnapshot.docs.map(tagDoc => ({
                id: tagDoc.id,
                ...tagDoc.data()
            }));

            // Fetch task contributors
            const taskContributorsSubCollectionRef = collection(db, String(collectionID), documentId, "task_items", doc.id, "task_contributors");
            const taskContributorsSnapshot = await getDocs(taskContributorsSubCollectionRef);
            const taskContributors = taskContributorsSnapshot.docs.map(contributorDoc => ({
                id: contributorDoc.id,
                ...contributorDoc.data()
            }));

            // Add tags and contributors to the task item data

            console.log("FETCHED TASKS")
            console.log({
                ...taskItemData,
                tags: taskTags,
                contributors: taskContributors
            })
            
            return {
                ...taskItemData,
                tags: taskTags,
                contributors: taskContributors
            };
        }));

        return taskItems; // Return the array of task items with tags and contributors
    } catch (error) {
        console.error("Error fetching tasks", error);
        return []; // Return an empty array in case of error
    }
}

export {
    createInitialCollectionStructure,
    createTaskItem,
    createContributor,
    createTag,
    updateTaskStatus,
    updateTaskCountREJECTED,
    fetchTasks,
    fetchTags,
    fetchContributors,
    fetchBoardInfo,
    fetchTaskItems
};

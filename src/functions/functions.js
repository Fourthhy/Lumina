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

async function createTaskItem(collectionID) {
    const taskTitleInput = "Sample Task Title";
    const taskDescInput = "Sample Task Desc";
    const taskStatusDefault = 1;
    const taskDueInput = "Sample Task Due";

    const selectedTags = ['tagID1', 'tagID2', 'tagID3', 'tagID4']
    const selectedContributors = ['contID1', 'contID2', 'contID3', 'contID4',]

    try {
        const collectionRef = collection(db, String(collectionID));
        const querySnapshot = await getDocs(collectionRef);

        const documentId = querySnapshot.docs[0].id;

        // Corrected line: target task_items directly under the document
        const taskItemsSubCollectionRef = collection(db, String(collectionID), documentId, "task_items");

        await addDoc(taskItemsSubCollectionRef, {
            task_title: taskTitleInput,
            task_desc: taskDescInput,
            task_status: taskStatusDefault,
            task_due: taskDueInput,
        });

        const taskItemsQuerySnapshot = await getDocs(taskItemsSubCollectionRef);
        const taskItemDocumentId = taskItemsQuerySnapshot.docs[0].id;


        //Looped because of multiple tags
        const taskTagsSubSubCollectionRef = collection(db, String(collectionID), documentId, "task_items", taskItemDocumentId, "task_tags");
        const tagsPromises = selectedTags.map(async (tagID) => {
            return await addDoc(taskTagsSubSubCollectionRef, { tag_ID: tagID });
        });
        try {
            const tagResults = await Promise.all(tagsPromises);
            console.log('All documents added:', tagResults);
            console.log("task_tags sub-subcollection created.");
        } catch (error) {
            console.error('Error adding documents:', error);
        }

        const taskContributorsSubSubCollectionRef = collection(db, String(collectionID), documentId, "task_items", taskItemDocumentId, "task_contributors");
        const contributorPromises = selectedContributors.map(async (contID) => {
            return await addDoc(taskContributorsSubSubCollectionRef, { contributor_ID: contID });
        })
        try {
            const contResults = await Promise.all(contributorPromises);
            console.log('All documents added:', contResults);
            console.log("task_contributors sub-subcollection created.");
        } catch (error) {
            console.error('Error adding documents:', error);
        }

        const docRef = doc(collectionRef, documentId)
        const currentCountsDoc = await getDoc(docRef);

        const newTotalTaskCount = currentCountsDoc.data().total_tasks + 1
        const newTodoCount = currentCountsDoc.data().to_do + 1
        updateDoc(docRef, {
            total_tasks: newTotalTaskCount,
            to_do: newTodoCount
        })

        console.log("Task Item created Successfully");
    } catch (error) {
        console.error("error in creating task", error);
    }
}

async function createContributor(collectionID) {
    const contributorNameInput = "sample contributor name";
    const contributorRoleInput = "sample contributor role";
    const contributorProfile = 1;

    try {
        const collectionRef = collection(db, String(collectionID));
        const querySnapshot = await getDocs(collectionRef);

        const documentId = querySnapshot.docs[0].id;

        const contributorsSubCollectionRef = collection(db, String(collectionID), documentId, "contributors");
        await addDoc(contributorsSubCollectionRef, {
            contributor_name: contributorNameInput,
            contributor_role: contributorRoleInput,
            contributorProfile: contributorProfile
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

async function updateTaskStatus(collectionID, taskID) {
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
};

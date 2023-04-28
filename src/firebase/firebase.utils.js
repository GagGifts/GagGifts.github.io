// Importing firebase and its services
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Project-specific configuration from Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBZem-euDYIpWxuCuDxJILvwRQq8Xl7KrU",
    authDomain: "gag-gifts.firebaseapp.com",
    projectId: "gag-gifts",
    storageBucket: "gag-gifts.appspot.com",
    messagingSenderId: "785627065554",
    appId: "1:785627065554:web:fc8221cbae6697a471910b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/**
 * This section is for all functions related to Firebase 
 * authentication. This includes signing in with Google,
 * signing in with Email, signing up with Email, and
 * signing out.
 */

// Access to Auth
export const auth = firebase.auth();
// Provider for Google Auth
export const googleProvider = new firebase.auth.GoogleAuthProvider();
// Provider for Email Auth
export const emailProvider = new firebase.auth.EmailAuthProvider();

// Script to sign in with Google
export const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider);
};

// Script to sign in with Email
export const signInWithEmail = (email, password) => {
    auth.signInWithEmailAndPassword(email, password);
};

// Script to sign up with Email
export const signUpWithEmail = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password);
};

// Script to sign out
export const signOut = () => {
    auth.signOut();
};

// Script to get the current user from Firebase
export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
};

/**
 * This section is for all functions related to Firebase
 * Firestore. This includes methods regarding parsing 
 * data from Firestore and adding data to Firestore.
 */

// Access to Firestore
export const firestore = firebase.firestore();

// Script to create a user profile document in Firestore
export const getUserProfileDocument = async (userAuth, displayNameRef) => {
    // If the user does not exist, return
    if (!userAuth) {
        return;
    }

    // Create a reference to the user's document in Firestore
    const userRef = firestore.doc(`userIdToUserInfo/${userAuth.uid}`);

    // Get the user's document from Firestore
    const snapShot = await userRef.get();

    // If the user does not exist in Firestore, create a new user document
    if (!snapShot.exists) {
        // Retrieve the display name
        const displayName = displayNameRef.displayName;

        // Retrieve the user's display name and email
        const { email } = userAuth;
        // Create a new date object for the user's creation date
        const createAt = new Date();
        // Create an empty array for the user's shopping cart
        const shoppingCart = [];
        // Try to create a new user document in Firestore
        try {
            // Set the user's display name, email, creation date, and shopping cart
            await userRef.set({
                displayName,
                email,
                createAt,
                shoppingCart
            });
        } catch (error) {
            // If there is an error, log it to the console
            console.log("error creating user", error.message);
        }
    }
    // Return the user's document from Firestore
    return userRef;
};

// Script to add a document to a collection in Firestore
export const addDocumentToCollection = async (
    // The collection we are adding to
    collectionKey,
    // The object to add to the collection
    objectsToAdd
) => {
    // Create a reference to the collection in Firestore
    const collectionRef = firestore.collection(collectionKey);

    // Create a batch object
    const batch = firestore.batch();
    // For each object to add...
    objectsToAdd.forEach(obj => {
        // Create a new document reference in the collection with a random ID
        const newDocRef = collectionRef.doc();
        // Write the object to the document reference
        batch.set(newDocRef, obj);
    });
    // Commit the batch
    return await batch.commit();
};

// Script to take a item category snapshot from Firestore and convert it to a map
export const convertCategorySnapshotToMap = async (collections) => {
    // Create an array of the item category documents
    const categoryObjects = await Promise.all(collections.docs.map(async doc => {
        // Retrieve the item IDs and category name from the document
        const { categoryName, listOfItemIDs } = await doc.data();

        // Create an array of the items in the category
        const items = await Promise.all(listOfItemIDs.map(async itemID => {
            // Create a reference to the item in Firestore
            const itemRef = firestore.doc(`itemIdToItemInfo/${itemID}`);
            // Get the item's document from Firestore
            const itemSnapshot = await itemRef.get();
            // Retrieve the item's data from the document
            const itemData = itemSnapshot.data();
            // Return the item object
            return {
                id: itemID,
                imageUrl: itemData.imageURL,
                itemDescription: itemData.itemDescription,
                name: itemData.itemName,
                price: itemData.price
            }
        }));


        // Return the item category object
        return {
            routeName: encodeURI(categoryName.toLowerCase()),
            id: doc.id,
            categoryName,
            items
        };
    }));

    const reducedObjects = categoryObjects.reduce((accumulator, collection) => {
        accumulator[collection.categoryName.toLowerCase()] = collection;
        return accumulator;
    }, {});

    return reducedObjects;
};

// Script to get a list of the current coupons in the system
export const getCoupons = async () => {
    const collectionRef = firestore.collection("coupons");
    const snapShot = await collectionRef.get();
    const coupons = snapShot.docs.map(doc => doc.data());
    console.log(coupons);
    return coupons;
};

// Exporting firebase
export default firebase;
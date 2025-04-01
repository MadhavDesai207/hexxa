// src/services/newsletterService.js

import { db } from '../firebase/config';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

// Collection name for newsletter subscribers
const SUBSCRIBERS_COLLECTION = 'newsletter_subscribers';

/**
 * Check if an email already exists in the subscribers collection
 * @param {string} email - The email to check
 * @returns {Promise<boolean>} - Whether the email exists
 */
export const checkIfEmailExists = async (email) => {
  try {
    const subscribersRef = collection(db, SUBSCRIBERS_COLLECTION);
    const q = query(subscribersRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);
    
    return !querySnapshot.empty;
  } catch (error) {
    console.error('Error checking if email exists:', error);
    throw error;
  }
};

/**
 * Add a new subscriber to the newsletter
 * @param {string} email - The email to subscribe
 * @returns {Promise<string>} - The document ID of the new subscriber
 */
export const addSubscriber = async (email) => {
  try {
    const subscribersRef = collection(db, SUBSCRIBERS_COLLECTION);
    
    const docRef = await addDoc(subscribersRef, {
      email,
      subscriptionDate: new Date(),
      active: true
    });
    
    return docRef.id;
  } catch (error) {
    console.error('Error adding subscriber:', error);
    throw error;
  }
};

/**
 * Subscribe an email to the newsletter
 * @param {string} email - The email to subscribe
 * @returns {Promise<object>} - Result object with success status and message
 */
export const subscribeToNewsletter = async (email) => {
  try {
    // Check if email already exists
    const exists = await checkIfEmailExists(email);
    
    if (exists) {
      return {
        success: false,
        message: 'This email is already subscribed to our newsletter.'
      };
    }
    
    // Add the new subscriber
    await addSubscriber(email);
    
    return {
      success: true,
      message: 'Successfully subscribed to the newsletter!'
    };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return {
      success: false,
      message: 'An error occurred while processing your request.'
    };
  }
};
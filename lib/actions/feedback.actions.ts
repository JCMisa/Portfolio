"use server";

import { revalidatePath } from "next/cache";
import { ID, Query } from "node-appwrite";

import { Feedback } from "@/types/appwrite.types";

import {
  FEEDBACK_COLLECTION_ID,
  DATABASE_ID,
  databases,
} from "../appwrite.config";
import { parseStringify } from "../utils";

//  CREATE FEEDBACK
export const createFeedBack = async (
  feedback: CreateFeedBackParams
) => {
  try {
    const newFeedBack = await databases.createDocument(
      DATABASE_ID!,
      FEEDBACK_COLLECTION_ID!,
      ID.unique(),
      feedback
    );

    // revalidatePath("/admin");
    return parseStringify(newFeedBack);
  } catch (error) {
    console.error("An error occurred while creating a new appointment:", error);
  }
};


//  DELETE FEEDBACK
export const deleteFeedBack = async (feedbackId: string) => {
  try {
    // Delete the feedback document
    await databases.deleteDocument(DATABASE_ID!, FEEDBACK_COLLECTION_ID!, feedbackId);

    // // (Optional) Revalidate the path if necessary
    // revalidatePath("/admin"); // Assuming you want to update the admin UI on deletion

    return { success: true }; // Return a success response
  } catch (error:any) {
    console.error("An error occurred while deleting feedback:", error);
    return { success: false, error: error.message }; // Return an error response
  }
};

// GET ALL FEEDBACKS
export const getFeedbacks = async () => {
  try {
    // Get all documents from the feedback collection
    const documents = await databases.listDocuments(DATABASE_ID!, FEEDBACK_COLLECTION_ID!);

    // Parse and return the feedback data (optional)
    return Array.isArray(documents) ? documents.map((doc:any) => parseStringify(doc)) : []; // Modify as needed for your data format
  } catch (error) {
    console.error("An error occurred while fetching feedback:", error);
    return []; // Return an empty array on error
  }
};
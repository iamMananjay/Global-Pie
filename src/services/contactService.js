import { Contact } from '../api/api'; // Import the login API URL
import axios from "axios";

export const createContact = async (contactData) => {
    try {
        const response = await axios.post(Contact, contactData);
        return response.data;
    } catch (error) {
        throw error.response?.data || "An error occurred while sending the message.";
    }
};
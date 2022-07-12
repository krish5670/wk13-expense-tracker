import axios from 'axios';
import IItem from '../models/iitem';

const baseUrl=process.env.REACT_APP_BASE_URL;

const getItems = async () => {
    const response = await axios.get<IItem[]>(`${baseUrl}/items`);
    return response.data;
};

const addItem = async(item:Omit<IItem, 'id'>)=>{
    const response = await axios.post<IItem>(`${baseUrl}/items}`,item,{
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.data;
}
export {
    getItems,
    addItem

}
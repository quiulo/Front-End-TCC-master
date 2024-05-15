import React from 'react'
import { Post } from '../../../interfaces/Post';
import axiosInstance from '../../../utils/axios';

const getPostById = async (id: string): Promise<Post> => {
    const res = await axiosInstance.get('/post/' + id)
    return res.data;
}

const getAllPosts = async (): Promise<Post[]> => {
    const res = await axiosInstance.get('/post');
    return res.data;
}

const deletePost = async (id: string): Promise<void> => {
    const res = await axiosInstance.delete('/post/' + id);
    return res.data;
}

const updatePost = async (id:string, post:Post) => {
    const res = await axiosInstance.put('/post/' + id, post);
    return res.data;
  }
  


  const createPost = async (post: Post): Promise<void> => {
    const res = await axiosInstance.post('/post', post);
    return res.data;
  }
  


export default {
    getPostById,
    getAllPosts,
    createPost,
    deletePost,
    updatePost
}
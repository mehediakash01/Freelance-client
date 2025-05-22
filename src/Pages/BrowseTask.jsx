import React from 'react';
import { useLoaderData } from 'react-router';
import TaskCard from './TaskCard';

const BrowseTask = () => {
    const allTasks = useLoaderData();
   
    return (
        <div className='bg-[#F5F5F5] my-12 w-11/12 mx-auto'>
            <div className='text-center py-8 space-y-2'>
                <h1 className='text-red-600 text-4xl font-bold'>Find Tasks That Match Your Skills</h1>
                <p className='text-gray-400'>Browse tasks in Web Development, Design, Writing, and more. 
                    Submit proposals and grow your freelance profile</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    allTasks.map(task=><TaskCard key={task._id} task={task}></TaskCard>)
                }
            </div>
        </div>
    );
};

export default BrowseTask;
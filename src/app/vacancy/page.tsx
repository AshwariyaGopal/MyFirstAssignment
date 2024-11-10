
// pages/vacancy.tsx
import React from 'react';

 export default function Vacancy(){
    return (
        <div className="min-h-screen bg-pink-50 p-4">
            <h1 className="text-3xl font-bold text-center mb-4 mt-14">Current Vacancies</h1>
            <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-xl font-semibold">Makeup Artist</h2>
                <p>Location: New York</p>
                <p>Looking for a talented makeup artist with 2+ years of experience.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 mt-4">
                <h2 className="text-xl font-semibold">Sales Associate</h2>
                <p>Location: Los Angeles</p>
                <p>Seeking a passionate sales associate for our makeup store.</p>
            </div>
            <div className='bg-white rounded-lg shadow-md p-4 mt-4'>
                <h2 className='text-xl font-semibold'>Beauty Consultant</h2>
                <p>Location: Paris</p>
                <p>"Seeking an experienced Beauty Consultant with 5+ years in the beauty industry.</p>
            </div>
        </div>
    );
}

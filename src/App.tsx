import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Dashboard = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.example.com/data');
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    React.useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="p-10">
            <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-3 gap-4"
            >
                {data.map((item, index) => (
                    <motion.div
                        key={index}
                        className="bg-white shadow p-4 rounded-lg"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h2 className="text-xl font-semibold">{item.title}</h2>
                        <p>{item.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Dashboard;
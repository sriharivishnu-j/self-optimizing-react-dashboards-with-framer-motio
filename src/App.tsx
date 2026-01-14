import React from 'react';
import { motion } from 'framer-motion';

const Dashboard: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <motion.div
                className="bg-white p-10 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-2xl font-bold mb-4">Self-Optimizing Dashboard</h1>
                <p className="text-gray-700">Using AI to optimize your data insights.</p>
            </motion.div>
        </div>
    );
};

export default Dashboard;

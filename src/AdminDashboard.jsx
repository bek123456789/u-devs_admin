import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./AdminDashboard.css";

const AdminDashboard = () => {
    const [applications, setApplications] = useState([]);
    const [clients, setClients] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/applications').then((response) => {
            console.log(response.data); // Log the response to see the structure of the data
            setApplications(response.data);
        });

        axios.get('http://localhost:5000/clients').then((response) => {
            setClients(response.data);
        });
    }, []);

    return (
        <div className="admin-dashboard container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

            {/* Applications Section */}
            <section className="applications mb-8">
                <h2 className="text-xl font-semibold mb-2">Applications</h2>
                <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="p-2 border-b">ID</th>
                            <th className="p-2 border-b">Full Name</th>
                            <th className="p-2 border-b">Telegram</th>
                            <th className="p-2 border-b">Phone</th>
                            <th className="p-2 border-b">Resume</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((app) => (
                            <tr key={app.id} className="hover:bg-gray-50">
                                <td className="p-2 border-b">{app.id}</td>
                                <td className="p-2 border-b">{app.fullName}</td>
                                <td className="p-2 border-b">{app.telegram}</td>
                                <td className="p-2 border-b">{app.phone}</td>
                                <td className="p-2 border-b">
                                    <img
                                        src={app.resume ? `http://localhost:5000/${app.resume}` : '/path/to/placeholder.png'}
                                        alt="Resume icon"
                                        className="w-6 h-6"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            {/* Clients Section */}
            <section className="clients">
                <h2 className="text-xl font-semibold mb-2">Clients</h2>
                <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="p-2 border-b">ID</th>
                            <th className="p-2 border-b">Full Name</th>
                            <th className="p-2 border-b">Phone</th>
                            <th className="p-2 border-b">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((client) => (
                            <tr key={client.id} className="hover:bg-gray-50">
                                <td className="p-2 border-b">{client.id}</td>
                                <td className="p-2 border-b">{client.fullName}</td>
                                <td className="p-2 border-b">{client.phone}</td>
                                <td className="p-2 border-b">{client.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default AdminDashboard;

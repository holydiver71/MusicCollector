


"use client";
import React, { useEffect, useState } from "react";

/**
 * Home page for the MusicCollector web application.
 * Displays a welcome message, brief description, and backend health status.
 *
 * Follows Microsoft coding style and SOLID principles.
 */
const Home: React.FC = () => {
    // State for health status
    const [health, setHealth] = useState<string>("Loading...");
    const [timestamp, setTimestamp] = useState<string>("");
    const [error, setError] = useState<string>("");

    // Fetch health status from backend API
    useEffect(() => {
        fetch("http://localhost:5125/api/health")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("API response was not OK");
                }
                return response.json();
            })
            .then((data) => {
                setHealth(data.status);
                setTimestamp(data.timestamp);
            })
            .catch((err) => {
                setError("Unable to connect to backend API.");
            });
    }, []);

    return (
        <main style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "80vh" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Welcome to MusicCollector</h1>
            <p style={{ fontSize: "1.25rem", color: "#555", maxWidth: "600px", textAlign: "center" }}>
                Your music collection, organized and accessible.<br />
                Start building your library and discover new music!
            </p>
            <section style={{ marginTop: "2rem", textAlign: "center" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>API Health Status</h2>
                {error ? (
                    <span style={{ color: "red" }}>{error}</span>
                ) : (
                    <>
                        <span style={{ color: health === "Healthy" ? "green" : "orange" }}>{health}</span>
                        {timestamp && (
                            <div style={{ fontSize: "0.9rem", color: "#888", marginTop: "0.5rem" }}>
                                Checked at: {new Date(timestamp).toLocaleString()}
                            </div>
                        )}
                    </>
                )}
            </section>
        </main>
    );
};

export default Home;

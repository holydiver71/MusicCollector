


"use client";
import React, { useEffect, useState } from "react";
import { getLanguageResources } from "./locales";

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
    // Load language resources
    const resources = getLanguageResources();

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
            .catch(() => {
                setError("Unable to connect to backend API.");
            });
    }, []);

    return (
        <main style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "80vh" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>{resources.welcome}</h1>
            <p style={{ fontSize: "1.25rem", color: "#555", maxWidth: "600px", textAlign: "center" }}>
                {resources.description.split("\n").map((line, idx) => (
                    <React.Fragment key={idx}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </p>
            <section style={{ marginTop: "2rem", textAlign: "center" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>{resources.apiHealth}</h2>
                {error ? (
                    <span style={{ color: "red" }}>{error}</span>
                ) : (
                    <>
                        <span style={{ color: health === "Healthy" ? "green" : "orange" }}>{health}</span>
                        {timestamp && (
                            <div style={{ fontSize: "0.9rem", color: "#888", marginTop: "0.5rem" }}>
                                {resources.checkedAt} {new Date(timestamp).toLocaleString()}
                            </div>
                        )}
                    </>
                )}
            </section>
        </main>
    );
};

export default Home;

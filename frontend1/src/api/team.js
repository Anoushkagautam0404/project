// frondend/src/api/team.js

export const createTeam = async (teamData) => {
    const response = await fetch('http://localhost:5000/api/team', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(teamData),
    });
    return await response.json();
};

export const assignTask = async (taskData) => {
    const response = await fetch('http://localhost:5000/api/task/assign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskData),
    });
    return await response.json();
};

export const getTeamProgress = async () => {
    const response = await fetch('http://localhost:5000/api/team/progress', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
};
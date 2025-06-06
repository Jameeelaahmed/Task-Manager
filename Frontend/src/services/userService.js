const BASE_URL = import.meta.env.VITE_APP_BASE_URL + '/users';

export const login = async (email, password) => {
    const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    return response.json();
}

export const registerUser = async (name, email, password) => {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
        throw new Error("Email already exists");
    }

    return response.json();
}

export const getUserByEmail = async (email) => {
    const response = await fetch(`${BASE_URL}/email/${email}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error("User not found");
    }

    return response.json();
}

export const verifyUser = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ verified: true }),
    });

    if (!response.ok) {
        throw new Error("User not found");
    }

    return response.json();
}

export const updatePassword = async (id, password) => {
    const response = await fetch(`${BASE_URL}/${id}/reset-password`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
    });

    if (!response.ok) {
        throw new Error("Failed to update password");
    }

    return response.json();
}
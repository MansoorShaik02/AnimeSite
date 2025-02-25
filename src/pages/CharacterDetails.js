import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'D:/reactproectsreal/AnimeList/src/styles/CharacterDetails.css'; // Adjust the path if needed


const CharacterDetails = () => {
    const { id } = useParams(); // Get the character ID from the URL
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const fetchCharacterDetails = async () => {
            try {
                const response = await axios.get(`https://api.jikan.moe/v4/characters/${id}`);
                setCharacter(response.data.data); // Assuming the API response contains a "data" object
            } catch (error) {
                console.error('Error fetching character details:', error);
            }
        };

        fetchCharacterDetails();
    }, [id]);

    if (!character) {
        return <p>Loading character details...</p>;
    }

    return (
        <div className="character-details">

            <h1>{character.name}</h1>
            <img src={character.images.jpg.image_url} alt={character.name} />
            <p>{character.about}</p>
            {/* Add more character details here */}
        </div>
    );
};

export default CharacterDetails;

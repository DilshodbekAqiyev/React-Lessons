import React from 'react';
import Cards from './Cards';

export const App = () => {
    return (
        <>
            <div className="container flex">
                <Cards
                    icon="fa-regular fa-user"
                    title="Lifelike synthesized speech"
                    desc="Enable fluid, natural-sounding text to speech that matches the intonation and emotion of human
                    voices."
                />
                <Cards
                    icon="fa-solid fa-wifi"
                    title="Customizable text-talker voices"
                    desc="Create a unique AI voice generator that reflcts your brand's identity."
                />
                <Cards
                    icon="fa-solid fa-volume-high"
                    title="Fine-grained text-to-talk audio controls"
                    desc="Tune voice output for your scnarios by easily adjusting rate, pitch, pronunciation, pauses, and more."
                />
                <Cards
                    icon="fa-solid fa-person-walking-luggage"
                    title="Lifelike synthesized speech"
                    desc="Run Text to Speech anywhere--in the cloud, on-premises, or at the edge in containers."
                />
            </div>
            <div className="container grid">
                <Cards
                    icon="fa-solid fa-volume-high"
                    title="Tailor your speech  output"
                    desc="Fine-tune synthesied speech audio to fix your scenario. Define lexicons and control speech parameters such as pronunciation, pitch, rate, pauses, and intonation with Speech Synthesis Markup Language (SSML) or with the audio content creation tool."
                />
                <Cards
                    icon="fa-solid fa-volume-low"
                    title="Deploy Text to Speech anywhere, from the cloud to the edge"
                    desc="Run Text to Speech wherever your data resides. Build lifelike speech synthesis into applications optimized for both robust cloud capabilities and edge locality using containers."
                />
            </div>
        </>
    );
};

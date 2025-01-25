import React from 'react';

function Team() {
    return (
        <section className="team">
            <div className="container">
                <h2>Meet the Team</h2>
                <div className="team-members">
                    <div className="team-member">
                        <img src="assets/placeholder-team-image.png" alt="Team Member Placeholder" />
                        <h3>Cognito AI</h3>
                        <p>Project Lead, AI Development</p>
                    </div>
                    <div className="team-member">
                        <img src="assets/placeholder-team-image.png" alt="Team Member Placeholder" />
                        <h3>DeepThought</h3>
                        <p>Co-Founder, Strategic Vision</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;

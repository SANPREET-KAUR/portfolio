import React from 'react';
import './Achievements.css';

const Achievements = () => {
    return (
        <section className="achievements-section" id="achievements">
            <h2>Achievements</h2>
            <ul className="achievement-list">
                <li className="achievement-item">
                    🏆 Secured <strong>₹2.5 Lakh funding</strong> in 
                    <strong> Ideathon 2024</strong> organized by Chitkara University.
                </li>
                <li className="achievement-item">
                    💡 Participated in multiple <strong>National-Level Hackathons</strong>, including:
                    <ul>
                        <li>✨ <strong>Adobe Hackathon</strong> – gained hands-on experience solving real-world industry problems.</li>
                        <li>
                            📜 Certified Hackathons:
                            <ul>
                                <li>
                                    <a 
                                        href="https://unstop.com/certificate-preview/c2d984e4-1da7-49c3-b2a8-b6c12d2df896?utm_campaign=site-emails"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Hackathon Certificate 1
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="https://unstop.com/certificate-preview/ae913069-4c18-4d91-8a89-740243358b02?utm_campaign=site-emails"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Hackathon Certificate 2
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="achievement-item">
                    🔥 Solved <strong>350+ problems </strong> on  
                    <a 
                        href="https://leetcode.com/u/sanpreet_kaur/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                          LeetCode 
                    </a>, sharpening DSA and problem-solving skills.
                </li>
                <li className="achievement-item">
                    📚 Continuously learning and growing through participation in coding contests, hackathons, and open-source contributions.
                </li>
            </ul>
        </section>
    );
};

export default Achievements;

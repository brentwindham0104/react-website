import React from 'react';
import './resume.css';

 function Resume() {
    return <div className="resume-div">
                

                <h1>Profile: </h1>
                <ul>
                    <li className="profile-li">U.S. Navy veteran honorably discharged – Nuclear Field</li>
                    <li className="profile-li">Bachelor’s Degree in Computer Science </li>
                </ul>
                <h1>Education</h1>
                <ul>
                    <li className="profile-li">
                        Metropolitan State University
                        <ul>
                            <li>
                                B.S. Computer Science
                            </li>
                            <li>
                                GPA: 3.96
                            </li>
                        </ul>
                    </li>
                    <li className="profile-li">
                        Century College
                        <ul>
                            <li>
                                A.S. Computer Science
                            </li>
                        </ul>
                    </li>
                </ul>
                <h1>
                    SKILLZZZZ
                </h1>
                <h1>Work Experience</h1>
                <h2>
                    Wagento Commerce, Golden Valley, MN
                    <h3>
                        Software Developer Intern/Front-End Developer
                    </h3>
                    <ul>
                        <li>
                            Work on the Magento platform to build and maintain websites for E-commerce clients
                        </li>
                        <li>
                            Lead an internal project to create web pages for the company
                        </li>
                        <li>
                            Managed front-end tasks for various client websites
                        </li>
                    </ul>
                </h2>
                <h2>
                    United States Navy, Goose Creek, SC
                    <h3>
                        Nuclear Field Electronics Technician
                    </h3>
                    <ul>
                        <li>
                            Trained to operate a nuclear reactor on submarines.
                        </li>
                        <li>
                            Trained to troubleshoot any type of electrical or computer problem
                        </li>
                        <li>
                            Performed electrical troubleshooting to various circuit board components to determine faults in systems
                        </li>
                        <li>
                            Verified that all paperwork was filled out 100% correctly, logging every activity or task that group completed
                        </li>
                    </ul>
                </h2>
                <h2>
                    Rave Sports, Eagan, MN 
                    <h3>
                        General Warehouse/Repairs Specialist 
                    </h3>
                    <ul>
                        <li>
                            Ensured correct items were shipped to customers
                        </li>
                        <li>
                            Used and repaired RF(radio frequency) scanners to maximize efficiency
                        </li>
                        <li>
                            Received repairs from customers into the warehouse and used a variety of techniques to repair and problem solve issues found upon inspection
                        </li>
                    </ul>
                </h2>

                
            </div>;
}

export default Resume;
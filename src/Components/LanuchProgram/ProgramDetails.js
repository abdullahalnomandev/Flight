import React, { useEffect } from 'react';
import { useState } from 'react';
import ProgramCard from './ProgramCard';

const ProgramDetails = () => {

    const [programInfo, setProgramInfo] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches?limit=100')
            .then(res => res.json())
            .then(data => setProgramInfo(data))
    }, [])

    const programs = programInfo.slice(0,16);

    return (
        <div className="container">

            <div className="row">
                {
                    programs.map(program => <ProgramCard program={program} />)
                }
            </div>

        </div>
    );
};

export default ProgramDetails;
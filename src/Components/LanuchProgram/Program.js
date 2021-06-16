import React from 'react';
import Filters from './Filters';

import ProgramDetails from './ProgramDetails';

const Program = () => {
    return (
        <section style={{backgroundColor:"#ddd"}}>
            <div className="container">
                <h2 className="mt-5">SpeachX Leanching Program</h2>
                <div className="row">

                    <div style={{height:'300px'}} className="col-md-2 bg-white ">
                        <Filters />
                    </div>
                    <div className="col-md-10">

                        <ProgramDetails />
                        

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Program;
import React from 'react';
import { Card } from 'react-bootstrap';

const ProgramCard = ({ program }) => {


    const { mission_patch } = program.links;
    const { launch_year, launch_success, lanuch_landing, mission_name, flight_number } = program;

    console.log(launch_success);
    return (

        <div className="col-md-6 col-lg-3">
            <Card style={{height:'400px'}} className="mb-3">
                <div className="text-center bg-secondary p-2">
                    <Card.Img variant="top" style={{ width: '150px' }} src={mission_patch} />
                </div>
                <Card.Body>
                    <Card.Title>  <p className="text-primary"> <span>{mission_name}</span>#{flight_number}</p> </Card.Title>
                    <Card.Text>
                        <h6><span >Mission Ids:</span> <br /> <span className="text-secondary">mission_id</span></h6>
                        <h6><span >Launching Year:</span><span className="text-secondary"> {launch_year}</span></h6>
                        <h6><span >Successfull Leanch :</span><span className="text-secondary">{launch_success}</span></h6>
                        <h6><span >Successfull Leanding :</span><span className="text-secondary"> {lanuch_landing} </span></h6>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProgramCard;
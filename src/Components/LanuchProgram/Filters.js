import React from 'react';
import './Filters.css';

const Filters = () => {
    return (
        <div >
            <h5> Filter</h5>
            <div style={{ borderBottom: '1px solid gray', width: '130px', textAlign: 'center', marginLeft: '20px' }}>
                <p style={{ maxWidth: '100%' }} >Leanching Year</p>
            </div>


            <div className="all-span mt-3">

                <div style={{ float: 'left' }} className="left">
                    <span>2006</span><br />
                    <span>2008</span><br />
                    <span>2010</span><br />
                    <span>2011</span><br />
                    <span>2012</span><br />
                    <span>2013</span><br />
                    <span>2014</span><br />

                </div>
                <div style={{ float: 'right' }} className="right ">
                    <span>2007</span><br />
                    <span>2009</span><br />
                    <span>2011</span><br />
                    <span>2013</span><br />
                    <span>2015</span><br />
                    <span>2017</span><br />
                    <span>2019</span><br />
                </div>

            </div>
   

        </div>
    );
};

export default Filters;

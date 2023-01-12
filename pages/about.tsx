//create an about page
import { NextPage } from 'next';
import Header from '../src/components/Header';
import Seo from '../src/components/Seo';
import React from 'react';
import {
  dataabout,
  worktimeline,
  skills,
  services,
} from "../src/components/Content";
import { data } from 'autoprefixer';

const About: NextPage = () => {
    return (
        <>
            <Header />
            <Seo title='About' />
            <main>
                <section className="section section-lg">
                    <div className="container">
                        <div className="row row-grid align-items-center">
                            <div className="col-md-6 mt-10">
                                <div className="pr-md-5">
                                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                                        <i className="ni ni-settings-gear-65" />
                                    </div>  
                                    <h1 className="text-black font-bold">{dataabout.title}</h1>
                                    <p> {dataabout.aboutme}</p>
                               <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                                        <i className="ni ni-settings-gear-65" />
                                    </div>
                                    {worktimeline.map((data, i) => {
                                        return (
                                            <div key={i}>
                                                <h3>{data.jobtitle}</h3>
                                                <p>{data.where}</p>
                                                <p>{data.date}</p>
                                            </div>
                                        );
                                    }
                                    )}
                                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                                        <i className="ni ni-settings-gear-65" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row row-grid align-items-center">
                                    <div className="col-md-6">
                                        <div className="pr-md-5">
                                            <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                                                <i className="ni ni-settings-gear-65" />
                                            </div>
                                            {services.map((data, i) => {
                                                return (
                                                    <div key={i}>
                                                        <h3>{data.title}</h3>
                                                        <p>{data.description}</p>
                                                    </div>
                                                );
                                            }
                                            )}

                                            <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                                                <i className="ni ni-settings-gear-65" />
                                            </div>
                                            {skills.map((data, i) => {
                                                return (
                                                    <div key={i}>
                                                        <h3>{data.name}</h3>
                                                        <p>{data.value}</p>
                                                    </div>
                                                );
                                            }
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default About;

        
import React from 'react';
import { Helmet } from "react-helmet";

export default class Meta extends React.Component {
    render() {
        return (
            <Helmet>
                <meta property="og:image" content="http://wimmalab.github.io/landingimg.jpg" />
                <meta property="og:image:secure_url" content="https://wimmalab.github.io/landingimg.jpg" />
                <meta property="og:image:width" content="900" />
                <meta property="og:image:height" content="400" />
                <meta property="og:title" content="WIMMA Lab" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="WIMMA Lab runs as a two and a half month project, which students participate as trainees. During the project, students form virtual companies to solve challenges. Challenges are given by companies, research programs or Universities. Students develop production-ready solutions or proof-of-concepts." />
                <meta name="description" content="WIMMA Lab runs as a two and a half month project, which students participate as trainees. During the project, students form virtual companies to solve challenges."/>
                <link rel="icon" type="image/png" href="/favicon.ico" />
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>WIMMA Lab</title>
            </Helmet>
        );
    }
}
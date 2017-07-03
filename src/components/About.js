// libs
import React from 'react';
// components
import Who from './Who';
import What from './What';
import Projects from './Projects';

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: 'what'
        }
        this.switchContent = this.switchContent.bind(this);
    }

    switchContent(value) {
        console.log(value);
        this.setState({
            content: value
        });
    }

    render() {
        return (
            <section className="about">
                <div className="container">
                    <div className="switch-icons">
                        <a onClick={() => this.switchContent('what')}><div className="switch-icon"><h3>WHAT?</h3></div></a>
                        <a onClick={() => this.switchContent('who')}><div className="switch-icon"><h3>WHO?</h3></div></a>
                        <a onClick={() => this.switchContent('projects')}><div className="switch-icon"><h3>PROJECTS</h3></div></a>
                    </div>
                    {this.state.content === 'what' &&
                        <What />
                    }
                    {this.state.content === 'who' &&
                        <Who />
                    }
                    {this.state.content === 'projects' &&
                        <Projects />
                    }
                </div>
            </section>
        );
    }
}

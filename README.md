# wimmalab.github.io

This project was made using React and Sass.  

# Steps to run locally
1. install node
2. git clone https://github.com/wimmalab/wimmalab.github.io.git
3. ` npm install `
4. ` npm start `

## On content update
After pushing to development branch:
1. `npm run deploy `

# Testing

Overall performance on desktop and mobile devices is as expected.

### Desktop

All browsers perform within acceptable expetations.
* Chrome - OK 
* IE - not supported (content positioning is off, landing- and about pages) 
* Edge - partial support (positioning in about page sligthly off, about icon/button texts are not showing) 
* Mozilla - OK (about icon/button texts are off)

### Tablets

* Ipad Safari - semi OK (Contact and landing arrows positioning off in portrait view. About icon/button texts are off) 
* Ipad Chrome - semi OK ( About icon/button texts are off ) 
* Android tablet Chrome - OK.

### Mobile Android

* Native browsers - OK. (LG-G4, Honor7, Samsung Galaxy Note3) 
* Chrome - OK.

# Bugs
* About Icons, icon-text below is not showing. Reason: Texts have line-height which does not align properly in many browsers.
* Fonts do not display correctly on Linux.
* `background-attachment: fixed; ` is not working on IOS tablets. Workaround: not using `background-attachment: fixed; ` on mobile devices.

# App structure
```
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── landingimg.jpg
└── src
    ├── components
    │   ├── About.js
    │   ├── App.js
    │   ├── Companies.js
    │   ├── Contact.js
    │   ├── ForYou.js
    │   ├── Landing.js
    │   ├── Nav.js
    │   ├── Projects.js
    │   ├── What.js
    │   └── Who.js
    ├── fonts
    ├── img
    │   ├── companies
    │   ├── logo
    │   ├── profile
    │   ├── projects
    ├── index.js
    └── styles
        ├── index.css.map
        ├── index.min.css
        ├── index.min.css.map
        ├── index.scss
        └── partials
            ├── _about.scss
            ├── _companies.scss
            ├── _contact.scss
            ├── _for-you.scss
            ├── _global.scss
            ├── _landing.scss
            ├── _nav.scss
            ├── _projects.scss
            ├── _variables.scss
            ├── _what.scss
            └── _who.scss

```

# Adding content (some examples)
### WIMMA Coaches
src > components > Who.js
images into src > img > profile
```
import Example from "../img/profile/example.jpg";
.
.
<div className="team-member">
    <div className="team-header">
        <img src={Example} alt={'example'} />
    </div>
    <div className="team-text">
        <h5>Name</h5>
        <p>Title</p>
        <p>Description</p>
        <span className="team-icon">
        <a href="https://www.linkedin.com/example" target="_blank" rel="noopener noreferrer">
            <LinkedIn/>
        </a>
        </span>
    </div>
</div>
```

### Projects
src > components > Projects.js
images into src > img > projects
```
import Example from '../img/projects/example.png';
.
.
<div className="project projects-year">
    <h3>2018 - WIMMA Lab</h3>
</div>
<div className="project">
    <a href="https://wimmalab.github.io/example" target="_blank" rel="noopener noreferrer">
        <div className="icon">
            <img src={Example} alt="example"/>
        </div>
        <div className ="projects-text">
            <h5>Example project Title</h5>
            <p>Example Text</p>
            <div className="readmore"><FaArrowCircleRight /></div>
        </div>
    </a>
</div>
```

### Virtual Companies
src > components > Companies.js
images into src > img > companies
```
import ExampleCompany from '../img/companies/example-hero.png';
.
.
<div className="company-icon">
    <a href="https://wimmalab.github.io/example">
        <img className="company-img" src={ExampleCompany} alt='example'/>
        <div className="company-overlay">
            <div className="company-text">
                <h4>Company Name</h4>
                <p>What | Company | Does</p>
                <div className="readmorecompany"><FaArrowCircleRight /></div>
            </div>
        </div>
    </a>
</div>
```

# For the future
### Adviced improvments
* Clean code, more organized sass workflow. (variables, config.scss file etc...) 
* Some kind of content management (not hardcoded into components) 
* Add PropTypes (React good practice) 

### Suggested features
* Scroll Jacker between pages. 
* Video background for landing. 
* Reveal elements on scroll

### Blog
* Contents to Image cards 
* Scale hover effects to images, text shows up. 
* Unlimited scrolling

### Google Analytics
* Track Google Analytics traffic. 
* Improve filters in Google Analytics for more detailed data.

### Optimization
* Meta tag improvements.

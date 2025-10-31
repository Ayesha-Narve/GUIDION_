const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');

const app = express();

// EJS setup
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// Sample routes
app.get('/', (req, res) => {
    res.render('includes/home'); // make sure views/home.ejs exists
});

app.get('/login', (req, res) => {
    res.render('users/login'); // make sure views/login.ejs exists
});


//student signup route
app.get('/ssignup', (req, res) => {
    res.render('users/stud_signup'); // make sure views/login.ejs exists
});

//guest lecturer signup route
app.get('/lsignup', (req, res) => {
    res.render('users/lec_signup'); 
});

//institute signup route
app.get('/isignup', (req, res) => {
    res.render('users/inst_signup'); 
});

//student login route
app.get('/slogin', (req, res) => {
    res.render('users/student-login'); // make sure views/login.ejs exists
});

//guest lecturer login route
app.get('/llogin', (req, res) => {
    res.render('users/lecturer-login'); 
});

//institute login route
app.get('/ilogin', (req, res) => { 
    res.render('users/institute-login'); 
});
//about us page route
app.get('/about', (req, res) => {
    res.render('includes/about'); 

});

// sidebar
app.get('/sidebar', (req, res) => {
    res.render('includes/sidebar'); 
});
// reward
app.get('/reward', (req, res) => {
    res.render('dashboards/institute/reward'); 
});

// Analytics
app.get('/analytics', (req, res) => {
    res.render('\dashboards\institute\analytics'); 
});
// Lect_detail
app.get('/lect-detail', (req, res) => {
    res.render('dashboards/institute/lect_detail'); 
});

// instituite stud_detail
app.get('/stud_detail', (req, res) => {
    res.render('dashboards/institute/stud_detail'); 
});
// instituite stud_detail in total student
app.get('/inst_students', (req, res) => {
    res.render('dashboards/institute/student'); 
});
// instituite stud_detail in attendence section
app.get('/stud_attendance', (req, res) => {
    res.render('dashboards/institute/attendance'); 
});
// instituite stud_detail in rewards section
app.get('/stud_rewards', (req, res) => {
    res.render('dashboards/institute/stud_rewards');
});


// instituite stud_detail in topic poll section
app.get('/stud_topicpoll', (req, res) => {
    res.render('dashboards/institute/topicpoll'); 
});

// Start server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// stud_detail
app.get('/stud-detail', (req, res) => {
    res.render('dashboards/institute/stud_detail'); 
});

// schedule
app.get('/schedule', (req, res) => {
    res.render('dashboards/institute/schedule'); 
});


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background-color: #0f0c20;
  color: #e2e8f0;
  line-height: 1.6;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #1a1638;
}

.logo {
  color: #8b5cf6;
  font-weight: bold;
  font-size: 1.2rem;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 1.5rem;
}

.nav-links a {
  color: #e2e8f0;
  text-decoration: none;
}

/* Hero Section */
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 2.5rem;
  color: #fff;
}

.highlight {
  color: #8b5cf6;
}

.profile-img {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #8b5cf6;
}

/* Sections */
.section {
  padding: 3rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.section-title {
  color: #8b5cf6;
  margin-bottom: 1.5rem;
  text-align: center;
}

.project-grid, .about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.project-card, .about-card {
  background: #1a1638;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #3b3363;
}

/* Footer */
footer {
  text-align: center;
  padding: 1.5rem;
  background: #1a1638;
  margin-top: 2rem;
}
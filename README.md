# Portfolio Website

A modern, responsive portfolio website built with React showcasing skills, experience, and projects.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Navigation**: Smooth scrolling navigation with active states
- **Skills Showcase**: Visual skill bars with technology icons
- **Project Gallery**: Featured and additional projects with live links
- **Contact Form**: Functional contact form (ready for backend integration)
- **Social Links**: Integration with GitHub, LinkedIn, and other social platforms

## Tech Stack

- **Frontend**: React 18
- **Styling**: CSS3 with modern features (Grid, Flexbox, Animations)
- **Icons**: React Icons (Font Awesome, Simple Icons)
- **Fonts**: Google Fonts (Inter)
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Customization

### Personal Information

Update the following files with your personal information:

1. **`src/components/Hero.js`**:
   - Change name, title, and description
   - Update social media links
   - Add your resume PDF

2. **`src/components/About.js`**:
   - Modify the about text
   - Update interests and descriptions

3. **`src/components/Skills.js`**:
   - Add/remove skill categories
   - Update skill levels and technologies
   - Add new technology icons

4. **`src/components/Experience.js`**:
   - Replace with your work experience
   - Update job titles, companies, and descriptions
   - Modify technologies used

5. **`src/components/Projects.js`**:
   - Replace with your actual projects
   - Update project descriptions and technologies
   - Add real project images and links

6. **`src/components/Contact.js`**:
   - Update contact information
   - Modify social media links
   - Configure contact form (backend integration needed)

7. **`public/index.html`**:
   - Update page title and meta description

### Styling

- **Colors**: Modify the color scheme in `src/App.css` and `src/index.css`
- **Fonts**: Change fonts in `public/index.html` and CSS files
- **Layout**: Adjust spacing, sizing, and layout in CSS files

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.js`
3. Add corresponding CSS styles
4. Update navigation in `src/components/Header.js`

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy Options

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload `build` folder contents

## Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Experience.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements that could benefit others, consider submitting a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing this portfolio, feel free to open an issue or reach out!

---

**Happy coding!** 🚀

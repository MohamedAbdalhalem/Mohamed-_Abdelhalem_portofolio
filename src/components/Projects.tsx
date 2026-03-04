import { useState } from 'react'
import FeaturesModal from './FeaturesModal'

// Project images – replace these files in src/assets/images/ with your screenshots
import buynoImg from '../assets/buyno (2).png'
import sociohubImg from '../assets/sociohub.png'
import cmdbImg from '../assets/cmdb.png'
import freshCartImg from '../assets/fresh-cart.png'
import nottaImg from '../assets/notta-app.png'

// Placeholder when image fails to load


type Project = {
  id: string
  title: string
  image: string
  tags: string[]
  description: string
  github: string
  live: string
  features: string[]
}

const projects: Project[] = [
  {
    id: 'buyno',
    title: 'Buyno E-Commerce',
    image: buynoImg,
    tags: ['React', 'TypeScript', 'Tailwind'],
    description: 'E-Commerce Web Application that delivers a full online shopping experience.',
    github: 'https://github.com/MohamedAbdalhalem/Buyno',
    live: 'https://buyno-sigma.vercel.app/',
    features: [
      'User registration and login with full validation',
      'Protected routes management',
      'Forgot/Reset Password via email',
      'Homepage with pagination and name/price filtering',
      'Integrated Cart and Wishlist systems',
      'Browse by Categories and Brands',
      'Multi-option payment (Cash/Visa)',
      'Profile management and Order history',
    ],
  },
  {
    id: 'soicohub',
    title: 'SoicoHub',
    image: sociohubImg,
    tags: ['Next.js', 'Material UI', 'TypeScript'],
    description: 'Social app for users to post, comment, and manage profiles.',
    github: 'https://github.com/MohamedAbdalhalem/SoicoHub',
    live: 'https://soico-hub.vercel.app/',
    features: [
      'Login & Signup with form validation',
      'Home Page feed and post creation',
      'View and edit user profile data',
      'Change profile picture functionality',
      'Post management (View/Create/Edit)',
      'Social comments on all posts',
      'Server-side API integration',
    ],
  },
  {
    id: 'cmdb',
    title: 'CMDB',
    image: cmdbImg,
    tags: ['React', 'Redux', 'Firebase'],
    description: 'Web application for browsing movies and TV shows.',
    github: 'https://github.com/MohamedAbdalhalem/CMDB',
    live: 'https://cmdb-two.vercel.app/',
    features: [
      'Full movie & TV search engine',
      'Trending & Upcoming movies tracker',
      'Detailed Movie/TV info & cast lists',
      'Advanced filtering and pagination',
      'Multi-season TV episode management',
      'People bios and profession details',
      'Firebase Auth & Theme support',
    ],
  },
  {
    id: 'fresh-cart',
    title: 'Fresh_Cart',
    image: freshCartImg,
    tags: ['React', 'Tailwind', 'TanStack Query'],
    description: 'E-Commerce Web App with secure auth and multiple payment methods.',
    github: 'https://github.com/MohamedAbdalhalem/fresh-cart',
    live: 'https://fresh-cart-mu-nine.vercel.app/',
    features: [
      'Secure registration/login with validation',
      'Protected routes management',
      'Email-based password reset',
      'Homepage with advanced product filtering',
      'Integrated cart & wishlist systems',
      'Multi-option payment (Cash/Visa)',
      'Editable profile management',
      'Detailed order history tracking',
    ],
  },
  {
    id: 'notta',
    title: 'Notta',
    image: nottaImg,
    tags: ['Next.js', 'Redux', 'Material UI'],
    description: 'Notes app with full CRUD functionality and user authentication.',
    github: 'https://github.com/MohamedAbdalhalem/notta',
    live: 'https://notta-one.vercel.app/',
    features: [
      'Secure user authentication',
      'Dark/Light mode support',
      'Full CRUD operations for notes',
      'Modern UI with Material UI',
      'Redux Toolkit state management',
      'React Hook Form validation',
    ],
  },
]

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleOpenFeatures = (project: Project) => {
    setSelectedProject(project)
    setModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setSelectedProject(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <section id="projects">
      <div className="container">
        <div className="section-title">
          <i className="fa-solid fa-folder-tree" style={{ marginRight: '12px' }}></i>
          Projects
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-visual">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p
                  style={{
                    marginTop: '10px',
                    marginBottom: '20px',
                    fontSize: '0.95rem',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  {project.description}
                </p>
                <div
                  className="project-links"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '10px',
                  }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                    style={{ padding: '10px', fontSize: '0.85rem', textAlign: 'center' }}
                  >
                    <i className="fa-brands fa-github"></i> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                    style={{ padding: '10px', fontSize: '0.85rem', textAlign: 'center' }}
                  >
                    <i className="fa-solid fa-external-link-alt"></i> Live Demo
                  </a>
                  <button
                    className="btn btn-glass btn-features"
                    style={{
                      gridColumn: 'span 2',
                      padding: '10px',
                      fontSize: '0.85rem',
                    }}
                    onClick={() => handleOpenFeatures(project)}
                  >
                    <i className="fa-solid fa-list-check"></i> View Features
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <FeaturesModal
          open={modalOpen && !!selectedProject}
          title={selectedProject?.title ?? 'Project'}
          features={selectedProject?.features ?? []}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  )
}

export default Projects


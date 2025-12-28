// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const navLinks = document.querySelectorAll(".nav-link")

// Toggle mobile menu
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  updateHamburgerIcon()
})

// Close menu when link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    updateHamburgerIcon()
  })
})

// Update hamburger icon appearance
function updateHamburgerIcon() {
  const spans = hamburger.querySelectorAll("span")
  if (navMenu.classList.contains("active")) {
    spans[0].style.transform = "rotate(45deg) translate(10px, 10px)"
    spans[1].style.opacity = "0"
    spans[2].style.transform = "rotate(-45deg) translate(7px, -7px)"
  } else {
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href !== "#") {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        const navHeight = document.querySelector(".navbar").offsetHeight
        const targetPosition = target.offsetTop - navHeight
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    }
  })
})

// Add scroll effect to navbar
const navbar = document.querySelector(".navbar")
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 2px 20px rgba(0, 212, 255, 0.1)"
  } else {
    navbar.style.boxShadow = "none"
  }
})

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all project cards and other elements
document.querySelectorAll(".project-card, .skill-category, .education-card, .highlight-item").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(20px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})

// Active nav link highlighting
window.addEventListener("scroll", () => {
  let current = ""
  const sections = document.querySelectorAll("section")
  const navHeight = document.querySelector(".navbar").offsetHeight

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - navHeight - 100
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href").slice(1) === current) {
      link.style.color = "var(--primary-color)"
    } else {
      link.style.color = "var(--text-secondary)"
    }
  })
})

// Prevent multiple clicks on buttons
const buttons = document.querySelectorAll(".btn, .social-link")
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    if (this.href && this.href.startsWith("mailto:")) {
      return
    }
  })
})

// Add dynamic greeting based on time
function updateGreeting() {
  const hour = new Date().getHours()
  const greeting = document.querySelector(".hero-subtitle")

  if (greeting) {
    if (hour < 12) {
      greeting.textContent = "Good Morning! I'm a Computer Engineer & Full Stack Developer"
    } else if (hour < 18) {
      greeting.textContent = "Good Afternoon! I'm a Computer Engineer & Full Stack Developer"
    } else {
      greeting.textContent = "Good Evening! I'm a Computer Engineer & Full Stack Developer"
    }
  }
}

// Call greeting on load
updateGreeting()

// Handle window resize for mobile menu
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navMenu.classList.remove("active")
    updateHamburgerIcon()
  }
})

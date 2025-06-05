document.addEventListener('DOMContentLoaded', () => {
  const testimonials = [
    {
      name: "Cherise G",
      photoUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple."
    },
    {
      name: "Rosetta Q",
      photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels."
    },
    {
      name: "Constantine V",
      photoUrl: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best."
    }
  ];

  const container = document.querySelector('.testimonial-container');
  let currentIdx = 0;

  // Create testimonial DOM structure
  const testimonialFragment = document.createDocumentFragment();
  
  const imageEl = document.createElement('img');
  imageEl.classList.add('testimonial-image');
  imageEl.alt = '';
  
  const textEl = document.createElement('p');
  textEl.classList.add('testimonial-text');
  
  const usernameEl = document.createElement('h4');
  usernameEl.classList.add('testimonial-username');
  
  testimonialFragment.appendChild(imageEl);
  testimonialFragment.appendChild(textEl);
  testimonialFragment.appendChild(usernameEl);
  container.appendChild(testimonialFragment);

  // Update testimonial content
  const updateTestimonial = () => {
    const { name, photoUrl, text } = testimonials[currentIdx];
    
    imageEl.src = photoUrl;
    imageEl.alt = `Portrait of ${name}`;
    textEl.textContent = text;
    usernameEl.textContent = name;
    
    // Cycle through testimonials
    currentIdx = (currentIdx + 1) % testimonials.length;
  };

  // Initialize and start rotation
  updateTestimonial();
  setInterval(updateTestimonial, 3000);
});
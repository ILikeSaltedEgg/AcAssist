/**
 * Universities JavaScript
 * Handles university-specific functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Filter procedures by category on university detail pages
    const filterButtons = document.querySelectorAll('.filter-btn');
    const procedureItems = document.querySelectorAll('.guide-card');
    
    if (filterButtons.length > 0 && procedureItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter items
                procedureItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        item.style.display = 'flex';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Load university data from API (simulated)
    const universityInfoContainer = document.querySelector('.university-info');
    
    if (universityInfoContainer) {
        const universityId = universityInfoContainer.getAttribute('data-university-id');
        
        if (universityId) {
            fetchUniversityData(universityId);
        }
    }
    
    /**
     * Fetch university data (simulated for demo)
     * @param {string} universityId - The ID of the university
     */
    function fetchUniversityData(universityId) {
        // In a real implementation, this would be an API call
        // For demo purposes, we'll use sample data
        
        const universityData = {
            'arellano': {
                name: 'Arellano University',
                logo: '../assets/images/logos/arellano-logo.png',
                description: 'Arellano University is a private, Catholic university in the Philippines. Founded in 1938, it offers various academic programs across multiple campuses in Metro Manila.',
                address: '2600 Legarda St, Sampaloc, Manila, 1008 Metro Manila',
                phone: '+63 2 8735 8401',
                email: 'info@arellano.edu.ph',
                website: 'https://www.arellano.edu.ph',
                campuses: [
                    'Legarda (Main)', 'Pasig', 'Pasay', 'Malabon', 'Mandaluyong'
                ]
            },
            'pup': {
                name: 'Polytechnic University of the Philippines',
                logo: '../assets/images/logos/pup-logo.png',
                description: 'The Polytechnic University of the Philippines is a government educational institution governed by Republic Act Number 8292 known as the Higher Education Modernization Act of 1997.',
                address: 'A. Mabini Campus, Anonas Street, Sta. Mesa, Manila, Philippines',
                phone: '+63 2 5335 1PUP (5335 1787)',
                email: 'inquire@pup.edu.ph',
                website: 'https://www.pup.edu.ph',
                campuses: [
                    'Sta. Mesa (Main)', 'Taguig', 'Quezon City', 'Commonwealth', 'San Juan'
                ]
            }
        };
        
        // Update UI with university data
        if (universityData[universityId]) {
            const data = universityData[universityId];
            
            // Update university info section
            document.querySelector('.university-name').textContent = data.name;
            document.querySelector('.university-logo img').src = data.logo;
            document.querySelector('.university-description').textContent = data.description;
            
            // Update contact information
            document.querySelector('.university-address').textContent = data.address;
            document.querySelector('.university-phone').textContent = data.phone;
            document.querySelector('.university-email').textContent = data.email;
            document.querySelector('.university-website a').href = data.website;
            document.querySelector('.university-website a').textContent = data.website;
            
            // Add campuses list
            const campusesList = document.querySelector('.campuses-list');
            if (campusesList) {
                campusesList.innerHTML = '';
                data.campuses.forEach(campus => {
                    const campusItem = document.createElement('li');
                    campusItem.textContent = campus;
                    campusesList.appendChild(campusItem);
                });
            }
        }
    }
    
    // University comparison tool (on universities index page)
    const comparisonForm = document.getElementById('comparison-form');
    
    if (comparisonForm) {
        comparisonForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const university1 = document.getElementById('university1').value;
            const university2 = document.getElementById('university2').value;
            
            if (university1 && university2) {
                window.location.href = `compare.html?uni1=${university1}&uni2=${university2}`;
            }
        });
    }
});
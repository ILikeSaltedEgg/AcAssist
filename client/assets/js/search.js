/**
 * Search functionality
 * Handles search input, results display, and API interaction
 */

document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    // Sample search data (would be fetched from server in production)
    const sampleSearchData = [
        {
            id: 1,
            title: 'How to Get a True Copy of Grades',
            description: 'Step-by-step guide for requesting official transcripts',
            university: 'Arellano University',
            category: 'Academic Documents',
            icon: 'document.png',
            url: 'pages/procedures/true-copy.html'
        },
        {
            id: 2,
            title: 'Reporting an Incident on Campus',
            description: 'Proper procedures for filing incident reports',
            university: 'Polytechnic University of the Philippines',
            category: 'Campus Safety',
            icon: 'report.png',
            url: 'pages/procedures/incident-report.html'
        },
        {
            id: 3,
            title: 'Online Enrollment Process',
            description: 'Complete guide to enrolling in classes online',
            university: 'Arellano University',
            category: 'Enrollment',
            icon: 'enrollment.png',
            url: 'pages/procedures/online-enrollment.html'
        },
        {
            id: 4,
            title: 'Scholarship Application Process',
            description: 'How to apply for university scholarships and financial aid',
            university: 'De La Salle University',
            category: 'Financial Aid',
            icon: 'scholarship.png',
            url: 'pages/procedures/scholarships.html'
        },
        {
            id: 5,
            title: 'Student ID Card Replacement',
            description: 'How to request a replacement for lost or damaged ID cards',
            university: 'University of Santo Tomas',
            category: 'Student Services',
            icon: 'id-card.png',
            url: 'pages/procedures/id-replacement.html'
        }
    ];
    
    if (searchForm && searchInput && searchResults) {
        // Search form submission
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const query = searchInput.value.trim().toLowerCase();
            
            if (query.length > 1) {
                performSearch(query);
            }
        });
        
        // Live search as user types (with debounce)
        let debounceTimer;
        searchInput.addEventListener('input', function() {
            clearTimeout(debounceTimer);
            
            const query = this.value.trim().toLowerCase();
            
            if (query.length > 1) {
                debounceTimer = setTimeout(() => {
                    performSearch(query);
                }, 300);
            } else {
                searchResults.innerHTML = '';
                searchResults.classList.remove('active');
            }
        });
        
        // Hide search results when clicking outside
        document.addEventListener('click', function(e) {
            if (!searchForm.contains(e.target)) {
                searchResults.classList.remove('active');
            }
        });
    }
    
    /**
     * Perform search and display results
     * @param {string} query - The search query
     */
    function performSearch(query) {
        // In a real implementation, this would be an API call
        // For demo purposes, we'll filter the sample data
        const results = sampleSearchData.filter(item => {
            return (
                item.title.toLowerCase().includes(query) ||
                item.description.toLowerCase().includes(query) ||
                item.university.toLowerCase().includes(query) ||
                item.category.toLowerCase().includes(query)
            );
        });
        
        displaySearchResults(results);
    }
    
    /**
     * Display search results in the dropdown
     * @param {Array} results - Array of search result objects
     */
    function displaySearchResults(results) {
        searchResults.innerHTML = '';
        
        if (results.length > 0) {
            results.forEach(result => {
                const resultItem = document.createElement('a');
                resultItem.href = result.url;
                resultItem.className = 'search-result-item';
                
                resultItem.innerHTML = `
                    <div class="search-result-icon">
                        <img src="assets/images/icons/${result.icon}" alt="${result.category}">
                    </div>
                    <div class="search-result-content">
                        <div class="search-result-university">${result.university}</div>
                        <h4>${result.title}</h4>
                        <p>${result.description}</p>
                    </div>
                `;
                
                searchResults.appendChild(resultItem);
            });
        } else {
            searchResults.innerHTML = `
                <div class="no-results">
                    <p>No results found for "${searchInput.value}"</p>
                    <p>Try different keywords or browse by university</p>
                </div>
            `;
        }
        
        searchResults.classList.add('active');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const animatedWord = document.getElementById('animated-word');
    if (animatedWord) {
        const words = ["data journalist", "data storyteller", "data viz-ard!"];
        let wordIndex = 0;
        let letterIndex = 0;

        function typeWord() {
            if (letterIndex < words[wordIndex].length) {
                animatedWord.textContent = words[wordIndex].substring(0, letterIndex + 1);
                letterIndex++;
                setTimeout(typeWord, 100);
            } else {
                if (words[wordIndex] === "data viz-ard!") {
                    triggerMagicEffect(); // Trigger sparkles when "data vizard" is typed
                } else {
                    setTimeout(eraseWord, 2000);
                }
            }
        }

        function eraseWord() {
            if (letterIndex > 0) {
                animatedWord.textContent = words[wordIndex].substring(0, letterIndex - 1);
                letterIndex--;
                setTimeout(eraseWord, 50);
            } else {
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(typeWord, 500);
            }
        }

        function triggerMagicEffect() {
            for (let i = 0; i < 15; i++) { // More sparkles
                createSparkle();
            }
            setTimeout(() => {
                eraseWord();
            }, 3000); // Increased delay before erasing text
        }
        
        function createSparkle() {
            const sparkle = document.createElement("div");
            sparkle.className = "sparkle";
            const rect = animatedWord.getBoundingClientRect();
            
            sparkle.style.left = `${rect.left + Math.random() * rect.width}px`;
            sparkle.style.top = `${rect.top + Math.random() * rect.height}px`;
        
            document.body.appendChild(sparkle);
        
            setTimeout(() => {
                sparkle.remove(); // Remove after a longer duration
            }, 6500);
        }
    

        typeWord();
    }
});

function loadArticles() {
    fetch('articles.csv')  // Make sure articles.csv is in the right path!
        .then(response => response.text())
        .then(data => {
            console.log('CSV data received:', data);
            const articles = parseCSV(data);
            if (!articles || articles.length === 0) {
                console.error('Error: No articles found!');
                return;
            }
            console.log('Parsed articles:', articles);
            displayArticles(articles);
            filterSelection('all'); // Default filter
        })
        .catch(error => console.error('Error loading articles:', error));
}

function parseCSV(csv) {
    console.log('Raw CSV:', csv);
    const lines = csv.trim().split('\n');
    if (lines.length < 2) {
        console.error('Error: CSV file is empty or missing headers.');
        return [];
    }

    const articles = [];
    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {
        if (!lines[i].trim()) continue;
        
        let values = [];
        let currentValue = '';
        let inQuotes = false;
        
        for (let char of lines[i]) {
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                values.push(currentValue.trim());
                currentValue = '';
            } else {
                currentValue += char;
            }
        }
        values.push(currentValue.trim());

        const article = {};
        headers.forEach((header, index) => {
            let value = values[index] || '';
            if (header.trim() === 'Tags') {
                value = value.replace(/"/g, '').split(',').map(tag => tag.trim());
            }
            article[header.trim()] = value;
        });
        articles.push(article);
    }
    return articles;
}

function createArticleCard(article) {
    const card = document.createElement('a');
    card.href = article.Link;
    card.target = '_blank';
    card.className = 'article-card';
    card.setAttribute('data-tags', article.Tags.join(','));

    card.innerHTML = `
        <img src="${article['Image URL']}" alt="${article.Title}" class="article-image">
        <div class="article-content">
            <h3 class="article-title">${article.Title}</h3>
            <div class="article-publisher">${article.Publisher}</div>
            <div class="article-tags">
                ${article.Tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;

    return card;
}

function displayArticles(articles) {
    const container = document.getElementById('articles-grid');
    if (!container) {
        console.error('Error: #articles-grid not found!');
        return;
    }
    container.innerHTML = '';
    articles.forEach(article => {
        const card = createArticleCard(article);
        container.appendChild(card);
    });
}

function filterSelection(filter) {
    const buttons = document.getElementsByClassName('filter-btn');
    Array.from(buttons).forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === filter || (btn.textContent === 'All' && filter === 'all')) {
            btn.classList.add('active');
        }
    });

    const articles = document.getElementsByClassName('article-card');
    Array.from(articles).forEach(article => {
        const tags = article.getAttribute('data-tags').split(',');
        article.style.display = (filter === 'all' || tags.includes(filter)) ? '' : 'none';
    });

    // 🎉 Trigger confetti when "Award Winning" is clicked
    if (filter === 'award-winning') {
        launchConfetti();
    }
}

// 🎉 Confetti Effect 🎉
function launchConfetti() {
    const duration = 1000;  // 3 seconds
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 8,
            angle: 70,
            spread: 175,
            origin: { x: 1 },
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

// ✅ Include confetti.js in your HTML file
// Add this inside the `<head>` or before `</body>`
// <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.3.1/dist/confetti.browser.min.js"></script>

function loadArticles() {
    console.log('loadArticles function called');
    // Update path to be explicit
    fetch('./articles.csv')
        .then(response => {
            console.log('Fetch response:', response);
            return response.text();
        })
        .then(data => {
            console.log('Raw CSV data:', data);
            const articles = parseCSV(data);
            console.log('Parsed articles:', articles);
            if (!articles || articles.length === 0) {
                console.error('Error: No articles found!');
                return;
            }
            displayArticles(articles);
            filterSelection('all');
        })
        .catch(error => {
            console.error('Error loading articles:', error);
            console.error('Error details:', error.message);
        });
}

function displayArticles(articles) {
    console.log('displayArticles called with:', articles);
    const container = document.getElementById('articles-grid');
    console.log('Container element:', container);
    if (!container) {
        console.error('Error: #articles-grid not found!');
        return;
    }
    container.innerHTML = '';
    articles.forEach(article => {
        const card = createArticleCard(article);
        container.appendChild(card);
    });
}

// At the very end of your script.js, add:
console.log('Script loaded');
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    loadArticles();
});


    // Test script to verify the grid is working
    document.addEventListener('DOMContentLoaded', () => {
        const container = document.getElementById('articles-grid');
        if (container) {
            const testCard = document.createElement('div');
            testCard.className = 'article-card';
            testCard.innerHTML = `
                <div class="article-content">
                    <h3 class="article-title">Test Card</h3>
                    <div class="article-publisher">Test Publisher</div>
                </div>
            `;
            container.appendChild(testCard);
            console.log('Test card added');
        } else {
            console.error('Container not found in test script');
        }
    });

    
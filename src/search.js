// HTML template
const resultTemplate = (title, description) => `
  <div class="result">
    <h3>${title}</h3>
    <p>${description}</p>
  </div>
`;

// Data for search results
const searchData = [
    {
        title: "Result 1",
        description: "This is the description for Result 1."
    },
    {
        title: "Result 2",
        description: "This is the description for Result 2."
    },
    {
        title: "Result 3",
        description: "This is the description for Result 3."
    }
];

// Function to handle search and generate results
export default function handleSearch(query) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ""; // Clear previous results

    const filteredResults = searchData.filter(data => {
        return data.title.toLowerCase().includes(query.toLowerCase());
    });

    filteredResults.forEach(result => {
        const resultHTML = resultTemplate(result.title, result.description);
        resultsContainer.innerHTML += resultHTML;
    });
}

// Example usage
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input", function(event) {
    const query = event.target.value;
    handleSearch(query);
});
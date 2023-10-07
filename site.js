
function resetForm() {
    document.getElementById('username').value = '';
    document.getElementById('review').value = '';
    
}
function submitReview() {
    const username = document.getElementById('username').value;
    const reviewText = document.getElementById('review').value;

    //Stockage des données dans un tableau

    const reviewData = { username, reviewText };
    userReviews.push(reviewData);

    // Mise à jour l'affichage des avis
    displayReviews();
    resetForm();
}

function displayReviews() {
    const reviewsList = document.getElementById('user-reviews');
    reviewsList.innerHTML = '';

    // Affichage de chaque avis dans la liste
    for (let i = 0; i < userReviews.length; i++) {
        const review = userReviews[i];
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${review.username}:</strong> ${review.reviewText}`;
        reviewsList.appendChild(listItem);
    }
    
}

// Initialisation du tableau pour stocker les avis 
const userReviews = [];

// Affichage des avis 
displayReviews();

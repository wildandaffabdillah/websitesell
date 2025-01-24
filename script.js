// Add tab switching functionality
const tabs = document.querySelectorAll(".gallery-tabs button");
const images = document.querySelectorAll(".gallery-content img");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        images.forEach(img => img.style.display = "none");
        images[index].style.display = "block";
    });
});
const categoryButtons = document.querySelectorAll('.category-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

// Filter berdasarkan kategori
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Hapus "active" dari semua tombol
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.dataset.category;

        galleryItems.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

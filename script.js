const btn = document.querySelector('.container i');
const seen = document.querySelector('.seen');
const unseen = document.querySelector('.unseen');

// İlk başta sadece seen aktif olacak
seen.classList.add('active');

btn.addEventListener('click', () => {
    btn.classList.toggle('active'); 
    seen.classList.toggle('active');
    unseen.classList.toggle('active');
});
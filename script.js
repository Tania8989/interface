$(document).ready(function() {
    console.log("Загальний інтерфейс користувача завантажено");
    $('.cards-container').on('click', '.card', function() {
        $('.card').removeClass('border border-warning border-3');
        $(this).addClass('border border-warning border-3');
    });
    $('.btn-primary').on('click', function(e) {
        const link = $(this).attr('href');
        const labTitle = $(this).closest('.card-body').find('.card-title').text();
        const isReady = true;
        if (!isReady) {
            e.preventDefault(); 
            alert(`Застосунок ${labTitle} ще не готовий до запуску.`);
            $(this).closest('.card').addClass('border border-danger border-3');
        } else {
            console.log(`Перехід до ${labTitle}: ${link}`);
        }
    });
});
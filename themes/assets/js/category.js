$(document).ready(function() {

    var categoryId = getParameterByName('cat');
    var categoryName = getParameterByName('cat-name');

    $("#title").html("<h2> Categoría: " + categoryName + "</h2>");

    console.log(categoryId);

    var hostName = getBaseUrl();
    var categoriesTpl = hostName + "/themes/assets/templates/categories.hbs"
    var benefitModalTpl = hostName + "/themes/assets/templates/benefitModal.hbs"
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: 'http://benefit-lacaja.herokuapp.com/api/benefits?api_token=9db19FZ9jac1kVoFnxCiYja7fBiHWT1TCGvDXQZpHLpwkJqFpfz5qlVkNgHM&category_id=' + categoryId,

        success: function(response) {
            console.log(response);
            parseTemplate(categoriesTpl, ".content-categories", response);
            parseTemplate(benefitModalTpl, ".content-benefit-modal", null);
        },
        error: function(e) {
            console.log(e);
        }
    });

});
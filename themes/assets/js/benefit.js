$(function() {

    var hostName = "http://benefit.com.ar/benefit_client/";

    var endpoint = "http://benefit-lacaja.herokuapp.com/api/config?api_token=9db19FZ9jac1kVoFnxCiYja7fBiHWT1TCGvDXQZpHLpwkJqFpfz5qlVkNgHM"
    var footerTpl = hostName + "/themes/assets/templates/footer.hbs";
    var titleTpl = hostName + "/themes/assets/templates/title.hbs";
    var categoriesDropdownTpl = hostName + "/themes/assets/templates/categoriesDropdown.hbs";
    var buttonSuscribtionTbl = hostName + "/themes/assets/templates/buttonSuscription.hbs";
    var outstandingTbl = hostName + "/themes/assets/templates/outstanding.hbs"
    var marketingTpl = hostName + "/themes/assets/templates/marketing.hbs";
    var suscriptionModalTpl = hostName + "/themes/assets/templates/suscriptionModal.hbs";
    var introSectionTpl = hostName + "/themes/assets/templates/introSection.hbs";
    var marketingLastTpl = hostName + "/themes/assets/templates/marketingLast.hbs";
    var introSectionLastTpl = hostName + "/themes/assets/templates/introSectionLast.hbs";
    var hightLightTpl = hostName + "/themes/assets/templates/hightLight.hbs";
    var categoriesCarouselTpl = hostName + "/themes/assets/templates/categoriesCarousel.hbs";


    parseTemplate(categoriesCarouselTpl, ".content-categories-carousel", null);

    parseTemplate(marketingTpl, ".content-marketing", null);


    parseTemplate(introSectionLastTpl, ".content-into-section-last", null);
    parseTemplate(marketingLastTpl, ".content-marketing-last", null);



    parseTemplate(footerTpl, ".content-footer", null);
    parseTemplate(suscriptionModalTpl, ".content-suscription-modal", null);

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://benefit-lacaja.herokuapp.com/api/config?api_token=9db19FZ9jac1kVoFnxCiYja7fBiHWT1TCGvDXQZpHLpwkJqFpfz5qlVkNgHM",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "cache-control": "no-cache"
        },
        "processData": false
    }


    $.ajax(settings).done(function(response) {
        parseTemplate(categoriesDropdownTpl, ".content-dropdown", response);
        parseTemplate(titleTpl, ".content-title", response);
        parseTemplate(buttonSuscribtionTbl, ".content-btn-suscription", response);
        parseTemplate(outstandingTbl, ".content-outstanding", { "title": "Nuestros mejores Beneficios", "text": "	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" });
        parseTemplate(introSectionTpl, ".content-intro-section", null);
    });

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://benefit-lacaja.herokuapp.com/api/partners?api_token=9db19FZ9jac1kVoFnxCiYja7fBiHWT1TCGvDXQZpHLpwkJqFpfz5qlVkNgHM",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "cache-control": "no-cache"
        },
        "processData": false
    }

    $.ajax(settings).done(function(response) {
        parseTemplate(hightLightTpl, ".content-hight-light", response);
    });


});

var parseTemplate = function(templateUrl, contentClassName, data) {


    $.get(templateUrl, function(templateData) {

        var theTemplateScript = templateData;
        // Compile the template
        var theTemplate = Handlebars.compile(theTemplateScript);
        var theCompiledHtml = theTemplate(data);
        // Add the compiled html to the page
        $(contentClassName).html(theCompiledHtml);

    });
}
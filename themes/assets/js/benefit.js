$(function() {
    Handlebars.registerHelper('ifless', function(v1, v2, options) {
        if (v1 < v2) {
            return options.fn(this);
        }
        return options.inverse(this);
    });

    var hostName = getBaseUrl();

    var endpoint = "http://benefit-lacaja.herokuapp.com/api/config?api_token=9db19FZ9jac1kVoFnxCiYja7fBiHWT1TCGvDXQZpHLpwkJqFpfz5qlVkNgHM"
    var footerTpl = hostName + "/themes/assets/templates/footer.hbs";
    var titleTpl = hostName + "/themes/assets/templates/title.hbs";
    var categoriesDropdownTpl = hostName + "/themes/assets/templates/categoriesDropdown.hbs";
    var buttonSuscribtionTbl = hostName + "/themes/assets/templates/buttonSuscription.hbs";
    var outstandingTbl = hostName + "/themes/assets/templates/outstanding.hbs"
    var marketingTpl = hostName + "/themes/assets/templates/marketing.hbs";
    var suscriptionModalTpl = hostName + "/themes/assets/templates/suscriptionModal.hbs";
    var benefitModalTpl = hostName + "/themes/assets/templates/benefitModal.hbs";
    var introSectionTpl = hostName + "/themes/assets/templates/introSection.hbs";
    var marketingLastTpl = hostName + "/themes/assets/templates/marketingLast.hbs";
    var introSectionLastTpl = hostName + "/themes/assets/templates/introSectionLast.hbs";
    var hightLightTpl = hostName + "/themes/assets/templates/hightLight.hbs";
    var categoriesCarouselTpl = "/themes/assets/templates/categoriesCarousel.hbs";

    $.ajax({
        type: 'get',
        dataType: 'json',
        url: 'http://benefit-lacaja.herokuapp.com/api/config?api_token=9db19FZ9jac1kVoFnxCiYja7fBiHWT1TCGvDXQZpHLpwkJqFpfz5qlVkNgHM',
        success: function(response) {
            console.log(response);
            parseTemplate(categoriesDropdownTpl, ".content-dropdown", response);
            parseTemplate(titleTpl, ".content-title", response);
            parseTemplate(buttonSuscribtionTbl, ".content-btn-suscription", response);
            parseTemplate(outstandingTbl, ".content-outstanding", { "title": "Nuestros mejores Beneficios", "text": "	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" });
            parseTemplate(introSectionTpl, ".content-intro-section", null);
            parseTemplate(categoriesCarouselTpl, ".content-categories-carousel", response);
        },
        error: function(e) {
            console.log(e);
        }
    });

    $.ajax({
        type: 'get',
        dataType: 'json',
        url: 'http://benefit-lacaja.herokuapp.com/api/partners?api_token=9db19FZ9jac1kVoFnxCiYja7fBiHWT1TCGvDXQZpHLpwkJqFpfz5qlVkNgHM',
        success: function(response) {
            console.log(response);
            var data = { data: response.data.slice(0, 3) };
            console.log(data);
            parseTemplate(hightLightTpl, ".content-hight-light", data);
        },
        error: function(e) {
            console.log(e);
        }
    });


    parseTemplate(marketingTpl, ".content-marketing", null);
    parseTemplate(introSectionLastTpl, ".content-into-section-last", null);
    parseTemplate(marketingLastTpl, ".content-marketing-last", null);



    parseTemplate(footerTpl, ".content-footer", null);
    parseTemplate(suscriptionModalTpl, ".content-suscription-modal", null);
    parseTemplate(benefitModalTpl, ".content-benefit-modal", null);




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


function showModalBenefit(benefitId) {
    console.log(benefitId)
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: 'http://benefit-lacaja.herokuapp.com/api/benefits/' + benefitId + '?api_token=9db19FZ9jac1kVoFnxCiYja7fBiHWT1TCGvDXQZpHLpwkJqFpfz5qlVkNgHM',

        success: function(response) {
            console.log(response);
            $("#benefit-modal-tag").html(response.tag);
            $("#benefit-modal-partner-name").html(response.partner.name);
            $("#benefit-modal-name").html(response.name);
            $("#benefit-modal-description").html(response.description);
            $("#benefit-modal-terms").html(response.terms);
            $("#benefitModal").modal();
        },
        error: function(e) {
            console.log(e);
        }
    });

}

function getBaseUrl() {
    return "http://localhost:5000";
}

function getParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
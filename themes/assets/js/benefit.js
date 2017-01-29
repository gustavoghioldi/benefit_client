$(function() {

    var hostName = window.location.origin;

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

    var configData = '{"name":"Comunidad La Caja","logo":"community\/6c1a920ad5ed0846d68a001fff1c184a.png","benefits":[{"category":{"id":1,"name":"Gastronomia"},"benefits":[]},{"category":{"id":2,"name":"Salidas"},"benefits":[]},{"category":{"id":3,"name":"Moda"},"benefits":[]},{"category":{"id":4,"name":"Turismo"},"benefits":[]},{"category":{"id":5,"name":"Belleza"},"benefits":[]},{"category":{"id":6,"name":"Deportes"},"benefits":[]},{"category":{"id":7,"name":"Otras"},"benefits":[]}]}';
    var partnersData = '{"total":3,"per_page":20,"current_page":1,"last_page":1,"next_page_url":null,"prev_page_url":null,"from":1,"to":3,"data":[{"id":2,"operator_id":2,"name":"McDonald s","logo":"partners\/a1fd7e1e84fef437f5883e6f024082c5.png","contact_details":{"reference":"","phone":"","email":""},"created_at":"2017-01-28 07:57:40","updated_at":"2017-01-28 07:57:40","benefits":[{"id":1,"partner_id":2,"benefit_type_id":2,"benefit_category_id":14,"operator_id":2,"name":"2x1 Big Mac","tag":"2x1","description":"Comprando un Big Mac, llevate uno gratis!","valid_from":"2017-01-28","valid_until":"2017-02-28","terms":"Sed volutpat maximus metus, nec accumsan urna rutrum sed. Pellentesque facilisis nisl ut erat placerat pharetra. Sed quam ipsum, vestibulum sed interdum fringilla, tincidunt blandit velit. Aenean viverra orci aliquet, bibendum metus non, mollis lorem. Pellentesque massa felis, scelerisque id orci non, euismod rhoncus mauris. Cras ut imperdiet sapien. Suspendisse cursus pharetra metus. Fusce eget lectus scelerisque, auctor lorem nec, tristique urna. Fusce rutrum commodo sapien, eget consectetur neque auctor non. Maecenas non nunc posuere, scelerisque sapien at, eleifend enim. Morbi mattis, nulla id viverra gravida, magna ipsum hendrerit ante, nec elementum tellus nisi at sem. Sed vitae dolor dolor. Pellentesque sagittis dolor et ex rutrum tempor id sed libero. Maecenas vitae erat odio.","created_at":"2017-01-28 08:11:43","updated_at":"2017-01-28 08:11:43"}],"branches":[{"id":9,"partner_id":2,"name":"Santa Fe 3684","location":{"address":"Av. Santa Fe 3684, Buenos Aires, Autonomous City of Buenos Aires, Argentina","geo":{"lat":"-34.5853977","lng":"-58.41599609999997"}},"phone":"","email":"","created_at":"2017-01-28 08:02:43","updated_at":"2017-01-28 08:02:43"},{"id":10,"partner_id":2,"name":"Santa Fe 4280","location":{"address":"Av. Santa Fe 4280, Buenos Aires, Autonomous City of Buenos Aires, Argentina","geo":{"lat":"-34.58092599999999","lng":"-58.422304999999994"}},"phone":"","email":"","created_at":"2017-01-28 08:03:08","updated_at":"2017-01-28 08:03:08"},{"id":11,"partner_id":2,"name":"Scalabrini Ortiz 2034","location":{"address":"Av. Ra\u00fal Scalabrini Ortiz 2034, Buenos Aires, Autonomous City of Buenos Aires, Argentina","geo":{"lat":"-34.5882173","lng":"-58.42115899999999"}},"phone":"","email":"","created_at":"2017-01-28 08:03:49","updated_at":"2017-01-28 08:03:49"},{"id":12,"partner_id":2,"name":"Libertador 3883","location":{"address":"Av. del Libertador 3883, Buenos Aires, Autonomous City of Buenos Aires, Argentina","geo":{"lat":"-34.5711138","lng":"-58.422279300000014"}},"phone":"","email":"","created_at":"2017-01-28 08:04:28","updated_at":"2017-01-28 08:04:28"},{"id":13,"partner_id":2,"name":"C\u00f3rdoba 1188","location":{"address":"Av. C\u00f3rdoba 1188, Buenos Aires, Autonomous City of Buenos Aires, Argentina","geo":{"lat":"-34.5975066","lng":"-58.42079839999997"}},"phone":"","email":"","created_at":"2017-01-28 08:04:56","updated_at":"2017-01-28 08:04:56"},{"id":14,"partner_id":2,"name":"Lavalle 964","location":{"address":"Lavalle 964, Buenos Aires, Autonomous City of Buenos Aires, Argentina","geo":{"lat":"-34.60257000000001","lng":"-58.380116999999984"}},"phone":"","email":"","created_at":"2017-01-28 08:05:20","updated_at":"2017-01-28 08:05:20"},{"id":15,"partner_id":2,"name":"Cabildo 2254","location":{"address":"Av. Cabildo 2254, Buenos Aires, Autonomous City of Buenos Aires, Argentina","geo":{"lat":"-34.56067469999999","lng":"-58.45809919999999"}},"phone":"","email":"","created_at":"2017-01-28 08:05:44","updated_at":"2017-01-28 08:06:26"}]},{"id":3,"operator_id":2,"name":"Starbucks","logo":"partners\/6603d1c4afc2e81810e0e01bda8c092b.png","contact_details":{"reference":"","phone":"","email":""},"created_at":"2017-01-28 08:12:39","updated_at":"2017-01-28 08:12:39","benefits":[],"branches":[]},{"id":1,"operator_id":2,"name":"La Caja","logo":"partners\/6c1a920ad5ed0846d68a001fff1c184a.png","contact_details":{"reference":"","phone":"","email":""},"created_at":"2017-01-28 07:41:13","updated_at":"2017-01-28 07:41:13","benefits":[],"branches":[{"id":3,"partner_id":1,"name":"Coghlan","location":{"address":"Av. Congreso 3407, Buenos Aires, Autonomous City of Buenos Aires, Argentina","geo":{"lat":"-34.5606435","lng":"-58.47301340000001"}},"phone":"011 5197-6301","email":"","created_at":"2017-01-28 07:49:50","updated_at":"2017-01-28 07:49:50"},{"id":2,"partner_id":1,"name":"Boedo","location":{"address":"Av. San Juan 3795, Buenos Aires, Autonomous City of Buenos Aires, Argentina","geo":{"lat":"-34.62563490000001","lng":"-58.41878000000003"}},"phone":"011 4932-3708","email":"","created_at":"2017-01-28 07:49:04","updated_at":"2017-01-28 07:50:14"},{"id":4,"partner_id":1,"name":"Barracas","location":{"address":"Av. Montes de Oca 1147, Buenos Aires, Autonomous City of Buenos Aires, Argentina","geo":{"lat":"-34.6412914","lng":"-58.37416489999998"}},"phone":"011 4301-5001","email":"","created_at":"2017-01-28 07:50:55","updated_at":"2017-01-28 07:50:55"},{"id":5,"partner_id":1,"name":"Directorio","location":{"address":"Av. Directorio 5003, Buenos Aires, Autonomous City of Buenos Aires, Argentina","geo":{"lat":"-34.65086600000001","lng":"-58.491198"}},"phone":"011 4635-2187","email":"","created_at":"2017-01-28 07:51:32","updated_at":"2017-01-28 07:51:32"},{"id":6,"partner_id":1,"name":"Avellaneda","location":{"address":"Av. Bartolom\u00e9 Mitre 1102, Avellaneda, Argentina","geo":{"lat":"-34.66440800000001","lng":"-58.36140599999999"}},"phone":"011 4222-7770","email":"","created_at":"2017-01-28 07:52:37","updated_at":"2017-01-28 07:52:37"},{"id":7,"partner_id":1,"name":"Villa Luro","location":{"address":"Av. Rivadavia 10101, Buenos Aires, Autonomous City of Buenos Aires, Argentina","geo":{"lat":"-34.6382059","lng":"-58.50576899999999"}},"phone":"011 4682-6736","email":"","created_at":"2017-01-28 07:53:23","updated_at":"2017-01-28 07:53:23"},{"id":8,"partner_id":1,"name":"Olivos","location":{"address":"La Caja de Ahorro y Seguro - Sucursal Olivos, Olivos, Autonomous City of Buenos Aires, Argentina","geo":{"lat":"-34.5051177","lng":"-58.48053679999998"}},"phone":"011 4794-5555","email":"","created_at":"2017-01-28 07:55:12","updated_at":"2017-01-28 07:55:12"}]}]}';



    var configDataJson = JSON.parse(configData);
    var partnersDataJson = JSON.parse(partnersData);
    console.log(partnersDataJson.data);
    parseTemplate(categoriesDropdownTpl, ".content-dropdown", configDataJson);
    parseTemplate(outstandingTbl, ".content-outstanding", { "title": "Nuestros mejores Beneficios", "text": "	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy" });
    parseTemplate(buttonSuscribtionTbl, ".content-btn-suscription", null);
    parseTemplate(marketingTpl, ".content-marketing", null);
    parseTemplate(introSectionTpl, ".content-intro-section", null);

    parseTemplate(introSectionLastTpl, ".content-into-section-last", null);
    parseTemplate(marketingLastTpl, ".content-marketing-last", null);

    parseTemplate(hightLightTpl, ".content-hight-light", partnersDataJson);
    parseTemplate(titleTpl, ".content-title", JSON.parse(configData));
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
        console.log(response);
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
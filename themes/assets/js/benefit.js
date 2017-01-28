$(function () {
  var hostName = window.location.origin;
  var endpoint = "http://benefit-lacaja.herokuapp.com/api/config?api_token=9db19FZ9jac1kVoFnxCiYja7fBiHWT1TCGvDXQZpHLpwkJqFpfz5qlVkNgHM"
  var footerTpl = hostName+"/themes/assets/templates/footer.hbs";
  var titleTpl = hostName+"/themes/assets/templates/title.hbs";
  var categoriesDropdownTpl = hostName+"/themes/assets/templates/categoriesDropdown.hbs";
  var buttonSuscribtionTbl = hostName+"/themes/assets/templates/buttonSuscription.hbs";
  var outstandingTbl = hostName+"/themes/assets/templates/outstanding.hbs"
  var marketingTpl = hostName+"/themes/assets/templates/marketing.hbs";
  var suscriptionModalTpl = hostName+"/themes/assets/templates/suscriptionModal.hbs";
  var introSectionTpl= hostName+"/themes/assets/templates/introSection.hbs";

  var configData = '{"name":"Comunidad La Caja","logo":"community\/6c1a920ad5ed0846d68a001fff1c184a.png","benefits":[{"category":{"id":1,"name":"Gastronomia"},"benefits":[]},{"category":{"id":2,"name":"Salidas"},"benefits":[]},{"category":{"id":3,"name":"Moda"},"benefits":[]},{"category":{"id":4,"name":"Turismo"},"benefits":[]},{"category":{"id":5,"name":"Belleza"},"benefits":[]},{"category":{"id":6,"name":"Deportes"},"benefits":[]},{"category":{"id":7,"name":"Otras"},"benefits":[]}]}';
 
  var configDataJson = JSON.parse(configData);

  parseTemplate(footerTpl, ".content-footer", null);
  parseTemplate(titleTpl, ".content-title", JSON.parse(configData));
  parseTemplate(categoriesDropdownTpl, ".content-dropdown", configDataJson);
  parseTemplate(buttonSuscribtionTbl, ".content-btn-suscription", null);
  parseTemplate(outstandingTbl, ".content-outstanding", {"title":"Nuestros mejores Beneficios", "text":"	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"});
  parseTemplate(marketingTpl, ".content-marketing", null);
  parseTemplate(suscriptionModalTpl, ".content-suscription-modal", null);
  parseTemplate(introSectionTpl, ".content-intro-section", null);
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


$.ajax(settings).done(function (response) {
  console.log(response);
});
  

});

var parseTemplate = function (templateUrl, contentClassName, data ){
    
     
     $.get(templateUrl, function(templateData){

       var theTemplateScript = templateData;
       // Compile the template
      var theTemplate = Handlebars.compile(theTemplateScript);
      var theCompiledHtml = theTemplate(data);
      // Add the compiled html to the page
      $(contentClassName).html(theCompiledHtml);

     });
}
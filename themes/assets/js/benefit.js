$(function () {
  parseFooter();
  
});

var parseFooter = function(){

  $.get( "../themes/assets/templates/footer.hbs", function( data ) {
     var theTemplateScript = data;
     // Compile the template
     var theTemplate = Handlebars.compile(theTemplateScript);

     // Define our data object (pude ser por get)
      var context={
       "city": "London",
       "street": "Baker Street",
        "number": "221B"
      };
      $.get("../themes/assets/templates/test.json", function(data){

      // Pass our data to the template
     var theCompiledHtml = theTemplate(context);

      // Add the compiled html to the page
      $('.content-footer').html(theCompiledHtml);
      });

    });
}

this["TEMPLATES"] = this["TEMPLATES"] || {};

Handlebars.registerPartial("careers-feed-module", this["TEMPLATES"]["careers-feed-module"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=depth0 != null ? depth0 : {};

  return "        <div class=\"careers__item\">\n\n            <a class=\"careers__item-link feat-link\" href=\""
    + container.escapeExpression(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\" target=\""
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.is_external : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\n                "
    + ((stack1 = alias1((depth0 != null ? depth0.text : depth0), depth0)) != null ? stack1 : "")
    + "\n                <i class='"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.is_external : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "'></i>\n            </a>\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "_blank";
},"4":function(container,depth0,helpers,partials,data) {
    return "_self";
},"6":function(container,depth0,helpers,partials,data) {
    return "external";
},"8":function(container,depth0,helpers,partials,data) {
    return "internal";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <p>"
    + ((stack1 = container.lambda((depth0 != null ? depth0.body : depth0), depth0)) != null ? stack1 : "")
    + "</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<!--CAREERS-FEED MODULE-->\n<div class=\"careers animate\">\n\n    <h3 class=\"title\">\n        <span>"
    + container.escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "</span>\n    </h3>\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n<!--END CAREERS-FEED MODULE-->\n";
},"useData":true}));

Handlebars.registerPartial("content-tile-module", this["TEMPLATES"]["content-tile-module"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "content--position";
},"3":function(container,depth0,helpers,partials,data) {
    return "last";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<a class=\"content__link-wrapper\"  href=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.link : depth0)) != null ? stack1.url : stack1), depth0))
    + "\" target=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.link : depth0)) != null ? stack1.is_external : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "\"></a>";
},"6":function(container,depth0,helpers,partials,data) {
    return "_blank";
},"8":function(container,depth0,helpers,partials,data) {
    return "_self";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	        <div class=\"content__cover-wrapper "
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.show_title : depth0),{"name":"unless","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" style=\"background-image: url('"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.url : stack1), depth0))
    + "')\">\n	        </div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "no-title";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "				<div class=\"content__title\">\n					<h3>"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h3>\n				</div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "				<div class=\"wysiwyg\"><p>"
    + ((stack1 = ((helper = (helper = helpers.overview || (depth0 != null ? depth0.overview : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"overview","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p></div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=container.lambda, alias3=container.escapeExpression;

  return "				 <a class=\"btn feat-link\" target=\""
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.link : depth0)) != null ? stack1.is_external : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "\" href=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.link : depth0)) != null ? stack1.url : stack1), depth0))
    + "\">\n					"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.link : depth0)) != null ? stack1.text : stack1), depth0))
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.link : depth0)) != null ? stack1.is_external : stack1),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.program(20, data, 0),"data":data})) != null ? stack1 : "")
    + "		        </a>\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "		                <i class='external'></i>\n";
},"20":function(container,depth0,helpers,partials,data) {
    return "		                <i class='internal'></i>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "\n<!--CONTENT-FEED MODULE-->\n<div class=\"content "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.position : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.last : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " animate content-tile\">\n	"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.link : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n	<div class=\"content__wrapper\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.image : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		<div class=\"content__feed-wrapper\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.show_title : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.overview : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.link : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n\n	</div>\n\n</div>\n<!--END OF CONTENT-FEED MODULE-->\n";
},"useData":true}));

Handlebars.registerPartial("listing-module", this["TEMPLATES"]["listing-module"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <li class=\"listing__list-item\">\n            <span>"
    + ((stack1 = container.lambda((depth0 != null ? depth0.name : depth0), depth0)) != null ? stack1 : "")
    + "</span>\n        </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!--LIST MODULE-->\n<div class=\"listing animate\">\n    <h2 class=\"listing__title\">\n        <span>"
    + ((stack1 = container.lambda((depth0 != null ? depth0.index : depth0), depth0)) != null ? stack1 : "")
    + "</span>\n    </h2>\n\n    <ul class=\"listing__list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.names : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n</div>\n<!--END LIST MODULE-->\n";
},"useData":true}));

Handlebars.registerPartial("office-feed-module", this["TEMPLATES"]["office-feed-module"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "grid-result--cover";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <div class=\"grid-result__cover-wrapper\">\n                <picture>\n                    <!--[if IE 9]><video style=\"display: none;\"><![endif]-->\n                   <!-- <source srcset=\""
    + alias4(((helper = (helper = helpers.image_tablet || (depth0 != null ? depth0.image_tablet : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_tablet","hash":{},"data":data}) : helper)))
    + "\" media=\"(max-width: 1200px)\">\n                    <source srcset=\""
    + alias4(((helper = (helper = helpers.image_mobile || (depth0 != null ? depth0.image_mobile : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_mobile","hash":{},"data":data}) : helper)))
    + "\" media=\"(max-width: 900px)\"> !-->\n                    <!--[if IE 9]></video><![endif]-->\n                    <img class=\"grid-result__cover\" src=\""
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" srcset=\""
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" min-height=\"100px\">\n                </picture>\n            </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "title";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<p>"
    + container.escapeExpression(((helper = (helper = helpers.address_line3 || (depth0 != null ? depth0.address_line3 : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"address_line3","hash":{},"data":data}) : helper)))
    + "</p>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "<!--OFFICE-FEED MODULE-->\n<div class=\"grid-result "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.is_featured : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " animate\">\n\n    <div class=\"grid-result__wrapper\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.is_featured : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <div class=\"grid-result__content-wrapper\">\n            <h3 class=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.is_featured : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n                <span>"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span>\n            </h3>\n            <p>"
    + ((stack1 = container.lambda((depth0 != null ? depth0.address_line1 : depth0), depth0)) != null ? stack1 : "")
    + "</p>\n            <p>"
    + ((stack1 = ((helper = (helper = helpers.address_line2 || (depth0 != null ? depth0.address_line2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"address_line2","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n            "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.address_line3 : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n            <p>"
    + ((stack1 = ((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phone","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n            <p>"
    + ((stack1 = ((helper = (helper = helpers.fax || (depth0 != null ? depth0.fax : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fax","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n        </div>\n    </div>\n</div>\n<!--END OFFICE-FEED MODULE-->\n";
},"useData":true}));

Handlebars.registerPartial("story-content-module", this["TEMPLATES"]["story-content-module"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <h2 class=\"story-content__title\">\n            <span>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.title : stack1), depth0))
    + "</span>\n        </h2>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "            <a class=\"story-content__links__link feat-link\" href=\""
    + alias2(alias1((depth0 != null ? depth0.src : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.link_value : depth0), depth0))
    + "</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<!-- STORY-CONTENT MODULE -->\n<div class=\"story-content\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div class=\"story-content__body\">\n        <div class=\"articles\"></div>\n    </div>\n    <div class=\"story-content__links\">\n        <h3 class=\"story-content__links__title\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.links_section : stack1)) != null ? stack1.title : stack1), depth0))
    + "</h3>\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.links_section : stack1)) != null ? stack1.links : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>\n<!-- STORY-CONTENT MODULE END -->\n";
},"useData":true}));

Handlebars.registerPartial("story-gallery-module", this["TEMPLATES"]["story-gallery-module"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.alternatives : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : {}, alias3=helpers.helperMissing, alias4="function";

  return "				<span class=\"randomize gallery-item\" data-options="
    + alias1(container.lambda((depth0 != null ? depth0.alternatives : depth0), depth0))
    + ">\n					<img class=\""
    + alias1(((helper = (helper = helpers.mod || (depth0 != null ? depth0.mod : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"mod","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias1(((helper = (helper = helpers.alt || (depth0 != null ? depth0.alt : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"alt","hash":{},"data":data}) : helper)))
    + "\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\" min-height=\"100px\">\n				</span>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			   <img class=\""
    + alias4(((helper = (helper = helpers.mod || (depth0 != null ? depth0.mod : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mod","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.alt || (depth0 != null ? depth0.alt : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alt","hash":{},"data":data}) : helper)))
    + "\" src=\""
    + alias4(container.lambda((depth0 != null ? depth0.src_default : depth0), depth0))
    + "\" min-height=\"100px\">\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"gallery\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.gallery : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	<div class='clear-float'></div>\n</div>\n";
},"useData":true}));

this["TEMPLATES"]["application.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "Img Dotcom";
},"3":function(container,depth0,helpers,partials,data) {
    return "Home";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "<div id=\"container\">\n	<header>\n		<h1>\n			"
    + ((stack1 = (helpers["link-to"] || (depth0 && depth0["link-to"]) || alias2).call(alias1,(depth0 != null ? depth0.index : depth0),{"name":"link-to","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		</h1>\n		<nav role=\"navigation\">\n			"
    + ((stack1 = (helpers["link-to"] || (depth0 && depth0["link-to"]) || alias2).call(alias1,(depth0 != null ? depth0.index : depth0),{"name":"link-to","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		</nav>\n	</header>\n	<div id=\"main\" role=\"main\">\n		"
    + container.escapeExpression(((helper = (helper = helpers.outlet || (depth0 != null ? depth0.outlet : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"outlet","hash":{},"data":data}) : helper)))
    + "\n	</div>\n</div>\n";
},"useData":true});

this["TEMPLATES"]["master-layout.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!doctype html>\n<html>\n"
    + ((stack1 = container.invokePartial(partials["head-module"],(depth0 != null ? depth0.settings : depth0),{"name":"head-module","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <body class=\"layout\">\n        <!-- Google Tag Manager (noscript) -->\n        <noscript><iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-T6G2JTF\"\n        height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe></noscript>\n        <!-- End Google Tag Manager (noscript) -->\n\n"
    + ((stack1 = container.invokePartial(partials["header-module"],(depth0 != null ? depth0.header : depth0),{"name":"header-module","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        <div class=\"transition\">\n"
    + ((stack1 = container.invokePartial(partials.body,depth0,{"name":"body","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(partials["notification-module"],(depth0 != null ? depth0.notification : depth0),{"name":"notification-module","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(partials["footer-module"],(depth0 != null ? depth0.footer : depth0),{"name":"footer-module","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(partials["settings-module"],(depth0 != null ? depth0.settings : depth0),{"name":"settings-module","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        </div>\n    </body>\n</html>\n";
},"usePartial":true,"useData":true});

this["TEMPLATES"]["agent-finder-module.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\n<div class=\"agent-finder\">\n\n	<div class=\"agent-finder-form-container\">\n		<span class='search-text'>Search By:</span>\n		<div class=\"agent-finder-buttons\">\n		</div>\n\n		<div class=\"agent-finder-form\">\n		</div>\n	</div>\n	<div class=\"agent-results-container\">\n	</div>\n</div>\n";
},"useData":true});

this["TEMPLATES"]["agent-results-module.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"agent-results\">\n\n</div>\n";
},"useData":true});

this["TEMPLATES"]["agent-results.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	<h3 class=\"grid-result__title\">\n		<span>"
    + container.escapeExpression(((helper = (helper = helpers.heading || (depth0 != null ? depth0.heading : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"heading","hash":{},"data":data}) : helper)))
    + "</span>\n	</h3>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	<h4 class=\"grid-result__subtitle\">\n		<span>"
    + container.escapeExpression(((helper = (helper = helpers.subheading || (depth0 != null ? depth0.subheading : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"subheading","hash":{},"data":data}) : helper)))
    + "</span>\n	</h4>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.heading : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subheading : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"results-list\"></div>";
},"useData":true});

this["TEMPLATES"]["agent-sub-results.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h3 class=\"grid-result__title\">\n	<span>"
    + container.escapeExpression(((helper = (helper = helpers.heading || (depth0 != null ? depth0.heading : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"heading","hash":{},"data":data}) : helper)))
    + "</span>\n</h3>\n<div class=\"sub-results-list\"></div>";
},"useData":true});

this["TEMPLATES"]["agent.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return "            <h3> <span> "
    + alias1(((helper = (helper = helpers.heading || (depth0 != null ? depth0.heading : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"heading","hash":{},"data":data}) : helper)))
    + " - "
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.agent : depth0)) != null ? stack1.venue_size : stack1), depth0))
    + " </span> </h3>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "             <h3> <span> "
    + container.escapeExpression(((helper = (helper = helpers.heading || (depth0 != null ? depth0.heading : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"heading","hash":{},"data":data}) : helper)))
    + " </span> </h3>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"grid-result__wrapper\">\n    <div class=\"grid-result__content-wrapper\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.agent : depth0)) != null ? stack1.venue_size : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "        <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.agent : depth0)) != null ? stack1.name : stack1), depth0))
    + "</p>\n        <p><a href=\"mailto:"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.agent : depth0)) != null ? stack1.email : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.agent : depth0)) != null ? stack1.email : stack1), depth0))
    + "</a></p>\n        <p>tel. "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.agent : depth0)) != null ? stack1.phone_number : stack1), depth0))
    + "</p>\n    </div>\n</div>\n\n\n";
},"useData":true});

this["TEMPLATES"]["contact-finder-module.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\n<div class=\"contacts-finder\">\n\n	<div class=\"agent-finder-form-container\">\n		<div class=\"agent-finder-form\">\n		</div>\n	</div>\n	<div class=\"agent-results-container\">\n	</div>\n</div>\n";
},"useData":true});

this["TEMPLATES"]["dropdown.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "form__wrapper__arrow";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "      <input class=\"form__toggle__hidden\" type=\"text\" name=\""
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" value=\"\"></input>\n      <input class=\"form__toggle\" type=\"button\" value=\"\" "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.validation : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "></input>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression(container.lambda(depth0, depth0))
    + " ";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "      <button class=\"form__toggle\" type=\"button\" name=\""
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "\" value=\"\"></button>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};

  return "            <li class=\"form__inquiries-item\">\n                <input id=\""
    + alias2(alias1((depth0 != null ? depth0.key : depth0), depth0))
    + "\"\n                       class=\"form__field-radio\"\n                       "
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.displayValue : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                       "
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.email : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                       type=\"radio\"\n                       "
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.validation : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                       value=\""
    + alias2(alias1((depth0 != null ? depth0.value : depth0), depth0))
    + "\">\n                <label class=\"form__field-label\" for=\""
    + alias2(alias1((depth0 != null ? depth0.key : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.key : depth0), depth0))
    + "</label>\n            </li>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return " data-display=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.displayValue : depth0), depth0))
    + "\"";
},"11":function(container,depth0,helpers,partials,data) {
    return " data-email=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.email : depth0), depth0))
    + "\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "<div class=\"form__wrapper "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isInput : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isInput : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "    <div class=\"form__field-overlay\">\n        <span class=\"form__field-label\"\n              data-label=\""
    + container.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n        </span>\n    </div>\n    <ul class=\"form__inquiries\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.values : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n</div>\n";
},"useData":true});

this["TEMPLATES"]["error-message.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.errorMessage || (depth0 != null ? depth0.errorMessage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"errorMessage","hash":{},"data":data}) : helper)));
},"useData":true});

this["TEMPLATES"]["form-button.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"text","hash":{},"data":data}) : helper)));
},"useData":true});

this["TEMPLATES"]["preloader.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"preloader\"></div>";
},"useData":true});

this["TEMPLATES"]["article-feed-module.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "hasImages";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <a class='inpage-anchor' name='"
    + container.escapeExpression(((helper = (helper = helpers.slug || (depth0 != null ? depth0.slug : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"slug","hash":{},"data":data}) : helper)))
    + "'></a>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "    <h2 class=\"article-feed__title\">\n        <span>"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span>\n    </h2>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <div class=\"article-feed__text wysiwyg\">\n            <p>"
    + ((stack1 = ((helper = (helper = helpers.top_text || (depth0 != null ? depth0.top_text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"top_text","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n        </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.links : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "             <a class=\"btn feat-link\" target=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.is_external : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data})) != null ? stack1 : "")
    + "\" href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">\n                "
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "\n                <i class='"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.is_external : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data})) != null ? stack1 : "")
    + "'></i>\n            </a>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "_blank";
},"13":function(container,depth0,helpers,partials,data) {
    return "_self";
},"15":function(container,depth0,helpers,partials,data) {
    return "external";
},"17":function(container,depth0,helpers,partials,data) {
    return "internal";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "        <div class=\"article-feed__image-wrapper "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.single : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.is_grid : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.program(25, data, 0),"data":data})) != null ? stack1 : "")
    + "        </div>\n";
},"20":function(container,depth0,helpers,partials,data) {
    return "single";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "                <div class=\"article-feed__image gallery-item grid\">\n                    <img class=\"grid-image-full\" src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'/>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.leftImages : depth0),{"name":"each","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n                <div class=\"article-feed__image gallery-item grid\">\n                    <img class=\"grid-image-full\" src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'/>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.rightImages : depth0),{"name":"each","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n";
},"23":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                        <img class=\"grid-image\" src=\""
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"url","hash":{},"data":data}) : helper)))
    + "\" min-height=\"100px\">\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.leftImages : depth0),{"name":"each","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.rightImages : depth0),{"name":"each","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"26":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                     <div class=\"article-feed__image gallery-item\">\n                        <img src=\""
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"url","hash":{},"data":data}) : helper)))
    + "\" min-height=\"100px\">\n                    </div>\n";
},"28":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                    <div class=\"article-feed__image gallery-item\">\n                        <img src=\""
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"url","hash":{},"data":data}) : helper)))
    + "\" min-height=\"100px\">\n                    </div>\n";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <div class=\"article-feed__text\"><p>"
    + ((stack1 = ((helper = (helper = helpers.bottom_text || (depth0 != null ? depth0.bottom_text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"bottom_text","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p></div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"article-feed "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.hasImages : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.slug : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.top_text : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.links : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.hasImages : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.bottom_text : depth0),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});

this["TEMPLATES"]["base.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<section class=\"layout__content-description wysiwyg\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.intro : stack1), depth0)) != null ? stack1 : "")
    + "</section>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "			<picture>\n        	    <!--[if IE 9]><video style=\"display: none;\"><![endif]-->\n            	<source srcset=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.image_mobile : stack1), depth0))
    + "\" media=\"(max-width: 768px)\" />\n            	<!--[if IE 9]></video><![endif]-->\n            	<img class=\"main-image\" src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.image : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.img : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" min-height=\"100px\" />\n	        </picture>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["content-tile-module"],depth0,{"name":"content-tile-module","data":data,"indent":"\t    \t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.groups : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "		        <h2 class=\"title title--lg\">\n	                <span>"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "</span>\n	            </h2>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["listing-module"],depth0,{"name":"listing-module","data":data,"indent":"\t           ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return "	    	<div class=\"articles\"></div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	    	<div class=\"page__links\">\n		        <h3 class=\"page__links__title\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.links_title : stack1), depth0))
    + "</h3>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.links : stack1),{"name":"each","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		    </div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=container.lambda, alias3=container.escapeExpression;

  return "					 <a class=\"page__links__link btn feat-link\" target=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.is_external : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(18, data, 0),"data":data})) != null ? stack1 : "")
    + "\" href=\""
    + alias3(alias2((depth0 != null ? depth0.url : depth0), depth0))
    + "\">\n						"
    + alias3(alias2((depth0 != null ? depth0.text : depth0), depth0))
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.is_external : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.program(22, data, 0),"data":data})) != null ? stack1 : "")
    + "			        </a>\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "_blank";
},"18":function(container,depth0,helpers,partials,data) {
    return "_self";
},"20":function(container,depth0,helpers,partials,data) {
    return "			                <i class='external'></i>\n";
},"22":function(container,depth0,helpers,partials,data) {
    return "			                <i class='internal'></i>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<!-- HERO -->\n<div class=\"layout__hero\">\n</div>\n<!-- END HERO -->\n\n<!-- CONTENT -->\n<div class=\"layout__content\">\n	<div class=\"layout__content-wrapper expertise\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.intro : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.image : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.tiles : stack1),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	    <div class=\"clear\"></div>\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.rosters : stack1),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	    <div class=\"clear\"></div>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.articles : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.links : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n</div>\n<!--END CONTENT-->\n";
},"usePartial":true,"useData":true});

this["TEMPLATES"]["contact-popup.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<!--CONTACT POP UP MODULE-->\n<div class=\"consent\">\n\n    <div class=\"notification__wrapper\">\n        <p class=\"notification__text\">"
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"text","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n        <div class=\"notification__sub\">\n	        <input type=\"checkbox\" class=\"notification__info\">\n        </div>\n    </div>\n\n</div>\n<!--END NOTIFICATION MODULE-->\n";
},"useData":true});

this["TEMPLATES"]["dropdown-module.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                <li class=\"form__inquiries-item\">\n                    <input id=\""
    + alias2(alias1((depth0 != null ? depth0.key : depth0), depth0))
    + "\"\n                           class=\"form__field-radio\"\n                           type=\"radio\"\n                           "
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.validation : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                           value=\""
    + alias2(alias1((depth0 != null ? depth0.value : depth0), depth0))
    + "\">\n                    <label class=\"form__field-label\" for=\""
    + alias2(alias1((depth0 != null ? depth0.key : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.key : depth0), depth0))
    + "</label>\n                </li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression(container.lambda(depth0, depth0))
    + " ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "\n<!--DROPDOWN MODULE-->\n<script type=\"text/template\" id=\"about-template\">\n  <div class=\"dropdown\">\n    <div class=\"form__wrapper\">\n        <button class=\"form__toggle\" type=\"button\"></button>\n        <div class=\"form__field-overlay\">\n            <span class=\"form__field-label\"\n                  data-label=\""
    + ((stack1 = ((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n            </span>\n        </div>\n        <ul class=\"form__inquiries\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.values : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n    </div>\n  </div>\n</script>\n<!--END DROPDOWN MODULE-->\n";
},"useData":true});

this["TEMPLATES"]["footer-module.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "                <li class=\"footer__list-item\">\n                    <a target=\"_self\" href=\""
    + container.escapeExpression(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\">"
    + ((stack1 = alias1((depth0 != null ? depth0.label : depth0), depth0)) != null ? stack1 : "")
    + "</a>\n                </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<!--FOOTER MODULE-->\n<footer class=\"footer\">\n    <div class=\"footer__content\">\n        <span class=\"footer__copy\">\n            &copy; "
    + container.escapeExpression(((helper = (helper = helpers.currentYear || (depth0 != null ? depth0.currentYear : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"currentYear","hash":{},"data":data}) : helper)))
    + " WME | IMG, LLC. ALL RIGHTS RESERVED. IMG IS A WME | IMG COMPANY.\n        </span>\n\n        <ul class=\"footer__list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.navigation_links : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n    </div>\n</footer>\n<!--END FOOTER MODULE-->\n";
},"useData":true});

this["TEMPLATES"]["form-module.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.fields : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};

  return "                <div class=\"form__field\">\n                    <input id=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\"\n                           class=\"form__field-input\"\n                           type=\""
    + alias2(alias1((depth0 != null ? depth0.type : depth0), depth0))
    + "\"\n                           name=\""
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\"\n                           "
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.maxChars : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                           autocomplete=\"off\"\n                           "
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.validation : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                           required>\n\n                    <label for=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" class=\"form__field-overlay\">\n                        <span class=\"form__field-label\"\n                              data-label=\""
    + ((stack1 = alias1((depth0 != null ? depth0.label : depth0), depth0)) != null ? stack1 : "")
    + "\">"
    + ((stack1 = alias1((depth0 != null ? depth0.label : depth0), depth0)) != null ? stack1 : "")
    + "\n                        </span>\n                    </label>\n                </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "data-chars=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.maxChars : depth0), depth0))
    + "\" ";
},"5":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression(container.lambda(depth0, depth0))
    + " ";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};

  return "            <div class=\"form__wrapper form__wrapper--char-remaining\">\n                <textarea id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.textarea : depth0)) != null ? stack1.id : stack1), depth0))
    + "\"\n                          class=\"form__textarea\"\n                          name=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.textarea : depth0)) != null ? stack1.name : stack1), depth0))
    + "\"\n                          "
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.textarea : depth0)) != null ? stack1.maxChars : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                          "
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.textarea : depth0)) != null ? stack1.validation : stack1),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                          required></textarea>\n                <label for=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.textarea : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" class=\"form__field-overlay\">\n                    <span class=\"form__field-label\"\n                          data-label=\""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.textarea : depth0)) != null ? stack1.label : stack1), depth0)) != null ? stack1 : "")
    + "\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.textarea : depth0)) != null ? stack1.label : stack1), depth0)) != null ? stack1 : "")
    + "\n                    </span>\n                </label>\n            </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "data-chars=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.textarea : depth0)) != null ? stack1.maxChars : stack1), depth0))
    + "\" ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<!--CONTACT US MODULE-->\n<article class=\"form form--card\">\n    <div class=\"form__card-wrapper\">\n        <form id=\"contactUsForm\" name=\"contactUsForm\" action=\"\" method=\"post\" enctype=\"text/plain\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.fields : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n            <div class=\"form__checkbox\">\n              <div class=\"box\">\n                  <input type=\"checkbox\" id=\"box\" name=\"is_press\" />\n                  <label for=\"box\"></label>\n              </div>\n              <span>Are you a member of the press?</span>\n            </div>\n            <div class=\"dynamic-fields\">\n              <div class=\"agent-finder-form-container\">\n                <div class=\"agent-finder-form\">\n                </div>\n              </div>\n            </div>\n            <input id=\"send_email\" name=\"send_email\" value=\"\"></input>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.textarea : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n            <div class=\"form__error-type form__error-type--email\">"
    + alias4(((helper = (helper = helpers.error_email || (depth0 != null ? depth0.error_email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"error_email","hash":{},"data":data}) : helper)))
    + "</div>\n            <div class=\"form__error-type form__error-type--empty\">"
    + alias4(((helper = (helper = helpers.error_empty || (depth0 != null ? depth0.error_empty : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"error_empty","hash":{},"data":data}) : helper)))
    + "</div>\n            <button class=\"form__submit feat-link\">Submit</button>\n        </form>\n\n\n\n        <div id=\"confirmMessage\" class=\"form__confirm\">\n            <i class=\"form__confirm-icon icon-check\"></i>\n            <h2 class=\"form__confirm-title\">\n                <span>"
    + ((stack1 = alias5(((stack1 = (depth0 != null ? depth0.confirmation : depth0)) != null ? stack1.title : stack1), depth0)) != null ? stack1 : "")
    + "</span>\n            </h2>\n            <p class=\"form__confirm-text\">\n                "
    + ((stack1 = alias5(((stack1 = (depth0 != null ? depth0.confirmation : depth0)) != null ? stack1.text : stack1), depth0)) != null ? stack1 : "")
    + "\n            </p>\n        </div>\n    </div>\n</article>\n<!--END CONTACT US MODULE-->\n";
},"useData":true});

this["TEMPLATES"]["head-module.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!--HEAD MODULE-->\n<head>\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"user-scalable=no, width=device-width, initial-scale=1.0\" />\n    <meta name=\"apple-mobile-web-app-capable\" content=\"yes\" />\n    <title>IMG</title>\n    <meta name=\"description\" content=\"Global leader in entertainment, sports and fashion\">\n    <meta name=\"fragment\" content=\"!\" />\n    <meta name=\"format-detection\" content=\"telephone=no\">\n    <meta content=\"yes\" name=\"apple-mobile-web-app-capable\">\n    <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black-translucent\">\n\n    <link rel=\"shortcut icon\" type=\"image/x-icon\" href=\""
    + alias4(((helper = (helper = helpers.static_url || (depth0 != null ? depth0.static_url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"static_url","hash":{},"data":data}) : helper)))
    + "/img/favicons/favicon.ico\">\n\n    <link rel=\"stylesheet\" href=\""
    + alias4(((helper = (helper = helpers.static_url || (depth0 != null ? depth0.static_url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"static_url","hash":{},"data":data}) : helper)))
    + "/css/style.css\">\n    <!-- Google Tag Manager -->\n    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push(\n    {'gtm.start': new Date().getTime(),event:'gtm.js'}\n    );var f=d.getElementsByTagName(s)[0],\n    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n    })(window,document,'script','dataLayer','GTM-T6G2JTF');</script>\n    <!-- End Google Tag Manager -->\n\n<head>\n\n<!--END HEAD MODULE-->\n";
},"useData":true});

this["TEMPLATES"]["header-module.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.escapeExpression, alias2=container.lambda;

  return "                <li class=\"header__list-item\" data-url=\""
    + alias1((helpers.trimPath || (depth0 && depth0.trimPath) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.url : depth0),{"name":"trimPath","hash":{},"data":data}))
    + "\">\n                    <a target=\"_self\" href=\""
    + alias1(alias2((depth0 != null ? depth0.url : depth0), depth0))
    + "\">"
    + alias1(alias2((depth0 != null ? depth0.label : depth0), depth0))
    + "</a>\n                </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!--HEADER MODULE-->\n\n<header class=\"header\">\n    <div class=\"header__logo\">\n        <a href=\"/\">\n            <img src=\"/static/img/img-logo.png\" />\n        </a>\n        <div class=\"header__menu\">\n            <div>\n                <span></span>\n                <span></span>\n                <span></span>\n            </div>\n        </div>\n    </div>\n\n    <nav class=\"header__nav\">\n        <ul class=\"header__list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.navigation_links : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n    </nav>\n</header>\n<!--END HEADER MODULE-->\n";
},"useData":true});

this["TEMPLATES"]["hero-module.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<style type=\"text/css\">\n    @media screen and (max-width: 480px) {\n        .hero {\n            background-image: url("
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.image_mobile : depth0)) != null ? stack1.url : stack1), depth0))
    + ") !important;\n        }\n    }\n</style>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <a href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" class=\"hero__breadcrumb\">"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                        <a class=\"hero__link feat-link\" href=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\">\n                            "
    + alias2(alias1((depth0 != null ? depth0.text : depth0), depth0))
    + "\n                            <i class='"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.is_external : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "'></i>\n                        </a>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "external";
},"8":function(container,depth0,helpers,partials,data) {
    return "internal";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=container.escapeExpression, alias3=helpers.helperMissing, alias4="function";

  return ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.image_mobile : depth0)) != null ? stack1.url : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<!--HERO MODULE-->\n<div class=\"hero\">\n    <div class=\"hero__image\" style=\"background-image:url("
    + alias2(container.lambda(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.url : stack1), depth0))
    + ")\"></div>\n    <div class=\"hero__sub\">\n        <div class=\"hero__content\">\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.breadcrumbs : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n            <div class=\"hero__content-wrapper\">\n                <h1 class=\"hero__title\">\n                    <div class=\"hero__title__line--left\"></div>\n                    <div class=\"hero__title__line--right\"></div>\n                    "
    + alias2(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\n                </h1>\n            </div>\n\n            <div class=\"hero__overview wysiwyg\"><p>"
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias1,{"name":"content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p></div>\n\n            <div class=\"hero__link-wrapper\">\n                <div>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.links : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n            </div>\n        </div>\n</div>\n<div class=\"hero__arrow\">\n    <div class=\"hero__arrow__body\"></div>\n    <div class=\"hero__arrow__head\"></div>\n</div>\n</div>\n\n<!--HERO MODULE END-->\n";
},"useData":true});

this["TEMPLATES"]["legal-module.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!--LEGAL MODULE-->\n<div class=\"legal animate\">\n\n    <h1 class=\"title\">\n        <span>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span>\n    </h1>\n\n    <div class=\"legal__content\">"
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n\n    <h3 class=\"legal__subtitle\">"
    + alias4(((helper = (helper = helpers.subtitle || (depth0 != null ? depth0.subtitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subtitle","hash":{},"data":data}) : helper)))
    + "</h3>\n\n    <div class=\"legal__content\">"
    + ((stack1 = ((helper = (helper = helpers.sub || (depth0 != null ? depth0.sub : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sub","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n</div>\n<!--END LEGAL MODULE-->";
},"useData":true});

this["TEMPLATES"]["news-article.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "		<picture>\n			<!--[if IE 9]><video style=\"display: none;\"><![endif]-->\n		   <source srcset=\""
    + alias2(alias1((depth0 != null ? depth0.image_mobile : depth0), depth0))
    + "\" media=\"(max-width: 480px)\">\n			<!--[if IE 9]></video><![endif]-->\n			<img class=\"content__cover\" src=\""
    + alias2(alias1((depth0 != null ? depth0.image : depth0), depth0))
    + "\" srcset=\""
    + alias2(alias1((depth0 != null ? depth0.image : depth0), depth0))
    + "\" alt=\"Article Image\">\n		</picture>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return " by "
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.author : depth0), depth0));
},"5":function(container,depth0,helpers,partials,data) {
    return "		<a class=\"btn feat-link\" href=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.link : depth0), depth0))
    + "\"> View Source <i class=\"external\"></i> </a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=container.lambda, alias3=container.escapeExpression;

  return "<article class=\"article\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.image : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	<div class=\"article-header\">\n		<div>\n			<a href=\"/news\" class=\"hero__breadcrumb\">News</a>\n			<h1>"
    + alias3(alias2((depth0 != null ? depth0.title : depth0), depth0))
    + "</h1>\n\n			<span class=\"by-line\">"
    + alias3(alias2((depth0 != null ? depth0.date : depth0), depth0))
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.author : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>\n		</div>\n	</div>\n	<div class=\"article-content\">\n		"
    + ((stack1 = alias2((depth0 != null ? depth0.body : depth0), depth0)) != null ? stack1 : "")
    + "\n	</div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.link : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</article>\n";
},"useData":true});

this["TEMPLATES"]["news-item.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "		<li class=\"news__list-item\">\n			<span class=\"news__date\">"
    + ((stack1 = alias1((depth0 != null ? depth0.simpleDate : depth0), depth0)) != null ? stack1 : "")
    + "</span>\n			<a href=\""
    + container.escapeExpression(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\">"
    + ((stack1 = alias1((depth0 != null ? depth0.title : depth0), depth0)) != null ? stack1 : "")
    + "</a>\n		</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h2 class=\"news__title\">\n	<span>"
    + ((stack1 = container.lambda((depth0 != null ? depth0.date : depth0), depth0)) != null ? stack1 : "")
    + "</span>\n</h2>\n\n<ul class=\"news__list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.posts : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});

this["TEMPLATES"]["news-module.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "            <li class=\"news__list-item\">\n                <span class=\"news__date\">"
    + ((stack1 = alias1((depth0 != null ? depth0["short-date"] : depth0), depth0)) != null ? stack1 : "")
    + "</span>\n                <a href=\""
    + container.escapeExpression(alias1((depth0 != null ? depth0.src : depth0), depth0))
    + "\">"
    + ((stack1 = alias1((depth0 != null ? depth0["short-desc"] : depth0), depth0)) != null ? stack1 : "")
    + "</a>\n            </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!--NEWS MODULE-->\n<div class=\"news animate\">\n    <h2 class=\"news__title\">\n        <span>"
    + ((stack1 = container.lambda((depth0 != null ? depth0["news-year"] : depth0), depth0)) != null ? stack1 : "")
    + "</span>\n    </h2>\n\n    <ul class=\"news__list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0["news-list"] : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n</div>\n<!--NEWS MODULE END-->";
},"useData":true});

this["TEMPLATES"]["notification-module.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<!--NOTIFICATION MODULE-->\n<div class=\"notification\">\n\n    <div class=\"notification__wrapper\">\n        <p class=\"notification__text\">"
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"text","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n        <div class=\"notification__sub\">\n            <button class=\"notification__info\" type=\"button\">Dismiss</button>\n        </div>\n    </div>\n\n</div>\n<!--END NOTIFICATION MODULE-->\n";
},"useData":true});

this["TEMPLATES"]["settings-module.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!--SETTINGS MODULE-->\n<script src=\""
    + alias4(((helper = (helper = helpers.static_url || (depth0 != null ? depth0.static_url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"static_url","hash":{},"data":data}) : helper)))
    + "/js/libs.develop.js\"></script>\n<script src=\""
    + alias4(((helper = (helper = helpers.static_url || (depth0 != null ? depth0.static_url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"static_url","hash":{},"data":data}) : helper)))
    + "/js/templates.develop.js\"></script>\n<script src=\""
    + alias4(((helper = (helper = helpers.static_url || (depth0 != null ? depth0.static_url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"static_url","hash":{},"data":data}) : helper)))
    + "/js/main.develop.js\"></script>\n<!--END SETTINGS MODULE-->\n";
},"useData":true});

this["TEMPLATES"]["story-child.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		        <h2 class=\"story-content__title\">\n		            <span>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.title : stack1), depth0))
    + "</span>\n		        </h2>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "		            <a class=\"story-content__links__link feat-link\" href=\""
    + alias2(alias1((depth0 != null ? depth0.src : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.link_value : depth0), depth0))
    + "</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<!-- HERO -->\n<div class=\"layout__hero\">\n</div>\n<!-- END HERO -->\n\n<!-- CONTENT -->\n<div class=\"layout__content\">\n	<div class=\"layout__content-wrapper\">\n        <div class=\"story-content\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.title : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		    <div class=\"story-content__body\">\n		        <div class=\"articles\"></div>\n		    </div>\n		    <div class=\"story-content__links\">\n		        <h3 class=\"story-content__links__title\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.links_section : stack1)) != null ? stack1.title : stack1), depth0))
    + "</h3>\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.links_section : stack1)) != null ? stack1.links : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		    </div>\n		</div>\n    </div>\n</div>\n<!--END CONTENT-->\n";
},"useData":true});

this["TEMPLATES"]["story-main-content-module.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <h2 class=\"story-content__title\">\n            <span>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)))
    + "</span>\n        </h2>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "            <p class=\"story-content__paragraph\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.content : depth0), depth0))
    + "</p>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                <a class=\"story-content__links__link feat-link\" href=\""
    + alias2(alias1((depth0 != null ? depth0.src : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.link_value : depth0), depth0))
    + "</a>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "            <a class=\"story-content__links__link feat-link\" href=\""
    + alias2(alias1((depth0 != null ? depth0.src : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.link_value : depth0), depth0))
    + "</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=container.lambda, alias3=container.escapeExpression;

  return "<!-- STORY-CONTENT MODULE -->\n<div class=\"story-content\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    <div class=\"story-content__body\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0["main-paragraphs"] : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        <div class=\"link-wrapper\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0["top-links-section"] : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.paragraphs : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n    <div class=\"story-content__links\">\n        <h3 class=\"story-content__links__title\">"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0["links-section"] : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h3>\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0["links-section"] : depth0)) != null ? stack1.links : stack1),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n</div>\n<picture>\n    <!--[if IE 9]><video style=\"display: none;\"><![endif]-->\n    <source srcset=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.img : depth0)) != null ? stack1.src_mobile : stack1), depth0))
    + "\" media=\"(max-width: 768px)\" />\n    <!--[if IE 9]></video><![endif]-->\n    <img class=\"timeline-image\" src=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.img : depth0)) != null ? stack1.src_default : stack1), depth0))
    + "\" alt=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.img : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" min-height=\"100px\" />\n</picture>\n<!-- STORY-CONTENT MODULE END -->\n";
},"useData":true});

this["TEMPLATES"]["web-module.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"web__layout web\">\n    <div class=\"node-web\"></div>\n    <div class=\"intro-overlay\"></div>\n    <div class=\"lockup\"> <!--TODO: make lockup into separate module!-->\n        <div class=\"wme-img-logo\">\n            <div class=\"icon-container\">\n                <i class=\"header__logo-icon icon-logo img\"></i>\n            </div>\n        </div>\n    <div class=\"text-container\">\n        <div class=\"btn feat-link\" data-url=\"/story\">Read our story</div>\n    </div>\n    </div>\n\n</div>\n<div class=\"overlay\"></div>\n";
},"useData":true});

this["TEMPLATES"]["article.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\n<!-- CONTENT -->\n<div class=\"article-page layout__content\">\n    <div class=\"layout__content-wrapper\">\n        <div class='news-article'>\n        </div>\n    </div>\n</div>\n<!--END CONTENT-->\n\n";
},"useData":true});

this["TEMPLATES"]["bookings.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"bookings-page\">\n	<!-- HERO -->\n	<div class=\"layout__hero\">\n	</div>\n	<!-- END HERO -->\n	<!-- CONTENT -->\n	<div class=\"layout__content\">\n		<div class=\"layout__content-wrapper\">\n			<p class=\"layout__content-description\"></p>\n"
    + ((stack1 = container.invokePartial(partials["agent-finder-module"],(depth0 != null ? depth0["bookings-page"] : depth0),{"name":"agent-finder-module","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "	    </div>\n	</div>\n	<!--END CONTENT-->\n	</div>\n</div>\n\n";
},"usePartial":true,"useData":true});

this["TEMPLATES"]["careers.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"careers-page\">\n    <!-- HERO -->\n    <div class=\"layout__hero\">\n    </div>\n    <!-- END HERO -->\n\n    <!-- CONTENT -->\n    <div class=\"layout__content\">\n        <div class=\"layout__content-wrapper\">\n            <div class=\"careeer-intro wysiwyg\"><p>"
    + ((stack1 = ((helper = (helper = helpers.page_intro || (depth0 != null ? depth0.page_intro : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"page_intro","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p></div>\n"
    + ((stack1 = container.invokePartial(partials["careers-feed-module"],(depth0 != null ? depth0.regional_links : depth0),{"name":"careers-feed-module","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["careers-feed-module"],(depth0 != null ? depth0.specialty_links : depth0),{"name":"careers-feed-module","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "            <p class=\"career-links\">For more information, please read the <a href=\"/careers/tos\">Terms of Use</a>, <a href=\"/careers/privacypolicy\">Privacy</a> and <a href=\"/careers/eea\">EEA</a> policies in regards to recruitment.</p>\n        </div>\n    </div>\n    <!--END CONTENT-->\n</div>\n";
},"usePartial":true,"useData":true});

this["TEMPLATES"]["eea.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!-- CONTENT -->\n<div class=\"layout__content layout__content--legal\">\n    <div class=\"layout__content-wrapper\">\n"
    + ((stack1 = container.invokePartial(partials["legal-module"],(depth0 != null ? depth0.eea : depth0),{"name":"legal-module","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "     	<p><b>MORE INFORMATION FOR APPLICANTS FROM THE EEA</b></p>\n		We have set out below some further information on why and how your personal information is processed by us and with whom it may be shared and details of how long we keep this.\n		WME IMG LLC is committed to promoting equal opportunities in employment. You and any job applicants will receive equal treatment regardless of age, disability, gender reassignment, marital or civil partner status, pregnancy or maternity, race, colour, nationality, ethnic or national origin, religion or belief, sex or sexual orientation.\n		<b>HOW YOUR INFORMATION MAY BE USED</b>\n		We may process your personal information and any personal information of others which you may provide during the application process (such as referees) for the following purposes:\n		<ul>\n			<li>the recruitment process;</li>\n			<li>administering any subsequent employment relationship;</li>\n			<li>management of our IT systems and infrastructure;</li>\n			<li>providing IT support to you;</li>\n			<li>responding to any queries or requests from you;</li>\n			<li>compliance and regulatory purposes;</li>\n			<li>improving the services;</li>\n			<li>optimising the user experience; and</li>\n			<li>marketing (where you have indicated your consent to receive such communications).\u2028</li>\n		</ul>\n		<b>TYPES OF PERSONAL INFORMATION WE PROCESS</b>\n		In connection with the purposes outlined above, we may process the following types of personal information about you:\n		<ul>\n			<li>names;</li>\n			<li>address;</li>\n			<li>home telephone number;</li>\n			<li>mobile telephone number;</li>\n			<li>email address;</li>\n			<li>passport details;</li>\n			<li>date of birth;</li>\n			<li>nationality and immigration status;</li>\n			<li>marital status;</li>\n			<li>education, skills, experience and qualifications;</li>\n			<li>CV and application letters;</li>\n			<li>employment history and details;</li>\n			<li>references;</li>\n			<li>interview notes; and</li>\n			<li>background screening data if relevant (this may include details of criminal record where permitted by local law).\u2028</li>\n		</ul>\n		We may collect the following information, but only if you disclose it in a resume, curriculum vitae or other application document which you have prepared: race or ethnic origin, political opinions, religious beliefs, trade union memberships, health, sexual life and/or criminal records. If you do voluntarily provide this information we may process it to the extent permitted by applicable law. As set out above, we may also process details of criminal records if we conduct background screening on you as part of the application process. You will be informed before any background screening takes place.\u2028\u2028\n		<b>DISCLOSURE OF YOUR INFORMATION</b>\n		In connection with the purposes outlined above, we may disclose your information to:\n		<ul>\n			<li>our recruitment platform service provider;</li>\n			<li>our background screening service provider;</li>\n			<li>our HR systems provider;</li>\n			<li>recruitment agents;</li>\n			<li>other WME IMG LLC group entities (details of the relevant WME IMG LLC group entities that may process your personal data is available upon request);</li>\n			<li>Government authorities/law enforcement officials as required; and</li>\n			<li>our IT service providers.\u2028</li>\n		</ul>\n		<b>TRANSFERS OUTSIDE OF THE EUROPEAN ECONOMIC AREA</b>\n		Your data may be transferred outside the European Economic Area (\"EEA\"), in connection with the purposes above, as follows:\n		<ul>\n			<li>transferred to the US, Australia and/or such other country outside the EEA if this is where the line manager or relevant HR personnel for the particular job opportunity is located or is needed to progress your application;</li>\n			<li>hosted and available through remote access in the US and Australia in the course of IT hosting and support; and</li>\n			<li>transferred to the US, Australia and/or such other country outside the EEA if this is where the HR recruiter is located.</li>\n		</ul>\n\u2028Please note that the transfers of your information outside of the EEA outlined above are based on your consent or the standard contractual clauses approved by the European Commission for the transfer of personal data from the EEA to countries outside of the EEA which do not ensure an adequate level of protection for personal data.\n		<b id=\"retention\">RETENTION OF YOUR INFORMATION</b>\n		For all unsuccessful candidates the name, contact details, job application details and reason  for rejection will be kept for up to 2 years for our business administration purposes or for a longer period permitted by applicable law if we have a legitimate reasons for doing so. More detailed information relating to the applicants may be retained for longer periods (up to 5 years) with the applicant's permission, if the applicant wishes to be contacted about future job opportunities.\n		<br><br>\n		Details about successful applicants will be transferred to their employment files. The relevant retention periods will be notified to the employee at the point of their employment.\n		<br><br>\n		You personal information may also be retained for longer periods due to any compliance or regulatory obligations which we may have.\n		<b>SECURITY</b>\n		We have implemented commercially reasonable technical and organisational procedures measures designed to secure your personal information from accidental loss and unauthorised access, use, alteration or disclosure. However, the internet is an open system and we cannot and do not guarantee or warrant the security of any information that you transmit on or through our Website or that we otherwise maintain.\n		<b>CONTACT</b>\n		If you have any questions or if you would like more information, please contact <a href=\"mailto:workdaysupport@wmeimg.com\" target=\"_top\">workdaysupport@wmeimg.com.</a>\n	</div>\n</div>\n<!--END CONTENT-->\n";
},"usePartial":true,"useData":true});

this["TEMPLATES"]["privacypolicy.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!-- CONTENT -->\n<div class=\"layout__content layout__content--legal\">\n    <div class=\"layout__content-wrapper\">\n"
    + ((stack1 = container.invokePartial(partials["legal-module"],(depth0 != null ? depth0["privacy-policy"] : depth0),{"name":"legal-module","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "     	<b>PRIVACY STATEMENT</b>\n		<b>Effective Date: April 26 2016</b>\n		Your privacy is important to us.  This Privacy Statement describes the types of information WME IMG, LLC (\"WME IMG\", \"us\" or \"we\") collects from and about you when you use this recruitment portal (\" the Site\") and explains how we will use and disclose such information, as well as your ability to control certain uses of it. Please ensure you read these documents before using the Site.\n		By submitting your personal information to us, or by using the Site, you agree to the processing of your personal information as set out in our Privacy Statement and our Terms and Conditions.\n		<h2>INFORMATION COLLECTION</h2>\n		We collect and process information about you when you use our Site to: contact you , assess your suitability for various roles and to administer your subsequent employment if your application is successful; ensure compliance with applicable laws and regulations; and to enable us to provide you with our services and conduct our business.\n		<br><br>\n		The majority of information processed by us is obtained directly from you or your use of our Site but some information may be obtained from recruiters or other persons acting on your behalf, third parties and publicly accessible sources, for example, tax codes from applicable tax authorities.\n		<br><br>\n		The types of information that we process about you include your contact details and your CV and application letters. You should only provide us with any sensitive personal information for example information regarding your racial or ethnic origin, your political opinions, religious beliefs, trade union  memberships, health, sexual life and the commission of offences and related proceedings if you consent to the collection, processing and sharing of that information in accordance with the terms of this Privacy Statement.\n		<br><br>\n		<b style=\"display: inline;\">Verification and vetting:</b>  for certain positions it may be necessary for us, to verify the details you have supplied (for example in relation to your academic credentials or your employment history) and /or carry out pre-employment checks (for example in relation to previous criminal convictions).  If a position that is, or may be, of interest to you requires pre-employment vetting, we will tell you about this.  We will carry out background checks only where permitted by local law and with your consent.\n		<br><br>\n		If you are a recruiter or other person posting an application on behalf of an applicant, you confirm that  you have provided the applicant with a copy of this Privacy Statement,  that you have obtained their consent to submit their personal information to us and to our collection, use and disclosure (including transfers to other countries) of their personal data for the purposes set out in this Privacy Statement.\n		<br><br>\n		If you provide us with details of referees, you confirm that your referees have consented to our collection, use and disclosure (including transfers to other countries) of their personal data for the purposes of contacting them as referees, and being contacted by us in connection with our Services.\n		<br><br>\n		If you use the Site to connect with third parties you authorize us to use information from and about you, on your behalf, to interact with these third party services based on your requests.\n		<br><br>\n		We may sell or purchase assets during the normal course of our business.  If another entity acquires WME IMG or any of our assets, information we have collected about you may be transferred to such entity. Where required by local law, we will only do this with your consent. In addition, if any bankruptcy or reorganization proceeding is brought by or against us, such information may be considered our asset and may be sold or transferred to third parties.  Should such a sale or transfer occur, we will use reasonable efforts to try to require that the transferee use your personal information in a manner that is consistent with this Privacy Statement\n		<h2>COOKIES AND SIMILAR TECHNOLOGIES</h2>\n		We use cookies and other similar technologies to automatically collect certain information when you use the Site. To learn more about these cookies and technologies, please visit our <a href=\"/cookiepolicy/\">Cookie Policy</a>.\n		<h2>INTERNATIONAL DATA TRANSFER</h2>\n		Your personal information will be accessible to WME IMG personnel in the US, Australia and other countries in which our group operate, including outside the EU, to the extent necessary to identify international employment opportunities and manage international recruitment processes. It will also be stored and processed manually and electronically through our global systems and tools.  Your information and any application you may choose to make will be transferred to the local personnel team in the country where the position you apply for is being offered. It may also be shared with other personnel within the WME IMG  group and your recruitment agent for the purpose of progressing your application.\n		<br><br>\n		Some of the countries to which your data may be transferred may not have equivalent data protection legislation to that which applies in your own country, including, if you are located in Australia, the Australian Privacy Principles. WME IMG may not require organisations to which it discloses personal information in those countries to comply with similar privacy laws, and accordingly your personal data may not receive the same protections that it would in your own country. However, when we transfer your data to other countries we will keep it secure and ensure that there is adequate protection in place.\n		<br><br>\n		By submitting your application or using our Site, you are consenting to your data being transferred in this way even though it may not receive the same protections that it would in your own country.  You may request us not to transfer your personal data to the countries listed above, but if you do so we may not be able to assess your application.\n		<h2>DATA SECURITY</h2>\n		We are committed to maintaining the security of the data you provide us and take appropriate technical, administrative, physical and procedural security measures, consistent with local and international information practices to protect your personal information from misuse, unauthorized access or disclosure, loss alteration or destruction.  Your information will be handled according to the WME IMG’s Information Security and Physical Security policies.\n		<br><br>\n		Because there is always some risk in transmitting information over the Internet, while we make every effort to help ensure the integrity and security of our network and systems, we cannot guarantee our security measures. \n		<h2>LINKS TO OTHER SITES OR APPS</h2>\n		The Services may have links to third-party sites or applications, which may have privacy policies that differ from our own.  When you use these links you will leave our website and enter sites we have no control over. This Privacy Statement does not cover your use of these sites or govern the personal information which you may provide. We are not responsible for the practices of such sites or applications. To protect your privacy, we suggest that you review the individual privacy statement on any third party website before using the site or submitting any personal information.\n		<h2>CHILDREN'S PRIVACY</h2>\n		This Site is not intended for use by children.  We do not direct the Services to, nor do we knowingly collect personal information from, children under the age of 16.   \n		<h2>YOUR RIGHTS IN RELATION TO YOUR PERSONAL INFORMATION</h2>\n		If you wish to access or seek correction of your personal information, you should contact <a href=\"mailto:workdaysupport@wmeimg.com\" target=\"_top\">workdaysupport@wmeimg.com</a> and give sufficient information to enable you and your information to be identified. Where permitted we may charge a fee to provide access to the personal information we hold about you.\n		<br><br>\n		You may also have the right to ask us to rectify, block, complete, delete, restrict, withdraw your consent and object to or complain about the processing of personal data that relates to you and to request an explanation about the processing by contacting <a href=\"mailto:workdaysupport@wmeimg.com\" target=\"_top\">workdaysupport@wmeimg.com</a> at any time. In the EEA, you may also make a complaint to the relevant supervisory body or seek a remedy through the courts if you believe that your rights have been breached. There are exceptions to these rights so that access may be denied, for example where making information available would reveal personal information about another person or where we are legally prevented from disclosing such information\n		<br><br>\n		We will promptly take all reasonable steps to investigate any complaint about the way we manage personal information.\n		<br><br>\n		Where we require personal information to comply with legal or contractual obligations, then the provision of such data is mandatory: if such data is not provided, then we will not be able administer its relationship with you, or meet the obligations placed on it. In all other cases, the provision of personal information is optional.\n		<br><br>\n		If you no longer wish to hear about future vacancies or receive other general communications from us, you should contact <a href=\"mailto:workdaysupport@wmeimg.com\" target=\"_top\">workdaysupport@wmeimg.com.</a> This option does not apply to communications required to administer your application or other transactional notices.\n		<h2>MORE INFORMATION FOR APPLICANTS FROM THE EEA</h2>\n		For further information on why and how your personal information are processed by us and with whom it may be shared, please click [<a href=\"/careers/eea#retention\">here</a>]. Details of how long we keep your personal information are also set out in this <a href=\"/careers/eea\">link</a>.\n		<h2>IF YOU HAVE QUESTIONS</h2>\n		WMG IMG is the data controller of your personal information.  Our contact details for any inquiries are as follows: WME IMG, 9601 Wilshire Blvd., 3rd Floor, Beverly Hills, CA 90210 Attn: Human Resources\n		<br><br>\n		However, if you have any specific questions or concerns about this Privacy Statement or the practices described herein, you should contact us at <a href=\"mailto:workdaysupport@wmeimg.com\" target=\"_top\">workdaysupport@wmeimg.com.</a>\n		<h2>REVISIONS TO THIS STATEMENT</h2>\n		We reserve the right to revise this Privacy Statement at any time. When we do, we will post the change(s) prominently on the Services.  If we change the Privacy Statement in a material way, we will notify you of this and, if required by applicable local law, we will obtain your consent.\n	</div>\n</div>\n<!--END CONTENT-->\n";
},"usePartial":true,"useData":true});

this["TEMPLATES"]["tos.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!-- CONTENT -->\n<div class=\"layout__content layout__content--legal\">\n    <div class=\"layout__content-wrapper\">\n"
    + ((stack1 = container.invokePartial(partials["legal-module"],(depth0 != null ? depth0.terms : depth0),{"name":"legal-module","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + " 		<p><b>WME IMG SITE TERMS OF USE</b></p>\n\n		<p><b>Read these Terms of Use carefully before using this Site.</b></p>\n\n		<b>1.	Acceptance</b>\n			By visiting and using the WME IMG job portal website (the “Site”), you agree, without limitation or qualification, to be bound by these terms and conditions of use (“Terms of Use”), the WME IMG <a href=\"/careers/privacypolicy\">Privacy Statement (“Privacy Statement”)</a> and the WME IMG <a href=\"/cookiepolicy\">Cookie Policy (“Cookie Policy”)</a> incorporated herein by reference.\n			<br><br>\n			Where permitted by local law, WME IMG LLC (“WME IMG”) reserves the right to modify or revise the Terms of Use, in its sole discretion, at any time.  By visiting and using the Site, you agree to be bound by any and all subsequent modifications or revisions and to comply with any applicable laws and regulations.  WME IMG will attempt to notify Site users whenever it materially modifies or revises these Terms of Use; however, it recommends that Site users review the most up-to-date version of the Terms of Use periodically.  The materials provided on this Site are protected by applicable law, including, but not limited to, United States copyright laws and international treaties.\n		<b>2.	Personal Information</b>\n		The personal information you submit to WME IMG is governed by the WME IMG Privacy Statement.  To the extent there is an inconsistency between the Terms of Use and the Privacy Statement, the Privacy Statement shall govern.  You are responsible for providing information that is accurate, current and complete.  If you provide information that is not accurate, current or complete, or if WME IMG has reason to believe that information you provided is not accurate, current or complete, WME IMG has the right to prohibit you from any and all future use of the Site.\n		<b>3.	Use Restrictions</b>\n		The content on this Site, such as text, graphics, images, photographs, illustrations, trademarks, trade names, service marks, logos, information obtained from WME IMG licensors, and other materials (“Contents”) is protected by copyright under both United States and foreign laws.  Ownership of the Contents - in other words, ownership of all intellectual property rights in such Contents - remains with WME IMG or our licensors.  Any use of the Contents not expressly permitted by these Terms of Use is a breach of these Terms of Use and may violate copyright, trademark and other laws.  Except as stated herein, none of the Contents may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by any means without the prior written permission of WME IMG or its licensors.  WME IMG authorizes you to view and download a single copy of the Contents solely for your own lawful, personal, non-commercial use if you include the following copyright notice:  “Copyright © 2016, WME IMG, LLC.  All rights reserved” and retain other copyright and proprietary rights notices which were contained in the Contents.  Any special rules for the use of other items provided on the Site may be included elsewhere within the Site and are incorporated into these Terms of Use by reference.  The use of the Contents on any other site or in a networked computer environment for any purpose is prohibited.  All rights not expressly granted herein are reserved to WME IMG and its licensors.  If you violate any of these Terms of Use, your permission to use the Contents automatically terminates and you must immediately destroy any copies you have made of any portion of the Contents.\n		<br><br>\n		You may not, without WME IMG’s written permission, “mirror” any Contents contained in this Site or any other server.  You may not use the Site for any purpose that is unlawful or prohibited by these Terms of Use, including to defame, harass, stalk, threaten, abuse or otherwise violate the rights of a third party as defined by applicable law.  You may not use the Site in any manner that could damage, disable, overburden or impair the Site, or interfere with any other party’s use and enjoyment of the Site.  You may not attempt to gain unauthorized access to the Site through hacking, password mining or any other means.  WME IMG reserves the right, in its sole discretion, to terminate your access to the Site, or any portion thereof, at any time, if there is a justifiable reason, without prior notice or any notice.\n		<b>4.	Submission of Ideas</b>\n		WME IMG does not accept submissions of any kind through this Site (e.g., materials, ideas, suggestions, know-how, or concepts), other than those expressly sought through permitted use of the Site or otherwise.  All submissions, other than those expressly sought through permitted use of the Site, will be deleted unread or destroyed.\n		<b>5.	Hyperlinks from the Site</b>\n			The Site may contain hyperlinks to other websites and webpages (“Third-Party Pages”), as well as to text, graphics, videos, images, music, sounds, and information belonging to or originating from other third-parties (collectively, “Third-Party Applications”).  WME IMG does not investigate, monitor, or review any Third-Party Pages or Third-Party Applications to ensure their accuracy, completeness, or appropriateness.  WME IMG is not responsible for the Third-Party Pages or any Third-Party Applications accessed through the Site.  The inclusion of any hyperlinks to any Third-Party Pages or Third-Party Applications on the Site does not indicate WME IMG’s approval or endorsement thereof.  If you choose to leave the Site to access any Third-Party Pages or Third-Party Applications, you do so at your own risk.\n		<b>6.	Liability of WME IMG and Its Licensors and Partners</b>\n		The use of the Site and/or the Contents is at your own risk.  The Contents in this Site could include technical inaccuracies or typographical errors.  WME IMG may make changes or improvements at any time.\n		<br><br>\n		Nothing in these Terms of Use excludes or limits WME IMG's liability for death or personal injury arising from negligence, or fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited by applicable law.\n		<br><br>\n		Subject to applicable law, WME IMG will not be liable to you for any loss or damage, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, even if foreseeable, arising under or in connection with use or inability to use, our Site, or use of or reliance on any Contents displayed on our Site.\n		<br><br>\n		The Site is provided as is, and to the extent permitted by law WME IMG gives no warranties that the Site will be accessible or secure at all times, or that that access to the Site will be uninterrupted or error free.\n		<br><br>\n		You agree not to use the Site for any commercial or business purposes, and subject to applicable law WME IMG have no liability to you for any loss of profit, loss of business, business interruption, or loss of business opportunity arising out of or related to your use, or the performance, of the Site. To the extent permitted by applicable law, WME IMG exclude all conditions, warranties, representation or other terms which may apply to the Site or any Contents on it, whether express or implied.\n		<b>7.	Indemnity</b>\n		You will be responsible for and will be liable to us and indemnify us against any loss or damage suffered by WME IMG as a result of your use of the Site or Contents other than as permitted under these Terms of Use.\n		<br><br>\n		You agree to indemnify us in full against any third party liabilities, claims, costs, loss or damage incurred as a result of any breach by you of these Terms of Use.\n		<b>8.	General</b>\n		WME IMG makes no claims that the Contents are appropriate or may be downloaded outside of the United States of America or the United Kingdom.  Access to the Contents may not be legal by certain persons or in certain countries.  If you access the Site from outside the United States or the United Kingdom, you do so at your own risk and are responsible for compliance with the laws of your jurisdiction.  The following provisions survive the expiration or termination of these Terms of Use for any reason whatsoever:  Liability of WME IMG and its Licensors and Partners, Use Restrictions, Submission of Ideas, Indemnity, Applicable Laws, and Complete Agreement.\n		<b>9.	Applicable Laws</b>\n		Subject to your statutory rights under local law, these Terms of Use are governed in accordance with the laws of the State of New York, United States of America, without regard to its conflict of law provisions.  You and WME IMG hereby expressly consent and submit to the exclusive jurisdiction of the state and federal courts of the Borough of Manhattan, New York, New York, United States of America for the adjudication or disposition of any claim, action or dispute arising out of these Terms of Use.  If any provision of these Terms of Use is found to be invalid by any court having competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions of these Terms of Use, which shall remain in full force and effect.  No waiver of any of these Terms of Use shall be deemed a further or continuing waiver of such term or condition or any other term or condition.\n		<b>10.	Notice and Take Down Procedures</b>\n		If you believe any Content accessible on or from the Site infringes your copyright, you may request removal of those materials (or access thereto) from this Site by contacting WME IMG (address identified below) and providing the following information:\n		<ol>\n		<li>Identification of the copyrighted work that you believe to be infringed.  Please describe the work, and where possible include a copy or the location (e.g., URL) of an authorized version of the work.</li>\n		<li>Identification of the Content that you believe to be infringing and its location.  Please describe the Content, and provide us with its URL or any other pertinent information that will allow us to locate the Content.</li>\n		<li>Your name, address, telephone number, and (if available) email address.</li>\n		<li>A statement that you have a good faith belief that the complained-of use of the work is not authorized by the copyright owner, its agent, or the law.</li>\n		<li>A statement that the information you have supplied is accurate, and indicating that “under penalty of perjury,” you are the copyright owner or authorized representative.</li>\n		<li>A signature or the electronic equivalent from the copyright holder or authorized representative.</li>\n		</ol>\n		Our address for copyright issues relating to the Site outside of Singapore is as follows:\n		<br><br>\n		WME IMG<br>\n		Attn: Debra Shuwarger<br>\n		11 Madison Avenue, 18th floor,<br>\n		New York, NY 10010<br>\n		copyrightagent@wmeentertainment.com<br><br>\n		If you are based in Singapore, please contact our Singapore office:\n		<br><br>\n		Attn: Robbie Henchman<br>\n		IMG Singapore PTE Ltd. (UEN 199301915H)<br>\n		1 Scotts Road, #21-01<br>\n		Singapore 228208 <br><br>\n		In an effort to protect the rights of copyright owners, WME IMG maintains a policy for the termination, in appropriate circumstances, of users of this Site who are repeat infringers.\n		<b>11.	Complete Agreement</b>\n		Except as expressly provided in a particular notice or disclaimer posted by or on behalf of WME IMG on this Site, these Terms of Use, including WME IMG Privacy Statement and Cookie Policy, constitute the entire agreement between you and WME IMG with respect to the use of the Site and Contents.\n		<br><br>\n		Dated: 20 April 2016\n    </div>\n</div>\n<!--END CONTENT-->\n";
},"usePartial":true,"useData":true});

this["TEMPLATES"]["clients.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["content-tile-module"],depth0,{"name":"content-tile-module","data":data,"indent":"\t\t    \t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n<!-- HERO -->\n<div class=\"layout__hero\">\n"
    + ((stack1 = container.invokePartial(partials["hero-module"],(depth0 != null ? depth0["clients-hero"] : depth0),{"name":"hero-module","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n<!-- END HERO -->\n\n<!-- CONTENT -->\n<div class=\"layout__content\">\n	<div class=\"layout__content-wrapper clients\">\n		<p class=\"layout__content-description\">​\n            For over 100 years we have helped them navigate the entertainment, sports and fashion industries’ ever-shifting landscapes to build lasting, generation-defining careers.\n        </p>\n        <div>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0["clients-page"] : depth0)) != null ? stack1["client-feed"] : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n    </div>\n</div>\n<!--END CONTENT-->\n";
},"usePartial":true,"useData":true});

this["TEMPLATES"]["contact.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"contact\" data-endpoint=\"/\">\n<!-- HERO -->\n<div class=\"layout__hero\">\n</div>\n<!-- END HERO -->\n\n\n<!-- CONTENT -->\n<div class=\"layout__content\">\n	<div class=\"layout__content-wrapper\">\n		<section class=\"layout__content-description wysiwyg\">"
    + ((stack1 = ((helper = (helper = helpers.page_intro || (depth0 != null ? depth0.page_intro : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"page_intro","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</section>\n"
    + ((stack1 = container.invokePartial(partials["form-module"],(depth0 != null ? depth0["contact-form"] : depth0),{"name":"form-module","data":data,"indent":"    \t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </div>\n</div>\n<!--END CONTENT-->\n\n"
    + ((stack1 = container.invokePartial(partials["contact-popup"],(depth0 != null ? depth0["contact-consent"] : depth0),{"name":"contact-popup","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n\n";
},"usePartial":true,"useData":true});

this["TEMPLATES"]["contacts.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"contacts-page\">\n	<!-- HERO -->\n	<div class=\"layout__hero\">\n	</div>\n	<!-- END HERO -->\n	<!-- CONTENT -->\n	<div class=\"layout__content\">\n		<div class=\"layout__content-wrapper\">\n			<p class=\"layout__content-description\"></p>\n"
    + ((stack1 = container.invokePartial(partials["contact-finder-module"],depth0,{"name":"contact-finder-module","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "	    </div>\n	</div>\n	<!--END CONTENT-->\n</div>\n\n";
},"usePartial":true,"useData":true});

this["TEMPLATES"]["cookiepolicy.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!-- CONTENT -->\n<div class=\"layout__content layout__content--legal\">\n    <div class=\"layout__content-wrapper\">\n"
    + ((stack1 = container.invokePartial(partials["legal-module"],(depth0 != null ? depth0["cookie-policy"] : depth0),{"name":"legal-module","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "Effective Date: October 20, 2016\n<p><b>WME IMG, LLC COOKIES POLICY</b></p>\n<p><b>WME IMG, LLC (\"we\", \"us\", \"our\") are committed to protecting and respecting your privacy.</b></p>\n\nOur Website uses cookies and other similar technologies (as described below) to distinguish you from other users of our Website. This helps us to provide you with a good experience when you browse our Site, allows us to improve our Website and provide you with tailored content and advertising.\n<br><br>\nA cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer if you agree. Cookies contain information that is transferred to your computer's hard drive.\n<br><br>\nYou can find more information about the types of cookies we use and the purposes for which we use them in the table below:\n\n<table>\n  <tr>\n  	<th>Type Cookie</th>\n  	<th>Purpose of Cookie</th>\n  </tr>\n  <tr>\n    <td>Strictly Necessary</td>\n    <td>These cookies are essential in order to enable you to browse our Website and use its features. The information collected by these cookies relate to the operation of our Website, for example website scripting language and security tokens to maintain secure areas of our Website.. </td>\n  </tr>\n  <tr>\n    <td>Performance / Analytics </td>\n    <td>These cookies collect anonymous information about how you use our Website, for example which pages you visit most often, whether you receive any error messages, and how you arrived at our Website. Information collected by these cookies is used only to improve your use of our Website and never to identify you. These cookies are sometimes placed by third-party providers of web traffic analysis services. We use Google Analytics. For information on how Google processes and collects your information in regard to this product and how you can opt-out, please see <a href=\"https://www.google.com/policies/privacy/partners/\">here.</a></td>\n  </tr>\n  <tr>\n  	<td>Functionality</td>\n  	<td>These cookies remember choices you make, for example the country you visit our Website from, your language and any changes you have made to text size or other parts of web pages that you can customise, in order to improve your experience of our Website and to make your visits more tailored and enjoyable. The information these cookies collect may be anonymised and cannot be used to track your browsing activity on other websites.</td>\n  </tr>\n  <tr>\n  	<td>Targeting or Advertising</td>\n  	<td>These cookies collect information about your browsing habits and inferred interests in order to make advertising more relevant to you. They are also used to limit the number of times you see an advert, as well as to measure the effectiveness of an advertising campaign. These cookies are usually placed by third-party advertising networks. They remember the other websites that you visit and this information is shared with third-party organisations, for example advertisers. </td>\n  </tr>\n</table>\n\nPlease note that third parties (including, for example, advertising networks and providers of external services like web traffic analysis services) may also use cookies, over which we have no control. These cookies are likely analytical/performance cookies or targeting cookies.\n<b>FURTHER INFORMATION </b>\nMost internet browsers are automatically set up to accept cookies. However, if you want to refuse or delete any cookies (or similar technologies), please refer to the help and support area on your internet browser for instructions on how to block or delete cookies. Please note you may not be able to take advantage of all the features of our Website, including certain personalised features, if you delete or disable cookies.\nTo opt out of being tracked by Google Analytics across our Websites, visit https://tools.google.com/dlpage/gaoptout.\n<br><br>\nFor more information on managing cookies, please go to <a href=\"http://www.allaboutcookies.org\"> www.allaboutcookies.org</a>, or visit <a href=\"http://www.youronlinechoices.eu\">www.youronlinechoices.eu</a> or <a href=\"http://www.aboutads.info\">http://www.aboutads.info</a> which have further information about behavioural advertising and online privacy.\n<b>REVISIONS TO OUR COOKIES POLICY</b>\nWe reserve the right to revise this Cookies Policy at any time. When we do, we will post the change(s) on this Website. If we change the Cookies Policy in a material way, we will provide appropriate notice to you; however, we recommend that you review the most up-to-date version of the Cookies Policy periodically.\n\n    </div>\n</div>\n<!--END CONTENT-->\n\n";
},"usePartial":true,"useData":true});

this["TEMPLATES"]["expertise.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"page\" data-endpoint=\"/expertise\">\n"
    + ((stack1 = container.invokePartial(partials.base,(depth0 != null ? depth0.model : depth0),{"name":"base","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});

this["TEMPLATES"]["brand.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"page\" data-endpoint=\"/expertise/representation/brand\">\n"
    + ((stack1 = container.invokePartial(partials.base,(depth0 != null ? depth0.model : depth0),{"name":"base","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});

this["TEMPLATES"]["collegiate.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\n<!-- HERO -->\n<div class=\"layout__hero\">\n\n</div>\n<!-- END HERO -->\n\n<!-- CONTENT -->\n<div class=\"layout__content\">\n    <div class=\"layout__content-wrapper expertise\">\n        <p class=\"layout__content-description\">\n           As a leading collegiate sports marketing entity, we create innovative national, regional and local platforms to help institutions and brands target nearly 190 million-strong college sports fan base.\n        </p>\n        <div class=\"layout__linkwrapper\">\n            <a class=\"btn feat-link\" href=\"http://imgcollege.com/\">imgcollege.com<i class='external'></i></a>\n        </div>\n\n    </div>\n</div>\n<!--END CONTENT-->\n";
},"useData":true});

this["TEMPLATES"]["digital.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"page\" data-endpoint=\"/expertise/representation/digital\">\n"
    + ((stack1 = container.invokePartial(partials.base,(depth0 != null ? depth0.model : depth0),{"name":"base","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});

this["TEMPLATES"]["events.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"page\" data-endpoint=\"/expertise/events\">\n"
    + ((stack1 = container.invokePartial(partials.base,(depth0 != null ? depth0.model : depth0),{"name":"base","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});

this["TEMPLATES"]["fashion.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!-- HERO -->\n<div class=\"layout__hero\">\n"
    + ((stack1 = container.invokePartial(partials["hero-module"],(depth0 != null ? depth0["expertise-fashion-hero"] : depth0),{"name":"hero-module","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n<!-- END HERO -->\n\n<!-- CONTENT -->\n<div class=\"layout__content\">\n    <div class=\"layout__content-wrapper\">\n"
    + ((stack1 = container.invokePartial(partials["story-content-module"],((stack1 = (depth0 != null ? depth0["expertise-fashion-page"] : depth0)) != null ? stack1.content : stack1),{"name":"story-content-module","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </div>\n</div>\n<!--END CONTENT-->\n";
},"usePartial":true,"useData":true});

this["TEMPLATES"]["league.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"page\" data-endpoint=\"/expertise/league\">\n"
    + ((stack1 = container.invokePartial(partials.base,(depth0 != null ? depth0.model : depth0),{"name":"base","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});

this["TEMPLATES"]["media.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"page\" data-endpoint=\"/expertise/media\">\n"
    + ((stack1 = container.invokePartial(partials.base,(depth0 != null ? depth0.model : depth0),{"name":"base","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});

this["TEMPLATES"]["original.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!-- HERO -->\n<div class=\"layout__hero\">\n"
    + ((stack1 = container.invokePartial(partials["hero-module"],(depth0 != null ? depth0["original-hero"] : depth0),{"name":"hero-module","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n<!-- END HERO -->\n\n<!-- CONTENT -->\n<div class=\"layout__content\">\n    <div class=\"layout__content-wrapper expertise\">\n    <p class=\"layout__content-description\"> We also assist our clients in bringing their passion projects to life through production and arranging for financing and distribution. Projects include: Michael Moore’s critically acclaimed documentary \"Where To Invade Next;\" client Clay Tweel’s documentary \"Gleason,\" which premiered at the 2016 Sundance Film Festival and will be released by Amazon Summer 2016; TNT’s Sports Illustrated Swimsuit 2016 Reveal Special; and the HBO special series \"Gonzaga: The March to Madness.\"</p>\n    <p class=\"layout__content-description\">We launched our first OTT channel, the fashion-dedicated <a href='https://m2m.tv/'>Made to Measure</a>, in 2015. Made to Measure includes archival material and live runway shows, as well as originally produced documentaries and films like \"Battle at Versailles.\"</p>\n\n    </div>\n</div>\n<!--END CONTENT-->\n";
},"usePartial":true,"useData":true});

this["TEMPLATES"]["representation.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"page\" data-endpoint=\"/\">\n"
    + ((stack1 = container.invokePartial(partials.base,(depth0 != null ? depth0.model : depth0),{"name":"base","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});

this["TEMPLATES"]["sportstraining.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"page\" data-endpoint=\"/expertise/sportstraining\">\n"
    + ((stack1 = container.invokePartial(partials.base,(depth0 != null ? depth0.model : depth0),{"name":"base","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});

this["TEMPLATES"]["index.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"layout__web\">\n"
    + ((stack1 = container.invokePartial(partials["web-module"],(depth0 != null ? depth0.nodegroup : depth0),{"name":"web-module","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n\n\n\n";
},"usePartial":true,"useData":true});

this["TEMPLATES"]["network.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"page\" data-endpoint=\"/network\">\n"
    + ((stack1 = container.invokePartial(partials.base,depth0,{"name":"base","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});

this["TEMPLATES"]["news.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"news-page\">\n	<!-- HERO -->\n	<div class=\"layout__hero\">\n	</div>\n	<!-- END HERO -->\n	<!-- CONTENT -->\n	<div class=\"layout__content\">\n	    <div class=\"layout__content-wrapper\">\n	        <div class='news-feed'>\n	        </div>\n	    </div>\n	</div>\n	<!--END CONTENT-->\n</div>\n\n";
},"useData":true});

this["TEMPLATES"]["offices.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "                <h2 class=\"title\">\n                    <span>"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.region : depth0), depth0))
    + "</span>\n                </h2>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.featured : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                    <div class=\"collapsable\">\n                        <div class=\"feat-link toggleOpen animate\">\n                            <span>+</span> Explore Additional Locations <span>+</span>\n                        </div>\n                        <div class=\"inner\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.officeGroups : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                        </div>\n                        <div class=\"clear-float\"></div>\n                    </div>\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["office-feed-module"],depth0,{"name":"office-feed-module","data":data,"indent":"                    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.hasOffices : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n                                    <h3 class=\"grid-result__title\">\n                                        <span>"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "</span>\n                                    </h3>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.offices : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["office-feed-module"],depth0,{"name":"office-feed-module","data":data,"indent":"                                        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"offices\" data-endpoint=\"/\">\n    <!-- HERO -->\n    <div class=\"layout__hero\">\n    </div>\n    <!-- END HERO -->\n    <!-- CONTENT -->\n    <div class=\"layout__content\">\n        <div class=\"layout__content-wrapper\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.regions : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <div class=\"articles\"></div>\n        </div>\n    </div>\n    <!--END CONTENT-->\n</div>\n";
},"usePartial":true,"useData":true});

this["TEMPLATES"]["page.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"page\">\n"
    + ((stack1 = container.invokePartial(partials.base,(depth0 != null ? depth0.model : depth0),{"name":"base","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});

this["TEMPLATES"]["privacypolicy.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!-- CONTENT -->\n<div class=\"layout__content layout__content--legal\">\n    <div class=\"layout__content-wrapper\">\n"
    + ((stack1 = container.invokePartial(partials["legal-module"],(depth0 != null ? depth0["privacy-policy"] : depth0),{"name":"legal-module","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        Effective Date: October 20, 2016\n		<p><b>WME IMG, LLC PRIVACY POLICY</b></p>\n		WME IMG, LLC (\"we\", \"us\", \"our\") are committed to protecting and respecting your privacy.\n		<br><br>\n		This Privacy Policy (together with our <a href=\"/tos\">Terms of Use </a>, <a href=\"/cookiepolicy\">Cookie Policy</a> and any other documents referred to therein) sets out the basis on which any information (which may include personal information) we collect from you, or that you provide to us, through our website (the \"Website\") will be processed by us. Please read the following carefully to understand how we will treat your information before you provide us with any information about you.\n		<br><br>\n		BY VISITING THIS WEBSITE YOU ARE ACCEPTING AND CONSENTING TO THE PRACTICES DESCRIBED IN THIS PRIVACY POLICY (INCLUDING AS UPDATED OR AMENDED FROM TIME TO TIME). IF, FOR ANY REASON, YOU DO NOT AGREE TO THE TERMS OF THIS PRIVACY POLICY, PLEASE STOP USING THE WEBSITE IMMEDIATELY.\n		Please click on the sections below to learn more about our Privacy Policy:\n		<ul class=\"links\">\n			<li><a href=\"#who_we_are\">WHO WE ARE</a></li>\n			<li><a href=\"#info_collect_you\">INFORMATION WE MAY COLLECT FROM YOU</a></li>\n			<li><a href=\"#info_collect_other\">INFORMATION WE COLLECT FROM OTHER SOURCES</a></li>\n			<li><a href=\"#info_used\">HOW YOUR INFORMATION MAY BE USED</a></li>\n			<li><a href=\"#info_disc\">DISCLOSURES OF YOUR INFORMATION</a></li>\n			<li><a href=\"#info_storage\">STORAGE AND TRANSFER OF INFORMATION</a></li>\n			<li><a href=\"#cookies\">COOKIES</a></li>\n			<li><a href=\"#children\">CHILDREN</a></li>\n			<li><a href=\"#cali_rights\">YOUR CALIFORNIA PRIVACY RIGHTS</a></li>\n			<li><a href=\"#eu_rights\">YOUR EU AND OTHER PRIVACY RIGHTS</a></li>\n			<li><a href=\"#choices\">YOUR CHOICES</a></li>\n			<li><a href=\"#security\">SECURITY</a></li>\n			<li><a href=\"#third_party\">LINKS TO THIRD PARTY WEBSITES</a></li>\n			<li><a href=\"#privacy_changes\">CHANGES TO OUR PRIVACY POLICY</a></li>\n			<li><a href=\"#contact_us\">CONTACT</a></li>\n		</ul>\n		<br>\n		<b id=\"who_we_are\">WHO WE ARE</b>\n		This Website is operated by WME IMG, LLC. As used in this Privacy Policy, the terms \"WME IMG Companies\", \"we\", \"us\" and \"our\" refer to WME IMG, LLC and all entities it controls, is controlled by or is under common control with, including subsidiaries, joint ventures or other entities in whom WME IMG, LLC has a substantial ownership interest. Should you require a list of these entities, contact us as described in the “Contact” section below. \u2028\n		<br>\n		The data controller is WME IMG, LLC of 9601 Wilshire Boulevard, Beverly Hills, California 90210.\n		<b id=\"info_collect_you\">INFORMATION WE MAY COLLECT FROM YOU</b>\n		When you use the Website, you may provide us with, and we may collect from you, information which relates to you, including your personal information.\n		<br>\n		You may provide us with your information in a number of ways, including:\n		<ul>\n			<li>completing forms on the Website (such as \"Contact Us\" forms);</li>\n			<li>corresponding with us by e-mail, phone or otherwise;</li>\n			<li>subscribing to email updates, newsletters or other subscriptions and features made available on the Website from time to time; and</li>\n			<li>reporting a problem or requesting support for the Website.	</li>\n		</ul>\n\n		The information you give us may include your name, address, e-mail address, phone number, date of birth, educational institution, artist interested in and budget.\n		<br>\n		Information we collect about you.\n		</br>\n		With regard to each of your visits to our Website we may automatically collect the following information:\n		<ul>\n			<li>technical information, including IP address, login information, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform;</li>\n			<li>information about your visit, including the full URL clickstream to, through and from our Website (including date and time); and</li>\n			<li>pages you viewed or searched for; page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), and methods used to browse away from the page.</li>\n		</ul>\n		<b id=\"info_collect_other\">INFORMATION WE COLLECT FROM OTHER SOURCES</b>\n		We may receive information about you (including your personal information) if you use any of the other websites operated by the WME IMG Companies or the other services the WME IMG Companies provide. In this case we will inform you when we collect that information that it may be shared internally and combined with information collected on the Website. We may also receive and display information and content which you make publically available on your social media platforms.\n		<br><br>\n		We also work closely with third parties (including, for example, business partners, sub-contractors in technical services, advertising networks, analytics providers and search information providers) and may receive information about you from them.\n		<b id=\"info_used\">HOW YOUR INFORMATION MAY BE USED</b>\n		We may use information held about you in the following ways:\n		<br><br>\n		<i>Information you give to us.</i> We will use this information to:\n\n			<ul>\n				<li>help us respond to your queries;</li>\n				<li>carry out our obligations arising from any contracts entered into between you and us and to provide you with the information, products and services that you request from us;</li>\n				<li>send you our newsletter, email updates and other subscriptions which we make available from time to time and which you subscribe to receiving;</li>\n				<li>provide you with information about other goods and services we offer that are similar to those that you have already purchased or enquired about;</li>\n				<li>provide you, or permit selected third parties to provide you, with information about goods or services we feel may interest you;</li>\n				<li>notify you about changes to our services;</li>\n				<li>ensure that content from our Website is presented in the most effective manner for you and for your computer; and\n				comply with legal and regulatory requirements.</li>\n			</ul>\n\n		<i>Information we collect about you.</i> We will use this information:\n		<ul>\n				<li>to administer our Website and for internal operations, including troubleshooting, data analysis, testing, research, statistical and survey purposes;</li>\n				<li>to improve our Website to ensure that content is presented in the most effective manner for you and for your computer;</li>\n				<li>to allow you to participate in interactive features of our services, when you choose to do so;\n				as part of our efforts to keep our Website safe and secure;</li>\n				<li>to measure or understand the effectiveness of advertising we serve to you and others, and to deliver relevant advertising to you;</li>\n				<li>to make suggestions and recommendations to you and other users of our Website about goods or services that may interest you or them; and</li>\n				<li>to provide or permit third parties to provide targeted advertising via websites you visit about goods or services that you may find interesting (see more on this in our <a href=\"/cookies\">Cookies Policy </a>).</li>\n		</ul>\n\n		Information we receive from other sources.\n		<ul>\n			<li>We may combine information we receive from other sources with information you give to us and information we collect about you. We may use this combined information for the purposes set out above.</li>\n		</ul>\n\n		<b id=\"info_disc\">DISCLOSURE OF YOUR INFORMATION</b>\n		We may share your personal information with any WME IMG Companies (including Appy Entertainment GmbH and Appy Entertainment LLC) and with selected third parties including:\n		<ul>\n			<li>business partners, suppliers and sub-contractors for the performance of any contract we enter into with them or you in order to provide you with a product or service;</li>\n			<li>business partners, suppliers and sub-contractors to provide you with information about promotions and offers;</li>\n			<li>aggregated, anonymised or other data to advertisers, advertising networks and social networks that require the data to select and serve relevant adverts to you and others. We may also use aggregate information to help advertisers reach the kind of audience they want to target. We may make use of the personal information we have collected from you to enable us to comply with our advertisers' wishes by displaying their advertisement to that target audience; and</li>\n			<li>analytics and search engine providers that assist us in the improvement and optimisation of the Website.</li>\n		</ul>\n\n\n\n		We may disclose your personal information to third parties:\n		<ul>\n			<li>in the event that we sell or buy any business or assets, in which case we may disclose your personal information to the prospective seller or buyer of such business or assets;</li>\n			<li>if the WME IMG Companies that control this Website or substantially all of its assets are acquired by a third party, in which case personal information held by it about its customers will be one of the transferred assets;</li>\n			<li>if we are under a duty to disclose or share your personal information in order to comply with any legal obligation, or in the event of an emergency, or in order to enforce or apply our <a href=\"/tos\">terms of use </a> and other agreements, or to protect the rights, property, or safety of the WME IMG Companies, our customers, clients or others; and</li>\n			<li>to any other third party with your prior consent to do so.</li>\n		</ul>\n\n		<b id=\"info_storage\">STORAGE AND TRANSFER OF INFORMATION</b>\n		All the information you provide, including your personal information, may be processed and stored, transferred or accessed by entities around the world as described in this Privacy Policy. Specifically, the information and personal information that we collect from you may be transferred to, and stored at, a destination outside the European Economic Area (\"EEA\"), including the United States. It may also be processed by staff operating outside the EEA who work for us or for one of the organisations outlined in this Privacy Policy for in connection with the activities outlined in this Privacy Policy. By submitting your information and personal information and using our Website, you agree to this transfer, storing or processing. We will take all steps reasonably necessary to ensure that your personal information is treated securely and in accordance with this Privacy Policy. We have put in place commercially reasonable technical and organisational procedures to safeguard the information and personal information we collect on this Website.\n		<br><br>\n		Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your personal information, we cannot guarantee the security of your information transmitted to our Website; any transmission is at your own risk. Once we have received your personal information, we will use strict procedures and security features to try to prevent unauthorised access.\n		<b id=\"cookies\">COOKIES</b>\n		This Website uses cookies to distinguish you from other users of the Website. This helps us to provide you with a good experience when you browse this Website and also allows us to improve our this Website. For detailed information on the cookies we use and the purposes for which we use them see our <a href=\"/cookies\">Cookie policy</a>\n		<b id=\"children\">CHILDREN</b>\n		This Website is not directed toward children under 13 years of age nor do we knowingly collect information from children under 13. If you are under 13 years of age, you are not permitted to submit any personal information to us.\n		<b id=\"cali_rights\">YOUR CALIFORNIA PRIVACY RIGHTS</b>\n		California Civil  Code  Section  1798.83 permits users of our Website that are California residents to request certain information regarding our disclosure of personal information to third parties for their direct marketing purposes. To make such a request, please send an e­mail to contact@wmeimg.com.\n		<b id=\"eu_rights\">YOUR EU AND OTHER PRIVACY RIGHTS</b>\n		Where provided under applicable law, you may request a copy of the personal information held by WME IMG, LLC about you and may ask about all recipients of the information, the purpose of the processing, request the correction of incorrect information, and request the blocking and deletion of such information by contacting us at <a href=\"mailto:contact@wmeimg.com\" target=\"_top\">contact@wmeimg.com.</a> We may require you to prove your identity with approved identification if you request this information. Any access request may be subject to a fee to provide you with details of the personal information we hold about you.\n		You have the right, where provided under applicable law, to ask us not to process your personal information.\n		<br><br>\n		You have the right, where provided under applicable law, to ask us not to process your personal information for direct marketing purposes. You can exercise your right to prevent such processing by checking certain boxes on the forms we use to collect your information or clicking \"unsubscribe\" on the emails you receive. You can also exercise the right at any time by contacting us at <a href=\"mailto:contact@wmeimg.com\" target=\"_top\">contact@wmeimg.com.</a>\n		We will retain your personal information for as long as needed to provide you with any services which you request. We will retain and use your personal information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.\n\n		<b id=\"choices\">YOUR CHOICES</b>\n		You may have the opportunity to receive certain communications from us related to the Website. If you provide us with your email address in order to receive communications, you can opt out at any time by using the unsubscribe links at the bottom of our emails.\n		Some browsers support a “Do Not Track” feature, which is intended to be a signal to websites that you do not wish to be tracked across different websites you visit. Certain legal obligations require that we disclose how websites we operate react to Do Not Track signals. The Website does not currently change the way it operates based upon detection of a Do Not Track or similar signal.\n		Please note that we cannot control how third party websites or online services you visit through Website respond to Do Not Track signals. Check the privacy policies of those third parties for information on their privacy practices.\n		<b id=\"security\">SECURITY</b>\n		We have implemented commercially reasonable technical and organisational procedures measures designed to secure your personal information from accidental loss and unauthorised access, use, alteration or disclosure. However, the internet is an open system and we cannot and do not guarantee or warrant the security of any information that you transmit on or through our Website or that we otherwise maintain.\n		<b id=\"third_party\">LINKS TO THIRD PARTY WEBSITES</b>\n		Our Website, our newsletters, email updates and other communications may, from time to time, contain links to and from the websites of others, including our partner networks, advertisers and affiliates. If you follow a link to any of these websites, please note that these websites have their own privacy policies and that we do not accept any responsibility or liability for these policies.\n		<b id=\"privacy_changes\">CHANGES TO OUR PRIVACY POLICY</b>\n		Any changes we may make to our Privacy Policy will be posted on this page. Please check back frequently to see any updates or changes to our Privacy Policy. If you do not agree or consent to these updates or changes, do not continue to use the Website.\n		<b id=\"contact_us\">CONTACT</b>\n		Questions, comments and requests regarding this Privacy Policy should be addressed to <a href=\"mailto:contact@wmeimg.com\" target=\"_top\">contact@wmeimg.com.</a>\n    </div>\n</div>\n<!--END CONTENT-->\n";
},"usePartial":true,"useData":true});

this["TEMPLATES"]["responsibility.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"page\" data-endpoint=\"/\">\n"
    + ((stack1 = container.invokePartial(partials.base,(depth0 != null ? depth0.model : depth0),{"name":"base","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});

this["TEMPLATES"]["story.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                        <a class=\"story-content__links__link feat-link\" href=\""
    + alias2(alias1((depth0 != null ? depth0.src : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.link_value : depth0), depth0))
    + "</a>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                    <p class=\"story-content__paragraph\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.content : depth0), depth0))
    + "</p>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                    <a class=\"story-content__links__link feat-link\" href=\""
    + alias2(alias1((depth0 != null ? depth0.src : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.link_value : depth0), depth0))
    + "</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};

  return "<div class=\"story-page\" data-endpoint=\"story\">\n<!-- HERO -->\n<div class=\"layout__hero\">\n</div>\n<!-- END HERO -->\n\n<!-- CONTENT -->\n<div class=\"layout__content\">\n	<div class=\"layout__content-wrapper our-story-main\">\n        <div class=\"story-content\">\n\n            <div class=\"story-content__body\">\n                <p class=\"story-content__paragraph\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.description : stack1), depth0))
    + "</p>\n\n                <div class=\"link-wrapper\">\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.top_links_section : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.paragraphs : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n\n            <div class=\"story-content__links\">\n                <h3 class=\"story-content__links__title\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.links_section : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h3>\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.links_section : stack1)) != null ? stack1.links : stack1),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n        </div>\n        <picture>\n            <!--[if IE 9]><video style=\"display: none;\"><![endif]-->\n            <source srcset=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.img : stack1)) != null ? stack1.src_mobile : stack1), depth0))
    + "\" media=\"(max-width: 768px)\" />\n            <!--[if IE 9]></video><![endif]-->\n            <img class=\"timeline-image\" src=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.img : stack1)) != null ? stack1.src_default : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.img : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" min-height=\"100px\" />\n        </picture>\n<!-- STORY-CONTENT MODULE END -->\n    </div>\n</div>\n<!--END CONTENT-->\n</div>\n";
},"useData":true});

this["TEMPLATES"]["entertainment.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"story-page-child\">\n"
    + ((stack1 = container.invokePartial(partials["story-child"],(depth0 != null ? depth0.model : depth0),{"name":"story-child","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});

this["TEMPLATES"]["fashion.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"story-page-child\">\n"
    + ((stack1 = container.invokePartial(partials["story-child"],(depth0 != null ? depth0.model : depth0),{"name":"story-child","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});

this["TEMPLATES"]["lifestyle.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!-- HERO -->\n<div class=\"layout__hero\">\n"
    + ((stack1 = container.invokePartial(partials["hero-module"],(depth0 != null ? depth0["lifestyle-hero"] : depth0),{"name":"hero-module","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n<!-- END HERO -->\n\n<!-- CONTENT -->\n<div class=\"layout__content\">\n	<div class=\"layout__content-wrapper\">\n"
    + ((stack1 = container.invokePartial(partials["story-content-module"],((stack1 = (depth0 != null ? depth0["lifestyle-page"] : depth0)) != null ? stack1.content : stack1),{"name":"story-content-module","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["story-gallery-module"],(depth0 != null ? depth0["lifestyle-gallery"] : depth0),{"name":"story-gallery-module","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </div>\n</div>\n<!--END CONTENT-->\n";
},"usePartial":true,"useData":true});

this["TEMPLATES"]["sports.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"story-page-child\">\n"
    + ((stack1 = container.invokePartial(partials["story-child"],(depth0 != null ? depth0.model : depth0),{"name":"story-child","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});

this["TEMPLATES"]["tos.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!-- CONTENT -->\n<div class=\"layout__content layout__content--legal tos\">\n    <div class=\"layout__content-wrapper\">\n"
    + ((stack1 = container.invokePartial(partials["legal-module"],(depth0 != null ? depth0.terms : depth0),{"name":"legal-module","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        Effective Date: October 20, 2016\n\n		<p><b>WME IMG, LLC  WEBSITE TERMS OF USE</b></p>\n\n		<p><b>ACCESS TO AND USE OF THIS WEBSITE IS PROVIDED BY WME IMG, LLC SUBJECT TO THE FOLLOWING TERMS AND CONDITIONS.</b></p>\n\n		<b>1.	Acceptance</b>www.img.com (the \"Website\") is a website operated by WME IMG LLC (\"WME IMG\"). WME IMG LLC is a limited liability company based in California at 9601 Wilshire Boulevard Beverly Hills, California 90210.\n		By visiting and using the Website, you agree, without limitation or qualification, to be bound by these terms and conditions of use (the “Terms of Use”), the WME IMG <a href=\"/privacypolicy\">Privacy Policy</a> (the “Privacy Policy”) and the WME IMG <a href=\"/cookiepolicy\">Cookies Policy </a> (the \"Cookies Policy\") incorporated herein by reference.\n		Where permitted by local law, WME IMG LLC reserves the right to modify or revise the Terms of Use, in its sole discretion, at any time. By visiting and using the Website, you agree to be bound by any and all subsequent modifications or revisions and to comply with any applicable laws and regulations. We recommend that Website users review the most up-to-date version of the Terms of Use periodically.\n		We do not guarantee that the Website, or the Contents (as described in more detail below), will always be available or be uninterrupted. We may suspend, withdraw, discontinue or change all or any part of the Website without notice. We will not be liable to you if for any reason the Website is unavailable at any time or for any period. You are responsible for making all arrangements necessary for you to have access to the Website. You are also responsible for ensuring that all persons who access the Website through your internet connection are aware of these Terms of Use and other applicable terms and conditions, and that they comply with them.\n		The materials provided on the Website are protected by applicable law, including, but not limited to, United States copyright laws and international treaties.\n		<b>2.	Personal Information</b>\n		The personal information you submit to WME IMG and which is collected from you is governed by the WME IMG <a href=\"/privacypolicy\">Privacy Policy</a> and <a href=\"/cookiepolicy\">Cookies Policy</a>. To the extent there is an inconsistency between these Terms of Use and the Privacy Policy and/or Cookies Policy, the Privacy Policy and/or Cookies Policy as applicable shall govern. You are responsible for providing information that is accurate, current and complete.\n		If you provide information that is not accurate, current or complete, or if WME IMG has reason to believe that information you provided is not accurate, current or complete, WME IMG has the right to prohibit you from any and all future use of the Website.\n		<b>3.	Use Restrictions</b>\n		The content on the Website, such as text, graphics, images, photographs, illustrations, trademarks, trade names, service marks, logos, information obtained from WME IMG licensors, and other materials (the “Contents”) is protected by intellectual property rights under both United States and foreign laws. Ownership of the Contents - in other words, ownership of all intellectual property rights in such Contents - remains with WME IMG or our licensors. All rights not expressly granted herein are reserved to WME IMG and its licensors. If you violate any of these Terms of Use, your permission to use the Contents automatically terminates and you must immediately destroy any copies you have made of any portion of the Contents.\n		Any use of the Contents not expressly permitted by these Terms of Use is a breach of these Terms of Use and may violate copyright, trademark and other laws.\n		Except as otherwise stated herein, you may not, without WME IMG’s written permission, “mirror” any Contents contained in the Website or any other server and you agree not to reproduce, duplicate, copy, sell, resell or exploit for any commercial purpose, any portion of the Website or the Contents other than as expressly authorized by WME IMG, LLC in writing. You may not use the Website for any purpose that is unlawful or prohibited by these Terms of Use, including to defame, harass, stalk, threaten, abuse or otherwise violate the rights of a third party as defined by applicable law.\n		WME IMG authorizes you to view and download a single copy of the Website and Contents. You agree that you will not remove or modify any acknowledgements, credits or legal notices contained on the Website or in the Contents. Where applicable, you shall include the following copyright notice: “Copyright © 2016, WME IMG, LLC. All rights reserved”.\n		Any special rules for the use of other items provided on the Website may be included elsewhere within the Website and are incorporated into these Terms of Use by reference. The use of the Contents on any other site or in a networked computer environment for any purpose is prohibited.\n		You may not use the Website in any manner that could damage, disable, overburden or impair the Website, or interfere with any other party’s use and enjoyment of the Website.  You may not attempt to gain unauthorized access to the Website through hacking, password mining or any other means.\n		WME IMG reserves the right, in its sole discretion, to terminate your access to the Website, or any portion thereof, at any time, if there is a justifiable reason, without prior notice or any notice.\n		If, for any reason, you create any derivatives, modifications or improvements to the Contents (\"Derivatives\"), all right, title and interest (including existing and future intellectual property rights) in such Derivatives (\"Derivative Rights\") vest in WME IMG immediately upon creation.  You hereby assign to WME IMG with full title guarantee all right, title and interest in all such Derivative Rights.  You represent and warrant that use by WME IMG or its licensees of the Derivative Rights will not infringe the intellectual property rights or other rights of any third party.  You must do all things and sign all documents necessary or desirable to give effect to this paragraph.\n		<b>4.	Submission of Ideas</b>\n		WME IMG does not accept submissions of any kind through the Website (e.g., materials, ideas, suggestions, know-how, or concepts, other than those expressly sought through permitted use of the Website) or otherwise. All submissions, other than those expressly sought through permitted use of the Website, may be deleted unread or destroyed, at WME IMG’s discretion. You hereby grant to WME IMG an irrevocable, perpetual, royalty-free license (including the right to sublicense to third parties) to exercise the intellectual property rights in any submissions made by you or on your behalf in connection with the Website (\"Licensed Submissions\").  You represent and warrant that use by WME IMG or its licensees of the Licensed Submissions will not infringe the intellectual property rights or other rights of any third party.\n		<b>5.	Hyperlinks from the Website</b>\n		The Website may contain hyperlinks to other websites and webpages (“Third-Party Pages”), as well as to text, graphics, videos, images, music, sounds, and information belonging to or originating from other third-parties (collectively, “Third-Party Applications”).  WME IMG does not investigate, monitor, or review any Third-Party Pages or Third-Party Applications to ensure their accuracy, completeness, or appropriateness.\n		WME IMG is not responsible for the Third-Party Pages or any Third-Party Applications accessed through the Website. The inclusion of any hyperlinks to any Third-Party Pages or Third-Party Applications on the Website does not indicate WME IMG’s approval or endorsement thereof. If you choose to leave the Website to access any Third-Party Pages or Third-Party Applications, you do so at your own risk.\n		<b>6.	No Reliance on Information</b>\n		The material and Contents on the Website are provided for general information only. It is not intended to amount to advice on which you should rely. You must obtain professional or specialist advice before taking, or refraining from, any action on the basis of the content on the Website.\n		Although WME IMG make reasonable efforts to update the information on the Website, WME IMG make no representations, warranties or guarantees, whether express or implied, that the information and/or Contents on the Website is accurate, complete or up-to-date.\n		<b>7.	Liability of WME IMG and Its Licensors and Partners</b>\n		The use of the Website and/or the Contents is at your own risk. The Contents of the Website could include technical inaccuracies or typographical errors.\n		WME IMG may update the Website and/or may change the Contents at any time. However, please note that any of the Content on the Website may be out of date at any given time, and WME IMG are under no obligation to update it. WME IMG do not guarantee that the Website, or any of the Contents on it, will be free from errors or omissions.\n		Subject to applicable law, WME IMG will not be liable to you for any loss or damage, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, even if foreseeable, arising under or in connection with use or inability to use, the Website, or use of or reliance on any Contents displayed on the Website.\n		WME IMG will not be liable for any loss or damage caused by a virus, distributed denial-of-service attack, or other technologically harmful material that may infect your computer equipment, computer programs, data or other proprietary material due to your use of the Website or to your downloading of any Contents on it, or on any website linked to it.\n		Except as otherwise expressly permitted herein, you agree not to use the Website for any commercial or business purposes, and subject to applicable law WME IMG have no liability to you for any loss of profit, loss of business, business interruption, or loss of business opportunity arising out of or related to your use, or the performance, of the Website.\n		To the extent permitted by applicable law, WME IMG exclude all conditions, warranties, representation or other terms which may apply to the Website or any Contents on it, whether express or implied.\n		Nothing in these Terms of Use excludes or limits WME IMG's liability for death or personal injury arising from negligence, or fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited by applicable law.\n		<b>8.	Indemnity</b>\n		You will be responsible for and will be liable to us and indemnify us against any loss or damage suffered by WME IMG as a result of your use of the Website or Contents other than as permitted under these Terms of Use.\n		You agree to indemnify us in full against any third party liabilities, claims, costs, loss or damage incurred as a result of any breach by you of these Terms of Use.\n		<b>9.	General</b>\n		WME IMG makes no claims that the Contents are appropriate or may be downloaded outside of the United States of America. Access to the Website and Contents may not be legal by certain persons or in certain countries.\n		If you access the Website and/or Contents from outside the United States, you do so at your own risk and are responsible for compliance with the laws of your jurisdiction.\n		The following provisions survive the expiration or termination of these Terms of Use for any reason whatsoever: Liability of WME IMG and its Licensors and Partners, No Reliance on Information, Use Restrictions, Submission of Ideas, Indemnity, Viruses, Trade Marks, Applicable Laws, Waiver and Severability and Complete Agreement.\n		<b>10.	Applicable Laws</b>\n		Subject to the provisions of applicable law, these Terms of Use are governed in accordance with the laws of New York, United States of America, without regard to its conflict of law provisions. You and WME IMG hereby expressly consent and submit to the exclusive jurisdiction of the state and federal courts of the Borough of Manhattan, New York, United States of America for the adjudication or disposition of any claim, action or dispute arising out of these Terms of Use.\u2028\n		<b>11.	Waiver and Severability </b>\n		If any provision of these Terms of Use is found to be invalid by any court having competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions of these Terms of Use, which shall remain in full force and effect. No waiver of any of these Terms of Use shall be deemed a further or continuing waiver of such term or condition or any other term or condition.\n		<b>12.	Notice and Take Down Procedures</b>\n		If you believe the Contents (or any part thereof) accessible on or from the Website infringes your intellectual property rights, you may request removal of those materials (or access thereto) from the Website by contacting WME IMG (address identified below) and providing the following information:\n		<ol>\n			<li>identification of the work that you believe to be infringed.  Please describe the work, and where possible include a copy or the location (e.g., URL) of an authorized version of the work;</li>\n			<li>identification of the Content that you believe to be infringing your intellectual property rights and its location. Please describe the Content, and provide us with its URL or any other pertinent information that will allow us to locate the Content;</li>\n			<li>your name, address, telephone number, and (if available) email address.</li>\n			<li>a statement that you have a good faith belief that the complained-of use of the work is not authorized by the intellectual property rights owner, its agent, or the law;</li>\n			<li>a statement that the information you have supplied is accurate, and indicating that “under penalty of perjury,” you are the intellectual property rights owner or authorized representative of the intellectual property rights owner;</li>\n			<li>a signature or the electronic equivalent from the intellectual property rights owner or authorized representative of the intellectual property rights owner.</li>\n		</ol>\n		Our address for intellectual property rights issues relating to the Website is as follows:\n		WME IMG\n		Attn: Debra Shuwarger\n		9601 Wilshire Blvd.\n		Beverly Hills, CA  90210\n		[copyrightagent@wmeentertainment.com]\u2028\n		In an effort to protect the rights of intellectual property rights owners, WME IMG maintains a policy for the termination, in appropriate circumstances, of users of the Website who are repeat infringers.\n		<b>13.	Trade Marks</b>\n		Unauthorized use of any WME IMG trademark, service mark or logo is prohibited, and may be a violation of federal and state trademark law.\n		<b>14.	Viruses</b>\n		We do not guarantee that the Website will be secure or free from bugs or viruses.\n		You are responsible for configuring your information technology, computer programs and platform in order to access the Website. You should use your own virus protection software.\n		You must not misuse the Website by knowingly introducing viruses, trojans, worms, logic bombs or other material which is malicious or technologically harmful. You must not attempt to gain unauthorised access to the Website, the server on which the Website is stored or any server, computer or database connected to the Website. You must not attack the Website via a denial-of-service attack or a distributed denial-of service attack. By breaching this provision, you may be committing a criminal offence under applicable law. WME IMG will report any such breach to the relevant law enforcement authorities and will co-operate with those authorities by disclosing your identity to them. In the event of such a breach, your right to use the Website will cease immediately.\n		<b>15.	Complete Agreement</b>\n		Except as expressly provided in a particular notice or disclaimer posted by or on behalf of WME IMG on the Website, these Terms of Use, including the WME IMG Privacy Policy and Cookies Policy, constitute the entire agreement between you and WME IMG with respect to the use of the Website and Contents.\n		<b>16.	Contact Us	</b>\n			To contact us, please email <a href=\"mailto:contact@wmeimg.com\" target=\"_top\">contact@wmeimg.com.</a>\n\n    </div>\n</div>\n<!--END CONTENT-->\n";
},"usePartial":true,"useData":true});
(function() {

function Application() {
    this._activeComponents = [];
    this._componentRegistry = [];
    this._componentNameRegistry = {};
}

Application.prototype = {
    /**
        Register component view to element className

        @method registerComponent
        @param name String         Element className
        @param view Backbone.View  View class
    */
    registerComponent : function (name, view) {
        var selector = '.' + name;
        var component = {
            name : name,
            selector : selector,
            view : view
        };

        this._componentRegistry.push(component);
        this._componentNameRegistry[name] = component;
        setTimeout(_.bind(this.bindComponent, this, component), 0);
    },

    /**
        Bind all registered components to DOM

        @method bindAllComponents
    */
    bindAllComponents : function () {
        _.each(this._componentRegistry, _.bind(this.bindComponent, this));
    },

    /**
        Bind component view to DOM element
        If a string is passed, the component configuration will be looked up from the registry

        @method bindComponent
        @param component Object|String  Configuration or name
    */
    bindComponent : function (component) {
        var activeComponents = this._activeComponents;

        if (typeof component === 'string') {
            component = this._componentNameRegistry[component];
        }

        $(component.selector).each(function (i, element) {
            var $element = $(element);
            if ($element.data('view-id')) { return; }

            var view = new component.view({
                el : element
            });

            view._id = activeComponents.push(view);
            $element.data('view-id', view._id);
        });
    },

    handleExternalLinks: function () {
        $('a').each(function() {
            var a = new RegExp('/' + window.location.host + '/');

            if (!a.test(this.href)) {
                $(this).on('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(this.href, '_blank');
                });
            }
        });
    }
};

window.App = new Application();
App.window = $(window);
App.document = $(document);
App.handleExternalLinks();

// if (App.window.width() > 1024) {
    App.wow = (new WOW({
                    boxClass: 'animate',
                    offset: 80,
                    mobile: false
                })).init();
// }


})();

(function() {

/*global NodePoint:true, THREE */

NodePoint = (function () {
    return function NodePoint (material) {
        return new THREE.Sprite(material);
    };
})();

NodePoint.prototype = Object.create(Object);
NodePoint.prototype.constructor = NodePoint;


})();

(function() {

/*global NodePoint, THREE, PointTrio:true */


})();

(function() {

PointTrio = function () {
  //  var color = 'rgba(255,255,255,0)';
    var width = 1;
    var height = 1;
   // var material = createCVMats(color, 'rgba(5,118,174,0)');
    var group = new THREE.Object3D();
    group.position.x = (Math.random() * 2 - 1);
    group.position.y = Math.random() * 2 - 1;
    group.position.z = Math.random() * 2 - 1;
    group.position.normalize();
    group.position.multiplyScalar( Math.random() * 10 + 250 );
    group.scale.multiplyScalar( 10 );
    group.position.z = -2;
    //var closed = Math.random();
    var closed = 1;
    group.directionX = Math.random();
    if (group.directionX < 0.5) {
        group.directionX = -1;
    } else {
        group.directionX = 1;
    }
    group.directionY = Math.random();
    if (group.directionY < 0.5) {
        group.directionY = -1;
    } else {
        group.directionY = 1;
    }
    group.vX = Math.random() / 10  * group.directionX;
    group.vY = Math.random() / 10 * group.directionY;
    group.vRotX = Math.random() / 200;// 0.005;
    group.vRotY = Math.random() / 200;//0.007;
    group.vRotZ = Math.random() / 200;//0.003;
    group.opacityOffset = Math.random() * 3.14;
  //  var lineMaterial = new THREE.LineBasicMaterial({color: '#28cdbd', opacity:0, transparent:true});
    var trianlgeLineGeometry = new THREE.Geometry();
    //var type = Math.round(Math.random() * 2) + 2;
    var type = 3;
    for (var i = 0; i<type; i++) {
        var particle = new NodePoint( );
       // particle.material.useScreenCoordinates = true;
        particle.material.opacity = 0;
        particle.position.x = (Math.random() * 2 - 1);
        particle.position.y = Math.random() * 2 - 1;
        particle.position.z = -1;
        particle.position.normalize();
        particle.position.multiplyScalar( Math.random() * 12 );
        particle.scale.multiplyScalar( 2 );
        particle.scale.set( width, height, 1 );

        trianlgeLineGeometry.vertices.push(particle.position);
        if(i === 2 && closed > 0.5) {
            trianlgeLineGeometry.vertices.push(trianlgeLineGeometry.vertices[0]);
        }
        group.add(particle);
    }

    trianlgeLineGeometry.faces.push( new THREE.Face3( 0, 1, 2 ) );
    var object = new THREE.Mesh( trianlgeLineGeometry, new THREE.MeshNormalMaterial({side: THREE.DoubleSide, depthWrite: false, transparent:true, opacity: 0.07}) );
    object.material.depthTest = false;
    object.material.depthWrite = false;
    group.triangle = object;
    group.add(object);
   // var trianlgeLine = new THREE.Line( trianlgeLineGeometry, lineMaterial );
   // group.add( trianlgeLine );
    this.group = group;

    // function createCVMats(color, color2, color3) {
    //     var canvas = document.createElement('canvas');
    //     canvas.width = 300;
    //     canvas.height = 300;
    //     var context = canvas.getContext('2d');
    //     var gradient = context.createRadialGradient(150,150,150,150,150,0.1);
    //     gradient.addColorStop(0,'transparent');
    //     gradient.addColorStop(0.35,color3||color2);
    //     gradient.addColorStop(0.95,color2);
    //     gradient.addColorStop(0.95,color);
    //     gradient.addColorStop(1,color);
    //     context.fillStyle = gradient;
    //     context.fillRect(0,0,300,300);
    //     var texture = new THREE.Texture(canvas);
    //     texture.needsUpdate = true;
    //     //webGL doesnt support Sprite Canvas Material
    //     var material = new THREE.SpriteMaterial( { map: texture } );
    //     return material;
    // }
};

PointTrio.constructor = PointTrio;
PointTrio.prototype = Object.create(Object);


})();

(function() {

/*global WebPoint:true, NodePoint, THREE */
/*jshint maxparams:4 */


})();

(function() {

WebPoint = function (groupOptions, particleOptions) {
    var color = groupOptions.baseColor || '#ffffff';
    var hoverColor= groupOptions.hoverColor || '#ffffff';

    var material, hoverMaterial, mutedMaterial;
    if( groupOptions.isCV ) {
        material = createCVMats(color, 'rgba(5,118,174,0.2)', 'rgba(5,118,174,0.1)','rgba(5,118,174,0.02)');
        hoverMaterial = createCVMats(color, 'rgba(5,118,174,0.22)','rgba(5,118,174,0.12)','rgba(5,118,174,0.02)');
        mutedMaterial = createCVMats('#28cdbd', 'rgba(5,118,174,0)', 'rgba(5,118,174,0)','rgba(5,118,174,0)');
    } else {
        material = createCVMats(color, 'rgba(255,255,255,0.08)', 'rgba(255,255,255,0.01)','rgba(255,255,255,0)');
        hoverMaterial = createCVMats(hoverColor, 'rgba(255,255,255,0.135)', 'rgba(255,255,255,0.04)','rgba(255,255,255,0.01)');
    }

    var width = 30;
    var height = 30;

    var particle = new NodePoint( material );
    particle.material.useScreenCoordinates = true;
    particle.position.x = (Math.random() * 2 - 1);
    particle.position.y = Math.random() * 2 - 1;
    particle.position.z = Math.random() * 2 - 1;
    particle.position.normalize();
    particle.position.multiplyScalar( Math.random() * 10 + 100 );
    particle.defaultMaterial = material;
    particle.hoverMaterial = hoverMaterial;
    particle.scale.multiplyScalar( 2 );
    particle.scale.set( width, height, 1 );
    particle.startPosition = [particle.position.x, particle.position.y, particle.position.z];

    particle.isParticle = true;
    if (particleOptions) {
        if ( particleOptions.url ) {
            particle.link = particleOptions.url;
        }
        if ( particleOptions.cv ) {
            particle.cv = particleOptions.cv;
            particle.connections = particleOptions.connections;
            particle.mutedMaterial = mutedMaterial;
        } else {
            particle.cVParents = particleOptions.cVParents;
        }
    }
    particle.hovered = false;
    particle.active = false;
    particle.isHome = true;
    particle.outOfBounds = false;
    particle.vx = 0;
    particle.vy = 0;
    particle.vz = 0;
    particle.ax=0;
    particle.ay=0;
    particle.az=0;
    particle.spawnerOptions = {
        horizontalSpeed: Math.random() * 5,
        verticalSpeed: Math.random() * 8,
        timeScale: 0.5
    };

    this.sprite = particle;

    function createCVMats(color, color2, color3, color4) {
        var canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        var context = canvas.getContext('2d');
        var gradient = context.createRadialGradient(128,128,128,128,128,0.1);
        // context.rect(0, 0, 200, 200);
        // context.fillStyle = 'rgba(255,255,255,0.7)';
        // context.fill();
        gradient.addColorStop(0,'rgba(0,0,0,0)');
        gradient.addColorStop(0.15,color4);
        gradient.addColorStop(0.45,color3);
        gradient.addColorStop(0.96,color2);
        gradient.addColorStop(0.96,color);
        gradient.addColorStop(1,color);
        context.webkitEnableImageSmoothing = false;
        context.mozEnableImageSmoothing = false;
        context.enableImageSmoothing = false;
        context.fillStyle = gradient;
        context.fillRect(0,0,256,256);
        var texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;
        //webGL doesnt support Sprite Canvas Material
        var material = new THREE.SpriteMaterial( { map: texture } );
        return material;
    }
};

WebPoint.constructor = WebPoint;
WebPoint.prototype = Object.create(Object);


})();

(function() {

(function ($, backbone, app) {
    var DropdownListModel = backbone.Model.extend({});
    var AgentResultsModel = backbone.Model.extend({});
    var FormButtonModel = backbone.Model.extend({});

    var agentFinderModule = backbone.View.extend({

        initialize: function () {

            this.PARAMS = [
                { type: 'continents', slug: 'continent_id', list: null, select: null, selectedByUser: null, dropdown: null },
                { type: 'categories', slug: 'category_id', list: null, select: null, selectedByUser: null, dropdown: null },
                { type: 'countries', slug: 'country_id', list: null, select: null, selectedByUser: null, dropdown: null },
                { type: 'states', slug: 'state_id', list: null, select: null, selectedByUser: null, dropdown: null }
            ];

            this.CHOICES_API_PREFIX = '/choices?format=json';
            this.AGENTS_API_PREFIX = '/agents?format=json';

            this.PRELOADER = new App._componentNameRegistry.preloader.view();
            this.BUTTONS_CONTAINER = this.$el.find('.agent-finder-buttons');
            this.FORM = this.$el.find('.agent-finder-form');
            this.RESULTS = this.$el.find('.agent-results-container');

            this.render();
            this.queryStringCategory = this.getParameterByName('category');
            if (this.queryStringCategory) {
                this.categoriesButtonClick(this.queryStringCategory);
            }
        },

        getParameterByName: function(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        },

        render: function () {

            var _this = this,
                dropdownLists = this.PARAMS.filter(function (param) { return param.list; });

            this.BUTTONS_CONTAINER.append( this.createButton('continents').render().el );
            this.BUTTONS_CONTAINER.append( this.createButton('categories').render().el );

            dropdownLists.map(function (list) {
                _this.createCategoryDropdown(list.type);
            });

            if (this.AGENTS) {

                this.agentResultsComponents = this.createAgentResultsComponents();
                this.agentResultsComponents.forEach( function (component) {
                    _this.RESULTS.append( component.render().el );
                });

                this.RESULTS.addClass('has-agents');

                if (!this.nextCategory) {
                    scrollToAgents();
                }
            }
        },



        /* ------------ Event Methods ------------ */

        continentsButtonClick: function () {
            this.removeExistingListsFor('all');

            this.continentsSelected = true;
            this.categoriesSelected = false;

            this.$el.find('.button-categories').removeClass('active');
            this.$el.find('.button-continents').addClass('active');

            if (this.AGENTS) { this.removeExistingAgents(); }

            this.fetchCategory('continents');
        },

        categoriesButtonClick: function (queryStringCategory) {
            this.removeExistingListsFor('all');

            this.continentsSelected = false;
            this.categoriesSelected = true;

            this.$el.find('.button-continents').removeClass('active');
            this.$el.find('.button-categories').addClass('active');

            if (this.AGENTS) { this.removeExistingAgents(); }

            this.fetchCategory('categories', null, queryStringCategory);
        },

        fetchAgents: function () {

            var _this = this,
                url = this.AGENTS_API_PREFIX + getApiParams(this.PARAMS);

            if (this.AGENTS) { this.removeExistingAgents(); }

            $.ajax({
                url: url,
                beforeSend: function () { _this.PRELOADER.addTo( _this.RESULTS ); },
                success: function (result) {
                    setTimeout(function () {

                        _this.PRELOADER.removeFrom(_this.RESULTS);

                        _this.AGENTS = result.results;
                        _this.render();
                    }, 500);
                }
            });
        },

        fetchCategory: function (type, param, queryString) {

            var url = this.CHOICES_API_PREFIX + getApiParams(this.PARAMS);

            var _this = this;

            if (this.ERROR_MESSAGE) { this.ERROR_MESSAGE.remove(); }

            $.ajax({
                url: url,
                beforeSend: function () { _this.PRELOADER.addTo( _this.FORM ); },
                success:function(result){ setTimeout(function () {
                    _this.PRELOADER.removeFrom(_this.FORM);

                    var results = param ? result.results[type + param] : result[type];

                    try {
                        _this.createListFromResultsFor(type, results);
                        if (queryString) {
                            var obj = results.find(function(item) {
                                return item[0].toLowerCase() === queryString;
                            });
                            //FIXME integrate this with dropdown init
                            _this.$el.find('.categories').addClass('selected');
                            _this.$el.find('.categories .form__toggle').text(obj[0]);
                            _this.selectionClick('categories', obj[1], queryString);
                        }
                    }
                    catch (err) { _this.handleLoadError(err); }

                }, 500); }
            });

        },

        handleLoadError: function (error) {

            var errorModel = new backbone.Model({
                errorMessage: 'We were unable to find agents for this option. Please try another option or try again later.'
            });

            this.ERROR_MESSAGE = new App._componentNameRegistry.errorMessage.view({model: errorModel});

            this.FORM.append(this.ERROR_MESSAGE.render().el);
        },

        selectionClick: function (category, id, name) {
            var index = this.getParamIndexFor(category);

            this.PARAMS[index].selectedByUser = true;
            this.selectionMade(category, id, name);
        },

        selectionMade: function (category, id, name) {

            var categoryToFetch, categoryListToClear;

            var index = this.getParamIndexFor(category);

            this.PARAMS[index].select = {
                id: id,
                value: name
            };

            switch (category) {

            case 'continents':

                if (this.continentsSelected) {
                    categoryToFetch = categoryListToClear = 'categories';
                } else {
                    categoryToFetch = categoryListToClear = 'countries';
                }

                break;

            case 'categories':
                if (this.categoriesSelected) {
                    categoryToFetch = categoryListToClear = 'continents';
                } else {
                    categoryToFetch = categoryListToClear = 'countries';
                }

                break;

            case 'countries':

                var countryName = name.replace(/\s+/g, '').toLowerCase();
                var currentStateSelection = this.getParamObject('states').list;

                if (countryName === 'unitedstates' || countryName === 'canada') {

                    categoryToFetch = categoryListToClear = 'states';

                } else if (currentStateSelection) {

                    categoryListToClear = 'states';

                }

                break;

            default:
                break;
            }

            this.resultsDisplayCategory = category;
            this.nextCategory = categoryToFetch;

            if (this.AGENTS) {
                this.removeExistingAgents();
            }

            if (categoryListToClear) {
                this.removeExistingListsFor(categoryListToClear);
            }

            if (categoryToFetch) {
                this.fetchCategory(categoryToFetch);
            } else {
                this.fetchAgents();
            }

        },

        /* ------------ End Event Methods ------------ */





        /* ------------ Create Methods ------------ */

        createAgentResultsComponents: function () {
            var lastParamSet = this.getParamObject(this.resultsDisplayCategory),
                nextCategory = this.getParamObject(this.nextCategory),
                _this = this;

            var agentResultsModels = [],
                model;

            if (this.nextCategory ) {
                agentResultsModels = nextCategory.list.map(function (listItem) {

                    var itemName = listItem.displayValue || listItem.key,
                        itemValue = listItem.value,
                        agentList = _this.AGENTS.filter(function (agent) {
                            return agent[nextCategory.type].indexOf(listItem.key) > -1;
                        });

                    if (agentList && itemName) {
                        var category = _this.getParamObject('categories').select.value;
                        var viewName = 'agentResults';

                        model = new AgentResultsModel({
                            heading: itemName,
                            category: category,
                            agents: agentList
                        });

                        var itemNameMin = itemName.replace(/\s+/g, '').toLowerCase();
                        if (itemNameMin === 'unitedstates' || itemNameMin === 'canada') {

                            viewName = 'agentSubResults';

                            model = new AgentResultsModel({
                                url: _this.CHOICES_API_PREFIX + getApiParams(_this.PARAMS) + '&country_id=' + itemValue,
                                filterType: 'states',
                                heading: itemName,
                                category: category,
                                agents: agentList
                            });
                        }

                        return new App._componentNameRegistry[viewName].view({model: model});
                    }
                });
            } else {
                model = new AgentResultsModel({
                        heading: lastParamSet.select.value,
                        category: this.getParamObject('categories').select.value,
                        agents: this.AGENTS
                    });

                agentResultsModels.push( new App._componentNameRegistry.agentResults.view({model: model}) );
            }


            return agentResultsModels;
        },

        createButton: function (type) {
            var currentButton = this[type + 'Button'],
                clickFunction = this[type + 'ButtonClick'].bind(this),
                selected = this[type + 'Selected'];

            if (currentButton) {
                currentButton.remove();
            }

            var newButton = new App._componentNameRegistry.formButton.view({
                model: new FormButtonModel({
                        type: type,
                        text: type === 'categories' ? 'Category' : 'Location',
                        onClick: clickFunction,
                        selected: selected
                    })
                }
            );
            this[type + 'Button'] = newButton;
            return newButton;
        },
        setDropdownLabel: function(label) {
            return label;
        },
        createCategoryDropdown: function (type) {
            // console.log('createCategoryDropdown', type);
            var paramObject = this.getParamObject(type);

            // console.log('dropdown already exists?', paramObject.dropdown);
            if (paramObject.dropdown) {
                return;
            }

            var label = paramObject.type;
            if (type === 'states') {
                if (this.getParamObject('countries').select.value.toLowerCase() === 'canada') {
                    label = 'Provinces';
                }
            }

            var dropdownListModel = new DropdownListModel({
                label: label,
                type: type,
                options: paramObject.list,
                preselectedOption: label === 'categories' ? this.queryStringCategory : null,
                selectionMade: this.selectionClick.bind(this)
            });

            var form = new App._componentNameRegistry.dropdown.view({model: dropdownListModel});

            this.FORM.append( form.render().el );

            var index = this.getParamIndexFor(type);
            this.PARAMS[index].dropdown = form;
        },

        createListFromResultsFor: function (type, results, madeChoice) {

            var index = this.getParamIndexFor(type),
                sortedResults = results.sort(function (a,b) {
                    var val;
                    if (a[0] > b[0]) {
                        val = 1;
                    } else if (a[0] < b[0]) {
                        val = -1;
                    } else {
                        val = 0;
                    }
                    return val;
                });

            // IMPORTANT - checks to see if list has more than one option; if not, we make a request to render agents immediately
            if ( sortedResults.length === 1 ) {
                var selectionName = results[0][0],
                    selectionId = results[0][1];

                if (selectionName.toLowerCase() === 'other') {
                    selectionName = this.getOtherCategoryDisplayNameFor('continents');
                }

                this.selectionMade(type, selectionId, selectionName);

            } else {
                var categoriesSelectedByUser = 0;

                sortedResults = sortedResults.filter(function (result) {
                    return result[0] && result[1];
                }).map(function (result) {
                    return {
                        key: result[0],
                        value: result[1]
                    };
                });

                // ------------------------------------------------------------------------ //
                // manually pushing any category with the name "other" to the bottom of the list
                // and renaming it
                // ------------------------------------------------------------------------ //

                    var resultsWithCategoryCalledOther = sortedResults.filter(function (result) {
                        return result.key.toLowerCase() === 'other';
                    })[0];

                    if (resultsWithCategoryCalledOther) {
                        var renamedObject = sortedResults.splice(sortedResults.indexOf(resultsWithCategoryCalledOther), 1)[0];
                        renamedObject.displayValue = this.getOtherCategoryDisplayNameFor('continents');
                        sortedResults.splice( sortedResults.length, 0, renamedObject);

                    }

                // ------------------------------------------------------------------------ //


                this.PARAMS[index].list = sortedResults;

                this.PARAMS.map(function (param) {
                    if(param.selectedByUser) {
                        categoriesSelectedByUser++;
                    }
                });

                if (categoriesSelectedByUser >= 2) {
                    this.fetchAgents();
                } else {
                    this.render();
                }
            }
        },

        /* ------------ End Create Methods ------------ */


        /* ------------ Removal Methods ------------ */

        removeErrorMessage: function () {
            if (this.ERROR_MESSAGE) {
                this.ERROR_MESSAGE.remove();
                this.ERROR_MESSAGE = null;
            }
        },

        removeExistingAgents: function () {
            this.agentResultsComponents.forEach(function (list) {
                list.remove();
            });

            this.agentResultsComponents = null;
            this.AGENTS = null;
            this.RESULTS.removeClass('has-agents');
        },

        removeExistingListsFor: function (type) {

            var listIndexesToRemove = [];

            switch (type) {
                case 'all':
                    listIndexesToRemove = [
                        this.getParamIndexFor('continents'),
                        this.getParamIndexFor('categories'),
                        this.getParamIndexFor('countries'),
                        this.getParamIndexFor('states')
                    ];
                    break;

                case 'continents':
                    listIndexesToRemove = [
                        this.getParamIndexFor('continents'),
                        this.getParamIndexFor('countries'),
                        this.getParamIndexFor('states')
                    ];
                    if (this.continentsSelected) {
                        listIndexesToRemove.push( this.getParamIndexFor('categories') );
                    }
                    break;
                case 'categories':
                    listIndexesToRemove = [
                        this.getParamIndexFor('categories'),
                        this.getParamIndexFor('countries'),
                        this.getParamIndexFor('states')
                    ];
                    if (this.categoriesSelected) {
                        listIndexesToRemove.push( this.getParamIndexFor('continents') );
                    }
                    break;
                case 'countries':
                    listIndexesToRemove = [
                        this.getParamIndexFor('countries'),
                        this.getParamIndexFor('states'),
                    ];
                    break;
                case 'states':
                    listIndexesToRemove = [
                        this.getParamIndexFor('states')
                    ];
                    break;
                default:
                    break;
            }

            var _this = this;
            listIndexesToRemove.forEach( function (index) {
                var existingDropdown = _this.PARAMS[index].dropdown;
                var existingSelection = _this.PARAMS[index].select;
                if ( existingDropdown ) {

                    if (_this.PARAMS[index].selectedByUser) {
                        _this.PARAMS[index].selectedByUser = false;
                    }

                    existingDropdown.remove();
                    _this.PARAMS[index].dropdown = null;
                    _this.PARAMS[index].list = null;
                }
                if ( existingSelection ) {
                    _this.PARAMS[index].select = null;
                }
            });

        },

        remove: function () {
            // app.document.off('click');
            Backbone.View.prototype.remove.call(this);
        },

        /* ------------ End Removal Methods ------------ */




        /* ------------ Getter Methods ------------ */

        getOtherCategoryDisplayNameFor: function (type) {
            return 'General ' + this.getParamObject(type).select.value + ' Inquiries';
        },

        getParamObject: function (type) {
            var objects = this.PARAMS.filter( function (param) {
                return param.type === type;
            });

            if (objects) {
                return objects[0];
            } else {
                return null;
            }
        },

        getParamIndexFor: function (type) {
            var paramNames = this.PARAMS.map(function (param) {
                return param.type;
            });

            return paramNames.indexOf(type);
        },

        /* ------------ End Getter Methods ------------ */



    });

    function getApiParams (array) {
        var params = array.filter( function (param) {
            return param.select;
        }).map(function (param) {
            return param.slug + '=' + param.select.id;
        });

        var paramString = (params.length > 0 ? '&' : '') + params.join('&');
        // console.log(paramString);
        return paramString;
    }

    function scrollToAgents () {
        var top = $('.results-list').offset().top,
            windowHeight = $(window).height(),
            documentHeight = $(document).height(),
            scrollPosition = top - 150;

        if (scrollPosition + windowHeight > documentHeight) {
            scrollPosition = documentHeight - windowHeight;
        }
        // console.log(top, height, documentHeight, scrollPosition);

        $('body').animate({
            scrollTop: scrollPosition
        }, 1000);
    }

    app.registerComponent('agent-finder', agentFinderModule);
})(jQuery, Backbone, App);


})();

(function() {

(function ($, backbone, app) {
    var agentResultsModule = backbone.View.extend({

        template: TEMPLATES['agent-results.hbs'],

        className: 'agent-results',

        render: function () {
            this.$el.html(this.template({
                heading: this.model.get('heading'),
                subheading: this.model.get('subheading')
            }));

            if (this.model.get('agents')) {

                var _this = this;
                this.model.get('agents').forEach( function (agent) {
                    var agentModel = new backbone.Model({
                        agent: agent,
                        category: _this.model.get('category')
                    });
                    var agentView = new App._componentNameRegistry.agent.view({model: agentModel});
                    _this.$el.find('.results-list').append( agentView.render().el );
                });
            }

            return this;
        },

        /**
         * @description
         * Remove bound DOM events when the view changes.
         *
         * @return void
         * @public
         */
        remove: function () {
            Backbone.View.prototype.remove.call(this);
        },
    });

    app.registerComponent('agentResults', agentResultsModule);
})(jQuery, Backbone, App);


})();

(function() {


(function ($, backbone, app) {
    var agentSubResults = backbone.View.extend({

        template: TEMPLATES['agent-sub-results.hbs'],

        className: 'agent-sub-results',

        render: function () {

            this.$el.html(this.template({
                heading: this.model.get('heading')
            }));

            var _this = this;

            if (!this.AGENTS) {
                $.ajax({
                    url: _this.model.get('url'),
                    success: function (result) {

                        var filterItems = result[_this.model.get('filterType')].map(function (result) {
                            return result[0];
                        });
                        _this.addFilteredAgents(filterItems);
                    }
                });
            } else {
                this.AGENTS.forEach(function (agent) {
                    _this.$el.find('.sub-results-list').append( agent.render().el );
                });
            }


            return this;
        },

        addFilteredAgents: function (filters) {

            if (!filters) {
                return;
            }

            var _this = this,
                agents = this.model.get('agents');

            filters = filters.sort();

            this.AGENTS = filters.map( function (filter) {
                var agentResultsModel = new backbone.Model({
                    subheading: filter,
                    category: _this.model.get('category'),
                    agents: agents.filter(function (agent) {
                        return agent[_this.model.get('filterType')].indexOf(filter) > -1;
                    })
                });

                return new App._componentNameRegistry.agentResults.view({model: agentResultsModel});
            });

            this.render();
        },

        /**
         * @description
         * Remove bound DOM events when the view changes.
         *
         * @return void
         * @public
         */
        remove: function () {
            Backbone.View.prototype.remove.call(this);
        },
    });

    app.registerComponent('agentSubResults', agentSubResults);
})(jQuery, Backbone, App);


})();

(function() {


(function ($, backbone, app) {
    var agentModule = backbone.View.extend({

        template: TEMPLATES['agent.hbs'],

        className: 'grid-result animate',

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template({
                agent: this.model.get('agent'),
                heading: this.model.get('category')
            }));

            return this;
        },

        /**
         * @description
         * Remove bound DOM events when the view changes.
         *
         * @return void
         * @public
         */
        remove: function () {
            // app.document.off('click');
            Backbone.View.prototype.remove.call(this);
        },
    });

    app.registerComponent('agent', agentModule);
})(jQuery, Backbone, App);


})();

(function() {

/*jshint camelcase: false */
(function ($, backbone, app) {
    var articleModule = backbone.View.extend({

        template: TEMPLATES['article-feed-module.hbs'],

        events: {
            'mouseleave .grid': 'onLeaveGrid',
            'mouseenter .grid': 'onEnterGrid'
        },

        initialize: function () {

        },

        onEnterGridItem: function (event) {
            this.$('.grid-image-full').attr('src', event.target.src);
        },
        onEnterGrid: function (event) {
            this.$(event.target).closest('.article-feed__image').addClass('active');
            this.$('.grid-image-full').attr('src', this.$(event.target).closest('.grid-image').attr('src'));
        },
        onLeaveGrid: function (event) {
            this.$(event.target).closest('.article-feed__image').removeClass('active');
        },

        randomize: function(model, num) {
            var groups = [];
            var images = [[],[]];
            if (model.left_images.length) {
                groups.push(model.left_images);
            }
            if (model.right_images.length) {
                groups.push(model.right_images);
            }
            groups.forEach(function(item, idx){
                var length = item.length;
                for (var i = 0; i < num; i++) {
                    var imgIdx = Math.floor(Math.random() * (length-i));
                    var copy = Object.assign({}, item[imgIdx]);
                    images[idx].push(copy);
                    item.splice(imgIdx, 1);
                }

            });
            return images;
        },

        render: function() {
            var model = this.model.get('model');
            var num = model.use_image_grid ? 4 : 1;
            var images = this.randomize(model, num);
            var hasImages = images[0].length > 0 || images[1].length > 0;
            var single = images[0].length === 0 || images[1].length === 0;
            this.$el.html(this.template({
                is_grid: model.use_image_grid,
                leftImages: images[0],
                rightImages: images[1],
                top_text: model.top_text,
                title: model.title,
                links: model.links,
                single: single,
                hasImages: hasImages,
                bottom_text: model.bottom_text
            }));
            this.$el = this.$el.children();
            this.$el.unwrap();
            this.setElement(this.$el);
        },

        /**
         * @description
         * Remove bound DOM events when the view changes.
         *
         * @return void
         * @public
         */
        remove: function () {
            app.document.off('click');
            Backbone.View.prototype.remove.call(this);
        },
    });

    app.registerComponent('article', articleModule);
})(jQuery, Backbone, App);


})();

(function() {

(function ($, backbone, app) {
    var collapsableModule = backbone.View.extend({
        isOpen: false,
        events: {
            'click .toggleOpen': 'onToggleOpen',
        },

        onToggleOpen: function() {
            var _this = this;
            if (this.isOpen) {
                this.$('.toggleOpen').html('<span>+</span> Explore Additional Locations <span>+</span>');
                this.isOpen = false;
                window.setTimeout(function(){
                    _this.$el.toggleClass('isOpen');
                },400);
                this.$('.inner').toggleClass('isOpen');
            } else {
                this.isOpen = true;
                this.$('.toggleOpen').html('<span>-</span> Explore Fewer Locations <span>-</span>');
                window.setTimeout(function(){
                    _this.$('.inner').toggleClass('isOpen');
                },100);
                this.$el.toggleClass('isOpen');
            }

        },

        /**
         * @description
         * Remove bound DOM events when the view changes.
         *
         * @return void
         * @public
         */
        remove: function () {
            app.document.off('click');
            Backbone.View.prototype.remove.call(this);
        },
    });

    app.registerComponent('collapsable', collapsableModule);
})(jQuery, Backbone, App);


})();

(function() {

/*jshint camelcase: false */
(function ($, backbone, app) {

    var contactPage = backbone.View.extend({

        initialize: function () {
            this.CONTACT_HERO_API_URL = '/heros/contact?format=json';
            this.fetchData();
        },

        fetchData: function () {
            var _this = this;
            $.ajax({
                url: this.CONTACT_HERO_API_URL,
                success: function (result) {
                    _this.renderHero(result);
                }
            });
        },

        renderHero: function(hero) {
            var heroModel = new backbone.Model({
                model: hero
            });
            var heroModule = new App._componentNameRegistry.hero.view({model: heroModel});
            heroModule.render();
            this.$el.find('.layout__hero').append(heroModule.el);
            if (hero.page_intro) {
            	this.$el.find('.layout__content-description').html(hero.page_intro);
            }

        },
    });

    app.registerComponent('contact', contactPage);
})(jQuery, Backbone, App);


})();

(function() {

(function ($, backbone, app) {

    var contactPopUpModule = backbone.View.extend({

        events: {
            'click .notification__info': 'onDismiss',
        },

        initialize: function () {
            this.$el.addClass('active');
        },

        /**
         * @description
         * Remove bound DOM events when the view changes.
         *
         * @return void
         * @public
         */
        remove: function () {
            app.document.off('click');
            Backbone.View.prototype.remove.call(this);
        },

        /**
         * @description
         * On dismiss fn.
         *
         * @return void
         * @public
         */
        onDismiss: function () {
            this.$el.addClass('fade');
            $('body').addClass('consented');
            var _this = this;
            var timeout = setTimeout(function () {
                _this.$el.removeClass('fade active');
                clearTimeout(timeout);
            }, 800);
        }
    });

    app.registerComponent('consent', contactPopUpModule);
})(jQuery, Backbone, App);


})();

(function() {

(function ($, backbone, app) {
	var DropdownListModel = backbone.Model.extend({});
	var AgentResultsModel = backbone.Model.extend({});

	var contactsFinderModule = backbone.View.extend({

		initialize: function () {
			this.CATEGORY_DEFAULTS = [{value:'college', key:'Colleges'},{value:'ncaa',key:'NCAA'},{value:'conference',key:'conference'},{value:'venue',key:'venue'},{value:'other',key:'other'}];
			this.PARAMS = [
				{ type: 'properties', slug: 'category_id', list: null, select: null, selectedByUser: null, dropdown: null },
				{ type: 'secondary', slug: 'subcategories', list: null, select: null, selectedByUser: null, dropdown: null }
			];

			this.CONTACTS_API_PREFIX = '/contacts?format=json';

			this.PRELOADER = new App._componentNameRegistry.preloader.view();
			this.FORM = this.$el.find('.agent-finder-form');
			this.RESULTS = this.$el.find('.agent-results-container');

			this.render();
			//FIXME!
			var _this = this;
			window.setTimeout(function(){
				_this.PARAMS[0].list = _this.CATEGORY_DEFAULTS;
				_this.render();
			}, 300);
		},

		render: function () {

			var _this = this,
				dropdownLists = this.PARAMS.filter(function (param) { return param.list; });

			dropdownLists.map(function (list) {
				_this.createCategoryDropdown(list.type);
			});

			if (this.AGENTS) {

				this.agentResultsComponents = this.createAgentResultsComponents();
				this.agentResultsComponents.forEach( function (component) {
					_this.RESULTS.append( component.render().el );
				});

				this.RESULTS.addClass('has-agents');

				// if (!this.nextCategory) {
				// 	scrollToAgents();
				// }
			}
		},
 		/* ------------ Create Methods ------------ */

        createAgentResultsComponents: function () {
            var agentResultsModels = [],
                model;

            model = new AgentResultsModel({
                    heading: null,
                    category: null,
                    agents: this.AGENTS
                });

            agentResultsModels.push( new App._componentNameRegistry.agentResults.view({model: model}) );

            return agentResultsModels;
        },
		createCategoryDropdown: function (type) {
            // console.log('createCategoryDropdown', type);
            var paramObject = this.getParamObject(type);
            // console.log('dropdown already exists?', paramObject.dropdown);
            if (paramObject.dropdown) {
                return;
            }

            var label = paramObject.type;
           	if (paramObject.type === 'secondary') {
           		switch (this.PARAMS[0].select) {
					case 'college':
						label = 'Select a College';
						break;
					case 'ncaa':
						label = 'Select a College';
						break;
					case 'conference':
						label = 'Select a Conference';
						break;
					case 'venue':
						label = 'Select a Venue';
						break;
					case 'other':
						label = 'Select Other';
						break;
				}
           	}
            var dropdownListModel = new DropdownListModel({
                label: label,
                type: type,
                options: paramObject.list,
                preselectedOption: null,
                selectionMade: this.selectionClick.bind(this)
            });

            var form = new App._componentNameRegistry.dropdown.view({model: dropdownListModel});

            this.FORM.append(form.render().el);
            var index = this.getParamIndexFor(type);
            this.PARAMS[index].dropdown = form;
        },

        selectionClick: function (category, id, name) {
            var index = this.getParamIndexFor(category);

            this.PARAMS[index].selectedByUser = true;
            this.PARAMS[index].select = id;
            this.selectionMade(category, id, name);
        },

        selectionMade: function (category, id, name) {
        	var _this = this;
        	if (this.AGENTS) {
            	this.removeExistingAgents();
            }
        	if (category === 'properties') {
        		var url = this.CONTACTS_API_PREFIX + '&' + id + '=true';
        		//clear previous subcats
        		if (this.subcategories){
                	this.PARAMS[1].selectedByUser = false;
                    this.PARAMS[1].list = null;
                    var existingDropdown = _this.PARAMS[1].dropdown;
                    existingDropdown.remove();
                    this.PARAMS[1].dropdown = null;
                    this.subcategories = null;
                    this.render();
                }
	        	$.ajax({
	                url: url,
	                beforeSend: function () { _this.PRELOADER.addTo( _this.RESULTS ); },
	                success: function (result) {
	                    setTimeout(function () {
	                        _this.PRELOADER.removeFrom(_this.RESULTS);
	                        var cats = [];
	                        result.forEach(function(item){
	                        	if (cats.indexOf(item[id]) < 0){
	                        		cats.push(item[id]);
	                        	}
	                        });
	                        if (cats.length > 1) {
	                        	_this.subcategories = result;
	                        	_this.PARAMS[1].list = result.map(function(item){
	                        		return {value:id, key:item[id]};
	                        	});
	                        } else {
	                        	_this.AGENTS = result;
	                        	if (_this.subcategories){
				                	_this.PARAMS[1].selectedByUser = false;
				                    _this.PARAMS[1].list = null;
				                    var existingDropdown = _this.PARAMS[1].dropdown;
				                    existingDropdown.remove();
				                    _this.PARAMS[1].dropdown = null;
				                    _this.subcategories = null;
				                }
	                        }
	                        _this.render();
	                    }, 400);
	                }
	            });
        	} else {
        		window.setTimeout(function(){
	        		_this.AGENTS = _this.subcategories.filter(function(cat){
	        			return cat[id] === name;
	        		});
	        		_this.render();
        		}, 300);
        	}

        },
        removeErrorMessage: function () {
            if (this.ERROR_MESSAGE) {
                this.ERROR_MESSAGE.remove();
                this.ERROR_MESSAGE = null;
            }
        },

        removeExistingAgents: function () {
            this.agentResultsComponents.forEach(function (list) {
                list.remove();
            });

            this.agentResultsComponents = null;
            this.AGENTS = null;
            this.RESULTS.removeClass('has-agents');
        },
        remove: function () {
            // app.document.off('click');
            Backbone.View.prototype.remove.call(this);
        },
        /* ------------ Getter Methods ------------ */

        getOtherCategoryDisplayNameFor: function (type) {
            return 'General ' + this.getParamObject(type).select.value + ' Inquiries';
        },

        getParamObject: function (type) {
            var objects = this.PARAMS.filter( function (param) {
                return param.type === type;
            });

            if (objects) {
                return objects[0];
            } else {
                return null;
            }
        },

        getParamIndexFor: function (type) {
            var paramNames = this.PARAMS.map(function (param) {
                return param.type;
            });

            return paramNames.indexOf(type);
        }
	});
	app.registerComponent('contacts-finder', contactsFinderModule);
})(jQuery, Backbone, App);


})();

(function() {

App = window.App || {};

App.DETECT_IE_MODULE = (function () {
    'use strict';

    /**
     * @description
     * Resolve IE html class.
     *
     * @return {Function}
     * @private
     */
    function _resolveIE () {
        return _detectIE(function (IE) {
            if (IE) {
                $('html').addClass('ie');
            }
        });

        /**
         * @description
         * Check if the current browser is IE.
         *
         * @return {Boolean}
         * @private
         */
        function _detectIE(cb) {
            var ua = window.navigator.userAgent;
            var versions = [
                {
                    type: 'MSIE',
                    fn: _msie
                },
                {
                    type: 'Trident/',
                    fn: _trident
                }
            ];

            var results = [];
            versions.forEach(function (version) {
                var isType = ua.indexOf(version.type);
                var index = version.fn(isType);
                results.push((index > 0) ? 1 : 0);
            });

            return cb(results.indexOf(1) !== -1);

            function _msie (msie) {
                return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
            }

            function _trident (rv) {
                rv = ua.indexOf('rv:');
                return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
            }
        }
    }

    /**
     * @description
     * Init fn.
     *
     * @return void
     * @public
     */
    function init () {
        _resolveIE();
    }

    /**
     * @description
     * DETECT IE module API.
     *
     * @return {Object}
     * @public
     */
    return {
        init: init
    };
})();

$(function () {
    App.DETECT_IE_MODULE.init();
});


})();

(function() {


(function ($, backbone, app) {

    var dropdownModule = backbone.View.extend({
        template: TEMPLATES['dropdown.hbs'],
        className: 'dropdown',
        events: {
            'click .form__toggle': 'dropdownSelected',
            // 'input .form__field-input, .form__textarea': 'onChangeField',
            // 'input [data-chars]': 'onCharsRemaining',
            'click .form__field-radio': 'optionSelected',
            // 'click .form__submit': 'onSubmit'
        },

        initialize: function () {
            // console.log('dropdown init!');
             this.SELECTION = {
                selected: !!this.model.get('preselectedOption'),
                value: this.model.get('preselectedOption') || ''
            };

            app.document.on('click', this.checkAutoClose.bind(this));

            this.$el.addClass(this.model.get('label'));

            var _this = this;
            this.render = _.wrap(this.render, function(render) {
                _this.renderDropdown();
                _this.afterRender();
                return _this;
            });

            this.render();
        },

        renderDropdown: function () {
            this.$el.html(this.template({
                values:this.model.get('options'),
                label:this.model.get('label'),
                name: this.model.get('name'),
                isInput: this.model.get('input'),
                validation: ['validate-empty']
            }));
            return this;
        },

        afterRender: function() {
            this.$toggle = Array.prototype.slice.call(this.$el.find('.form__toggle'));
        },

        dropdownSelected: function (e) {
            var target = this.$(e.target);
            var el = this.$el;
            var hasInput = this.model.get('input');
            if (hasInput) {
            	target = target.closest('.form__toggle');
				el = this.$(e.target).closest('.form__wrapper');
            }
            if (el.hasClass('active')) {
                if (!el.hasClass('selected')) {
                setTimeout(function () {
                     target.text('');
                 },50);
                }

                this.$el.find('.form__inquiries').removeClass('is-expanded');

                el.removeClass('active');
            } else {
                el.addClass('active');

                var _this = this;
                setTimeout(function () {
                    // Timeout is set to match the css animation time for .form__inquiries; be mindful to change the timeout value
                    // if CSS changes. The reason we delay adding '.is-expanded' to .form__inquiries until the expansion animation
                    // is complete is because the .is-expanded class adds scrolling to the .form__inquiries element. If overflow is
                    // set to scroll before expansion is complete, the scrollbar shows up during expansion, which looks strange.
                    _this.$el.find('.form__inquiries').addClass('is-expanded');
                },300);
                if(hasInput){
                	target.attr('value',((_this.SELECTION.selected ? _this.SELECTION.value : '')));
                	target.closest('.form__toggle__hidden').attr('value',((_this.SELECTION.selected ? _this.SELECTION.value : '')));
					target.attr('label',((_this.SELECTION.selected ? _this.SELECTION.value : '')));
                } else{
                	target.text((this.SELECTION.selected ? this.SELECTION.value : '---------'));
                }

            }

            // if (this.model.get('dropdownSelected')) {
            //     this.model.get('dropdownSelected')(scope, target);
            // }
        },

        optionSelected: function (e) {
            var _this = this.$(e.target);
            if (this.SELECTION.value === _this.attr('id')) {
                return;
            }

            var $toggle = _this.parents('.form__wrapper').find('.form__toggle');

            this.SELECTION = {
                selected: true,
                value: _this.attr('id')
            };
            if (_this.attr('data-email') && $('#send_email').length){
				$('#send_email').attr('value', _this.attr('data-email'));
			}
			if (this.model.get('input')) {
				_this.parents('.form__wrapper').addClass('selected').removeClass('active');
				$toggle.val(_this.attr('id'));
				_this.closest('.form__wrapper').children('.form__toggle__hidden').attr('value',_this.attr('id'));
			} else {
				this.$el.addClass('selected');
            	$toggle.text(_this.attr('id'));
			}

            if (this.model.get('selectionMade')) {
                var displayValue = _this.attr('data-display');
                this.model.get('selectionMade')(this.model.get('type'), _this.attr('value'), (displayValue || _this.attr('id')));
            }
        },

        checkAutoClose: function (e) {
            this.onToggleAutoclose(e, this);
        },

        onToggleAutoclose: function (e, scope) {
            var isToggle = _isToggle(e, scope.$toggle);
            var el = scope.$el;
            if (!isToggle && !this.model.get('input')) {
                if (!el.hasClass('selected')) {
                    scope.$toggle.forEach(function (toggle) {
                        $(toggle).text('');
                    });
                }

                el.removeClass('active');
            }
        },

        remove: function () {
            app.document.off('click', this.checkAutoClose.bind(this));
            Backbone.View.prototype.remove.call(this);
        }
    });

    function _isToggle (e, arr) {
        // console.log(arr);
        return arr.filter(function (item) {
            return item === e.target;
        })[0];
    }

    app.registerComponent('dropdown', dropdownModule);
})(jQuery, Backbone, App);


})();

(function() {

/*jshint camelcase: false */
(function ($, backbone, app) {
	var DropdownListModel = backbone.Model.extend({});
	var dynamicFieldsModule = backbone.View.extend({

		initialize: function () {

			this.PARAMS = [
				{ type: 'top', slug: 'primary_id', list: null, select: null, selectedByUser: null, dropdown: null },
				{ type: 'middle', slug: 'secondary_id', list: null, select: null, selectedByUser: null, dropdown: null },
				{ type: 'last', slug: 'tertiary_id', list: null, select: null, selectedByUser: null, dropdown: null }
			];

			this.CHOICES_API_PREFIX = '/contact_menus/?format=json';

			this.PRELOADER = new App._componentNameRegistry.preloader.view();
			this.FORM = this.$el.find('.agent-finder-form');

			this.render();

			var _this = this;
			window.setTimeout(function(){
				_this.fetchChoices();
			}, 500);
		},

		render: function () {

			var _this = this,
				dropdownLists = this.PARAMS.filter(function (param) { return param.list; });

			dropdownLists.map(function (list) {
				_this.createCategoryDropdown(list.type);
			});
		},

		/* ------------ Event Methods ------------ */

		fetchChoices: function (type, param, queryString) {

			var url = this.CHOICES_API_PREFIX;

			var _this = this;

			if (this.ERROR_MESSAGE) { this.ERROR_MESSAGE.remove(); }

			$.ajax({
				url: url,
				beforeSend: function () { _this.PRELOADER.addTo( _this.FORM ); },
				success:function(result){ setTimeout(function () {
					_this.PRELOADER.removeFrom(_this.FORM);
					_this.choices = result.results;
					try {
						_this.createListFromResultsFor('top', result.results);
					}
					catch (err) { _this.handleLoadError(err); }

				}, 500); }
			});

		},

		handleLoadError: function (error) {

			var errorModel = new backbone.Model({
				errorMessage: 'Error'
			});

			this.ERROR_MESSAGE = new App._componentNameRegistry.errorMessage.view({model: errorModel});

			this.FORM.append(this.ERROR_MESSAGE.render().el);
		},

		selectionClick: function (category, id, name) {
			var index = this.getParamIndexFor(category);
			this.PARAMS[index].selectedByUser = true;
			this.selectionMade(category, id, name);
		},

		selectionMade: function (category, id, name) {
			var _this = this;
			var categoryListToClear;

			var index = this.getParamIndexFor(category);

			this.PARAMS[index].select = {
				id: id,
				value: name
			};

			switch (category) {

			case 'top':
					window.setTimeout(function(){
						_this.setNextForm('middle',name);
					},300);
					categoryListToClear = 'middle';
				break;

			case 'middle':
					window.setTimeout(function(){
						_this.setNextForm('last',name);
					},300);

					categoryListToClear = 'last';
				break;

			default:
				break;
			}

			if (categoryListToClear) {
				this.removeExistingListsFor(categoryListToClear);
			}
		},

		/* ------------ End Event Methods ------------ */



		/* ------------ Create Methods ------------ */


		setDropdownLabel: function(label) {
			return label;
		},
		createCategoryDropdown: function (type) {
			var paramObject = this.getParamObject(type);

			if (paramObject.dropdown) {
				return;
			}

			var label = paramObject.type === 'top' ? 'What is your inquiry regarding?' : 'subcategory';//paramObject.type;

			var dropdownListModel = new DropdownListModel({
				input: true,
				label: label,
				type: type,
				name: type,
				options: paramObject.list,
				preselectedOption: null,
				selectionMade: this.selectionClick.bind(this)
			});

			var form = new App._componentNameRegistry.dropdown.view({model: dropdownListModel});

			this.FORM.append( form.render().el );

			var index = this.getParamIndexFor(type);
			this.PARAMS[index].dropdown = form;
		},

		setNextForm: function(type, name) {
			var index = this.getParamIndexFor(type);
			var _this = this;
			var filteredResults;
			if (type === 'middle'){
				filteredResults = this.choices.filter(function(item){
					return item.name === name;
				})[0];
			}
			if (type === 'last'){
				filteredResults = this.choices.filter(function(item){
					return item.name === _this.PARAMS[0].select.value;
				})[0].sub_menu.filter(function(item){
					return item.name === name;
				})[0];
			}
			var mappedResults = filteredResults.sub_menu.map(function (result) {
				return {
					key: result.name,
					value: result.name,
					email: result.email
				};
			});

			if (mappedResults.length){
				this.PARAMS[index].list = mappedResults;
			}

			this.render();
		},

		createListFromResultsFor: function (type, results, madeChoice) {

			var index = this.getParamIndexFor(type);


			var categoriesSelectedByUser = 0;

			var mappedResults = results.map(function (result) {
				return {
					key: result.name,
					value: result.name
				};
			});

			this.PARAMS[index].list = mappedResults;

			this.PARAMS.map(function (param) {
				if(param.selectedByUser) {
					categoriesSelectedByUser++;
				}
			});


			this.render();

		},

		/* ------------ End Create Methods ------------ */


		/* ------------ Removal Methods ------------ */

		removeErrorMessage: function () {
			if (this.ERROR_MESSAGE) {
				this.ERROR_MESSAGE.remove();
				this.ERROR_MESSAGE = null;
			}
		},

		removeExistingListsFor: function (type) {

			var listIndexesToRemove = [];

			switch (type) {
				case 'top':
					listIndexesToRemove = [
						this.getParamIndexFor('top'),
						this.getParamIndexFor('middle'),
						this.getParamIndexFor('last')
					];
					break;
				case 'middle':
					listIndexesToRemove = [
						this.getParamIndexFor('middle'),
						this.getParamIndexFor('last'),
					];
					break;
				case 'last':
					listIndexesToRemove = [
						this.getParamIndexFor('last')
					];
					break;
				default:
					break;
			}
			var _this = this;
			listIndexesToRemove.forEach( function (index) {
				var existingDropdown = _this.PARAMS[index].dropdown;
				var existingSelection = _this.PARAMS[index].select;
				if ( existingDropdown ) {

					if (_this.PARAMS[index].selectedByUser) {
						_this.PARAMS[index].selectedByUser = false;
					}

					existingDropdown.remove();
					_this.PARAMS[index].dropdown = null;
					_this.PARAMS[index].list = null;
				}
				if ( existingSelection ) {
					_this.PARAMS[index].select = null;
				}
			});

		},

		remove: function () {
			// app.document.off('click');
			Backbone.View.prototype.remove.call(this);
		},

		/* ------------ End Removal Methods ------------ */




		/* ------------ Getter Methods ------------ */

		getOtherCategoryDisplayNameFor: function (type) {
			return 'General ' + this.getParamObject(type).select.value + ' Inquiries';
		},

		getParamObject: function (type) {
			var objects = this.PARAMS.filter( function (param) {
				return param.type === type;
			});

			if (objects) {
				return objects[0];
			} else {
				return null;
			}
		},

		getParamIndexFor: function (type) {
			var paramNames = this.PARAMS.map(function (param) {
				return param.type;
			});

			return paramNames.indexOf(type);
		},

		/* ------------ End Getter Methods ------------ */
	});

	app.registerComponent('dynamic-fields', dynamicFieldsModule);
})(jQuery, Backbone, App);


})();

(function() {

/* globals console */

(function ($, backbone, app) {
    var errorMessageModule = backbone.View.extend({
        className: 'error-message',
        template: TEMPLATES['error-message.hbs'],

        events: {
            // 'click': 'remove'
        },

        initialize: function () {
        },

        render: function () {
            // var form = new Form();
            console.log('render() error-message');

            this.$el.html(this.template({
                errorMessage:this.model.get('errorMessage')
            }));

            return this;
        },

        /**
         * @description
         * Remove bound DOM events when the view changes.
         *
         * @return void
         * @public
         */
        remove: function () {
            // app.document.off('click');
            Backbone.View.prototype.remove.call(this);
        },
    });

    app.registerComponent('errorMessage', errorMessageModule);
})(jQuery, Backbone, App);


})();

(function() {

(function ($, backbone, app) {
    var formButton = backbone.View.extend({
        className: 'form-button feat-link',
        template: TEMPLATES['form-button.hbs'],

        events: {
            // 'click': 'onClick',
            // 'input .form__field-input, .form__textarea': 'onChangeField',
            // 'input [data-chars]': 'onCharsRemaining',
            // 'change .form__field-radio': 'onSelect',
            'click': 'onClick'
        },

        onClick: function () {
            this.model.get('onClick')();
        },

        render: function () {
            // var form = new Form();
                // console.log(this.model);
            this.$el.html(this.template({
                text: this.model.get('text')
            }));

            this.$el.addClass( 'button-' + this.model.get('type') );

            if (this.model.get('selected')) {
                this.$el.addClass('active');
            } else {
                this.$el.removeClass('active');
            }

            return this;
        },

        /**
         * @description
         * Remove bound DOM events when the view changes.
         *
         * @return void
         * @public
         */
        remove: function () {
            // app.document.off('click');
            Backbone.View.prototype.remove.call(this);
        },
    });

    app.registerComponent('formButton', formButton);
})(jQuery, Backbone, App);


})();

(function() {

/* global Cookies */

(function ($, backbone, app) {
    var formModule = backbone.View.extend({

        events: {
            'click .form__toggle': 'onToggle',
            'input .form__field-input, .form__textarea': 'onChangeField',
            'input [data-chars]': 'onCharsRemaining',
            'change .form__field-radio': 'onSelect',
            'click .form__submit': 'onSubmit'
        },

        initialize: function () {
            var _this = this;
            this.$confirm = $('#confirmMessage');
            this.$form = this.$('#contactUsForm');
            this.$toggle = Array.prototype.slice.call(document.querySelectorAll('.form__toggle'));
            this.INQUIRY = {
                selected: false,
                value: ''
            };

            _setCharsRemaining();
            app.document.on('click', function (e) {
                _this.onToggleAutoclose(e, _this);
            });
        },

        /**
         * @description
         * Remove bound DOM events when the view changes.
         *
         * @return void
         * @public
         */
        remove: function () {
            app.document.off('click');
            Backbone.View.prototype.remove.call(this);
        },

        /**
         * @description
         * Toggle "active" form class.
         *
         * @param  {Object} e
         * @return {Function}
         * @public
         */
        onToggle: function (e) {
            // var _this = this.$(e.target);

            // if (this.$el.hasClass('active')) {
            //     if (!this.$el.hasClass('selected')) {
            //         _this.text('');
            //     }
            //     this.$el.removeClass('active');
            // } else {
            //     _this.text((this.INQUIRY.selected ? this.INQUIRY.value : '---------'));
            //     this.$el.addClass('active');
            // }
        },

        /**
         * @description
         * Handle autoclosing of toggle menu.
         *
         * @param  {Object} e
         * @param  {Object} scope
         * @return {Function}
         * @public
         */
        onToggleAutoclose: function (e, scope) {
            var isToggle = _isToggle(e, scope.$toggle);

            if (!isToggle) {
                if (!this.$el.hasClass('selected')) {
                    scope.$toggle.forEach(function (toggle) {
                        $(toggle).text('');
                    });
                }

                scope.$el.removeClass('active');
            }
        },

        /**
         * @description
         * Toggle "filled" input wrapper class.
         *
         * @param  {Object} e
         * @return {Function}
         * @public
         */
        onChangeField: function (e) {
            var _this = this.$(e.target);
            return (!!_this.val()) ? _this.addClass('filled') : _this.removeClass('filled');
        },

        /**
         * @description
         * Update "data-chars" remaining value.
         *
         * @param  {Object} e
         * @return {Function}
         * @public
         */
        onCharsRemaining: function (e) {
            var _this = this.$(e.target);
            var $parent = _this.parent('.form__wrapper--char-remaining');
            var remaining = parseInt(_this.data('chars'), 10) - _this.val().length;

            if (remaining < 0) {
                var current = _this.val().split('');
                _this.val(current.splice(0, current.length - 1).join(''));
            } else {
                $parent.attr('data-chars', remaining);
            }
        },

        /**
         * @description
         * Flag radio as selected.
         *
         * @param  {Object} e
         * @return {Object}
         * @public
         */
        onSelect: function (e) {
            var _this = this.$(e.target);
            var $toggle = _this.parents('.form__wrapper').find('.form__toggle');

            this.INQUIRY = {
                selected: true,
                value: _this.attr('id')
            };
            this.$el.addClass('selected');
            $toggle.text(_this.attr('id'));
        },

        /**
         * @description
         * On submit fn.
         *
         * @param  {Object} e
         * @public
         */
        onSubmit: function (e) {
            var _this = this;
            var paddingOffset = 100;

            e.preventDefault();

            _validateForm(this, function (valid) {
                if (!valid) return;

                var data = _this.$('#contactUsForm').serialize();

                var url = '/contact/submit/';
                var token = Cookies.get('csrftoken');
                 $.ajax({
                    type: 'POST',
                    url: url,
                    data: data,
                    headers: {
						'x-CSRFToken': token,
						'Content-Type': 'application/x-www-form-urlencoded'
					}
                });

                _this.$el.addClass('submitted');
                $('body').animate({
                    scrollTop: _this.$confirm.offset().top - paddingOffset
                }, 300);
            });
        }
    });

    /**
     * @description
     * Initially set characters remaining flag for each element that has the char limit.
     *
     * @private
     */
    function _setCharsRemaining () {
        $('[data-chars]').each(function (item) {
            var _this = $(this);
            var $parent = _this.parent('.form__wrapper--char-remaining');
            $parent.attr('data-chars', _this.data('chars'));
        });
    }

    /**
     * @description
     * Validate contact form.
     *
     * @param  {Object} _this
     * @param  {Function} cb
     * @return {Function<boolean>}
     * @private
     */
    function _validateForm (_this, cb) {
        var validators = [
            {
                fields: _this.$('[validate-empty]'),
                fn: _validateEmpty
            },
            {
                fields: _this.$('[validate-email]'),
                fn: _validateEmail
            }
        ];

        var results = [];
        _setFormErrorType.call(_this, null);
        validators.forEach(function (validator) {
            results.push(validator.fn.call(_this, validator.fields));
        });

        return cb(results.indexOf(false) === -1);
    }

    /**
     * @description
     * Check if currently clicked DOM element is one of the DOM toggles.
     *
     * @param  {Object} e
     * @param  {Array} arr
     * @return {Boolean}
     * @private
     */
    function _isToggle (e, arr) {
        return arr.filter(function (item) {
            return item === e.target;
        })[0];
    }

    /**
     * @description
     * Validate if fields are empty.
     *
     * @param  {Array} arr
     * @return {Boolean}
     * @private
     */
    function _validateEmpty (arr) {
        var __super = this;
        var results = [];

        arr.each(function () {
            var _this = $(this);

            _this.removeClass('form__error');

            if (!_this.val().length) {
                _setFormErrorType.call(__super, 'empty');
                _this.addClass('form__error');
                results.push(0);
            } else {
                results.push(1);
            }
        });

        return results.indexOf(0) === -1;
    }

    /**
     * @description
     * Validate inquiry selected.
     *
     * @param  {Array} arr
     * @return {Boolean}
     * @private
     */
    // function _validateSelected (arr) {
    //     var $toggle = null;
    //     var results = [];

    //     arr.each(function () {
    //         var _this = $(this);
    //         console.log($toggle)
    //         if (!$toggle) {
    //             console.log(_this)
    //             $toggle = _this.parents('.form__wrapper').find('.form__toggle');
    //         }

    //         results.push(_this.is(':checked'));
    //     });

    //     if (results.indexOf(true) !== -1) {
    //         $toggle.removeClass('form__error');
    //         return true;
    //     } else {
    //         $toggle.addClass('form__error');
    //         return false;
    //     }
    // }

    /**
     * @description
     * Validate email.
     *
     * @param  {Array} arr
     * @return {Boolean}
     * @private
     */
    function _validateEmail (arr) {
        var __super = this;
        var results = [];

        arr.each(function () {
            var _this = $(this);

            _this.removeClass('form__error');

            if (!/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(_this.val())) {
                _setFormErrorType.call(__super, 'email');
                _this.addClass('form__error');
                results.push(0);
            } else {
                results.push(1);
            }
        });

        return results.indexOf(0) === -1;
    }

    /**
     * @description
     * Set form error type class.
     *
     * @param {String} type
     * @private
     */
    function _setFormErrorType (type) {
        var types = {
                empty: 'form__error-empty',
                email: 'form__error-email'
            };

        if (types[type]) {
            this.$form.addClass(types[type]);
        } else {
            for (var error in types) {
                if (types.hasOwnProperty(error)) {
                    this.$form.removeClass(types[error]);
                }
            }
        }
    }

    app.registerComponent('form', formModule);
})(jQuery, Backbone, App);


})();

(function() {

(function ($, backbone, app) {
    var headerModule = backbone.View.extend({

        events: {
            'click .header__menu': 'onToggleMenu'
        },

        initialize: function () {
            this.$child = this.$('.header__menu');
            this.$links = this.$('[data-url]');

            _selectActiveLink.call(this, this.$links);
        },

        onToggleMenu: function () {
            this.$el.toggleClass('active');
            $(document.documentElement).toggleClass('menu-active');
        },

        /**
         * @description
         * Remove bound DOM events when the view changes.
         *
         * @return void
         * @public
         */
        remove: function () {
            app.document.off('click');
            Backbone.View.prototype.remove.call(this);
        },
    });

    /**
     * @description
     * Match current route to set it active.
     *
     * @param  {Array} arr
     * @private
     */
    function _selectActiveLink (arr) {
        var pages = _getPages.call(this, arr);

        pages.forEach(function (page) {
            var regex = new RegExp('(?=(\\/' + page.slug + '){1})');

            if (window.location.href.match(regex)) {
                return page.el.addClass('active');
            }
        });
    }

    /**
     * @description
     * Get all page slugs including untracked pages.
     *
     * @param  {Array} arr
     * @return {Array}
     * @private
     */
    function _getPages (arr) {
        var pages = [];
        var untracked = [
                {
                    slug: 'offices',
                    el: this.$('[data-url="contact"]')
                }
            ];

        arr.each(function () {
            var _this = $(this);

            pages.push({
                slug: _this.data('url'),
                el: _this
            });
        });

        return pages.concat(untracked);
    }

    app.registerComponent('header', headerModule);
})(jQuery, Backbone, App);


})();

(function() {

/*jshint camelcase: false */
(function ($, backbone, app) {
    var heroModule = backbone.View.extend({

        template: TEMPLATES['hero-module.hbs'],

        initialize: function () {
            var _this = this;

            this.$body = $('body');

            app.window.on('load scroll', function () {
                var scrollTop = _this.$body.scrollTop();
                var scrolled = scrollTop >= 550;
                return (scrolled) ? _this.$el.css('opacity', 0) : _this.$el.css('opacity', 1);
            });
        },

        render: function() {
            var model = this.model.get('model');
            var imgIdx = Math.floor(Math.random() * model.images.length);
            var image = model.images[imgIdx];
            var imageMobile = model.mobile_images[imgIdx];
            this.$el.html(this.template({
                image: image,
                image_mobile: imageMobile,
                breadcrumbs: model.breadcrumbs,
                title: model.title,
                content: model.content,
                links: model.links
            }));
        },

        /**
         * @description
         * Remove bound DOM events when the view changes.
         *
         * @return void
         * @public
         */
        remove: function () {
            app.document.off('click');
            Backbone.View.prototype.remove.call(this);
        },
    });

    app.registerComponent('hero', heroModule);
})(jQuery, Backbone, App);


})();

(function() {

/* globals console */
/*jshint camelcase: false */
console.log();

(function ($, backbone, app) {
    var newsArticleModule = backbone.View.extend({

        template: TEMPLATES['news-article.hbs'],

        initialize: function () {
            var queryParams = getQueryParams(),
                slug = queryParams.id,
                url = '/posts/' + slug + '?format=json';

            this.PRELOADER = new App._componentNameRegistry.preloader.view();
            this.CONTAINER = this.$el.parent();

            this.MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

            var _this = this;
            $.ajax({
                url: url,
                beforeSend: function () { _this.PRELOADER.addTo( _this.CONTAINER, true ); },
                success: function (result) {
                    setTimeout(function () {

                        _this.PRELOADER.removeFrom(_this.CONTAINER);

                        _this.ARTICLE = result;

                        _this.render();

                    }, 500);
                },
                error: function (jqXHR, status, error) {
                    window.location.assign('/404');
                }
            });
        },

        render: function () {
            var date = new Date(this.ARTICLE.date);

            this.$el.html(this.template({
                title: this.ARTICLE.title,
                image: this.ARTICLE.image,
                image_mobile: this.ARTICLE.image_mobile,
                date: this.MONTH_NAMES[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear(),
                author: this.ARTICLE.author,
                body: this.ARTICLE.body,
                link: this.ARTICLE.link
            }));

            return this;
        },

    });

    function getQueryParams () {
        var queryString = {};
        var query = window.location.search.substring(1);
        var vars = query.split('&');
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split('=');
            // If first entry with this name
            if (typeof queryString[pair[0]] === 'undefined') {
                queryString[pair[0]] = decodeURIComponent(pair[1]);
                // If second entry with this name
            } else if (typeof queryString[pair[0]] === 'string') {
                var arr = [ queryString[pair[0]],decodeURIComponent(pair[1]) ];
                queryString[pair[0]] = arr;
                // If third or later entry with this name
            } else {
                queryString[pair[0]].push(decodeURIComponent(pair[1]));
            }
        }
        return queryString;
    }

    app.registerComponent('news-article', newsArticleModule);
})(jQuery, Backbone, App);


})();

(function() {

/* globals console */
/*jshint camelcase: false */


(function ($, backbone, app) {
    var NewsFeedModel = backbone.Model.extend({});

    var NewsFeedModule = backbone.View.extend({

        initialize: function () {

            this.NEWS_HERO_API_URL = '/heros/news?format=json';
            this.NEWS_API_URL = '/posts/?format=json';
            this.CONTAINER = this.$el.find('.layout__content-wrapper');
            this.PRELOADER = new App._componentNameRegistry.preloader.view();

            this.fetchHero();
            this.fetchNewsItems();

        },

        render: function () {

            var _this = this;

            if (this.NEWS_ITEMS) {

                var months = [], lastMonth;
                this.NEWS_ITEMS.forEach(function (news) {
                    if (news.month_year !== lastMonth) {
                        lastMonth = news.month_year;
                        months.push(news.month_year);
                    }
                });

                var postGroups = months.map(function (month) {
                    var posts = _this.NEWS_ITEMS.filter(function (news) {
                        return news.month_year === month;
                    });

                    var newsFeedModel = new NewsFeedModel({
                        date: month,
                        posts: posts
                    });

                    return new App._componentNameRegistry.newsItemModule.view({model: newsFeedModel});
                });

                postGroups.forEach(function (group) {
                    _this.$('.news-feed').append(group.render().el);
                });
            }
        },

        fetchHero: function () {
            var _this = this;
            $.ajax({
                url: _this.NEWS_HERO_API_URL,
                success: function (result) {
                    _this.renderHero(result);
                }
            });
        },

        fetchNewsItems: function () {

            var _this = this;

            $.ajax({
                url: _this.NEWS_API_URL,
                beforeSend: function () { _this.PRELOADER.addTo( _this.CONTAINER, true ); },
                success: function (result) {
                    setTimeout(function () {

                        _this.PRELOADER.removeFrom(_this.CONTAINER);

                        _this.NEWS_ITEMS = result.results;
                        _this.render();

                    }, 500);
                }
            });
        },

        renderHero: function(hero) {
            var heroModel = new backbone.Model({
                model: hero
            });
            var heroModule = new App._componentNameRegistry.hero.view({model: heroModel});
            heroModule.render();
            this.$el.find('.layout__hero').append(heroModule.el);

        },

        handleLoadError: function (error) {
            console.log(error);

            var errorModel = new backbone.Model({
                errorMessage: 'We were unable to find agents for this option. Please try another option or try again later.'
            });

            this.ERROR_MESSAGE = new App._componentNameRegistry.errorMessage.view({model: errorModel});

            this.$el.append(this.ERROR_MESSAGE.render().el);
        },

        /* ------------ End Event Methods ------------ */


        /* ------------ Removal Methods ------------ */

        removeErrorMessage: function () {
            if (this.ERROR_MESSAGE) {
                this.ERROR_MESSAGE.remove();
                this.ERROR_MESSAGE = null;
            }
        },

        remove: function () {
            // app.document.off('click');
            Backbone.View.prototype.remove.call(this);
        },

        /* ------------ End Removal Methods ------------ */

    });

    app.registerComponent('news-page', NewsFeedModule);
})(jQuery, Backbone, App);


})();

(function() {

/* globals console */

(function ($, backbone, app) {
    var newsItemModule = backbone.View.extend({

        template: TEMPLATES['news-item.hbs'],

        className: 'news animate',

        initialize: function () {
            this.render();
        },

        render: function () {
            // var form = new Form();
            // console.log('render() agent');
            // console.log(this.model);
            console.log();

            this.$el.html(this.template({
                date: this.model.get('date'),
                posts: this.model.get('posts').map(function (post) {
                    var date = new Date(post.date);
                    post.simpleDate = (date.getMonth() + 1).toString() + '/' + date.getDate();
                    post.url = '/news/article/?id=' + post.slug;
                    return post;
                })
            }));

            return this;
        },

        /**
         * @description
         * Remove bound DOM events when the view changes.
         *
         * @return void
         * @public
         */
        remove: function () {
            // app.document.off('click');
            Backbone.View.prototype.remove.call(this);
        },
    });

    app.registerComponent('newsItemModule', newsItemModule);
})(jQuery, Backbone, App);


})();

(function() {

App = window.App || {};

App.NORMALIZE_HEIGHT_MODULE = (function ($window) {
    'use strict';

    var SELECTORS = [
            '.content:not(.content--position)',
            '.grid-result:not(.grid-result--cover)',
            '.careers__item',
            '.expertise-feed__image'
        ];


    /**
     * @description
     * Normalize height for each wrapper.
     *
     *
     * @return {[type]} [description]
     */
    function _normalizeHeight () {
        var currentTallest = 0;
        var currentRowStart = 0;
        var rowDivs = [];
        var topPosition = 0;
        var WRAPPERS = $(SELECTORS.join(', ')) || [];
        WRAPPERS.each(function () {
            var currentDiv;
            var $el = $(this);
            $($el).height('auto');
            topPosition = $el.position().top;

            if (currentRowStart !== topPosition) {

                for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }

                rowDivs.length = 0;
                currentRowStart = topPosition;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? $el.height() : currentTallest;
            }

            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        });
    }

    /**
     * @description
     * Bind DOM events.
     *
     * @private
     */
    function _bindEvents () {
        $window.on('load resize ajaxComplete', function (event) {
            var timeout = setTimeout(function () {
                clearTimeout(timeout);
                _normalizeHeight();
            }, 100);
        });
    }

    /**
     * @description
     * Module init fn.
     *
     * @return void
     * @public
     */
    function init () {
        _bindEvents();
    }

    /**
     * @description
     * NORMALIZE_HEIGHT module API.
     *
     * @return {Object}
     * @public
     */
    return {
        init: init
    };
})(App.window);

$(function () {
    App.NORMALIZE_HEIGHT_MODULE.init();
});


})();

(function() {

(function ($, backbone, app) {
    var SLUG = '__wme';

    var notificationModule = backbone.View.extend({

        events: {
            'click .notification__info': 'onDismiss',
            'click .privacy': 'onPrivacyClick'
        },

        initialize: function () {
            var _this = this;

            _hasCookie(function (hasCookie) {
                if (!hasCookie) {
                    _this.$el.addClass('active');
                }
            });
        },

        /**
         * @description
         * Remove bound DOM events when the view changes.
         *
         * @return void
         * @public
         */
        remove: function () {
            app.document.off('click');
            Backbone.View.prototype.remove.call(this);
        },

        onPrivacyClick: function () {
            this.onDismiss();
            window.setTimeout(function() {
                window.location = '/cookiepolicy';
            }, 400 );
        },
        /**
         * @description
         * On dismiss fn.
         *
         * @return void
         * @public
         */
        onDismiss: function () {
            var _this = this;
            document.cookie = SLUG + '=' + SLUG + ';path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT';

            this.$el.addClass('fade');

            var timeout = setTimeout(function () {
                _this.$el.removeClass('fade active');
                clearTimeout(timeout);
            }, 800);
        }
    });

    /**
     * @description
     * Check if cookies has already been set.
     *
     * @param  {Function} cb
     * @return {Function<boolean>}
     * @private
     */
    function _hasCookie (cb) {
        var arr = document.cookie.split(';');
        var i = arr.length;
        var result = false;

        while (i--) {
            var current = arr[i].split('=');

            if (current[0].trim() === SLUG) {
                result = true;
            }
        }

        if (typeof cb === 'function') cb(result);
    }

    app.registerComponent('notification', notificationModule);
})(jQuery, Backbone, App);


})();

(function() {

(function ($, backbone, app) {
    var preloaderModule = backbone.View.extend({
        className: 'preloader-container',
        template: TEMPLATES['preloader.hbs'],

        render: function (prepend) {

            this.EL = this.$el.html(this.template({}));

            if (prepend) {
                this.PARENT.prepend(this.EL);
                this.EL.addClass('prepended');
            } else {
                this.PARENT.append(this.EL);
            }

            return this;
        },

        addTo: function (target, prepend) {
            if (this.preloaderShowing) {
                return;
            }

            this.PARENT = target;

            this.preloaderShowing = true;
            target.addClass('is-loading');
            this.render(prepend);

        },

        removeFrom: function (target) {

            if (!this.preloaderShowing) {
                return;
            }

            this.preloaderShowing = true;
            this.$el.find('.preloader').addClass('animate-out');

            var _this = this;
            setTimeout(function (){
                _this.$el.find('.preloader').removeClass('animate-out');
                _this.preloaderShowing = false;
                _this.EL.remove();
                target.removeClass('is-loading');
            },500);
        },

        /**
         * @description
         * Remove bound DOM events when the view changes.
         *
         * @return void
         * @public
         */
        remove: function () {
            // app.document.off('click');
            Backbone.View.prototype.remove.call(this);
        },
    });

    app.registerComponent('preloader', preloaderModule);
})(jQuery, Backbone, App);


})();

(function() {

(function ($, backbone, app) {
    var randomizeModule = backbone.View.extend({

        initialize: function () {
            var options, imgIdx;
            if (this.$('.hero').length) {
                options = (this.$('.img__data')[0].dataset.options.split(','));
                imgIdx = Math.floor(Math.random() * options.length);
                this.$('.hero').css('background-image','url(' + options[imgIdx] + ')');
            } else if(this.$el.hasClass('gallery-item')){
                options = (this.$el[0].dataset.options.split(','));
                imgIdx = Math.floor(Math.random() * options.length);
                this.$('img').attr('src',options[imgIdx]);
            } else{
                this.$picture = this.$el;
                options = (this.$picture[0].dataset.options.split(','));
                imgIdx = Math.floor(Math.random() * options.length);
                //$(this.$('source')[0]).attr('srcset',options[imgIdx].replace('/large/','/medium/'));
                //$(this.$('source')[1]).attr('srcset', options[imgIdx].replace('/large/','/small/'));
                this.$('.content__cover').attr('src',options[imgIdx]);
                this.$('.content__cover').attr('srcset',options[imgIdx]);
            }
        },

        /**
         * @description
         * Remove bound DOM events when the view changes.
         *
         * @return void
         * @public
         */
        remove: function () {
            app.document.off('click');
            Backbone.View.prototype.remove.call(this);
        },
    });

    app.registerComponent('randomize', randomizeModule);
})(jQuery, Backbone, App);


})();

(function() {

(function ($, backbone, app) {
    var storyPage = backbone.View.extend({

        stubData: {
            hero: {
                'images': [
                    {
                        'url': '/static/img/content/large/network/hero-network.jpg'
                    },
                    {
                        'url': '/static/img/content/large/responsibility/hero-responsibility.jpg'
                    }
                ],
                'mobile_images': [
                    {
                        'url': '/static/img/content/large/network/hero-network.jpg'
                    },
                    {
                        'url': '/static/img/content/large/responsibility/hero-responsibility.jpg'
                    }
                ],
                'title': 'Our Story',
                'content': 'WME | IMG is committed to bringing the most innovative and creative opportunities to our world-class clients, employees and partners across:',
                'links': [
                    { 'value': 'Entertainment', 'url': '/story/entertainment', 'type':'internal' },
                    { 'value': 'Sports', 'url': '/story/sports', 'type':'internal' },
                    { 'value': 'Fashion', 'url': '/story/fashion', 'type':'internal' }
                ]
            },
            content: {
                'description': 'From the vanguard beginnings of the William Morris Agency to the advent of modern-day sports marketing by IMG to the bold formation of Endeavor, WME | IMG and its clients have been a force of innovation across entertainment, sports and fashion for over a century. We have helped our clients thrive in the face of disruption while setting trends in talent representation, marketing and sponsorship; inspiring industry change in events and licensing; and helping reshape the digital landscape. As technology further shifts the balance of power in media and puts more power in the hands of the creator, WME | IMG is uniquely positioned at the nexus of entertainment, sports and fashion to create powerful opportunities for our clients and partners across the globe.',
                'img': {
                    'src_default':'/static/img/body-our-story-timeline_desktop.png',
                    'src_mobile':'/static/img/body-our-story-timeline_mobile.png',
                    'alt':'Our Story Timeline'
                }
            }
        },

        template: TEMPLATES['story.hbs'],

        initialize: function () {
            this.ENDPOINT = '/story';
            this.fetchData();
        },

        fetchData: function () {
            var _this = this;
            $.ajax({
                url: this.ENDPOINT,
                success: function (result) {
                    //TODO: remove stub data
                    result = _this.stubData;
                    _this.$el.html(_this.template({
                        content: result.content,
                        hero: result.hero
                    }));
                    _this.renderHero(result.hero);
                    $(_this.$el).parent().addClass('loaded');
                }
            });
        },
        renderHero: function(hero) {
            var heroModel = new backbone.Model({
                model: hero
            });
            var heroModule = new App._componentNameRegistry.hero.view({model: heroModel});
            heroModule.render();
            this.$el.find('.layout__hero').append(heroModule.el);

        },
    });

    app.registerComponent('story-page', storyPage);
})(jQuery, Backbone, App);


})();

(function() {

(function ($, backbone, app) {
    var tileModule = backbone.View.extend({

        template: TEMPLATES['content-tile-module.hbs'],

        initialize: function () {

        },

        render: function() {
            var model = this.model.get('model');
            var imgIdx = Math.floor(Math.random() * model.images.length);
            var image = model.images[imgIdx];
            this.$el.html(this.template({
                position: model.position,
                last: model.last,
                image: image,
                overview: model.overview,
                title: model.title,
                hideTitle: model.hideTitle,
                link: model.link,
                links: model.links
            }));
            this.$el = this.$el.children();
            this.$el.unwrap();
            this.setElement(this.$el);
        },

        /**
         * @description
         * Remove bound DOM events when the view changes.
         *
         * @return void
         * @public
         */
        remove: function () {
            app.document.off('click');
            Backbone.View.prototype.remove.call(this);
        },
    });

    app.registerComponent('content-tile', tileModule);
})(jQuery, Backbone, App);


})();

(function() {

(function ($, backbone, app) {
    var transitionModule = backbone.View.extend({

        initialize: function () {
            this.$el.addClass('fadeIn');
        },

        /**
         * @description
         * Remove bound DOM events when the view changes.
         *
         * @return void
         * @public
         */
        remove: function () {
            Backbone.View.prototype.remove.call(this);
        },
    });

    app.registerComponent('transition', transitionModule);
})(jQuery, Backbone, App);


})();

(function() {

/*global THREE, Modernizr, fontSpy, WebPoint */
/*jshint maxparams:6, maxdepth:5 */
/*jshint -W030, -W004 */
/*jshint camelcase: false */
//distance based


})();

(function() {

(function ($, backbone, app, THREE) {
    var webModule = backbone.View.extend({

        events: {
            'mousedown': 'onMouseDown',
            'mousemove': 'onMouseMove',
            'mouseleave': 'onMouseLeave',
            'touchstart': 'onTouchStart',
            'touchmove': 'onTouchMove',
            'touchend': 'onTouchEnd'
        },

        initialize: function () {
            var _this = this;
            $('body').addClass('home'); //for 100% height style and footer style on homepage
            window.onunload = function(){}; //prevent firefox from caching so back button causes a refresh

            window.setTimeout(function(){
            	fontSpy('DINNextLTPro-Regular', {
	                success: function() {
	                     _this.loadedInit();
	                },
	                failure: function() {
	                    _this.loadedInit(); //still do init with fallback font
	                }
	            });
            }, 800);
            $('.transition').addClass('loaded');
        },

        loadedInit: function() {
            // this.stats = new Stats({mode: 0});
            // this.stats.domElement.style.position = 'absolute';
            // this.stats.domElement.style.left = '0px';
            // this.stats.domElement.style.top = '100px';

          //  document.body.appendChild( this.stats.domElement );
            var _this = this;
            this.hasLoaded = false;
            this.dragOffsetStart = null;
            this.pos = {
                x: 0,
                y: 0
            };
            this.canNodeNavigate = true;
            this.isGrabbing = false; //state: only allow grabbing one item at a time
            this.mouseX = 0;
            this.mouseY = 0;
            this.windowHalfX = window.innerWidth / 2,
            this.windowHalfY = window.innerHeight / 2,
            this.mouse = new THREE.Vector2();
            this.deviceBeta = 0;
            this.deviceGamma = 0;
            this.canHover = true;
            this.tick = 0;
            this.tickRotate = 0;
            var container;
            this.raycaster = new THREE.Raycaster();
            this.extraParticles = 22;
            this.backgroundParticleGroups = 25;
            this.spawnerOptions = {
                horizontalSpeed: 1.5,
                verticalSpeed: 1.33,
                timeScale: 0.2
            };
            container = document.createElement('div');
            $(container).addClass('nodeweb');
            this.$el.prepend(container);
            this.fovOffset = 1;
            if (window.innerWidth < 640) {
                this.isMobile = true;
                this.extraParticles = 5;
                this.fovOffset = 1.2;
            }

            if (window.innerWidth <= 320) {
                this.isSmallMobile = true;
                this.extraParticles = 0;
                this.fovOffset = 1.25;
            }

            if (window.innerWidth < window.innerHeight) {
                this.portrait = true;
                this.fov = 70 * this.fovOffset;
                this.squishY = 1.2;
            } else {
                this.portrait = false;
                this.fov = 42 * this.fovOffset;
                this.squishY = 0.6;
            }

            this.camera = new THREE.PerspectiveCamera( this.fov, window.innerWidth / window.innerHeight, 1, 1000 );
            this.scene = new THREE.Scene();
            this.camera.position.z = 230;
            var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
            if ( webglAvailable() && !isChrome ) {
                this.renderer = new THREE.WebGLRenderer();
                this.isWebGL = true;
             } else {
               this.renderer = new THREE.CanvasRenderer();
            }
            this.renderer.setPixelRatio( window.devicePixelRatio );
            this.renderer.setSize( window.innerWidth, window.innerHeight );
            this.renderer.sortObjects = false;
            //this.renderer.setClearColor( 0xFFFFFF, 1 );
            container.appendChild( this.renderer.domElement );

            this.points = [];
            this.textSprites = [];
            this.cvList = [];
            this.linkPoints = [];
            //TODO ...unreliable spacing on canvas for text sprites, hacky fix
            var sets = [
                    {
                        textParams: {
                            fontface: 'DINNextLTPro-Regular',
                            fontsize: 24,
                            backgroundColor: {r: 255, g: 5, b: 5, a: 0},
                            borderThickness: 24,
                            borderColor: {r: 255, g: 255, b: 255, a: 0},
                            textColor: {r: 255, g: 255, b: 255, a:0.9},

                        },
                        baseColor: '#ffffff',
                        scale: 2,
                        points: [
                            {label: '                Studies', connections: [0], url: '/other_pages/about.html',cVParents:[2]},
                            {label: '                Work', connections: [0,1], url: '/other_pages/about.html',cVParents:[2]},
                            {label: '                Projects', connections: [0,1,2], url: '/other_pages/about.html',cVParents:[2]},
                            {label: '                Publications', connections: [1,2,3], url: '/other_pages/about.html',cVParents:[2]},
                            {label: '                Hobbies', connections: [2,3,4], url: '/other_pages/about.html',cVParents:[2]},
                        ]
                    }
                ];

            this.textGeometry = new THREE.Geometry();
            this.geometry = new THREE.Geometry();
            this.geometry.verticesNeedUpdate = true;
            this.nodes = new THREE.Object3D();
            this.lines = [];

        //  make background floaties
             this.bgExtrasScene = new THREE.Scene();
             this.bgExtrasCam = new THREE.PerspectiveCamera( 42, window.innerWidth / window.innerHeight, 1, 1000 );
             this.bgExtrasCam.position.z = 420;
             this.bgExtrasScene.add(this.bgExtrasCam);
            // this.pointTrios = [];
            // for (var j = 0; j < this.backgroundParticleGroups; j++) {
            //     var pointTrio = new PointTrio();
            //     this.pointTrios.push(pointTrio.group);
            //     this.bgExtrasScene.add(pointTrio.group);
            // }
        //add background image
            var bgTexture = new THREE.TextureLoader().load( '../static/img/home-background.jpg' );
            var bg = new THREE.Mesh(
              new THREE.PlaneGeometry(2, 2, 0),
              new THREE.MeshBasicMaterial({map:bgTexture})
            );

            bg.material.depthTest = false;
            bg.material.depthWrite = false;
            bg.material.overdraw = true; //fixes diagonal line
            this.bgScene = new THREE.Scene();
            this.bgCam = new THREE.Camera();
            this.bgScene.add(this.bgCam);
            this.bgScene.add(bg);
            var opacity;
            if (_this.isWebGL) {
                opacity = 0.35;
            } else {
                opacity = 0.55;
            }
            sets.forEach(function(set, idx){
                //create particles with text labels
                for ( var i = 0; i < set.points.length; i ++ ) {
                    var particle = new WebPoint(set, set.points[i]);
//                    console.log(particle.sprite.startPosition);
                    if ( !_this.isMobile || set.isCV ) {
                        var defaultText = _this.makeTextSprite(set.points[i].label, set.textParams);
                       // var hoverText = _this.makeTextSprite(set.points[i].label, set.hoverTextParams);

                        if(set.isCV) { //if canvas renderer
                            defaultText.position.y = -0.1;
                          //  hoverText.position.y = -0.1;
                            _this.cvList.push(particle.sprite);
                        } else {
                            defaultText.position.y = -0.05;
                         //   hoverText.position.y = -0.05;
                        }

                        defaultText.position.z = 1;
                       // hoverText.position.z = 1;
                       // hoverText.material.opacity = 0;
                        particle.sprite.add( defaultText );
                      //  particle.sprite.add( hoverText );
                    }

                    _this.geometry.vertices.push( particle.sprite.position );
                    _this.points.push( particle.sprite );
                    _this.linkPoints.push( particle.sprite );
                    particle.sprite.lines = [];
                    _this.nodes.add( particle.sprite );

                    //add lines for each connection
                    for ( var j = 0; j < set.points[i].connections.length; j++ ) {
                        var lineGeometry = new THREE.Geometry();
                        lineGeometry.verticesNeedUpdate = true;
                        lineGeometry.vertices.push(particle.sprite.position);
                        lineGeometry.vertices.push(_this.nodes.children[set.points[i].connections[j]].position);

                        var lineMaterial = new THREE.LineBasicMaterial({color: '#ffffff', opacity: opacity, transparent:true, depthWrite:false});
                       // var lineHoverMaterial = new THREE.LineBasicMaterial({color: '#28cdbd', opacity: opacity});
                        lineMaterial.transparent = true;
                        var line = new THREE.Line( lineGeometry, lineMaterial );
                        line.defaultMaterial = lineMaterial;
                       // line.hoverMaterial = lineHoverMaterial;
                        _this.lines.push( line );
                        _this.scene.add( line );
                        _this.nodes.children[set.points[i].connections[j]].lines.push(line);
                        particle.sprite.lines.push(line);
                    }
                }

            });

            for (var i = 0; i < this.cvList.length; i++ ) {
                var p = this.cvList[i];
                p.material = p.defaultMaterial;
                p.children[0].material.opacity = 0;
                p.children[1].material.opacity = 1;
            }
            //make plane for detecting intersects
            this.plane = this.makePlane();
            this.nodes.add( this.plane );
            this.scene.add( this.nodes );

        // makeExtraParticles
            var lineMaterial = new THREE.LineBasicMaterial({color: '#ffffff', opacity: opacity, transparent:true});
            this.extraLineGeometry = new THREE.Geometry();
            for ( var i = 0; i < this.extraParticles; i ++ ) {
                var particle = new WebPoint({scale:1});
                particle.sprite.material.opacity = 0.4;
                particle.sprite.isExtra = true;
                _this.geometry.vertices.push( particle.sprite.position );
                _this.points.push( particle.sprite );
                _this.nodes.add( particle.sprite );
                this.extraLineGeometry.vertices.push(particle.sprite.position);
            }
            //add line through extra particles
            var extraLine = new THREE.Line( this.extraLineGeometry, lineMaterial );
             _this.scene.add( extraLine );

            $( window ).on( 'resize', _this.onWindowResize.bind( _this ) );
            this.$( '.feat-link' ).on( 'click', _this.navigate.bind( _this ) );
            this.$( '.feat-link' ).on( 'touchend', _this.navigate.bind( _this ) );
            this.$( '.feat-link' ).on( 'mouseenter', _this.blockNodeNavigation.bind( _this ) );
            this.$( '.feat-link' ).on( 'mouseleave', _this.enableNodeNavigation.bind( _this ) );
            if (window.DeviceOrientationEvent && Modernizr.touch) {
                this.hasDeviceOrientation = true;
                window.addEventListener('deviceorientation', _this.handleOrientation.bind(_this));
            } else {
                 _this.$el.on( 'click', _this.onClick.bind( _this ) );
            }

            window.setTimeout(function(){
                _this.$el.addClass('hasLoaded');
                for ( var i = 0; i < _this.nodes.children.length; i++ ) {
                    _this.nodes.children[ i ].hovered = false;
                }
                _this.hasLoaded = true;
            }, 100); //TODO better way to start initial animation?

            _this.animate();
        },

        handleOrientation: function (event) {
               this.deviceBeta = event.beta;
               this.deviceGamma = event.gamma;
        },

        onWindowResize: function() {
            this.windowHalfX = window.innerWidth / 2;
            this.windowHalfY = window.innerHeight / 2;
            this.camera.aspect = window.innerWidth / window.innerHeight;

            if (this.windowHalfY < this.windowHalfX) {
                this.camera.fov = 42 * this.fovOffset;
                this.portrait = false;
                this.squishY = 0.6;
                this.plane.geometry.width = 160;
                this.plane.geometry.height = 230;
            } else {
                this.camera.fov = 70 * this.fovOffset;
                this.portrait = true;
                this.squishY = 1.2;
                this.plane.geometry.width = 160;
                this.plane.geometry.height = 230;
            }
            this.camera.updateProjectionMatrix();

            this.renderer.setSize( window.innerWidth, window.innerHeight );
        },

        onMouseDown: function(event) {
            this.dragOffsetStart = ( event.clientX / window.innerWidth ) * 2 - 1;
        },

        onMouseMove: function(event) {
            var _this = this;
            this.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            this.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
            this.hoverEndPos = this.mouse;

            if(this.hoverStartPosX){
                var d = Math.sqrt( (this.hoverStartPosX-this.hoverEndPos.x)*(this.hoverStartPosX-this.hoverEndPos.x) + (this.hoverStartPosY-this.hoverEndPos.y)*(this.hoverStartPosY-this.hoverEndPos.y) );
                if (d > 0.4) {
                    this.canHover = false;
                    this.resetHoverStates();
                    window.setTimeout(function(){
                        _this.canHover = true;
                    },750);
                }
            }

            this.mouseX = event.clientX - this.windowHalfX;
            this.mouseY = event.clientY - this.windowHalfY;
            this.isTouching = true;
            if(this.intersectPlane && this.intersectPlane[0]){
                 this.pos = this.intersectPlane[0].point;
            }
        },

        blockNodeNavigation: function() {
            this.canNodeNavigate = false;
        },

        enableNodeNavigation: function() {
            this.canNodeNavigate = true;
        },

        navigate: function (event) {
            if ( event && event.originalEvent.target.dataset.url ){
                this.transitioning = true;
                var link = event.originalEvent.target.dataset.url;
                this.$el.parent().addClass('transitioning');
                window.setTimeout( function() {
                   window.location = link;
                }, 1100);
            } else if ( this.canNodeNavigate && this.intersects.length && this.intersects[0].object.link && Math.abs(this.dragOffsetStart - this.mouse.x)< 0.05 ) {
                if(!this.isMobile || this.grabbedParticle.cv) {
                    this.transitioning = true;
                    var link = this.grabbedParticle.link;
                    this.$el.parent().addClass('transitioning');
                    window.setTimeout( function() {
                        window.location = link;
                    }, 1200);
                }
            }
        },

        onClick: function(event) {

            this.navigate();
            this.canHover = false;
            this.dragOffsetStart = null;
            document.body.style.cursor = 'default';
            this.isGrabbing = false;
            this.isTouching = false;
        },

        onMouseLeave: function() {
            this.dragOffsetStart = null;
            document.body.style.cursor = 'default';
            this.isGrabbing = false;
            //resetHoverStates
            for ( var k = 0; k < this.points.length; k++ ) {
                this.points[k].hovered = false;
                this.points[k].active = false;
                this.points[k].muted = false;
            }
            for ( var l=0; l < this.lines.length; l++ ) {
                this.lines[l].material = this.lines[l].defaultMaterial;
            }
        },

        onTouchStart: function( event ) {
            var event = event.originalEvent;
            if ( event.touches.length >= 1 ) {
                event.preventDefault();
                this.isTouching = true;
                this.mouseX = event.touches[ 0 ].pageX - this.windowHalfX;
                this.mouseY = event.touches[ 0 ].pageY - this.windowHalfY;
                this.mouse.x = ( event.touches[ 0 ].pageX / window.innerWidth ) * 2 - 1;
                this.mouse.y = - ( event.touches[ 0 ].pageY / window.innerHeight ) * 2 + 1;
                this.dragOffsetStart = ( event.touches[ 0 ].pageX / window.innerWidth ) * 2 - 1;
                if(this.intersectPlane && this.intersectPlane[0]){
                     this.pos = this.intersectPlane[0].point;
                }
            }
        },

        onTouchMove: function( event ) {
            var event = event.originalEvent;
            if ( event.touches.length === 1 ) {

                event.preventDefault();
                this.isTouching = true;
                this.mouseX = event.touches[ 0 ].pageX - this.windowHalfX;
                this.mouseY = event.touches[ 0 ].pageY - this.windowHalfY;
                this.mouse.x = ( event.touches[ 0 ].pageX / window.innerWidth ) * 2 - 1;
                this.mouse.y = - ( event.touches[ 0 ].pageY / window.innerHeight ) * 2 + 1;

                if(this.intersectPlane && this.intersectPlane[0]){
                     this.pos = this.intersectPlane[0].point;
                }
            }
        },

        onTouchEnd: function( event ) {
            this.navigate();
            this.canHover = false;
            this.dragOffsetStart = null;
            document.body.style.cursor = 'default';
            this.isGrabbing = false;
            this.isTouching = false;
            //resetHoverStates
            for ( var k = 0; k < this.points.length; k++ ) {
                this.points[k].hovered = false;
                this.points[k].active = false;
                this.points[k].muted = false;
            }
            for ( var l=0; l < this.lines.length; l++ ) {
                this.lines[l].material = this.lines[l].defaultMaterial;
            }

            this.mouseX = 0;
            this.mouseY = 0;
            this.mouse.x = 0;
            this.mouse.y = 0;
            this.resetHoverStates();
            this.canHover = true;
        },

        animate: function() {
            //  this.stats.begin();
            //TODO consolidate timing
            var t = 15;
            var delta = 0.004;
            this.tickLast = this.tick;
            this.tick += delta;
            //constantly update point of mouse-plane intersection not just on mouse move
            if(this.intersectPlane && this.intersectPlane[0]){
                 this.pos = this.intersectPlane[0].point;
            }
            var smallOffset;
            if(this.tick - this.tickLast < 0.1){
                smallOffset = true;
            } else {
                smallOffset = false;
            }
            this.tickRotate += delta;

            if ( this.dragOffsetStart && !this.isMobile) {
                this.tickRotate += (this.mouse.x - this.dragOffsetStart) * 0.05;
            }

            if (this.hasDeviceOrientation) {
                if (this.portrait) {
                    this.tickRotate += this.deviceGamma/500;
                } else {
                    this.tickRotate += this.deviceBeta/500;
                }
            }

            if ( this.tick < 0 ) this.tick = 0;

            //this.animateBackgroundTriangles();

            var k = -20,
            b = -0.94, springX, damperX, springY, damperY, springZ, damperZ;
            var geomLength = this.geometry.vertices.length;
            for( var i = 0; i < geomLength; i++ ) {
                //movement update
                var p = this.points[i];
                var pX = p.startPosition[0] * Math.cos(this.tickRotate) + p.startPosition[2] * Math.sin(this.tickRotate), //Math.sin(tick * points[i].spawnerOptions.horizontalSpeed) * 10 + points[i].startPosition[0],
                    pY = Math.sin(this.tick * p.spawnerOptions.verticalSpeed) * 12 + p.startPosition[1] * this.squishY ,
                    pZ = p.startPosition[2] * Math.cos(this.tickRotate) - p.startPosition[0] * Math.sin(this.tickRotate);
                this.nodes.mass = 0.1;

                if (this.hasLoaded && smallOffset) { //prevent large bouncey jumps when switching tabs

                    if (this.transitioning) {
                        this.camera.position.z -= 0.12;
                    }

                    if (p.hovered) {
                        springX = k * ( p.position.x - this.pos.x );
                        damperX = b * ( p.vx );
                        p.ax = ( springX + damperX ) / this.nodes.mass;
                        p.vx += p.ax * (t/1000);
                        this.geometry.vertices[i].x += p.vx * (t/1000);

                        springY = k * ( p.position.y - this.pos.y );
                        damperY = b * ( p.vy );
                        p.ay = ( springY + damperY ) / this.nodes.mass;
                        p.vy += p.ay * (t/1000);
                        this.geometry.vertices[i].y += p.vy * (t/1000);

                        springZ = k * ( p.position.z - 65 );
                        damperZ = b * ( p.vz );
                        p.az = ( springZ + damperZ ) / this.nodes.mass;
                        p.vz += p.az * (t/1000);
                        this.geometry.vertices[i].z += p.vz * (t/1000);
                    } else {

                        p.position.z = pZ;

                        springX = k * ( p.position.x - pX );
                        damperX = b * ( p.vx );
                        p.ax = ( springX + damperX ) / this.nodes.mass;
                        p.vx += p.ax * (t/1000);
                        p.position.x += p.vx * (t/1000);

                        springY = k * ( p.position.y - pY );
                        damperY = b * ( p.vy );
                        p.ay = ( springY + damperY ) / this.nodes.mass;
                        p.vy += p.ay * (t/1000);
                        p.position.y += p.vy * (t/1000);
                    }

                } else {
                    p.position.x = pX;
                    p.position.y = pY;
                    p.position.z = pZ;
                }
            }

            this.webGLChecks();
            this.update();
        },

        webGLChecks: function() {
            if ( this.isWebGL ) {
                for( var j = 0; j < this.lines.length; j++ ){
                    this.lines[j].geometry.verticesNeedUpdate = true;
                }
                this.extraLineGeometry.verticesNeedUpdate = true;
            }
        },

        animateBackgroundTriangles: function() {
            for (var i = 0; i < this.pointTrios.length; i++) {
                var pT = this.pointTrios[i];
                pT.rotation.y += pT.vRotY;
                pT.rotation.z += pT.vRotZ;
                pT.position.x += pT.vX;
                pT.position.y += pT.vY;

                if (Math.abs(pT.position.y) > 140 ) {
                    pT.position.y = 130 * (pT.directionY)*-1;
                }

                if (Math.abs(pT.position.x) > 300) {
                    pT.position.x = 290 * (pT.directionX)*-1;
                }
            }
        },

        update: function() {

            if(!this.isMobile){
                this.camera.position.x += ( this.mouseX * 0.2 - this.camera.position.x ) * 0.03;
                this.camera.position.y += ( - this.mouseY * 0.3 - this.camera.position.y ) * 0.04;
            } else {
                this.camera.position.y += ( - this.deviceBeta+45 * 0.7 - this.camera.position.y ) * 0.03;
            }
            this.camera.lookAt( this.scene.position );

            if (this.hasLoaded) {
                this.checkHovers();
            }
            requestAnimationFrame( this.animate.bind(this) );
            //render background image
            this.renderer.autoClear = false;
            this.renderer.clear();
            this.renderer.render(this.bgScene, this.bgCam);
            this.renderer.render(this.bgExtrasScene, this.bgExtrasCam);
            //render points
            this.renderer.render( this.scene, this.camera );

        },

        enableHovers: function() {
            this.canHover = true;
        },
        disableHovers: function() {
            this.canHover = false;
            this.resetHoverStates();
        },
        checkHovers: function () {
            // update the picking ray with the camera and mouse position
            if (this.canHover) {
                this.raycaster.setFromCamera( this.mouse, this.camera );
                // calculate objects intersecting the picking ray
                this.intersects = this.raycaster.intersectObjects( this.linkPoints );
                this.intersectPlane = this.raycaster.intersectObjects( [this.plane] );
                var intersectLength = this.intersects.length;
                //set hovered of particle and its active connections
                for ( var i = 0; i < intersectLength; i++ ) {
                    var intersect = this.intersects[ i ].object;
                    if ( intersect.isParticle && !intersect.isExtra && !this.isGrabbing && this.isTouching ) {
                        intersect.hovered = true;
                        this.hoverStartPosX = this.mouse.x;
                        this.hoverStartPosY = this.mouse.y;
                        this.grabbedParticle = intersect;
                        this.isGrabbing = true;
                        document.body.style.cursor = 'pointer';
                        if (intersect.connections) {
                            //set active connections
                            for (var j=0; j < intersect.connections.length; j++) {
                                this.points[intersect.connections[j]].active = true;
                            }
                            if ( !this.isMobile ) {
                                this.muteOtherCV([intersect.cv]);
                            }
                        }
                    }
                }
            } else {
                this.intersects = this.intersectPlane = [];
            }

            //reset non hover
            if ( this.intersectPlane.length === 0 ) {
                this.resetHoverStates();
            }
        },

        muteOtherCV: function(selected) {

            for (var i=0; i < this.cvList.length; i++) {
                if ( selected.indexOf(i+1) < 0 ) {
                    this.cvList[i].muted = true;
                }
            }
        },

        resetHoverStates: function() {
            document.body.style.cursor = 'default';
            this.isGrabbing = false;

            var pointsLength = this.points.length - this.extraParticles;
            //points to default state
            for ( var i = 0; i < pointsLength; i++ ) {
                var p = this.points[i];
                p.hovered = false;
                p.active = false;
                p.muted = false;
                for (var j = 0; j < p.lines.length; j++) {
                    p.lines[j].material =  p.lines[j].defaultMaterial;
                }
            }
        },

        remove: function() {
            var _this = this;
            $(window).off('resize', _this.onWindowResize);
            Backbone.View.prototype.remove.apply(_this, arguments);
        },

        makeTextSprite: function( message, parameters ) {
            if ( parameters === undefined ) parameters = {};
            var fontface = parameters.hasOwnProperty('fontface') ? parameters.fontface : 'Arial';
            var fontsize = parameters.hasOwnProperty('fontsize') ? parameters.fontsize : 20;
            var borderThickness = parameters.hasOwnProperty('borderThickness') ? parameters.borderThickness : 0;
            var borderColor = parameters.hasOwnProperty('borderColor') ?parameters.borderColor : { r:0, g:0, b:0, a:1.0 };
            var backgroundColor = parameters.hasOwnProperty('backgroundColor') ?parameters.backgroundColor : { r:255, g:255, b:255, a:1.0 };
            var textColor = parameters.hasOwnProperty('textColor') ? parameters.textColor : { r:0, g:0, b:0, a:1.0 };

            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            context.font = fontsize + 'px ' + fontface;
            var metrics = context.measureText( message );
            var textWidth = metrics.width;
            if( parameters.uppercase ){
                message = message.toUpperCase();
            }
            context.fillStyle   = 'rgba(' + backgroundColor.r + ',' + backgroundColor.g + ',' + backgroundColor.b + ',' + backgroundColor.a + ')';
            context.strokeStyle = 'rgba(' + borderColor.r + ',' + borderColor.g + ',' + borderColor.b + ',' + borderColor.a + ')';
            context.lineWidth = borderThickness;
            roundRect(context, borderThickness/2, borderThickness/2, (textWidth + borderThickness) * 1.1, fontsize * 1.2 + borderThickness, 9);
            context.fillStyle = 'rgba('+textColor.r+', '+textColor.g+', '+textColor.b+',' + textColor.a+')';
            context.fillText( message, borderThickness, fontsize + borderThickness);

            var texture = new THREE.Texture(canvas);
            texture.needsUpdate = true;
            var spriteMaterial = new THREE.SpriteMaterial( { map: texture } );
            var sprite = new THREE.Sprite( spriteMaterial );
            //webgl renders font size differently than canvas
            if(this.isWebGL) {
                sprite.scale.set(0.075 * fontsize, 0.0325 * fontsize, 0.1125 * fontsize);
            }
            else {
                sprite.scale.set(1.5 * fontsize, 0.75 * fontsize, 2.25 * fontsize);
            }
            sprite.material.useScreenCoordinates = true;
            this.textSprites.push(sprite);
            return sprite;
        },

        makePlane: function() {
            var width, height;
            if (window.innerWidth <  window.innerHeight) {
                width = 190;
                height = 230;
            } else {
                width = 240;
                height = 150;
            }
            var planeGeometry = new THREE.PlaneGeometry( width, height, 1 );
            var planeMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00, transparent: true, opacity:0, depthWrite: false} );
            var plane = new THREE.Mesh( planeGeometry, planeMaterial );
            plane.position.z = 50;
            return plane;
        }

    });

    function webglAvailable() {
        try {
            var canvas = document.createElement( 'canvas' );
            return !!( window.WebGLRenderingContext && (
                canvas.getContext( 'webgl' ) ||
                canvas.getContext( 'experimental-webgl' ) )
            );
        } catch ( e ) {
            return false;
        }
    }

    function roundRect(ctx, x, y, w, h, r) { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.lineTo(x + w - r, y); ctx.quadraticCurveTo(x + w, y, x + w, y + r); ctx.lineTo(x + w, y + h - r); ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h); ctx.lineTo(x + r, y + h); ctx.quadraticCurveTo(x, y + h, x, y + h - r); ctx.lineTo(x, y + r); ctx.quadraticCurveTo(x, y, x + r, y); ctx.closePath(); ctx.fill(); ctx.stroke(); }

    app.registerComponent('web', webModule);
})(jQuery, Backbone, App, THREE);


})();

(function() {

/* jshint camelcase: false */

(function ($, backbone, app) {
    var basePage = backbone.View.extend({
        stubData: {
            'hero': {
                'images': [
                    {
                        'src_default': '/static/img/content/large/network/hero-network.jpg',
                        'src_mobile': '/static/img/content/small/responsibility/hero-responsibility.jpg'
                    },
                    {
                        'src_default': '/static/img/content/large/responsibility/hero-responsibility.jpg',
                        'src_mobile': '/static/img/content/small/network/hero-network.jpg'
                    }
                ],
                'title': 'Network',
                'hero_content': 'WME | IMG is committed to bringing the most innovative and creative opportunities to our world-class clients, employees and partners across:'
            },
            'content_description': 'Here are some of the remarkable companies in our network that we own, partner with in a joint venture, or have created:',
            'tiles': [
                {
                    'images': [{
                        'src':'../../static/img/content/medium/network/network-art-commerce.png',
                        'alt':''
                    }],
                    'title':'Art + Commerce',
                    'overview':'Pioneering agency representing sought-after image makers working in photography, film, set design, illustration, styling and more',
                    'links': [{
                        'type':'external',
                        'text':'Explore',
                        'src':'http://www.artandcommerce.com'
                    }],
                    'hideTitle': true
                },
                {
                    'images': [{
                        'src':'../../static/img/content/medium/network/network-collegiate-licensing-company.png',
                        'alt':'Collegiate Licensing Company'
                    }],
                    'title':'Collegiate Licensing Company',
                    'overview':'Leading collegiate trademark licensing company with nearly 200 institutions served',
                    'links': [{
                        'type':'external',
                        'text':'Explore',
                        'src':'http://www.clc.com'
                    }],
                    'hideTitle': true
                },
                {
                    'images': [{
                        'src':'../../static/img/network/network-dixon-talent.jpg',
                        'alt':'dixon talent'
                    }],
                    'title':'Dixon Talent',
                    'overview':'A preeminent representative of comedic artists and personalities',
                    'hideTitle': true
                },
                {
                    'images': [{
                        'src':'../../static/img/content/medium/network/network-droga5.png',
                        'alt':''
                    }],
                    'title':'Droga5',
                    'overview':'Creative powerhouse named <span class=\'italic\'>AdAge</span> and <span class=\'italic\'>Creativity’s</span> 2016 Agency of the Year',
                    'links': [{
                        'type':'external',
                        'text':'Explore',
                        'src':'http://www.droga5.com'
                    }],
                    'hideTitle': true
                },
                {
                    'images': [{
                        'src':'../../static/img/content/medium/network/network-e-league.png',
                        'alt':''
                    }],
                    'title':'ELEAGUE',
                    'overview':'First-of-its-kind televised eSports league created by WME | IMG and Turner',
                    'links': [{
                        'type':'external',
                        'text':'Explore',
                        'src':'http://www.e-league.com'
                    }],
                    'hideTitle': true
                },
                {
                    'images': [{
                        'src':'../../static/img/content/medium/network/network-euroleague.png',
                        'alt':''
                    }],
                    'title':'Euroleague',
                    'overview':'Joint venture partner dedicated to creating a groundbreaking platform for the development of European basketball',
                    'links': [{
                        'type':'external',
                        'text':'Explore',
                        'src':'http://euroleague.net'
                    }],
                    'hideTitle': true
                },
                {
                    'images': [{
                        'src':'../../static/img/content/medium/network/network-fusion-marketing.png',
                        'alt':'Fusion marketing'
                    }],
                    'title':'Fusion Marketing',
                    'overview':'Leading experiential marketing agency with large scale production capabilities that leverage experiential events, social and digital activations',
                    'links': [{
                        'type':'external',
                        'text':'Explore',
                        'src':'http://thisisfusion.com'
                    }],
                    'hideTitle': true
                },
                {
                    'images': [{
                        'src':'../../static/img/content/medium/network/network-frieze.png',
                        'alt':'Frieze'
                    }],
                    'title':'Frieze',
                    'overview':'A leading arts media and events company',
                    'links': [{
                        'type':'external',
                        'text':'Explore',
                        'src':'http://frieze.com'
                    }],
                    'hideTitle': true
                },
                {
                    'images': [{
                        'src':'../../static/img/network/network-heed.png',
                        'alt':''
                    }],
                    'title':'AGT International',
                    'overview':'Joint venture with data analytics leader AGT leveraging Internet of Things technology to enhance the live event experience for consumers',
                    'hideTitle': true
                },
                {
                    'images': [{
                        'src':'../../static/img/network/network-img.png',
                        'alt':''
                    }],
                    'title':'IMG',
                    'overview':'A global leader in sports, events, media and fashion, operating in more than 30 countries',
                    'hideTitle': true
                },
                {
                    'images': [{
                        'src':'../../static/img/content/medium/network/network-img-live.png',
                        'alt':'img live'
                    }],
                    'title':'IMG LIVE',
                    'overview':'Leading experiential marketing agency specializing in creating memorable brand experiences for its clients’ sports, entertainment and lifestyle sponsorships',
                    'links': [{
                        'type':'external',
                        'text':'Explore',
                        'src':'http://www.imglive.com'
                    }],
                    'hideTitle': true
                },
                {
                    'images': [{
                        'src':'../../static/img/content/medium/network/network-kovert-creative.png',
                        'alt':''
                    }],
                    'title':'Kovert Creative',
                    'overview':'Creatively-driven agency bringing together brands and talent in the core areas of digital services, personal representation, brand marketing and communications',
                    'links': [{
                        'type':'external',
                        'text':'Explore',
                        'src':'http://www.kovertcreative.com'
                    }],
                    'hideTitle': true
                },
                {
                    'images': [{
                        'src':'../../static/img/content/medium/network/network-made.png',
                        'alt':'MADE'
                    }],
                    'title':'MADE',
                    'overview':'Cutting-edge fashion week featuring emerging designers in approximately 30 runway shows and presentations each season, occurring simultaneously with New York Fashion Week',
                    'links': [{
                        'type':'external',
                        'text':'Explore',
                        'src':'http://www.ma.de'
                    }],
                    'hideTitle': true
                },
                {
                    'images': [{
                        'src':'../../static/img/content/medium/network/network-miss-universe.png',
                        'alt':'Miss Universe'
                    }],
                    'title':'The Miss Universe Organization',
                    'overview':'Global organization founded by women for women, distributed in more than 190 countries and seen by a half billion people annually',
                    'links': [{
                        'type':'external',
                        'text':'Explore',
                        'src':'http://www.missuniverse.com'
                    }],
                    'hideTitle': true
                },
                {
                    'images': [{
                        'src':'../../static/img/content/medium/network/network-pro-bull-riders.png',
                        'alt':'Pro Bull Riders'
                    }],
                    'title':'Professional Bull Riders',
                    'overview':'America’s original extreme sport hosting more than 300 annual events and reaching half a billion television viewers in 50 countries',
                    'links': [{
                        'type':'external',
                        'text':'Explore',
                        'src':'http://www.pbr.com'
                    }],
                    'hideTitle': true
                },
                {
                    'images': [{
                        'src':'../../static/img/content/medium/network/network-the-wall-group.png',
                        'alt':'The Wall Group'
                    }],
                    'title':'The Wall Group',
                    'overview':'Leading artist management and consulting agency representing hairstylists, makeup artists, fashion stylists and the like',
                    'links': [{
                        'type':'external',
                        'text':'Explore',
                        'src':'http://www.thewallgroup.com'
                    }],
                    'hideTitle': true
                },
                {
                    'images': [{
                        'src':'../../static/img/network/network-wme.png',
                        'alt':''
                    }],
                    'title':'WME',
                    'overview':'A leading global entertainment agency representing artists and experts across books, digital media, film, food, music, television and theater',
                    'hideTitle': true
                }
            ],
            'rosters': [
                {
                    'title' : 'Female',
                    'groups' : [
                        {
                            'index' : 'G',
                            'names': [
                                {
                                    'label': 'Felicia Day',
                                    'src': 'http://wmeclients.com/comedy/comedian/DAVID-ARNOLD'
                                },
                                {
                                    'label': 'Freestyle Love Supreme',
                                    'src': 'http://wmeclients.com/comedy/comedian/FREESTYLE-LOVE-SUPREME'
                                }
                            ]
                        },
                        {
                            'index' : 'F',
                            'items': [
                                {
                                    'label': 'Felicia Day',
                                    'src': 'http://wmeclients.com/comedy/comedian/DAVID-ARNOLD'
                                },
                                {
                                    'label': 'Freestyle Love Supreme',
                                    'src': 'http://wmeclients.com/comedy/comedian/FREESTYLE-LOVE-SUPREME'
                                }
                            ]
                        },
                        {
                            'index' : 'F',
                            'items': [
                                {
                                    'label': 'Felicia Day',
                                    'src': 'http://wmeclients.com/comedy/comedian/DAVID-ARNOLD'
                                },
                                {
                                    'label': 'Freestyle Love Supreme',
                                    'src': 'http://wmeclients.com/comedy/comedian/FREESTYLE-LOVE-SUPREME'
                                }
                            ]
                        }
                    ]
                },
                {
                    'title' : 'Male',
                    'items' : [
                        {
                            'index' : 'G',
                            'items': [
                                {
                                    'label': 'Felicia Day',
                                    'src': 'http://wmeclients.com/comedy/comedian/DAVID-ARNOLD'
                                },
                                {
                                    'label': 'Freestyle Love Supreme',
                                    'src': 'http://wmeclients.com/comedy/comedian/FREESTYLE-LOVE-SUPREME'
                                }
                            ]
                        },
                        {
                            'index' : 'F',
                            'items': [
                                {
                                    'label': 'Felicia Day',
                                    'src': 'http://wmeclients.com/comedy/comedian/DAVID-ARNOLD'
                                },
                                {
                                    'label': 'Freestyle Love Supreme',
                                    'src': 'http://wmeclients.com/comedy/comedian/FREESTYLE-LOVE-SUPREME'
                                }
                            ]
                        },
                        {
                            'index' : 'F',
                            'items': [
                                {
                                    'label': 'Felicia Day',
                                    'src': 'http://wmeclients.com/comedy/comedian/DAVID-ARNOLD'
                                },
                                {
                                    'label': 'Freestyle Love Supreme',
                                    'src': 'http://wmeclients.com/comedy/comedian/FREESTYLE-LOVE-SUPREME'
                                }
                            ]
                        }
                    ]
                }
            ],
            'articles': [
                {
                    'title':'WME | IMG Foundation',
                    'overview': 'We partner with public schools in our communities to offer the following:<p><span class=\'highlight\'>Programming</span> – We identify non-profit organizations to deliver arts-based and wellness programs to students</p><p><span class=\'highlight\'>Mentorships</span> – Our employees serve as mentors to elementary, middle and high school students</p><p><span class=\'highlight\'>Summer Camp</span> – Our employees design the curriculum and serve as camp counselors. The program now extends beyond the summer to include year-round programming</p><p><span class=\'highlight\'>Teacher support</span> – We host regular appreciation events for our teachers and help them raise funds</p><p><span class=\'highlight\'>Volunteering</span> – We stage and host regular volunteer opportunities including readings, career days and environmental activities</p>',
                    'gallery': [
                        {'images': [{
                        'src':'../static/img/content/large/responsibility/body-responsibility-foundation-1.jpg',
                            'alt':'Responsibility foundation 1'
                        },
                        {
                        'src':'../static/img/content/large/responsibility/body-responsibility-foundation-2.jpg',
                            'alt':'Responsibility foundation 2'
                        }]},
                        {'images': [{
                        'src':'../static/img/content/large/responsibility/body-responsibility-foundation-1.jpg',
                            'alt':'Responsibility foundation 1'
                        },
                        {
                        'src':'../static/img/content/large/responsibility/body-responsibility-foundation-2.jpg',
                            'alt':'Responsibility foundation 2'
                        }]}
                    ],
                    'footer_paragraph': 'On the third Thursday of October we close our offices so our nearly 5,000 employees can give back to the communities in which we work and play. During this \'Walk the Walk\' event we partner with 100+ nonprofit organizations on projects including building homes, caring for animals, reading to school children, planting trees, visiting senior citizens and conducting creative think tanks with major organizations.'
                },
                {
                    'title':'Client Services',
                    'overview': 'Our work extends beyond our own mission to support the philanthropic endeavors of our clients. We’ve created a variety of services to support their efforts:<p><span class=\'highlight\'>Donor Advised Funds</span> ​– We provide clients with branded, taxadvantaged solutions to handling their contributions</p><p><span class=\'highlight\'>Leaders in Philanthropy Roundtable Series​</span> – We bring together our clients’ foundation leadership teams for quarterly workshops in Los Angeles and New York to collaborate and share key learnings</p><p><span class=\'highlight\'>Consultation​</span> – We provide ongoing counsel for everything from financial management advice to marketing to event planning and more</p>',
                    'gallery': [
                        { 'images': [{
                        'src':'../static/img/content/large/responsibility/body-responsibility-foundation-1.jpg',
                            'alt':'Responsibility foundation 1'
                        },
                        {
                        'src':'../static/img/content/large/responsibility/body-responsibility-foundation-2.jpg',
                            'alt':'Responsibility foundation 2'
                        }]},
                        {'images': [{
                        'src':'../static/img/content/large/responsibility/body-responsibility-foundation-1.jpg',
                            'alt':'Responsibility foundation 1'
                        },
                        {
                        'src':'../static/img/content/large/responsibility/body-responsibility-foundation-2.jpg',
                            'alt':'Responsibility foundation 2'
                        }]}
                    ]
                }
            ]

        },

        template: TEMPLATES['base.hbs'],

        initialize: function () {
            this.imagesToRandomize = ['tiles'];
            this.fetchData();
        },

        fetchData: function () {
            var _this = this;
            $.ajax({
                url: window.location + '?format=json',
                success: function (result) {

                    var newData = _this.parseRosters(_this.randomizeImages(result));

                    _this.$el.html(_this.template({
                        model: newData
                    }));
                    if(result.hero) {
                        _this.renderHero(result.hero);
                    }
                    if(result.articles) {
                        _this.renderArticles(result.articles);
                    }
                }
            });
        },

        renderHero: function(hero) {
            var heroModel = new backbone.Model({
                model: hero
            });
            var heroModule = new App._componentNameRegistry.hero.view({model: heroModel});
            heroModule.render();
            this.$el.find('.layout__hero').append(heroModule.el);

        },

        renderArticles: function(articles) {
            var _this = this;
            articles.forEach(function(item) {
                var articleModel = new backbone.Model({
                    model: item
                });
                var articleModule = new App._componentNameRegistry.article.view({model: articleModel});
                articleModule.render();
                _this.$el.find('.articles').append(articleModule.el);
            });
        },

        randomizeImages: function(data) {
            this.imagesToRandomize.forEach(function(key) {
                if(data[key]) {

                    data[key].map(function(item) {
                        var imgIdx = Math.floor(Math.random() * item.images.length);
                        item.image = item.images[imgIdx];
                    });
                }
            });
            return data;
        },

        parseRosters: function(data) {
            data.rosters = [];
            var groups = [], lastGroup;
            //find top level groups (male/female)
            data.roster_items.forEach(function(item) {
                if (item.group_name !== lastGroup) {
                    lastGroup = item.group_name;
                    groups.push(item.group_name);
                }
            });
            var rosterGroups = groups.map(function(group) {
                var subGroups = [], lastSubGroup;
                //find items that share top level group
                var groupItems = data.roster_items.filter(function(item) {
                    return item.group_name === group;
                });

                //find subgroups for that top level group
                groupItems.forEach(function(name) {
                    if (name.first_letter !== lastSubGroup) {
                        lastSubGroup = name.first_letter;
                        subGroups.push(name.first_letter);
                    }
                });

                var mappedSubGroups = subGroups.map(function(subGroup) {
                    var names = groupItems.filter(function(name) {
                        return name.first_letter === subGroup;
                    });

                    var set = {
                        index: subGroup,
                        names: names
                    };
                    return set;
                });

                var masterGroup = {
                    title: group,
                    groups: mappedSubGroups
                };
                return masterGroup;

            });

            data.rosters = rosterGroups;
            return data;
        }
    });

    app.registerComponent('page', basePage);
})(jQuery, Backbone, App);


})();

(function() {

/*jshint camelcase: false */


(function ($, backbone, app) {

    var BookingsPageModule = backbone.View.extend({

        initialize: function () {

            this.BOOKINGS_HERO_API_URL = '/heros/bookings?format=json';
            this.fetch();

        },

        render: function () {

        },

        fetch: function () {
            var _this = this;
            $.ajax({
                url: _this.BOOKINGS_HERO_API_URL,
                success: function (result) {
                    _this.renderHero(result);
                    _this.$el.find('.layout__content-description').html(result.page_intro);
                }
            });
        },

        renderHero: function(hero) {
            var heroModel = new backbone.Model({
                model: hero
            });
            var heroModule = new App._componentNameRegistry.hero.view({model: heroModel});
            heroModule.render();
            this.$el.find('.layout__hero').append(heroModule.el);

        },

        /* ------------ End Event Methods ------------ */


        /* ------------ Removal Methods ------------ */

        removeErrorMessage: function () {
            if (this.ERROR_MESSAGE) {
                this.ERROR_MESSAGE.remove();
                this.ERROR_MESSAGE = null;
            }
        },

        remove: function () {
            // app.document.off('click');
            Backbone.View.prototype.remove.call(this);
        },

        /* ------------ End Removal Methods ------------ */

    });

    app.registerComponent('bookings-page', BookingsPageModule);
})(jQuery, Backbone, App);


})();

(function() {

/* jshint camelcase: false */
(function ($, backbone, app) {

    var careersPage = backbone.View.extend({

        template: TEMPLATES['careers.hbs'],

        initialize: function () {
            this.CAREERS_API_URL = '/careers/?format=json';
            this.fetchData();
        },

        fetchData: function () {
            var _this = this;
            $.ajax({
                url: this.CAREERS_API_URL,
                success: function (result) {
                    var specialtyLinks = {
                        type: 'Specialty Areas',
                        items: result.results[0].specialty_links
                    };
                    var regionalLinks = {
                        type: 'Regional',
                        items: result.results[0].regional_links
                    };
                    _this.$el.html(_this.template({
                        page_intro: result.results[0].page_intro,
                        specialty_links: specialtyLinks,
                        regional_links: regionalLinks
                    }));
                    _this.renderHero(result.results[0]);
                }
            });
        },

        renderHero: function(data) {
            var model = {
                title: data.hero_title,
                images: data.hero_images,
                mobile_images: data.hero_mobile_images,
                content: data.content
            };
            var heroModel = new backbone.Model({
                model: model
            });
            var heroModule = new App._componentNameRegistry.hero.view({model: heroModel});
            heroModule.render();
            this.$el.find('.layout__hero').append(heroModule.el);

        },
    });

    app.registerComponent('careers-page', careersPage);
})(jQuery, Backbone, App);


})();

(function() {

/*jshint camelcase: false */


(function ($, backbone, app) {

	var ContactsPageModule = backbone.View.extend({

		initialize: function () {

			this.CONTACTS_HERO_API_URL = '/heros/our-properties?format=json';
			this.fetch();

		},

		render: function () {

		},

		fetch: function () {
			var _this = this;
			$.ajax({
				url: _this.CONTACTS_HERO_API_URL,
				success: function (result) {
					_this.renderHero(result);
					_this.$el.find('.layout__content-description').html(result.page_intro);
				}
			});
		},

		renderHero: function(hero) {
			var heroModel = new backbone.Model({
				model: hero
			});
			var heroModule = new App._componentNameRegistry.hero.view({model: heroModel});
			heroModule.render();
			this.$el.find('.layout__hero').append(heroModule.el);

		},

		/* ------------ End Event Methods ------------ */


		/* ------------ Removal Methods ------------ */

		removeErrorMessage: function () {
			if (this.ERROR_MESSAGE) {
				this.ERROR_MESSAGE.remove();
				this.ERROR_MESSAGE = null;
			}
		},

		remove: function () {
			// app.document.off('click');
			Backbone.View.prototype.remove.call(this);
		},

		/* ------------ End Removal Methods ------------ */

	});

	app.registerComponent('contacts-page', ContactsPageModule);
})(jQuery, Backbone, App);


})();

(function() {

(function ($, backbone, app) {
	var homePage = backbone.View.extend({

		initialize: function () {
			var _this = this;
			this.$el.css('min-height',($(window).height() - 52));
			$( window ).on( 'resize', _this.onWindowResize.bind( _this ) );
		},

		onWindowResize: function() {
			this.$el.css('min-height',($(window).height() - 52));
		}

	});

	app.registerComponent('home', homePage);
})(jQuery, Backbone, App);


})();

(function() {

/*jshint camelcase:false*/
(function ($, backbone, app) {
    var newsPage = backbone.View.extend({
        events: {
            'click .toggleOpen': 'onToggleOpen',
        },

        template: TEMPLATES['news.hbs'],

        initialize: function () {
            this.fetchData();
        },

        fetchData: function () {
            var _this = this;
            $.ajax({
                url: window.location.href + '?format=json',
                success: function (result) {
                    _this.$el.html(_this.template({
                        model: result.results[0]
                    }));
                    _this.renderHero(result.results[0].hero);
                }
            });
        },

        renderHero: function(hero) {
            var heroModel = new backbone.Model({
                model: hero
            });
            var heroModule = new App._componentNameRegistry.hero.view({model: heroModel});
            heroModule.render();
            this.$el.find('.layout__hero').append(heroModule.el);

        }
    });

    app.registerComponent('news-page', newsPage);
})(jQuery, Backbone, App);


})();

(function() {

/*jshint camelcase:false*/
(function ($, backbone, app) {
    var officePage = backbone.View.extend({
        events: {
            'click .toggleOpen': 'onToggleOpen',
        },

        template: TEMPLATES['offices.hbs'],

        initialize: function () {
            this.fetchData();
        },
        //FIXME: collapsable.js module not initializing, had to move it here
        onToggleOpen: function(event) {
            if ($(event.currentTarget).parent().hasClass('isOpen')) {
                $(event.currentTarget).html('<span>+</span> Explore Additional Locations <span>+</span>');
                this.isOpen = false;
                window.setTimeout(function(){
                    $(event.currentTarget).parent().toggleClass('isOpen');
                },400);
                $(event.currentTarget).siblings('.inner').toggleClass('isOpen');
            } else {
                this.isOpen = true;
                $(event.currentTarget).html('<span>-</span> Explore Fewer Locations <span>-</span>');
                window.setTimeout(function(){
                    $(event.currentTarget).siblings('.inner').toggleClass('isOpen');
                },100);
                $(event.currentTarget).parent().toggleClass('isOpen');
            }
        },

        fetchData: function () {
            var _this = this;
            $.ajax({
                url: window.location.href + '?format=json',
                success: function (result) {
                    var parsedOffices = _this.parseOffices(result.results[0].offices);
                    _this.$el.html(_this.template({
                        regions: parsedOffices
                    }));
                    _this.renderHero(result.results[0].hero);
                    _this.renderArticles(result.results[0].articles);
                }
            });
        },

        renderArticles: function(articles) {
            var _this = this;
            articles.forEach(function(item) {
                var articleModel = new backbone.Model({
                    model: item
                });
                var articleModule = new App._componentNameRegistry.article.view({model: articleModel});
                articleModule.render();
                _this.$el.find('.articles').append(articleModule.el);
            });
        },

        parseOffices: function (data) {
            var GROUPS = ['HEADQUARTERS'];
            return GROUPS.map(function(group){
                var regionOffices = data.filter(function(office){
                    return office.region === group;
                });
                var featured = regionOffices.filter(function(office) {
                   return office.is_featured;
                }).sort(function (a,b) {
                    return a.featured_order > b.featured_order;
                });
                var subgroups = ['WME','IMG','AMERICAS', 'ASIA PACIFIC', 'EUROPE/MIDDLE EAST/AFRICA'];
                var extraOffices = subgroups.map(function(subgroup){
                	var offices = regionOffices.filter(function(office) {
	                   return !office.is_featured && office.company === subgroup;
	                });
	                var hasOffices = offices.length > 0;
                	return {
                		title: subgroup,
                		offices: offices,
                		hasOffices: hasOffices
                	};
                });

                return {
                    region: group,
                    featured: featured,
                    officeGroups: extraOffices
                };
            });
        },

        renderHero: function(hero) {
            var heroModel = new backbone.Model({
                model: hero
            });
            var heroModule = new App._componentNameRegistry.hero.view({model: heroModel});
            heroModule.render();
            this.$el.find('.layout__hero').append(heroModule.el);

        }
    });

    app.registerComponent('offices', officePage);
})(jQuery, Backbone, App);


})();
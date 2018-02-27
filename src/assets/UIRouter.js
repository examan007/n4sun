var UIRouter = {name: "unknown"};
execute_routerApp();
define(["require", "exports"], function(require, exports){
   exports.value = UIRouter.name;
   exports.getUIRouter = function () {
        return (UIRouter);
   }
   exports.getObjects = function () {
        return (UIRouter.objects);
   }
   exports.getTemplate = function () {
        return (UIRouter.template);
   }
   exports.getResults = function () {
        return (UIRouter.results);
   }
   exports.initUIRouter = function (component) {
       UIRouter.component = component;
       startApplication();
   }
   exports.readSingleFile = function (obj, suffix) {
        readSingleFile(obj, suffix);
   }
   exports.getTemplates = function () {
    return (UIRouter.templates);
   }
});
var UIRToolbar = null;
var UIRDropdown = null;
function execute_routerApp() {
    UIRouter.component = null;
    UIRouter.objects = [];
    UIRouter.results = [];
    UIRouter.options = [];
    UIRouter.ActiveObj = 'default';
    UIRouter.Current = 'default';
    UIRouter.getOptions = function (obj) {
        console.log('getOptions ' + JSON.stringify(obj));
        return (UIRouter.options[obj.Key]);
    }
    UIRouter.findObject = function (key) {
        var ret =  null;
        UIRouter.objects.forEach( function (obj) {
            if (obj.Key === key) {
              ret = obj;
            }
        });
        return (ret);
    }
    UIRouter.update = function () {
        try {
            UIRouter.component.updateObjects();
         } catch (e) {
            console.log(e);
        }
    }
    UIRouter.initData = function (objmap, optmap) {
        UIRouter.objects = objmap;
        UIRouter.options = [];
        optmap.forEach( function (option) {
            if (typeof(option.Operation) === 'undefined') { } else {
                var operation = option.Operation.substr(1);
                console.log('initData operation=[' + operation + '] ' + JSON.stringify(option));
                if (typeof(UIRouter.options[operation]) === 'undefined') {
                    UIRouter.options[operation] = [];
                }
                UIRouter.options[operation].push(option);
            }
        });
        UIRouter.update();
    }
    UIRouter.setOptions =  function (objname) {
        for (obj in UIRouter.options) {
            var test = '-' + obj;
            console.log('setOptions(); options=' + test);
            try {
                var tag = '#Dropdown' + test;
                console.log('setOptions(); tag=[' + tag + '] objname=[' + objname + ']');
                if (objname !== test) {
                       $(tag).hide();
//                   $(tag).css('visibility', 'hidden');
                } else {
                       $(tag).show();
//                   $(tag).css('visibility', 'visible');
                }
            } catch (e) {
                console.log('setOptions ' + e.toString());
            }
        }
    }
    UIRouter.select = function (obj, flag) {
        if (flag == true) {
          console.log('obj=' + JSON.stringify(obj));
          UIRouter.setOptions('-' + obj.Key);
        } else {
          console.log('leave=' + JSON.stringify(obj));
          UIRouter.setOptions('-');
        }
    }
    UIRouter.execopt = function (obj, opt, flag) {
         UIRouter.select(obj, flag)
    }
    UIRouter.CheckState = '';
    UIRouter.checkClick=  function (event, obj) {
        if (ContactManager.isDevice == false) { } else
        if (obj.Key === UIRouter.CheckState) { } else {
            event.preventDefault();
            UIRouter.CheckState = obj.Key;
        }
    }
    UIRouter.initializeComplete = function () {
        initialize()();
        function initialize() {
            return (function () {
                UIRouter.initData(UIRToolbar.DataMap.map, UIRDropdown.DataMap.map);
                //run();
                UIRouter.setOptions('-');
                function run() {
                    angular.bootstrap(document.getElementById("Account"), ['useApp']);
                    Application.initialize();
                    Controller.startApp();
                }
            });
        }
    }
}
function startApplication() {
    ParamObj.getParametersData( function () {
        UIRToolbar = RepeatObj.addList('uirouter', '/data/Toolbar.json', function () {
            console.log('toolbar=' + JSON.stringify(UIRToolbar.DataMap.map));
            Controller.readyToolbar();
            UIRDropdown = RepeatObj.addList('uioptions', '/data/Dropdown.json', function () {
                Controller.readyToolbar();
                console.log('dropdown=' + JSON.stringify(UIRDropdown.DataMap.map));
                function initializeComplete() {
                    return (function () {
                        UIRouter.initializeComplete();
                    });
                }
                window.setTimeout(initializeComplete(), 1000);
            });
        });
    });
}



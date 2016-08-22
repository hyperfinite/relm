'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var require$$1 = require('postcss');
var require$$1__default = require$$1['default'];
var safe = _interopDefault(require('postcss-safe-parser'));
var require$$1$1 = require('path');
var require$$0 = require('fs');
var require$$1$2 = require('esutils');
var require$$0$1 = require('babel-types');

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}

function interopDefault(ex) {
	return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var eras = {"e-48":"48 versions back","e-47":"47 versions back","e-46":"46 versions back","e-45":"45 versions back","e-44":"44 versions back","e-43":"43 versions back","e-42":"42 versions back","e-41":"41 versions back","e-40":"40 versions back","e-39":"39 versions back","e-38":"38 versions back","e-37":"37 versions back","e-36":"36 versions back","e-35":"35 versions back","e-34":"34 versions back","e-33":"33 versions back","e-32":"32 versions back","e-31":"31 versions back","e-30":"30 versions back","e-29":"29 versions back","e-28":"28 versions back","e-27":"27 versions back","e-26":"26 versions back","e-25":"25 versions back","e-24":"24 versions back","e-23":"23 versions back","e-22":"22 versions back","e-21":"21 versions back","e-20":"20 versions back","e-19":"19 versions back","e-18":"18 versions back","e-17":"17 versions back","e-16":"16 versions back","e-15":"15 versions back","e-14":"14 versions back","e-13":"13 versions back","e-12":"12 versions back","e-11":"11 versions back","e-10":"10 versions back","e-9":"9 versions back","e-8":"8 versions back","e-7":"7 versions back","e-6":"6 versions back","e-5":"5 versions back","e-4":"4 versions back","e-3":"3 versions back","e-2":"2 versions back","e-1":"Previous version","e0":"Current","e1":"Near future","e2":"Farther future","e3":"3 versions ahead"};
var agents = {"ie":{"browser":"IE","abbr":"IE","prefix":"ms","type":"desktop","usage_global":{"6":0.0383261,"7":0.0328509,"8":0.629643,"9":0.427062,"10":0.405162,"11":4.87837,"5.5":0.009298},"versions":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"5.5","6","7","8","9","10","11",null,null,null]},"edge":{"browser":"Edge","abbr":"Edge","prefix":"ms","type":"desktop","usage_global":{"12":0.12259,"13":1.35382,"14":0.01066},"versions":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"12","13","14",null,null]},"firefox":{"browser":"Firefox","abbr":"FF","prefix":"moz","type":"desktop","usage_global":{"2":0.02132,"3":0.04264,"4":0.01066,"5":0.00533,"6":0.04264,"7":0.005725,"8":0.01599,"9":0.00533,"10":0.01066,"11":0.01599,"12":0.02132,"13":0.01066,"14":0.01066,"15":0.02665,"16":0.02132,"17":0.01066,"18":0.02665,"19":0.01066,"20":0.01599,"21":0.03731,"22":0.01066,"23":0.02665,"24":0.02132,"25":0.06396,"26":0.02132,"27":0.02132,"28":0.02665,"29":0.03198,"30":0.03198,"31":0.0533,"32":0.02665,"33":0.03198,"34":0.04264,"35":0.04264,"36":0.04264,"37":0.04797,"38":0.14391,"39":0.06396,"40":0.05863,"41":0.06396,"42":0.1066,"43":0.23452,"44":0.13858,"45":0.27183,"46":2.30256,"47":3.78963,"48":0.12259,"49":0,"50":0,"3.5":0.00533,"3.6":0.03198},"versions":[null,"2","3","3.5","3.6","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50"]},"chrome":{"browser":"Chrome","abbr":"Chr.","prefix":"webkit","type":"desktop","usage_global":{"4":0.00533,"5":0.005587,"6":0.00533,"7":0.005591,"8":0.005591,"9":0.005591,"10":0.01066,"11":0.03731,"12":0.01066,"13":0.005424,"14":0.005587,"15":0.00533,"16":0.01066,"17":0.01066,"18":0.01066,"19":0.02132,"20":0.01066,"21":0.02132,"22":0.03731,"23":0.01599,"24":0.05863,"25":0.02132,"26":0.03198,"27":0.02132,"28":0.02132,"29":1.02336,"30":0.03731,"31":0.13858,"32":0.03731,"33":0.07995,"34":0.05863,"35":0.07995,"36":0.06396,"37":0.05863,"38":0.0533,"39":0.07995,"40":0.07995,"41":0.09594,"42":0.11193,"43":0.34112,"44":0.13858,"45":0.52234,"46":0.19188,"47":0.29848,"48":0.4264,"49":2.42515,"50":6.81707,"51":17.2852,"52":0.09594,"53":0.07995,"54":0,"55":0},"versions":["4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55"]},"safari":{"browser":"Safari","abbr":"Saf.","prefix":"webkit","type":"desktop","usage_global":{"4":0.01599,"5":0.0533,"6":0.01599,"7":0.04264,"8":0.20787,"9":0.36244,"10":0,"3.1":0,"3.2":0.008692,"5.1":0.10127,"6.1":0.07462,"7.1":0.02132,"9.1":1.53504,"TP":0},"versions":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"3.1","3.2","4","5","5.1","6","6.1","7","7.1","8","9","9.1","10","TP",null]},"opera":{"browser":"Opera","abbr":"Op.","prefix":"webkit","type":"desktop","usage_global":{"9":0.0082,"11":0.016581,"12":0.01066,"15":0.00685,"16":0.00685,"17":0.00685,"18":0.01066,"19":0.006015,"20":0.00533,"21":0.006597,"22":0.006597,"23":0.013434,"24":0.006702,"25":0.006015,"26":0.005595,"27":0.00533,"28":0.02132,"29":0.01066,"30":0.01066,"31":0.00533,"32":0.005152,"33":0.00533,"34":0.01599,"35":0.01066,"36":0.05863,"37":0.19188,"38":0.3198,"39":0,"40":0,"9.5-9.6":0.00685,"10.0-10.1":0.01599,"10.5":0.008392,"10.6":0.007296,"11.1":0.006229,"11.5":0.006015,"11.6":0.00533,"12.1":0.1066},"versions":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,"9","9.5-9.6","10.0-10.1","10.5","10.6","11","11.1","11.5","11.6","12","12.1","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40",null],"prefix_exceptions":{"9":"o","11":"o","12":"o","9.5-9.6":"o","10.0-10.1":"o","10.5":"o","10.6":"o","11.1":"o","11.5":"o","11.6":"o","12.1":"o"}},"ios_saf":{"browser":"iOS Safari","abbr":"iOS","prefix":"webkit","type":"mobile","usage_global":{"8":0,"3.2":0,"4.0-4.1":0,"4.2-4.3":0,"5.0-5.1":0,"6.0-6.1":0,"7.0-7.1":0.232911,"8.1-8.4":0.466736,"9.0-9.2":1.00746,"9.3":7.14444},"versions":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"3.2","4.0-4.1","4.2-4.3","5.0-5.1","6.0-6.1","7.0-7.1","8","8.1-8.4","9.0-9.2","9.3",null,null,null]},"op_mini":{"browser":"Opera Mini","abbr":"O.Mini","prefix":"o","type":"mobile","usage_global":{"all":4.69025},"versions":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"all",null,null,null]},"android":{"browser":"Android Browser","abbr":"And.","prefix":"webkit","type":"mobile","usage_global":{"3":0,"4":0.0848309,"51":0,"2.1":0,"2.2":0,"2.3":0.0128857,"4.1":0.296371,"4.2-4.3":0.626031,"4.4":1.65044,"4.4.3-4.4.4":0.98683},"versions":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"2.1","2.2","2.3","3","4","4.1","4.2-4.3","4.4","4.4.3-4.4.4","51",null,null,null]},"bb":{"browser":"Blackberry Browser","abbr":"BB","prefix":"webkit","type":"mobile","usage_global":{"7":0.0770715,"10":0},"versions":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"7","10",null,null,null]},"op_mob":{"browser":"Opera Mobile","abbr":"O.Mob","prefix":"o","type":"mobile","usage_global":{"10":0,"11":0,"12":0,"37":0.332856,"11.1":0,"11.5":0,"12.1":0.00756491},"versions":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"10","11","11.1","11.5","12","12.1","37",null,null,null],"prefix_exceptions":{"37":"webkit"}},"and_chr":{"browser":"Chrome for Android","abbr":"Chr/And.","prefix":"webkit","type":"mobile","usage_global":{"51":19.4722},"versions":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"51",null,null,null]},"and_ff":{"browser":"Firefox for Android","abbr":"FF/And.","prefix":"moz","type":"mobile","usage_global":{"47":0.04671},"versions":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"47",null,null,null]},"ie_mob":{"browser":"IE Mobile","abbr":"IE.Mob","prefix":"ms","type":"mobile","usage_global":{"10":0.197503,"11":0.554528},"versions":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"10","11",null,null,null]},"and_uc":{"browser":"UC Browser for Android","abbr":"UC","prefix":"webkit","type":"mobile","usage_global":{"9.9":6.6515},"versions":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"9.9",null,null,null],"prefix_exceptions":{"9.9":"webkit"}},"samsung":{"browser":"Samsung Internet","abbr":"SS","prefix":"webkit","type":"mobile","usage_global":{"4":2.94273},"versions":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"4",null,null,null]}};
var statuses = {"rec":"W3C Recommendation","pr":"W3C Proposed Recommendation","cr":"W3C Candidate Recommendation","wd":"W3C Working Draft","ls":"WHATWG Living Standard","other":"Other","unoff":"Unofficial / Note"};
var cats = {"CSS":["CSS","CSS2","CSS3"],"HTML5":["Canvas","HTML5"],"JS API":["JS API"],"Other":["PNG","Other","DOM"],"SVG":["SVG"]};
var updated = 1469599040;
var data$2 = {
	eras: eras,
	agents: agents,
	statuses: statuses,
	cats: cats,
	updated: updated,
	data: data$1
};

var require$$0$3 = Object.freeze({
	eras: eras,
	agents: agents,
	statuses: statuses,
	cats: cats,
	updated: updated,
	data: data$1,
	default: data$2
});

var index = createCommonjsModule(function (module) {
var caniuse = interopDefault(require$$0$3).agents;
var path    = interopDefault(require$$1$1);
var fs      = interopDefault(require$$0);

function uniq(array) {
    var filtered = [];
    for ( var i = 0; i < array.length; i++ ) {
        if ( filtered.indexOf(array[i]) === -1 ) filtered.push(array[i]);
    }
    return filtered;
}

function BrowserslistError(message) {
    this.name = 'BrowserslistError';
    this.message = message || '';
    if ( Error.captureStackTrace ) {
        Error.captureStackTrace(this, BrowserslistError);
    }
}
BrowserslistError.prototype = Error.prototype;

function error(name) {
    var obj = new BrowserslistError(name);
    obj.browserslist = true;
    throw obj;
}

// Helpers

var normalize = function (versions) {
    return versions.filter(function (version) {
        return typeof version === 'string';
    });
};

var fillUsage = function (result, name, data) {
    for ( var i in data ) {
        result[name + ' ' + i] = data[i];
    }
};

// Return array of browsers by selection queries:
//
//   browserslist('IE >= 10, IE 8') //=> ['ie 11', 'ie 10', 'ie 8']
var browserslist = function (selections, opts) {
    if ( typeof opts === 'undefined' ) opts = { };

    if ( typeof selections === 'undefined' || selections === null ) {

        if ( process.env.BROWSERSLIST ) {
            selections = process.env.BROWSERSLIST;
        } else if ( opts.config || process.env.BROWSERSLIST_CONFIG ) {
            var file = opts.config || process.env.BROWSERSLIST_CONFIG;
            if ( fs.existsSync(file) && fs.statSync(file).isFile() ) {
                selections = browserslist.parseConfig( fs.readFileSync(file) );
            } else {
                error('Can\'t read ' + file + ' config');
            }
        } else {
            var config = browserslist.readConfig(opts.path);
            if ( config !== false ) {
                selections = config;
            } else {
                selections = browserslist.defaults;
            }
        }
    }

    if ( typeof selections === 'string' ) {
        selections = selections.split(/,\s*/);
    }

    if ( opts.stats || process.env.BROWSERSLIST_STATS ) {
        browserslist.usage.custom = { };
        var stats = opts.stats || process.env.BROWSERSLIST_STATS;
        if ( typeof stats === 'string' ) {
            try {
                stats = JSON.parse(fs.readFileSync(stats));
            } catch (e) {
                error('Can\'t read ' + stats);
            }
        }
        if ( 'dataByBrowser' in stats ) {
            // Allow to use the data as-is from the caniuse.com website
            stats = stats.dataByBrowser;
        }
        for ( var browser in stats ) {
            fillUsage(browserslist.usage.custom, browser, stats[browser]);
        }
    }

    var result = [];

    var exclude, query, match, array, used;
    selections.forEach(function (selection) {
        if ( selection.trim() === '' ) return;
        exclude = false;
        used    = false;

        if ( selection.indexOf('not ') === 0 ) {
            selection = selection.slice(4);
            exclude   = true;
        }

        for ( var i in browserslist.queries ) {
            query = browserslist.queries[i];
            match = selection.match(query.regexp);
            if ( match ) {
                array = query.select.apply(browserslist, match.slice(1));
                if ( exclude ) {
                    result = result.filter(function (j) {
                        return array.indexOf(j) === -1;
                    });
                } else {
                    result = result.concat(array);
                }
                used   = true;
                break;
            }
        }

        if ( !used ) {
            error('Unknown browser query `' + selection + '`');
        }
    });

    result = uniq(result);

    return result.filter(function (i) {
        var version = i.split(' ')[1];
        if ( version === '0' ) {
            var name = i.split(' ')[0];
            return !result.some(function (j) {
                return j !== i && j.split(' ')[0] === name;
            });
        } else {
            return true;
        }
    }).sort(function (name1, name2) {
        name1 = name1.split(' ');
        name2 = name2.split(' ');
        if ( name1[0] === name2[0] ) {
            var d = parseFloat(name2[1]) - parseFloat(name1[1]);
            if ( d > 0 ) {
                return 1;
            } else if ( d < 0 ) {
                return -1;
            } else {
                return 0;
            }
        } else {
            return name1[0].localeCompare(name2[0]);
        }
    });
};

var normalizeVersion = function (data, version) {
    if ( data.versions.indexOf(version) !== -1 ) {
        return version;
    } else {
        return browserslist.versionAliases[data.name][version];
    }
};

var loadCountryStatistics = function (country) {
    if (!browserslist.usage[country]) {
        var usage = { };
        var data = require(
            'caniuse-db/region-usage-json/' + country + '.json');
        for ( var i in data.data ) {
            fillUsage(usage, i, data.data[i]);
        }
        browserslist.usage[country] = usage;
    }
};

// Will be filled by Can I Use data below
browserslist.data  = { };
browserslist.usage = {
    global: { },
    custom: null
};

// Default browsers query
browserslist.defaults = [
    '> 1%',
    'last 2 versions',
    'Firefox ESR'
];

// What browsers will be used in `last n version` query
browserslist.major = ['safari', 'opera', 'ios_saf', 'ie_mob', 'ie',
                      'edge', 'firefox', 'chrome'];

// Browser names aliases
browserslist.aliases = {
    fx:             'firefox',
    ff:             'firefox',
    ios:            'ios_saf',
    explorer:       'ie',
    blackberry:     'bb',
    explorermobile: 'ie_mob',
    operamini:      'op_mini',
    operamobile:    'op_mob',
    chromeandroid:  'and_chr',
    firefoxandroid: 'and_ff'
};

// Aliases ot work with joined versions like `ios_saf 7.0-7.1`
browserslist.versionAliases = { };

// Get browser data by alias or case insensitive name
browserslist.byName = function (name) {
    name = name.toLowerCase();
    name = browserslist.aliases[name] || name;
    return browserslist.data[name];
};

// Get browser data by alias or case insensitive name and throw error
// on unknown browser
browserslist.checkName = function (name) {
    var data = browserslist.byName(name);
    if ( !data ) error('Unknown browser ' + name);
    return data;
};

// Find config, read file and parse it
browserslist.readConfig = function (from) {
    if ( from === false )   return false;
    if ( !fs.readFileSync || !fs.existsSync || !fs.statSync ) return false;
    if ( typeof from === 'undefined' ) from = '.';

    var dirs = path.resolve(from).split(path.sep);
    var config;
    while ( dirs.length ) {
        config = dirs.concat(['browserslist']).join(path.sep);

        if ( fs.existsSync(config) && fs.statSync(config).isFile() ) {
            return browserslist.parseConfig( fs.readFileSync(config) );
        }

        dirs.pop();
    }

    return false;
};

// Return browsers market coverage
browserslist.coverage = function (browsers, country) {
    if (country && country !== 'global') {
        country = country.toUpperCase();
        loadCountryStatistics(country);
    } else {
        country = 'global'; // Default value
    }

    return browsers.reduce(function (all, i) {
        var usage = browserslist.usage[country][i];
        if (usage === undefined) {
            // Sometimes, Caniuse consolidates country usage data into a single
            // "version 0" entry. This is usually when there is only 1 version.
            usage = browserslist.usage[country][i.replace(/ [\d.]+$/, ' 0')];
        }
        return all + (usage || 0);
    }, 0);
};

// Return array of queries from config content
browserslist.parseConfig = function (string) {
    return string.toString()
            .replace(/#[^\n]*/g, '')
            .split(/\n/)
            .map(function (i) {
                return i.trim();
            }).filter(function (i) {
                return i !== '';
            });
};

browserslist.queries = {

    lastVersions: {
        regexp: /^last\s+(\d+)\s+versions?$/i,
        select: function (versions) {
            var selected = [];
            browserslist.major.forEach(function (name) {
                var data  = browserslist.byName(name);
                if ( !data ) return;
                var array = data.released.slice(-versions);

                array = array.map(function (v) {
                    return data.name + ' ' + v;
                });
                selected = selected.concat(array);
            });
            return selected;
        }
    },

    lastByBrowser: {
        regexp: /^last\s+(\d+)\s+(\w+)\s+versions?$/i,
        select: function (versions, name) {
            var data = browserslist.checkName(name);
            return data.released.slice(-versions).map(function (v) {
                return data.name + ' ' + v;
            });
        }
    },

    globalStatistics: {
        regexp: /^>\s*(\d*\.?\d+)%$/,
        select: function (popularity) {
            popularity = parseFloat(popularity);
            var result = [];

            for ( var version in browserslist.usage.global ) {
                if ( browserslist.usage.global[version] > popularity ) {
                    result.push(version);
                }
            }

            return result;
        }
    },

    customStatistics: {
        regexp: /^>\s*(\d*\.?\d+)%\s+in\s+my\s+stats$/,
        select: function (popularity) {
            popularity = parseFloat(popularity);
            var result = [];

            var usage = browserslist.usage.custom;
            if ( !usage ) {
                error('Custom usage statistics was not provided');
            }

            for ( var version in usage ) {
                if ( usage[version] > popularity ) {
                    result.push(version);
                }
            }

            return result;
        }
    },

    countryStatistics: {
        regexp: /^>\s*(\d*\.?\d+)%\s+in\s+(\w\w)$/,
        select: function (popularity, country) {
            popularity = parseFloat(popularity);
            country    = country.toUpperCase();
            var result = [];

            loadCountryStatistics(country);
            var usage = browserslist.usage[country];

            for ( var version in usage ) {
                if ( usage[version] > popularity ) {
                    result.push(version);
                }
            }

            return result;
        }
    },

    range: {
        regexp: /^(\w+)\s+([\d\.]+)\s*-\s*([\d\.]+)$/i,
        select: function (name, from, to) {
            var data = browserslist.checkName(name);
            from = parseFloat(normalizeVersion(data, from) || from);
            to = parseFloat(normalizeVersion(data, to) || to);

            var filter = function (v) {
                var parsed = parseFloat(v);
                return parsed >= from && parsed <= to;
            };

            return data.released.filter(filter).map(function (v) {
                return data.name + ' ' + v;
            });
        }
    },

    versions: {
        regexp: /^(\w+)\s*(>=?|<=?)\s*([\d\.]+)$/,
        select: function (name, sign, version) {
            var data = browserslist.checkName(name);
            var alias = normalizeVersion(data, version);
            if ( alias ) {
                version = alias;
            }
            version = parseFloat(version);

            var filter;
            if ( sign === '>' ) {
                filter = function (v) {
                    return parseFloat(v) > version;
                };
            } else if ( sign === '>=' ) {
                filter = function (v) {
                    return parseFloat(v) >= version;
                };
            } else if ( sign === '<' ) {
                filter = function (v) {
                    return parseFloat(v) < version;
                };
            } else if ( sign === '<=' ) {
                filter = function (v) {
                    return parseFloat(v) <= version;
                };
            }
            return data.released.filter(filter).map(function (v) {
                return data.name + ' ' + v;
            });
        }
    },

    esr: {
        regexp: /^(firefox|ff|fx)\s+esr$/i,
        select: function () {
            return ['firefox 45'];
        }
    },

    opMini: {
        regexp: /(operamini|op_mini)\s+all/i,
        select: function () {
            return ['op_mini all'];
        }
    },

    direct: {
        regexp: /^(\w+)\s+(tp|[\d\.]+)$/i,
        select: function (name, version) {
            if ( /tp/i.test(version) ) version = 'TP';
            var data  = browserslist.checkName(name);
            var alias = normalizeVersion(data, version);
            if ( alias ) {
                version = alias;
            } else {
                if ( version.indexOf('.') === -1 ) {
                    alias = version + '.0';
                } else if ( /\.0$/.test(version) ) {
                    alias = version.replace(/\.0$/, '');
                }
                alias = normalizeVersion(data, alias);
                if ( alias ) {
                    version = alias;
                } else {
                    error('Unknown version ' + version + ' of ' + name);
                }
            }
            return [data.name + ' ' + version];
        }
    }

};

// Get and convert Can I Use data

(function () {
    for ( var name in caniuse ) {
        browserslist.data[name] = {
            name:     name,
            versions: normalize(caniuse[name].versions),
            released: normalize(caniuse[name].versions.slice(0, -3))
        };
        fillUsage(browserslist.usage.global, name, caniuse[name].usage_global);

        browserslist.versionAliases[name] = { };
        for ( var i = 0; i < caniuse[name].versions.length; i++ ) {
            if ( !caniuse[name].versions[i] ) continue;
            var full = caniuse[name].versions[i];

            if ( full.indexOf('-') !== -1 ) {
                var interval = full.split('-');
                for ( var j = 0; j < interval.length; j++ ) {
                    browserslist.versionAliases[name][interval[j]] = full;
                }
            }
        }
    }
}());

module.exports = browserslist;
});

var index$1 = interopDefault(index);


var require$$0$2 = Object.freeze({
    default: index$1
});

var list = createCommonjsModule(function (module, exports) {
'use strict';

exports.__esModule = true;
/**
 * Contains helpers for safely splitting lists of CSS values,
 * preserving parentheses and quotes.
 *
 * @example
 * const list = postcss.list;
 *
 * @namespace list
 */
var list = {
    split: function split(string, separators, last) {
        var array = [];
        var current = '';
        var split = false;

        var func = 0;
        var quote = false;
        var escape = false;

        for (var i = 0; i < string.length; i++) {
            var letter = string[i];

            if (quote) {
                if (escape) {
                    escape = false;
                } else if (letter === '\\') {
                    escape = true;
                } else if (letter === quote) {
                    quote = false;
                }
            } else if (letter === '"' || letter === '\'') {
                quote = letter;
            } else if (letter === '(') {
                func += 1;
            } else if (letter === ')') {
                if (func > 0) func -= 1;
            } else if (func === 0) {
                if (separators.indexOf(letter) !== -1) split = true;
            }

            if (split) {
                if (current !== '') array.push(current.trim());
                current = '';
                split = false;
            } else {
                current += letter;
            }
        }

        if (last || current !== '') array.push(current.trim());
        return array;
    },


    /**
     * Safely splits space-separated values (such as those for `background`,
     * `border-radius`, and other shorthand properties).
     *
     * @param {string} string - space-separated values
     *
     * @return {string[]} splitted values
     *
     * @example
     * postcss.list.space('1px calc(10% + 1px)') //=> ['1px', 'calc(10% + 1px)']
     */
    space: function space(string) {
        var spaces = [' ', '\n', '\t'];
        return list.split(string, spaces);
    },


    /**
     * Safely splits comma-separated values (such as those for `transition-*`
     * and `background` properties).
     *
     * @param {string} string - comma-separated values
     *
     * @return {string[]} splitted values
     *
     * @example
     * postcss.list.comma('black, linear-gradient(white, black)')
     * //=> ['black', 'linear-gradient(white, black)']
     */
    comma: function comma(string) {
        var comma = ',';
        return list.split(string, [comma], true);
    }
};

exports.default = list;
module.exports = exports['default'];
});

var list$1 = interopDefault(list);


var require$$0$5 = Object.freeze({
    default: list$1
});

var utils = createCommonjsModule(function (module) {
(function() {
  var list;

  list = interopDefault(require$$0$5);

  module.exports = {
    error: function(text) {
      var err;
      err = new Error(text);
      err.autoprefixer = true;
      throw err;
    },
    uniq: function(array) {
      var filtered, i, j, len;
      filtered = [];
      for (j = 0, len = array.length; j < len; j++) {
        i = array[j];
        if (filtered.indexOf(i) === -1) {
          filtered.push(i);
        }
      }
      return filtered;
    },
    removeNote: function(string) {
      if (string.indexOf(' ') === -1) {
        return string;
      } else {
        return string.split(' ')[0];
      }
    },
    escapeRegexp: function(string) {
      return string.replace(/[.?*+\^\$\[\]\\(){}|\-]/g, '\\$&');
    },
    regexp: function(word, escape) {
      if (escape == null) {
        escape = true;
      }
      if (escape) {
        word = this.escapeRegexp(word);
      }
      return RegExp("(^|[\\s,(])(" + word + "($|[\\s(,]))", "gi");
    },
    editList: function(value, callback) {
      var changed, join, origin;
      origin = list.comma(value);
      changed = callback(origin, []);
      if (origin === changed) {
        return value;
      } else {
        join = value.match(/,\s*/);
        join = join ? join[0] : ', ';
        return changed.join(join);
      }
    }
  };

}).call(commonjsGlobal);
});

var utils$1 = interopDefault(utils);
var error = utils.error;
var uniq = utils.uniq;
var removeNote = utils.removeNote;
var escapeRegexp = utils.escapeRegexp;
var regexp = utils.regexp;
var editList = utils.editList;

var require$$0$4 = Object.freeze({
  default: utils$1,
  error: error,
  uniq: uniq,
  removeNote: removeNote,
  escapeRegexp: escapeRegexp,
  regexp: regexp,
  editList: editList
});

var browsers = createCommonjsModule(function (module) {
(function() {
  var Browsers, browserslist, utils;

  browserslist = interopDefault(require$$0$2);

  utils = interopDefault(require$$0$4);

  Browsers = (function() {
    Browsers.prefixes = function() {
      var data, i, name;
      if (this.prefixesCache) {
        return this.prefixesCache;
      }
      data = interopDefault(require$$0$3).agents;
      return this.prefixesCache = utils.uniq((function() {
        var results;
        results = [];
        for (name in data) {
          i = data[name];
          results.push("-" + i.prefix + "-");
        }
        return results;
      })()).sort(function(a, b) {
        return b.length - a.length;
      });
    };

    Browsers.withPrefix = function(value) {
      if (!this.prefixesRegexp) {
        this.prefixesRegexp = RegExp("" + (this.prefixes().join('|')));
      }
      return this.prefixesRegexp.test(value);
    };

    function Browsers(data1, requirements, options, stats) {
      this.data = data1;
      this.options = options;
      this.stats = stats;
      this.selected = this.parse(requirements);
    }

    Browsers.prototype.parse = function(requirements) {
      var ref;
      return browserslist(requirements, {
        path: (ref = this.options) != null ? ref.from : void 0,
        stats: this.stats
      });
    };

    Browsers.prototype.browsers = function(criteria) {
      var browser, data, ref, selected, versions;
      selected = [];
      ref = this.data;
      for (browser in ref) {
        data = ref[browser];
        versions = criteria(data).map(function(version) {
          return browser + " " + version;
        });
        selected = selected.concat(versions);
      }
      return selected;
    };

    Browsers.prototype.prefix = function(browser) {
      var data, name, prefix, ref, version;
      ref = browser.split(' '), name = ref[0], version = ref[1];
      data = this.data[name];
      if (data.prefix_exceptions) {
        prefix = data.prefix_exceptions[version];
      }
      prefix || (prefix = data.prefix);
      return '-' + prefix + '-';
    };

    Browsers.prototype.isSelected = function(browser) {
      return this.selected.indexOf(browser) !== -1;
    };

    return Browsers;

  })();

  module.exports = Browsers;

}).call(commonjsGlobal);
});

var browsers$1 = interopDefault(browsers);


var require$$1$3 = Object.freeze({
  default: browsers$1
});

var vendor = createCommonjsModule(function (module, exports) {
'use strict';

exports.__esModule = true;
/**
 * Contains helpers for working with vendor prefixes.
 *
 * @example
 * const vendor = postcss.vendor;
 *
 * @namespace vendor
 */
var vendor = {

    /**
     * Returns the vendor prefix extracted from an input string.
     *
     * @param {string} prop - string with or without vendor prefix
     *
     * @return {string} vendor prefix or empty string
     *
     * @example
     * postcss.vendor.prefix('-moz-tab-size') //=> '-moz-'
     * postcss.vendor.prefix('tab-size')      //=> ''
     */
    prefix: function prefix(prop) {
        if (prop[0] === '-') {
            var sep = prop.indexOf('-', 1);
            return prop.substr(0, sep + 1);
        } else {
            return '';
        }
    },


    /**
     * Returns the input string stripped of its vendor prefix.
     *
     * @param {string} prop - string with or without vendor prefix
     *
     * @return {string} string name without vendor prefixes
     *
     * @example
     * postcss.vendor.unprefixed('-moz-tab-size') //=> 'tab-size'
     */
    unprefixed: function unprefixed(prop) {
        if (prop[0] === '-') {
            var sep = prop.indexOf('-', 1);
            return prop.substr(sep + 1);
        } else {
            return prop;
        }
    }
};

exports.default = vendor;
module.exports = exports['default'];
});

var vendor$1 = interopDefault(vendor);


var require$$0$8 = Object.freeze({
    default: vendor$1
});

var prefixer = createCommonjsModule(function (module) {
(function() {
  var Browsers, Prefixer, clone, utils, vendor,
    hasProp = {}.hasOwnProperty;

  Browsers = interopDefault(require$$1$3);

  utils = interopDefault(require$$0$4);

  vendor = interopDefault(require$$0$8);

  clone = function(obj, parent) {
    var cloned, i, value;
    cloned = new obj.constructor();
    for (i in obj) {
      if (!hasProp.call(obj, i)) continue;
      value = obj[i];
      if (i === 'parent' && typeof value === 'object') {
        if (parent) {
          cloned[i] = parent;
        }
      } else if (i === 'source') {
        cloned[i] = value;
      } else if (i === null) {
        cloned[i] = value;
      } else if (value instanceof Array) {
        cloned[i] = value.map(function(i) {
          return clone(i, cloned);
        });
      } else if (i !== '_autoprefixerPrefix' && i !== '_autoprefixerValues') {
        if (typeof value === 'object') {
          value = clone(value, cloned);
        }
        cloned[i] = value;
      }
    }
    return cloned;
  };

  Prefixer = (function() {
    Prefixer.hack = function(klass) {
      var j, len, name, ref, results;
      this.hacks || (this.hacks = {});
      ref = klass.names;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        name = ref[j];
        results.push(this.hacks[name] = klass);
      }
      return results;
    };

    Prefixer.load = function(name, prefixes, all) {
      var klass, ref;
      klass = (ref = this.hacks) != null ? ref[name] : void 0;
      if (klass) {
        return new klass(name, prefixes, all);
      } else {
        return new this(name, prefixes, all);
      }
    };

    Prefixer.clone = function(node, overrides) {
      var cloned, name;
      cloned = clone(node);
      for (name in overrides) {
        cloned[name] = overrides[name];
      }
      return cloned;
    };

    function Prefixer(name1, prefixes1, all1) {
      this.name = name1;
      this.prefixes = prefixes1;
      this.all = all1;
    }

    Prefixer.prototype.parentPrefix = function(node) {
      var prefix;
      prefix = node._autoprefixerPrefix != null ? node._autoprefixerPrefix : node.type === 'decl' && node.prop[0] === '-' ? vendor.prefix(node.prop) : node.type === 'root' ? false : node.type === 'rule' && node.selector.indexOf(':-') !== -1 ? node.selector.match(/:(-\w+-)/)[1] : node.type === 'atrule' && node.name[0] === '-' ? vendor.prefix(node.name) : this.parentPrefix(node.parent);
      if (Browsers.prefixes().indexOf(prefix) === -1) {
        prefix = false;
      }
      return node._autoprefixerPrefix = prefix;
    };

    Prefixer.prototype.process = function(node) {
      var added, j, k, len, len1, parent, prefix, prefixes, ref;
      if (!this.check(node)) {
        return;
      }
      parent = this.parentPrefix(node);
      prefixes = [];
      ref = this.prefixes;
      for (j = 0, len = ref.length; j < len; j++) {
        prefix = ref[j];
        if (parent && parent !== utils.removeNote(prefix)) {
          continue;
        }
        prefixes.push(prefix);
      }
      added = [];
      for (k = 0, len1 = prefixes.length; k < len1; k++) {
        prefix = prefixes[k];
        if (this.add(node, prefix, added.concat([prefix]))) {
          added.push(prefix);
        }
      }
      return added;
    };

    Prefixer.prototype.clone = function(node, overrides) {
      return Prefixer.clone(node, overrides);
    };

    return Prefixer;

  })();

  module.exports = Prefixer;

}).call(commonjsGlobal);
});

var prefixer$1 = interopDefault(prefixer);


var require$$0$7 = Object.freeze({
  default: prefixer$1
});

var declaration = createCommonjsModule(function (module) {
(function() {
  var Browsers, Declaration, Prefixer, utils, vendor,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Prefixer = interopDefault(require$$0$7);

  Browsers = interopDefault(require$$1$3);

  vendor = interopDefault(require$$0$8);

  utils = interopDefault(require$$0$4);

  Declaration = (function(superClass) {
    extend(Declaration, superClass);

    function Declaration() {
      return Declaration.__super__.constructor.apply(this, arguments);
    }

    Declaration.prototype.check = function(decl) {
      return true;
    };

    Declaration.prototype.prefixed = function(prop, prefix) {
      return prefix + prop;
    };

    Declaration.prototype.normalize = function(prop) {
      return prop;
    };

    Declaration.prototype.otherPrefixes = function(value, prefix) {
      var j, len, other, ref;
      ref = Browsers.prefixes();
      for (j = 0, len = ref.length; j < len; j++) {
        other = ref[j];
        if (other === prefix) {
          continue;
        }
        if (value.indexOf(other) !== -1) {
          return true;
        }
      }
      return false;
    };

    Declaration.prototype.set = function(decl, prefix) {
      decl.prop = this.prefixed(decl.prop, prefix);
      return decl;
    };

    Declaration.prototype.needCascade = function(decl) {
      return decl._autoprefixerCascade || (decl._autoprefixerCascade = this.all.options.cascade !== false && decl.raw('before').indexOf('\n') !== -1);
    };

    Declaration.prototype.maxPrefixed = function(prefixes, decl) {
      var j, len, max, prefix;
      if (decl._autoprefixerMax) {
        return decl._autoprefixerMax;
      }
      max = 0;
      for (j = 0, len = prefixes.length; j < len; j++) {
        prefix = prefixes[j];
        prefix = utils.removeNote(prefix);
        if (prefix.length > max) {
          max = prefix.length;
        }
      }
      return decl._autoprefixerMax = max;
    };

    Declaration.prototype.calcBefore = function(prefixes, decl, prefix) {
      var before, diff, i, j, max, ref;
      if (prefix == null) {
        prefix = '';
      }
      before = decl.raw('before');
      max = this.maxPrefixed(prefixes, decl);
      diff = max - utils.removeNote(prefix).length;
      for (i = j = 0, ref = diff; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        before += ' ';
      }
      return before;
    };

    Declaration.prototype.restoreBefore = function(decl) {
      var lines, min;
      lines = decl.raw('before').split("\n");
      min = lines[lines.length - 1];
      this.all.group(decl).up(function(prefixed) {
        var array, last;
        array = prefixed.raw('before').split("\n");
        last = array[array.length - 1];
        if (last.length < min.length) {
          return min = last;
        }
      });
      lines[lines.length - 1] = min;
      return decl.raws.before = lines.join("\n");
    };

    Declaration.prototype.insert = function(decl, prefix, prefixes) {
      var already, cloned;
      cloned = this.set(this.clone(decl), prefix);
      if (!cloned) {
        return;
      }
      already = decl.parent.some(function(i) {
        return i.prop === cloned.prop && i.value === cloned.value;
      });
      if (already) {
        return;
      }
      if (this.needCascade(decl)) {
        cloned.raws.before = this.calcBefore(prefixes, decl, prefix);
      }
      return decl.parent.insertBefore(decl, cloned);
    };

    Declaration.prototype.isAlready = function(decl, prefixed) {
      var already;
      already = this.all.group(decl).up(function(i) {
        return i.prop === prefixed;
      });
      already || (already = this.all.group(decl).down(function(i) {
        return i.prop === prefixed;
      }));
      return already;
    };

    Declaration.prototype.add = function(decl, prefix, prefixes) {
      var prefixed;
      prefixed = this.prefixed(decl.prop, prefix);
      if (this.isAlready(decl, prefixed) || this.otherPrefixes(decl.value, prefix)) {
        return;
      }
      return this.insert(decl, prefix, prefixes);
    };

    Declaration.prototype.process = function(decl) {
      var prefixes;
      if (this.needCascade(decl)) {
        prefixes = Declaration.__super__.process.apply(this, arguments);
        if (prefixes != null ? prefixes.length : void 0) {
          this.restoreBefore(decl);
          return decl.raws.before = this.calcBefore(prefixes, decl);
        }
      } else {
        return Declaration.__super__.process.apply(this, arguments);
      }
    };

    Declaration.prototype.old = function(prop, prefix) {
      return [this.prefixed(prop, prefix)];
    };

    return Declaration;

  })(Prefixer);

  module.exports = Declaration;

}).call(commonjsGlobal);
});

var declaration$1 = interopDefault(declaration);


var require$$0$6 = Object.freeze({
  default: declaration$1
});

var index$2 = createCommonjsModule(function (module) {
'use strict'

var abs = Math.abs
var round = Math.round

function almostEq(a, b) {
  return abs(a - b) <= 9.5367432e-7
}

//最大公约数 Greatest Common Divisor
function GCD(a, b) {
  if (almostEq(b, 0)) return a
  return GCD(b, a % b)
}

function findPrecision(n) {
  var e = 1

  while (!almostEq(round(n * e) / e, n)) {
    e *= 10
  }

  return e
}

function num2fraction(num) {
  if (num === 0 || num === '0') return '0'

  if (typeof num === 'string') {
    num = parseFloat(num)
  }


  var precision = findPrecision(num) //精确度
  var number = num * precision
  var gcd = abs(GCD(number, precision))

  //分子
  var numerator = number / gcd
  //分母
  var denominator = precision / gcd

  //分数
  return round(numerator) + '/' + round(denominator)
}

module.exports = num2fraction
});

var index$3 = interopDefault(index$2);


var require$$0$9 = Object.freeze({
  default: index$3
});

var resolution = createCommonjsModule(function (module) {
(function() {
  var Prefixer, Resolution, n2f, regexp, split, utils,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Prefixer = interopDefault(require$$0$7);

  utils = interopDefault(require$$0$4);

  n2f = interopDefault(require$$0$9);

  regexp = /(min|max)-resolution\s*:\s*\d*\.?\d+(dppx|dpi)/gi;

  split = /(min|max)-resolution(\s*:\s*)(\d*\.?\d+)(dppx|dpi)/i;

  Resolution = (function(superClass) {
    extend(Resolution, superClass);

    function Resolution() {
      return Resolution.__super__.constructor.apply(this, arguments);
    }

    Resolution.prototype.prefixName = function(prefix, name) {
      return name = prefix === '-moz-' ? name + '--moz-device-pixel-ratio' : prefix + name + '-device-pixel-ratio';
    };

    Resolution.prototype.prefixQuery = function(prefix, name, colon, value, units) {
      if (units === 'dpi') {
        value = Number(value / 96);
      }
      if (prefix === '-o-') {
        value = n2f(value);
      }
      return this.prefixName(prefix, name) + colon + value;
    };

    Resolution.prototype.clean = function(rule) {
      var j, len, prefix, ref;
      if (!this.bad) {
        this.bad = [];
        ref = this.prefixes;
        for (j = 0, len = ref.length; j < len; j++) {
          prefix = ref[j];
          this.bad.push(this.prefixName(prefix, 'min'));
          this.bad.push(this.prefixName(prefix, 'max'));
        }
      }
      return rule.params = utils.editList(rule.params, (function(_this) {
        return function(queries) {
          return queries.filter(function(query) {
            return _this.bad.every(function(i) {
              return query.indexOf(i) === -1;
            });
          });
        };
      })(this));
    };

    Resolution.prototype.process = function(rule) {
      var parent, prefixes;
      parent = this.parentPrefix(rule);
      prefixes = parent ? [parent] : this.prefixes;
      return rule.params = utils.editList(rule.params, (function(_this) {
        return function(origin, prefixed) {
          var j, k, len, len1, prefix, processed, query;
          for (j = 0, len = origin.length; j < len; j++) {
            query = origin[j];
            if (query.indexOf('min-resolution') === -1 && query.indexOf('max-resolution') === -1) {
              prefixed.push(query);
              continue;
            }
            for (k = 0, len1 = prefixes.length; k < len1; k++) {
              prefix = prefixes[k];
              if (prefix === '-moz-' && rule.params.indexOf('dpi') !== -1) {
                continue;
              } else {
                processed = query.replace(regexp, function(str) {
                  var parts;
                  parts = str.match(split);
                  return _this.prefixQuery(prefix, parts[1], parts[2], parts[3], parts[4]);
                });
                prefixed.push(processed);
              }
            }
            prefixed.push(query);
          }
          return utils.uniq(prefixed);
        };
      })(this));
    };

    return Resolution;

  })(Prefixer);

  module.exports = Resolution;

}).call(commonjsGlobal);
});

var resolution$1 = interopDefault(resolution);


var require$$49 = Object.freeze({
  default: resolution$1
});

var parse = createCommonjsModule(function (module) {
var openParentheses = '('.charCodeAt(0);
var closeParentheses = ')'.charCodeAt(0);
var singleQuote = '\''.charCodeAt(0);
var doubleQuote = '"'.charCodeAt(0);
var backslash = '\\'.charCodeAt(0);
var slash = '/'.charCodeAt(0);
var comma = ','.charCodeAt(0);
var colon = ':'.charCodeAt(0);
var star = '*'.charCodeAt(0);

module.exports = function (input) {
    var tokens = [];
    var value = input;

    var next, quote, prev, token, escape, escapePos, whitespacePos;
    var pos = 0;
    var code = value.charCodeAt(pos);
    var max = value.length;
    var stack = [{ nodes: tokens }];
    var balanced = 0;
    var parent;

    var name = '';
    var before = '';
    var after = '';

    while (pos < max) {
        // Whitespaces
        if (code <= 32) {
            next = pos;
            do {
                next += 1;
                code = value.charCodeAt(next);
            } while (code <= 32);
            token = value.slice(pos, next);

            prev = tokens[tokens.length - 1];
            if (code === closeParentheses && balanced) {
                after = token;
            } else if (prev && prev.type === 'div') {
                prev.after = token;
            } else if (code === comma || code === colon || code === slash && value.charCodeAt(next + 1) !== star) {
                before = token;
            } else {
                tokens.push({
                    type: 'space',
                    sourceIndex: pos,
                    value: token
                });
            }

            pos = next;

        // Quotes
        } else if (code === singleQuote || code === doubleQuote) {
            next = pos;
            quote = code === singleQuote ? '\'' : '"';
            token = {
                type: 'string',
                sourceIndex: pos,
                quote: quote
            };
            do {
                escape = false;
                next = value.indexOf(quote, next + 1);
                if (~next) {
                    escapePos = next;
                    while (value.charCodeAt(escapePos - 1) === backslash) {
                        escapePos -= 1;
                        escape = !escape;
                    }
                } else {
                    value += quote;
                    next = value.length - 1;
                    token.unclosed = true;
                }
            } while (escape);
            token.value = value.slice(pos + 1, next);

            tokens.push(token);
            pos = next + 1;
            code = value.charCodeAt(pos);

        // Comments
        } else if (code === slash && value.charCodeAt(pos + 1) === star) {
            token = {
                type: 'comment',
                sourceIndex: pos
            };

            next = value.indexOf('*/', pos);
            if (next === -1) {
                token.unclosed = true;
                next = value.length;
            }

            token.value = value.slice(pos + 2, next);
            tokens.push(token);

            pos = next + 2;
            code = value.charCodeAt(pos);

        // Dividers
        } else if (code === slash || code === comma || code === colon) {
            token = value[pos];

            tokens.push({
                type: 'div',
                sourceIndex: pos - before.length,
                value: token,
                before: before,
                after: ''
            });
            before = '';

            pos += 1;
            code = value.charCodeAt(pos);

        // Open parentheses
        } else if (openParentheses === code) {
            // Whitespaces after open parentheses
            next = pos;
            do {
                next += 1;
                code = value.charCodeAt(next);
            } while (code <= 32);
            token = {
                type: 'function',
                sourceIndex: pos - name.length,
                value: name,
                before: value.slice(pos + 1, next)
            };
            pos = next;

            if (name === 'url' && code !== singleQuote && code !== doubleQuote) {
                next -= 1;
                do {
                    escape = false;
                    next = value.indexOf(')', next + 1);
                    if (~next) {
                        escapePos = next;
                        while (value.charCodeAt(escapePos - 1) === backslash) {
                            escapePos -= 1;
                            escape = !escape;
                        }
                    } else {
                        value += ')';
                        next = value.length - 1;
                        token.unclosed = true;
                    }
                } while (escape);
                // Whitespaces before closed
                whitespacePos = next;
                do {
                    whitespacePos -= 1;
                    code = value.charCodeAt(whitespacePos);
                } while (code <= 32);
                if (pos !== whitespacePos + 1) {
                    token.nodes = [{
                        type: 'word',
                        sourceIndex: pos,
                        value: value.slice(pos, whitespacePos + 1)
                    }];
                } else {
                    token.nodes = [];
                }
                if (token.unclosed && whitespacePos + 1 !== next) {
                    token.after = '';
                    token.nodes.push({
                        type: 'space',
                        sourceIndex: whitespacePos + 1,
                        value: value.slice(whitespacePos + 1, next)
                    });
                } else {
                    token.after = value.slice(whitespacePos + 1, next);
                }
                pos = next + 1;
                code = value.charCodeAt(pos);
                tokens.push(token);
            } else {
                balanced += 1;
                token.after = '';
                tokens.push(token);
                stack.push(token);
                tokens = token.nodes = [];
                parent = token;
            }
            name = '';

        // Close parentheses
        } else if (closeParentheses === code && balanced) {
            pos += 1;
            code = value.charCodeAt(pos);

            parent.after = after;
            after = '';
            balanced -= 1;
            stack.pop();
            parent = stack[balanced];
            tokens = parent.nodes;

        // Words
        } else {
            next = pos;
            do {
                if (code === backslash) {
                    next += 1;
                }
                next += 1;
                code = value.charCodeAt(next);
            } while (next < max && !(
                code <= 32 ||
                code === singleQuote ||
                code === doubleQuote ||
                code === comma ||
                code === colon ||
                code === slash ||
                code === openParentheses ||
                code === closeParentheses && balanced
            ));
            token = value.slice(pos, next);

            if (openParentheses === code) {
                name = token;
            } else {
                tokens.push({
                    type: 'word',
                    sourceIndex: pos,
                    value: token
                });
            }

            pos = next;
        }
    }

    for (pos = stack.length - 1; pos; pos -= 1) {
        stack[pos].unclosed = true;
    }

    return stack[0].nodes;
};
});

var parse$1 = interopDefault(parse);


var require$$3$1 = Object.freeze({
    default: parse$1
});

var walk = createCommonjsModule(function (module) {
module.exports = function walk(nodes, cb, bubble) {
    var i, max, node, result;

    for (i = 0, max = nodes.length; i < max; i += 1) {
        node = nodes[i];
        if (!bubble) {
            result = cb(node, i, nodes);
        }

        if (result !== false && node.type === 'function' && Array.isArray(node.nodes)) {
            walk(node.nodes, cb, bubble);
        }

        if (bubble) {
            cb(node, i, nodes);
        }
    }
};
});

var walk$1 = interopDefault(walk);


var require$$2$1 = Object.freeze({
    default: walk$1
});

var stringify = createCommonjsModule(function (module) {
function stringifyNode(node, custom) {
    var type = node.type;
    var value = node.value;
    var buf;
    var customResult;

    if (custom && (customResult = custom(node)) !== undefined) {
        return customResult;
    } else if (type === 'word' || type === 'space') {
        return value;
    } else if (type === 'string') {
        buf = node.quote || '';
        return buf + value + (node.unclosed ? '' : buf);
    } else if (type === 'comment') {
        return '/*' + value + (node.unclosed ? '' : '*/');
    } else if (type === 'div') {
        return (node.before || '') + value + (node.after || '');
    } else if (Array.isArray(node.nodes)) {
        buf = stringify(node.nodes);
        if (type !== 'function') {
            return buf;
        }
        return value + '(' + (node.before || '') + buf + (node.after || '') + (node.unclosed ? '' : ')');
    }
    return value;
}

function stringify(nodes, custom) {
    var result, i;

    if (Array.isArray(nodes)) {
        result = '';
        for (i = nodes.length - 1; ~i; i -= 1) {
            result = stringifyNode(nodes[i], custom) + result;
        }
        return result;
    }
    return stringifyNode(nodes, custom);
}

module.exports = stringify;
});

var stringify$1 = interopDefault(stringify);


var require$$1$4 = Object.freeze({
    default: stringify$1
});

var unit = createCommonjsModule(function (module) {
var minus = '-'.charCodeAt(0);
var plus  = '+'.charCodeAt(0);
var dot   = '.'.charCodeAt(0);

module.exports = function (value) {
    var pos = 0;
    var length = value.length;
    var dotted = false;
    var containsNumber = false;
    var code;
    var number = '';

    while (pos < length) {
        code = value.charCodeAt(pos);

        if (code >= 48 && code <= 57) {
            number += value[pos];
            containsNumber = true;
        } else if (code === dot) {
            if (dotted) {
                break;
            }
            dotted = true;
            number += value[pos];
        } else if (code === plus || code === minus) {
            if (pos !== 0) {
                break;
            }
            number += value[pos];
        } else {
            break;
        }

        pos += 1;
    }

    return containsNumber ? {
        number: number,
        unit: value.slice(pos)
    } : false;
};
});

var unit$1 = interopDefault(unit);


var require$$0$10 = Object.freeze({
    default: unit$1
});

var index$4 = createCommonjsModule(function (module) {
var parse = interopDefault(require$$3$1);
var walk = interopDefault(require$$2$1);
var stringify = interopDefault(require$$1$4);

function ValueParser(value) {
    if (this instanceof ValueParser) {
        this.nodes = parse(value);
        return this;
    }
    return new ValueParser(value);
}

ValueParser.prototype.toString = function () {
    return Array.isArray(this.nodes) ? stringify(this.nodes) : '';
};

ValueParser.prototype.walk = function (cb, bubble) {
    walk(this.nodes, cb, bubble);
    return this;
};

ValueParser.unit = interopDefault(require$$0$10);

ValueParser.walk = walk;

ValueParser.stringify = stringify;

module.exports = ValueParser;
});

var index$5 = interopDefault(index$4);


var require$$2 = Object.freeze({
    default: index$5
});

var transition = createCommonjsModule(function (module) {
(function() {
  var Transition, list, parser, vendor;

  parser = interopDefault(require$$2);

  vendor = interopDefault(require$$0$8);

  list = interopDefault(require$$0$5);

  Transition = (function() {
    function Transition(prefixes) {
      this.prefixes = prefixes;
    }

    Transition.prototype.props = ['transition', 'transition-property'];

    Transition.prototype.add = function(decl, result) {
      var added, clean, declPrefixes, j, k, l, len, len1, len2, names, param, params, prefix, prefixValue, prefixed, prefixer, prop, ref, ref1, value;
      declPrefixes = ((ref = this.prefixes.add[decl.prop]) != null ? ref.prefixes : void 0) || [];
      params = this.parse(decl.value);
      names = params.map(function(i) {
        return i[0].value;
      });
      added = [];
      if (names.some(function(i) {
        return i[0] === '-';
      })) {
        return;
      }
      for (j = 0, len = params.length; j < len; j++) {
        param = params[j];
        prop = param[0].value;
        if (prop[0] === '-') {
          continue;
        }
        prefixer = this.prefixes.add[prop];
        if (!(prefixer != null ? prefixer.prefixes : void 0)) {
          continue;
        }
        ref1 = prefixer.prefixes;
        for (k = 0, len1 = ref1.length; k < len1; k++) {
          prefix = ref1[k];
          prefixed = this.prefixes.prefixed(prop, prefix);
          if (prefixed !== '-ms-transform' && names.indexOf(prefixed) === -1) {
            if (!this.disabled(prop, prefix)) {
              added.push(this.clone(prefixed, param));
            }
          }
        }
      }
      params = params.concat(added);
      value = this.stringify(params);
      clean = this.stringify(this.cleanForSafari(params));
      if (declPrefixes.indexOf('-webkit-') !== -1) {
        this.cloneBefore(decl, '-webkit-' + decl.prop, clean);
      }
      this.cloneBefore(decl, decl.prop, clean);
      for (l = 0, len2 = declPrefixes.length; l < len2; l++) {
        prefix = declPrefixes[l];
        if (prefix !== '-webkit-') {
          prefixValue = this.stringify(this.cleanOtherPrefixes(params, prefix));
          this.cloneBefore(decl, prefix + decl.prop, prefixValue);
        }
      }
      if (value !== decl.value && !this.already(decl, decl.prop, value)) {
        this.checkForWarning(result, decl);
        decl.cloneBefore();
        return decl.value = value;
      }
    };

    Transition.prototype.already = function(decl, prop, value) {
      return decl.parent.some(function(i) {
        return i.prop === prop && i.value === value;
      });
    };

    Transition.prototype.cloneBefore = function(decl, prop, value) {
      if (!this.already(decl, prop, value)) {
        return decl.cloneBefore({
          prop: prop,
          value: value
        });
      }
    };

    Transition.prototype.checkForWarning = function(result, decl) {
      if (decl.prop === 'transition-property') {
        return decl.parent.each(function(i) {
          if (i.type !== 'decl') {
            return;
          }
          if (i.prop.indexOf('transition-') !== 0) {
            return;
          }
          if (i.prop === 'transition-property') {
            return;
          }
          if (list.comma(i.value).length > 1) {
            decl.warn(result, 'Replace transition-property to transition, ' + 'because Autoprefixer could not support ' + 'any cases of transition-property ' + 'and other transition-*');
          }
          return false;
        });
      }
    };

    Transition.prototype.remove = function(decl) {
      var double, params, smaller, value;
      params = this.parse(decl.value);
      params = params.filter((function(_this) {
        return function(param) {
          var ref;
          return !((ref = _this.prefixes.remove[param[0].value]) != null ? ref.remove : void 0);
        };
      })(this));
      value = this.stringify(params);
      if (decl.value === value) {
        return;
      }
      if (params.length === 0) {
        decl.remove();
        return;
      }
      double = decl.parent.some(function(i) {
        return i.prop === decl.prop && i.value === value;
      });
      smaller = decl.parent.some(function(i) {
        return i !== decl && i.prop === decl.prop && i.value.length > value.length;
      });
      if (double || smaller) {
        return decl.remove();
      } else {
        return decl.value = value;
      }
    };

    Transition.prototype.parse = function(value) {
      var ast, j, len, node, param, ref, result;
      ast = parser(value);
      result = [];
      param = [];
      ref = ast.nodes;
      for (j = 0, len = ref.length; j < len; j++) {
        node = ref[j];
        param.push(node);
        if (node.type === 'div' && node.value === ',') {
          result.push(param);
          param = [];
        }
      }
      result.push(param);
      return result.filter(function(i) {
        return i.length > 0;
      });
    };

    Transition.prototype.stringify = function(params) {
      var j, len, nodes, param;
      if (params.length === 0) {
        return '';
      }
      nodes = [];
      for (j = 0, len = params.length; j < len; j++) {
        param = params[j];
        if (param[param.length - 1].type !== 'div') {
          param.push(this.div(params));
        }
        nodes = nodes.concat(param);
      }
      if (nodes[0].type === 'div') {
        nodes = nodes.slice(1);
      }
      if (nodes[nodes.length - 1].type === 'div') {
        nodes = nodes.slice(0, -1);
      }
      return parser.stringify({
        nodes: nodes
      });
    };

    Transition.prototype.clone = function(name, param) {
      var i, j, len, result;
      result = [];
      for (j = 0, len = param.length; j < len; j++) {
        i = param[j];
        result.push(i);
      }
      result[0] = {
        type: 'word',
        value: name
      };
      return result;
    };

    Transition.prototype.div = function(params) {
      var j, k, len, len1, node, param;
      for (j = 0, len = params.length; j < len; j++) {
        param = params[j];
        for (k = 0, len1 = param.length; k < len1; k++) {
          node = param[k];
          if (node.type === 'div' && node.value === ',') {
            return node;
          }
        }
      }
      return {
        type: 'div',
        value: ',',
        after: ' '
      };
    };

    Transition.prototype.cleanOtherPrefixes = function(params, prefix) {
      return params.filter(function(param) {
        var current;
        current = vendor.prefix(param[0].value);
        return current === '' || current === prefix;
      });
    };

    Transition.prototype.cleanForSafari = function(params) {
      var j, len, param, prefix, prop, remove, result;
      result = [];
      remove = params.map(function(i) {
        return i[0].value;
      }).filter(function(i) {
        return i.slice(0, 8) === '-webkit-';
      }).map((function(_this) {
        return function(i) {
          return _this.prefixes.unprefixed(i);
        };
      })(this));
      for (j = 0, len = params.length; j < len; j++) {
        param = params[j];
        prop = param[0].value;
        prefix = vendor.prefix(prop);
        if (remove.indexOf(prop) === -1 && (prefix === '-webkit-' || prefix === '')) {
          result.push(param);
        }
      }
      return result;
    };

    Transition.prototype.disabled = function(prop, prefix) {
      var other;
      other = ['order', 'justify-content', 'align-self', 'align-content'];
      if (prop.indexOf('flex') !== -1 || other.indexOf(prop) !== -1) {
        if (this.prefixes.options.flexbox === false) {
          return true;
        } else if (this.prefixes.options.flexbox === 'no-2009') {
          return prefix.indexOf('2009') !== -1;
        }
      }
    };

    return Transition;

  })();

  module.exports = Transition;

}).call(commonjsGlobal);
});

var transition$1 = interopDefault(transition);


var require$$48 = Object.freeze({
  default: transition$1
});

var oldValue = createCommonjsModule(function (module) {
(function() {
  var OldValue, utils;

  utils = interopDefault(require$$0$4);

  OldValue = (function() {
    function OldValue(unprefixed, prefixed, string, regexp) {
      this.unprefixed = unprefixed;
      this.prefixed = prefixed;
      this.string = string;
      this.regexp = regexp;
      this.regexp || (this.regexp = utils.regexp(this.prefixed));
      this.string || (this.string = this.prefixed);
    }

    OldValue.prototype.check = function(value) {
      if (value.indexOf(this.string) !== -1) {
        return !!value.match(this.regexp);
      } else {
        return false;
      }
    };

    return OldValue;

  })();

  module.exports = OldValue;

}).call(commonjsGlobal);
});

var oldValue$1 = interopDefault(oldValue);


var require$$2$2 = Object.freeze({
  default: oldValue$1
});

var value = createCommonjsModule(function (module) {
(function() {
  var OldValue, Prefixer, Value, utils, vendor,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Prefixer = interopDefault(require$$0$7);

  OldValue = interopDefault(require$$2$2);

  utils = interopDefault(require$$0$4);

  vendor = interopDefault(require$$0$8);

  Value = (function(superClass) {
    extend(Value, superClass);

    function Value() {
      return Value.__super__.constructor.apply(this, arguments);
    }

    Value.save = function(prefixes, decl) {
      var already, cloned, prefix, prefixed, prop, propPrefix, ref, results, rule, trimmed, value;
      prop = decl.prop;
      ref = decl._autoprefixerValues;
      results = [];
      for (prefix in ref) {
        value = ref[prefix];
        if (value === decl.value) {
          continue;
        }
        propPrefix = vendor.prefix(prop);
        if (propPrefix === prefix) {
          results.push(decl.value = value);
        } else if (propPrefix === '-pie-') {
          continue;
        } else {
          prefixed = prefixes.prefixed(prop, prefix);
          rule = decl.parent;
          if (rule.every(function(i) {
            return i.prop !== prefixed;
          })) {
            trimmed = value.replace(/\s+/, ' ');
            already = rule.some(function(i) {
              return i.prop === decl.prop && i.value.replace(/\s+/, ' ') === trimmed;
            });
            if (!already) {
              cloned = this.clone(decl, {
                value: value
              });
              results.push(decl.parent.insertBefore(decl, cloned));
            } else {
              results.push(void 0);
            }
          } else {
            results.push(void 0);
          }
        }
      }
      return results;
    };

    Value.prototype.check = function(decl) {
      var value;
      value = decl.value;
      if (value.indexOf(this.name) !== -1) {
        return !!value.match(this.regexp());
      } else {
        return false;
      }
    };

    Value.prototype.regexp = function() {
      return this.regexpCache || (this.regexpCache = utils.regexp(this.name));
    };

    Value.prototype.replace = function(string, prefix) {
      return string.replace(this.regexp(), '$1' + prefix + '$2');
    };

    Value.prototype.value = function(decl) {
      if (decl.raws.value && decl.raws.value.value === decl.value) {
        return decl.raws.value.raw;
      } else {
        return decl.value;
      }
    };

    Value.prototype.add = function(decl, prefix) {
      var value;
      decl._autoprefixerValues || (decl._autoprefixerValues = {});
      value = decl._autoprefixerValues[prefix] || this.value(decl);
      value = this.replace(value, prefix);
      if (value) {
        return decl._autoprefixerValues[prefix] = value;
      }
    };

    Value.prototype.old = function(prefix) {
      return new OldValue(this.name, prefix + this.name);
    };

    return Value;

  })(Prefixer);

  module.exports = Value;

}).call(commonjsGlobal);
});

var value$1 = interopDefault(value);


var require$$1$5 = Object.freeze({
  default: value$1
});

var processor = createCommonjsModule(function (module) {
(function() {
  var OLD_DIRECTION, Processor, Value, utils, vendor;

  vendor = interopDefault(require$$0$8);

  Value = interopDefault(require$$1$5);

  utils = interopDefault(require$$0$4);

  OLD_DIRECTION = /(^|[^-])(linear|radial)-gradient\(\s*(top|left|right|bottom)/i;

  Processor = (function() {
    function Processor(prefixes) {
      this.prefixes = prefixes;
    }

    Processor.prototype.add = function(css, result) {
      var keyframes, resolution, supports, viewport;
      resolution = this.prefixes.add['@resolution'];
      keyframes = this.prefixes.add['@keyframes'];
      viewport = this.prefixes.add['@viewport'];
      supports = this.prefixes.add['@supports'];
      css.walkAtRules((function(_this) {
        return function(rule) {
          if (rule.name === 'keyframes') {
            if (!_this.disabled(rule)) {
              return keyframes != null ? keyframes.process(rule) : void 0;
            }
          } else if (rule.name === 'viewport') {
            if (!_this.disabled(rule)) {
              return viewport != null ? viewport.process(rule) : void 0;
            }
          } else if (rule.name === 'supports') {
            if (_this.prefixes.options.supports !== false && !_this.disabled(rule)) {
              return supports.process(rule);
            }
          } else if (rule.name === 'media' && rule.params.indexOf('-resolution') !== -1) {
            if (!_this.disabled(rule)) {
              return resolution != null ? resolution.process(rule) : void 0;
            }
          }
        };
      })(this));
      css.walkRules((function(_this) {
        return function(rule) {
          var j, len, ref, results, selector;
          if (_this.disabled(rule)) {
            return;
          }
          ref = _this.prefixes.add.selectors;
          results = [];
          for (j = 0, len = ref.length; j < len; j++) {
            selector = ref[j];
            results.push(selector.process(rule, result));
          }
          return results;
        };
      })(this));
      css.walkDecls((function(_this) {
        return function(decl) {
          var display, prefixer;
          if (_this.disabled(decl)) {
            return;
          }
          if (decl.prop === 'display' && decl.value === 'box') {
            result.warn('You should write display: flex by final spec ' + 'instead of display: box', {
              node: decl
            });
            return;
          }
          if (decl.value.indexOf('linear-gradient') !== -1) {
            if (OLD_DIRECTION.test(decl.value)) {
              result.warn('Gradient has outdated direction syntax. ' + 'New syntax is like `to left` instead of `right`.', {
                node: decl
              });
            }
          }
          if (decl.prop === 'text-emphasis-position') {
            if (decl.value === 'under' || decl.value === 'over') {
              result.warn('You should use 2 values for text-emphasis-position ' + 'For example, `under left` instead of just `under`.', {
                node: decl
              });
            }
          }
          if (decl.value.indexOf('fill-available') !== -1) {
            result.warn('Replace fill-available to fill, ' + 'because spec had been changed', {
              node: decl
            });
          }
          if (_this.prefixes.options.flexbox !== false) {
            if (decl.prop === 'grid-row-end' && decl.value.indexOf('span') === -1) {
              result.warn('IE supports only grid-row-end with span. ' + 'You should add grid: false option to Autoprefixer ' + 'and use some JS grid polyfill for full spec support', {
                node: decl
              });
            }
            if (decl.prop === 'grid-row') {
              if (decl.value.indexOf('/') !== -1 && decl.value.indexOf('span') === -1) {
                result.warn('IE supports only grid-row with / and span. ' + 'You should add grid: false option to Autoprefixer ' + 'and use some JS grid polyfill for full spec support', {
                  node: decl
                });
              }
            }
          }
          if (decl.prop === 'transition' || decl.prop === 'transition-property') {
            return _this.prefixes.transition.add(decl, result);
          } else if (decl.prop === 'align-items') {
            display = _this.displayType(decl);
            if (display !== 'grid' && _this.prefixes.options.flexbox !== false) {
              prefixer = _this.prefixes.add['align-items'];
              if (prefixer && prefixer.prefixes) {
                prefixer.process(decl);
              }
            }
            if (display !== 'flex' && _this.prefixes.options.grid !== false) {
              prefixer = _this.prefixes.add['grid-row-align'];
              if (prefixer && prefixer.prefixes) {
                return prefixer.process(decl);
              }
            }
          } else {
            prefixer = _this.prefixes.add[decl.prop];
            if (prefixer && prefixer.prefixes) {
              return prefixer.process(decl);
            }
          }
        };
      })(this));
      return css.walkDecls((function(_this) {
        return function(decl) {
          var j, len, ref, unprefixed, value;
          if (_this.disabled(decl)) {
            return;
          }
          unprefixed = _this.prefixes.unprefixed(decl.prop);
          ref = _this.prefixes.values('add', unprefixed);
          for (j = 0, len = ref.length; j < len; j++) {
            value = ref[j];
            value.process(decl, result);
          }
          return Value.save(_this.prefixes, decl);
        };
      })(this));
    };

    Processor.prototype.remove = function(css) {
      var checker, j, len, ref, resolution;
      resolution = this.prefixes.remove['@resolution'];
      css.walkAtRules((function(_this) {
        return function(rule, i) {
          if (_this.prefixes.remove['@' + rule.name]) {
            if (!_this.disabled(rule)) {
              return rule.parent.removeChild(i);
            }
          } else if (rule.name === 'media' && rule.params.indexOf('-resolution') !== -1) {
            return resolution != null ? resolution.clean(rule) : void 0;
          }
        };
      })(this));
      ref = this.prefixes.remove.selectors;
      for (j = 0, len = ref.length; j < len; j++) {
        checker = ref[j];
        css.walkRules((function(_this) {
          return function(rule, i) {
            if (checker.check(rule)) {
              if (!_this.disabled(rule)) {
                return rule.parent.removeChild(i);
              }
            }
          };
        })(this));
      }
      return css.walkDecls((function(_this) {
        return function(decl, i) {
          var k, len1, notHack, ref1, ref2, rule, unprefixed;
          if (_this.disabled(decl)) {
            return;
          }
          rule = decl.parent;
          unprefixed = _this.prefixes.unprefixed(decl.prop);
          if (decl.prop === 'transition' || decl.prop === 'transition-property') {
            _this.prefixes.transition.remove(decl);
          }
          if ((ref1 = _this.prefixes.remove[decl.prop]) != null ? ref1.remove : void 0) {
            notHack = _this.prefixes.group(decl).down(function(other) {
              return _this.prefixes.normalize(other.prop) === unprefixed;
            });
            if (notHack && !_this.withHackValue(decl)) {
              if (decl.raw('before').indexOf("\n") > -1) {
                _this.reduceSpaces(decl);
              }
              rule.removeChild(i);
              return;
            }
          }
          ref2 = _this.prefixes.values('remove', unprefixed);
          for (k = 0, len1 = ref2.length; k < len1; k++) {
            checker = ref2[k];
            if (checker.check(decl.value)) {
              unprefixed = checker.unprefixed;
              notHack = _this.prefixes.group(decl).down(function(other) {
                return other.value.indexOf(unprefixed) !== -1;
              });
              if (notHack) {
                rule.removeChild(i);
                return;
              } else if (checker.clean) {
                checker.clean(decl);
                return;
              }
            }
          }
        };
      })(this));
    };

    Processor.prototype.withHackValue = function(decl) {
      return decl.prop === '-webkit-background-clip' && decl.value === 'text';
    };

    Processor.prototype.disabled = function(node) {
      var other, status;
      if (this.prefixes.options.grid === false && node.type === 'decl') {
        if (node.prop === 'display' && node.value.indexOf('grid') !== -1) {
          return true;
        }
        if (node.prop.indexOf('grid') !== -1 || node.prop === 'justify-items') {
          return true;
        }
      }
      if (this.prefixes.options.flexbox === false && node.type === 'decl') {
        if (node.prop === 'display' && node.value.indexOf('flex') !== -1) {
          return true;
        }
        other = ['order', 'justify-content', 'align-self', 'align-content'];
        if (node.prop.indexOf('flex') !== -1 || other.indexOf(node.prop) !== -1) {
          return true;
        }
      }
      if (node._autoprefixerDisabled != null) {
        return node._autoprefixerDisabled;
      } else if (node.nodes) {
        status = void 0;
        node.each(function(i) {
          if (i.type !== 'comment') {
            return;
          }
          if (/(!\s*)?autoprefixer:\s*off/i.test(i.text)) {
            status = false;
            return false;
          } else if (/(!\s*)?autoprefixer:\s*on/i.test(i.text)) {
            status = true;
            return false;
          }
        });
        return node._autoprefixerDisabled = status != null ? !status : node.parent ? this.disabled(node.parent) : false;
      } else if (node.parent) {
        return node._autoprefixerDisabled = this.disabled(node.parent);
      } else {
        return false;
      }
    };

    Processor.prototype.reduceSpaces = function(decl) {
      var diff, parts, prevMin, stop;
      stop = false;
      this.prefixes.group(decl).up(function(other) {
        return stop = true;
      });
      if (stop) {
        return;
      }
      parts = decl.raw('before').split("\n");
      prevMin = parts[parts.length - 1].length;
      diff = false;
      return this.prefixes.group(decl).down(function(other) {
        var last;
        parts = other.raw('before').split("\n");
        last = parts.length - 1;
        if (parts[last].length > prevMin) {
          if (diff === false) {
            diff = parts[last].length - prevMin;
          }
          parts[last] = parts[last].slice(0, -diff);
          return other.raws.before = parts.join("\n");
        }
      });
    };

    Processor.prototype.displayType = function(decl) {
      var i, j, len, ref;
      ref = decl.parent.nodes;
      for (j = 0, len = ref.length; j < len; j++) {
        i = ref[j];
        if (i.prop === 'display') {
          if (i.value.indexOf('flex') !== -1) {
            return 'flex';
          } else if (i.value.indexOf('grid') !== -1) {
            return 'grid';
          }
        }
      }
      return false;
    };

    return Processor;

  })();

  module.exports = Processor;

}).call(commonjsGlobal);
});

var processor$1 = interopDefault(processor);


var require$$47 = Object.freeze({
  default: processor$1
});

var brackets = createCommonjsModule(function (module) {
(function() {
  var brackets, last;

  last = function(array) {
    return array[array.length - 1];
  };

  brackets = {
    parse: function(str) {
      var current, j, len, stack, sym;
      current = [''];
      stack = [current];
      for (j = 0, len = str.length; j < len; j++) {
        sym = str[j];
        if (sym === '(') {
          current = [''];
          last(stack).push(current);
          stack.push(current);
        } else if (sym === ')') {
          stack.pop();
          current = last(stack);
          current.push('');
        } else {
          current[current.length - 1] += sym;
        }
      }
      return stack[0];
    },
    stringify: function(ast) {
      var i, j, len, result;
      result = '';
      for (j = 0, len = ast.length; j < len; j++) {
        i = ast[j];
        if (typeof i === 'object') {
          result += '(' + brackets.stringify(i) + ')';
        } else {
          result += i;
        }
      }
      return result;
    }
  };

  module.exports = brackets;

}).call(commonjsGlobal);
});

var brackets$1 = interopDefault(brackets);


var require$$4 = Object.freeze({
  default: brackets$1
});

var title = "CSS Feature Queries";
var description = "CSS Feature Queries allow authors to condition rules based on whether particular property declarations are supported in CSS using the @supports at rule.";
var spec = "http://www.w3.org/TR/css3-conditional/#at-supports";
var status = "cr";
var links = [{"url":"https://developer.mozilla.org/en-US/docs/Web/CSS/@supports","title":"MDN Article"},{"url":"http://mcc.id.au/blog/2012/08/supports","title":"@supports in Firefox"},{"url":"http://dabblet.com/gist/3895764","title":"Test case"},{"url":"http://docs.webplatform.org/wiki/css/atrules/@supports","title":"WebPlatform Docs"}];
var bugs = [{"description":"Using @supports on Chrome 28-29 and Opera 15-16 breaks following :not selectors. [crbug.com/257695](http://crbug.com/257695)"},{"description":"Safari claims to support certain font-feature-settings it actually does not. [This JS module](https://github.com/kennethormandy/font-feature-fibbing) helps to provide accurate support for this."}];
var categories = ["CSS3"];
var stats = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","5.5":"n"},"edge":{"12":"y","13":"y","14":"y"},"firefox":{"2":"n","3":"n","4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","3.5":"n","3.6":"n"},"chrome":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","51":"y","52":"y","53":"y","54":"y","55":"y"},"safari":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"y","10":"y","3.1":"n","3.2":"n","5.1":"n","6.1":"n","7.1":"n","9.1":"y","TP":"y"},"opera":{"9":"n","11":"n","12":"n","15":"y","16":"y","17":"y","18":"y","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"y"},"ios_saf":{"8":"n","3.2":"n","4.0-4.1":"n","4.2-4.3":"n","5.0-5.1":"n","6.0-6.1":"n","7.0-7.1":"n","8.1-8.4":"n","9.0-9.2":"y","9.3":"y"},"op_mini":{"all":"n"},"android":{"3":"n","4":"n","51":"y","2.1":"n","2.2":"n","2.3":"n","4.1":"n","4.2-4.3":"n","4.4":"y","4.4.3-4.4.4":"y"},"bb":{"7":"n","10":"n"},"op_mob":{"10":"n","11":"n","12":"n","37":"y","11.1":"n","11.5":"n","12.1":"n"},"and_chr":{"51":"y"},"and_ff":{"47":"y"},"ie_mob":{"10":"n","11":"n"},"and_uc":{"9.9":"n"},"samsung":{"4":"y"}};
var notes = "See also the [CSS.supports() DOM API](#feat=css-supports-api)";
var notes_by_num = {};
var usage_perc_y = 76.31;
var usage_perc_a = 0;
var ucprefix = false;
var parent = "";
var keywords = "supports,conditional";
var ie_id = "conditionalrules";
var chrome_id = "4993981813358592";
var firefox_id = "";
var webkit_id = "";
var shown = true;
var cssFeaturequeries = {
	title: title,
	description: description,
	spec: spec,
	status: status,
	links: links,
	bugs: bugs,
	categories: categories,
	stats: stats,
	notes: notes,
	notes_by_num: notes_by_num,
	usage_perc_y: usage_perc_y,
	usage_perc_a: usage_perc_a,
	ucprefix: ucprefix,
	parent: parent,
	keywords: keywords,
	ie_id: ie_id,
	chrome_id: chrome_id,
	firefox_id: firefox_id,
	webkit_id: webkit_id,
	shown: shown
};

var require$$0$11 = Object.freeze({
	title: title,
	description: description,
	spec: spec,
	status: status,
	links: links,
	bugs: bugs,
	categories: categories,
	stats: stats,
	notes: notes,
	notes_by_num: notes_by_num,
	usage_perc_y: usage_perc_y,
	usage_perc_a: usage_perc_a,
	ucprefix: ucprefix,
	parent: parent,
	keywords: keywords,
	ie_id: ie_id,
	chrome_id: chrome_id,
	firefox_id: firefox_id,
	webkit_id: webkit_id,
	shown: shown,
	default: cssFeaturequeries
});

var supports = createCommonjsModule(function (module) {
(function() {
  var Browsers, Supports, Value, brackets, browser, data, postcss, ref, support, supported, utils, version, versions;

  Browsers = interopDefault(require$$1$3);

  brackets = interopDefault(require$$4);

  Value = interopDefault(require$$1$5);

  utils = interopDefault(require$$0$4);

  postcss = interopDefault(require$$1);

  supported = [];

  data = interopDefault(require$$0$11);

  ref = data.stats;
  for (browser in ref) {
    versions = ref[browser];
    for (version in versions) {
      support = versions[version];
      if (/y/.test(support)) {
        supported.push(browser + ' ' + version);
      }
    }
  }

  Supports = (function() {
    function Supports(Prefixes, all1) {
      this.Prefixes = Prefixes;
      this.all = all1;
    }

    Supports.prototype.prefixer = function() {
      var browsers, filtered;
      if (this.prefixerCache) {
        return this.prefixerCache;
      }
      filtered = this.all.browsers.selected.filter((function(_this) {
        return function(i) {
          return supported.indexOf(i) !== -1;
        };
      })(this));
      browsers = new Browsers(this.all.browsers.data, filtered, this.all.options);
      return this.prefixerCache = new this.Prefixes(this.all.data, browsers, this.all.options);
    };

    Supports.prototype.parse = function(str) {
      var prop, ref1, value;
      ref1 = str.split(':'), prop = ref1[0], value = ref1[1];
      value || (value = '');
      return [prop.trim(), value.trim()];
    };

    Supports.prototype.virtual = function(str) {
      var prop, ref1, rule, value;
      ref1 = this.parse(str), prop = ref1[0], value = ref1[1];
      rule = postcss.parse('a{}').first;
      rule.append({
        prop: prop,
        value: value,
        raws: {
          before: ''
        }
      });
      return rule;
    };

    Supports.prototype.prefixed = function(str) {
      var decl, j, k, len, len1, prefixer, prop, ref1, ref2, rule, value;
      rule = this.virtual(str);
      prop = rule.first.prop;
      prefixer = this.prefixer().add[prop];
      if (prefixer != null) {
        if (typeof prefixer.process === "function") {
          prefixer.process(rule.first);
        }
      }
      ref1 = rule.nodes;
      for (j = 0, len = ref1.length; j < len; j++) {
        decl = ref1[j];
        ref2 = this.prefixer().values('add', prop);
        for (k = 0, len1 = ref2.length; k < len1; k++) {
          value = ref2[k];
          value.process(decl);
        }
        Value.save(this.all, decl);
      }
      return rule.nodes;
    };

    Supports.prototype.isNot = function(node) {
      return typeof node === 'string' && /not\s*/i.test(node);
    };

    Supports.prototype.isOr = function(node) {
      return typeof node === 'string' && /\s*or\s*/i.test(node);
    };

    Supports.prototype.isProp = function(node) {
      return typeof node === 'object' && node.length === 1 && typeof node[0] === 'string';
    };

    Supports.prototype.isHack = function(all, unprefixed) {
      var check;
      check = new RegExp('(\\(|\\s)' + utils.escapeRegexp(unprefixed) + ':');
      return !check.test(all);
    };

    Supports.prototype.toRemove = function(str, all) {
      var checker, j, len, prop, ref1, ref2, ref3, unprefixed, value;
      ref1 = this.parse(str), prop = ref1[0], value = ref1[1];
      unprefixed = this.all.unprefixed(prop);
      if (((ref2 = this.all.cleaner().remove[prop]) != null ? ref2.remove : void 0) && !this.isHack(all, unprefixed)) {
        return true;
      }
      ref3 = this.all.cleaner().values('remove', unprefixed);
      for (j = 0, len = ref3.length; j < len; j++) {
        checker = ref3[j];
        if (checker.check(value)) {
          return true;
        }
      }
      return false;
    };

    Supports.prototype.remove = function(nodes, all) {
      var i;
      i = 0;
      while (i < nodes.length) {
        if (!this.isNot(nodes[i - 1]) && this.isProp(nodes[i]) && this.isOr(nodes[i + 1])) {
          if (this.toRemove(nodes[i][0], all)) {
            nodes.splice(i, 2);
          } else {
            i += 2;
          }
        } else {
          if (typeof nodes[i] === 'object') {
            nodes[i] = this.remove(nodes[i], all);
          }
          i += 1;
        }
      }
      return nodes;
    };

    Supports.prototype.cleanBrackets = function(nodes) {
      return nodes.map((function(_this) {
        return function(i) {
          if (typeof i === 'object') {
            if (i.length === 1 && typeof i[0] === 'object') {
              return _this.cleanBrackets(i[0]);
            } else {
              return _this.cleanBrackets(i);
            }
          } else {
            return i;
          }
        };
      })(this));
    };

    Supports.prototype.convert = function(progress) {
      var i, j, len, result;
      result = [''];
      for (j = 0, len = progress.length; j < len; j++) {
        i = progress[j];
        result.push([i.prop + ": " + i.value]);
        result.push(' or ');
      }
      result[result.length - 1] = '';
      return result;
    };

    Supports.prototype.normalize = function(nodes) {
      if (typeof nodes === 'object') {
        nodes = nodes.filter(function(i) {
          return i !== '';
        });
        if (typeof nodes[0] === 'string' && nodes[0].indexOf(':') !== -1) {
          return [brackets.stringify(nodes)];
        } else {
          return nodes.map((function(_this) {
            return function(i) {
              return _this.normalize(i);
            };
          })(this));
        }
      } else {
        return nodes;
      }
    };

    Supports.prototype.add = function(nodes, all) {
      return nodes.map((function(_this) {
        return function(i) {
          var prefixed;
          if (_this.isProp(i)) {
            prefixed = _this.prefixed(i[0]);
            if (prefixed.length > 1) {
              return _this.convert(prefixed);
            } else {
              return i;
            }
          } else if (typeof i === 'object') {
            return _this.add(i, all);
          } else {
            return i;
          }
        };
      })(this));
    };

    Supports.prototype.process = function(rule) {
      var ast;
      ast = brackets.parse(rule.params);
      ast = this.normalize(ast);
      ast = this.remove(ast, rule.params);
      ast = this.add(ast, rule.params);
      ast = this.cleanBrackets(ast);
      return rule.params = brackets.stringify(ast);
    };

    return Supports;

  })();

  module.exports = Supports;

}).call(commonjsGlobal);
});

var supports$1 = interopDefault(supports);


var require$$46 = Object.freeze({
  default: supports$1
});

var oldSelector = createCommonjsModule(function (module) {
(function() {
  var OldSelector;

  OldSelector = (function() {
    function OldSelector(selector, prefix1) {
      var i, len, prefix, ref;
      this.prefix = prefix1;
      this.prefixed = selector.prefixed(this.prefix);
      this.regexp = selector.regexp(this.prefix);
      this.prefixeds = [];
      ref = selector.possible();
      for (i = 0, len = ref.length; i < len; i++) {
        prefix = ref[i];
        this.prefixeds.push([selector.prefixed(prefix), selector.regexp(prefix)]);
      }
      this.unprefixed = selector.name;
      this.nameRegexp = selector.regexp();
    }

    OldSelector.prototype.isHack = function(rule) {
      var before, i, index, len, ref, ref1, regexp, rules, some, string;
      index = rule.parent.index(rule) + 1;
      rules = rule.parent.nodes;
      while (index < rules.length) {
        before = rules[index].selector;
        if (!before) {
          return true;
        }
        if (before.indexOf(this.unprefixed) !== -1 && before.match(this.nameRegexp)) {
          return false;
        }
        some = false;
        ref = this.prefixeds;
        for (i = 0, len = ref.length; i < len; i++) {
          ref1 = ref[i], string = ref1[0], regexp = ref1[1];
          if (before.indexOf(string) !== -1 && before.match(regexp)) {
            some = true;
            break;
          }
        }
        if (!some) {
          return true;
        }
        index += 1;
      }
      return true;
    };

    OldSelector.prototype.check = function(rule) {
      if (rule.selector.indexOf(this.prefixed) === -1) {
        return false;
      }
      if (!rule.selector.match(this.regexp)) {
        return false;
      }
      if (this.isHack(rule)) {
        return false;
      }
      return true;
    };

    return OldSelector;

  })();

  module.exports = OldSelector;

}).call(commonjsGlobal);
});

var oldSelector$1 = interopDefault(oldSelector);


var require$$3$2 = Object.freeze({
  default: oldSelector$1
});

var selector = createCommonjsModule(function (module) {
(function() {
  var Browsers, OldSelector, Prefixer, Selector, utils,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  OldSelector = interopDefault(require$$3$2);

  Prefixer = interopDefault(require$$0$7);

  Browsers = interopDefault(require$$1$3);

  utils = interopDefault(require$$0$4);

  Selector = (function(superClass) {
    extend(Selector, superClass);

    function Selector(name1, prefixes, all) {
      this.name = name1;
      this.prefixes = prefixes;
      this.all = all;
      this.regexpCache = {};
    }

    Selector.prototype.check = function(rule) {
      if (rule.selector.indexOf(this.name) !== -1) {
        return !!rule.selector.match(this.regexp());
      } else {
        return false;
      }
    };

    Selector.prototype.prefixed = function(prefix) {
      return this.name.replace(/^([^\w]*)/, '$1' + prefix);
    };

    Selector.prototype.regexp = function(prefix) {
      var name;
      if (this.regexpCache[prefix]) {
        return this.regexpCache[prefix];
      }
      name = prefix ? this.prefixed(prefix) : this.name;
      return this.regexpCache[prefix] = RegExp("(^|[^:\"'=])" + (utils.escapeRegexp(name)), "gi");
    };

    Selector.prototype.possible = function() {
      return Browsers.prefixes();
    };

    Selector.prototype.prefixeds = function(rule) {
      var i, len, prefix, prefixeds, ref;
      if (rule._autoprefixerPrefixeds) {
        return rule._autoprefixerPrefixeds;
      }
      prefixeds = {};
      ref = this.possible();
      for (i = 0, len = ref.length; i < len; i++) {
        prefix = ref[i];
        prefixeds[prefix] = this.replace(rule.selector, prefix);
      }
      return rule._autoprefixerPrefixeds = prefixeds;
    };

    Selector.prototype.already = function(rule, prefixeds, prefix) {
      var before, index, key, prefixed, some;
      index = rule.parent.index(rule) - 1;
      while (index >= 0) {
        before = rule.parent.nodes[index];
        if (before.type !== 'rule') {
          return false;
        }
        some = false;
        for (key in prefixeds) {
          prefixed = prefixeds[key];
          if (before.selector === prefixed) {
            if (prefix === key) {
              return true;
            } else {
              some = true;
              break;
            }
          }
        }
        if (!some) {
          return false;
        }
        index -= 1;
      }
      return false;
    };

    Selector.prototype.replace = function(selector, prefix) {
      return selector.replace(this.regexp(), '$1' + this.prefixed(prefix));
    };

    Selector.prototype.add = function(rule, prefix) {
      var cloned, prefixeds;
      prefixeds = this.prefixeds(rule);
      if (this.already(rule, prefixeds, prefix)) {
        return;
      }
      cloned = this.clone(rule, {
        selector: prefixeds[prefix]
      });
      return rule.parent.insertBefore(rule, cloned);
    };

    Selector.prototype.old = function(prefix) {
      return new OldSelector(this, prefix);
    };

    return Selector;

  })(Prefixer);

  module.exports = Selector;

}).call(commonjsGlobal);
});

var selector$1 = interopDefault(selector);


var require$$0$12 = Object.freeze({
  default: selector$1
});

var atRule = createCommonjsModule(function (module) {
(function() {
  var AtRule, Prefixer,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Prefixer = interopDefault(require$$0$7);

  AtRule = (function(superClass) {
    extend(AtRule, superClass);

    function AtRule() {
      return AtRule.__super__.constructor.apply(this, arguments);
    }

    AtRule.prototype.add = function(rule, prefix) {
      var already, cloned, prefixed;
      prefixed = prefix + rule.name;
      already = rule.parent.some(function(i) {
        return i.name === prefixed && i.params === rule.params;
      });
      if (already) {
        return;
      }
      cloned = this.clone(rule, {
        name: prefixed
      });
      return rule.parent.insertBefore(rule, cloned);
    };

    AtRule.prototype.process = function(node) {
      var j, len, parent, prefix, ref, results;
      parent = this.parentPrefix(node);
      ref = this.prefixes;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        prefix = ref[j];
        if (parent && parent !== prefix) {
          continue;
        }
        results.push(this.add(node, prefix));
      }
      return results;
    };

    return AtRule;

  })(Prefixer);

  module.exports = AtRule;

}).call(commonjsGlobal);
});

var atRule$1 = interopDefault(atRule);


var require$$43 = Object.freeze({
  default: atRule$1
});

var fullscreen = createCommonjsModule(function (module) {
(function() {
  var Fullscreen, Selector,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Selector = interopDefault(require$$0$12);

  Fullscreen = (function(superClass) {
    extend(Fullscreen, superClass);

    function Fullscreen() {
      return Fullscreen.__super__.constructor.apply(this, arguments);
    }

    Fullscreen.names = [':fullscreen'];

    Fullscreen.prototype.prefixed = function(prefix) {
      if ('-webkit-' === prefix) {
        return ':-webkit-full-screen';
      } else if ('-moz-' === prefix) {
        return ':-moz-full-screen';
      } else {
        return ":" + prefix + "fullscreen";
      }
    };

    return Fullscreen;

  })(Selector);

  module.exports = Fullscreen;

}).call(commonjsGlobal);
});

var fullscreen$1 = interopDefault(fullscreen);


var require$$39 = Object.freeze({
  default: fullscreen$1
});

var placeholder = createCommonjsModule(function (module) {
(function() {
  var Placeholder, Selector,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Selector = interopDefault(require$$0$12);

  Placeholder = (function(superClass) {
    extend(Placeholder, superClass);

    function Placeholder() {
      return Placeholder.__super__.constructor.apply(this, arguments);
    }

    Placeholder.names = [':placeholder-shown', '::placeholder'];

    Placeholder.prototype.possible = function() {
      return Placeholder.__super__.possible.apply(this, arguments).concat('-moz- old');
    };

    Placeholder.prototype.prefixed = function(prefix) {
      if ('-webkit-' === prefix) {
        return '::-webkit-input-placeholder';
      } else if ('-ms-' === prefix) {
        return ':-ms-input-placeholder';
      } else if ('-moz- old' === prefix) {
        return ':-moz-placeholder';
      } else {
        return "::" + prefix + "placeholder";
      }
    };

    return Placeholder;

  })(Selector);

  module.exports = Placeholder;

}).call(commonjsGlobal);
});

var placeholder$1 = interopDefault(placeholder);


var require$$38 = Object.freeze({
  default: placeholder$1
});

var flexSpec = createCommonjsModule(function (module) {
(function() {
  module.exports = function(prefix) {
    var spec;
    spec = prefix === '-webkit- 2009' || prefix === '-moz-' ? 2009 : prefix === '-ms-' ? 2012 : prefix === '-webkit-' ? 'final' : void 0;
    if (prefix === '-webkit- 2009') {
      prefix = '-webkit-';
    }
    return [spec, prefix];
  };

}).call(commonjsGlobal);
});

var flexSpec$1 = interopDefault(flexSpec);


var require$$2$3 = Object.freeze({
  default: flexSpec$1
});

var flex = createCommonjsModule(function (module) {
(function() {
  var Declaration, Flex, flexSpec, list,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  flexSpec = interopDefault(require$$2$3);

  Declaration = interopDefault(require$$0$6);

  list = interopDefault(require$$0$5);

  Flex = (function(superClass) {
    extend(Flex, superClass);

    function Flex() {
      return Flex.__super__.constructor.apply(this, arguments);
    }

    Flex.names = ['flex', 'box-flex'];

    Flex.oldValues = {
      'auto': '1',
      'none': '0'
    };

    Flex.prototype.prefixed = function(prop, prefix) {
      var ref, spec;
      ref = flexSpec(prefix), spec = ref[0], prefix = ref[1];
      if (spec === 2009) {
        return prefix + 'box-flex';
      } else {
        return Flex.__super__.prefixed.apply(this, arguments);
      }
    };

    Flex.prototype.normalize = function() {
      return 'flex';
    };

    Flex.prototype.set = function(decl, prefix) {
      var spec;
      spec = flexSpec(prefix)[0];
      if (spec === 2009) {
        decl.value = list.space(decl.value)[0];
        decl.value = Flex.oldValues[decl.value] || decl.value;
        return Flex.__super__.set.call(this, decl, prefix);
      } else {
        return Flex.__super__.set.apply(this, arguments);
      }
    };

    return Flex;

  })(Declaration);

  module.exports = Flex;

}).call(commonjsGlobal);
});

var flex$1 = interopDefault(flex);


var require$$37 = Object.freeze({
  default: flex$1
});

var order = createCommonjsModule(function (module) {
(function() {
  var Declaration, Order, flexSpec,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  flexSpec = interopDefault(require$$2$3);

  Declaration = interopDefault(require$$0$6);

  Order = (function(superClass) {
    extend(Order, superClass);

    function Order() {
      return Order.__super__.constructor.apply(this, arguments);
    }

    Order.names = ['order', 'flex-order', 'box-ordinal-group'];

    Order.prototype.prefixed = function(prop, prefix) {
      var ref, spec;
      ref = flexSpec(prefix), spec = ref[0], prefix = ref[1];
      if (spec === 2009) {
        return prefix + 'box-ordinal-group';
      } else if (spec === 2012) {
        return prefix + 'flex-order';
      } else {
        return Order.__super__.prefixed.apply(this, arguments);
      }
    };

    Order.prototype.normalize = function(prop) {
      return 'order';
    };

    Order.prototype.set = function(decl, prefix) {
      var spec;
      spec = flexSpec(prefix)[0];
      if (spec === 2009) {
        decl.value = (parseInt(decl.value) + 1).toString();
        return Order.__super__.set.call(this, decl, prefix);
      } else {
        return Order.__super__.set.apply(this, arguments);
      }
    };

    return Order;

  })(Declaration);

  module.exports = Order;

}).call(commonjsGlobal);
});

var order$1 = interopDefault(order);


var require$$36 = Object.freeze({
  default: order$1
});

var filter = createCommonjsModule(function (module) {
(function() {
  var Declaration, Filter,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Declaration = interopDefault(require$$0$6);

  Filter = (function(superClass) {
    extend(Filter, superClass);

    function Filter() {
      return Filter.__super__.constructor.apply(this, arguments);
    }

    Filter.names = ['filter'];

    Filter.prototype.check = function(decl) {
      var v;
      v = decl.value;
      return v.toLowerCase().indexOf('alpha(') === -1 && v.indexOf('DXImageTransform.Microsoft') === -1 && v.indexOf('data:image/svg+xml') === -1;
    };

    return Filter;

  })(Declaration);

  module.exports = Filter;

}).call(commonjsGlobal);
});

var filter$1 = interopDefault(filter);


var require$$35 = Object.freeze({
  default: filter$1
});

var gridEnd = createCommonjsModule(function (module) {
(function() {
  var Declaration, GridEnd,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Declaration = interopDefault(require$$0$6);

  GridEnd = (function(superClass) {
    extend(GridEnd, superClass);

    function GridEnd() {
      return GridEnd.__super__.constructor.apply(this, arguments);
    }

    GridEnd.names = ['grid-row-end', 'grid-column-end', 'grid-row-span', 'grid-column-span'];

    GridEnd.prototype.check = function(decl) {
      return decl.value.indexOf('span') !== -1;
    };

    GridEnd.prototype.normalize = function(prop) {
      return prop.replace(/(-span|-end)/, '');
    };

    GridEnd.prototype.prefixed = function(prop, prefix) {
      if (prefix === '-ms-') {
        return prefix + prop.replace('-end', '-span');
      } else {
        return GridEnd.__super__.prefixed.call(this, prop, prefix);
      }
    };

    GridEnd.prototype.set = function(decl, prefix) {
      if (prefix === '-ms-') {
        decl.value = decl.value.replace(/span\s/i, '');
      }
      return GridEnd.__super__.set.call(this, decl, prefix);
    };

    return GridEnd;

  })(Declaration);

  module.exports = GridEnd;

}).call(commonjsGlobal);
});

var gridEnd$1 = interopDefault(gridEnd);


var require$$34 = Object.freeze({
  default: gridEnd$1
});

var flexFlow = createCommonjsModule(function (module) {
(function() {
  var Declaration, FlexFlow, flexSpec,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  flexSpec = interopDefault(require$$2$3);

  Declaration = interopDefault(require$$0$6);

  FlexFlow = (function(superClass) {
    extend(FlexFlow, superClass);

    function FlexFlow() {
      return FlexFlow.__super__.constructor.apply(this, arguments);
    }

    FlexFlow.names = ['flex-flow'];

    FlexFlow.prototype.set = function(decl, prefix) {
      var ref, spec;
      ref = flexSpec(prefix), spec = ref[0], prefix = ref[1];
      if (spec === 2012) {
        return FlexFlow.__super__.set.apply(this, arguments);
      } else if (spec === 'final') {
        return FlexFlow.__super__.set.apply(this, arguments);
      }
    };

    return FlexFlow;

  })(Declaration);

  module.exports = FlexFlow;

}).call(commonjsGlobal);
});

var flexFlow$1 = interopDefault(flexFlow);


var require$$33 = Object.freeze({
  default: flexFlow$1
});

var flexGrow = createCommonjsModule(function (module) {
(function() {
  var Declaration, Flex, flexSpec,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  flexSpec = interopDefault(require$$2$3);

  Declaration = interopDefault(require$$0$6);

  Flex = (function(superClass) {
    extend(Flex, superClass);

    function Flex() {
      return Flex.__super__.constructor.apply(this, arguments);
    }

    Flex.names = ['flex-grow', 'flex-positive'];

    Flex.prototype.normalize = function() {
      return 'flex';
    };

    Flex.prototype.prefixed = function(prop, prefix) {
      var ref, spec;
      ref = flexSpec(prefix), spec = ref[0], prefix = ref[1];
      if (spec === 2009) {
        return prefix + 'box-flex';
      } else if (spec === 2012) {
        return prefix + 'flex-positive';
      } else {
        return Flex.__super__.prefixed.apply(this, arguments);
      }
    };

    return Flex;

  })(Declaration);

  module.exports = Flex;

}).call(commonjsGlobal);
});

var flexGrow$1 = interopDefault(flexGrow);


var require$$32 = Object.freeze({
  default: flexGrow$1
});

var flexWrap = createCommonjsModule(function (module) {
(function() {
  var Declaration, FlexWrap, flexSpec,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  flexSpec = interopDefault(require$$2$3);

  Declaration = interopDefault(require$$0$6);

  FlexWrap = (function(superClass) {
    extend(FlexWrap, superClass);

    function FlexWrap() {
      return FlexWrap.__super__.constructor.apply(this, arguments);
    }

    FlexWrap.names = ['flex-wrap'];

    FlexWrap.prototype.set = function(decl, prefix) {
      var spec;
      spec = flexSpec(prefix)[0];
      if (spec !== 2009) {
        return FlexWrap.__super__.set.apply(this, arguments);
      }
    };

    return FlexWrap;

  })(Declaration);

  module.exports = FlexWrap;

}).call(commonjsGlobal);
});

var flexWrap$1 = interopDefault(flexWrap);


var require$$31 = Object.freeze({
  default: flexWrap$1
});

var gridStart = createCommonjsModule(function (module) {
(function() {
  var Declaration, GridStart,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Declaration = interopDefault(require$$0$6);

  GridStart = (function(superClass) {
    extend(GridStart, superClass);

    function GridStart() {
      return GridStart.__super__.constructor.apply(this, arguments);
    }

    GridStart.names = ['grid-row-start', 'grid-column-start', 'grid-row', 'grid-column'];

    GridStart.prototype.check = function(decl) {
      return decl.value.indexOf('/') === -1 || decl.value.indexOf('span') !== -1;
    };

    GridStart.prototype.normalize = function(prop) {
      return prop.replace('-start', '');
    };

    GridStart.prototype.prefixed = function(prop, prefix) {
      if (prefix === '-ms-') {
        return prefix + prop.replace('-start', '');
      } else {
        return GridStart.__super__.prefixed.call(this, prop, prefix);
      }
    };

    GridStart.prototype.insert = function(decl, prefix, prefixes) {
      var parts;
      parts = this.splitValue(decl, prefix);
      if (parts.length === 2) {
        decl.cloneBefore({
          prop: '-ms-' + decl.prop + '-span',
          value: parts[1]
        });
      }
      return GridStart.__super__.insert.call(this, decl, prefix, prefixes);
    };

    GridStart.prototype.set = function(decl, prefix) {
      var parts;
      parts = this.splitValue(decl, prefix);
      if (parts.length === 2) {
        decl.value = parts[0];
      }
      return GridStart.__super__.set.call(this, decl, prefix);
    };

    GridStart.prototype.splitValue = function(decl, prefix) {
      var parts;
      if (prefix === '-ms-' && decl.prop.indexOf('-start') === -1) {
        parts = decl.value.split(/\s*\/\s*span\s+/);
        if (parts.length === 2) {
          return parts;
        }
      }
      return false;
    };

    return GridStart;

  })(Declaration);

  module.exports = GridStart;

}).call(commonjsGlobal);
});

var gridStart$1 = interopDefault(gridStart);


var require$$30 = Object.freeze({
  default: gridStart$1
});

var alignSelf = createCommonjsModule(function (module) {
(function() {
  var AlignSelf, Declaration, flexSpec,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  flexSpec = interopDefault(require$$2$3);

  Declaration = interopDefault(require$$0$6);

  AlignSelf = (function(superClass) {
    extend(AlignSelf, superClass);

    function AlignSelf() {
      return AlignSelf.__super__.constructor.apply(this, arguments);
    }

    AlignSelf.names = ['align-self', 'flex-item-align'];

    AlignSelf.oldValues = {
      'flex-end': 'end',
      'flex-start': 'start'
    };

    AlignSelf.prototype.prefixed = function(prop, prefix) {
      var ref, spec;
      ref = flexSpec(prefix), spec = ref[0], prefix = ref[1];
      if (spec === 2012) {
        return prefix + 'flex-item-align';
      } else {
        return AlignSelf.__super__.prefixed.apply(this, arguments);
      }
    };

    AlignSelf.prototype.normalize = function(prop) {
      return 'align-self';
    };

    AlignSelf.prototype.set = function(decl, prefix) {
      var spec;
      spec = flexSpec(prefix)[0];
      if (spec === 2012) {
        decl.value = AlignSelf.oldValues[decl.value] || decl.value;
        return AlignSelf.__super__.set.call(this, decl, prefix);
      } else if (spec === 'final') {
        return AlignSelf.__super__.set.apply(this, arguments);
      }
    };

    return AlignSelf;

  })(Declaration);

  module.exports = AlignSelf;

}).call(commonjsGlobal);
});

var alignSelf$1 = interopDefault(alignSelf);


var require$$29 = Object.freeze({
  default: alignSelf$1
});

var flexBasis = createCommonjsModule(function (module) {
(function() {
  var Declaration, FlexBasis, flexSpec,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  flexSpec = interopDefault(require$$2$3);

  Declaration = interopDefault(require$$0$6);

  FlexBasis = (function(superClass) {
    extend(FlexBasis, superClass);

    function FlexBasis() {
      return FlexBasis.__super__.constructor.apply(this, arguments);
    }

    FlexBasis.names = ['flex-basis', 'flex-preferred-size'];

    FlexBasis.prototype.normalize = function() {
      return 'flex-basis';
    };

    FlexBasis.prototype.prefixed = function(prop, prefix) {
      var ref, spec;
      ref = flexSpec(prefix), spec = ref[0], prefix = ref[1];
      if (spec === 2012) {
        return prefix + 'flex-preferred-size';
      } else {
        return FlexBasis.__super__.prefixed.apply(this, arguments);
      }
    };

    FlexBasis.prototype.set = function(decl, prefix) {
      var ref, spec;
      ref = flexSpec(prefix), spec = ref[0], prefix = ref[1];
      if (spec === 2012 || spec === 'final') {
        return FlexBasis.__super__.set.apply(this, arguments);
      }
    };

    return FlexBasis;

  })(Declaration);

  module.exports = FlexBasis;

}).call(commonjsGlobal);
});

var flexBasis$1 = interopDefault(flexBasis);


var require$$28 = Object.freeze({
  default: flexBasis$1
});

var maskBorder = createCommonjsModule(function (module) {
(function() {
  var Declaration, MaskBorder,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Declaration = interopDefault(require$$0$6);

  MaskBorder = (function(superClass) {
    extend(MaskBorder, superClass);

    function MaskBorder() {
      return MaskBorder.__super__.constructor.apply(this, arguments);
    }

    MaskBorder.names = ['mask-border', 'mask-border-source', 'mask-border-slice', 'mask-border-width', 'mask-border-outset', 'mask-border-repeat', 'mask-box-image', 'mask-box-image-source', 'mask-box-image-slice', 'mask-box-image-width', 'mask-box-image-outset', 'mask-box-image-repeat'];

    MaskBorder.prototype.normalize = function() {
      return this.name.replace('box-image', 'border');
    };

    MaskBorder.prototype.prefixed = function(prop, prefix) {
      if (prefix === '-webkit-') {
        return MaskBorder.__super__.prefixed.apply(this, arguments).replace('border', 'box-image');
      } else {
        return MaskBorder.__super__.prefixed.apply(this, arguments);
      }
    };

    return MaskBorder;

  })(Declaration);

  module.exports = MaskBorder;

}).call(commonjsGlobal);
});

var maskBorder$1 = interopDefault(maskBorder);


var require$$27 = Object.freeze({
  default: maskBorder$1
});

var alignItems = createCommonjsModule(function (module) {
(function() {
  var AlignItems, Declaration, flexSpec,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  flexSpec = interopDefault(require$$2$3);

  Declaration = interopDefault(require$$0$6);

  AlignItems = (function(superClass) {
    extend(AlignItems, superClass);

    function AlignItems() {
      return AlignItems.__super__.constructor.apply(this, arguments);
    }

    AlignItems.names = ['align-items', 'flex-align', 'box-align'];

    AlignItems.oldValues = {
      'flex-end': 'end',
      'flex-start': 'start'
    };

    AlignItems.prototype.prefixed = function(prop, prefix) {
      var ref, spec;
      ref = flexSpec(prefix), spec = ref[0], prefix = ref[1];
      if (spec === 2009) {
        return prefix + 'box-align';
      } else if (spec === 2012) {
        return prefix + 'flex-align';
      } else {
        return AlignItems.__super__.prefixed.apply(this, arguments);
      }
    };

    AlignItems.prototype.normalize = function(prop) {
      return 'align-items';
    };

    AlignItems.prototype.set = function(decl, prefix) {
      var spec;
      spec = flexSpec(prefix)[0];
      if (spec === 2009 || spec === 2012) {
        decl.value = AlignItems.oldValues[decl.value] || decl.value;
        return AlignItems.__super__.set.call(this, decl, prefix);
      } else {
        return AlignItems.__super__.set.apply(this, arguments);
      }
    };

    return AlignItems;

  })(Declaration);

  module.exports = AlignItems;

}).call(commonjsGlobal);
});

var alignItems$1 = interopDefault(alignItems);


var require$$26 = Object.freeze({
  default: alignItems$1
});

var flexShrink = createCommonjsModule(function (module) {
(function() {
  var Declaration, FlexShrink, flexSpec,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  flexSpec = interopDefault(require$$2$3);

  Declaration = interopDefault(require$$0$6);

  FlexShrink = (function(superClass) {
    extend(FlexShrink, superClass);

    function FlexShrink() {
      return FlexShrink.__super__.constructor.apply(this, arguments);
    }

    FlexShrink.names = ['flex-shrink', 'flex-negative'];

    FlexShrink.prototype.normalize = function() {
      return 'flex-shrink';
    };

    FlexShrink.prototype.prefixed = function(prop, prefix) {
      var ref, spec;
      ref = flexSpec(prefix), spec = ref[0], prefix = ref[1];
      if (spec === 2012) {
        return prefix + 'flex-negative';
      } else {
        return FlexShrink.__super__.prefixed.apply(this, arguments);
      }
    };

    FlexShrink.prototype.set = function(decl, prefix) {
      var ref, spec;
      ref = flexSpec(prefix), spec = ref[0], prefix = ref[1];
      if (spec === 2012 || spec === 'final') {
        return FlexShrink.__super__.set.apply(this, arguments);
      }
    };

    return FlexShrink;

  })(Declaration);

  module.exports = FlexShrink;

}).call(commonjsGlobal);
});

var flexShrink$1 = interopDefault(flexShrink);


var require$$25 = Object.freeze({
  default: flexShrink$1
});

var breakProps = createCommonjsModule(function (module) {
(function() {
  var BreakProps, Declaration,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Declaration = interopDefault(require$$0$6);

  BreakProps = (function(superClass) {
    extend(BreakProps, superClass);

    function BreakProps() {
      return BreakProps.__super__.constructor.apply(this, arguments);
    }

    BreakProps.names = ['break-inside', 'page-break-inside', 'column-break-inside', 'break-before', 'page-break-before', 'column-break-before', 'break-after', 'page-break-after', 'column-break-after'];

    BreakProps.prototype.prefixed = function(prop, prefix) {
      if (prefix === '-webkit-') {
        return '-webkit-column-' + prop;
      } else if (prefix === '-moz-') {
        return 'page-' + prop;
      } else {
        return BreakProps.__super__.prefixed.apply(this, arguments);
      }
    };

    BreakProps.prototype.normalize = function(prop) {
      if (prop.indexOf('inside') !== -1) {
        return 'break-inside';
      } else if (prop.indexOf('before') !== -1) {
        return 'break-before';
      } else if (prop.indexOf('after') !== -1) {
        return 'break-after';
      }
    };

    BreakProps.prototype.set = function(decl, prefix) {
      var v;
      v = decl.value;
      if (decl.prop === 'break-inside' && v === 'avoid-column' || v === 'avoid-page') {
        decl.value = 'avoid';
      }
      return BreakProps.__super__.set.apply(this, arguments);
    };

    BreakProps.prototype.insert = function(decl, prefix, prefixes) {
      if (decl.prop !== 'break-inside') {
        return BreakProps.__super__.insert.apply(this, arguments);
      } else if (decl.value === 'avoid-region') {

      } else if (decl.value === 'avoid-page' && prefix === '-webkit-') {

      } else {
        return BreakProps.__super__.insert.apply(this, arguments);
      }
    };

    return BreakProps;

  })(Declaration);

  module.exports = BreakProps;

}).call(commonjsGlobal);
});

var breakProps$1 = interopDefault(breakProps);


var require$$24 = Object.freeze({
  default: breakProps$1
});

var writingMode = createCommonjsModule(function (module) {
(function() {
  var Declaration, WritingMode,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Declaration = interopDefault(require$$0$6);

  WritingMode = (function(superClass) {
    extend(WritingMode, superClass);

    function WritingMode() {
      return WritingMode.__super__.constructor.apply(this, arguments);
    }

    WritingMode.names = ['writing-mode'];

    WritingMode.msValues = {
      'horizontal-tb': 'lr-tb',
      'vertical-rl': 'tb-rl',
      'vertical-lr': 'tb-lr'
    };

    WritingMode.prototype.set = function(decl, prefix) {
      if (prefix === '-ms-') {
        decl.value = WritingMode.msValues[decl.value] || decl.value;
        return WritingMode.__super__.set.call(this, decl, prefix);
      } else {
        return WritingMode.__super__.set.apply(this, arguments);
      }
    };

    return WritingMode;

  })(Declaration);

  module.exports = WritingMode;

}).call(commonjsGlobal);
});

var writingMode$1 = interopDefault(writingMode);


var require$$23 = Object.freeze({
  default: writingMode$1
});

var borderImage = createCommonjsModule(function (module) {
(function() {
  var BorderImage, Declaration,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Declaration = interopDefault(require$$0$6);

  BorderImage = (function(superClass) {
    extend(BorderImage, superClass);

    function BorderImage() {
      return BorderImage.__super__.constructor.apply(this, arguments);
    }

    BorderImage.names = ['border-image'];

    BorderImage.prototype.set = function(decl, prefix) {
      decl.value = decl.value.replace(/\s+fill(\s)/, '$1');
      return BorderImage.__super__.set.call(this, decl, prefix);
    };

    return BorderImage;

  })(Declaration);

  module.exports = BorderImage;

}).call(commonjsGlobal);
});

var borderImage$1 = interopDefault(borderImage);


var require$$22 = Object.freeze({
  default: borderImage$1
});

var justifyItems = createCommonjsModule(function (module) {
(function() {
  var Declaration, JustifyItems,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Declaration = interopDefault(require$$0$6);

  JustifyItems = (function(superClass) {
    extend(JustifyItems, superClass);

    function JustifyItems() {
      return JustifyItems.__super__.constructor.apply(this, arguments);
    }

    JustifyItems.names = ['justify-items', 'grid-column-align'];

    JustifyItems.prototype.prefixed = function(prop, prefix) {
      return prefix + (prefix === '-ms-' ? 'grid-column-align' : prop);
    };

    JustifyItems.prototype.normalize = function(prop) {
      return 'justify-items';
    };

    return JustifyItems;

  })(Declaration);

  module.exports = JustifyItems;

}).call(commonjsGlobal);
});

var justifyItems$1 = interopDefault(justifyItems);


var require$$21 = Object.freeze({
  default: justifyItems$1
});

var alignContent = createCommonjsModule(function (module) {
(function() {
  var AlignContent, Declaration, flexSpec,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  flexSpec = interopDefault(require$$2$3);

  Declaration = interopDefault(require$$0$6);

  AlignContent = (function(superClass) {
    extend(AlignContent, superClass);

    function AlignContent() {
      return AlignContent.__super__.constructor.apply(this, arguments);
    }

    AlignContent.names = ['align-content', 'flex-line-pack'];

    AlignContent.oldValues = {
      'flex-end': 'end',
      'flex-start': 'start',
      'space-between': 'justify',
      'space-around': 'distribute'
    };

    AlignContent.prototype.prefixed = function(prop, prefix) {
      var ref, spec;
      ref = flexSpec(prefix), spec = ref[0], prefix = ref[1];
      if (spec === 2012) {
        return prefix + 'flex-line-pack';
      } else {
        return AlignContent.__super__.prefixed.apply(this, arguments);
      }
    };

    AlignContent.prototype.normalize = function(prop) {
      return 'align-content';
    };

    AlignContent.prototype.set = function(decl, prefix) {
      var spec;
      spec = flexSpec(prefix)[0];
      if (spec === 2012) {
        decl.value = AlignContent.oldValues[decl.value] || decl.value;
        return AlignContent.__super__.set.call(this, decl, prefix);
      } else if (spec === 'final') {
        return AlignContent.__super__.set.apply(this, arguments);
      }
    };

    return AlignContent;

  })(Declaration);

  module.exports = AlignContent;

}).call(commonjsGlobal);
});

var alignContent$1 = interopDefault(alignContent);


var require$$20 = Object.freeze({
  default: alignContent$1
});

var borderRadius = createCommonjsModule(function (module) {
(function() {
  var BorderRadius, Declaration,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Declaration = interopDefault(require$$0$6);

  BorderRadius = (function(superClass) {
    var hor, i, j, len, len1, mozilla, normal, ref, ref1, ver;

    extend(BorderRadius, superClass);

    function BorderRadius() {
      return BorderRadius.__super__.constructor.apply(this, arguments);
    }

    BorderRadius.names = ['border-radius'];

    BorderRadius.toMozilla = {};

    BorderRadius.toNormal = {};

    ref = ['top', 'bottom'];
    for (i = 0, len = ref.length; i < len; i++) {
      ver = ref[i];
      ref1 = ['left', 'right'];
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        hor = ref1[j];
        normal = "border-" + ver + "-" + hor + "-radius";
        mozilla = "border-radius-" + ver + hor;
        BorderRadius.names.push(normal);
        BorderRadius.names.push(mozilla);
        BorderRadius.toMozilla[normal] = mozilla;
        BorderRadius.toNormal[mozilla] = normal;
      }
    }

    BorderRadius.prototype.prefixed = function(prop, prefix) {
      if (prefix === '-moz-') {
        return prefix + (BorderRadius.toMozilla[prop] || prop);
      } else {
        return BorderRadius.__super__.prefixed.apply(this, arguments);
      }
    };

    BorderRadius.prototype.normalize = function(prop) {
      return BorderRadius.toNormal[prop] || prop;
    };

    return BorderRadius;

  })(Declaration);

  module.exports = BorderRadius;

}).call(commonjsGlobal);
});

var borderRadius$1 = interopDefault(borderRadius);


var require$$19 = Object.freeze({
  default: borderRadius$1
});

var blockLogical = createCommonjsModule(function (module) {
(function() {
  var BlockLogical, Declaration,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Declaration = interopDefault(require$$0$6);

  BlockLogical = (function(superClass) {
    extend(BlockLogical, superClass);

    function BlockLogical() {
      return BlockLogical.__super__.constructor.apply(this, arguments);
    }

    BlockLogical.names = ['border-block-start', 'border-block-end', 'margin-block-start', 'margin-block-end', 'padding-block-start', 'padding-block-end', 'border-before', 'border-after', 'margin-before', 'margin-after', 'padding-before', 'padding-after'];

    BlockLogical.prototype.prefixed = function(prop, prefix) {
      return prefix + (prop.indexOf('-start') !== -1 ? prop.replace('-block-start', '-before') : prop.replace('-block-end', '-after'));
    };

    BlockLogical.prototype.normalize = function(prop) {
      if (prop.indexOf('-before') !== -1) {
        return prop.replace('-before', '-block-start');
      } else {
        return prop.replace('-after', '-block-end');
      }
    };

    return BlockLogical;

  })(Declaration);

  module.exports = BlockLogical;

}).call(commonjsGlobal);
});

var blockLogical$1 = interopDefault(blockLogical);


var require$$18 = Object.freeze({
  default: blockLogical$1
});

var gridTemplate = createCommonjsModule(function (module) {
(function() {
  var Declaration, GridTemplate, parser,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  parser = interopDefault(require$$2);

  Declaration = interopDefault(require$$0$6);

  GridTemplate = (function(superClass) {
    extend(GridTemplate, superClass);

    function GridTemplate() {
      return GridTemplate.__super__.constructor.apply(this, arguments);
    }

    GridTemplate.names = ['grid-template-rows', 'grid-template-columns', 'grid-rows', 'grid-columns'];

    GridTemplate.prototype.prefixed = function(prop, prefix) {
      if (prefix === '-ms-') {
        return prefix + prop.replace('template-', '');
      } else {
        return GridTemplate.__super__.prefixed.call(this, prop, prefix);
      }
    };

    GridTemplate.prototype.normalize = function(prop) {
      return prop.replace(/^grid-(rows|columns)/, 'grid-template-$1');
    };

    GridTemplate.prototype.walkRepeat = function(node) {
      var count, first, fixed, i, j, len, ref;
      fixed = [];
      ref = node.nodes;
      for (j = 0, len = ref.length; j < len; j++) {
        i = ref[j];
        if (i.nodes) {
          this.walkRepeat(i);
        }
        fixed.push(i);
        if (i.type === 'function' && i.value === 'repeat') {
          first = i.nodes.shift();
          if (first) {
            count = first.value;
            i.nodes.shift();
            i.value = '';
            fixed.push({
              type: 'word',
              value: "[" + count + "]"
            });
          }
        }
      }
      return node.nodes = fixed;
    };

    GridTemplate.prototype.changeRepeat = function(value) {
      var ast;
      ast = parser(value);
      this.walkRepeat(ast);
      return ast.toString();
    };

    GridTemplate.prototype.set = function(decl, prefix) {
      if (prefix === '-ms-' && decl.value.indexOf('repeat(') !== -1) {
        decl.value = this.changeRepeat(decl.value);
      }
      return GridTemplate.__super__.set.call(this, decl, prefix);
    };

    return GridTemplate;

  })(Declaration);

  module.exports = GridTemplate;

}).call(commonjsGlobal);
});

var gridTemplate$1 = interopDefault(gridTemplate);


var require$$17 = Object.freeze({
  default: gridTemplate$1
});

var inlineLogical = createCommonjsModule(function (module) {
(function() {
  var Declaration, InlineLogical,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Declaration = interopDefault(require$$0$6);

  InlineLogical = (function(superClass) {
    extend(InlineLogical, superClass);

    function InlineLogical() {
      return InlineLogical.__super__.constructor.apply(this, arguments);
    }

    InlineLogical.names = ['border-inline-start', 'border-inline-end', 'margin-inline-start', 'margin-inline-end', 'padding-inline-start', 'padding-inline-end', 'border-start', 'border-end', 'margin-start', 'margin-end', 'padding-start', 'padding-end'];

    InlineLogical.prototype.prefixed = function(prop, prefix) {
      return prefix + prop.replace('-inline', '');
    };

    InlineLogical.prototype.normalize = function(prop) {
      return prop.replace(/(margin|padding|border)-(start|end)/, '$1-inline-$2');
    };

    return InlineLogical;

  })(Declaration);

  module.exports = InlineLogical;

}).call(commonjsGlobal);
});

var inlineLogical$1 = interopDefault(inlineLogical);


var require$$16 = Object.freeze({
  default: inlineLogical$1
});

var gridRowAlign = createCommonjsModule(function (module) {
(function() {
  var Declaration, GridRowAlign,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Declaration = interopDefault(require$$0$6);

  GridRowAlign = (function(superClass) {
    extend(GridRowAlign, superClass);

    function GridRowAlign() {
      return GridRowAlign.__super__.constructor.apply(this, arguments);
    }

    GridRowAlign.names = ['grid-row-align'];

    GridRowAlign.prototype.prefixed = function(prop, prefix) {
      return prefix + 'grid-row-align';
    };

    GridRowAlign.prototype.normalize = function(prop) {
      return 'align-items';
    };

    return GridRowAlign;

  })(Declaration);

  module.exports = GridRowAlign;

}).call(commonjsGlobal);
});

var gridRowAlign$1 = interopDefault(gridRowAlign);


var require$$15 = Object.freeze({
  default: gridRowAlign$1
});

var transformDecl = createCommonjsModule(function (module) {
(function() {
  var Declaration, TransformDecl,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Declaration = interopDefault(require$$0$6);

  TransformDecl = (function(superClass) {
    extend(TransformDecl, superClass);

    function TransformDecl() {
      return TransformDecl.__super__.constructor.apply(this, arguments);
    }

    TransformDecl.names = ['transform', 'transform-origin'];

    TransformDecl.functions3d = ['matrix3d', 'translate3d', 'translateZ', 'scale3d', 'scaleZ', 'rotate3d', 'rotateX', 'rotateY', 'perspective'];

    TransformDecl.prototype.keyframeParents = function(decl) {
      var parent;
      parent = decl.parent;
      while (parent) {
        if (parent.type === 'atrule' && parent.name === 'keyframes') {
          return true;
        }
        parent = parent.parent;
      }
      return false;
    };

    TransformDecl.prototype.contain3d = function(decl) {
      var func, i, len, ref;
      if (decl.prop === 'transform-origin') {
        return false;
      }
      ref = TransformDecl.functions3d;
      for (i = 0, len = ref.length; i < len; i++) {
        func = ref[i];
        if (decl.value.indexOf(func + "(") !== -1) {
          return true;
        }
      }
      return false;
    };

    TransformDecl.prototype.set = function(decl, prefix) {
      decl = TransformDecl.__super__.set.apply(this, arguments);
      if (prefix === '-ms-') {
        decl.value = decl.value.replace(/rotateZ/gi, 'rotate');
      }
      return decl;
    };

    TransformDecl.prototype.insert = function(decl, prefix, prefixes) {
      if (prefix === '-ms-') {
        if (!this.contain3d(decl) && !this.keyframeParents(decl)) {
          return TransformDecl.__super__.insert.apply(this, arguments);
        }
      } else if (prefix === '-o-') {
        if (!this.contain3d(decl)) {
          return TransformDecl.__super__.insert.apply(this, arguments);
        }
      } else {
        return TransformDecl.__super__.insert.apply(this, arguments);
      }
    };

    return TransformDecl;

  })(Declaration);

  module.exports = TransformDecl;

}).call(commonjsGlobal);
});

var transformDecl$1 = interopDefault(transformDecl);


var require$$14 = Object.freeze({
  default: transformDecl$1
});

var flexDirection = createCommonjsModule(function (module) {
(function() {
  var Declaration, FlexDirection, flexSpec,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  flexSpec = interopDefault(require$$2$3);

  Declaration = interopDefault(require$$0$6);

  FlexDirection = (function(superClass) {
    extend(FlexDirection, superClass);

    function FlexDirection() {
      return FlexDirection.__super__.constructor.apply(this, arguments);
    }

    FlexDirection.names = ['flex-direction', 'box-direction', 'box-orient'];

    FlexDirection.prototype.normalize = function(prop) {
      return 'flex-direction';
    };

    FlexDirection.prototype.insert = function(decl, prefix, prefixes) {
      var already, cloned, dir, orient, ref, spec, value;
      ref = flexSpec(prefix), spec = ref[0], prefix = ref[1];
      if (spec === 2009) {
        already = decl.parent.some(function(i) {
          return i.prop === prefix + 'box-orient' || i.prop === prefix + 'box-direction';
        });
        if (already) {
          return;
        }
        value = decl.value;
        orient = value.indexOf('row') !== -1 ? 'horizontal' : 'vertical';
        dir = value.indexOf('reverse') !== -1 ? 'reverse' : 'normal';
        cloned = this.clone(decl);
        cloned.prop = prefix + 'box-orient';
        cloned.value = orient;
        if (this.needCascade(decl)) {
          cloned.raws.before = this.calcBefore(prefixes, decl, prefix);
        }
        decl.parent.insertBefore(decl, cloned);
        cloned = this.clone(decl);
        cloned.prop = prefix + 'box-direction';
        cloned.value = dir;
        if (this.needCascade(decl)) {
          cloned.raws.before = this.calcBefore(prefixes, decl, prefix);
        }
        return decl.parent.insertBefore(decl, cloned);
      } else {
        return FlexDirection.__super__.insert.apply(this, arguments);
      }
    };

    FlexDirection.prototype.old = function(prop, prefix) {
      var ref, spec;
      ref = flexSpec(prefix), spec = ref[0], prefix = ref[1];
      if (spec === 2009) {
        return [prefix + 'box-orient', prefix + 'box-direction'];
      } else {
        return FlexDirection.__super__.old.apply(this, arguments);
      }
    };

    return FlexDirection;

  })(Declaration);

  module.exports = FlexDirection;

}).call(commonjsGlobal);
});

var flexDirection$1 = interopDefault(flexDirection);


var require$$13 = Object.freeze({
  default: flexDirection$1
});

var imageRendering = createCommonjsModule(function (module) {
(function() {
  var Declaration, ImageRendering,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Declaration = interopDefault(require$$0$6);

  ImageRendering = (function(superClass) {
    extend(ImageRendering, superClass);

    function ImageRendering() {
      return ImageRendering.__super__.constructor.apply(this, arguments);
    }

    ImageRendering.names = ['image-rendering', 'interpolation-mode'];

    ImageRendering.prototype.check = function(decl) {
      return decl.value === 'pixelated';
    };

    ImageRendering.prototype.prefixed = function(prop, prefix) {
      if (prefix === '-ms-') {
        return '-ms-interpolation-mode';
      } else {
        return ImageRendering.__super__.prefixed.apply(this, arguments);
      }
    };

    ImageRendering.prototype.set = function(decl, prefix) {
      if (prefix === '-ms-') {
        decl.prop = '-ms-interpolation-mode';
        decl.value = 'nearest-neighbor';
        return decl;
      } else {
        return ImageRendering.__super__.set.apply(this, arguments);
      }
    };

    ImageRendering.prototype.normalize = function(prop) {
      return 'image-rendering';
    };

    ImageRendering.prototype.process = function(node, result) {
      return ImageRendering.__super__.process.apply(this, arguments);
    };

    return ImageRendering;

  })(Declaration);

  module.exports = ImageRendering;

}).call(commonjsGlobal);
});

var imageRendering$1 = interopDefault(imageRendering);


var require$$12 = Object.freeze({
  default: imageRendering$1
});

var justifyContent = createCommonjsModule(function (module) {
(function() {
  var Declaration, JustifyContent, flexSpec,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  flexSpec = interopDefault(require$$2$3);

  Declaration = interopDefault(require$$0$6);

  JustifyContent = (function(superClass) {
    extend(JustifyContent, superClass);

    function JustifyContent() {
      return JustifyContent.__super__.constructor.apply(this, arguments);
    }

    JustifyContent.names = ['justify-content', 'flex-pack', 'box-pack'];

    JustifyContent.oldValues = {
      'flex-end': 'end',
      'flex-start': 'start',
      'space-between': 'justify',
      'space-around': 'distribute'
    };

    JustifyContent.prototype.prefixed = function(prop, prefix) {
      var ref, spec;
      ref = flexSpec(prefix), spec = ref[0], prefix = ref[1];
      if (spec === 2009) {
        return prefix + 'box-pack';
      } else if (spec === 2012) {
        return prefix + 'flex-pack';
      } else {
        return JustifyContent.__super__.prefixed.apply(this, arguments);
      }
    };

    JustifyContent.prototype.normalize = function(prop) {
      return 'justify-content';
    };

    JustifyContent.prototype.set = function(decl, prefix) {
      var spec, value;
      spec = flexSpec(prefix)[0];
      if (spec === 2009 || spec === 2012) {
        value = JustifyContent.oldValues[decl.value] || decl.value;
        decl.value = value;
        if (spec !== 2009 || value !== 'distribute') {
          return JustifyContent.__super__.set.call(this, decl, prefix);
        }
      } else if (spec === 'final') {
        return JustifyContent.__super__.set.apply(this, arguments);
      }
    };

    return JustifyContent;

  })(Declaration);

  module.exports = JustifyContent;

}).call(commonjsGlobal);
});

var justifyContent$1 = interopDefault(justifyContent);


var require$$11 = Object.freeze({
  default: justifyContent$1
});

var backgroundSize = createCommonjsModule(function (module) {
(function() {
  var BackgroundSize, Declaration,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Declaration = interopDefault(require$$0$6);

  BackgroundSize = (function(superClass) {
    extend(BackgroundSize, superClass);

    function BackgroundSize() {
      return BackgroundSize.__super__.constructor.apply(this, arguments);
    }

    BackgroundSize.names = ['background-size'];

    BackgroundSize.prototype.set = function(decl, prefix) {
      var value;
      value = decl.value.toLowerCase();
      if (prefix === '-webkit-' && value.indexOf(' ') === -1 && value !== 'contain' && value !== 'cover') {
        decl.value = decl.value + ' ' + decl.value;
      }
      return BackgroundSize.__super__.set.call(this, decl, prefix);
    };

    return BackgroundSize;

  })(Declaration);

  module.exports = BackgroundSize;

}).call(commonjsGlobal);
});

var backgroundSize$1 = interopDefault(backgroundSize);


var require$$10 = Object.freeze({
  default: backgroundSize$1
});

var textEmphasisPosition = createCommonjsModule(function (module) {
(function() {
  var Declaration, TextEmphasisPosition,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Declaration = interopDefault(require$$0$6);

  TextEmphasisPosition = (function(superClass) {
    extend(TextEmphasisPosition, superClass);

    function TextEmphasisPosition() {
      return TextEmphasisPosition.__super__.constructor.apply(this, arguments);
    }

    TextEmphasisPosition.names = ['text-emphasis-position'];

    TextEmphasisPosition.prototype.set = function(decl, prefix) {
      if (prefix === '-webkit-') {
        decl.value = decl.value.replace(/\s*(right|left)\s*/i, '');
        return TextEmphasisPosition.__super__.set.call(this, decl, prefix);
      } else {
        return TextEmphasisPosition.__super__.set.apply(this, arguments);
      }
    };

    return TextEmphasisPosition;

  })(Declaration);

  module.exports = TextEmphasisPosition;

}).call(commonjsGlobal);
});

var textEmphasisPosition$1 = interopDefault(textEmphasisPosition);


var require$$9 = Object.freeze({
  default: textEmphasisPosition$1
});

var fill = createCommonjsModule(function (module) {
(function() {
  var Fill, OldValue, Value,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  OldValue = interopDefault(require$$2$2);

  Value = interopDefault(require$$1$5);

  Fill = (function(superClass) {
    extend(Fill, superClass);

    function Fill() {
      return Fill.__super__.constructor.apply(this, arguments);
    }

    Fill.names = ['fill', 'fill-available'];

    Fill.prototype.replace = function(string, prefix) {
      if (prefix === '-moz-') {
        return string.replace(this.regexp(), '$1-moz-available$3');
      } else if (prefix === '-webkit-') {
        return string.replace(this.regexp(), '$1-webkit-fill-available$3');
      } else {
        return Fill.__super__.replace.apply(this, arguments);
      }
    };

    Fill.prototype.old = function(prefix) {
      if (prefix === '-moz-') {
        return new OldValue(this.name, '-moz-available');
      } else if (prefix === '-webkit-') {
        return new OldValue(this.name, '-webkit-fill-available');
      } else {
        return Fill.__super__.old.apply(this, arguments);
      }
    };

    return Fill;

  })(Value);

  module.exports = Fill;

}).call(commonjsGlobal);
});

var fill$1 = interopDefault(fill);


var require$$8 = Object.freeze({
  default: fill$1
});

var index$6 = createCommonjsModule(function (module) {
'use strict';
module.exports = {
  wrap: wrapRange,
  limit: limitRange,
  validate: validateRange,
  test: testRange,
  curry: curry,
  name: name
};

function wrapRange(min, max, value) {
  var maxLessMin = max - min;
  return ((value - min) % maxLessMin + maxLessMin) % maxLessMin + min;
}

function limitRange(min, max, value) {
  return Math.max(min, Math.min(max, value));
}

function validateRange(min, max, value, minExclusive, maxExclusive) {
  if (!testRange(min, max, value, minExclusive, maxExclusive)) {
    throw new Error(value + ' is outside of range [' + min + ',' + max + ')');
  }
  return value;
}

function testRange(min, max, value, minExclusive, maxExclusive) {
  return !(
       value < min ||
       value > max ||
       (maxExclusive && (value === max)) ||
       (minExclusive && (value === min))
  );
}

function name(min, max, minExcl, maxExcl) {
  return (minExcl ? '(' : '[') + min + ',' + max + (maxExcl ? ')' : ']');
}

function curry(min, max, minExclusive, maxExclusive) {
  var boundNameFn = name.bind(null, min, max, minExclusive, maxExclusive);
  return {
    wrap: wrapRange.bind(null, min, max),
    limit: limitRange.bind(null, min, max),
    validate: function(value) {
      return validateRange(min, max, value, minExclusive, maxExclusive);
    },
    test: function(value) {
      return testRange(min, max, value, minExclusive, maxExclusive);
    },
    toString: boundNameFn,
    name: boundNameFn
  };
}
});

var index$7 = interopDefault(index$6);
var wrap = index$6.wrap;
var limit = index$6.limit;
var validate = index$6.validate;
var test = index$6.test;
var curry = index$6.curry;
var name = index$6.name;

var require$$1$6 = Object.freeze({
  default: index$7,
  wrap: wrap,
  limit: limit,
  validate: validate,
  test: test,
  curry: curry,
  name: name
});

var gradient = createCommonjsModule(function (module) {
(function() {
  var Gradient, OldValue, Value, isDirection, list, parser, range, utils,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    slice = [].slice;

  OldValue = interopDefault(require$$2$2);

  Value = interopDefault(require$$1$5);

  utils = interopDefault(require$$0$4);

  parser = interopDefault(require$$2);

  range = interopDefault(require$$1$6);

  list = interopDefault(require$$0$5);

  isDirection = /top|left|right|bottom/gi;

  Gradient = (function(superClass) {
    extend(Gradient, superClass);

    function Gradient() {
      return Gradient.__super__.constructor.apply(this, arguments);
    }

    Gradient.names = ['linear-gradient', 'repeating-linear-gradient', 'radial-gradient', 'repeating-radial-gradient'];

    Gradient.prototype.replace = function(string, prefix) {
      var ast, changes, j, len, node, ref;
      ast = parser(string);
      ref = ast.nodes;
      for (j = 0, len = ref.length; j < len; j++) {
        node = ref[j];
        if (node.type === 'function' && node.value === this.name) {
          node.nodes = this.newDirection(node.nodes);
          node.nodes = this.normalize(node.nodes);
          if (prefix === '-webkit- old') {
            changes = this.oldWebkit(node);
            if (!changes) {
              return;
            }
          } else {
            node.nodes = this.convertDirection(node.nodes);
            node.value = prefix + node.value;
          }
        }
      }
      return ast.toString();
    };

    Gradient.prototype.directions = {
      top: 'bottom',
      left: 'right',
      bottom: 'top',
      right: 'left'
    };

    Gradient.prototype.oldDirections = {
      'top': 'left bottom, left top',
      'left': 'right top, left top',
      'bottom': 'left top, left bottom',
      'right': 'left top, right top',
      'top right': 'left bottom, right top',
      'top left': 'right bottom, left top',
      'right top': 'left bottom, right top',
      'right bottom': 'left top, right bottom',
      'bottom right': 'left top, right bottom',
      'bottom left': 'right top, left bottom',
      'left top': 'right bottom, left top',
      'left bottom': 'right top, left bottom'
    };

    Gradient.prototype.replaceFirst = function() {
      var params, prefix, words;
      params = arguments[0], words = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      prefix = words.map(function(i) {
        if (i === ' ') {
          return {
            type: 'space',
            value: i
          };
        } else {
          return {
            type: 'word',
            value: i
          };
        }
      });
      return prefix.concat(params.slice(1));
    };

    Gradient.prototype.normalizeUnit = function(str, full) {
      var deg, num;
      num = parseFloat(str);
      deg = (num / full) * 360;
      return deg + "deg";
    };

    Gradient.prototype.normalize = function(nodes) {
      var num;
      if (!nodes[0]) {
        return nodes;
      }
      if (/-?\d+(.\d+)?grad/.test(nodes[0].value)) {
        nodes[0].value = this.normalizeUnit(nodes[0].value, 400);
      } else if (/-?\d+(.\d+)?rad/.test(nodes[0].value)) {
        nodes[0].value = this.normalizeUnit(nodes[0].value, 2);
      } else if (/-?\d+(.\d+)?turn/.test(nodes[0].value)) {
        nodes[0].value = this.normalizeUnit(nodes[0].value, 1);
      } else if (nodes[0].value.indexOf('deg') !== -1) {
        num = parseFloat(nodes[0].value);
        num = range.wrap(0, 360, num);
        nodes[0].value = num + "deg";
      }
      if (nodes[0].value === '0deg') {
        nodes = this.replaceFirst(nodes, 'to', ' ', 'top');
      } else if (nodes[0].value === '90deg') {
        nodes = this.replaceFirst(nodes, 'to', ' ', 'right');
      } else if (nodes[0].value === '180deg') {
        nodes = this.replaceFirst(nodes, 'to', ' ', 'bottom');
      } else if (nodes[0].value === '270deg') {
        nodes = this.replaceFirst(nodes, 'to', ' ', 'left');
      }
      return nodes;
    };

    Gradient.prototype.newDirection = function(params) {
      var i, j, ref;
      if (params[0].value === 'to') {
        return params;
      }
      if (!isDirection.test(params[0].value)) {
        return params;
      }
      params.unshift({
        type: 'word',
        value: 'to'
      }, {
        type: 'space',
        value: ' '
      });
      for (i = j = 2, ref = params.length; 2 <= ref ? j < ref : j > ref; i = 2 <= ref ? ++j : --j) {
        if (params[i].type === 'div') {
          break;
        }
        if (params[i].type === 'word') {
          params[i].value = this.revertDirection(params[i].value);
        }
      }
      return params;
    };

    Gradient.prototype.convertDirection = function(params) {
      if (params.length > 0) {
        if (params[0].value === 'to') {
          this.fixDirection(params);
        } else if (params[0].value.indexOf('deg') !== -1) {
          this.fixAngle(params);
        } else if (params[2].value === 'at') {
          this.fixRadial(params);
        }
      }
      return params;
    };

    Gradient.prototype.fixDirection = function(params) {
      var i, j, ref, results;
      params.splice(0, 2);
      results = [];
      for (i = j = 0, ref = params.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        if (params[i].type === 'div') {
          break;
        }
        if (params[i].type === 'word') {
          results.push(params[i].value = this.revertDirection(params[i].value));
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    Gradient.prototype.fixAngle = function(params) {
      var first;
      first = params[0].value;
      first = parseFloat(first);
      first = Math.abs(450 - first) % 360;
      first = this.roundFloat(first, 3);
      return params[0].value = first + "deg";
    };

    Gradient.prototype.fixRadial = function(params) {
      var first, i, j, ref, second;
      first = params[0];
      second = [];
      for (i = j = 4, ref = params.length; 4 <= ref ? j < ref : j > ref; i = 4 <= ref ? ++j : --j) {
        if (params[i].type === 'div') {
          break;
        } else {
          second.push(params[i]);
        }
      }
      return params.splice.apply(params, [0, i].concat(slice.call(second), [params[i + 2]], [first]));
    };

    Gradient.prototype.revertDirection = function(word) {
      return this.directions[word.toLowerCase()] || word;
    };

    Gradient.prototype.roundFloat = function(float, digits) {
      return parseFloat(float.toFixed(digits));
    };

    Gradient.prototype.oldWebkit = function(node) {
      var i, j, k, len, len1, nodes, param, params, string;
      nodes = node.nodes;
      string = parser.stringify(node.nodes);
      if (this.name !== 'linear-gradient') {
        return false;
      }
      if (nodes[0] && nodes[0].value.indexOf('deg') !== -1) {
        return false;
      }
      if (string.indexOf('px') !== -1) {
        return false;
      }
      if (string.indexOf('-corner') !== -1) {
        return false;
      }
      if (string.indexOf('-side') !== -1) {
        return false;
      }
      params = [[]];
      for (j = 0, len = nodes.length; j < len; j++) {
        i = nodes[j];
        params[params.length - 1].push(i);
        if (i.type === 'div' && i.value === ',') {
          params.push([]);
        }
      }
      this.oldDirection(params);
      this.colorStops(params);
      node.nodes = [];
      for (k = 0, len1 = params.length; k < len1; k++) {
        param = params[k];
        node.nodes = node.nodes.concat(param);
      }
      node.nodes.unshift({
        type: 'word',
        value: 'linear'
      }, this.cloneDiv(node.nodes));
      node.value = '-webkit-gradient';
      return true;
    };

    Gradient.prototype.oldDirection = function(params) {
      var div, j, len, node, old, ref, words;
      div = this.cloneDiv(params[0]);
      if (params[0][0].value !== 'to') {
        return params.unshift([
          {
            type: 'word',
            value: this.oldDirections.bottom
          }, div
        ]);
      } else {
        words = [];
        ref = params[0].slice(2);
        for (j = 0, len = ref.length; j < len; j++) {
          node = ref[j];
          if (node.type === 'word') {
            words.push(node.value.toLowerCase());
          }
        }
        words = words.join(' ');
        old = this.oldDirections[words] || words;
        return params[0] = [
          {
            type: 'word',
            value: old
          }, div
        ];
      }
    };

    Gradient.prototype.cloneDiv = function(params) {
      var i, j, len;
      for (j = 0, len = params.length; j < len; j++) {
        i = params[j];
        if (i.type === 'div' && i.value === ',') {
          return i;
        }
      }
      return {
        type: 'div',
        value: ',',
        after: ' '
      };
    };

    Gradient.prototype.colorStops = function(params) {
      var color, div, i, j, len, param, pos, results, stop;
      results = [];
      for (i = j = 0, len = params.length; j < len; i = ++j) {
        param = params[i];
        if (i === 0) {
          continue;
        }
        color = parser.stringify(param[0]);
        if (param[1] && param[1].type === 'word') {
          pos = param[1].value;
        } else if (param[2] && param[2].type === 'word') {
          pos = param[2].value;
        }
        stop = i === 1 && (!pos || pos === '0%') ? "from(" + color + ")" : i === params.length - 1 && (!pos || pos === '100%') ? "to(" + color + ")" : pos ? "color-stop(" + pos + ", " + color + ")" : "color-stop(" + color + ")";
        div = param[param.length - 1];
        params[i] = [
          {
            type: 'word',
            value: stop
          }
        ];
        if (div.type === 'div' && div.value === ',') {
          results.push(params[i].push(div));
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    Gradient.prototype.old = function(prefix) {
      var regexp, string, type;
      if (prefix === '-webkit-') {
        type = this.name === 'linear-gradient' ? 'linear' : 'radial';
        string = '-gradient';
        regexp = utils.regexp("-webkit-(" + type + "-gradient|gradient\\(\\s*" + type + ")", false);
        return new OldValue(this.name, prefix + this.name, string, regexp);
      } else {
        return Gradient.__super__.old.apply(this, arguments);
      }
    };

    Gradient.prototype.add = function(decl, prefix) {
      var p;
      p = decl.prop;
      if (p.indexOf('mask') !== -1) {
        if (prefix === '-webkit-' || prefix === '-webkit- old') {
          return Gradient.__super__.add.apply(this, arguments);
        }
      } else if (p === 'list-style' || p === 'list-style-image' || p === 'content') {
        if (prefix === '-webkit-' || prefix === '-webkit- old') {
          return Gradient.__super__.add.apply(this, arguments);
        }
      } else {
        return Gradient.__super__.add.apply(this, arguments);
      }
    };

    return Gradient;

  })(Value);

  module.exports = Gradient;

}).call(commonjsGlobal);
});

var gradient$1 = interopDefault(gradient);


var require$$7 = Object.freeze({
  default: gradient$1
});

var pixelated = createCommonjsModule(function (module) {
(function() {
  var OldValue, Pixelated, Value,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  OldValue = interopDefault(require$$2$2);

  Value = interopDefault(require$$1$5);

  Pixelated = (function(superClass) {
    extend(Pixelated, superClass);

    function Pixelated() {
      return Pixelated.__super__.constructor.apply(this, arguments);
    }

    Pixelated.names = ['pixelated'];

    Pixelated.prototype.replace = function(string, prefix) {
      if (prefix === '-webkit-') {
        return string.replace(this.regexp(), '$1-webkit-optimize-contrast');
      } else if (prefix === '-moz-') {
        return string.replace(this.regexp(), '$1-moz-crisp-edges');
      } else {
        return Pixelated.__super__.replace.apply(this, arguments);
      }
    };

    Pixelated.prototype.old = function(prefix) {
      if (prefix === '-webkit-') {
        return new OldValue(this.name, '-webkit-optimize-contrast');
      } else if (prefix === '-moz-') {
        return new OldValue(this.name, '-moz-crisp-edges');
      } else {
        return Pixelated.__super__.old.apply(this, arguments);
      }
    };

    return Pixelated;

  })(Value);

  module.exports = Pixelated;

}).call(commonjsGlobal);
});

var pixelated$1 = interopDefault(pixelated);


var require$$6 = Object.freeze({
  default: pixelated$1
});

var imageSet = createCommonjsModule(function (module) {
(function() {
  var ImageSet, Value, list,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  list = interopDefault(require$$0$5);

  Value = interopDefault(require$$1$5);

  ImageSet = (function(superClass) {
    extend(ImageSet, superClass);

    function ImageSet() {
      return ImageSet.__super__.constructor.apply(this, arguments);
    }

    ImageSet.names = ['image-set'];

    ImageSet.prototype.replace = function(string, prefix) {
      if (prefix === '-webkit-') {
        return ImageSet.__super__.replace.apply(this, arguments).replace(/("[^"]+"|'[^']+')(\s+\d+\w)/gi, 'url($1)$2');
      } else {
        return ImageSet.__super__.replace.apply(this, arguments);
      }
    };

    return ImageSet;

  })(Value);

  module.exports = ImageSet;

}).call(commonjsGlobal);
});

var imageSet$1 = interopDefault(imageSet);


var require$$5 = Object.freeze({
  default: imageSet$1
});

var crossFade = createCommonjsModule(function (module) {
(function() {
  var CrossFade, OldValue, Value, list, utils,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  OldValue = interopDefault(require$$2$2);

  Value = interopDefault(require$$1$5);

  utils = interopDefault(require$$0$4);

  list = interopDefault(require$$0$5);

  CrossFade = (function(superClass) {
    extend(CrossFade, superClass);

    function CrossFade() {
      return CrossFade.__super__.constructor.apply(this, arguments);
    }

    CrossFade.names = ['cross-fade'];

    CrossFade.prototype.replace = function(string, prefix) {
      return list.space(string).map((function(_this) {
        return function(value) {
          var after, args, close, match;
          if (value.slice(0, +_this.name.length + 1 || 9e9) !== _this.name + '(') {
            return value;
          }
          close = value.lastIndexOf(')');
          after = value.slice(close + 1);
          args = value.slice(_this.name.length + 1, +(close - 1) + 1 || 9e9);
          if (prefix === '-webkit-') {
            match = args.match(/\d*.?\d+%?/);
            if (match) {
              args = args.slice(match[0].length).trim();
              args += ', ' + match[0];
            } else {
              args += ', 0.5';
            }
          }
          return prefix + _this.name + '(' + args + ')' + after;
        };
      })(this)).join(' ');
    };

    return CrossFade;

  })(Value);

  module.exports = CrossFade;

}).call(commonjsGlobal);
});

var crossFade$1 = interopDefault(crossFade);


var require$$4$1 = Object.freeze({
  default: crossFade$1
});

var flexValues = createCommonjsModule(function (module) {
(function() {
  var FlexValues, OldValue, Value,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  OldValue = interopDefault(require$$2$2);

  Value = interopDefault(require$$1$5);

  FlexValues = (function(superClass) {
    extend(FlexValues, superClass);

    function FlexValues() {
      return FlexValues.__super__.constructor.apply(this, arguments);
    }

    FlexValues.names = ['flex', 'flex-grow', 'flex-shrink', 'flex-basis'];

    FlexValues.prototype.prefixed = function(prefix) {
      return this.all.prefixed(this.name, prefix);
    };

    FlexValues.prototype.replace = function(string, prefix) {
      return string.replace(this.regexp(), '$1' + this.prefixed(prefix) + '$3');
    };

    FlexValues.prototype.old = function(prefix) {
      return new OldValue(this.name, this.prefixed(prefix));
    };

    return FlexValues;

  })(Value);

  module.exports = FlexValues;

}).call(commonjsGlobal);
});

var flexValues$1 = interopDefault(flexValues);


var require$$3$3 = Object.freeze({
  default: flexValues$1
});

var displayFlex = createCommonjsModule(function (module) {
(function() {
  var DisplayFlex, OldValue, Value, flexSpec,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  flexSpec = interopDefault(require$$2$3);

  OldValue = interopDefault(require$$2$2);

  Value = interopDefault(require$$1$5);

  DisplayFlex = (function(superClass) {
    extend(DisplayFlex, superClass);

    DisplayFlex.names = ['display-flex', 'inline-flex'];

    function DisplayFlex(name, prefixes) {
      DisplayFlex.__super__.constructor.apply(this, arguments);
      if (name === 'display-flex') {
        this.name = 'flex';
      }
    }

    DisplayFlex.prototype.check = function(decl) {
      return decl.prop === 'display' && decl.value === this.name;
    };

    DisplayFlex.prototype.prefixed = function(prefix) {
      var ref, spec;
      ref = flexSpec(prefix), spec = ref[0], prefix = ref[1];
      return prefix + (spec === 2009 ? this.name === 'flex' ? 'box' : 'inline-box' : spec === 2012 ? this.name === 'flex' ? 'flexbox' : 'inline-flexbox' : spec === 'final' ? this.name : void 0);
    };

    DisplayFlex.prototype.replace = function(string, prefix) {
      return this.prefixed(prefix);
    };

    DisplayFlex.prototype.old = function(prefix) {
      var prefixed;
      prefixed = this.prefixed(prefix);
      if (prefixed) {
        return new OldValue(this.name, prefixed);
      }
    };

    return DisplayFlex;

  })(Value);

  module.exports = DisplayFlex;

}).call(commonjsGlobal);
});

var displayFlex$1 = interopDefault(displayFlex);


var require$$2$4 = Object.freeze({
  default: displayFlex$1
});

var displayGrid = createCommonjsModule(function (module) {
(function() {
  var DisplayGrid, OldValue, Value, flexSpec,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  flexSpec = interopDefault(require$$2$3);

  OldValue = interopDefault(require$$2$2);

  Value = interopDefault(require$$1$5);

  DisplayGrid = (function(superClass) {
    extend(DisplayGrid, superClass);

    DisplayGrid.names = ['display-grid', 'inline-grid'];

    function DisplayGrid(name, prefixes) {
      DisplayGrid.__super__.constructor.apply(this, arguments);
      if (name === 'display-grid') {
        this.name = 'grid';
      }
    }

    DisplayGrid.prototype.check = function(decl) {
      return decl.prop === 'display' && decl.value === this.name;
    };

    return DisplayGrid;

  })(Value);

  module.exports = DisplayGrid;

}).call(commonjsGlobal);
});

var displayGrid$1 = interopDefault(displayGrid);


var require$$1$7 = Object.freeze({
  default: displayGrid$1
});

var filterValue = createCommonjsModule(function (module) {
(function() {
  var FilterValue, OldFilterValue, OldValue, Value, utils,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  OldValue = interopDefault(require$$2$2);

  Value = interopDefault(require$$1$5);

  utils = interopDefault(require$$0$4);

  OldFilterValue = (function(superClass) {
    extend(OldFilterValue, superClass);

    function OldFilterValue() {
      return OldFilterValue.__super__.constructor.apply(this, arguments);
    }

    OldFilterValue.prototype.clean = function(decl) {
      return decl.value = utils.editList(decl.value, (function(_this) {
        return function(props) {
          if (props.every(function(i) {
            return i.indexOf(_this.unprefixed) !== 0;
          })) {
            return props;
          }
          return props.filter(function(i) {
            return i.indexOf(_this.prefixed) === -1;
          });
        };
      })(this));
    };

    return OldFilterValue;

  })(OldValue);

  FilterValue = (function(superClass) {
    extend(FilterValue, superClass);

    FilterValue.names = ['filter', 'filter-function'];

    function FilterValue(name, prefixes) {
      FilterValue.__super__.constructor.apply(this, arguments);
      if (name === 'filter-function') {
        this.name = 'filter';
      }
    }

    FilterValue.prototype.replace = function(value, prefix) {
      if (prefix === '-webkit-' && value.indexOf('filter(') === -1) {
        if (value.indexOf('-webkit-filter') === -1) {
          return FilterValue.__super__.replace.apply(this, arguments) + ', ' + value;
        } else {
          return value;
        }
      } else {
        return FilterValue.__super__.replace.apply(this, arguments);
      }
    };

    FilterValue.prototype.old = function(prefix) {
      return new OldFilterValue(this.name, prefix + this.name);
    };

    return FilterValue;

  })(Value);

  module.exports = FilterValue;

}).call(commonjsGlobal);
});

var filterValue$1 = interopDefault(filterValue);


var require$$0$13 = Object.freeze({
  default: filterValue$1
});

var prefixes = createCommonjsModule(function (module) {
(function() {
  var AtRule, Browsers, Declaration, Prefixes, Processor, Resolution, Selector, Supports, Transition, Value, declsCache, utils, vendor;

  Declaration = interopDefault(require$$0$6);

  Resolution = interopDefault(require$$49);

  Transition = interopDefault(require$$48);

  Processor = interopDefault(require$$47);

  Supports = interopDefault(require$$46);

  Browsers = interopDefault(require$$1$3);

  Selector = interopDefault(require$$0$12);

  AtRule = interopDefault(require$$43);

  Value = interopDefault(require$$1$5);

  utils = interopDefault(require$$0$4);

  vendor = interopDefault(require$$0$8);

  Selector.hack(interopDefault(require$$39));

  Selector.hack(interopDefault(require$$38));

  Declaration.hack(interopDefault(require$$37));

  Declaration.hack(interopDefault(require$$36));

  Declaration.hack(interopDefault(require$$35));

  Declaration.hack(interopDefault(require$$34));

  Declaration.hack(interopDefault(require$$33));

  Declaration.hack(interopDefault(require$$32));

  Declaration.hack(interopDefault(require$$31));

  Declaration.hack(interopDefault(require$$30));

  Declaration.hack(interopDefault(require$$29));

  Declaration.hack(interopDefault(require$$28));

  Declaration.hack(interopDefault(require$$27));

  Declaration.hack(interopDefault(require$$26));

  Declaration.hack(interopDefault(require$$25));

  Declaration.hack(interopDefault(require$$24));

  Declaration.hack(interopDefault(require$$23));

  Declaration.hack(interopDefault(require$$22));

  Declaration.hack(interopDefault(require$$21));

  Declaration.hack(interopDefault(require$$20));

  Declaration.hack(interopDefault(require$$19));

  Declaration.hack(interopDefault(require$$18));

  Declaration.hack(interopDefault(require$$17));

  Declaration.hack(interopDefault(require$$16));

  Declaration.hack(interopDefault(require$$15));

  Declaration.hack(interopDefault(require$$14));

  Declaration.hack(interopDefault(require$$13));

  Declaration.hack(interopDefault(require$$12));

  Declaration.hack(interopDefault(require$$11));

  Declaration.hack(interopDefault(require$$10));

  Declaration.hack(interopDefault(require$$9));

  Value.hack(interopDefault(require$$8));

  Value.hack(interopDefault(require$$7));

  Value.hack(interopDefault(require$$6));

  Value.hack(interopDefault(require$$5));

  Value.hack(interopDefault(require$$4$1));

  Value.hack(interopDefault(require$$3$3));

  Value.hack(interopDefault(require$$2$4));

  Value.hack(interopDefault(require$$1$7));

  Value.hack(interopDefault(require$$0$13));

  declsCache = {};

  Prefixes = (function() {
    function Prefixes(data1, browsers, options) {
      var ref;
      this.data = data1;
      this.browsers = browsers;
      this.options = options != null ? options : {};
      ref = this.preprocess(this.select(this.data)), this.add = ref[0], this.remove = ref[1];
      this.transition = new Transition(this);
      this.processor = new Processor(this);
    }

    Prefixes.prototype.cleaner = function() {
      var empty;
      if (!this.cleanerCache) {
        if (this.browsers.selected.length) {
          empty = new Browsers(this.browsers.data, []);
          this.cleanerCache = new Prefixes(this.data, empty, this.options);
        } else {
          return this;
        }
      }
      return this.cleanerCache;
    };

    Prefixes.prototype.select = function(list) {
      var add, all, data, name, notes, selected;
      selected = {
        add: {},
        remove: {}
      };
      for (name in list) {
        data = list[name];
        add = data.browsers.map(function(i) {
          var params;
          params = i.split(' ');
          return {
            browser: params[0] + ' ' + params[1],
            note: params[2]
          };
        });
        notes = add.filter(function(i) {
          return i.note;
        }).map((function(_this) {
          return function(i) {
            return _this.browsers.prefix(i.browser) + ' ' + i.note;
          };
        })(this));
        notes = utils.uniq(notes);
        add = add.filter((function(_this) {
          return function(i) {
            return _this.browsers.isSelected(i.browser);
          };
        })(this)).map((function(_this) {
          return function(i) {
            var prefix;
            prefix = _this.browsers.prefix(i.browser);
            if (i.note) {
              return prefix + ' ' + i.note;
            } else {
              return prefix;
            }
          };
        })(this));
        add = this.sort(utils.uniq(add));
        if (this.options.flexbox === 'no-2009') {
          add = add.filter(function(i) {
            return i.indexOf('2009') === -1;
          });
        }
        all = data.browsers.map((function(_this) {
          return function(i) {
            return _this.browsers.prefix(i);
          };
        })(this));
        if (data.mistakes) {
          all = all.concat(data.mistakes);
        }
        all = all.concat(notes);
        all = utils.uniq(all);
        if (add.length) {
          selected.add[name] = add;
          if (add.length < all.length) {
            selected.remove[name] = all.filter(function(i) {
              return add.indexOf(i) === -1;
            });
          }
        } else {
          selected.remove[name] = all;
        }
      }
      return selected;
    };

    Prefixes.prototype.sort = function(prefixes) {
      return prefixes.sort(function(a, b) {
        var aLength, bLength;
        aLength = utils.removeNote(a).length;
        bLength = utils.removeNote(b).length;
        if (aLength === bLength) {
          return b.length - a.length;
        } else {
          return bLength - aLength;
        }
      });
    };

    Prefixes.prototype.preprocess = function(selected) {
      var add, j, k, l, len, len1, len2, len3, len4, len5, len6, m, n, name, o, old, olds, p, prefix, prefixed, prefixes, prop, props, ref, ref1, ref2, remove, selector, value, values;
      add = {
        selectors: [],
        '@supports': new Supports(Prefixes, this)
      };
      ref = selected.add;
      for (name in ref) {
        prefixes = ref[name];
        if (name === '@keyframes' || name === '@viewport') {
          add[name] = new AtRule(name, prefixes, this);
        } else if (name === '@resolution') {
          add[name] = new Resolution(name, prefixes, this);
        } else if (this.data[name].selector) {
          add.selectors.push(Selector.load(name, prefixes, this));
        } else {
          props = this.data[name].props;
          if (props) {
            value = Value.load(name, prefixes, this);
            for (j = 0, len = props.length; j < len; j++) {
              prop = props[j];
              if (!add[prop]) {
                add[prop] = {
                  values: []
                };
              }
              add[prop].values.push(value);
            }
          } else {
            values = ((ref1 = add[name]) != null ? ref1.values : void 0) || [];
            add[name] = Declaration.load(name, prefixes, this);
            add[name].values = values;
          }
        }
      }
      remove = {
        selectors: []
      };
      ref2 = selected.remove;
      for (name in ref2) {
        prefixes = ref2[name];
        if (this.data[name].selector) {
          selector = Selector.load(name, prefixes);
          for (k = 0, len1 = prefixes.length; k < len1; k++) {
            prefix = prefixes[k];
            remove.selectors.push(selector.old(prefix));
          }
        } else if (name === '@keyframes' || name === '@viewport') {
          for (l = 0, len2 = prefixes.length; l < len2; l++) {
            prefix = prefixes[l];
            prefixed = '@' + prefix + name.slice(1);
            remove[prefixed] = {
              remove: true
            };
          }
        } else if (name === '@resolution') {
          remove[name] = new Resolution(name, prefixes, this);
        } else {
          props = this.data[name].props;
          if (props) {
            value = Value.load(name, [], this);
            for (m = 0, len3 = prefixes.length; m < len3; m++) {
              prefix = prefixes[m];
              old = value.old(prefix);
              if (old) {
                for (n = 0, len4 = props.length; n < len4; n++) {
                  prop = props[n];
                  if (!remove[prop]) {
                    remove[prop] = {};
                  }
                  if (!remove[prop].values) {
                    remove[prop].values = [];
                  }
                  remove[prop].values.push(old);
                }
              }
            }
          } else {
            for (o = 0, len5 = prefixes.length; o < len5; o++) {
              prefix = prefixes[o];
              prop = vendor.unprefixed(name);
              olds = this.decl(name).old(name, prefix);
              for (p = 0, len6 = olds.length; p < len6; p++) {
                prefixed = olds[p];
                if (!remove[prefixed]) {
                  remove[prefixed] = {};
                }
                remove[prefixed].remove = true;
              }
            }
          }
        }
      }
      return [add, remove];
    };

    Prefixes.prototype.decl = function(prop) {
      var decl;
      decl = declsCache[prop];
      if (decl) {
        return decl;
      } else {
        return declsCache[prop] = Declaration.load(prop);
      }
    };

    Prefixes.prototype.unprefixed = function(prop) {
      return this.normalize(vendor.unprefixed(prop));
    };

    Prefixes.prototype.normalize = function(prop) {
      return this.decl(prop).normalize(prop);
    };

    Prefixes.prototype.prefixed = function(prop, prefix) {
      prop = vendor.unprefixed(prop);
      return this.decl(prop).prefixed(prop, prefix);
    };

    Prefixes.prototype.values = function(type, prop) {
      var data, global, ref, ref1, values;
      data = this[type];
      global = (ref = data['*']) != null ? ref.values : void 0;
      values = (ref1 = data[prop]) != null ? ref1.values : void 0;
      if (global && values) {
        return utils.uniq(global.concat(values));
      } else {
        return global || values || [];
      }
    };

    Prefixes.prototype.group = function(decl) {
      var checker, index, length, rule, unprefixed;
      rule = decl.parent;
      index = rule.index(decl);
      length = rule.nodes.length;
      unprefixed = this.unprefixed(decl.prop);
      checker = (function(_this) {
        return function(step, callback) {
          var other;
          index += step;
          while (index >= 0 && index < length) {
            other = rule.nodes[index];
            if (other.type === 'decl') {
              if (step === -1 && other.prop === unprefixed) {
                if (!Browsers.withPrefix(other.value)) {
                  break;
                }
              }
              if (_this.unprefixed(other.prop) !== unprefixed) {
                break;
              } else if (callback(other) === true) {
                return true;
              }
              if (step === +1 && other.prop === unprefixed) {
                if (!Browsers.withPrefix(other.value)) {
                  break;
                }
              }
            }
            index += step;
          }
          return false;
        };
      })(this);
      return {
        up: function(callback) {
          return checker(-1, callback);
        },
        down: function(callback) {
          return checker(+1, callback);
        }
      };
    };

    return Prefixes;

  })();

  module.exports = Prefixes;

}).call(commonjsGlobal);
});

var prefixes$1 = interopDefault(prefixes);


var require$$3 = Object.freeze({
  default: prefixes$1
});

var info$1 = createCommonjsModule(function (module) {
(function() {
  var browserslist, capitalize, names, prefix;

  browserslist = interopDefault(require$$0$2);

  capitalize = function(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  };

  names = {
    ie: 'IE',
    ie_mob: 'IE Mobile',
    ios_saf: 'iOS',
    op_mini: 'Opera Mini',
    op_mob: 'Opera Mobile',
    and_chr: 'Chrome for Android',
    and_ff: 'Firefox for Android',
    and_uc: 'UC for Android'
  };

  prefix = function(name, prefixes) {
    var out;
    out = '  ' + name + ': ';
    out += prefixes.map(function(i) {
      return i.replace(/^-(.*)-$/g, '$1');
    }).join(', ');
    out += "\n";
    return out;
  };

  module.exports = function(prefixes) {
    var atrules, browser, coverage, data, j, k, l, len, len1, len2, list, name, out, props, ref, ref1, ref2, ref3, ref4, ref5, round, selector, selectors, string, value, values, version, versions;
    if (prefixes.browsers.selected.length === 0) {
      return "No browsers selected";
    }
    versions = [];
    ref = prefixes.browsers.selected;
    for (j = 0, len = ref.length; j < len; j++) {
      browser = ref[j];
      ref1 = browser.split(' '), name = ref1[0], version = ref1[1];
      name = names[name] || capitalize(name);
      if (versions[name]) {
        versions[name].push(version);
      } else {
        versions[name] = [version];
      }
    }
    out = "Browsers:\n";
    for (browser in versions) {
      list = versions[browser];
      list = list.sort(function(a, b) {
        return parseFloat(b) - parseFloat(a);
      });
      out += '  ' + browser + ': ' + list.join(', ') + "\n";
    }
    coverage = browserslist.coverage(prefixes.browsers.selected);
    round = Math.round(coverage * 100) / 100.0;
    out += "\nThese browsers account for " + round + "% of all users globally\n";
    atrules = '';
    ref2 = prefixes.add;
    for (name in ref2) {
      data = ref2[name];
      if (name[0] === '@' && data.prefixes) {
        atrules += prefix(name, data.prefixes);
      }
    }
    if (atrules !== '') {
      out += "\nAt-Rules:\n" + atrules;
    }
    selectors = '';
    ref3 = prefixes.add.selectors;
    for (k = 0, len1 = ref3.length; k < len1; k++) {
      selector = ref3[k];
      if (selector.prefixes) {
        selectors += prefix(selector.name, selector.prefixes);
      }
    }
    if (selectors !== '') {
      out += "\nSelectors:\n" + selectors;
    }
    values = '';
    props = '';
    ref4 = prefixes.add;
    for (name in ref4) {
      data = ref4[name];
      if (name[0] !== '@' && data.prefixes) {
        props += prefix(name, data.prefixes);
      }
      if (!data.values) {
        continue;
      }
      ref5 = data.values;
      for (l = 0, len2 = ref5.length; l < len2; l++) {
        value = ref5[l];
        string = prefix(value.name, value.prefixes);
        if (values.indexOf(string) === -1) {
          values += string;
        }
      }
    }
    if (props !== '') {
      out += "\nProperties:\n" + props;
    }
    if (values !== '') {
      out += "\nValues:\n" + values;
    }
    if (atrules === '' && selectors === '' && props === '' && values === '') {
      out += '\nAwesome! Your browsers don\'t require any vendor prefixes.' + '\nNow you can remove Autoprefixer from build steps.';
    }
    return out;
  };

}).call(commonjsGlobal);
});

var info$2 = interopDefault(info$1);


var require$$2$5 = Object.freeze({
  default: info$2
});

var title$1 = "CSS3 Border-radius (rounded corners)";
var description$1 = "Method of making the border corners round. Covers support for the shorthand `border-radius` as well as the long-hand properties (e.g. `border-top-left-radius`)";
var spec$1 = "http://www.w3.org/TR/css3-background/#the-border-radius";
var status$1 = "cr";
var links$1 = [{"url":"http://border-radius.com","title":"Border-radius CSS Generator"},{"url":"http://muddledramblings.com/table-of-css3-border-radius-compliance","title":"Detailed compliance table"},{"url":"http://www.css3files.com/border/#borderradius","title":"Information page"},{"url":"http://css3pie.com/","title":"Polyfill which includes border-radius"},{"url":"http://docs.webplatform.org/wiki/css/properties/border-radius","title":"WebPlatform Docs"}];
var bugs$1 = [{"description":"Safari does not apply `border-radius` correctly to image borders: http://stackoverflow.com/q/17202128"},{"description":"Android Browser 2.3 does not support % value for `border-radius`."},{"description":"Border-radius does not work on fieldset elements in IE9."},{"description":"The stock browser on the Samsung Galaxy S4 with Android 4.2 does not support the `border-radius` shorthand property but does support the long-hand properties for each corner like `border-top-left-radius`."},{"description":"Older versions of Safari [had a bug](https://bugs.webkit.org/show_bug.cgi?id=50072) where background images would bleed out of the border-radius."},{"description":"Dotted and dashed rounded border corners are rendered as solid in Firefox. [see bug](https://bugzilla.mozilla.org/show_bug.cgi?id=382721)"}];
var categories$1 = ["CSS3"];
var stats$1 = {"ie":{"6":"n","7":"n","8":"n","9":"y","10":"y","11":"y","5.5":"n"},"edge":{"12":"y","13":"y","14":"y"},"firefox":{"2":"a x","3":"y x","4":"y","5":"y","6":"y","7":"y","8":"y","9":"y","10":"y","11":"y","12":"y","13":"y","14":"y","15":"y","16":"y","17":"y","18":"y","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","3.5":"y x","3.6":"y x"},"chrome":{"4":"y x","5":"y","6":"y","7":"y","8":"y","9":"y","10":"y","11":"y","12":"y","13":"y","14":"y","15":"y","16":"y","17":"y","18":"y","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","51":"y","52":"y","53":"y","54":"y","55":"y"},"safari":{"4":"y x","5":"y","6":"y #1","7":"y","8":"y","9":"y","10":"y","3.1":"y x","3.2":"y x","5.1":"y #1","6.1":"y #1","7.1":"y","9.1":"y","TP":"y"},"opera":{"9":"n","11":"y","12":"y","15":"y","16":"y","17":"y","18":"y","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","9.5-9.6":"n","10.0-10.1":"n","10.5":"y","10.6":"y","11.1":"y","11.5":"y","11.6":"y","12.1":"y"},"ios_saf":{"8":"y","3.2":"y x","4.0-4.1":"y","4.2-4.3":"y","5.0-5.1":"y","6.0-6.1":"y","7.0-7.1":"y","8.1-8.4":"y","9.0-9.2":"y","9.3":"y"},"op_mini":{"all":"n"},"android":{"3":"y","4":"y","51":"y","2.1":"y x","2.2":"y","2.3":"y","4.1":"y","4.2-4.3":"y","4.4":"y","4.4.3-4.4.4":"y"},"bb":{"7":"y","10":"y"},"op_mob":{"10":"n","11":"y","12":"y","37":"y","11.1":"y","11.5":"y","12.1":"y"},"and_chr":{"51":"y"},"and_ff":{"47":"y"},"ie_mob":{"10":"y","11":"y"},"and_uc":{"9.9":"y"},"samsung":{"4":"y"}};
var notes$1 = "";
var notes_by_num$1 = {"1":"Safari 6.1 and earlier did not apply `border-radius` correctly to image borders: http://stackoverflow.com/q/17202128"};
var usage_perc_y$1 = 92.59;
var usage_perc_a$1 = 0.02;
var ucprefix$1 = false;
var parent$1 = "";
var keywords$1 = "roundedcorners, border radius,-moz-border-radius";
var ie_id$1 = "";
var chrome_id$1 = "";
var firefox_id$1 = "";
var webkit_id$1 = "";
var shown$1 = true;
var borderRadius$2 = {
	title: title$1,
	description: description$1,
	spec: spec$1,
	status: status$1,
	links: links$1,
	bugs: bugs$1,
	categories: categories$1,
	stats: stats$1,
	notes: notes$1,
	notes_by_num: notes_by_num$1,
	usage_perc_y: usage_perc_y$1,
	usage_perc_a: usage_perc_a$1,
	ucprefix: ucprefix$1,
	parent: parent$1,
	keywords: keywords$1,
	ie_id: ie_id$1,
	chrome_id: chrome_id$1,
	firefox_id: firefox_id$1,
	webkit_id: webkit_id$1,
	shown: shown$1
};

var require$$50 = Object.freeze({
	title: title$1,
	description: description$1,
	spec: spec$1,
	status: status$1,
	links: links$1,
	bugs: bugs$1,
	categories: categories$1,
	stats: stats$1,
	notes: notes$1,
	notes_by_num: notes_by_num$1,
	usage_perc_y: usage_perc_y$1,
	usage_perc_a: usage_perc_a$1,
	ucprefix: ucprefix$1,
	parent: parent$1,
	keywords: keywords$1,
	ie_id: ie_id$1,
	chrome_id: chrome_id$1,
	firefox_id: firefox_id$1,
	webkit_id: webkit_id$1,
	shown: shown$1,
	default: borderRadius$2
});

var title$2 = "CSS3 Box-shadow";
var description$2 = "Method of displaying an inner or outer shadow effect to elements";
var spec$2 = "http://www.w3.org/TR/css3-background/#box-shadow";
var status$2 = "cr";
var links$2 = [{"url":"https://developer.mozilla.org/En/CSS/-moz-box-shadow","title":"MDN article"},{"url":"http://westciv.com/tools/boxshadows/index.html","title":"Live editor"},{"url":"http://tests.themasta.com/blogstuff/boxshadowdemo.html","title":"Demo of various effects"},{"url":"http://www.css3files.com/shadow/","title":"Information page"},{"url":"http://docs.webplatform.org/wiki/css/properties/box-shadow","title":"WebPlatform Docs"}];
var bugs$2 = [{"description":"Edge and IE up to 11 suppress box-shadow in tables with border-collapse:collapse. [test case](http://codepen.io/Fyrd/pen/oXVYyq)"},{"description":"Safari 6, iOS 6 and Android 2.3 default browser don't work with a 0px value for \"blur-radius\".\r\ne.g. `-webkit-box-shadow: 5px 1px 0px 1px #f04e29;`\r\ndoesn't work, but\r\n`-webkit-box-shadow: 5px 1px 1px 1px #f04e29`\r\ndoes."},{"description":"iOS 8 has a bug where the box shadow disappears when zooming in a certain amount. [test case](http://jsfiddle.net/b6aaq57z/4/)"}];
var categories$2 = ["CSS3"];
var stats$2 = {"ie":{"6":"n","7":"n","8":"n","9":"y","10":"y","11":"y","5.5":"n"},"edge":{"12":"y","13":"y","14":"y"},"firefox":{"2":"n","3":"n","4":"y","5":"y","6":"y","7":"y","8":"y","9":"y","10":"y","11":"y","12":"y","13":"y","14":"y","15":"y","16":"y","17":"y","18":"y","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","3.5":"y x","3.6":"y x"},"chrome":{"4":"y x","5":"y x","6":"y x","7":"y x","8":"y x","9":"y x","10":"y","11":"y","12":"y","13":"y","14":"y","15":"y","16":"y","17":"y","18":"y","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","51":"y","52":"y","53":"y","54":"y","55":"y"},"safari":{"4":"a x #1","5":"y x","6":"y","7":"y","8":"y","9":"y","10":"y","3.1":"a x #1","3.2":"a x #1","5.1":"y","6.1":"y","7.1":"y","9.1":"y","TP":"y"},"opera":{"9":"n","11":"y","12":"y","15":"y","16":"y","17":"y","18":"y","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","9.5-9.6":"n","10.0-10.1":"n","10.5":"y","10.6":"y","11.1":"y","11.5":"y","11.6":"y","12.1":"y"},"ios_saf":{"8":"y","3.2":"a x #1","4.0-4.1":"y x","4.2-4.3":"y x","5.0-5.1":"y","6.0-6.1":"y","7.0-7.1":"y","8.1-8.4":"y","9.0-9.2":"y","9.3":"y"},"op_mini":{"all":"n"},"android":{"3":"a x #1","4":"y","51":"y","2.1":"a x #1","2.2":"a x #1","2.3":"a x #1","4.1":"y","4.2-4.3":"y","4.4":"y","4.4.3-4.4.4":"y"},"bb":{"7":"y x","10":"y"},"op_mob":{"10":"n","11":"y","12":"y","37":"y","11.1":"y","11.5":"y","12.1":"y"},"and_chr":{"51":"y"},"and_ff":{"47":"y"},"ie_mob":{"10":"y","11":"y"},"and_uc":{"9.9":"y"},"samsung":{"4":"y"}};
var notes$2 = "Can be partially emulated in older IE versions using the non-standard \"shadow\" filter.";
var notes_by_num$2 = {"1":"Partial support in Safari, iOS Safari and Android Browser refers to missing \"inset\", blur radius value, and multiple shadow support."};
var usage_perc_y$2 = 92.51;
var usage_perc_a$2 = 0.04;
var ucprefix$2 = false;
var parent$2 = "";
var keywords$2 = "box-shadows,boxshadows,box shadow,shaow";
var ie_id$2 = "";
var chrome_id$2 = "";
var firefox_id$2 = "";
var webkit_id$2 = "";
var shown$2 = true;
var cssBoxshadow = {
	title: title$2,
	description: description$2,
	spec: spec$2,
	status: status$2,
	links: links$2,
	bugs: bugs$2,
	categories: categories$2,
	stats: stats$2,
	notes: notes$2,
	notes_by_num: notes_by_num$2,
	usage_perc_y: usage_perc_y$2,
	usage_perc_a: usage_perc_a$2,
	ucprefix: ucprefix$2,
	parent: parent$2,
	keywords: keywords$2,
	ie_id: ie_id$2,
	chrome_id: chrome_id$2,
	firefox_id: firefox_id$2,
	webkit_id: webkit_id$2,
	shown: shown$2
};

var require$$49$1 = Object.freeze({
	title: title$2,
	description: description$2,
	spec: spec$2,
	status: status$2,
	links: links$2,
	bugs: bugs$2,
	categories: categories$2,
	stats: stats$2,
	notes: notes$2,
	notes_by_num: notes_by_num$2,
	usage_perc_y: usage_perc_y$2,
	usage_perc_a: usage_perc_a$2,
	ucprefix: ucprefix$2,
	parent: parent$2,
	keywords: keywords$2,
	ie_id: ie_id$2,
	chrome_id: chrome_id$2,
	firefox_id: firefox_id$2,
	webkit_id: webkit_id$2,
	shown: shown$2,
	default: cssBoxshadow
});

var title$3 = "CSS Animation";
var description$3 = "Complex method of animating certain properties of an element";
var spec$3 = "http://www.w3.org/TR/css3-animations/";
var status$3 = "wd";
var links$3 = [{"url":"http://robertnyman.com/2010/05/06/css3-animations/","title":"Blog post on usage"},{"url":"http://www.css3files.com/animation/","title":"Information page"},{"url":"http://docs.webplatform.org/wiki/css/properties/animations","title":"WebPlatform Docs"}];
var bugs$3 = [{"description":"'animation-fill-mode' property is not supported in Android browser below 2.3."},{"description":"iOS 6.1 and below do not support animation on pseudo-elements. iOS 7 and higher are reported to have buggy behavior with animating pseudo-elements."},{"description":"@keyframes not supported in an inline or scoped stylesheet in Firefox (bug 830056)"},{"description":"In Chrome `animation-fill-mode backwards` is wrong if `steps(x, start)` is used [see example](http://codepen.io/Fyrd/pen/jPPKpX)."},{"description":"IE10 and IE11 do not support CSS keyframe blocks inside media queries. Must be defined outside of media query definitions. [example](http://codepen.io/anon/pen/ZOodVd)"},{"description":"IE10 and IE11 on Windows 7 have a bug where translate transform values are always interpreted as pixels when used in animations [test case](http://codepen.io/flxsource/pen/jPYWoE)"}];
var categories$3 = ["CSS3"];
var stats$3 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"y","11":"y","5.5":"n"},"edge":{"12":"y","13":"y","14":"y"},"firefox":{"2":"n","3":"n","4":"n","5":"y x","6":"y x","7":"y x","8":"y x","9":"y x","10":"y x","11":"y x","12":"y x","13":"y x","14":"y x","15":"y x","16":"y","17":"y","18":"y","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","3.5":"n","3.6":"n"},"chrome":{"4":"y x","5":"y x","6":"y x","7":"y x","8":"y x","9":"y x","10":"y x","11":"y x","12":"y x","13":"y x","14":"y x","15":"y x","16":"y x","17":"y x","18":"y x","19":"y x","20":"y x","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y x","27":"y x","28":"y x","29":"y x","30":"y x","31":"y x","32":"y x","33":"y x","34":"y x","35":"y x","36":"y x","37":"y x","38":"y x","39":"y x","40":"y x","41":"y x","42":"y x","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","51":"y","52":"y","53":"y","54":"y","55":"y"},"safari":{"4":"y x","5":"y x","6":"y x","7":"y x","8":"y x","9":"y","10":"y","3.1":"n","3.2":"n","5.1":"y x","6.1":"y x","7.1":"y x","9.1":"y","TP":"y"},"opera":{"9":"n","11":"n","12":"y x","15":"y x","16":"y x","17":"y x","18":"y x","19":"y x","20":"y x","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y x","27":"y x","28":"y x","29":"y x","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"y"},"ios_saf":{"8":"y x","3.2":"y x","4.0-4.1":"y x","4.2-4.3":"y x","5.0-5.1":"y x","6.0-6.1":"y x","7.0-7.1":"y x","8.1-8.4":"y x","9.0-9.2":"y","9.3":"y"},"op_mini":{"all":"n"},"android":{"3":"a x #1","4":"y x","51":"y","2.1":"a x #1","2.2":"a x #1","2.3":"a x #1","4.1":"y x","4.2-4.3":"y x","4.4":"y x","4.4.3-4.4.4":"y x"},"bb":{"7":"y x","10":"y x"},"op_mob":{"10":"n","11":"n","12":"n","37":"y","11.1":"n","11.5":"n","12.1":"y"},"and_chr":{"51":"y"},"and_ff":{"47":"y"},"ie_mob":{"10":"y","11":"y"},"and_uc":{"9.9":"y x"},"samsung":{"4":"y"}};
var notes$3 = "";
var notes_by_num$3 = {"1":"Partial support in Android browser refers to buggy behavior in different scenarios."};
var usage_perc_y$3 = 92;
var usage_perc_a$3 = 0.01;
var ucprefix$3 = false;
var parent$3 = "";
var keywords$3 = "animations,css-animations,animation-name,animation-duration,animation-delay,animation-timing-function,@keyframes,animationstart,animationend,animationiteration,css3 animation";
var ie_id$3 = "";
var chrome_id$3 = "";
var firefox_id$3 = "";
var webkit_id$3 = "";
var shown$3 = true;
var cssAnimation = {
	title: title$3,
	description: description$3,
	spec: spec$3,
	status: status$3,
	links: links$3,
	bugs: bugs$3,
	categories: categories$3,
	stats: stats$3,
	notes: notes$3,
	notes_by_num: notes_by_num$3,
	usage_perc_y: usage_perc_y$3,
	usage_perc_a: usage_perc_a$3,
	ucprefix: ucprefix$3,
	parent: parent$3,
	keywords: keywords$3,
	ie_id: ie_id$3,
	chrome_id: chrome_id$3,
	firefox_id: firefox_id$3,
	webkit_id: webkit_id$3,
	shown: shown$3
};

var require$$48$1 = Object.freeze({
	title: title$3,
	description: description$3,
	spec: spec$3,
	status: status$3,
	links: links$3,
	bugs: bugs$3,
	categories: categories$3,
	stats: stats$3,
	notes: notes$3,
	notes_by_num: notes_by_num$3,
	usage_perc_y: usage_perc_y$3,
	usage_perc_a: usage_perc_a$3,
	ucprefix: ucprefix$3,
	parent: parent$3,
	keywords: keywords$3,
	ie_id: ie_id$3,
	chrome_id: chrome_id$3,
	firefox_id: firefox_id$3,
	webkit_id: webkit_id$3,
	shown: shown$3,
	default: cssAnimation
});

var title$4 = "CSS3 Transitions";
var description$4 = "Simple method of animating certain properties of an element, with ability to define property, duration, delay and timing function. ";
var spec$4 = "http://www.w3.org/TR/css3-transitions/";
var status$4 = "wd";
var links$4 = [{"url":"http://www.webdesignerdepot.com/2010/01/css-transitions-101/","title":"Article on usage"},{"url":"http://www.css3files.com/transition/","title":"Information page"},{"url":"http://www.the-art-of-web.com/css/timing-function/","title":"Examples on timing functions"},{"url":"http://www.opera.com/docs/specs/presto2.12/css/transitions/","title":"Animation of property types support in Opera"},{"url":"http://docs.webplatform.org/wiki/css/properties/transition","title":"WebPlatform Docs"}];
var bugs$4 = [{"description":"Not supported on any pseudo-elements besides ::before and ::after for Firefox, Chrome 26+, Opera 16+ and IE10+."},{"description":"Transitionable properties with calc() derived values are not supported below and including IE11 (http://connect.microsoft.com/IE/feedback/details/762719/css3-calc-bug-inside-transition-or-transform)"},{"description":"'background-size' is not supported below and including IE10"},{"description":"IE11 [does not support](https://connect.microsoft.com/IE/feedbackdetail/view/920928/ie-11-css-transition-property-not-working-for-svg-elements) CSS transitions on the SVG `fill` property."},{"description":"In Chrome (up to 43.0), for transition-delay property, either explicitly specified or written within transition property, the unit cannot be ommitted even if the value is 0."},{"description":"IE10 & IE11 are reported to not support transitioning the `column-count` property."}];
var categories$4 = ["CSS3"];
var stats$4 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"y","11":"y","5.5":"n"},"edge":{"12":"y","13":"y","14":"y"},"firefox":{"2":"n","3":"n","4":"y x","5":"y x","6":"y x","7":"y x","8":"y x","9":"y x","10":"y x","11":"y x","12":"y x","13":"y x","14":"y x","15":"y x","16":"y","17":"y","18":"y","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","3.5":"n","3.6":"n"},"chrome":{"4":"y x","5":"y x","6":"y x","7":"y x","8":"y x","9":"y x","10":"y x","11":"y x","12":"y x","13":"y x","14":"y x","15":"y x","16":"y x","17":"y x","18":"y x","19":"y x","20":"y x","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","51":"y","52":"y","53":"y","54":"y","55":"y"},"safari":{"4":"y x","5":"y x","6":"y x","7":"y","8":"y","9":"y","10":"y","3.1":"y x","3.2":"y x","5.1":"y x","6.1":"y","7.1":"y","9.1":"y","TP":"y"},"opera":{"9":"n","11":"y x","12":"y x","15":"y","16":"y","17":"y","18":"y","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","9.5-9.6":"n","10.0-10.1":"n","10.5":"y x","10.6":"y x","11.1":"y x","11.5":"y x","11.6":"y x","12.1":"y"},"ios_saf":{"8":"y","3.2":"y x","4.0-4.1":"y x","4.2-4.3":"y x","5.0-5.1":"y x","6.0-6.1":"y x","7.0-7.1":"y","8.1-8.4":"y","9.0-9.2":"y","9.3":"y"},"op_mini":{"all":"n"},"android":{"3":"y x","4":"y x","51":"y","2.1":"y x","2.2":"y x","2.3":"y x","4.1":"y x","4.2-4.3":"y x","4.4":"y","4.4.3-4.4.4":"y"},"bb":{"7":"y x","10":"y"},"op_mob":{"10":"y x","11":"y x","12":"y x","37":"y","11.1":"y x","11.5":"y x","12.1":"y"},"and_chr":{"51":"y"},"and_ff":{"47":"y"},"ie_mob":{"10":"y","11":"y"},"and_uc":{"9.9":"y x"},"samsung":{"4":"y"}};
var notes$4 = "Support listed is for `transition` properties as well as the `transitionend` event. The prefixed name in WebKit browsers is `webkitTransitionEnd`";
var notes_by_num$4 = {};
var usage_perc_y$4 = 92.08;
var usage_perc_a$4 = 0;
var ucprefix$4 = false;
var parent$4 = "";
var keywords$4 = "css transition,transitionend,transition-property,transition-duration,transition-timing-function,transition-delay";
var ie_id$4 = "";
var chrome_id$4 = "";
var firefox_id$4 = "";
var webkit_id$4 = "";
var shown$4 = true;
var cssTransitions = {
	title: title$4,
	description: description$4,
	spec: spec$4,
	status: status$4,
	links: links$4,
	bugs: bugs$4,
	categories: categories$4,
	stats: stats$4,
	notes: notes$4,
	notes_by_num: notes_by_num$4,
	usage_perc_y: usage_perc_y$4,
	usage_perc_a: usage_perc_a$4,
	ucprefix: ucprefix$4,
	parent: parent$4,
	keywords: keywords$4,
	ie_id: ie_id$4,
	chrome_id: chrome_id$4,
	firefox_id: firefox_id$4,
	webkit_id: webkit_id$4,
	shown: shown$4
};

var require$$47$1 = Object.freeze({
	title: title$4,
	description: description$4,
	spec: spec$4,
	status: status$4,
	links: links$4,
	bugs: bugs$4,
	categories: categories$4,
	stats: stats$4,
	notes: notes$4,
	notes_by_num: notes_by_num$4,
	usage_perc_y: usage_perc_y$4,
	usage_perc_a: usage_perc_a$4,
	ucprefix: ucprefix$4,
	parent: parent$4,
	keywords: keywords$4,
	ie_id: ie_id$4,
	chrome_id: chrome_id$4,
	firefox_id: firefox_id$4,
	webkit_id: webkit_id$4,
	shown: shown$4,
	default: cssTransitions
});

var title$5 = "CSS3 2D Transforms";
var description$5 = "Method of transforming an element including rotating, scaling, etc. Includes support for `transform` as well as `transform-origin` properties.";
var spec$5 = "http://www.w3.org/TR/css3-2d-transforms/";
var status$5 = "wd";
var links$5 = [{"url":"http://www.westciv.com/tools/transforms/","title":"Live editor"},{"url":"https://developer.mozilla.org/en-US/docs/Web/CSS/transform","title":"MDN article"},{"url":"http://www.webresourcesdepot.com/cross-browser-css-transforms-csssandpaper/","title":"Workaround script for IE"},{"url":"http://www.css3files.com/transform/","title":"Information page"},{"url":"http://www.useragentman.com/IETransformsTranslator/","title":"Converter for IE"},{"url":"https://raw.github.com/phiggins42/has.js/master/detect/css.js#css-transform","title":"has.js test"},{"url":"http://docs.webplatform.org/wiki/css/transforms/transform","title":"WebPlatform Docs"}];
var bugs$5 = [{"description":"Scaling transforms in Android 2.3 fails to scale element background images."},{"description":"IE 10 and below does not support CSS transforms on SVG elements (though SVG transform attributes do work)."},{"description":"In IE9 the caret of a `textarea` disappears when you use translate."},{"description":"Firefox 42 and below do not support [`transform-origin` on SVG elements](https://bugzilla.mozilla.org/show_bug.cgi?id=923193). "}];
var categories$5 = ["CSS3"];
var stats$5 = {"ie":{"6":"p","7":"p","8":"p","9":"y x","10":"y","11":"y","5.5":"n"},"edge":{"12":"y","13":"y","14":"y"},"firefox":{"2":"n","3":"n","4":"y x","5":"y x","6":"y x","7":"y x","8":"y x","9":"y x","10":"y x","11":"y x","12":"y x","13":"y x","14":"y x","15":"y x","16":"y","17":"y","18":"y","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","3.5":"y x","3.6":"y x"},"chrome":{"4":"y x","5":"y x","6":"y x","7":"y x","8":"y x","9":"y x","10":"y x","11":"y x","12":"y x","13":"y x","14":"y x","15":"y x","16":"y x","17":"y x","18":"y x","19":"y x","20":"y x","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y x","27":"y x","28":"y x","29":"y x","30":"y x","31":"y x","32":"y x","33":"y x","34":"y x","35":"y x","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","51":"y","52":"y","53":"y","54":"y","55":"y"},"safari":{"4":"y x","5":"y x","6":"y x","7":"y x","8":"y x","9":"y","10":"y","3.1":"y x","3.2":"y x","5.1":"y x","6.1":"y x","7.1":"y x","9.1":"y","TP":"y"},"opera":{"9":"n","11":"y x","12":"y x","15":"y x","16":"y x","17":"y x","18":"y x","19":"y x","20":"y x","21":"y x","22":"y x","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","9.5-9.6":"n","10.0-10.1":"n","10.5":"y x","10.6":"y x","11.1":"y x","11.5":"y x","11.6":"y x","12.1":"y"},"ios_saf":{"8":"y x","3.2":"y x","4.0-4.1":"y x","4.2-4.3":"y x","5.0-5.1":"y x","6.0-6.1":"y x","7.0-7.1":"y x","8.1-8.4":"y x","9.0-9.2":"y","9.3":"y"},"op_mini":{"all":"n"},"android":{"3":"y x","4":"y x","51":"y","2.1":"y x","2.2":"y x","2.3":"y x","4.1":"y x","4.2-4.3":"y x","4.4":"y x","4.4.3-4.4.4":"y x"},"bb":{"7":"y x","10":"y x"},"op_mob":{"10":"n","11":"y","12":"y","37":"y","11.1":"y","11.5":"y","12.1":"y"},"and_chr":{"51":"y"},"and_ff":{"47":"y"},"ie_mob":{"10":"y","11":"y"},"and_uc":{"9.9":"y x"},"samsung":{"4":"y"}};
var notes$5 = "The scale transform can be emulated in IE < 9 using Microsoft's \"zoom\" extension, others are (not easily) possible using the MS Matrix filter";
var notes_by_num$5 = {};
var usage_perc_y$5 = 92.55;
var usage_perc_a$5 = 0;
var ucprefix$5 = false;
var parent$5 = "";
var keywords$5 = "transformation,translate,translatex,translatey,translatez,transform3d,rotation,rotate,scale,css-transforms,transform-origin,transform:rotate,transform:scale";
var ie_id$5 = "transforms";
var chrome_id$5 = "6437640580628480";
var firefox_id$5 = "";
var webkit_id$5 = "";
var shown$5 = true;
var transforms2d = {
	title: title$5,
	description: description$5,
	spec: spec$5,
	status: status$5,
	links: links$5,
	bugs: bugs$5,
	categories: categories$5,
	stats: stats$5,
	notes: notes$5,
	notes_by_num: notes_by_num$5,
	usage_perc_y: usage_perc_y$5,
	usage_perc_a: usage_perc_a$5,
	ucprefix: ucprefix$5,
	parent: parent$5,
	keywords: keywords$5,
	ie_id: ie_id$5,
	chrome_id: chrome_id$5,
	firefox_id: firefox_id$5,
	webkit_id: webkit_id$5,
	shown: shown$5
};

var require$$46$1 = Object.freeze({
	title: title$5,
	description: description$5,
	spec: spec$5,
	status: status$5,
	links: links$5,
	bugs: bugs$5,
	categories: categories$5,
	stats: stats$5,
	notes: notes$5,
	notes_by_num: notes_by_num$5,
	usage_perc_y: usage_perc_y$5,
	usage_perc_a: usage_perc_a$5,
	ucprefix: ucprefix$5,
	parent: parent$5,
	keywords: keywords$5,
	ie_id: ie_id$5,
	chrome_id: chrome_id$5,
	firefox_id: firefox_id$5,
	webkit_id: webkit_id$5,
	shown: shown$5,
	default: transforms2d
});

var title$6 = "CSS3 3D Transforms";
var description$6 = "Method of transforming an element in the third dimension using the `transform` property. Includes support for the `perspective` property to set the perspective in z-space and the `backface-visibility` property to toggle display of the reverse side of a 3D-transformed element.";
var spec$6 = "http://www.w3.org/TR/css3-3d-transforms/";
var status$6 = "wd";
var links$6 = [{"url":"http://css3.bradshawenterprises.com/flip/","title":"Multi-browser demo"},{"url":"http://hacks.mozilla.org/2011/10/css-3d-transformations-in-firefox-nightly/","title":"Mozilla hacks article"},{"url":"http://thewebrocks.com/demos/3D-css-tester/","title":"3D CSS Tester"},{"url":"https://raw.github.com/phiggins42/has.js/master/detect/css.js#css-transform","title":"has.js test"},{"url":"http://docs.webplatform.org/wiki/css/transforms/transform","title":"WebPlatform Docs"},{"url":"http://desandro.github.io/3dtransforms/","title":"Intro to CSS 3D transforms"}];
var bugs$6 = [{"description":"Some configurations of Linux and older Windows machines (those without WebGL support) have trouble with 3D transforms and will treat them as if `perspective` was set as `none`."},{"description":"Firefox on Windows [incorrectly renders plugin content within no-op 3D transforms](https://bugzilla.mozilla.org/show_bug.cgi?id=1048279)."},{"description":"The `perspective` property doesn't work on the `body` element in Firefox, it must be used on an inner element."},{"description":"Chrome has a (recently fixed) bug where combining `clip-path` and `backface-visibility` produces [visible noise](https://code.google.com/p/chromium/issues/detail?id=350724)."},{"description":"Transforms may break position:fixed styles of contained elements"}];
var categories$6 = ["CSS3"];
var stats$6 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"a #1","11":"a #1","5.5":"n"},"edge":{"12":"y","13":"y","14":"y"},"firefox":{"2":"n","3":"n","4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"y x","11":"y x","12":"y x","13":"y x","14":"y x","15":"y x","16":"y","17":"y","18":"y","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","3.5":"n","3.6":"n"},"chrome":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"y x","13":"y x","14":"y x","15":"y x","16":"y x","17":"y x","18":"y x","19":"y x","20":"y x","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y x","27":"y x","28":"y x","29":"y x","30":"y x","31":"y x","32":"y x","33":"y x","34":"y x","35":"y x","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","51":"y","52":"y","53":"y","54":"y","55":"y"},"safari":{"4":"y x","5":"y x","6":"y x","7":"y x","8":"y x","9":"y #2","10":"y #2","3.1":"n","3.2":"n","5.1":"y x","6.1":"y x","7.1":"y x","9.1":"y #2","TP":"y #2"},"opera":{"9":"n","11":"n","12":"n","15":"y x","16":"y x","17":"y x","18":"y x","19":"y x","20":"y x","21":"y x","22":"y x","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"n"},"ios_saf":{"8":"y x","3.2":"y x","4.0-4.1":"y x","4.2-4.3":"y x","5.0-5.1":"y x","6.0-6.1":"y x","7.0-7.1":"y x","8.1-8.4":"y x","9.0-9.2":"y","9.3":"y"},"op_mini":{"all":"n"},"android":{"3":"y x","4":"y x","51":"y","2.1":"n","2.2":"n","2.3":"n","4.1":"y x","4.2-4.3":"y x","4.4":"y x","4.4.3-4.4.4":"y x"},"bb":{"7":"y x","10":"y x"},"op_mob":{"10":"n","11":"n","12":"n","37":"y","11.1":"n","11.5":"n","12.1":"n"},"and_chr":{"51":"y"},"and_ff":{"47":"y"},"ie_mob":{"10":"a #1","11":"a #1"},"and_uc":{"9.9":"y x"},"samsung":{"4":"y"}};
var notes$6 = "";
var notes_by_num$6 = {"1":"Partial support in IE refers to not supporting [the transform-style: preserve-3d property](http://msdn.microsoft.com/en-us/library/ie/hh673529%28v=vs.85%29.aspx#the_ms_transform_style_property). This prevents nesting 3D transformed elements.","2":"Safari 9 is reported to still require a prefix for the related `backface-visibility` property."};
var usage_perc_y$6 = 85.68;
var usage_perc_a$6 = 6.04;
var ucprefix$6 = false;
var parent$6 = "";
var keywords$6 = "css 3d,3dtransforms,translate3d,backface visibility,perspective,transform-origin,transform-style";
var ie_id$6 = "transforms,csstransformspreserve3d";
var chrome_id$6 = "6437640580628480";
var firefox_id$6 = "";
var webkit_id$6 = "";
var shown$6 = true;
var transforms3d = {
	title: title$6,
	description: description$6,
	spec: spec$6,
	status: status$6,
	links: links$6,
	bugs: bugs$6,
	categories: categories$6,
	stats: stats$6,
	notes: notes$6,
	notes_by_num: notes_by_num$6,
	usage_perc_y: usage_perc_y$6,
	usage_perc_a: usage_perc_a$6,
	ucprefix: ucprefix$6,
	parent: parent$6,
	keywords: keywords$6,
	ie_id: ie_id$6,
	chrome_id: chrome_id$6,
	firefox_id: firefox_id$6,
	webkit_id: webkit_id$6,
	shown: shown$6
};

var require$$45 = Object.freeze({
	title: title$6,
	description: description$6,
	spec: spec$6,
	status: status$6,
	links: links$6,
	bugs: bugs$6,
	categories: categories$6,
	stats: stats$6,
	notes: notes$6,
	notes_by_num: notes_by_num$6,
	usage_perc_y: usage_perc_y$6,
	usage_perc_a: usage_perc_a$6,
	ucprefix: ucprefix$6,
	parent: parent$6,
	keywords: keywords$6,
	ie_id: ie_id$6,
	chrome_id: chrome_id$6,
	firefox_id: firefox_id$6,
	webkit_id: webkit_id$6,
	shown: shown$6,
	default: transforms3d
});

var title$7 = "CSS Gradients";
var description$7 = "Method of defining a linear or radial color gradient as a CSS image.";
var spec$7 = "http://www.w3.org/TR/css3-images/";
var status$7 = "cr";
var links$7 = [{"url":"http://www.colorzilla.com/gradient-editor/","title":"Cross-browser editor"},{"url":"http://www.css3files.com/gradient/","title":"Information page"},{"url":"http://css3pie.com/","title":"Tool to emulate support in IE"},{"url":"http://docs.webplatform.org/wiki/css/functions/linear-gradient","title":"WebPlatform Docs"}];
var bugs$7 = [];
var categories$7 = ["CSS3"];
var stats$7 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"y","11":"y","5.5":"n"},"edge":{"12":"y","13":"y","14":"y"},"firefox":{"2":"n","3":"n","4":"y x","5":"y x","6":"y x","7":"y x","8":"y x","9":"y x","10":"y x","11":"y x","12":"y x","13":"y x","14":"y x","15":"y x","16":"y","17":"y","18":"y","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","3.5":"n","3.6":"y x"},"chrome":{"4":"a x","5":"a x","6":"a x","7":"a x","8":"a x","9":"a x","10":"y x","11":"y x","12":"y x","13":"y x","14":"y x","15":"y x","16":"y x","17":"y x","18":"y x","19":"y x","20":"y x","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","51":"y","52":"y","53":"y","54":"y","55":"y"},"safari":{"4":"a x","5":"a x","6":"y x","7":"y","8":"y","9":"y","10":"y","3.1":"n","3.2":"n","5.1":"y x","6.1":"y","7.1":"y","9.1":"y","TP":"y"},"opera":{"9":"n","11":"n","12":"y x","15":"y","16":"y","17":"y","18":"y","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"a x #1","11.5":"a x #1","11.6":"y x","12.1":"y"},"ios_saf":{"8":"y","3.2":"a x","4.0-4.1":"a x","4.2-4.3":"a x","5.0-5.1":"y x","6.0-6.1":"y x","7.0-7.1":"y","8.1-8.4":"y","9.0-9.2":"y","9.3":"y"},"op_mini":{"all":"n"},"android":{"3":"a x","4":"y x","51":"y","2.1":"a x","2.2":"a x","2.3":"a x","4.1":"y x","4.2-4.3":"y x","4.4":"y","4.4.3-4.4.4":"y"},"bb":{"7":"a x","10":"y"},"op_mob":{"10":"n","11":"n","12":"y x","37":"y","11.1":"a x #1","11.5":"a x #1","12.1":"y"},"and_chr":{"51":"y"},"and_ff":{"47":"y"},"ie_mob":{"10":"y","11":"y"},"and_uc":{"9.9":"y x"},"samsung":{"4":"y"}};
var notes$7 = "Syntax used by browsers with prefixed support may be incompatible with that for proper support.\r\n\r\nSupport can be somewhat emulated in older IE versions using the non-standard \"gradient\" filter. \r\n\r\nFirefox 10+, Opera 11.6+, Chrome 26+ and IE10+ also support the new \"to (side)\" syntax.";
var notes_by_num$7 = {"1":"Partial support in Opera 11.10 and 11.50 also refers to only having support for linear gradients."};
var usage_perc_y$7 = 91.87;
var usage_perc_a$7 = 0.2;
var ucprefix$7 = false;
var parent$7 = "";
var keywords$7 = "linear,linear-gradient,gradiant";
var ie_id$7 = "gradients";
var chrome_id$7 = "5785905063264256";
var firefox_id$7 = "";
var webkit_id$7 = "";
var shown$7 = true;
var cssGradients = {
	title: title$7,
	description: description$7,
	spec: spec$7,
	status: status$7,
	links: links$7,
	bugs: bugs$7,
	categories: categories$7,
	stats: stats$7,
	notes: notes$7,
	notes_by_num: notes_by_num$7,
	usage_perc_y: usage_perc_y$7,
	usage_perc_a: usage_perc_a$7,
	ucprefix: ucprefix$7,
	parent: parent$7,
	keywords: keywords$7,
	ie_id: ie_id$7,
	chrome_id: chrome_id$7,
	firefox_id: firefox_id$7,
	webkit_id: webkit_id$7,
	shown: shown$7
};

var require$$44 = Object.freeze({
	title: title$7,
	description: description$7,
	spec: spec$7,
	status: status$7,
	links: links$7,
	bugs: bugs$7,
	categories: categories$7,
	stats: stats$7,
	notes: notes$7,
	notes_by_num: notes_by_num$7,
	usage_perc_y: usage_perc_y$7,
	usage_perc_a: usage_perc_a$7,
	ucprefix: ucprefix$7,
	parent: parent$7,
	keywords: keywords$7,
	ie_id: ie_id$7,
	chrome_id: chrome_id$7,
	firefox_id: firefox_id$7,
	webkit_id: webkit_id$7,
	shown: shown$7,
	default: cssGradients
});

var title$8 = "CSS3 Box-sizing";
var description$8 = "Method of specifying whether or not an element's borders and padding should be included in size units";
var spec$8 = "http://www.w3.org/TR/css3-ui/#box-sizing";
var status$8 = "cr";
var links$8 = [{"url":"https://developer.mozilla.org/En/CSS/Box-sizing","title":"MDN article"},{"url":"http://www.456bereastreet.com/archive/201104/controlling_width_with_css3_box-sizing/","title":"Blog post"},{"url":"https://github.com/Schepp/box-sizing-polyfill","title":"Polyfill for IE"},{"url":"http://css-tricks.com/box-sizing/","title":"CSS Tricks"},{"url":"http://docs.webplatform.org/wiki/css/properties/box-sizing","title":"WebPlatform Docs"}];
var bugs$8 = [{"description":"Android browsers do not calculate correctly the dimensions (width and height) of the HTML select element."},{"description":"Safari 6.0.x does not use box-sizing on elements with display: table;"},{"description":"IE9 will subtract the width of the scrollbar to the width of the element when set to position: absolute / fixed , overflow: auto / overflow-y: scroll"},{"description":"IE 8 ignores `box-sizing: border-box` if min/max-width/height is used."},{"description":"Chrome has problems selecting options from the `select` element when using `box-sizing: border-box` and browser zoom level is less than 100%."},{"description":"In IE8, the min-width property applies to `content-box` even if `box-sizing` is set to `border-box`."}];
var categories$8 = ["CSS3"];
var stats$8 = {"ie":{"6":"p","7":"p","8":"y","9":"y","10":"y","11":"y","5.5":"p"},"edge":{"12":"y","13":"y","14":"y"},"firefox":{"2":"y x","3":"y x","4":"y x","5":"y x","6":"y x","7":"y x","8":"y x","9":"y x","10":"y x","11":"y x","12":"y x","13":"y x","14":"y x","15":"y x","16":"y x","17":"y x","18":"y x","19":"y x","20":"y x","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y x","27":"y x","28":"y x","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","3.5":"y x","3.6":"y x"},"chrome":{"4":"y x","5":"y x","6":"y x","7":"y x","8":"y x","9":"y x","10":"y","11":"y","12":"y","13":"y","14":"y","15":"y","16":"y","17":"y","18":"y","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","51":"y","52":"y","53":"y","54":"y","55":"y"},"safari":{"4":"y x","5":"y x","6":"y","7":"y","8":"y","9":"y","10":"y","3.1":"y x","3.2":"y x","5.1":"y","6.1":"y","7.1":"y","9.1":"y","TP":"y"},"opera":{"9":"n","11":"y","12":"y","15":"y","16":"y","17":"y","18":"y","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","9.5-9.6":"y","10.0-10.1":"y","10.5":"y","10.6":"y","11.1":"y","11.5":"y","11.6":"y","12.1":"y"},"ios_saf":{"8":"y","3.2":"y x","4.0-4.1":"y x","4.2-4.3":"y x","5.0-5.1":"y","6.0-6.1":"y","7.0-7.1":"y","8.1-8.4":"y","9.0-9.2":"y","9.3":"y"},"op_mini":{"all":"y"},"android":{"3":"y x","4":"y","51":"y","2.1":"y x","2.2":"y x","2.3":"y x","4.1":"y","4.2-4.3":"y","4.4":"y","4.4.3-4.4.4":"y"},"bb":{"7":"y x","10":"y"},"op_mob":{"10":"y","11":"y","12":"y","37":"y","11.1":"y","11.5":"y","12.1":"y"},"and_chr":{"51":"y"},"and_ff":{"47":"y"},"ie_mob":{"10":"y","11":"y"},"and_uc":{"9.9":"y"},"samsung":{"4":"y"}};
var notes$8 = "Firefox currently also supports the `padding-box` in addition to `content-box` and `border-box`, though this value has been removed from the specification.";
var notes_by_num$8 = {};
var usage_perc_y$8 = 97.95;
var usage_perc_a$8 = 0;
var ucprefix$8 = false;
var parent$8 = "";
var keywords$8 = "border-box,content-box";
var ie_id$8 = "";
var chrome_id$8 = "";
var firefox_id$8 = "";
var webkit_id$8 = "";
var shown$8 = true;
var css3Boxsizing = {
	title: title$8,
	description: description$8,
	spec: spec$8,
	status: status$8,
	links: links$8,
	bugs: bugs$8,
	categories: categories$8,
	stats: stats$8,
	notes: notes$8,
	notes_by_num: notes_by_num$8,
	usage_perc_y: usage_perc_y$8,
	usage_perc_a: usage_perc_a$8,
	ucprefix: ucprefix$8,
	parent: parent$8,
	keywords: keywords$8,
	ie_id: ie_id$8,
	chrome_id: chrome_id$8,
	firefox_id: firefox_id$8,
	webkit_id: webkit_id$8,
	shown: shown$8
};

var require$$43$1 = Object.freeze({
	title: title$8,
	description: description$8,
	spec: spec$8,
	status: status$8,
	links: links$8,
	bugs: bugs$8,
	categories: categories$8,
	stats: stats$8,
	notes: notes$8,
	notes_by_num: notes_by_num$8,
	usage_perc_y: usage_perc_y$8,
	usage_perc_a: usage_perc_a$8,
	ucprefix: ucprefix$8,
	parent: parent$8,
	keywords: keywords$8,
	ie_id: ie_id$8,
	chrome_id: chrome_id$8,
	firefox_id: firefox_id$8,
	webkit_id: webkit_id$8,
	shown: shown$8,
	default: css3Boxsizing
});

var title$9 = "CSS Filter Effects";
var description$9 = "Method of applying filter effects (like blur, grayscale, brightness, contrast and hue) to elements, previously only possible by using SVG.";
var spec$9 = "http://www.w3.org/TR/filter-effects-1/";
var status$9 = "wd";
var links$9 = [{"url":"http://html5-demos.appspot.com/static/css/filters/index.html","title":"Demo file for WebKit browsers"},{"url":"http://www.html5rocks.com/en/tutorials/filters/understanding-css/","title":"HTML5Rocks article"},{"url":"http://dl.dropbox.com/u/3260327/angular/CSS3ImageManipulation.html","title":"Filter editor"},{"url":"http://bennettfeely.com/filters/","title":"Filter Playground"}];
var bugs$9 = [];
var categories$9 = ["CSS","CSS3"];
var stats$9 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","5.5":"n"},"edge":{"12":"n d #2 #4","13":"a #4","14":"a #4"},"firefox":{"2":"n","3":"n","4":"a #3","5":"a #3","6":"a #3","7":"a #3","8":"a #3","9":"a #3","10":"a #3","11":"a #3","12":"a #3","13":"a #3","14":"a #3","15":"a #3","16":"a #3","17":"a #3","18":"a #3","19":"a #3","20":"a #3","21":"a #3","22":"a #3","23":"a #3","24":"a #3","25":"a #3","26":"a #3","27":"a #3","28":"a #3","29":"a #3","30":"a #3","31":"a #3","32":"a #3","33":"a #3","34":"a d #1","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","3.5":"n","3.6":"a #3"},"chrome":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"y x","19":"y x","20":"y x","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y x","27":"y x","28":"y x","29":"y x","30":"y x","31":"y x","32":"y x","33":"y x","34":"y x","35":"y x","36":"y x","37":"y x","38":"y x","39":"y x","40":"y x","41":"y x","42":"y x","43":"y x","44":"y x","45":"y x","46":"y x","47":"y x","48":"y x","49":"y x","50":"y x","51":"y x","52":"y x","53":"y x","54":"y x","55":"y x"},"safari":{"4":"n","5":"n","6":"y x","7":"y x","8":"y x","9":"y x","10":"y","3.1":"n","3.2":"n","5.1":"n","6.1":"y x","7.1":"y x","9.1":"y","TP":"y"},"opera":{"9":"n","11":"n","12":"n","15":"y x","16":"y x","17":"y x","18":"y x","19":"y x","20":"y x","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y x","27":"y x","28":"y x","29":"y x","30":"y x","31":"y x","32":"y x","33":"y x","34":"y x","35":"y x","36":"y x","37":"y x","38":"y x","39":"y x","40":"y x","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"n"},"ios_saf":{"8":"y x","3.2":"n","4.0-4.1":"n","4.2-4.3":"n","5.0-5.1":"n","6.0-6.1":"y x","7.0-7.1":"y x","8.1-8.4":"y x","9.0-9.2":"y x","9.3":"y"},"op_mini":{"all":"n"},"android":{"3":"n","4":"n","51":"y x","2.1":"n","2.2":"n","2.3":"n","4.1":"n","4.2-4.3":"n","4.4":"y x","4.4.3-4.4.4":"y x"},"bb":{"7":"n","10":"y x"},"op_mob":{"10":"n","11":"n","12":"n","37":"y x","11.1":"n","11.5":"n","12.1":"n"},"and_chr":{"51":"y x"},"and_ff":{"47":"y"},"ie_mob":{"10":"n","11":"n"},"and_uc":{"9.9":"y x"},"samsung":{"4":"y x"}};
var notes$9 = "Note that this property is significantly different from and incompatible with Microsoft's [older \"filter\" property](http://msdn.microsoft.com/en-us/library/ie/ms530752%28v=vs.85%29.aspx).";
var notes_by_num$9 = {"1":"Supported in Firefox under the `layout.css.filters.enabled` flag.","2":"Supported in MS Edge under the \"Enable CSS filter property\" flag.","3":"Partial support in Firefox before version 34 [only implemented the url() function of the filter property](https://developer.mozilla.org/en-US/docs/Web/CSS/filter#Browser_compatibility)","4":"Partial support refers to supporting filter functions, but not the `url` function."};
var usage_perc_y$9 = 82.27;
var usage_perc_a$9 = 2.11;
var ucprefix$9 = false;
var parent$9 = "";
var keywords$9 = "sepia,hue-rotate,invert,saturate,filter:blur";
var ie_id$9 = "filters";
var chrome_id$9 = "5822463824887808";
var firefox_id$9 = "";
var webkit_id$9 = "";
var shown$9 = true;
var cssFilters = {
	title: title$9,
	description: description$9,
	spec: spec$9,
	status: status$9,
	links: links$9,
	bugs: bugs$9,
	categories: categories$9,
	stats: stats$9,
	notes: notes$9,
	notes_by_num: notes_by_num$9,
	usage_perc_y: usage_perc_y$9,
	usage_perc_a: usage_perc_a$9,
	ucprefix: ucprefix$9,
	parent: parent$9,
	keywords: keywords$9,
	ie_id: ie_id$9,
	chrome_id: chrome_id$9,
	firefox_id: firefox_id$9,
	webkit_id: webkit_id$9,
	shown: shown$9
};

var require$$42 = Object.freeze({
	title: title$9,
	description: description$9,
	spec: spec$9,
	status: status$9,
	links: links$9,
	bugs: bugs$9,
	categories: categories$9,
	stats: stats$9,
	notes: notes$9,
	notes_by_num: notes_by_num$9,
	usage_perc_y: usage_perc_y$9,
	usage_perc_a: usage_perc_a$9,
	ucprefix: ucprefix$9,
	parent: parent$9,
	keywords: keywords$9,
	ie_id: ie_id$9,
	chrome_id: chrome_id$9,
	firefox_id: firefox_id$9,
	webkit_id: webkit_id$9,
	shown: shown$9,
	default: cssFilters
});

var title$10 = "CSS filter() function";
var description$10 = "This function filters a CSS input image with a set of filter functions (like blur, grayscale or hue)";
var spec$10 = "http://www.w3.org/TR/filter-effects/#FilterCSSImageValue";
var status$10 = "wd";
var links$10 = [{"url":"http://iamvdo.me/en/blog/advanced-css-filters#filter","title":"Blog post"}];
var bugs$10 = [{"description":"Firefox feature request: [Mozilla bug #1191043](https://bugzilla.mozilla.org/show_bug.cgi?id=1191043)"}];
var categories$10 = ["CSS","CSS3"];
var stats$10 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","5.5":"n"},"edge":{"12":"n","13":"n","14":"u"},"firefox":{"2":"n","3":"n","4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n","35":"n","36":"n","37":"n","38":"n","39":"n","40":"n","41":"n","42":"n","43":"n","44":"n","45":"n","46":"n","47":"n","48":"n","49":"n","50":"n","3.5":"n","3.6":"n"},"chrome":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n","35":"n","36":"n","37":"n","38":"n","39":"n","40":"n","41":"n","42":"n","43":"n","44":"n","45":"n","46":"n","47":"n","48":"n","49":"n","50":"n","51":"n","52":"n","53":"n","54":"n","55":"n"},"safari":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"y x","10":"y","3.1":"n","3.2":"n","5.1":"n","6.1":"n","7.1":"n","9.1":"y","TP":"y"},"opera":{"9":"n","11":"n","12":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n","35":"n","36":"n","37":"n","38":"n","39":"n","40":"n","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"n"},"ios_saf":{"8":"n","3.2":"n","4.0-4.1":"n","4.2-4.3":"n","5.0-5.1":"n","6.0-6.1":"n","7.0-7.1":"n","8.1-8.4":"n","9.0-9.2":"y x","9.3":"y x"},"op_mini":{"all":"n"},"android":{"3":"n","4":"n","51":"n","2.1":"n","2.2":"n","2.3":"n","4.1":"n","4.2-4.3":"n","4.4":"n","4.4.3-4.4.4":"n"},"bb":{"7":"n","10":"n"},"op_mob":{"10":"n","11":"n","12":"n","37":"n","11.1":"n","11.5":"n","12.1":"n"},"and_chr":{"51":"n"},"and_ff":{"47":"n"},"ie_mob":{"10":"n","11":"n"},"and_uc":{"9.9":"n"},"samsung":{"4":"n"}};
var notes$10 = "";
var notes_by_num$10 = {};
var usage_perc_y$10 = 10.05;
var usage_perc_a$10 = 0;
var ucprefix$10 = false;
var parent$10 = "";
var keywords$10 = "filter, function";
var ie_id$10 = "cssfilterimagefunction";
var chrome_id$10 = "5425136400334848";
var firefox_id$10 = "";
var webkit_id$10 = "";
var shown$10 = true;
var cssFilterFunction = {
	title: title$10,
	description: description$10,
	spec: spec$10,
	status: status$10,
	links: links$10,
	bugs: bugs$10,
	categories: categories$10,
	stats: stats$10,
	notes: notes$10,
	notes_by_num: notes_by_num$10,
	usage_perc_y: usage_perc_y$10,
	usage_perc_a: usage_perc_a$10,
	ucprefix: ucprefix$10,
	parent: parent$10,
	keywords: keywords$10,
	ie_id: ie_id$10,
	chrome_id: chrome_id$10,
	firefox_id: firefox_id$10,
	webkit_id: webkit_id$10,
	shown: shown$10
};

var require$$41 = Object.freeze({
	title: title$10,
	description: description$10,
	spec: spec$10,
	status: status$10,
	links: links$10,
	bugs: bugs$10,
	categories: categories$10,
	stats: stats$10,
	notes: notes$10,
	notes_by_num: notes_by_num$10,
	usage_perc_y: usage_perc_y$10,
	usage_perc_a: usage_perc_a$10,
	ucprefix: ucprefix$10,
	parent: parent$10,
	keywords: keywords$10,
	ie_id: ie_id$10,
	chrome_id: chrome_id$10,
	firefox_id: firefox_id$10,
	webkit_id: webkit_id$10,
	shown: shown$10,
	default: cssFilterFunction
});

var title$11 = "CSS Backdrop Filter";
var description$11 = "Method of applying filter effects (like blur, grayscale or hue) to content/elements below the target element.";
var spec$11 = "http://dev.w3.org/fxtf/filters-2/#BackdropFilterProperty";
var status$11 = "unoff";
var links$11 = [{"url":"http://product.voxmedia.com/til/2015/2/17/8053347/css-ios-transparency-with-webkit-backdrop-filter","title":"Blog post"},{"url":"https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter","title":"Mozilla Developer Network"},{"url":"https://wpdev.uservoice.com/forums/257854-microsoft-edge-developer/suggestions/9160189-backdrop-filters","title":"Edge feature request"}];
var bugs$11 = [{"description":"Chrome feature request: [Chromium issue #497522](https://code.google.com/p/chromium/issues/detail?id=497522)"},{"description":"Firefox feature request: [Mozilla bug #1178765](https://bugzilla.mozilla.org/show_bug.cgi?id=1178765)"}];
var categories$11 = ["CSS","CSS3"];
var stats$11 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","5.5":"n"},"edge":{"12":"n","13":"n","14":"u"},"firefox":{"2":"n","3":"n","4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n","35":"n","36":"n","37":"n","38":"n","39":"n","40":"n","41":"n","42":"n","43":"n","44":"n","45":"n","46":"n","47":"n","48":"n","49":"n","50":"n","3.5":"n","3.6":"n"},"chrome":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n","35":"n","36":"n","37":"n","38":"n","39":"n","40":"n","41":"n","42":"n","43":"n","44":"n","45":"n","46":"n","47":"n d #1","48":"n d #1","49":"n d #1","50":"n d #1","51":"n d #1","52":"n d #1","53":"n d #1","54":"n d #1","55":"n d #1"},"safari":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"y x","10":"y x","3.1":"n","3.2":"n","5.1":"n","6.1":"n","7.1":"n","9.1":"y x","TP":"y x"},"opera":{"9":"n","11":"n","12":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n d #1","35":"n d #1","36":"n d #1","37":"n d #1","38":"n d #1","39":"n d #1","40":"n d #1","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"n"},"ios_saf":{"8":"n","3.2":"n","4.0-4.1":"n","4.2-4.3":"n","5.0-5.1":"n","6.0-6.1":"n","7.0-7.1":"n","8.1-8.4":"n","9.0-9.2":"y x","9.3":"y x"},"op_mini":{"all":"n"},"android":{"3":"n","4":"n","51":"n","2.1":"n","2.2":"n","2.3":"n","4.1":"n","4.2-4.3":"n","4.4":"n","4.4.3-4.4.4":"n"},"bb":{"7":"n","10":"n"},"op_mob":{"10":"n","11":"n","12":"n","37":"n d #1","11.1":"n","11.5":"n","12.1":"n"},"and_chr":{"51":"n d #1"},"and_ff":{"47":"n"},"ie_mob":{"10":"n","11":"n"},"and_uc":{"9.9":"n"},"samsung":{"4":"n"}};
var notes$11 = "";
var notes_by_num$11 = {"1":"Can be enabled via the \"Experimental Web Platform Features\" flag"};
var usage_perc_y$11 = 10.05;
var usage_perc_a$11 = 0;
var ucprefix$11 = false;
var parent$11 = "";
var keywords$11 = "blue,hue-rotate,invert,saturate,filter";
var ie_id$11 = "";
var chrome_id$11 = "";
var firefox_id$11 = "";
var webkit_id$11 = "feature-filter-effects-backdrop-filter-propery";
var shown$11 = true;
var cssBackdropFilter = {
	title: title$11,
	description: description$11,
	spec: spec$11,
	status: status$11,
	links: links$11,
	bugs: bugs$11,
	categories: categories$11,
	stats: stats$11,
	notes: notes$11,
	notes_by_num: notes_by_num$11,
	usage_perc_y: usage_perc_y$11,
	usage_perc_a: usage_perc_a$11,
	ucprefix: ucprefix$11,
	parent: parent$11,
	keywords: keywords$11,
	ie_id: ie_id$11,
	chrome_id: chrome_id$11,
	firefox_id: firefox_id$11,
	webkit_id: webkit_id$11,
	shown: shown$11
};

var require$$40 = Object.freeze({
	title: title$11,
	description: description$11,
	spec: spec$11,
	status: status$11,
	links: links$11,
	bugs: bugs$11,
	categories: categories$11,
	stats: stats$11,
	notes: notes$11,
	notes_by_num: notes_by_num$11,
	usage_perc_y: usage_perc_y$11,
	usage_perc_a: usage_perc_a$11,
	ucprefix: ucprefix$11,
	parent: parent$11,
	keywords: keywords$11,
	ie_id: ie_id$11,
	chrome_id: chrome_id$11,
	firefox_id: firefox_id$11,
	webkit_id: webkit_id$11,
	shown: shown$11,
	default: cssBackdropFilter
});

var title$12 = "CSS element() function";
var description$12 = "This function renders a live image generated from an arbitrary HTML element";
var spec$12 = "http://www.w3.org/TR/css4-images/#element-notation";
var status$12 = "wd";
var links$12 = [{"url":"https://developer.mozilla.org/en-US/docs/Web/CSS/element","title":"MDN page"}];
var bugs$12 = [{"description":"Chromium [bug #108972](https://code.google.com/p/chromium/issues/detail?id=108972)"},{"description":"WebKit [bug #44650](https://bugs.webkit.org/show_bug.cgi?id=44650)"}];
var categories$12 = ["CSS3"];
var stats$12 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","5.5":"n"},"edge":{"12":"n","13":"n","14":"u"},"firefox":{"2":"a x #1","3":"a x #1","4":"y x","5":"y x","6":"y x","7":"y x","8":"y x","9":"y x","10":"y x","11":"y x","12":"y x","13":"y x","14":"y x","15":"y x","16":"y x","17":"y x","18":"y x","19":"y x","20":"y x","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y x","27":"y x","28":"y x","29":"y x","30":"y x","31":"y x","32":"y x","33":"y x","34":"y x","35":"y x","36":"y x","37":"y x","38":"y x","39":"y x","40":"y x","41":"y x","42":"y x","43":"y x","44":"y x","45":"y x","46":"y x","47":"y x","48":"y x","49":"y x","50":"y x","3.5":"a x #1","3.6":"a x #1"},"chrome":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n","35":"n","36":"n","37":"n","38":"n","39":"n","40":"n","41":"n","42":"n","43":"n","44":"n","45":"n","46":"n","47":"n","48":"n","49":"n","50":"n","51":"n","52":"n","53":"n","54":"n","55":"n"},"safari":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","3.1":"n","3.2":"n","5.1":"n","6.1":"n","7.1":"n","9.1":"n","TP":"n"},"opera":{"9":"n","11":"n","12":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n","35":"n","36":"n","37":"n","38":"n","39":"n","40":"n","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"n"},"ios_saf":{"8":"n","3.2":"n","4.0-4.1":"n","4.2-4.3":"n","5.0-5.1":"n","6.0-6.1":"n","7.0-7.1":"n","8.1-8.4":"n","9.0-9.2":"n","9.3":"n"},"op_mini":{"all":"n"},"android":{"3":"n","4":"n","51":"n","2.1":"n","2.2":"n","2.3":"n","4.1":"n","4.2-4.3":"n","4.4":"n","4.4.3-4.4.4":"n"},"bb":{"7":"n","10":"n"},"op_mob":{"10":"n","11":"n","12":"n","37":"n","11.1":"n","11.5":"n","12.1":"n"},"and_chr":{"51":"n"},"and_ff":{"47":"y x"},"ie_mob":{"10":"n","11":"n"},"and_uc":{"9.9":"n"},"samsung":{"4":"n"}};
var notes$12 = "";
var notes_by_num$12 = {"1":"In Firefox < 4, usage limited to the background and background-image CSS properties"};
var usage_perc_y$12 = 8.19;
var usage_perc_a$12 = 0.1;
var ucprefix$12 = false;
var parent$12 = "";
var keywords$12 = "element, function";
var ie_id$12 = "";
var chrome_id$12 = "";
var firefox_id$12 = "";
var webkit_id$12 = "";
var shown$12 = true;
var cssElementFunction = {
	title: title$12,
	description: description$12,
	spec: spec$12,
	status: status$12,
	links: links$12,
	bugs: bugs$12,
	categories: categories$12,
	stats: stats$12,
	notes: notes$12,
	notes_by_num: notes_by_num$12,
	usage_perc_y: usage_perc_y$12,
	usage_perc_a: usage_perc_a$12,
	ucprefix: ucprefix$12,
	parent: parent$12,
	keywords: keywords$12,
	ie_id: ie_id$12,
	chrome_id: chrome_id$12,
	firefox_id: firefox_id$12,
	webkit_id: webkit_id$12,
	shown: shown$12
};

var require$$39$1 = Object.freeze({
	title: title$12,
	description: description$12,
	spec: spec$12,
	status: status$12,
	links: links$12,
	bugs: bugs$12,
	categories: categories$12,
	stats: stats$12,
	notes: notes$12,
	notes_by_num: notes_by_num$12,
	usage_perc_y: usage_perc_y$12,
	usage_perc_a: usage_perc_a$12,
	ucprefix: ucprefix$12,
	parent: parent$12,
	keywords: keywords$12,
	ie_id: ie_id$12,
	chrome_id: chrome_id$12,
	firefox_id: firefox_id$12,
	webkit_id: webkit_id$12,
	shown: shown$12,
	default: cssElementFunction
});

var title$13 = "CSS3 Multiple column layout";
var description$13 = "Method of flowing information in multiple columns";
var spec$13 = "http://www.w3.org/TR/css3-multicol/";
var status$13 = "cr";
var links$13 = [{"url":"https://dev.opera.com/articles/view/css3-multi-column-layout/","title":"Dev.Opera article"},{"url":"http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/an-introduction-to-the-css3-multiple-column-layout-module/","title":"Introduction page"},{"url":"http://docs.webplatform.org/wiki/css/properties/column-width","title":"WebPlatform Docs"},{"url":"https://github.com/hamsterbacke23/multicolumn-polyfill","title":"Polyfill"}];
var bugs$13 = [{"description":"In Firefox, the property `column-span` (or `-moz-column-span`) does not yet work. See [the bug](https://bugzilla.mozilla.org/show_bug.cgi?id=616436)."},{"description":"Chrome is reported to incorrectly calculate the container height, and often breaks on margins, padding, and can display 1px of the next column at the bottom of the previous column. Part of these issues can be solved by adding `-webkit-perspective:1;` to the column container. This creates a new stacking context for the container, and apparently causes chrome to (re)calculate column layout.\r\n"},{"description":"Browsers behave differently when flowing `ol` list numbers in columns: IE and Safari only show numbers for the first column. Chrome does not show any numbers. Only Firefox behaves as expected with numbers showing for all items."},{"description":"IE has been reported to incorrectly break on elements across columns when having more than 3 columns.\r\n"},{"description":"IE 10 has a bug where text-shadow doesn't work when used inside columns [see testcase](https://jsfiddle.net/0bwwrtda/)\r\n"},{"description":"Firefox does not split tables into columns"},{"description":"Firefox and Chrome do not support columns on the <fieldset> element [see bug](https://bugzilla.mozilla.org/show_bug.cgi?id=727164)"},{"description":"Safari 5-8 is known to render columns [less evenly](http://stackoverflow.com/questions/14148078/safari-column-count-differs-from-firefox-and-chrome) than other browsers"}];
var categories$13 = ["CSS3"];
var stats$13 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"y","11":"y","5.5":"n"},"edge":{"12":"y","13":"y","14":"y"},"firefox":{"2":"a x","3":"a x","4":"a x","5":"a x","6":"a x","7":"a x","8":"a x","9":"a x","10":"a x","11":"a x","12":"a x","13":"a x","14":"a x","15":"a x","16":"a x","17":"a x","18":"a x","19":"a x","20":"a x","21":"a x","22":"a x","23":"a x","24":"a x","25":"a x","26":"a x","27":"a x","28":"a x","29":"a x","30":"a x","31":"a x","32":"a x","33":"a x","34":"a x","35":"a x","36":"a x","37":"a x","38":"a x","39":"a x","40":"a x","41":"a x","42":"a x","43":"a x","44":"a x","45":"a x","46":"a x","47":"a x","48":"a x","49":"a x","50":"a x","3.5":"a x","3.6":"a x"},"chrome":{"4":"a x","5":"a x","6":"a x","7":"a x","8":"a x","9":"a x","10":"a x","11":"a x","12":"a x","13":"a x","14":"a x","15":"a x","16":"a x","17":"a x","18":"a x","19":"a x","20":"a x","21":"a x","22":"a x","23":"a x","24":"a x","25":"a x","26":"a x","27":"a x","28":"a x","29":"a x","30":"a x","31":"a x","32":"a x","33":"a x","34":"a x","35":"a x","36":"a x","37":"a x","38":"a x","39":"a x","40":"a x","41":"a x","42":"a x","43":"a x","44":"a x","45":"a x","46":"a x","47":"a x","48":"a x","49":"a x","50":"a","51":"a","52":"a","53":"a","54":"a","55":"a"},"safari":{"4":"a x","5":"a x","6":"a x","7":"a x","8":"a x","9":"a","10":"a","3.1":"a x","3.2":"a x","5.1":"a x","6.1":"a x","7.1":"a x","9.1":"a","TP":"a"},"opera":{"9":"n","11":"n","12":"y","15":"a x","16":"a x","17":"a x","18":"a x","19":"a x","20":"a x","21":"a x","22":"a x","23":"a x","24":"a x","25":"a x","26":"a x","27":"a x","28":"a x","29":"a x","30":"a x","31":"a x","32":"a x","33":"a x","34":"a x","35":"a x","36":"a x","37":"a","38":"a","39":"a","40":"a","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"y","11.5":"y","11.6":"y","12.1":"y"},"ios_saf":{"8":"a x","3.2":"a x","4.0-4.1":"a x","4.2-4.3":"a x","5.0-5.1":"a x","6.0-6.1":"a x","7.0-7.1":"a x","8.1-8.4":"a x","9.0-9.2":"a","9.3":"a"},"op_mini":{"all":"y"},"android":{"3":"a x","4":"a x","51":"a x","2.1":"a x","2.2":"a x","2.3":"a x","4.1":"a x","4.2-4.3":"a x","4.4":"a x","4.4.3-4.4.4":"a x"},"bb":{"7":"a x","10":"a x"},"op_mob":{"10":"n","11":"n","12":"y","37":"a x","11.1":"y","11.5":"y","12.1":"y"},"and_chr":{"51":"a"},"and_ff":{"47":"a x"},"ie_mob":{"10":"y","11":"y"},"and_uc":{"9.9":"a x"},"samsung":{"4":"a x"}};
var notes$13 = "Partial support refers to not supporting the `break-before`, `break-after`, `break-inside` properties. WebKit- and Blink-based browsers do have equivalent support for the non-standard `-webkit-column-break-*` properties to accomplish the same result (but only the `auto` and `always` values). Firefox does not support `break-*`.";
var notes_by_num$13 = {};
var usage_perc_y$13 = 12.36;
var usage_perc_a$13 = 84.49;
var ucprefix$13 = false;
var parent$13 = "";
var keywords$13 = "column-count,column-width,column-gap,column-rule,column-span,column-fill";
var ie_id$13 = "multicolumnfullsupport";
var chrome_id$13 = "6526151266664448,5630943616303104";
var firefox_id$13 = "";
var webkit_id$13 = "";
var shown$13 = true;
var multicolumn = {
	title: title$13,
	description: description$13,
	spec: spec$13,
	status: status$13,
	links: links$13,
	bugs: bugs$13,
	categories: categories$13,
	stats: stats$13,
	notes: notes$13,
	notes_by_num: notes_by_num$13,
	usage_perc_y: usage_perc_y$13,
	usage_perc_a: usage_perc_a$13,
	ucprefix: ucprefix$13,
	parent: parent$13,
	keywords: keywords$13,
	ie_id: ie_id$13,
	chrome_id: chrome_id$13,
	firefox_id: firefox_id$13,
	webkit_id: webkit_id$13,
	shown: shown$13
};

var require$$38$1 = Object.freeze({
	title: title$13,
	description: description$13,
	spec: spec$13,
	status: status$13,
	links: links$13,
	bugs: bugs$13,
	categories: categories$13,
	stats: stats$13,
	notes: notes$13,
	notes_by_num: notes_by_num$13,
	usage_perc_y: usage_perc_y$13,
	usage_perc_a: usage_perc_a$13,
	ucprefix: ucprefix$13,
	parent: parent$13,
	keywords: keywords$13,
	ie_id: ie_id$13,
	chrome_id: chrome_id$13,
	firefox_id: firefox_id$13,
	webkit_id: webkit_id$13,
	shown: shown$13,
	default: multicolumn
});

var title$14 = "CSS user-select: none";
var description$14 = "Method of preventing text/element selection using CSS. ";
var spec$14 = "https://drafts.csswg.org/css-ui-4/#valdef-user-select-none";
var status$14 = "wd";
var links$14 = [{"url":"https://developer.mozilla.org/en-US/docs/CSS/user-select","title":"MDN article"},{"url":"http://css-tricks.com/almanac/properties/u/user-select/","title":"CSS Tricks article"},{"url":"http://msdn.microsoft.com/en-us/library/ie/hh781492(v=vs.85).aspx","title":"MSDN Documentation"}];
var bugs$14 = [{"description":"iOS does not allow input elements to be focused (and thus prevents text input) when the element has `-webkit-user-select: none` set"},{"description":"Reported to not work in some manufacturer's versions of Android 4.0 and below, though confirmed to work in others."}];
var categories$14 = ["CSS"];
var stats$14 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"y x","11":"y x","5.5":"n"},"edge":{"12":"y x","13":"y x","14":"y x"},"firefox":{"2":"y x","3":"y x","4":"y x","5":"y x","6":"y x","7":"y x","8":"y x","9":"y x","10":"y x","11":"y x","12":"y x","13":"y x","14":"y x","15":"y x","16":"y x","17":"y x","18":"y x","19":"y x","20":"y x","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y x","27":"y x","28":"y x","29":"y x","30":"y x","31":"y x","32":"y x","33":"y x","34":"y x","35":"y x","36":"y x","37":"y x","38":"y x","39":"y x","40":"y x","41":"y x","42":"y x","43":"y x","44":"y x","45":"y x","46":"y x","47":"y x","48":"y x","49":"y x","50":"y x","3.5":"y x","3.6":"y x"},"chrome":{"4":"y x","5":"y x","6":"y x","7":"y x","8":"y x","9":"y x","10":"y x","11":"y x","12":"y x","13":"y x","14":"y x","15":"y x","16":"y x","17":"y x","18":"y x","19":"y x","20":"y x","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y x","27":"y x","28":"y x","29":"y x","30":"y x","31":"y x","32":"y x","33":"y x","34":"y x","35":"y x","36":"y x","37":"y x","38":"y x","39":"y x","40":"y x","41":"y x","42":"y x","43":"y x","44":"y x","45":"y x","46":"y x","47":"y x","48":"y x","49":"y x","50":"y x","51":"y x","52":"y x","53":"y x","54":"y x","55":"y x"},"safari":{"4":"y x","5":"y x","6":"y x","7":"y x","8":"y x","9":"y x","10":"y x","3.1":"y x","3.2":"y x","5.1":"y x","6.1":"y x","7.1":"y x","9.1":"y x","TP":"y x"},"opera":{"9":"n","11":"n","12":"n","15":"y x","16":"y x","17":"y x","18":"y x","19":"y x","20":"y x","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y x","27":"y x","28":"y x","29":"y x","30":"y x","31":"y x","32":"y x","33":"y x","34":"y x","35":"y x","36":"y x","37":"y x","38":"y x","39":"y x","40":"y x","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"n"},"ios_saf":{"8":"y x","3.2":"y x","4.0-4.1":"y x","4.2-4.3":"y x","5.0-5.1":"y x","6.0-6.1":"y x","7.0-7.1":"y x","8.1-8.4":"y x","9.0-9.2":"y x","9.3":"y x"},"op_mini":{"all":"n"},"android":{"3":"y x","4":"y x","51":"y x","2.1":"y x","2.2":"y x","2.3":"y x","4.1":"y x","4.2-4.3":"y x","4.4":"y x","4.4.3-4.4.4":"y x"},"bb":{"7":"y x","10":"y x"},"op_mob":{"10":"n","11":"n","12":"n","37":"y x","11.1":"n","11.5":"n","12.1":"n"},"and_chr":{"51":"y x"},"and_ff":{"47":"y x"},"ie_mob":{"10":"y x","11":"y x"},"and_uc":{"9.9":"y x"},"samsung":{"4":"y x"}};
var notes$14 = "";
var notes_by_num$14 = {};
var usage_perc_y$14 = 92.01;
var usage_perc_a$14 = 0;
var ucprefix$14 = false;
var parent$14 = "";
var keywords$14 = "";
var ie_id$14 = "";
var chrome_id$14 = "";
var firefox_id$14 = "";
var webkit_id$14 = "";
var shown$14 = true;
var userSelectNone = {
	title: title$14,
	description: description$14,
	spec: spec$14,
	status: status$14,
	links: links$14,
	bugs: bugs$14,
	categories: categories$14,
	stats: stats$14,
	notes: notes$14,
	notes_by_num: notes_by_num$14,
	usage_perc_y: usage_perc_y$14,
	usage_perc_a: usage_perc_a$14,
	ucprefix: ucprefix$14,
	parent: parent$14,
	keywords: keywords$14,
	ie_id: ie_id$14,
	chrome_id: chrome_id$14,
	firefox_id: firefox_id$14,
	webkit_id: webkit_id$14,
	shown: shown$14
};

var require$$37$1 = Object.freeze({
	title: title$14,
	description: description$14,
	spec: spec$14,
	status: status$14,
	links: links$14,
	bugs: bugs$14,
	categories: categories$14,
	stats: stats$14,
	notes: notes$14,
	notes_by_num: notes_by_num$14,
	usage_perc_y: usage_perc_y$14,
	usage_perc_a: usage_perc_a$14,
	ucprefix: ucprefix$14,
	parent: parent$14,
	keywords: keywords$14,
	ie_id: ie_id$14,
	chrome_id: chrome_id$14,
	firefox_id: firefox_id$14,
	webkit_id: webkit_id$14,
	shown: shown$14,
	default: userSelectNone
});

var title$15 = "Flexible Box Layout Module";
var description$15 = "Method of positioning elements in horizontal or vertical stacks. Support includes the support for the all properties prefixed with `flex` as well as `display: flex`, `display: inline-flex`, `align-content`, `align-items`, `align-self`, `justify-content` and `order`.";
var spec$15 = "http://www.w3.org/TR/css3-flexbox/";
var status$15 = "cr";
var links$15 = [{"url":"http://bennettfeely.com/flexplorer/","title":"Flexbox CSS generator"},{"url":"http://www.adobe.com/devnet/html5/articles/working-with-flexbox-the-new-spec.html","title":"Article on using the latest spec"},{"url":"https://dev.opera.com/articles/view/advanced-cross-browser-flexbox/","title":"Tutorial on cross-browser support"},{"url":"http://philipwalton.github.io/solved-by-flexbox/","title":"Examples on how to solve common layout problems with flexbox"},{"url":"http://css-tricks.com/snippets/css/a-guide-to-flexbox/","title":"A Complete Guide to Flexbox"},{"url":"http://the-echoplex.net/flexyboxes/","title":"Flexbox playground and code generator"},{"url":"https://github.com/philipwalton/flexbugs","title":"Flexbugs: Repo for flexbox bugs"},{"url":"https://github.com/10up/flexibility/","title":"10up Open Sources IE 8 and 9 Support for Flexbox"},{"url":"https://github.com/vadimyer/ecligrid","title":"Ecligrid - Mobile first flexbox grid system"}];
var bugs$15 = [{"description":"In IE10 the default value for `flex` is `0 0 auto` rather than `0 1 auto` as defined in the latest spec."},{"description":"In Safari, the height of (non flex) children are not recognized in percentages. However other browsers recognize and scale the children based on percentage heights. ([See bug](https://bugs.webkit.org/show_bug.cgi?id=137730)) The bug also appeared in Chrome but was fixed in [Chrome 51](http://crbug.com/341310)"},{"description":"Firefox does not support [Flexbox in button elements](https://bugzilla.mozilla.org/show_bug.cgi?id=984869#c2)"},{"description":"[Flexbugs](https://github.com/philipwalton/flexbugs): community-curated list of flexbox issues and cross-browser workarounds for them"},{"description":"In IE 10, setting `-ms-flex-flow: row wrap` will not wrap unless `display: inline-block` is set on child elements."},{"description":"IE 11 does not vertically align items correctly when `min-height` is used [see bug](https://connect.microsoft.com/IE/feedback/details/816293/ie11-flexbox-with-min-height-not-vertically-aligning-with-align-items-center)"},{"description":"In IE10 and IE11, containers with `display: flex` and `flex-direction: column` will not properly calculate their flexed childrens' sizes if the container has `min-height` but no explicit `height` property. [See bug](https://connect.microsoft.com/IE/feedback/details/802625/min-height-and-flexbox-flex-direction-column-dont-work-together-in-ie-10-11-preview)."},{"description":"IE 11 requires a unit to be added to the third argument, the flex-basis property [see MSFT documentation](https://msdn.microsoft.com/en-us/library/dn254946%28v=vs.85%29.aspx)"},{"description":"Safari uses min/max width/height declarations for actually rendering the size of flex items, but it ignores those values when calculating how many items should be on a single line of a multi-line flex container. Instead, it simply uses the item's flex-basis value, or its width if the flex basis is set to auto. [see bug](https://bugs.webkit.org/show_bug.cgi?id=136041)"}];
var categories$15 = ["CSS3"];
var stats$15 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"a x #2 #4","11":"a #4","5.5":"n"},"edge":{"12":"y","13":"y","14":"y"},"firefox":{"2":"a x #1","3":"a x #1","4":"a x #1","5":"a x #1","6":"a x #1","7":"a x #1","8":"a x #1","9":"a x #1","10":"a x #1","11":"a x #1","12":"a x #1","13":"a x #1","14":"a x #1","15":"a x #1","16":"a x #1","17":"a x #1","18":"a x #1","19":"a x #1","20":"a x #1","21":"a x #1","22":"a #3","23":"a #3","24":"a #3","25":"a #3","26":"a #3","27":"a #3","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","3.5":"a x #1","3.6":"a x #1"},"chrome":{"4":"a x #1","5":"a x #1","6":"a x #1","7":"a x #1","8":"a x #1","9":"a x #1","10":"a x #1","11":"a x #1","12":"a x #1","13":"a x #1","14":"a x #1","15":"a x #1","16":"a x #1","17":"a x #1","18":"a x #1","19":"a x #1","20":"a x #1","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y x","27":"y x","28":"y x","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","51":"y","52":"y","53":"y","54":"y","55":"y"},"safari":{"4":"a x #1","5":"a x #1","6":"a x #1","7":"y x","8":"y x","9":"y","10":"y","3.1":"a x #1","3.2":"a x #1","5.1":"a x #1","6.1":"y x","7.1":"y x","9.1":"y","TP":"y"},"opera":{"9":"n","11":"n","12":"n","15":"y x","16":"y x","17":"y","18":"y","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"y"},"ios_saf":{"8":"y x","3.2":"a x #1","4.0-4.1":"a x #1","4.2-4.3":"a x #1","5.0-5.1":"a x #1","6.0-6.1":"a x #1","7.0-7.1":"y x","8.1-8.4":"y x","9.0-9.2":"y","9.3":"y"},"op_mini":{"all":"y"},"android":{"3":"a x #1","4":"a x #1","51":"y","2.1":"a x #1","2.2":"a x #1","2.3":"a x #1","4.1":"a x #1","4.2-4.3":"a x #1","4.4":"y","4.4.3-4.4.4":"y"},"bb":{"7":"a x #1","10":"y"},"op_mob":{"10":"n","11":"n","12":"n","37":"y","11.1":"n","11.5":"n","12.1":"y"},"and_chr":{"51":"y"},"and_ff":{"47":"y"},"ie_mob":{"10":"a x #2","11":"y"},"and_uc":{"9.9":"a x #1"},"samsung":{"4":"y"}};
var notes$15 = "Most partial support refers to supporting an [older version](http://www.w3.org/TR/2009/WD-css3-flexbox-20090723/) of the specification or an [older syntax](http://www.w3.org/TR/2012/WD-css3-flexbox-20120322/).";
var notes_by_num$15 = {"1":"Only supports the [old flexbox](http://www.w3.org/TR/2009/WD-css3-flexbox-20090723) specification and does not support wrapping.","2":"Only supports the [2012 syntax](http://www.w3.org/TR/2012/WD-css3-flexbox-20120322/)","3":"Does not support flex-wrap or flex-flow properties","4":"Partial support is due to large amount of bugs present (see known issues)"};
var usage_perc_y$15 = 82.65;
var usage_perc_a$15 = 14.17;
var ucprefix$15 = false;
var parent$15 = "";
var keywords$15 = "flex-box,flex-direction,flex-wrap,flex-flow,flex-grow,flex-basis,display:flex,flex box";
var ie_id$15 = "flexbox";
var chrome_id$15 = "4837301406400512";
var firefox_id$15 = "";
var webkit_id$15 = "";
var shown$15 = true;
var flexbox = {
	title: title$15,
	description: description$15,
	spec: spec$15,
	status: status$15,
	links: links$15,
	bugs: bugs$15,
	categories: categories$15,
	stats: stats$15,
	notes: notes$15,
	notes_by_num: notes_by_num$15,
	usage_perc_y: usage_perc_y$15,
	usage_perc_a: usage_perc_a$15,
	ucprefix: ucprefix$15,
	parent: parent$15,
	keywords: keywords$15,
	ie_id: ie_id$15,
	chrome_id: chrome_id$15,
	firefox_id: firefox_id$15,
	webkit_id: webkit_id$15,
	shown: shown$15
};

var require$$36$1 = Object.freeze({
	title: title$15,
	description: description$15,
	spec: spec$15,
	status: status$15,
	links: links$15,
	bugs: bugs$15,
	categories: categories$15,
	stats: stats$15,
	notes: notes$15,
	notes_by_num: notes_by_num$15,
	usage_perc_y: usage_perc_y$15,
	usage_perc_a: usage_perc_a$15,
	ucprefix: ucprefix$15,
	parent: parent$15,
	keywords: keywords$15,
	ie_id: ie_id$15,
	chrome_id: chrome_id$15,
	firefox_id: firefox_id$15,
	webkit_id: webkit_id$15,
	shown: shown$15,
	default: flexbox
});

var title$16 = "calc() as CSS unit value";
var description$16 = "Method of allowing calculated values for length units, i.e. `width: calc(100% - 3em)`";
var spec$16 = "http://www.w3.org/TR/css3-values/#calc";
var status$16 = "cr";
var links$16 = [{"url":"http://hacks.mozilla.org/2010/06/css3-calc/","title":"Mozilla Hacks article"},{"url":"https://developer.mozilla.org/en/docs/Web/CSS/calc","title":"MDN article"},{"url":"http://docs.webplatform.org/wiki/css/functions/calc","title":"WebPlatform Docs"}];
var bugs$16 = [{"description":"IE10 crashes when a div with a property using `calc()` has a child with [same property with inherit](http://stackoverflow.com/questions/19423384/css-less-calc-method-is-crashing-my-ie10)."},{"description":"IE 9 - 11 don't render `box-shadow` when `calc()` is used for any of the values"},{"description":"IE10 and IE11 don't support using `calc()` inside a `transform`. [Bug report](https://connect.microsoft.com/IE/feedback/details/814380/)"},{"description":"Safari & iOS Safari (both 6 and 7) does not support viewport units (`vw`, `vh`, etc) in `calc()`."},{"description":"IE & Edge are reported to not support calc inside a 'flex'. (Not tested on older versions)\r\nThis example does not work: `flex: 1 1 calc(50% - 20px);`"},{"description":"Firefox does not support `calc()` inside the `line-height`, `stroke-width`, `stroke-dashoffset`, and `stroke-dasharray` properties. [Bug report](https://bugzilla.mozilla.org/show_bug.cgi?id=594933)"},{"description":"IE11 is reported to have trouble with `calc()` with nested expressions, e.g. `width: calc((100% - 10px) / 3);` (i.e. it rounds differently)"},{"description":"IE11 is reported to not support `calc()` correctly in [generated content](http://stackoverflow.com/questions/31323915/internet-explorer-incorrectly-calculates-percentage-height-for-generated-content)"},{"description":"IE11 does not support transitioning values set with `calc()`"}];
var categories$16 = ["CSS3"];
var stats$16 = {"ie":{"6":"n","7":"n","8":"n","9":"a #2","10":"y","11":"y","5.5":"n"},"edge":{"12":"y","13":"y","14":"y"},"firefox":{"2":"n","3":"n","4":"y x","5":"y x","6":"y x","7":"y x","8":"y x","9":"y x","10":"y x","11":"y x","12":"y x","13":"y x","14":"y x","15":"y x","16":"y","17":"y","18":"y","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","3.5":"n","3.6":"n"},"chrome":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"y x","20":"y x","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","51":"y","52":"y","53":"y","54":"y","55":"y"},"safari":{"4":"n","5":"n","6":"y x","7":"y","8":"y","9":"y","10":"y","3.1":"n","3.2":"n","5.1":"n","6.1":"y","7.1":"y","9.1":"y","TP":"y"},"opera":{"9":"n","11":"n","12":"n","15":"y","16":"y","17":"y","18":"y","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"n"},"ios_saf":{"8":"y","3.2":"n","4.0-4.1":"n","4.2-4.3":"n","5.0-5.1":"n","6.0-6.1":"y x","7.0-7.1":"y","8.1-8.4":"y","9.0-9.2":"y","9.3":"y"},"op_mini":{"all":"n"},"android":{"3":"n","4":"n","51":"y","2.1":"n","2.2":"n","2.3":"n","4.1":"n","4.2-4.3":"n","4.4":"a #1","4.4.3-4.4.4":"a #1"},"bb":{"7":"n","10":"y"},"op_mob":{"10":"n","11":"n","12":"n","37":"y","11.1":"n","11.5":"n","12.1":"n"},"and_chr":{"51":"y"},"and_ff":{"47":"y"},"ie_mob":{"10":"y","11":"y"},"and_uc":{"9.9":"n"},"samsung":{"4":"y"}};
var notes$16 = "Support can be somewhat emulated in older versions of IE using the non-standard `expression()` syntax.\r\n\r\nDue to the way browsers handle [sub-pixel rounding](http://ejohn.org/blog/sub-pixel-problems-in-css/) differently, layouts using `calc()` expressions may have unexpected results.";
var notes_by_num$16 = {"1":"Partial support in Android Browser 4.4 refers to the browser lacking the ability to multiply and divide values.","2":"Partial support in IE9 refers to the browser crashing when used as a `background-position` value."};
var usage_perc_y$16 = 81.2;
var usage_perc_a$16 = 3.06;
var ucprefix$16 = false;
var parent$16 = "";
var keywords$16 = "";
var ie_id$16 = "csscalc";
var chrome_id$16 = "5765241438732288";
var firefox_id$16 = "";
var webkit_id$16 = "";
var shown$16 = true;
var calc = {
	title: title$16,
	description: description$16,
	spec: spec$16,
	status: status$16,
	links: links$16,
	bugs: bugs$16,
	categories: categories$16,
	stats: stats$16,
	notes: notes$16,
	notes_by_num: notes_by_num$16,
	usage_perc_y: usage_perc_y$16,
	usage_perc_a: usage_perc_a$16,
	ucprefix: ucprefix$16,
	parent: parent$16,
	keywords: keywords$16,
	ie_id: ie_id$16,
	chrome_id: chrome_id$16,
	firefox_id: firefox_id$16,
	webkit_id: webkit_id$16,
	shown: shown$16
};

var require$$35$1 = Object.freeze({
	title: title$16,
	description: description$16,
	spec: spec$16,
	status: status$16,
	links: links$16,
	bugs: bugs$16,
	categories: categories$16,
	stats: stats$16,
	notes: notes$16,
	notes_by_num: notes_by_num$16,
	usage_perc_y: usage_perc_y$16,
	usage_perc_a: usage_perc_a$16,
	ucprefix: ucprefix$16,
	parent: parent$16,
	keywords: keywords$16,
	ie_id: ie_id$16,
	chrome_id: chrome_id$16,
	firefox_id: firefox_id$16,
	webkit_id: webkit_id$16,
	shown: shown$16,
	default: calc
});

var title$17 = "CSS3 Background-image options";
var description$17 = "New properties to affect background images, including background-clip, background-origin and background-size";
var spec$17 = "http://www.w3.org/TR/css3-background/#backgrounds";
var status$17 = "cr";
var links$17 = [{"url":"http://www.standardista.com/css3/css3-background-properties","title":"Detailed compatibility tables and demos"},{"url":"http://www.css3files.com/background/","title":"Information page"},{"url":"https://github.com/louisremi/background-size-polyfill","title":"Polyfill for IE7-8"}];
var bugs$17 = [{"description":"iOS Safari has buggy behavior with `background-size: cover;` on a page's body."},{"description":"iOS Safari has buggy behavior with `background-size: cover;` + `background-attachment: fixed;`"},{"description":"Safari (OS X and iOS) and Chrome do not support background-size: 100% <height>px; in combination with SVG images, it leaves them at the original size while other browsers stretch the vector image correctly while leaving the height at the specified number of pixels."},{"description":"Android 4.3 browser and below are reported to not support percentages in `background-size`"}];
var categories$17 = ["CSS3"];
var stats$17 = {"ie":{"6":"n","7":"n","8":"n","9":"y","10":"y","11":"y","5.5":"n"},"edge":{"12":"y","13":"y","14":"y"},"firefox":{"2":"n","3":"n","4":"y","5":"y","6":"y","7":"y","8":"y","9":"y","10":"y","11":"y","12":"y","13":"y","14":"y","15":"y","16":"y","17":"y","18":"y","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","3.5":"n","3.6":"a x"},"chrome":{"4":"a #3","5":"a #3","6":"a #3","7":"a #3","8":"a #3","9":"a #3","10":"a #3","11":"a #3","12":"a #3","13":"a #3","14":"a #3","15":"y","16":"y","17":"y","18":"y","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","51":"y","52":"y","53":"y","54":"y","55":"y"},"safari":{"4":"a #2 #3","5":"a #2 #3","6":"a #2 #3","7":"y","8":"y","9":"y","10":"y","3.1":"a #2 #3","3.2":"a #2 #3","5.1":"a #2 #3","6.1":"a #2 #3","7.1":"y","9.1":"y","TP":"y"},"opera":{"9":"n","11":"y","12":"y","15":"y","16":"y","17":"y","18":"y","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","9.5-9.6":"n","10.0-10.1":"a x","10.5":"y","10.6":"y","11.1":"y","11.5":"y","11.6":"y","12.1":"y"},"ios_saf":{"8":"y","3.2":"a","4.0-4.1":"a","4.2-4.3":"a","5.0-5.1":"a #3","6.0-6.1":"a","7.0-7.1":"y","8.1-8.4":"y","9.0-9.2":"y","9.3":"y"},"op_mini":{"all":"a #1"},"android":{"3":"a #3","4":"a #3","51":"y","2.1":"a x","2.2":"a x #3","2.3":"a x #3","4.1":"a #3","4.2-4.3":"a #3","4.4":"y","4.4.3-4.4.4":"y"},"bb":{"7":"y","10":"y"},"op_mob":{"10":"y","11":"y","12":"y","37":"y","11.1":"y","11.5":"y","12.1":"y"},"and_chr":{"51":"y"},"and_ff":{"47":"y"},"ie_mob":{"10":"y","11":"y"},"and_uc":{"9.9":"y"},"samsung":{"4":"y"}};
var notes$17 = "Safari also supports the unofficial `-webkit-background-clip: text` (only with prefix)";
var notes_by_num$17 = {"1":"Partial support in Opera Mini refers to not supporting background sizing or background attachments. However Opera Mini 7.5 supports background sizing (including cover and contain values).","2":"Partial support in Safari 6 refers to not supporting background sizing offset from edges syntax.","3":"Does not support `background-size` values in the `background` shorthand"};
var usage_perc_y$17 = 91.12;
var usage_perc_a$17 = 6.13;
var ucprefix$17 = false;
var parent$17 = "";
var keywords$17 = "";
var ie_id$17 = "";
var chrome_id$17 = "";
var firefox_id$17 = "";
var webkit_id$17 = "";
var shown$17 = true;
var backgroundImgOpts = {
	title: title$17,
	description: description$17,
	spec: spec$17,
	status: status$17,
	links: links$17,
	bugs: bugs$17,
	categories: categories$17,
	stats: stats$17,
	notes: notes$17,
	notes_by_num: notes_by_num$17,
	usage_perc_y: usage_perc_y$17,
	usage_perc_a: usage_perc_a$17,
	ucprefix: ucprefix$17,
	parent: parent$17,
	keywords: keywords$17,
	ie_id: ie_id$17,
	chrome_id: chrome_id$17,
	firefox_id: firefox_id$17,
	webkit_id: webkit_id$17,
	shown: shown$17
};

var require$$34$1 = Object.freeze({
	title: title$17,
	description: description$17,
	spec: spec$17,
	status: status$17,
	links: links$17,
	bugs: bugs$17,
	categories: categories$17,
	stats: stats$17,
	notes: notes$17,
	notes_by_num: notes_by_num$17,
	usage_perc_y: usage_perc_y$17,
	usage_perc_a: usage_perc_a$17,
	ucprefix: ucprefix$17,
	parent: parent$17,
	keywords: keywords$17,
	ie_id: ie_id$17,
	chrome_id: chrome_id$17,
	firefox_id: firefox_id$17,
	webkit_id: webkit_id$17,
	shown: shown$17,
	default: backgroundImgOpts
});

var title$18 = "CSS font-feature-settings";
var description$18 = "Method of applying advanced typographic and language-specific font features to supported OpenType fonts.";
var spec$18 = "http://w3.org/TR/css3-fonts/#font-rend-props";
var status$18 = "cr";
var links$18 = [{"url":"http://ie.microsoft.com/testdrive/Graphics/opentype/","title":"Demo pages (IE/Firefox only)"},{"url":"http://hacks.mozilla.org/2010/11/firefox-4-font-feature-support/","title":"Mozilla hacks article"},{"url":"http://html5accessibility.com/","title":"Detailed tables on accessability support"},{"url":"http://docs.webplatform.org/wiki/css/properties/font-feature-settings","title":"WebPlatform Docs"},{"url":"https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings","title":"Mozilla Developer Network"},{"url":"https://www.microsoft.com/typography/otspec/featuretags.htm","title":"OpenType layout feature tag registry"},{"url":"http://help.typekit.com/customer/portal/articles/1789736-syntax-for-opentype-features-in-css#salt","title":"Syntax for OpenType features in CSS (Adobe Typekit Help)"}];
var bugs$18 = [{"description":"IE10 and 11 do not always appear to support the `ss01` value correctly."},{"description":"IE10 and 11 on Windows 7 [can hide the text](http://stackoverflow.com/questions/22151835/msie-10-web-font-and-font-feature-settings-causes-invisible-text) under certain circumstances."}];
var categories$18 = ["CSS3"];
var stats$18 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"y","11":"y","5.5":"n"},"edge":{"12":"y","13":"y","14":"y"},"firefox":{"2":"n","3":"n","4":"a x #1","5":"a x #1","6":"a x #1","7":"a x #1","8":"a x #1","9":"a x #1","10":"a x #1","11":"a x #1","12":"a x #1","13":"a x #1","14":"a x #1","15":"y x","16":"y x","17":"y x","18":"y x","19":"y x","20":"y x","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y x","27":"y x","28":"y x","29":"y x","30":"y x","31":"y x","32":"y x","33":"y x","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","3.5":"n","3.6":"n"},"chrome":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"a x #2","17":"a x #2","18":"a x #2","19":"a x #2","20":"a x #2","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y x","27":"y x","28":"y x","29":"y x","30":"y x","31":"y x","32":"y x","33":"y x","34":"y x","35":"y x","36":"y x","37":"y x","38":"y x","39":"y x","40":"y x","41":"y x","42":"y x","43":"y x","44":"y x","45":"y x","46":"y x","47":"y x","48":"y","49":"y","50":"y","51":"y","52":"y","53":"y","54":"y","55":"y"},"safari":{"4":"a","5":"a","6":"a","7":"n","8":"n","9":"n","10":"y","3.1":"n","3.2":"n","5.1":"a","6.1":"n","7.1":"n","9.1":"y","TP":"y"},"opera":{"9":"n","11":"n","12":"n","15":"y x","16":"y x","17":"y x","18":"y x","19":"y x","20":"y x","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y x","27":"y x","28":"y x","29":"y x","30":"y x","31":"y x","32":"y x","33":"y x","34":"y x","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"n"},"ios_saf":{"8":"n","3.2":"a","4.0-4.1":"a","4.2-4.3":"a","5.0-5.1":"a","6.0-6.1":"a","7.0-7.1":"n","8.1-8.4":"n","9.0-9.2":"n","9.3":"y"},"op_mini":{"all":"n"},"android":{"3":"n","4":"n","51":"y","2.1":"n","2.2":"n","2.3":"n","4.1":"n","4.2-4.3":"n","4.4":"y x","4.4.3-4.4.4":"y x"},"bb":{"7":"n","10":"y x"},"op_mob":{"10":"n","11":"n","12":"n","37":"y","11.1":"n","11.5":"n","12.1":"n"},"and_chr":{"51":"y"},"and_ff":{"47":"y"},"ie_mob":{"10":"n","11":"n"},"and_uc":{"9.9":"y x"},"samsung":{"4":"y x"}};
var notes$18 = "Whenever possible, font-variant shorthand property or an associated longhand property, font-variant-ligatures, font-variant-caps, font-variant-east-asian, font-variant-alternates, font-variant-numeric or font-variant-position should be used. This property is a low-level feature designed to handle special cases where no other way to enable or access an OpenType font feature exists. In particular, this CSS property shouldn't be used to enable small caps.";
var notes_by_num$18 = {"1":"From Gecko 2.0 (Firefox 4.0) to Gecko 14.0 (Firefox 14.0) included, Gecko supported an older syntax, slightly different from the modern one: http://hacks.mozilla.org/2010/11/firefox-4-font-feature-support/","2":"Partial support in older Chrome versions refers to lacking support in Mac OS X."};
var usage_perc_y$18 = 87.12;
var usage_perc_a$18 = 0.41;
var ucprefix$18 = false;
var parent$18 = "";
var keywords$18 = "font-feature,font-feature-settings,kern,kerning,font-variant-alternates,ligatures,font-variant-ligatures";
var ie_id$18 = "";
var chrome_id$18 = "";
var firefox_id$18 = "";
var webkit_id$18 = "";
var shown$18 = true;
var fontFeature = {
	title: title$18,
	description: description$18,
	spec: spec$18,
	status: status$18,
	links: links$18,
	bugs: bugs$18,
	categories: categories$18,
	stats: stats$18,
	notes: notes$18,
	notes_by_num: notes_by_num$18,
	usage_perc_y: usage_perc_y$18,
	usage_perc_a: usage_perc_a$18,
	ucprefix: ucprefix$18,
	parent: parent$18,
	keywords: keywords$18,
	ie_id: ie_id$18,
	chrome_id: chrome_id$18,
	firefox_id: firefox_id$18,
	webkit_id: webkit_id$18,
	shown: shown$18
};

var require$$33$1 = Object.freeze({
	title: title$18,
	description: description$18,
	spec: spec$18,
	status: status$18,
	links: links$18,
	bugs: bugs$18,
	categories: categories$18,
	stats: stats$18,
	notes: notes$18,
	notes_by_num: notes_by_num$18,
	usage_perc_y: usage_perc_y$18,
	usage_perc_a: usage_perc_a$18,
	ucprefix: ucprefix$18,
	parent: parent$18,
	keywords: keywords$18,
	ie_id: ie_id$18,
	chrome_id: chrome_id$18,
	firefox_id: firefox_id$18,
	webkit_id: webkit_id$18,
	shown: shown$18,
	default: fontFeature
});

var title$19 = "CSS3 Border images";
var description$19 = "Method of using images for borders";
var spec$19 = "http://www.w3.org/TR/css3-background/#the-border-image";
var status$19 = "cr";
var links$19 = [{"url":"http://www.css3files.com/border/","title":"Information page"},{"url":"http://docs.webplatform.org/wiki/css/properties/border-image","title":"WebPlatform Docs"}];
var bugs$19 = [{"description":"Firefox is not able to stretch svg images across an element - [bug report](https://bugzilla.mozilla.org/show_bug.cgi?id=619500)."},{"description":"WebKit browsers have a different rendering with the `round` value from other browsers, stretching the border rather than repeating it in certain cases [see bug](https://bugs.webkit.org/show_bug.cgi?id=155955)."}];
var categories$19 = ["CSS3"];
var stats$19 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"n","11":"y","5.5":"n"},"edge":{"12":"y #1","13":"y #1","14":"y"},"firefox":{"2":"n","3":"n","4":"a x #2 #3","5":"a x #2 #3","6":"a x #2 #3","7":"a x #2 #3","8":"a x #2 #3","9":"a x #2 #3","10":"a x #2 #3","11":"a x #2 #3","12":"a x #2 #3","13":"a x #2 #3","14":"a x #2 #3","15":"a #2","16":"a #2","17":"a #2","18":"a #2","19":"a #2","20":"a #2","21":"a #2","22":"a #2","23":"a #2","24":"a #2","25":"a #2","26":"a #2","27":"a #2","28":"a #2","29":"a #2","30":"a #2","31":"a #2","32":"a #2","33":"a #2","34":"a #2","35":"a #2","36":"a #2","37":"a #2","38":"a #2","39":"a #2","40":"a #2","41":"a #2","42":"a #2","43":"a #2","44":"a #2","45":"a #2","46":"a #2","47":"a #2","48":"a #2","49":"a #2","50":"a #2","3.5":"a x #2 #3","3.6":"a x #2 #3"},"chrome":{"4":"a x #1 #2 #3 #4","5":"a x #1 #2 #3 #4","6":"a x #1 #2 #3 #4","7":"a x #1 #2 #3 #4","8":"a x #1 #2 #3 #4","9":"a x #1 #2 #3 #4","10":"a x #1 #2 #3 #4","11":"a x #1 #2 #3 #4","12":"a x #1 #2 #3 #4","13":"a x #1 #2 #3 #4","14":"a x #1 #2 #3 #4","15":"a #1 #2 #4","16":"a #1 #2 #4","17":"a #1 #2 #4","18":"a #1 #2 #4","19":"a #1 #2 #4","20":"a #1 #2 #4","21":"a #1 #2 #4","22":"a #1 #2 #4","23":"a #1 #2 #4","24":"a #1 #2 #4","25":"a #1 #2 #4","26":"a #1 #2 #4","27":"a #1 #2 #4","28":"a #1 #2 #4","29":"a #1 #2 #4","30":"a #1 #2","31":"a #1 #2","32":"a #1 #2","33":"a #1 #2","34":"a #1 #2","35":"a #1 #2","36":"a #1 #2","37":"a #1 #2","38":"a #1 #2","39":"a #1 #2","40":"a #1 #2","41":"a #1 #2","42":"a #1 #2","43":"a #1 #2","44":"a #1 #2","45":"a #1 #2","46":"a #1 #2","47":"a #1 #2","48":"a #1 #2","49":"a #1 #2","50":"a #1 #2","51":"a #2","52":"a #2","53":"a #2","54":"a #2","55":"a #2"},"safari":{"4":"a x #1 #2 #3 #4","5":"a x #1 #2 #3 #4","6":"a #1 #2 #4","7":"a #1 #2 #4","8":"a #1 #2 #4","9":"a #1 #2 #4","10":"y #1","3.1":"a x #1 #2 #3 #4","3.2":"a x #1 #2 #3 #4","5.1":"a x #1 #2 #3 #4","6.1":"a #1 #2 #4","7.1":"a #1 #2 #4","9.1":"y #1","TP":"y #1"},"opera":{"9":"n","11":"a x #2 #3 #4","12":"a x #2 #3 #4","15":"a #1 #2","16":"a #1 #2","17":"a #1 #2","18":"a #1 #2","19":"a #1 #2","20":"a #1 #2","21":"a #1 #2","22":"a #1 #2","23":"a #1 #2","24":"a #1 #2","25":"a #1 #2","26":"a #1 #2","27":"a #1 #2","28":"a #1 #2","29":"a #1 #2","30":"a #1 #2","31":"a #1 #2","32":"a #1 #2","33":"a #1 #2","34":"a #1 #2","35":"a #1 #2","36":"a #1 #2","37":"a #1 #2","38":"a #2","39":"a #2","40":"a #2","9.5-9.6":"n","10.0-10.1":"n","10.5":"a #2 #3 #4","10.6":"a #2 #3 #4","11.1":"a x #2 #3 #4","11.5":"a x #2 #3 #4","11.6":"a x #2 #3 #4","12.1":"a x #2 #3 #4"},"ios_saf":{"8":"a #1 #2 #4","3.2":"a x #1 #2 #3 #4","4.0-4.1":"a x #1 #2 #3 #4","4.2-4.3":"a x #1 #2 #3 #4","5.0-5.1":"a x #1 #2 #3 #4","6.0-6.1":"a #1 #2 #4","7.0-7.1":"a #1 #2 #4","8.1-8.4":"a #1 #2 #4","9.0-9.2":"a #1 #2 #4","9.3":"y #1"},"op_mini":{"all":"a x #2 #3 #4"},"android":{"3":"a #1 #2 #3 #4","4":"a #1 #2 #3 #4","51":"a #1 #2","2.1":"a #1 #2 #3 #4","2.2":"a #1 #2 #3 #4","2.3":"a #1 #2 #3 #4","4.1":"a #1 #2 #3 #4","4.2-4.3":"a #1 #2 #3 #4","4.4":"a #1 #2","4.4.3-4.4.4":"a #1 #2"},"bb":{"7":"a #1 #2 #3 #4","10":"a #1 #2 #4"},"op_mob":{"10":"n","11":"a x #2 #3 #4","12":"a x #2 #3 #4","37":"a #1 #2","11.1":"a x #2 #3 #4","11.5":"a x #2 #3 #4","12.1":"a x #2 #3 #4"},"and_chr":{"51":"a #2"},"and_ff":{"47":"a #2"},"ie_mob":{"10":"n","11":"y"},"and_uc":{"9.9":"a #1 #2"},"samsung":{"4":"a #1 #2"}};
var notes$19 = "Note that both the `border-style` and `border-width` must be specified (not set to `none` or 0) for border-images to work.";
var notes_by_num$19 = {"1":"Has a bug where `border-image` incorrectly overrides `border-style`. See [test case](http://codepen.io/Savago/pen/yYrgyK), [WebKit bug](https://bugs.webkit.org/show_bug.cgi?id=99922), [discussion](https://github.com/whatwg/compat/issues/17)","2":"Partial support refers to not supporting `border-image-repeat: space`","3":"Partial support refers to supporting the shorthand syntax, but not the individual properties (`border-image-source`, `border-image-slice`, etc). ","4":"Partial support refers to not supporting `border-image-repeat: round`"};
var usage_perc_y$19 = 15.6;
var usage_perc_a$19 = 80.61;
var ucprefix$19 = false;
var parent$19 = "";
var keywords$19 = "border-image-source,border-image-slice,border-image-repeat,border-image-width,,border-image-outset";
var ie_id$19 = "";
var chrome_id$19 = "";
var firefox_id$19 = "";
var webkit_id$19 = "";
var shown$19 = true;
var borderImage$2 = {
	title: title$19,
	description: description$19,
	spec: spec$19,
	status: status$19,
	links: links$19,
	bugs: bugs$19,
	categories: categories$19,
	stats: stats$19,
	notes: notes$19,
	notes_by_num: notes_by_num$19,
	usage_perc_y: usage_perc_y$19,
	usage_perc_a: usage_perc_a$19,
	ucprefix: ucprefix$19,
	parent: parent$19,
	keywords: keywords$19,
	ie_id: ie_id$19,
	chrome_id: chrome_id$19,
	firefox_id: firefox_id$19,
	webkit_id: webkit_id$19,
	shown: shown$19
};

var require$$32$1 = Object.freeze({
	title: title$19,
	description: description$19,
	spec: spec$19,
	status: status$19,
	links: links$19,
	bugs: bugs$19,
	categories: categories$19,
	stats: stats$19,
	notes: notes$19,
	notes_by_num: notes_by_num$19,
	usage_perc_y: usage_perc_y$19,
	usage_perc_a: usage_perc_a$19,
	ucprefix: ucprefix$19,
	parent: parent$19,
	keywords: keywords$19,
	ie_id: ie_id$19,
	chrome_id: chrome_id$19,
	firefox_id: firefox_id$19,
	webkit_id: webkit_id$19,
	shown: shown$19,
	default: borderImage$2
});

var title$20 = "::selection CSS pseudo-element";
var description$20 = "The ::selection CSS pseudo-element applies rules to the portion of a document that has been highlighted (e.g., selected with the mouse or another pointing device) by the user.";
var spec$20 = "http://www.w3.org/TR/css-pseudo-4/#selectordef-selection";
var status$20 = "wd";
var links$20 = [{"url":"http://quirksmode.org/css/selectors/selection.html","title":"::selection test"},{"url":"http://docs.webplatform.org/wiki/css/selectors/pseudo-elements/::selection","title":"WebPlatform Docs"}];
var bugs$20 = [{"description":"In Safari `::selection` styles do not work in combination with CSS multi-column."}];
var categories$20 = ["CSS"];
var stats$20 = {"ie":{"6":"n","7":"n","8":"n","9":"y","10":"y","11":"y","5.5":"n"},"edge":{"12":"y","13":"y","14":"y"},"firefox":{"2":"y x","3":"y x","4":"y x","5":"y x","6":"y x","7":"y x","8":"y x","9":"y x","10":"y x","11":"y x","12":"y x","13":"y x","14":"y x","15":"y x","16":"y x","17":"y x","18":"y x","19":"y x","20":"y x","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y x","27":"y x","28":"y x","29":"y x","30":"y x","31":"y x","32":"y x","33":"y x","34":"y x","35":"y x","36":"y x","37":"y x","38":"y x","39":"y x","40":"y x","41":"y x","42":"y x","43":"y x","44":"y x","45":"y x","46":"y x","47":"y x","48":"y x","49":"y x","50":"y x","3.5":"y x","3.6":"y x"},"chrome":{"4":"y","5":"y","6":"y","7":"y","8":"y","9":"y","10":"y","11":"y","12":"y","13":"y","14":"y","15":"y","16":"y","17":"y","18":"y","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","51":"y","52":"y","53":"y","54":"y","55":"y"},"safari":{"4":"y","5":"y","6":"y","7":"y","8":"y","9":"y","10":"y","3.1":"y","3.2":"y","5.1":"y","6.1":"y","7.1":"y","9.1":"y","TP":"y"},"opera":{"9":"n","11":"y","12":"y","15":"y","16":"y","17":"y","18":"y","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","9.5-9.6":"y","10.0-10.1":"y","10.5":"y","10.6":"y","11.1":"y","11.5":"y","11.6":"y","12.1":"y"},"ios_saf":{"8":"n","3.2":"n","4.0-4.1":"n","4.2-4.3":"n","5.0-5.1":"n","6.0-6.1":"n","7.0-7.1":"n","8.1-8.4":"n","9.0-9.2":"n","9.3":"n"},"op_mini":{"all":"n"},"android":{"3":"n","4":"n","51":"y","2.1":"n","2.2":"n","2.3":"n","4.1":"n","4.2-4.3":"n","4.4":"y","4.4.3-4.4.4":"y"},"bb":{"7":"n","10":"y"},"op_mob":{"10":"u","11":"u","12":"y","37":"y","11.1":"u","11.5":"y","12.1":"y"},"and_chr":{"51":"y"},"and_ff":{"47":"y x"},"ie_mob":{"10":"y","11":"y"},"and_uc":{"9.9":"n"},"samsung":{"4":"y"}};
var notes$20 = "";
var notes_by_num$20 = {};
var usage_perc_y$20 = 76.03;
var usage_perc_a$20 = 0;
var ucprefix$20 = false;
var parent$20 = "";
var keywords$20 = "::selection,selection";
var ie_id$20 = "";
var chrome_id$20 = "";
var firefox_id$20 = "";
var webkit_id$20 = "";
var shown$20 = true;
var cssSelection = {
	title: title$20,
	description: description$20,
	spec: spec$20,
	status: status$20,
	links: links$20,
	bugs: bugs$20,
	categories: categories$20,
	stats: stats$20,
	notes: notes$20,
	notes_by_num: notes_by_num$20,
	usage_perc_y: usage_perc_y$20,
	usage_perc_a: usage_perc_a$20,
	ucprefix: ucprefix$20,
	parent: parent$20,
	keywords: keywords$20,
	ie_id: ie_id$20,
	chrome_id: chrome_id$20,
	firefox_id: firefox_id$20,
	webkit_id: webkit_id$20,
	shown: shown$20
};

var require$$31$1 = Object.freeze({
	title: title$20,
	description: description$20,
	spec: spec$20,
	status: status$20,
	links: links$20,
	bugs: bugs$20,
	categories: categories$20,
	stats: stats$20,
	notes: notes$20,
	notes_by_num: notes_by_num$20,
	usage_perc_y: usage_perc_y$20,
	usage_perc_a: usage_perc_a$20,
	ucprefix: ucprefix$20,
	parent: parent$20,
	keywords: keywords$20,
	ie_id: ie_id$20,
	chrome_id: chrome_id$20,
	firefox_id: firefox_id$20,
	webkit_id: webkit_id$20,
	shown: shown$20,
	default: cssSelection
});

var title$21 = "::placeholder CSS pseudo-element";
var description$21 = "The ::placeholder pseudo-element represents placeholder text in an input field: text that represents the input and provides a hint to the user on how to fill out the form. For example, a date-input field might have the placeholder text `YYYY/MM/DD` to clarify that numeric dates are to be entered in year-month-day order.";
var spec$21 = "http://dev.w3.org/csswg/css-pseudo-4/#placeholder-pseudo";
var status$21 = "wd";
var links$21 = [{"url":"http://msdn.microsoft.com/en-us/library/ie/hh772745(v=vs.85).aspx","title":"MSDN article"},{"url":"http://css-tricks.com/snippets/css/style-placeholder-text/","title":"CSS-Tricks article with all prefixes"},{"url":"http://wiki.csswg.org/ideas/placeholder-styling","title":"CSSWG discussion"},{"url":"https://developer.mozilla.org/en-US/docs/Web/CSS/::-moz-placeholder","title":"MDN article"},{"url":"https://bugzilla.mozilla.org/show_bug.cgi?id=1069012","title":"Mozilla Bug 1069012 - unprefix :placeholder-shown pseudo-class and ::placeholder pseudo-element"}];
var bugs$21 = [];
var categories$21 = ["CSS"];
var stats$21 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"a x","11":"a x","5.5":"n"},"edge":{"12":"a x","13":"a x","14":"a x"},"firefox":{"2":"n","3":"n","4":"a x #1","5":"a x #1","6":"a x #1","7":"a x #1","8":"a x #1","9":"a x #1","10":"a x #1","11":"a x #1","12":"a x #1","13":"a x #1","14":"a x #1","15":"a x #1","16":"a x #1","17":"a x #1","18":"a x #1","19":"y x","20":"y x","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y x","27":"y x","28":"y x","29":"y x","30":"y x","31":"y x","32":"y x","33":"y x","34":"y x","35":"y x","36":"y x","37":"y x","38":"y x","39":"y x","40":"y x","41":"y x","42":"y x","43":"y x","44":"y x","45":"y x","46":"y x","47":"y x","48":"y x","49":"y x","50":"y x","3.5":"n","3.6":"n"},"chrome":{"4":"a x","5":"a x","6":"a x","7":"a x","8":"a x","9":"a x","10":"a x","11":"a x","12":"a x","13":"a x","14":"a x","15":"a x","16":"a x","17":"a x","18":"a x","19":"a x","20":"a x","21":"a x","22":"a x","23":"a x","24":"a x","25":"a x","26":"a x","27":"a x","28":"a x","29":"a x","30":"a x","31":"a x","32":"a x","33":"a x","34":"a x","35":"a x","36":"a x","37":"a x","38":"a x","39":"a x","40":"a x","41":"a x","42":"a x","43":"a x","44":"a x","45":"a x","46":"a x","47":"a x","48":"a x","49":"a x","50":"a x","51":"a x","52":"a x","53":"a x","54":"a x","55":"a x"},"safari":{"4":"n","5":"a x","6":"a x","7":"a x","8":"a x","9":"a x","10":"a x","3.1":"n","3.2":"n","5.1":"a x","6.1":"a x","7.1":"a x","9.1":"a x","TP":"y"},"opera":{"9":"n","11":"n","12":"n","15":"a x","16":"a x","17":"a x","18":"a x","19":"a x","20":"a x","21":"a x","22":"a x","23":"a x","24":"a x","25":"a x","26":"a x","27":"a x","28":"a x","29":"a x","30":"a x","31":"a x","32":"a x","33":"a x","34":"a x","35":"a x","36":"a x","37":"a x","38":"a x","39":"a x","40":"a x","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"n"},"ios_saf":{"8":"a x","3.2":"n","4.0-4.1":"n","4.2-4.3":"a x","5.0-5.1":"a x","6.0-6.1":"a x","7.0-7.1":"a x","8.1-8.4":"a x","9.0-9.2":"a x","9.3":"a x"},"op_mini":{"all":"n"},"android":{"3":"a x","4":"a x","51":"a x","2.1":"a x","2.2":"a x","2.3":"a x","4.1":"a x","4.2-4.3":"a x","4.4":"a x","4.4.3-4.4.4":"a x"},"bb":{"7":"a x","10":"a x"},"op_mob":{"10":"n","11":"n","12":"n","37":"a x","11.1":"n","11.5":"n","12.1":"n"},"and_chr":{"51":"a x"},"and_ff":{"47":"y x"},"ie_mob":{"10":"a x","11":"a x"},"and_uc":{"9.9":"a x"},"samsung":{"4":"a x"}};
var notes$21 = "Partial support refers to using alternate names:\r\n`::-webkit-input-placeholder` for Chrome/Safari/Opera ([Chrome issue #623345](https://bugs.chromium.org/p/chromium/issues/detail?id=623345))\r\n`:-ms-input-placeholder` for IE. \r\n`::-ms-input-placeholder` for Edge (also supports webkit prefix)";
var notes_by_num$21 = {"1":"Firefox 18 and below supported the `:-moz-placeholder` pseudo-class rather than the `::-moz-placeholder` pseudo-element."};
var usage_perc_y$21 = 7.95;
var usage_perc_a$21 = 83.93;
var ucprefix$21 = false;
var parent$21 = "";
var keywords$21 = "::placeholder,placeholder";
var ie_id$21 = "";
var chrome_id$21 = "";
var firefox_id$21 = "";
var webkit_id$21 = "";
var shown$21 = true;
var cssPlaceholder = {
	title: title$21,
	description: description$21,
	spec: spec$21,
	status: status$21,
	links: links$21,
	bugs: bugs$21,
	categories: categories$21,
	stats: stats$21,
	notes: notes$21,
	notes_by_num: notes_by_num$21,
	usage_perc_y: usage_perc_y$21,
	usage_perc_a: usage_perc_a$21,
	ucprefix: ucprefix$21,
	parent: parent$21,
	keywords: keywords$21,
	ie_id: ie_id$21,
	chrome_id: chrome_id$21,
	firefox_id: firefox_id$21,
	webkit_id: webkit_id$21,
	shown: shown$21
};

var require$$30$1 = Object.freeze({
	title: title$21,
	description: description$21,
	spec: spec$21,
	status: status$21,
	links: links$21,
	bugs: bugs$21,
	categories: categories$21,
	stats: stats$21,
	notes: notes$21,
	notes_by_num: notes_by_num$21,
	usage_perc_y: usage_perc_y$21,
	usage_perc_a: usage_perc_a$21,
	ucprefix: ucprefix$21,
	parent: parent$21,
	keywords: keywords$21,
	ie_id: ie_id$21,
	chrome_id: chrome_id$21,
	firefox_id: firefox_id$21,
	webkit_id: webkit_id$21,
	shown: shown$21,
	default: cssPlaceholder
});

var title$22 = "CSS Hyphenation";
var description$22 = "Method of controlling when words at the end of lines should be hyphenated using the \"hyphens\" property.";
var spec$22 = "http://www.w3.org/TR/css3-text/#hyphenation";
var status$22 = "wd";
var links$22 = [{"url":"https://developer.mozilla.org/en/CSS/hyphens","title":"MDN article"},{"url":"http://blog.fontdeck.com/post/9037028497/hyphens","title":"Blog post"},{"url":"http://docs.webplatform.org/wiki/css/properties/hyphens","title":"WebPlatform Docs"},{"url":"https://crbug.com/605840","title":"Chrome bug for implementing hyphenation"}];
var bugs$22 = [];
var categories$22 = ["CSS3"];
var stats$22 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"y x","11":"y x","5.5":"n"},"edge":{"12":"y x","13":"y x","14":"y x"},"firefox":{"2":"n","3":"n","4":"n","5":"n","6":"y x","7":"y x","8":"y x","9":"y x","10":"y x","11":"y x","12":"y x","13":"y x","14":"y x","15":"y x","16":"y x","17":"y x","18":"y x","19":"y x","20":"y x","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y x","27":"y x","28":"y x","29":"y x","30":"y x","31":"y x","32":"y x","33":"y x","34":"y x","35":"y x","36":"y x","37":"y x","38":"y x","39":"y x","40":"y x","41":"y x","42":"y x","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","3.5":"n","3.6":"n"},"chrome":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n","35":"n","36":"n","37":"n","38":"n","39":"n","40":"n","41":"n","42":"n","43":"n","44":"n","45":"n","46":"n","47":"n","48":"n","49":"n","50":"n","51":"n","52":"n","53":"n","54":"n","55":"n"},"safari":{"4":"n","5":"n","6":"y x","7":"y x","8":"y x","9":"y x","10":"y x","3.1":"n","3.2":"n","5.1":"y x","6.1":"y x","7.1":"y x","9.1":"y x","TP":"y x"},"opera":{"9":"n","11":"n","12":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n","35":"n","36":"n","37":"n","38":"n","39":"n","40":"n","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"n"},"ios_saf":{"8":"y x","3.2":"n","4.0-4.1":"n","4.2-4.3":"y x","5.0-5.1":"y x","6.0-6.1":"y x","7.0-7.1":"y x","8.1-8.4":"y x","9.0-9.2":"y x","9.3":"y x"},"op_mini":{"all":"n"},"android":{"3":"n","4":"n","51":"n","2.1":"n","2.2":"n","2.3":"n","4.1":"n","4.2-4.3":"n","4.4":"n","4.4.3-4.4.4":"n"},"bb":{"7":"n","10":"n"},"op_mob":{"10":"n","11":"n","12":"n","37":"n","11.1":"n","11.5":"n","12.1":"n"},"and_chr":{"51":"n"},"and_ff":{"47":"y"},"ie_mob":{"10":"n","11":"n"},"and_uc":{"9.9":"a x"},"samsung":{"4":"n"}};
var notes$22 = "Chrome and Android 4.0 Browser support \"-webkit-hyphens: none\", but not the \"auto\" property. It is [advisable to set the @lang attribute](http://blog.adrianroselli.com/2015/01/on-use-of-lang-attribute.html) on the HTML element to enable hyphenation support and improve accessibility.";
var notes_by_num$22 = {};
var usage_perc_y$22 = 26.16;
var usage_perc_a$22 = 6.65;
var ucprefix$22 = false;
var parent$22 = "";
var keywords$22 = "hyphen,shy";
var ie_id$22 = "";
var chrome_id$22 = "";
var firefox_id$22 = "";
var webkit_id$22 = "";
var shown$22 = true;
var cssHyphens = {
	title: title$22,
	description: description$22,
	spec: spec$22,
	status: status$22,
	links: links$22,
	bugs: bugs$22,
	categories: categories$22,
	stats: stats$22,
	notes: notes$22,
	notes_by_num: notes_by_num$22,
	usage_perc_y: usage_perc_y$22,
	usage_perc_a: usage_perc_a$22,
	ucprefix: ucprefix$22,
	parent: parent$22,
	keywords: keywords$22,
	ie_id: ie_id$22,
	chrome_id: chrome_id$22,
	firefox_id: firefox_id$22,
	webkit_id: webkit_id$22,
	shown: shown$22
};

var require$$29$1 = Object.freeze({
	title: title$22,
	description: description$22,
	spec: spec$22,
	status: status$22,
	links: links$22,
	bugs: bugs$22,
	categories: categories$22,
	stats: stats$22,
	notes: notes$22,
	notes_by_num: notes_by_num$22,
	usage_perc_y: usage_perc_y$22,
	usage_perc_a: usage_perc_a$22,
	ucprefix: ucprefix$22,
	parent: parent$22,
	keywords: keywords$22,
	ie_id: ie_id$22,
	chrome_id: chrome_id$22,
	firefox_id: firefox_id$22,
	webkit_id: webkit_id$22,
	shown: shown$22,
	default: cssHyphens
});

var title$23 = "Full Screen API";
var description$23 = "API for allowing content (like a video or canvas element) to take up the entire screen.";
var spec$23 = "https://fullscreen.spec.whatwg.org/";
var status$23 = "ls";
var links$23 = [{"url":"https://developer.mozilla.org/en/DOM/Using_full-screen_mode","title":"MDN article"},{"url":"http://jlongster.com/2011/11/21/canvas.html","title":"Blog post"},{"url":"http://hacks.mozilla.org/2012/01/using-the-fullscreen-api-in-web-browsers/","title":"Mozilla hacks article"},{"url":"http://docs.webplatform.org/wiki/dom/Element/requestFullscreen","title":"WebPlatform Docs"}];
var bugs$23 = [{"description":"IE 11 doesn't allow going to fullscreen mode when the event that triggers `msRequestFullscreen()` is a `keydown` or `pointerdown` event (`keypress` and `click` do work)"},{"description":"Safari blocks access to keyboard events in fullscreen mode (as a security measure)."},{"description":"Safari doesn't support stacking, meaning only one element can be set to full screen. `webkitRequestFullScreen()` is ignored for other elements and no error event is dispatched."},{"description":"IE 11 does not allow scrolling when document.documentElement is set to full screen."},{"description":"IE 11 does not properly support fullscreen when opening from an iframe."},{"description":"Opera 12.1 uses the older specificaton's `:fullscreen-ancestor` pseudo-class instead of the  the `::backdrop` pseudo-element."}];
var categories$23 = ["JS API"];
var stats$23 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"n","11":"a x #3","5.5":"n"},"edge":{"12":"a #3","13":"a #3","14":"a #3"},"firefox":{"2":"n","3":"n","4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"a x #1 #3","11":"a x #1 #3","12":"a x #1 #3","13":"a x #1 #3","14":"a x #1 #3","15":"a x #1 #3","16":"a x #1 #3","17":"a x #1 #3","18":"a x #1 #3","19":"a x #1 #3","20":"a x #1 #3","21":"a x #1 #3","22":"a x #1 #3","23":"a x #1 #3","24":"a x #1 #3","25":"a x #1 #3","26":"a x #1 #3","27":"a x #1 #3","28":"a x #1 #3","29":"a x #1 #3","30":"a x #1 #3","31":"a x #1 #3","32":"a x #1 #3","33":"a x #1 #3","34":"a x #1 #3","35":"a x #1 #3","36":"a x #1 #3","37":"a x #1 #3","38":"a x #1 #3","39":"a x #1 #3","40":"a x #1 #3","41":"a x #1 #3","42":"a x #1 #3","43":"a x #1 #3","44":"a x #1 #3","45":"a x #1 #3","46":"a x #1 #3","47":"a x #1 #3 #4","48":"a x #1 #3 #4","49":"a x #1 #3 #4","50":"a x #1 #3 #4","3.5":"n","3.6":"n"},"chrome":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"a x #1 #3","16":"a x #1 #3","17":"a x #1 #3","18":"a x #1 #3","19":"a x #1 #3","20":"a x #2 #3","21":"a x #2 #3","22":"a x #2 #3","23":"a x #2 #3","24":"a x #2 #3","25":"a x #2 #3","26":"a x #2 #3","27":"a x #2 #3","28":"a x #2 #3","29":"a x #2 #3","30":"a x #2 #3","31":"a x #2 #3","32":"a x #2 #3","33":"a x #2 #3","34":"a x #2 #3","35":"a x #2 #3","36":"a x #2 #3","37":"a x #2 #3","38":"a x #2 #3","39":"a x #2 #3","40":"a x #2 #3","41":"a x #2 #3","42":"a x #2 #3","43":"a x #2 #3","44":"a x #2 #3","45":"a x #2 #3","46":"a x #2 #3","47":"a x #2 #3","48":"a x #2 #3","49":"a x #2 #3","50":"a x #2 #3","51":"a x #2 #3","52":"a x #2 #3","53":"a x #2 #3","54":"a x #2 #3","55":"a x #2 #3"},"safari":{"4":"n","5":"n","6":"a x #2 #3","7":"a x #2 #3","8":"a x #2 #3","9":"a x #2 #3","10":"a x #2 #3","3.1":"n","3.2":"n","5.1":"a x #1 #3","6.1":"a x #2 #3","7.1":"a x #2 #3","9.1":"a x #2 #3","TP":"a x #2 #3"},"opera":{"9":"n","11":"n","12":"n","15":"a x #2 #3","16":"a x #2 #3","17":"a x #2 #3","18":"a x #2 #3","19":"a x #2 #3","20":"a x #2 #3","21":"a x #2 #3","22":"a x #2 #3","23":"a x #2 #3","24":"a x #2 #3","25":"a x #2 #3","26":"a x #2 #3","27":"a x #2 #3","28":"a x #2 #3","29":"a x #2 #3","30":"a x #2 #3","31":"a x #2 #3","32":"a x #2 #3","33":"a x #2 #3","34":"a x #2 #3","35":"a x #2 #3","36":"a x #2 #3","37":"a x #2 #3","38":"a x #2 #3","39":"a x #2 #3","40":"a x #2 #3","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"y"},"ios_saf":{"8":"n","3.2":"n","4.0-4.1":"n","4.2-4.3":"n","5.0-5.1":"n","6.0-6.1":"n","7.0-7.1":"n","8.1-8.4":"n","9.0-9.2":"n","9.3":"n"},"op_mini":{"all":"n"},"android":{"3":"n","4":"n","51":"n","2.1":"n","2.2":"n","2.3":"n","4.1":"n","4.2-4.3":"n","4.4":"n","4.4.3-4.4.4":"n"},"bb":{"7":"n","10":"a x #2"},"op_mob":{"10":"n","11":"n","12":"n","37":"a x #2 #3","11.1":"n","11.5":"n","12.1":"n"},"and_chr":{"51":"a x #2 #3"},"and_ff":{"47":"a x #1 #3 #4"},"ie_mob":{"10":"n","11":"a x #3"},"and_uc":{"9.9":"n"},"samsung":{"4":"a x #2 #3"}};
var notes$23 = "";
var notes_by_num$23 = {"1":"Partial support refers to supporting an earlier draft of the spec.","2":"Partial support refers to not supporting `::backdrop`, and supporting the old `:full-screen` syntax rather than the standard `:fullscreen`.","3":"Partial support refers to not returning a Promise, as specified in the latest version of the spec.","4":"Unprefixed support is available behind the `full-screen-api.unprefix.enabled` flag"};
var usage_perc_y$23 = 0.11;
var usage_perc_a$23 = 71.8;
var ucprefix$23 = false;
var parent$23 = "";
var keywords$23 = "full-screen";
var ie_id$23 = "fullscreenapi";
var chrome_id$23 = "5259513871466496";
var firefox_id$23 = "fullscreen";
var webkit_id$23 = "";
var shown$23 = true;
var fullscreen$2 = {
	title: title$23,
	description: description$23,
	spec: spec$23,
	status: status$23,
	links: links$23,
	bugs: bugs$23,
	categories: categories$23,
	stats: stats$23,
	notes: notes$23,
	notes_by_num: notes_by_num$23,
	usage_perc_y: usage_perc_y$23,
	usage_perc_a: usage_perc_a$23,
	ucprefix: ucprefix$23,
	parent: parent$23,
	keywords: keywords$23,
	ie_id: ie_id$23,
	chrome_id: chrome_id$23,
	firefox_id: firefox_id$23,
	webkit_id: webkit_id$23,
	shown: shown$23
};

var require$$28$1 = Object.freeze({
	title: title$23,
	description: description$23,
	spec: spec$23,
	status: status$23,
	links: links$23,
	bugs: bugs$23,
	categories: categories$23,
	stats: stats$23,
	notes: notes$23,
	notes_by_num: notes_by_num$23,
	usage_perc_y: usage_perc_y$23,
	usage_perc_a: usage_perc_a$23,
	ucprefix: ucprefix$23,
	parent: parent$23,
	keywords: keywords$23,
	ie_id: ie_id$23,
	chrome_id: chrome_id$23,
	firefox_id: firefox_id$23,
	webkit_id: webkit_id$23,
	shown: shown$23,
	default: fullscreen$2
});

var title$24 = "CSS3 tab-size";
var description$24 = "Method of customizing the width of the tab character. Only effective using 'white-space: pre' or 'white-space: pre-wrap'.";
var spec$24 = "http://www.w3.org/TR/css3-text/#tab-size";
var status$24 = "wd";
var links$24 = [{"url":"https://developer.mozilla.org/en-US/docs/Web/CSS/tab-size","title":"MDN article"},{"url":"https://wpdev.uservoice.com/forums/257854-microsoft-edge-developer/suggestions/6524689-tab-size-property","title":"Microsoft Edge feature request on UserVoice"}];
var bugs$24 = [{"description":"Firefox [does not yet](https://bugzilla.mozilla.org/show_bug.cgi?id=943918) support `<length>` values"}];
var categories$24 = ["CSS3"];
var stats$24 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","5.5":"n"},"edge":{"12":"n","13":"n","14":"u"},"firefox":{"2":"n","3":"n","4":"a x #1","5":"a x #1","6":"a x #1","7":"a x #1","8":"a x #1","9":"a x #1","10":"a x #1","11":"a x #1","12":"a x #1","13":"a x #1","14":"a x #1","15":"a x #1","16":"a x #1","17":"a x #1","18":"a x #1","19":"a x #1","20":"a x #1","21":"a x #1","22":"a x #1","23":"a x #1","24":"a x #1","25":"a x #1","26":"a x #1","27":"a x #1","28":"a x #1","29":"a x #1","30":"a x #1","31":"a x #1","32":"a x #1","33":"a x #1","34":"a x #1","35":"a x #1","36":"a x #1","37":"a x #1","38":"a x #1","39":"a x #1","40":"a x #1","41":"a x #1","42":"a x #1","43":"a x #1","44":"a x #1","45":"a x #1","46":"a x #1","47":"a x #1","48":"a x #1","49":"a x #1","50":"a x #1","3.5":"n","3.6":"n"},"chrome":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"a #1","22":"a #1","23":"a #1","24":"a #1","25":"a #1","26":"a #1","27":"a #1","28":"a #1","29":"a #1","30":"a #1","31":"a #1","32":"a #1","33":"a #1","34":"a #1","35":"a #1","36":"a #1","37":"a #1","38":"a #1","39":"a #1","40":"a #1","41":"a #1","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","51":"y","52":"y","53":"y","54":"y","55":"y"},"safari":{"4":"n","5":"n","6":"n","7":"a #1","8":"a #1","9":"a #1","10":"a #1","3.1":"n","3.2":"n","5.1":"n","6.1":"a #1","7.1":"a #1","9.1":"a #1","TP":"a #1"},"opera":{"9":"n","11":"a x #1","12":"a x #1","15":"a #1","16":"a #1","17":"a #1","18":"a #1","19":"a #1","20":"a #1","21":"a #1","22":"a #1","23":"a #1","24":"a #1","25":"a #1","26":"a #1","27":"a #1","28":"a #1","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"a x #1","11.1":"a x #1","11.5":"a x #1","11.6":"a x #1","12.1":"a x #1"},"ios_saf":{"8":"a #1","3.2":"n","4.0-4.1":"n","4.2-4.3":"n","5.0-5.1":"n","6.0-6.1":"n","7.0-7.1":"a #1","8.1-8.4":"a #1","9.0-9.2":"a #1","9.3":"a #1"},"op_mini":{"all":"a x #1"},"android":{"3":"n","4":"n","51":"a #1","2.1":"n","2.2":"n","2.3":"n","4.1":"n","4.2-4.3":"n","4.4":"a #1","4.4.3-4.4.4":"a #1"},"bb":{"7":"a #1","10":"a #1"},"op_mob":{"10":"n","11":"a x #1","12":"a x #1","37":"y","11.1":"a x #1","11.5":"a x #1","12.1":"a x #1"},"and_chr":{"51":"y"},"and_ff":{"47":"a x #1"},"ie_mob":{"10":"n","11":"n"},"and_uc":{"9.9":"n"},"samsung":{"4":"y"}};
var notes$24 = "";
var notes_by_num$24 = {"1":"Partial refers to supporting `<integer>` but not `<length>` values."};
var usage_perc_y$24 = 52.12;
var usage_perc_a$24 = 29.09;
var ucprefix$24 = false;
var parent$24 = "";
var keywords$24 = "tab-size,tab-width";
var ie_id$24 = "csstabsizeproperty";
var chrome_id$24 = "";
var firefox_id$24 = "";
var webkit_id$24 = "";
var shown$24 = true;
var css3Tabsize = {
	title: title$24,
	description: description$24,
	spec: spec$24,
	status: status$24,
	links: links$24,
	bugs: bugs$24,
	categories: categories$24,
	stats: stats$24,
	notes: notes$24,
	notes_by_num: notes_by_num$24,
	usage_perc_y: usage_perc_y$24,
	usage_perc_a: usage_perc_a$24,
	ucprefix: ucprefix$24,
	parent: parent$24,
	keywords: keywords$24,
	ie_id: ie_id$24,
	chrome_id: chrome_id$24,
	firefox_id: firefox_id$24,
	webkit_id: webkit_id$24,
	shown: shown$24
};

var require$$27$1 = Object.freeze({
	title: title$24,
	description: description$24,
	spec: spec$24,
	status: status$24,
	links: links$24,
	bugs: bugs$24,
	categories: categories$24,
	stats: stats$24,
	notes: notes$24,
	notes_by_num: notes_by_num$24,
	usage_perc_y: usage_perc_y$24,
	usage_perc_a: usage_perc_a$24,
	ucprefix: ucprefix$24,
	parent: parent$24,
	keywords: keywords$24,
	ie_id: ie_id$24,
	chrome_id: chrome_id$24,
	firefox_id: firefox_id$24,
	webkit_id: webkit_id$24,
	shown: shown$24,
	default: css3Tabsize
});

var title$25 = "Intrinsic & Extrinsic Sizing";
var description$25 = "Allows for the heights and widths to be specified in intrinsic values using the `fill`, `max-content`, `min-content`, and `fit-content` properties.";
var spec$25 = "http://www.w3.org/TR/css3-sizing/";
var status$25 = "wd";
var links$25 = [{"url":"http://demosthenes.info/blog/662/Design-From-the-Inside-Out-With-CSS-MinContent","title":"Min-Content tutorial"}];
var bugs$25 = [];
var categories$25 = ["CSS3"];
var stats$25 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","5.5":"n"},"edge":{"12":"n","13":"n","14":"u"},"firefox":{"2":"n","3":"a x #1 #2 #3","4":"a x #1 #2 #3","5":"a x #1 #2 #3","6":"a x #1 #2 #3","7":"a x #1 #2 #3","8":"a x #1 #2 #3","9":"a x #1 #2 #3","10":"a x #1 #2 #3","11":"a x #1 #2 #3","12":"a x #1 #2 #3","13":"a x #1 #2 #3","14":"a x #1 #2 #3","15":"a x #1 #2 #3","16":"a x #1 #2 #3","17":"a x #1 #2 #3","18":"a x #1 #2 #3","19":"a x #1 #2 #3","20":"a x #1 #2 #3","21":"a x #1 #2 #3","22":"a x #1 #2 #3","23":"a x #1 #2 #3","24":"a x #1 #2 #3","25":"a x #1 #2 #3","26":"a x #1 #2 #3","27":"a x #1 #2 #3","28":"a x #1 #2 #3","29":"a x #1 #2 #3","30":"a x #1 #2 #3","31":"a x #1 #2 #3","32":"a x #1 #2 #3","33":"a x #1 #2 #3","34":"a x #1 #2 #3","35":"a x #1 #2 #3","36":"a x #1 #2 #3","37":"a x #1 #2 #3","38":"a x #1 #2 #3","39":"a x #1 #2 #3","40":"a x #1 #2 #3","41":"a x #1 #2 #3","42":"a x #1 #2 #3","43":"a x #1 #2 #3","44":"a x #1 #2 #3","45":"a x #1 #2 #3","46":"a x #1 #2 #3","47":"a x #1 #2 #3","48":"a x #1 #2 #3","49":"a x #1 #2 #3","50":"a x #1 #2 #3","3.5":"a x #1 #2 #3","3.6":"a x #1 #2 #3"},"chrome":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"y x #3","23":"y x #3","24":"y x #3","25":"y x #3","26":"y x #3","27":"y x #3","28":"y x #3","29":"y x #3","30":"y x #3","31":"y x #3","32":"y x #3","33":"y x #3","34":"y x #3","35":"y x #3","36":"y x #3","37":"y x #3","38":"y x #3","39":"y x #3","40":"y x #3","41":"y x #3","42":"y x #3","43":"y x #3","44":"y x #3","45":"y x #3","46":"y #3 #4","47":"y #3 #4","48":"y #3 #4","49":"y #3 #4","50":"y #3 #4","51":"y #3 #4","52":"y #3 #4","53":"y #3 #4","54":"y #3 #4","55":"y #3 #4"},"safari":{"4":"n","5":"n","6":"n","7":"a x #1 #3","8":"a x #1 #3","9":"a x #3","10":"a x #3","3.1":"n","3.2":"n","5.1":"n","6.1":"a x #1 #3","7.1":"a x #1 #3","9.1":"a x #3","TP":"a x #3"},"opera":{"9":"n","11":"n","12":"n","15":"y x #3","16":"y x #3","17":"y x #3","18":"y x #3","19":"y x #3","20":"y x #3","21":"y x #3","22":"y x #3","23":"y x #3","24":"y x #3","25":"y x #3","26":"y x #3","27":"y x #3","28":"y x #3","29":"y x #3","30":"y x #3","31":"y x #3","32":"y x #3","33":"y #3 #4","34":"y #3","35":"y #3 #4","36":"y #3 #4","37":"y #3 #4","38":"y #3 #4","39":"y #3 #4","40":"y #3 #4","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"n"},"ios_saf":{"8":"a x #1 #3","3.2":"n","4.0-4.1":"n","4.2-4.3":"n","5.0-5.1":"n","6.0-6.1":"n","7.0-7.1":"a x #1 #3","8.1-8.4":"a x #1 #3","9.0-9.2":"a x #3","9.3":"a x #3"},"op_mini":{"all":"n"},"android":{"3":"n","4":"n","51":"y #3 #4","2.1":"n","2.2":"n","2.3":"n","4.1":"n","4.2-4.3":"n","4.4":"y x #3","4.4.3-4.4.4":"y x #3"},"bb":{"7":"n","10":"y x #3"},"op_mob":{"10":"n","11":"n","12":"n","37":"y #3 #4","11.1":"n","11.5":"n","12.1":"n"},"and_chr":{"51":"y #3 #4"},"and_ff":{"47":"a x #1 #2 #3"},"ie_mob":{"10":"n","11":"n"},"and_uc":{"9.9":"n"},"samsung":{"4":"y x #3"}};
var notes$25 = "Prefixes are on the values, not the property names (e.g. -webkit-min-content)\r\n\r\nOlder webkit browsers also support the unofficial `intrinsic` value which acts the same as `max-content`.";
var notes_by_num$25 = {"1":"Does not support for height/min-height/max-height property, only width. [see test case](http://codepen.io/shshaw/pen/Kiwaz) [Firefox bug](https://bugzilla.mozilla.org/show_bug.cgi?id=567039)","2":"Firefox currently supports the \"-moz-available\" property rather than \"-moz-fill\".","3":"Does not support for \"flex-basis\" property. [see specs](http://www.w3.org/TR/2015/WD-css-flexbox-1-20150514/#flex-basis-property).\r\n[Blink bug](https://codereview.chromium.org/1304853002/),[Firefox bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1055887)","4":"This does not yet unprefix fill-available (aka fill)[See bug](https://chromium.googlesource.com/chromium/blink.git/+/bf119cdfece210e69c9a99af06f1b9981e2a1bc2), because the [CSSWG](https://lists.w3.org/Archives/Public/www-style/2015Aug/0127.html) is not ready for that yet."};
var usage_perc_y$25 = 56.96;
var usage_perc_a$25 = 19.37;
var ucprefix$25 = false;
var parent$25 = "";
var keywords$25 = "fill,fill-available,max-content,min-content,fit-content,contain-floats,intrinsic,extrinsic,sizing";
var ie_id$25 = "cssintrinsicsizing";
var chrome_id$25 = "5901353784180736";
var firefox_id$25 = "";
var webkit_id$25 = "";
var shown$25 = true;
var intrinsicWidth = {
	title: title$25,
	description: description$25,
	spec: spec$25,
	status: status$25,
	links: links$25,
	bugs: bugs$25,
	categories: categories$25,
	stats: stats$25,
	notes: notes$25,
	notes_by_num: notes_by_num$25,
	usage_perc_y: usage_perc_y$25,
	usage_perc_a: usage_perc_a$25,
	ucprefix: ucprefix$25,
	parent: parent$25,
	keywords: keywords$25,
	ie_id: ie_id$25,
	chrome_id: chrome_id$25,
	firefox_id: firefox_id$25,
	webkit_id: webkit_id$25,
	shown: shown$25
};

var require$$26$1 = Object.freeze({
	title: title$25,
	description: description$25,
	spec: spec$25,
	status: status$25,
	links: links$25,
	bugs: bugs$25,
	categories: categories$25,
	stats: stats$25,
	notes: notes$25,
	notes_by_num: notes_by_num$25,
	usage_perc_y: usage_perc_y$25,
	usage_perc_a: usage_perc_a$25,
	ucprefix: ucprefix$25,
	parent: parent$25,
	keywords: keywords$25,
	ie_id: ie_id$25,
	chrome_id: chrome_id$25,
	firefox_id: firefox_id$25,
	webkit_id: webkit_id$25,
	shown: shown$25,
	default: intrinsicWidth
});

var title$26 = "CSS3 Cursors: zoom-in & zoom-out";
var description$26 = "Support for `zoom-in`, `zoom-out` values for the CSS3 `cursor` property.";
var spec$26 = "http://www.w3.org/TR/css3-ui/#cursor";
var status$26 = "cr";
var links$26 = [{"url":"https://developer.mozilla.org/en-US/docs/Web/CSS/cursor","title":"MDN Documentation"}];
var bugs$26 = [];
var categories$26 = ["CSS3"];
var stats$26 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","5.5":"n"},"edge":{"12":"y","13":"y","14":"y"},"firefox":{"2":"y x","3":"y x","4":"y x","5":"y x","6":"y x","7":"y x","8":"y x","9":"y x","10":"y x","11":"y x","12":"y x","13":"y x","14":"y x","15":"y x","16":"y x","17":"y x","18":"y x","19":"y x","20":"y x","21":"y x","22":"y x","23":"y x","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","3.5":"y x","3.6":"y x"},"chrome":{"4":"y x","5":"y x","6":"y x","7":"y x","8":"y x","9":"y x","10":"y x","11":"y x","12":"y x","13":"y x","14":"y x","15":"y x","16":"y x","17":"y x","18":"y x","19":"y x","20":"y x","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y x","27":"y x","28":"y x","29":"y x","30":"y x","31":"y x","32":"y x","33":"y x","34":"y x","35":"y x","36":"y x","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","51":"y","52":"y","53":"y","54":"y","55":"y"},"safari":{"4":"y x","5":"y x","6":"y x","7":"y x","8":"y x","9":"y","10":"y","3.1":"y x","3.2":"y x","5.1":"y x","6.1":"y x","7.1":"y x","9.1":"y","TP":"y"},"opera":{"9":"n","11":"n","12":"y","15":"y x","16":"y x","17":"y x","18":"y x","19":"y x","20":"y x","21":"y x","22":"y x","23":"y x","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"y","12.1":"y"},"ios_saf":{"8":"n","3.2":"n","4.0-4.1":"n","4.2-4.3":"n","5.0-5.1":"n","6.0-6.1":"n","7.0-7.1":"n","8.1-8.4":"n","9.0-9.2":"n","9.3":"n"},"op_mini":{"all":"n"},"android":{"3":"n","4":"n","51":"n","2.1":"n","2.2":"n","2.3":"n","4.1":"n","4.2-4.3":"n","4.4":"n","4.4.3-4.4.4":"n"},"bb":{"7":"y x","10":"y x"},"op_mob":{"10":"n","11":"n","12":"n","37":"n","11.1":"n","11.5":"n","12.1":"n"},"and_chr":{"51":"n"},"and_ff":{"47":"n"},"ie_mob":{"10":"n","11":"n"},"and_uc":{"9.9":"n"},"samsung":{"4":"n"}};
var notes$26 = "";
var notes_by_num$26 = {};
var usage_perc_y$26 = 44.14;
var usage_perc_a$26 = 0;
var ucprefix$26 = false;
var parent$26 = "";
var keywords$26 = "cursors, pointers";
var ie_id$26 = "";
var chrome_id$26 = "";
var firefox_id$26 = "";
var webkit_id$26 = "";
var shown$26 = true;
var css3CursorsNewer = {
	title: title$26,
	description: description$26,
	spec: spec$26,
	status: status$26,
	links: links$26,
	bugs: bugs$26,
	categories: categories$26,
	stats: stats$26,
	notes: notes$26,
	notes_by_num: notes_by_num$26,
	usage_perc_y: usage_perc_y$26,
	usage_perc_a: usage_perc_a$26,
	ucprefix: ucprefix$26,
	parent: parent$26,
	keywords: keywords$26,
	ie_id: ie_id$26,
	chrome_id: chrome_id$26,
	firefox_id: firefox_id$26,
	webkit_id: webkit_id$26,
	shown: shown$26
};

var require$$25$1 = Object.freeze({
	title: title$26,
	description: description$26,
	spec: spec$26,
	status: status$26,
	links: links$26,
	bugs: bugs$26,
	categories: categories$26,
	stats: stats$26,
	notes: notes$26,
	notes_by_num: notes_by_num$26,
	usage_perc_y: usage_perc_y$26,
	usage_perc_a: usage_perc_a$26,
	ucprefix: ucprefix$26,
	parent: parent$26,
	keywords: keywords$26,
	ie_id: ie_id$26,
	chrome_id: chrome_id$26,
	firefox_id: firefox_id$26,
	webkit_id: webkit_id$26,
	shown: shown$26,
	default: css3CursorsNewer
});

var title$27 = "CSS3 Cursors: grab & grabbing";
var description$27 = "Support for `grab`, `grabbing` values for the CSS3 `cursor` property.";
var spec$27 = "http://www.w3.org/TR/css3-ui/#cursor";
var status$27 = "cr";
var links$27 = [{"url":"https://developer.mozilla.org/en-US/docs/Web/CSS/cursor","title":"MDN Documentation"}];
var bugs$27 = [];
var categories$27 = ["CSS3"];
var stats$27 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","5.5":"n"},"edge":{"12":"n","13":"n","14":"u"},"firefox":{"2":"y x","3":"y x","4":"y x","5":"y x","6":"y x","7":"y x","8":"y x","9":"y x","10":"y x","11":"y x","12":"y x","13":"y x","14":"y x","15":"y x","16":"y x","17":"y x","18":"y x","19":"y x","20":"y x","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y x","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","3.5":"y x","3.6":"y x"},"chrome":{"4":"y x","5":"y x","6":"y x","7":"y x","8":"y x","9":"y x","10":"y x","11":"y x","12":"y x","13":"y x","14":"y x","15":"y x","16":"y x","17":"y x","18":"y x","19":"y x","20":"y x","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y x","27":"y x","28":"y x","29":"y x","30":"y x","31":"y x","32":"y x","33":"y x","34":"y x","35":"y x","36":"y x","37":"y x","38":"y x","39":"y x","40":"y x","41":"y x","42":"y x","43":"y x","44":"y x","45":"y x","46":"y x","47":"y x","48":"y x","49":"y x","50":"y x","51":"y x","52":"y x","53":"y x","54":"y x","55":"y x"},"safari":{"4":"y x","5":"y x","6":"y x","7":"y x","8":"y x","9":"y x","10":"y x","3.1":"y x","3.2":"y x","5.1":"y x","6.1":"y x","7.1":"y x","9.1":"y x","TP":"y x"},"opera":{"9":"n","11":"n","12":"y","15":"y x","16":"y x","17":"y x","18":"y x","19":"y x","20":"y x","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y x","27":"y x","28":"y x","29":"y x","30":"y x","31":"y x","32":"y x","33":"y x","34":"y x","35":"y x","36":"y x","37":"y x","38":"y x","39":"y x","40":"y x","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"y","12.1":"y"},"ios_saf":{"8":"n","3.2":"n","4.0-4.1":"n","4.2-4.3":"n","5.0-5.1":"n","6.0-6.1":"n","7.0-7.1":"n","8.1-8.4":"n","9.0-9.2":"n","9.3":"n"},"op_mini":{"all":"n"},"android":{"3":"n","4":"n","51":"n","2.1":"n","2.2":"n","2.3":"n","4.1":"n","4.2-4.3":"n","4.4":"n","4.4.3-4.4.4":"n"},"bb":{"7":"y x","10":"y x"},"op_mob":{"10":"n","11":"n","12":"n","37":"n","11.1":"n","11.5":"n","12.1":"n"},"and_chr":{"51":"n"},"and_ff":{"47":"n"},"ie_mob":{"10":"n","11":"n"},"and_uc":{"9.9":"n"},"samsung":{"4":"n"}};
var notes$27 = "";
var notes_by_num$27 = {};
var usage_perc_y$27 = 42.65;
var usage_perc_a$27 = 0;
var ucprefix$27 = false;
var parent$27 = "";
var keywords$27 = "cursors, pointers, grab, grabbing";
var ie_id$27 = "";
var chrome_id$27 = "";
var firefox_id$27 = "";
var webkit_id$27 = "";
var shown$27 = false;
var css3CursorsGrab = {
	title: title$27,
	description: description$27,
	spec: spec$27,
	status: status$27,
	links: links$27,
	bugs: bugs$27,
	categories: categories$27,
	stats: stats$27,
	notes: notes$27,
	notes_by_num: notes_by_num$27,
	usage_perc_y: usage_perc_y$27,
	usage_perc_a: usage_perc_a$27,
	ucprefix: ucprefix$27,
	parent: parent$27,
	keywords: keywords$27,
	ie_id: ie_id$27,
	chrome_id: chrome_id$27,
	firefox_id: firefox_id$27,
	webkit_id: webkit_id$27,
	shown: shown$27
};

var require$$24$1 = Object.freeze({
	title: title$27,
	description: description$27,
	spec: spec$27,
	status: status$27,
	links: links$27,
	bugs: bugs$27,
	categories: categories$27,
	stats: stats$27,
	notes: notes$27,
	notes_by_num: notes_by_num$27,
	usage_perc_y: usage_perc_y$27,
	usage_perc_a: usage_perc_a$27,
	ucprefix: ucprefix$27,
	parent: parent$27,
	keywords: keywords$27,
	ie_id: ie_id$27,
	chrome_id: chrome_id$27,
	firefox_id: firefox_id$27,
	webkit_id: webkit_id$27,
	shown: shown$27,
	default: css3CursorsGrab
});

var title$28 = "CSS position:sticky";
var description$28 = "Keeps elements positioned as \"fixed\" or \"relative\" depending on how it appears in the viewport. As a result the element is \"stuck\" when necessary while scrolling.";
var spec$28 = "https://drafts.csswg.org/css-position/#sticky-pos";
var status$28 = "unoff";
var links$28 = [{"url":"http://updates.html5rocks.com/2012/08/Stick-your-landings-position-sticky-lands-in-WebKit","title":"HTML5Rocks"},{"url":"https://developer.mozilla.org/en-US/docs/Web/CSS/position","title":"MDN article"},{"url":"http://docs.webplatform.org/wiki/css/properties/position","title":"WebPlatform Docs"},{"url":"https://github.com/filamentgroup/fixed-sticky","title":"Polyfill"},{"url":"https://github.com/wilddeer/stickyfill","title":"Another polyfill"}];
var bugs$28 = [{"description":"Firefox and Safari 7 & below do not appear to support [sticky table headers](http://jsfiddle.net/Mf4YT/2/). (see also [Firefox bug](https://bugzilla.mozilla.org/show_bug.cgi?id=975644))"},{"description":"A parent with overflow set to `auto` will prevent `position: sticky` from working in Safari"}];
var categories$28 = ["CSS"];
var stats$28 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","5.5":"n"},"edge":{"12":"n","13":"n","14":"u"},"firefox":{"2":"n","3":"n","4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n d #1","27":"n d #1","28":"n d #1","29":"n d #1","30":"n d #1","31":"n d #1","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","3.5":"n","3.6":"n"},"chrome":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n d #2","24":"n d #2","25":"n d #2","26":"n d #2","27":"n d #2","28":"n d #2","29":"n d #2","30":"n d #2","31":"n d #2","32":"n d #2","33":"n d #2","34":"n d #2","35":"n d #2","36":"n d #2","37":"n","38":"n","39":"n","40":"n","41":"n","42":"n","43":"n","44":"n","45":"n","46":"n","47":"n","48":"n","49":"n","50":"n","51":"n","52":"n d #2","53":"n d #2","54":"n d #2","55":"n d #2"},"safari":{"4":"n","5":"n","6":"n","7":"y x","8":"y x","9":"y x","10":"y x","3.1":"n","3.2":"n","5.1":"n","6.1":"y x","7.1":"y x","9.1":"y x","TP":"y x"},"opera":{"9":"n","11":"n","12":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n","35":"n","36":"n","37":"n","38":"n","39":"n d #2","40":"n d #2","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"n"},"ios_saf":{"8":"y x","3.2":"n","4.0-4.1":"n","4.2-4.3":"n","5.0-5.1":"n","6.0-6.1":"y x","7.0-7.1":"y x","8.1-8.4":"y x","9.0-9.2":"y x","9.3":"y x"},"op_mini":{"all":"n"},"android":{"3":"n","4":"n","51":"n","2.1":"n","2.2":"n","2.3":"n","4.1":"n","4.2-4.3":"n","4.4":"n","4.4.3-4.4.4":"n"},"bb":{"7":"n","10":"n"},"op_mob":{"10":"n","11":"n","12":"n","37":"n","11.1":"n","11.5":"n","12.1":"n"},"and_chr":{"51":"n"},"and_ff":{"47":"y"},"ie_mob":{"10":"n","11":"n"},"and_uc":{"9.9":"n"},"samsung":{"4":"n"}};
var notes$28 = "";
var notes_by_num$28 = {"1":"Can be enabled in Firefox by setting the about:config preference layout.css.sticky.enabled to true","2":"Enabled through the \"experimental Web Platform features\" flag"};
var usage_perc_y$28 = 18.67;
var usage_perc_a$28 = 0;
var ucprefix$28 = false;
var parent$28 = "";
var keywords$28 = "";
var ie_id$28 = "positionsticky";
var chrome_id$28 = "6190250464378880";
var firefox_id$28 = "";
var webkit_id$28 = "feature-position:-sticky";
var shown$28 = true;
var cssSticky = {
	title: title$28,
	description: description$28,
	spec: spec$28,
	status: status$28,
	links: links$28,
	bugs: bugs$28,
	categories: categories$28,
	stats: stats$28,
	notes: notes$28,
	notes_by_num: notes_by_num$28,
	usage_perc_y: usage_perc_y$28,
	usage_perc_a: usage_perc_a$28,
	ucprefix: ucprefix$28,
	parent: parent$28,
	keywords: keywords$28,
	ie_id: ie_id$28,
	chrome_id: chrome_id$28,
	firefox_id: firefox_id$28,
	webkit_id: webkit_id$28,
	shown: shown$28
};

var require$$23$1 = Object.freeze({
	title: title$28,
	description: description$28,
	spec: spec$28,
	status: status$28,
	links: links$28,
	bugs: bugs$28,
	categories: categories$28,
	stats: stats$28,
	notes: notes$28,
	notes_by_num: notes_by_num$28,
	usage_perc_y: usage_perc_y$28,
	usage_perc_a: usage_perc_a$28,
	ucprefix: ucprefix$28,
	parent: parent$28,
	keywords: keywords$28,
	ie_id: ie_id$28,
	chrome_id: chrome_id$28,
	firefox_id: firefox_id$28,
	webkit_id: webkit_id$28,
	shown: shown$28,
	default: cssSticky
});

var title$29 = "Pointer events";
var description$29 = "This specification integrates various inputs from mice, touchscreens, and pens, making separate implementations no longer necessary and authoring for cross-device pointers easier. Not to be mistaken with the unrelated \"pointer-events\" CSS property.";
var spec$29 = "http://www.w3.org/TR/pointerevents/";
var status$29 = "rec";
var links$29 = [{"url":"http://blogs.msdn.com/b/ie/archive/2011/09/20/touch-input-for-ie10-and-metro-style-apps.aspx","title":"Implementation of Pointer Events in IE10"},{"url":"http://blogs.msdn.com/b/eternalcoding/archive/2013/01/16/hand-js-a-polyfill-for-supporting-pointer-events-on-every-browser.aspx","title":"Hand.js, the polyfill for browsers only supporting Touch Events"},{"url":"http://blogs.msdn.com/b/davrous/archive/2013/02/20/handling-touch-in-your-html5-apps-thanks-to-the-pointer-events-of-ie10-and-windows-8.aspx","title":"Article & tutorial"},{"url":"http://deeptissuejs.com","title":"Abstraction library for pointer events"}];
var bugs$29 = [];
var categories$29 = ["DOM","JS API"];
var stats$29 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"a x #1","11":"y","5.5":"n"},"edge":{"12":"y","13":"y","14":"y"},"firefox":{"2":"n","3":"n","4":"n","5":"n","6":"p","7":"p","8":"p","9":"p","10":"p","11":"p","12":"p","13":"p","14":"p","15":"p","16":"p","17":"p","18":"p","19":"p","20":"p","21":"p","22":"p","23":"p","24":"p","25":"p","26":"p","27":"p","28":"p","29":"p","30":"p","31":"p","32":"p","33":"p","34":"p","35":"p","36":"p","37":"p","38":"p","39":"p","40":"p","41":"p d #2","42":"p d #2","43":"p d #2","44":"p d #2","45":"p d #2","46":"p d #2","47":"p d #2","48":"a #2","49":"a #2","50":"a #2","3.5":"n","3.6":"n"},"chrome":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"p","23":"p","24":"p","25":"p","26":"p","27":"p","28":"p","29":"p","30":"p","31":"p","32":"p","33":"p","34":"p","35":"p","36":"p","37":"p","38":"p","39":"p","40":"p","41":"p","42":"p","43":"p","44":"p","45":"p","46":"p","47":"p","48":"p","49":"p","50":"p","51":"p","52":"p d #3","53":"p d #3","54":"p d #3","55":"p d #3"},"safari":{"4":"n","5":"n","6":"n","7":"p","8":"p","9":"p","10":"p","3.1":"n","3.2":"n","5.1":"n","6.1":"p","7.1":"p","9.1":"p","TP":"p"},"opera":{"9":"n","11":"n","12":"n","15":"p","16":"p","17":"p","18":"p","19":"p","20":"p","21":"p","22":"p","23":"p","24":"p","25":"p","26":"p","27":"p","28":"p","29":"p","30":"p","31":"p","32":"p","33":"p","34":"p","35":"p","36":"p","37":"p","38":"p","39":"p d #3","40":"p d #3","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"n"},"ios_saf":{"8":"p","3.2":"p","4.0-4.1":"p","4.2-4.3":"p","5.0-5.1":"p","6.0-6.1":"p","7.0-7.1":"p","8.1-8.4":"p","9.0-9.2":"p","9.3":"p"},"op_mini":{"all":"n"},"android":{"3":"p","4":"p","51":"p","2.1":"p","2.2":"p","2.3":"p","4.1":"p","4.2-4.3":"p","4.4":"p","4.4.3-4.4.4":"p"},"bb":{"7":"p","10":"p"},"op_mob":{"10":"n","11":"p","12":"p","37":"p","11.1":"p","11.5":"p","12.1":"p"},"and_chr":{"51":"p"},"and_ff":{"47":"p"},"ie_mob":{"10":"a x","11":"y"},"and_uc":{"9.9":"p"},"samsung":{"4":"p"}};
var notes$29 = "Firefox, starting with version 28, provides the 'dom.w3c_pointer_events.enabled' flag to support this specification.";
var notes_by_num$29 = {"1":"Partial support in IE10 refers the lack of pointerenter and pointerleave events.","2":"Firefox support is disabled by default and [only supports mouse input](https://hacks.mozilla.org/2015/08/pointer-events-now-in-firefox-nightly/). On Windows only, touch can be enabled with the `layers.async-pan-zoom.enabled` and `dom.w3c_touch_events.enabled` flags","3":"Can be enabled with the `#enable-pointer-events` flag."};
var usage_perc_y$29 = 6.92;
var usage_perc_a$29 = 0.73;
var ucprefix$29 = false;
var parent$29 = "";
var keywords$29 = "pointerdown,pointermove,pointerup,pointercancel,pointerover,pointerout,pointerenter,pointerleave";
var ie_id$29 = "pointerevents";
var chrome_id$29 = "4504699138998272";
var firefox_id$29 = "pointer-events";
var webkit_id$29 = "";
var shown$29 = true;
var pointer = {
	title: title$29,
	description: description$29,
	spec: spec$29,
	status: status$29,
	links: links$29,
	bugs: bugs$29,
	categories: categories$29,
	stats: stats$29,
	notes: notes$29,
	notes_by_num: notes_by_num$29,
	usage_perc_y: usage_perc_y$29,
	usage_perc_a: usage_perc_a$29,
	ucprefix: ucprefix$29,
	parent: parent$29,
	keywords: keywords$29,
	ie_id: ie_id$29,
	chrome_id: chrome_id$29,
	firefox_id: firefox_id$29,
	webkit_id: webkit_id$29,
	shown: shown$29
};

var require$$22$1 = Object.freeze({
	title: title$29,
	description: description$29,
	spec: spec$29,
	status: status$29,
	links: links$29,
	bugs: bugs$29,
	categories: categories$29,
	stats: stats$29,
	notes: notes$29,
	notes_by_num: notes_by_num$29,
	usage_perc_y: usage_perc_y$29,
	usage_perc_a: usage_perc_a$29,
	ucprefix: ucprefix$29,
	parent: parent$29,
	keywords: keywords$29,
	ie_id: ie_id$29,
	chrome_id: chrome_id$29,
	firefox_id: firefox_id$29,
	webkit_id: webkit_id$29,
	shown: shown$29,
	default: pointer
});

var title$30 = "text-decoration styling";
var description$30 = "Method of defining the type, style and color of lines in the text-decoration property. These can be defined as shorthand (e.g. `text-decoration: line-through dashed blue`) or as single properties (e.g. `text-decoration-color: blue`)";
var spec$30 = "http://www.w3.org/TR/css-text-decor-3/#line-decoration";
var status$30 = "cr";
var links$30 = [{"url":"https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style","title":"MDN Documentation for text-decoration-style"},{"url":"https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color","title":"MDN Documentation for text-decoration-color"},{"url":"https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line","title":"MDN Documentation for text-decoration-line"},{"url":"https://wpdev.uservoice.com/forums/257854-microsoft-edge-developer/suggestions/6514536-text-decoration-styling","title":"Microsoft Edge feature request on UserVoice"}];
var bugs$30 = [];
var categories$30 = ["CSS3"];
var stats$30 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","5.5":"n"},"edge":{"12":"n","13":"n","14":"u"},"firefox":{"2":"n","3":"n","4":"n","5":"n","6":"y x","7":"y x","8":"y x","9":"y x","10":"y x","11":"y x","12":"y x","13":"y x","14":"y x","15":"y x","16":"y x","17":"y x","18":"y x","19":"y x","20":"y x","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y x","27":"y x","28":"y x","29":"y x","30":"y x","31":"y x","32":"y x","33":"y x","34":"y x","35":"y x","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","3.5":"n","3.6":"n"},"chrome":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n x d #1","27":"n x d #1","28":"n x d #1","29":"n x d #1","30":"n x d #1","31":"n x d #1","32":"n x d #1","33":"n x d #1","34":"n x d #1","35":"n x d #1","36":"n x d #1","37":"n x d #1","38":"n x d #1","39":"n x d #1","40":"n x d #1","41":"n x d #1","42":"n x d #1","43":"n x d #1","44":"n x d #1","45":"n x d #1","46":"n x d #1","47":"n x d #1","48":"n x d #1","49":"n x d #1","50":"n x d #1","51":"n x d #1","52":"n x d #1","53":"n x d #1","54":"n x d #1","55":"n x d #1"},"safari":{"4":"n","5":"n","6":"n","7":"n","8":"a x #2","9":"a x #2","10":"a x #2","3.1":"n","3.2":"n","5.1":"n","6.1":"n","7.1":"a x #2","9.1":"a x #2","TP":"a x #2"},"opera":{"9":"n","11":"n","12":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n","35":"n x d #1","36":"n x d #1","37":"n x d #1","38":"n x d #1","39":"n x d #1","40":"n x d #1","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"n"},"ios_saf":{"8":"a x #2","3.2":"n","4.0-4.1":"n","4.2-4.3":"n","5.0-5.1":"n","6.0-6.1":"n","7.0-7.1":"n","8.1-8.4":"a x #2","9.0-9.2":"a x #2","9.3":"a x #2"},"op_mini":{"all":"n"},"android":{"3":"n","4":"n","51":"n","2.1":"n","2.2":"n","2.3":"n","4.1":"n","4.2-4.3":"n","4.4":"n","4.4.3-4.4.4":"n"},"bb":{"7":"n","10":"n"},"op_mob":{"10":"n","11":"n","12":"n","37":"n","11.1":"n","11.5":"n","12.1":"n"},"and_chr":{"51":"n x d #1"},"and_ff":{"47":"y"},"ie_mob":{"10":"n","11":"n"},"and_uc":{"9.9":"n"},"samsung":{"4":"n"}};
var notes$30 = "All browsers support the CSS2 version of `text-decoration`, which matches only the `text-decoration-line` values (`underline`, etc.)";
var notes_by_num$30 = {"1":"Enabled in Chrome through the \"experimental Web Platform features\" flag in chrome://flags","2":"Partial support in Safari refers to not supporting the text-decoration-style property."};
var usage_perc_y$30 = 8.18;
var usage_perc_a$30 = 10.75;
var ucprefix$30 = false;
var parent$30 = "";
var keywords$30 = "text-decoration-line,text-decoration-style,text-decoration-color";
var ie_id$30 = "";
var chrome_id$30 = "";
var firefox_id$30 = "";
var webkit_id$30 = "";
var shown$30 = true;
var textDecoration = {
	title: title$30,
	description: description$30,
	spec: spec$30,
	status: status$30,
	links: links$30,
	bugs: bugs$30,
	categories: categories$30,
	stats: stats$30,
	notes: notes$30,
	notes_by_num: notes_by_num$30,
	usage_perc_y: usage_perc_y$30,
	usage_perc_a: usage_perc_a$30,
	ucprefix: ucprefix$30,
	parent: parent$30,
	keywords: keywords$30,
	ie_id: ie_id$30,
	chrome_id: chrome_id$30,
	firefox_id: firefox_id$30,
	webkit_id: webkit_id$30,
	shown: shown$30
};

var require$$21$1 = Object.freeze({
	title: title$30,
	description: description$30,
	spec: spec$30,
	status: status$30,
	links: links$30,
	bugs: bugs$30,
	categories: categories$30,
	stats: stats$30,
	notes: notes$30,
	notes_by_num: notes_by_num$30,
	usage_perc_y: usage_perc_y$30,
	usage_perc_a: usage_perc_a$30,
	ucprefix: ucprefix$30,
	parent: parent$30,
	keywords: keywords$30,
	ie_id: ie_id$30,
	chrome_id: chrome_id$30,
	firefox_id: firefox_id$30,
	webkit_id: webkit_id$30,
	shown: shown$30,
	default: textDecoration
});

var title$31 = "CSS text-size-adjust";
var description$31 = "On mobile devices, the text-size-adjust CSS property allows Web authors to control if and how the text-inflating algorithm is applied to the textual content of the element it is applied to.";
var spec$31 = "http://dev.w3.org/csswg/css-size-adjust/";
var status$31 = "unoff";
var links$31 = [{"url":"https://developer.mozilla.org/en-US/docs/Web/CSS/text-size-adjust","title":"MDN Docs"}];
var bugs$31 = [];
var categories$31 = ["CSS3"];
var stats$31 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","5.5":"n"},"edge":{"12":"n","13":"n","14":"u"},"firefox":{"2":"n","3":"n","4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n","35":"n","36":"n","37":"n","38":"n","39":"n","40":"n","41":"n","42":"n","43":"n","44":"n","45":"n","46":"n","47":"n","48":"n","49":"n","50":"n","3.5":"n","3.6":"n"},"chrome":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n #2","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n","35":"n","36":"n","37":"n","38":"n","39":"n","40":"n","41":"n","42":"n","43":"n","44":"n","45":"n","46":"n","47":"n","48":"n","49":"n","50":"n","51":"n","52":"n","53":"n","54":"n","55":"n"},"safari":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","3.1":"n","3.2":"n","5.1":"n #2","6.1":"n","7.1":"n","9.1":"n","TP":"n"},"opera":{"9":"n","11":"n","12":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n","35":"n","36":"n","37":"n","38":"n","39":"n","40":"n","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"n"},"ios_saf":{"8":"y x","3.2":"n","4.0-4.1":"n","4.2-4.3":"n","5.0-5.1":"y x","6.0-6.1":"y x","7.0-7.1":"y x","8.1-8.4":"y x","9.0-9.2":"y x","9.3":"y x"},"op_mini":{"all":"n"},"android":{"3":"n","4":"n","51":"n","2.1":"n","2.2":"n","2.3":"n","4.1":"n","4.2-4.3":"n","4.4":"n","4.4.3-4.4.4":"n"},"bb":{"7":"n","10":"n"},"op_mob":{"10":"n","11":"n","12":"n","37":"n","11.1":"n","11.5":"n","12.1":"n"},"and_chr":{"51":"n"},"and_ff":{"47":"y x"},"ie_mob":{"10":"y x #1","11":"y x #1"},"and_uc":{"9.9":"y x"},"samsung":{"4":"n"}};
var notes$31 = "";
var notes_by_num$31 = {"1":"If the viewport size is set using a `<meta>` element, the `-ms-text-size-adjust` property is ignored. See [MSDN](https://msdn.microsoft.com/en-us/library/ie/dn793579%28v=vs.85%29.aspx)","2":"Old versions of WebKit-based desktop browsers (Chrome<27, Safari<6) [suffer from a bug](https://bugs.webkit.org/show_bug.cgi?id=56543) where if `-webkit-text-size-adjust` is explicitly set to `none`, instead of ignoring the property, the browsers will prevent the user from zooming in or out on the webpage."};
var usage_perc_y$31 = 16.3;
var usage_perc_a$31 = 0;
var ucprefix$31 = false;
var parent$31 = "";
var keywords$31 = "";
var ie_id$31 = "";
var chrome_id$31 = "";
var firefox_id$31 = "";
var webkit_id$31 = "";
var shown$31 = true;
var textSizeAdjust = {
	title: title$31,
	description: description$31,
	spec: spec$31,
	status: status$31,
	links: links$31,
	bugs: bugs$31,
	categories: categories$31,
	stats: stats$31,
	notes: notes$31,
	notes_by_num: notes_by_num$31,
	usage_perc_y: usage_perc_y$31,
	usage_perc_a: usage_perc_a$31,
	ucprefix: ucprefix$31,
	parent: parent$31,
	keywords: keywords$31,
	ie_id: ie_id$31,
	chrome_id: chrome_id$31,
	firefox_id: firefox_id$31,
	webkit_id: webkit_id$31,
	shown: shown$31
};

var require$$20$1 = Object.freeze({
	title: title$31,
	description: description$31,
	spec: spec$31,
	status: status$31,
	links: links$31,
	bugs: bugs$31,
	categories: categories$31,
	stats: stats$31,
	notes: notes$31,
	notes_by_num: notes_by_num$31,
	usage_perc_y: usage_perc_y$31,
	usage_perc_a: usage_perc_a$31,
	ucprefix: ucprefix$31,
	parent: parent$31,
	keywords: keywords$31,
	ie_id: ie_id$31,
	chrome_id: chrome_id$31,
	firefox_id: firefox_id$31,
	webkit_id: webkit_id$31,
	shown: shown$31,
	default: textSizeAdjust
});

var title$32 = "CSS Masks";
var description$32 = "Method of displaying part of an element, using a selected image as a mask";
var spec$32 = "http://www.w3.org/TR/css-masking-1/";
var status$32 = "cr";
var links$32 = [{"url":"http://docs.webplatform.org/wiki/css/properties/mask","title":"WebPlatform Docs"},{"url":"http://www.html5rocks.com/en/tutorials/masking/adobe/","title":"HTML5 Rocks article"},{"url":"http://thenittygritty.co/css-masking","title":"Detailed blog post"},{"url":"https://bugzilla.mozilla.org/show_bug.cgi?id=1224422","title":"Firefox implementation bug"}];
var bugs$32 = [];
var categories$32 = ["CSS"];
var stats$32 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","5.5":"n"},"edge":{"12":"n","13":"n","14":"u"},"firefox":{"2":"n","3":"n","4":"a #2","5":"a #2","6":"a #2","7":"a #2","8":"a #2","9":"a #2","10":"a #2","11":"a #2","12":"a #2","13":"a #2","14":"a #2","15":"a #2","16":"a #2","17":"a #2","18":"a #2","19":"a #2","20":"a #2","21":"a #2","22":"a #2","23":"a #2","24":"a #2","25":"a #2","26":"a #2","27":"a #2","28":"a #2","29":"a #2","30":"a #2","31":"a #2","32":"a #2","33":"a #2","34":"a #2","35":"a #2","36":"a #2","37":"a #2","38":"a #2","39":"a #2","40":"a #2","41":"a #2","42":"a #2","43":"a #2","44":"a #2","45":"a #2","46":"a #2","47":"a #2","48":"a #2","49":"a #2","50":"a #2","3.5":"a #2","3.6":"a #2"},"chrome":{"4":"a x #1","5":"a x #1","6":"a x #1","7":"a x #1","8":"a x #1","9":"a x #1","10":"a x #1","11":"a x #1","12":"a x #1","13":"a x #1","14":"a x #1","15":"a x #1","16":"a x #1","17":"a x #1","18":"a x #1","19":"a x #1","20":"a x #1","21":"a x #1","22":"a x #1","23":"a x #1","24":"a x #1","25":"a x #1","26":"a x #1","27":"a x #1","28":"a x #1","29":"a x #1","30":"a x #1","31":"a x #1","32":"a x #1","33":"a x #1","34":"a x #1","35":"a x #1","36":"a x #1","37":"a x #1","38":"a x #1","39":"a x #1","40":"a x #1","41":"a x #1","42":"a x #1","43":"a x #1","44":"a x #1","45":"a x #1","46":"a x #1","47":"a x #1","48":"a x #1","49":"a x #1","50":"a x #1","51":"a x #1","52":"a x #1","53":"a x #1","54":"a x #1","55":"a x #1"},"safari":{"4":"a x #1","5":"a x #1","6":"a x #1","7":"a x #1","8":"a x #1","9":"a x #1","10":"a x #1","3.1":"n","3.2":"n","5.1":"a x #1","6.1":"a x #1","7.1":"a x #1","9.1":"a x #1","TP":"a x #1"},"opera":{"9":"n","11":"n","12":"n","15":"a x #1","16":"a x #1","17":"a x #1","18":"a x #1","19":"a x #1","20":"a x #1","21":"a x #1","22":"a x #1","23":"a x #1","24":"a x #1","25":"a x #1","26":"a x #1","27":"a x #1","28":"a x #1","29":"a x #1","30":"a x #1","31":"a x #1","32":"a x #1","33":"a x #1","34":"a x #1","35":"a x #1","36":"a x #1","37":"a x #1","38":"a x #1","39":"a x #1","40":"a x #1","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"n"},"ios_saf":{"8":"a x #1","3.2":"a x #1","4.0-4.1":"a x #1","4.2-4.3":"a x #1","5.0-5.1":"a x #1","6.0-6.1":"a x #1","7.0-7.1":"a x #1","8.1-8.4":"a x #1","9.0-9.2":"a x #1","9.3":"a x #1"},"op_mini":{"all":"n"},"android":{"3":"a x #1","4":"a x #1","51":"a x #1","2.1":"a x #1","2.2":"a x #1","2.3":"a x #1","4.1":"a x #1","4.2-4.3":"a x #1","4.4":"a x #1","4.4.3-4.4.4":"a x #1"},"bb":{"7":"a x #1","10":"a x #1"},"op_mob":{"10":"n","11":"n","12":"n","37":"a x #1","11.1":"n","11.5":"n","12.1":"n"},"and_chr":{"51":"a x #1"},"and_ff":{"47":"a #2"},"ie_mob":{"10":"n","11":"n"},"and_uc":{"9.9":"a x #1"},"samsung":{"4":"a x #1"}};
var notes$32 = "";
var notes_by_num$32 = {"1":"Partial support in WebKit/Blink browsers refers to supporting the mask-image and mask-box-image properties, but lacking support for other parts of the spec.","2":"Partial support in Firefox refers to only support for inline SVG mask elements i.e. mask: url(#foo)."};
var usage_perc_y$32 = 0;
var usage_perc_a$32 = 84.41;
var ucprefix$32 = false;
var parent$32 = "";
var keywords$32 = "clip,clip-path,clip-rule,mask,mask-border,mask-clip,mask-image,mask-mode,mask-type";
var ie_id$32 = "masks";
var chrome_id$32 = "5381559662149632";
var firefox_id$32 = "";
var webkit_id$32 = "";
var shown$32 = true;
var cssMasks = {
	title: title$32,
	description: description$32,
	spec: spec$32,
	status: status$32,
	links: links$32,
	bugs: bugs$32,
	categories: categories$32,
	stats: stats$32,
	notes: notes$32,
	notes_by_num: notes_by_num$32,
	usage_perc_y: usage_perc_y$32,
	usage_perc_a: usage_perc_a$32,
	ucprefix: ucprefix$32,
	parent: parent$32,
	keywords: keywords$32,
	ie_id: ie_id$32,
	chrome_id: chrome_id$32,
	firefox_id: firefox_id$32,
	webkit_id: webkit_id$32,
	shown: shown$32
};

var require$$19$1 = Object.freeze({
	title: title$32,
	description: description$32,
	spec: spec$32,
	status: status$32,
	links: links$32,
	bugs: bugs$32,
	categories: categories$32,
	stats: stats$32,
	notes: notes$32,
	notes_by_num: notes_by_num$32,
	usage_perc_y: usage_perc_y$32,
	usage_perc_a: usage_perc_a$32,
	ucprefix: ucprefix$32,
	parent: parent$32,
	keywords: keywords$32,
	ie_id: ie_id$32,
	chrome_id: chrome_id$32,
	firefox_id: firefox_id$32,
	webkit_id: webkit_id$32,
	shown: shown$32,
	default: cssMasks
});

var title$33 = "CSS box-decoration-break";
var description$33 = "Controls whether the box's margins, borders, padding, and other decorations wrap the broken edges of the box fragments (when the box is split by a break (page/column/region/line).";
var spec$33 = "http://www.w3.org/TR/css3-break/#break-decoration";
var status$33 = "wd";
var links$33 = [{"url":"https://developer.mozilla.org/en-US/docs/Web/CSS/box-decoration-break","title":"MDN article"},{"url":"http://jsbin.com/xojoro/edit?css,output","title":"Demo of effect on box border"},{"url":"https://wpdev.uservoice.com/forums/257854-microsoft-edge-developer/suggestions/6514472-box-decoration-break","title":"Microsoft Edge feature request on UserVoice"}];
var bugs$33 = [];
var categories$33 = ["CSS3"];
var stats$33 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","5.5":"n"},"edge":{"12":"n","13":"n","14":"u"},"firefox":{"2":"n","3":"n","4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","3.5":"n","3.6":"n"},"chrome":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"a x #1","23":"a x #1","24":"a x #1","25":"a x #1","26":"a x #1","27":"a x #1","28":"a x #1","29":"a x #1","30":"a x #1","31":"a x #1","32":"a x #1","33":"a x #1","34":"a x #1","35":"a x #1","36":"a x #1","37":"a x #1","38":"a x #1","39":"a x #1","40":"a x #1","41":"a x #1","42":"a x #1","43":"a x #1","44":"a x #1","45":"a x #1","46":"a x #1","47":"a x #1","48":"a x #1","49":"a x #1","50":"a x #1","51":"a x #1","52":"a x #1","53":"a x #1","54":"a x #1","55":"a x #1"},"safari":{"4":"n","5":"n","6":"n","7":"a x #1","8":"a x #1","9":"a x #1","10":"a x #1","3.1":"n","3.2":"n","5.1":"n","6.1":"a x #1","7.1":"a x #1","9.1":"a x #1","TP":"a x #1"},"opera":{"9":"n","11":"y #1","12":"y #1","15":"a x #1","16":"a x #1","17":"a x #1","18":"a x #1","19":"a x #1","20":"a x #1","21":"a x #1","22":"a x #1","23":"a x #1","24":"a x #1","25":"a x #1","26":"a x #1","27":"a x #1","28":"a x #1","29":"a x #1","30":"a x #1","31":"a x #1","32":"a x #1","33":"a x #1","34":"a x #1","35":"a x #1","36":"a x #1","37":"a x #1","38":"a x #1","39":"a x #1","40":"a x #1","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"y #1","11.5":"y #1","11.6":"y #1","12.1":"y #1"},"ios_saf":{"8":"a x #1","3.2":"n","4.0-4.1":"n","4.2-4.3":"n","5.0-5.1":"n","6.0-6.1":"n","7.0-7.1":"a x #1","8.1-8.4":"a x #1","9.0-9.2":"a x #1","9.3":"a x #1"},"op_mini":{"all":"a #1"},"android":{"3":"n","4":"n","51":"a x #1","2.1":"n","2.2":"n","2.3":"n","4.1":"n","4.2-4.3":"n","4.4":"a x #1","4.4.3-4.4.4":"a x #1"},"bb":{"7":"n","10":"a x #1"},"op_mob":{"10":"n","11":"y #1","12":"y #1","37":"a x #1","11.1":"y #1","11.5":"y #1","12.1":"y #1"},"and_chr":{"51":"a x #1"},"and_ff":{"47":"y"},"ie_mob":{"10":"n","11":"n"},"and_uc":{"9.9":"n"},"samsung":{"4":"a x #1"}};
var notes$33 = "";
var notes_by_num$33 = {"1":"Partial support refers to working for inline elements but not across column or page breaks."};
var usage_perc_y$33 = 7.74;
var usage_perc_a$33 = 72.75;
var ucprefix$33 = false;
var parent$33 = "";
var keywords$33 = "box-decoration,box decoration,break";
var ie_id$33 = "";
var chrome_id$33 = "";
var firefox_id$33 = "";
var webkit_id$33 = "";
var shown$33 = true;
var cssBoxdecorationbreak = {
	title: title$33,
	description: description$33,
	spec: spec$33,
	status: status$33,
	links: links$33,
	bugs: bugs$33,
	categories: categories$33,
	stats: stats$33,
	notes: notes$33,
	notes_by_num: notes_by_num$33,
	usage_perc_y: usage_perc_y$33,
	usage_perc_a: usage_perc_a$33,
	ucprefix: ucprefix$33,
	parent: parent$33,
	keywords: keywords$33,
	ie_id: ie_id$33,
	chrome_id: chrome_id$33,
	firefox_id: firefox_id$33,
	webkit_id: webkit_id$33,
	shown: shown$33
};

var require$$18$1 = Object.freeze({
	title: title$33,
	description: description$33,
	spec: spec$33,
	status: status$33,
	links: links$33,
	bugs: bugs$33,
	categories: categories$33,
	stats: stats$33,
	notes: notes$33,
	notes_by_num: notes_by_num$33,
	usage_perc_y: usage_perc_y$33,
	usage_perc_a: usage_perc_a$33,
	ucprefix: ucprefix$33,
	parent: parent$33,
	keywords: keywords$33,
	ie_id: ie_id$33,
	chrome_id: chrome_id$33,
	firefox_id: firefox_id$33,
	webkit_id: webkit_id$33,
	shown: shown$33,
	default: cssBoxdecorationbreak
});

var title$34 = "CSS3 object-fit/object-position";
var description$34 = "Method of specifying how an object (image or video) should fit inside its box. object-fit options include \"contain\" (fit according to aspect ratio), \"fill\" (stretches object to fill) and \"cover\" (overflows box but maintains ratio), where object-position allows the object to be repositioned like background-image does.";
var spec$34 = "http://www.w3.org/TR/css3-images/";
var status$34 = "cr";
var links$34 = [{"url":"https://dev.opera.com/articles/view/css3-object-fit-object-position/","title":"Dev.Opera article"},{"url":"http://docs.webplatform.org/wiki/css/properties/object-fit","title":"WebPlatform Docs"},{"url":"https://github.com/bfred-it/object-fit-images/","title":"object-fit-images Polyfill for IE & Edge"}];
var bugs$34 = [];
var categories$34 = ["CSS3"];
var stats$34 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","5.5":"n"},"edge":{"12":"n","13":"n","14":"n"},"firefox":{"2":"n","3":"n","4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n","35":"n","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","3.5":"n","3.6":"n"},"chrome":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","51":"y","52":"y","53":"y","54":"y","55":"y"},"safari":{"4":"n","5":"n","6":"n","7":"n","8":"a #1","9":"a #1","10":"y","3.1":"n","3.2":"n","5.1":"n","6.1":"n","7.1":"a #1","9.1":"a #1","TP":"y"},"opera":{"9":"n","11":"y x","12":"y x","15":"n","16":"n","17":"n","18":"n","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"y x","11.1":"y x","11.5":"y x","11.6":"y x","12.1":"y x"},"ios_saf":{"8":"a #1","3.2":"n","4.0-4.1":"n","4.2-4.3":"n","5.0-5.1":"n","6.0-6.1":"n","7.0-7.1":"n","8.1-8.4":"a #1","9.0-9.2":"a #1","9.3":"a #1"},"op_mini":{"all":"y x"},"android":{"3":"n","4":"n","51":"y","2.1":"n","2.2":"n","2.3":"n","4.1":"n","4.2-4.3":"n","4.4":"n","4.4.3-4.4.4":"y"},"bb":{"7":"n","10":"n"},"op_mob":{"10":"n","11":"y x","12":"y x","37":"y","11.1":"y x","11.5":"y x","12.1":"y x"},"and_chr":{"51":"y"},"and_ff":{"47":"y"},"ie_mob":{"10":"n","11":"n"},"and_uc":{"9.9":"n"},"samsung":{"4":"y"}};
var notes$34 = "";
var notes_by_num$34 = {"1":"Partial support in Safari refers to support for `object-fit` but not `object-position`."};
var usage_perc_y$34 = 66.3;
var usage_perc_a$34 = 10.75;
var ucprefix$34 = false;
var parent$34 = "";
var keywords$34 = "objectfit,objectposition";
var ie_id$34 = "objectfitandobjectposition";
var chrome_id$34 = "5302669702856704";
var firefox_id$34 = "";
var webkit_id$34 = "";
var shown$34 = true;
var objectFit = {
	title: title$34,
	description: description$34,
	spec: spec$34,
	status: status$34,
	links: links$34,
	bugs: bugs$34,
	categories: categories$34,
	stats: stats$34,
	notes: notes$34,
	notes_by_num: notes_by_num$34,
	usage_perc_y: usage_perc_y$34,
	usage_perc_a: usage_perc_a$34,
	ucprefix: ucprefix$34,
	parent: parent$34,
	keywords: keywords$34,
	ie_id: ie_id$34,
	chrome_id: chrome_id$34,
	firefox_id: firefox_id$34,
	webkit_id: webkit_id$34,
	shown: shown$34
};

var require$$17$1 = Object.freeze({
	title: title$34,
	description: description$34,
	spec: spec$34,
	status: status$34,
	links: links$34,
	bugs: bugs$34,
	categories: categories$34,
	stats: stats$34,
	notes: notes$34,
	notes_by_num: notes_by_num$34,
	usage_perc_y: usage_perc_y$34,
	usage_perc_a: usage_perc_a$34,
	ucprefix: ucprefix$34,
	parent: parent$34,
	keywords: keywords$34,
	ie_id: ie_id$34,
	chrome_id: chrome_id$34,
	firefox_id: firefox_id$34,
	webkit_id: webkit_id$34,
	shown: shown$34,
	default: objectFit
});

var title$35 = "CSS Shapes Level 1";
var description$35 = "Allows geometric shapes to be set in CSS to define an area for text to flow around.";
var spec$35 = "http://www.w3.org/TR/css-shapes/";
var status$35 = "cr";
var links$35 = [{"url":"http://html.adobe.com/webplatform/layout/shapes/","title":"Adobe demos and samples"},{"url":"http://html.adobe.com/webplatform/layout/shapes/browser-support/","title":"CSS shapes support test by Adobe"},{"url":"http://alistapart.com/article/css-shapes-101","title":"A List Apart article"},{"url":"https://bugzilla.mozilla.org/show_bug.cgi?id=1040714","title":"Firefox tracking bug"}];
var bugs$35 = [];
var categories$35 = ["CSS3"];
var stats$35 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","5.5":"n"},"edge":{"12":"n","13":"n","14":"u"},"firefox":{"2":"n","3":"n","4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n","35":"n","36":"n","37":"n","38":"n","39":"n","40":"n","41":"n","42":"n","43":"n","44":"n","45":"n","46":"n","47":"n","48":"n","49":"n","50":"n","3.5":"n","3.6":"n"},"chrome":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n d #1","35":"n d #1","36":"n d #1","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","51":"y","52":"y","53":"y","54":"y","55":"y"},"safari":{"4":"n","5":"n","6":"n","7":"n","8":"y x","9":"y x","10":"y x","3.1":"n","3.2":"n","5.1":"n","6.1":"n","7.1":"y x","9.1":"y x","TP":"y x"},"opera":{"9":"n","11":"n","12":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"n"},"ios_saf":{"8":"y x","3.2":"n","4.0-4.1":"n","4.2-4.3":"n","5.0-5.1":"n","6.0-6.1":"n","7.0-7.1":"n","8.1-8.4":"y x","9.0-9.2":"y x","9.3":"y x"},"op_mini":{"all":"n"},"android":{"3":"n","4":"n","51":"y","2.1":"n","2.2":"n","2.3":"n","4.1":"n","4.2-4.3":"n","4.4":"n","4.4.3-4.4.4":"n"},"bb":{"7":"n","10":"n"},"op_mob":{"10":"n","11":"n","12":"n","37":"y","11.1":"n","11.5":"n","12.1":"n"},"and_chr":{"51":"y"},"and_ff":{"47":"n"},"ie_mob":{"10":"n","11":"n"},"and_uc":{"9.9":"n"},"samsung":{"4":"y"}};
var notes$35 = "";
var notes_by_num$35 = {"1":"Enabled in Chrome through the \"experimental Web Platform features\" flag in chrome://flags"};
var usage_perc_y$35 = 63.27;
var usage_perc_a$35 = 0;
var ucprefix$35 = false;
var parent$35 = "";
var keywords$35 = "circle,ellipse,polygon,inset,shape-outside,shape-inside";
var ie_id$35 = "shapes";
var chrome_id$35 = "5163890719588352";
var firefox_id$35 = "css-shapes";
var webkit_id$35 = "feature-css-shapes-level-1";
var shown$35 = true;
var cssShapes = {
	title: title$35,
	description: description$35,
	spec: spec$35,
	status: status$35,
	links: links$35,
	bugs: bugs$35,
	categories: categories$35,
	stats: stats$35,
	notes: notes$35,
	notes_by_num: notes_by_num$35,
	usage_perc_y: usage_perc_y$35,
	usage_perc_a: usage_perc_a$35,
	ucprefix: ucprefix$35,
	parent: parent$35,
	keywords: keywords$35,
	ie_id: ie_id$35,
	chrome_id: chrome_id$35,
	firefox_id: firefox_id$35,
	webkit_id: webkit_id$35,
	shown: shown$35
};

var require$$16$1 = Object.freeze({
	title: title$35,
	description: description$35,
	spec: spec$35,
	status: status$35,
	links: links$35,
	bugs: bugs$35,
	categories: categories$35,
	stats: stats$35,
	notes: notes$35,
	notes_by_num: notes_by_num$35,
	usage_perc_y: usage_perc_y$35,
	usage_perc_a: usage_perc_a$35,
	ucprefix: ucprefix$35,
	parent: parent$35,
	keywords: keywords$35,
	ie_id: ie_id$35,
	chrome_id: chrome_id$35,
	firefox_id: firefox_id$35,
	webkit_id: webkit_id$35,
	shown: shown$35,
	default: cssShapes
});

var title$36 = "CSS3 Text-overflow";
var description$36 = "Append ellipsis when text overflows its containing element";
var spec$36 = "http://www.w3.org/TR/css3-ui/#text-overflow";
var status$36 = "cr";
var links$36 = [{"url":"https://github.com/rmorse/AutoEllipsis","title":"jQuery polyfill for Firefox"},{"url":"https://developer.mozilla.org/En/CSS/Text-overflow","title":"MDN article"},{"url":"http://www.css3files.com/text/","title":"Information page"},{"url":"https://raw.github.com/phiggins42/has.js/master/detect/css.js#css-text-overflow","title":"has.js test"},{"url":"http://docs.webplatform.org/wiki/css/properties/text-overflow","title":"WebPlatform Docs"}];
var bugs$36 = [{"description":"Does not work on `select` elements work in Chrome and IE, only Firefox."},{"description":"Some Samsung-based browsers, have a bug with overflowing text when ellipsis is set and if `text-rendering` is not `auto`."},{"description":"Does not work in IE8 and IE9 on `<input type=\"text\">`"}];
var categories$36 = ["CSS3"];
var stats$36 = {"ie":{"6":"y","7":"y","8":"y","9":"y","10":"y","11":"y","5.5":"n"},"edge":{"12":"y","13":"y","14":"y"},"firefox":{"2":"p","3":"p","4":"p","5":"p","6":"p","7":"y","8":"y","9":"y","10":"y","11":"y","12":"y","13":"y","14":"y","15":"y","16":"y","17":"y","18":"y","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","3.5":"p","3.6":"p"},"chrome":{"4":"y","5":"y","6":"y","7":"y","8":"y","9":"y","10":"y","11":"y","12":"y","13":"y","14":"y","15":"y","16":"y","17":"y","18":"y","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","51":"y","52":"y","53":"y","54":"y","55":"y"},"safari":{"4":"y","5":"y","6":"y","7":"y","8":"y","9":"y","10":"y","3.1":"y","3.2":"y","5.1":"y","6.1":"y","7.1":"y","9.1":"y","TP":"y"},"opera":{"9":"y x","11":"y","12":"y","15":"y","16":"y","17":"y","18":"y","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","9.5-9.6":"y x","10.0-10.1":"y x","10.5":"y x","10.6":"y x","11.1":"y","11.5":"y","11.6":"y","12.1":"y"},"ios_saf":{"8":"y","3.2":"y","4.0-4.1":"y","4.2-4.3":"y","5.0-5.1":"y","6.0-6.1":"y","7.0-7.1":"y","8.1-8.4":"y","9.0-9.2":"y","9.3":"y"},"op_mini":{"all":"y"},"android":{"3":"y","4":"y","51":"y","2.1":"y","2.2":"y","2.3":"y","4.1":"y","4.2-4.3":"y","4.4":"y","4.4.3-4.4.4":"y"},"bb":{"7":"y","10":"y"},"op_mob":{"10":"y x","11":"y x","12":"y x","37":"y","11.1":"y x","11.5":"y x","12.1":"y"},"and_chr":{"51":"y"},"and_ff":{"47":"y"},"ie_mob":{"10":"y","11":"y"},"and_uc":{"9.9":"y"},"samsung":{"4":"y"}};
var notes$36 = "";
var notes_by_num$36 = {};
var usage_perc_y$36 = 97.87;
var usage_perc_a$36 = 0;
var ucprefix$36 = false;
var parent$36 = "";
var keywords$36 = "textoverflow,ellipsis";
var ie_id$36 = "";
var chrome_id$36 = "";
var firefox_id$36 = "";
var webkit_id$36 = "";
var shown$36 = true;
var textOverflow = {
	title: title$36,
	description: description$36,
	spec: spec$36,
	status: status$36,
	links: links$36,
	bugs: bugs$36,
	categories: categories$36,
	stats: stats$36,
	notes: notes$36,
	notes_by_num: notes_by_num$36,
	usage_perc_y: usage_perc_y$36,
	usage_perc_a: usage_perc_a$36,
	ucprefix: ucprefix$36,
	parent: parent$36,
	keywords: keywords$36,
	ie_id: ie_id$36,
	chrome_id: chrome_id$36,
	firefox_id: firefox_id$36,
	webkit_id: webkit_id$36,
	shown: shown$36
};

var require$$15$1 = Object.freeze({
	title: title$36,
	description: description$36,
	spec: spec$36,
	status: status$36,
	links: links$36,
	bugs: bugs$36,
	categories: categories$36,
	stats: stats$36,
	notes: notes$36,
	notes_by_num: notes_by_num$36,
	usage_perc_y: usage_perc_y$36,
	usage_perc_a: usage_perc_a$36,
	ucprefix: ucprefix$36,
	parent: parent$36,
	keywords: keywords$36,
	ie_id: ie_id$36,
	chrome_id: chrome_id$36,
	firefox_id: firefox_id$36,
	webkit_id: webkit_id$36,
	shown: shown$36,
	default: textOverflow
});

var title$37 = "CSS Device Adaptation";
var description$37 = "A standard way to override the size of viewport in web page using the `@viewport` rule, standardizing and replacing Apple's own popular `<meta>` viewport implementation.";
var spec$37 = "http://www.w3.org/TR/css-device-adapt/";
var status$37 = "wd";
var links$37 = [{"url":"https://dev.opera.com/articles/view/an-introduction-to-meta-viewport-and-viewport/","title":"Introduction to meta viewport and @viewport in Opera Mobile"},{"url":"http://msdn.microsoft.com/en-us/library/ie/hh708740(v=vs.85).aspx","title":"Device adaptation in Internet Explorer 10"},{"url":"https://wpdev.uservoice.com/forums/257854-microsoft-edge-developer/suggestions/6777420-unprefix-and-support-all-viewport-properties","title":"Microsoft Edge feature request on UserVoice"},{"url":"https://code.google.com/p/chromium/issues/detail?id=155477","title":"Chrome tracking bug"},{"url":"https://bugs.webkit.org/show_bug.cgi?id=95959","title":"WebKit tracking bug"},{"url":"https://bugzilla.mozilla.org/show_bug.cgi?id=747754","title":"Mozilla tracking bug"}];
var bugs$37 = [];
var categories$37 = ["CSS"];
var stats$37 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"a x #1","11":"a x #1","5.5":"n"},"edge":{"12":"a x #1","13":"a x #1","14":"a x #1"},"firefox":{"2":"n","3":"n","4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n","35":"n","36":"n","37":"n","38":"n","39":"n","40":"n","41":"n","42":"n","43":"n","44":"n","45":"n","46":"n","47":"n","48":"n","49":"n","50":"n","3.5":"n","3.6":"n"},"chrome":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n d","30":"n d","31":"n d","32":"n d","33":"n d","34":"n d","35":"n d","36":"n d","37":"n d","38":"n d","39":"n d","40":"n d","41":"n d","42":"n d","43":"n d","44":"n d","45":"n d","46":"n d","47":"n d","48":"n d","49":"n d","50":"n d","51":"n d","52":"n d","53":"n d","54":"n d","55":"n d"},"safari":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","3.1":"n","3.2":"n","5.1":"n","6.1":"n","7.1":"n","9.1":"n","TP":"n"},"opera":{"9":"n","11":"n","12":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n","35":"n","36":"n","37":"n","38":"n","39":"n","40":"n","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"n"},"ios_saf":{"8":"n","3.2":"n","4.0-4.1":"n","4.2-4.3":"n","5.0-5.1":"n","6.0-6.1":"n","7.0-7.1":"n","8.1-8.4":"n","9.0-9.2":"n","9.3":"n"},"op_mini":{"all":"a x #2"},"android":{"3":"n","4":"n","51":"n","2.1":"n","2.2":"n","2.3":"n","4.1":"n","4.2-4.3":"n","4.4":"n","4.4.3-4.4.4":"n"},"bb":{"7":"n","10":"n"},"op_mob":{"10":"n","11":"a x #2","12":"a x #2","37":"n","11.1":"a x #2","11.5":"a x #2","12.1":"a x #2"},"and_chr":{"51":"n"},"and_ff":{"47":"n"},"ie_mob":{"10":"a x #1","11":"a x #1"},"and_uc":{"9.9":"n"},"samsung":{"4":"n"}};
var notes$37 = "";
var notes_by_num$37 = {"1":"IE only supports the 'width' and 'height' properties.","2":"Opera Mobile and Opera Mini only support the 'orientation' property."};
var usage_perc_y$37 = 0;
var usage_perc_a$37 = 12.22;
var ucprefix$37 = false;
var parent$37 = "";
var keywords$37 = "viewport";
var ie_id$37 = "";
var chrome_id$37 = "4737164243894272";
var firefox_id$37 = "";
var webkit_id$37 = "";
var shown$37 = true;
var cssDeviceadaptation = {
	title: title$37,
	description: description$37,
	spec: spec$37,
	status: status$37,
	links: links$37,
	bugs: bugs$37,
	categories: categories$37,
	stats: stats$37,
	notes: notes$37,
	notes_by_num: notes_by_num$37,
	usage_perc_y: usage_perc_y$37,
	usage_perc_a: usage_perc_a$37,
	ucprefix: ucprefix$37,
	parent: parent$37,
	keywords: keywords$37,
	ie_id: ie_id$37,
	chrome_id: chrome_id$37,
	firefox_id: firefox_id$37,
	webkit_id: webkit_id$37,
	shown: shown$37
};

var require$$14$1 = Object.freeze({
	title: title$37,
	description: description$37,
	spec: spec$37,
	status: status$37,
	links: links$37,
	bugs: bugs$37,
	categories: categories$37,
	stats: stats$37,
	notes: notes$37,
	notes_by_num: notes_by_num$37,
	usage_perc_y: usage_perc_y$37,
	usage_perc_a: usage_perc_a$37,
	ucprefix: ucprefix$37,
	parent: parent$37,
	keywords: keywords$37,
	ie_id: ie_id$37,
	chrome_id: chrome_id$37,
	firefox_id: firefox_id$37,
	webkit_id: webkit_id$37,
	shown: shown$37,
	default: cssDeviceadaptation
});

var title$38 = "Media Queries: resolution feature";
var description$38 = "Allows a media query to be set based on the device pixels used per CSS unit. While the standard uses `min`/`max-resolution` for this, some browsers support the older non-standard `device-pixel-ratio` media query.";
var spec$38 = "http://www.w3.org/TR/css3-mediaqueries/#resolution";
var status$38 = "rec";
var links$38 = [{"url":"http://www.w3.org/blog/CSS/2012/06/14/unprefix-webkit-device-pixel-ratio/","title":"How to unprefix -webkit-device-pixel-ratio"},{"url":"https://bugs.webkit.org/show_bug.cgi?id=78087","title":"WebKit Bug 78087: Implement the 'resolution' media query"},{"url":"https://compat.spec.whatwg.org/#css-media-queries-webkit-device-pixel-ratio","title":"WHATWG Compatibility Standard: -webkit-device-pixel-ratio"}];
var bugs$38 = [{"description":"Microsoft Edge has a bug where `min-resolution` less than `1dpcm` [is ignored](http://jsfiddle.net/behmjd5t/)."}];
var categories$38 = ["CSS","CSS3"];
var stats$38 = {"ie":{"6":"n","7":"n","8":"n","9":"a #1","10":"a #1","11":"a #1","5.5":"n"},"edge":{"12":"y","13":"y","14":"y"},"firefox":{"2":"n","3":"n","4":"a #2","5":"a #2","6":"a #2","7":"a #2","8":"a #2","9":"a #2","10":"a #2","11":"a #2","12":"a #2","13":"a #2","14":"a #2","15":"a #2","16":"y","17":"y","18":"y","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","3.5":"a #2","3.6":"a #2"},"chrome":{"4":"a x #3","5":"a x #3","6":"a x #3","7":"a x #3","8":"a x #3","9":"a x #3","10":"a x #3","11":"a x #3","12":"a x #3","13":"a x #3","14":"a x #3","15":"a x #3","16":"a x #3","17":"a x #3","18":"a x #3","19":"a x #3","20":"a x #3","21":"a x #3","22":"a x #3","23":"a x #3","24":"a x #3","25":"a x #3","26":"a x #3","27":"a x #3","28":"a x #3","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","51":"y","52":"y","53":"y","54":"y","55":"y"},"safari":{"4":"a x #3","5":"a x #3","6":"a x #3","7":"a x #3","8":"a x #3","9":"a x #3","10":"a x #3","3.1":"n","3.2":"n","5.1":"a x #3","6.1":"a x #3","7.1":"a x #3","9.1":"a x #3","TP":"a x #3"},"opera":{"9":"n","11":"a x #3","12":"a x #3","15":"y","16":"y","17":"y","18":"y","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","9.5-9.6":"a x #3","10.0-10.1":"a x #3","10.5":"a x #3","10.6":"a x #3","11.1":"a x #3","11.5":"a x #3","11.6":"a x #3","12.1":"y"},"ios_saf":{"8":"a x #3","3.2":"u","4.0-4.1":"a x #3","4.2-4.3":"a x #3","5.0-5.1":"a x #3","6.0-6.1":"a x #3","7.0-7.1":"a x #3","8.1-8.4":"a x #3","9.0-9.2":"a x #3","9.3":"a x #3"},"op_mini":{"all":"a #1"},"android":{"3":"a x #3","4":"a x #3","51":"y","2.1":"u","2.2":"u","2.3":"a x #3","4.1":"a x #3","4.2-4.3":"a x #3","4.4":"y","4.4.3-4.4.4":"y"},"bb":{"7":"a x #3","10":"a x #3"},"op_mob":{"10":"a x #3","11":"a x #3","12":"a x #3","37":"y","11.1":"a x #3","11.5":"a x #3","12.1":"y"},"and_chr":{"51":"y"},"and_ff":{"47":"y"},"ie_mob":{"10":"a #1","11":"a #1"},"and_uc":{"9.9":"a x #3"},"samsung":{"4":"y"}};
var notes$38 = "";
var notes_by_num$38 = {"1":"Supports the `dpi` unit, but does not support `dppx` or `dpcm` units.","2":"Firefox before 16 supports only `dpi` unit, but you can set `2dppx` per `min--moz-device-pixel-ratio: 2`","3":"Supports the non-standard `min`/`max-device-pixel-ratio`"};
var usage_perc_y$38 = 66.37;
var usage_perc_a$38 = 30.89;
var ucprefix$38 = false;
var parent$38 = "css-mediaqueries";
var keywords$38 = "@media,device-pixel-ratio,resolution,dppx,dpcm,dpi";
var ie_id$38 = "mediaqueriesresolutionfeature,dppxunitfortheresolutionmediaquery";
var chrome_id$38 = "5944509615570944";
var firefox_id$38 = "";
var webkit_id$38 = "";
var shown$38 = true;
var cssMediaResolution = {
	title: title$38,
	description: description$38,
	spec: spec$38,
	status: status$38,
	links: links$38,
	bugs: bugs$38,
	categories: categories$38,
	stats: stats$38,
	notes: notes$38,
	notes_by_num: notes_by_num$38,
	usage_perc_y: usage_perc_y$38,
	usage_perc_a: usage_perc_a$38,
	ucprefix: ucprefix$38,
	parent: parent$38,
	keywords: keywords$38,
	ie_id: ie_id$38,
	chrome_id: chrome_id$38,
	firefox_id: firefox_id$38,
	webkit_id: webkit_id$38,
	shown: shown$38
};

var require$$13$1 = Object.freeze({
	title: title$38,
	description: description$38,
	spec: spec$38,
	status: status$38,
	links: links$38,
	bugs: bugs$38,
	categories: categories$38,
	stats: stats$38,
	notes: notes$38,
	notes_by_num: notes_by_num$38,
	usage_perc_y: usage_perc_y$38,
	usage_perc_a: usage_perc_a$38,
	ucprefix: ucprefix$38,
	parent: parent$38,
	keywords: keywords$38,
	ie_id: ie_id$38,
	chrome_id: chrome_id$38,
	firefox_id: firefox_id$38,
	webkit_id: webkit_id$38,
	shown: shown$38,
	default: cssMediaResolution
});

var title$39 = "CSS3 text-align-last";
var description$39 = "CSS property to describe how the last line of a block or a line right before a forced line break when `text-align` is `justify`.";
var spec$39 = "http://www.w3.org/TR/css3-text/#text-align-last-property";
var status$39 = "wd";
var links$39 = [{"url":"https://developer.mozilla.org/en-US/docs/Web/CSS/text-align-last","title":"MDN text-align-last"},{"url":"http://blogs.adobe.com/webplatform/2014/02/25/improving-your-sites-visual-details-css3-text-align-last/","title":"Adobe Web Platform Article"}];
var bugs$39 = [];
var categories$39 = ["CSS3"];
var stats$39 = {"ie":{"6":"a #1","7":"a #1","8":"a #1","9":"a #1","10":"a #1","11":"a #1","5.5":"a #1"},"edge":{"12":"a","13":"a","14":"a"},"firefox":{"2":"n","3":"n","4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"y x","13":"y x","14":"y x","15":"y x","16":"y x","17":"y x","18":"y x","19":"y x","20":"y x","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y x","27":"y x","28":"y x","29":"y x","30":"y x","31":"y x","32":"y x","33":"y x","34":"y x","35":"y x","36":"y x","37":"y x","38":"y x","39":"y x","40":"y x","41":"y x","42":"y x","43":"y x","44":"y x","45":"y x","46":"y x","47":"y x","48":"y x","49":"y","50":"y","3.5":"n","3.6":"n"},"chrome":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n","35":"n d #2","36":"n d #2","37":"n d #2","38":"n d #2","39":"n d #2","40":"n d #2","41":"n d #2","42":"n d #2","43":"n d #2","44":"n d #2","45":"n d #2","46":"n d #2","47":"y","48":"y","49":"y","50":"y","51":"y","52":"y","53":"y","54":"y","55":"y"},"safari":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","3.1":"n","3.2":"n","5.1":"n","6.1":"n","7.1":"n","9.1":"n","TP":"n"},"opera":{"9":"n","11":"n","12":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n d #3","23":"n d #3","24":"n d #3","25":"n d #3","26":"n d #3","27":"n d #3","28":"n d #3","29":"n d #3","30":"n d #3","31":"n d #3","32":"n d #3","33":"n d #3","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"n"},"ios_saf":{"8":"n","3.2":"n","4.0-4.1":"n","4.2-4.3":"n","5.0-5.1":"n","6.0-6.1":"n","7.0-7.1":"n","8.1-8.4":"n","9.0-9.2":"n","9.3":"n"},"op_mini":{"all":"n"},"android":{"3":"n","4":"n","51":"y","2.1":"n","2.2":"n","2.3":"n","4.1":"n","4.2-4.3":"n","4.4":"n","4.4.3-4.4.4":"n"},"bb":{"7":"n","10":"n"},"op_mob":{"10":"n","11":"n","12":"n","37":"n","11.1":"n","11.5":"n","12.1":"n"},"and_chr":{"51":"y"},"and_ff":{"47":"y x"},"ie_mob":{"10":"a #1","11":"a #1"},"and_uc":{"9.9":"n"},"samsung":{"4":"n"}};
var notes$39 = "";
var notes_by_num$39 = {"1":"In Internet Explorer, the start and end values are not supported.","2":"Enabled through the \"Enable Experimental Web Platform Features\" flag in chrome://flags","3":"Enabled through the \"Enable Experimental Web Platform Features\" flag in opera://flags"};
var usage_perc_y$39 = 55.58;
var usage_perc_a$39 = 8.66;
var ucprefix$39 = false;
var parent$39 = "";
var keywords$39 = "text align last";
var ie_id$39 = "";
var chrome_id$39 = "";
var firefox_id$39 = "";
var webkit_id$39 = "";
var shown$39 = true;
var cssTextAlignLast = {
	title: title$39,
	description: description$39,
	spec: spec$39,
	status: status$39,
	links: links$39,
	bugs: bugs$39,
	categories: categories$39,
	stats: stats$39,
	notes: notes$39,
	notes_by_num: notes_by_num$39,
	usage_perc_y: usage_perc_y$39,
	usage_perc_a: usage_perc_a$39,
	ucprefix: ucprefix$39,
	parent: parent$39,
	keywords: keywords$39,
	ie_id: ie_id$39,
	chrome_id: chrome_id$39,
	firefox_id: firefox_id$39,
	webkit_id: webkit_id$39,
	shown: shown$39
};

var require$$12$1 = Object.freeze({
	title: title$39,
	description: description$39,
	spec: spec$39,
	status: status$39,
	links: links$39,
	bugs: bugs$39,
	categories: categories$39,
	stats: stats$39,
	notes: notes$39,
	notes_by_num: notes_by_num$39,
	usage_perc_y: usage_perc_y$39,
	usage_perc_a: usage_perc_a$39,
	ucprefix: ucprefix$39,
	parent: parent$39,
	keywords: keywords$39,
	ie_id: ie_id$39,
	chrome_id: chrome_id$39,
	firefox_id: firefox_id$39,
	webkit_id: webkit_id$39,
	shown: shown$39,
	default: cssTextAlignLast
});

var title$40 = "Crisp edges/pixelated images";
var description$40 = "Scales images with an algorithm that preserves edges and contrast, without smoothing colors or introducing blur. This is intended for images such as pixel art. Official values that accomplish this for the `image-rendering` property are `crisp-edges` and `pixelated`.";
var spec$40 = "http://dev.w3.org/csswg/css-images-3/#valdef-image-rendering-crisp-edges";
var status$40 = "unoff";
var links$40 = [{"url":"https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering","title":"MDN article"},{"url":"http://updates.html5rocks.com/2015/01/pixelated","title":"HTML5Rocks article"}];
var bugs$40 = [{"description":"`image-rendering:-webkit-optimize-contrast;` and `-ms-interpolation-mode:nearest-neighbor` do not affect CSS images."}];
var categories$40 = ["CSS","CSS3"];
var stats$40 = {"ie":{"6":"n","7":"a x #2 #5","8":"a x #2 #5","9":"a x #2 #5","10":"a x #2 #5","11":"a x #2 #5","5.5":"n"},"edge":{"12":"n","13":"n","14":"u"},"firefox":{"2":"n","3":"n","4":"y x #3","5":"y x #3","6":"y x #3","7":"y x #3","8":"y x #3","9":"y x #3","10":"y x #3","11":"y x #3","12":"y x #3","13":"y x #3","14":"y x #3","15":"y x #3","16":"y x #3","17":"y x #3","18":"y x #3","19":"y x #3","20":"y x #3","21":"y x #3","22":"y x #3","23":"y x #3","24":"y x #3","25":"y x #3","26":"y x #3","27":"y x #3","28":"y x #3","29":"y x #3","30":"y x #3","31":"y x #3","32":"y x #3","33":"y x #3","34":"y x #3","35":"y x #3","36":"y x #3","37":"y x #3","38":"y x #3","39":"y x #3","40":"y x #3","41":"y x #3","42":"y x #3","43":"y x #3","44":"y x #3","45":"y x #3","46":"y x #3","47":"y x #3","48":"y x #3","49":"y x #3","50":"y x #3","3.5":"n","3.6":"y x #3"},"chrome":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n","35":"n","36":"n","37":"n","38":"n","39":"n","40":"n","41":"y #4","42":"y #4","43":"y #4","44":"y #4","45":"y #4","46":"y #4","47":"y #4","48":"y #4","49":"y #4","50":"y #4","51":"y #4","52":"y #4","53":"y #4","54":"y #4","55":"y #4"},"safari":{"4":"n","5":"n","6":"a x #1","7":"a x #3 #6","8":"a x #3 #6","9":"a x #3 #6","10":"y","3.1":"n","3.2":"n","5.1":"n","6.1":"a x #3 #6","7.1":"a x #3 #6","9.1":"a x #3 #6","TP":"y"},"opera":{"9":"n","11":"n","12":"y x #3","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"y #4","29":"y #4","30":"y #4","31":"y #4","32":"y #4","33":"y #4","34":"y #4","35":"y #4","36":"y #4","37":"y #4","38":"y #4","39":"y #4","40":"y #4","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"y x #3","12.1":"y x #3"},"ios_saf":{"8":"a x #3 #6","3.2":"n","4.0-4.1":"n","4.2-4.3":"n","5.0-5.1":"a x #1 #6","6.0-6.1":"a x #1 #6","7.0-7.1":"a x #3 #6","8.1-8.4":"a x #3 #6","9.0-9.2":"a x #3 #6","9.3":"a x #3 #6"},"op_mini":{"all":"n"},"android":{"3":"n","4":"n","51":"y #4","2.1":"n","2.2":"n","2.3":"n","4.1":"n","4.2-4.3":"n","4.4":"n","4.4.3-4.4.4":"n"},"bb":{"7":"n","10":"a x #1 #6"},"op_mob":{"10":"n","11":"n","12":"y x #3","37":"y #4","11.1":"n","11.5":"n","12.1":"y x #3"},"and_chr":{"51":"y #4"},"and_ff":{"47":"y x #3"},"ie_mob":{"10":"a x #2 #5","11":"a x #2 #5"},"and_uc":{"9.9":"a x #1 #6"},"samsung":{"4":"y #4"}};
var notes$40 = "Note that prefixes apply to the value (e.g. `-moz-crisp-edges`), not the `image-rendering` property.";
var notes_by_num$40 = {"1":"Supported using the non-standard value `-webkit-optimize-contrast`","2":"Internet Explorer accomplishes support using the non-standard declaration `-ms-interpolation-mode: nearest-neighbor`","3":"Supports the `crisp-edges` value, but not `pixelated`.","4":"Supports the `pixelated` value, but not `crisp-edges`.","5":"Only works on `<img>`, not CSS backgrounds or `<canvas>`.","6":"Only works on `<img>` and CSS backgrounds, _not_ `<canvas>`. "};
var usage_perc_y$40 = 60.59;
var usage_perc_a$40 = 24.89;
var ucprefix$40 = false;
var parent$40 = "";
var keywords$40 = "image-rendering,crisp-edges";
var ie_id$40 = "";
var chrome_id$40 = "5118058116939776";
var firefox_id$40 = "";
var webkit_id$40 = "";
var shown$40 = true;
var cssCrispEdges = {
	title: title$40,
	description: description$40,
	spec: spec$40,
	status: status$40,
	links: links$40,
	bugs: bugs$40,
	categories: categories$40,
	stats: stats$40,
	notes: notes$40,
	notes_by_num: notes_by_num$40,
	usage_perc_y: usage_perc_y$40,
	usage_perc_a: usage_perc_a$40,
	ucprefix: ucprefix$40,
	parent: parent$40,
	keywords: keywords$40,
	ie_id: ie_id$40,
	chrome_id: chrome_id$40,
	firefox_id: firefox_id$40,
	webkit_id: webkit_id$40,
	shown: shown$40
};

var require$$11$1 = Object.freeze({
	title: title$40,
	description: description$40,
	spec: spec$40,
	status: status$40,
	links: links$40,
	bugs: bugs$40,
	categories: categories$40,
	stats: stats$40,
	notes: notes$40,
	notes_by_num: notes_by_num$40,
	usage_perc_y: usage_perc_y$40,
	usage_perc_a: usage_perc_a$40,
	ucprefix: ucprefix$40,
	parent: parent$40,
	keywords: keywords$40,
	ie_id: ie_id$40,
	chrome_id: chrome_id$40,
	firefox_id: firefox_id$40,
	webkit_id: webkit_id$40,
	shown: shown$40,
	default: cssCrispEdges
});

var title$41 = "CSS Logical Properties";
var description$41 = "Use start/end properties that depend on LTR or RTL writing direction instead of left/right";
var spec$41 = "http://dev.w3.org/csswg/css-logical-props/";
var status$41 = "unoff";
var links$41 = [{"url":"https://developer.mozilla.org/en-US/docs/Web/CSS/-moz-margin-start","title":"MDN -moz-margin-start"},{"url":"https://developer.mozilla.org/en-US/docs/Web/CSS/-moz-padding-start","title":"MDN -moz-padding-start"},{"url":"https://wpdev.uservoice.com/forums/257854-microsoft-edge-developer/suggestions/7438435-css-logical-properties","title":"Microsoft Edge feature request on UserVoice"}];
var bugs$41 = [];
var categories$41 = ["CSS","CSS3"];
var stats$41 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","5.5":"n"},"edge":{"12":"n","13":"n","14":"u"},"firefox":{"2":"n","3":"a x #1","4":"a x #1","5":"a x #1","6":"a x #1","7":"a x #1","8":"a x #1","9":"a x #1","10":"a x #1","11":"a x #1","12":"a x #1","13":"a x #1","14":"a x #1","15":"a x #1","16":"a x #1","17":"a x #1","18":"a x #1","19":"a x #1","20":"a x #1","21":"a x #1","22":"a x #1","23":"a x #1","24":"a x #1","25":"a x #1","26":"a x #1","27":"a x #1","28":"a x #1","29":"a x #1","30":"a x #1","31":"a x #1","32":"a x #1","33":"a x #1","34":"a x #1","35":"a x #1","36":"a x #1","37":"a x #1","38":"a x #1","39":"a x #1","40":"a x #1","41":"a x #1","42":"a x #1","43":"a x #1","44":"a x #1","45":"a x #1","46":"a x #1","47":"a x #1","48":"a x #1","49":"a x #1","50":"a x #1","3.5":"a x #1","3.6":"a x #1"},"chrome":{"4":"a x #2","5":"a x #2","6":"a x #2","7":"a x #2","8":"a x #2","9":"a x #2","10":"a x #2","11":"a x #2","12":"a x #2","13":"a x #2","14":"a x #2","15":"a x #2","16":"a x #2","17":"a x #2","18":"a x #2","19":"a x #2","20":"a x #2","21":"a x #2","22":"a x #2","23":"a x #2","24":"a x #2","25":"a x #2","26":"a x #2","27":"a x #2","28":"a x #2","29":"a x #2","30":"a x #2","31":"a x #2","32":"a x #2","33":"a x #2","34":"a x #2","35":"a x #2","36":"a x #2","37":"a x #2","38":"a x #2","39":"a x #2","40":"a x #2","41":"a x #2","42":"a x #2","43":"a x #2","44":"a x #2","45":"a x #2","46":"a x #2","47":"a x #2","48":"a x #2","49":"a x #2","50":"a x #2","51":"a x #2","52":"a x #2","53":"a x #2","54":"a x #2","55":"a x #2"},"safari":{"4":"a x #2","5":"a x #2","6":"a x #2","7":"a x #2","8":"a x #2","9":"a x #2","10":"a x #2","3.1":"a x #2","3.2":"a x #2","5.1":"a x #2","6.1":"a x #2","7.1":"a x #2","9.1":"a x #2","TP":"a x #2"},"opera":{"9":"n","11":"n","12":"n","15":"a x #2","16":"a x #2","17":"a x #2","18":"a x #2","19":"a x #2","20":"a x #2","21":"a x #2","22":"a x #2","23":"a x #2","24":"a x #2","25":"a x #2","26":"a x #2","27":"a x #2","28":"a x #2","29":"a x #2","30":"a x #2","31":"a x #2","32":"a x #2","33":"a x #2","34":"a x #2","35":"a x #2","36":"a x #2","37":"a x #2","38":"a x #2","39":"a x #2","40":"a x #2","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"n"},"ios_saf":{"8":"a x #2","3.2":"a x #2","4.0-4.1":"a x #2","4.2-4.3":"a x #2","5.0-5.1":"a x #2","6.0-6.1":"a x #2","7.0-7.1":"a x #2","8.1-8.4":"a x #2","9.0-9.2":"a x #2","9.3":"a x #2"},"op_mini":{"all":"n"},"android":{"3":"a x #2","4":"a x #2","51":"a x #2","2.1":"a x #2","2.2":"a x #2","2.3":"a x #2","4.1":"a x #2","4.2-4.3":"a x #2","4.4":"a x #2","4.4.3-4.4.4":"a x #2"},"bb":{"7":"a x #2","10":"a x #2"},"op_mob":{"10":"n","11":"n","12":"n","37":"a x #2","11.1":"n","11.5":"n","12.1":"n"},"and_chr":{"51":"a x #2"},"and_ff":{"47":"a x #1"},"ie_mob":{"10":"n","11":"n"},"and_uc":{"9.9":"a x #2"},"samsung":{"4":"a x #2"}};
var notes$41 = "";
var notes_by_num$41 = {"1":"Only supports the *-start, and *-end values for `margin`, `border` and `padding`, not the inline/block type values as defined in the spec.","2":"Like #1 but also supports `*-before` and `*-end` for `*-block-start` and `*-block-end` properties as well as `start` and `end` values for `text-align`"};
var usage_perc_y$41 = 0;
var usage_perc_a$41 = 84.47;
var ucprefix$41 = false;
var parent$41 = "";
var keywords$41 = "margin-start,margin-end,padding-start,padding-end,border-start,border-end,inline-start,inline-end,block-start,block-end";
var ie_id$41 = "csslogicalpropertieslevel1";
var chrome_id$41 = "";
var firefox_id$41 = "";
var webkit_id$41 = "";
var shown$41 = true;
var cssLogicalProps = {
	title: title$41,
	description: description$41,
	spec: spec$41,
	status: status$41,
	links: links$41,
	bugs: bugs$41,
	categories: categories$41,
	stats: stats$41,
	notes: notes$41,
	notes_by_num: notes_by_num$41,
	usage_perc_y: usage_perc_y$41,
	usage_perc_a: usage_perc_a$41,
	ucprefix: ucprefix$41,
	parent: parent$41,
	keywords: keywords$41,
	ie_id: ie_id$41,
	chrome_id: chrome_id$41,
	firefox_id: firefox_id$41,
	webkit_id: webkit_id$41,
	shown: shown$41
};

var require$$10$1 = Object.freeze({
	title: title$41,
	description: description$41,
	spec: spec$41,
	status: status$41,
	links: links$41,
	bugs: bugs$41,
	categories: categories$41,
	stats: stats$41,
	notes: notes$41,
	notes_by_num: notes_by_num$41,
	usage_perc_y: usage_perc_y$41,
	usage_perc_a: usage_perc_a$41,
	ucprefix: ucprefix$41,
	parent: parent$41,
	keywords: keywords$41,
	ie_id: ie_id$41,
	chrome_id: chrome_id$41,
	firefox_id: firefox_id$41,
	webkit_id: webkit_id$41,
	shown: shown$41,
	default: cssLogicalProps
});

var title$42 = "CSS Appearance";
var description$42 = "The `appearance` property defines how elements (particularly form controls) appear by default. By setting the value to `none` the default appearance can be entirely redefined using other CSS properties.";
var spec$42 = "https://drafts.csswg.org/css-ui-4/#appearance-switching";
var status$42 = "wd";
var links$42 = [{"url":"http://css-tricks.com/almanac/properties/a/appearance/","title":"CSS Tricks article"}];
var bugs$42 = [];
var categories$42 = ["CSS"];
var stats$42 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","5.5":"n"},"edge":{"12":"a #1 #2","13":"a #1 #2","14":"a #1 #2"},"firefox":{"2":"a x #1","3":"a x #1","4":"a x #1","5":"a x #1","6":"a x #1","7":"a x #1","8":"a x #1","9":"a x #1","10":"a x #1","11":"a x #1","12":"a x #1","13":"a x #1","14":"a x #1","15":"a x #1","16":"a x #1","17":"a x #1","18":"a x #1","19":"a x #1","20":"a x #1","21":"a x #1","22":"a x #1","23":"a x #1","24":"a x #1","25":"a x #1","26":"a x #1","27":"a x #1","28":"a x #1","29":"a x #1","30":"a x #1","31":"a x #1","32":"a x #1","33":"a x #1","34":"a x #1","35":"a x #1","36":"a x #1","37":"a x #1","38":"a x #1","39":"a x #1","40":"a x #1","41":"a x #1","42":"a x #1","43":"a x #1","44":"a x #1","45":"a x #1","46":"a x #1","47":"a x #1","48":"a x #1","49":"a x #1","50":"a x #1","3.5":"a x #1","3.6":"a x #1"},"chrome":{"4":"a x #1","5":"a x #1","6":"a x #1","7":"a x #1","8":"a x #1","9":"a x #1","10":"a x #1","11":"a x #1","12":"a x #1","13":"a x #1","14":"a x #1","15":"a x #1","16":"a x #1","17":"a x #1","18":"a x #1","19":"a x #1","20":"a x #1","21":"a x #1","22":"a x #1","23":"a x #1","24":"a x #1","25":"a x #1","26":"a x #1","27":"a x #1","28":"a x #1","29":"a x #1","30":"a x #1","31":"a x #1","32":"a x #1","33":"a x #1","34":"a x #1","35":"a x #1","36":"a x #1","37":"a x #1","38":"a x #1","39":"a x #1","40":"a x #1","41":"a x #1","42":"a x #1","43":"a x #1","44":"a x #1","45":"a x #1","46":"a x #1","47":"a x #1","48":"a x #1","49":"a x #1","50":"a x #1","51":"a x #1","52":"a x #1","53":"a x #1","54":"a x #1","55":"a x #1"},"safari":{"4":"a x #1","5":"a x #1","6":"a x #1","7":"a x #1","8":"a x #1","9":"a x #1","10":"a x #1","3.1":"a x #1","3.2":"a x #1","5.1":"a x #1","6.1":"a x #1","7.1":"a x #1","9.1":"a x #1","TP":"a x #1"},"opera":{"9":"n","11":"n","12":"n","15":"a x #1","16":"a x #1","17":"a x #1","18":"a x #1","19":"a x #1","20":"a x #1","21":"a x #1","22":"a x #1","23":"a x #1","24":"a x #1","25":"a x #1","26":"a x #1","27":"a x #1","28":"a x #1","29":"a x #1","30":"a x #1","31":"a x #1","32":"a x #1","33":"a x #1","34":"a x #1","35":"a x #1","36":"a x #1","37":"a x #1","38":"a x #1","39":"a x #1","40":"a x #1","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"n"},"ios_saf":{"8":"a x #1","3.2":"a x #1","4.0-4.1":"a x #1","4.2-4.3":"a x #1","5.0-5.1":"a x #1","6.0-6.1":"a x #1","7.0-7.1":"a x #1","8.1-8.4":"a x #1","9.0-9.2":"a x #1","9.3":"a x #1"},"op_mini":{"all":"n"},"android":{"3":"a x #1","4":"a x #1","51":"a x #1","2.1":"a x #1","2.2":"a x #1","2.3":"a x #1","4.1":"a x #1","4.2-4.3":"a x #1","4.4":"a x #1","4.4.3-4.4.4":"a x #1"},"bb":{"7":"a x #1","10":"a x #1"},"op_mob":{"10":"n","11":"n","12":"n","37":"a x #1","11.1":"n","11.5":"n","12.1":"n"},"and_chr":{"51":"a x #1"},"and_ff":{"47":"a x #1"},"ie_mob":{"10":"n","11":"a #1 #2"},"and_uc":{"9.9":"a x #1"},"samsung":{"4":"a x #1"}};
var notes$42 = "";
var notes_by_num$42 = {"1":"The appearance property is supported with the `none` value, but not `auto`. Webkit, Blink, and Gecko browsers also support additional vendor specific values.","2":"Microsoft Edge and IE Mobile support this property with the `-webkit-` prefix, rather than `-ms-` for interop reasons."};
var usage_perc_y$42 = 0;
var usage_perc_a$42 = 86.53;
var ucprefix$42 = false;
var parent$42 = "";
var keywords$42 = "";
var ie_id$42 = "";
var chrome_id$42 = "";
var firefox_id$42 = "";
var webkit_id$42 = "";
var shown$42 = true;
var cssAppearance = {
	title: title$42,
	description: description$42,
	spec: spec$42,
	status: status$42,
	links: links$42,
	bugs: bugs$42,
	categories: categories$42,
	stats: stats$42,
	notes: notes$42,
	notes_by_num: notes_by_num$42,
	usage_perc_y: usage_perc_y$42,
	usage_perc_a: usage_perc_a$42,
	ucprefix: ucprefix$42,
	parent: parent$42,
	keywords: keywords$42,
	ie_id: ie_id$42,
	chrome_id: chrome_id$42,
	firefox_id: firefox_id$42,
	webkit_id: webkit_id$42,
	shown: shown$42
};

var require$$9$1 = Object.freeze({
	title: title$42,
	description: description$42,
	spec: spec$42,
	status: status$42,
	links: links$42,
	bugs: bugs$42,
	categories: categories$42,
	stats: stats$42,
	notes: notes$42,
	notes_by_num: notes_by_num$42,
	usage_perc_y: usage_perc_y$42,
	usage_perc_a: usage_perc_a$42,
	ucprefix: ucprefix$42,
	parent: parent$42,
	keywords: keywords$42,
	ie_id: ie_id$42,
	chrome_id: chrome_id$42,
	firefox_id: firefox_id$42,
	webkit_id: webkit_id$42,
	shown: shown$42,
	default: cssAppearance
});

var title$43 = "CSS Scroll snap points";
var description$43 = "CSS technique that allows customizable scrolling experiences like pagination of carousels by setting defined snap points.";
var spec$43 = "http://www.w3.org/TR/css-snappoints-1/";
var status$43 = "wd";
var links$43 = [{"url":"http://generatedcontent.org/post/66817675443/setting-native-like-scrolling-offsets-in-css-with","title":"Blog post"},{"url":"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap_Points","title":"MDN Documentation for CSS Scroll snap points"},{"url":"https://github.com/ckrack/scrollsnap-polyfill","title":"Polyfill"}];
var bugs$43 = [];
var categories$43 = ["CSS"];
var stats$43 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"a x #1","11":"a x #2","5.5":"n"},"edge":{"12":"a x #2","13":"a x #2","14":"a x #2"},"firefox":{"2":"n","3":"n","4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n","35":"n","36":"n","37":"n","38":"n","39":"y","40":"y","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","3.5":"n","3.6":"n"},"chrome":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n","35":"n","36":"n","37":"n","38":"n","39":"n","40":"n","41":"n","42":"n","43":"n","44":"n","45":"n","46":"n","47":"n","48":"n","49":"n","50":"n","51":"n","52":"n","53":"n","54":"n","55":"n"},"safari":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"a x #4","10":"a x #4","3.1":"n","3.2":"n","5.1":"n","6.1":"n","7.1":"n","9.1":"a x #4","TP":"a x #4"},"opera":{"9":"n","11":"n","12":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n","35":"n","36":"n","37":"n","38":"n","39":"n","40":"n","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"n"},"ios_saf":{"8":"n","3.2":"n","4.0-4.1":"n","4.2-4.3":"n","5.0-5.1":"n","6.0-6.1":"n","7.0-7.1":"n","8.1-8.4":"n","9.0-9.2":"y x","9.3":"y x"},"op_mini":{"all":"n"},"android":{"3":"n","4":"n","51":"n","2.1":"n","2.2":"n","2.3":"n","4.1":"n","4.2-4.3":"n","4.4":"n","4.4.3-4.4.4":"n"},"bb":{"7":"n","10":"n"},"op_mob":{"10":"n","11":"n","12":"n","37":"n","11.1":"n","11.5":"n","12.1":"n"},"and_chr":{"51":"n"},"and_ff":{"47":"n"},"ie_mob":{"10":"n","11":"n"},"and_uc":{"9.9":"n"},"samsung":{"4":"n"}};
var notes$43 = "Works in the iOS WKWebView, but not UIWebView.";
var notes_by_num$43 = {"1":"Partial support in IE10 refers to support limited to touch screens.","2":"Partial support in IE11 [documented here](https://dl.dropboxusercontent.com/u/444684/openwebref/CSS/scroll-snap-points/support.html)","3":"Can be enabled in Firefox using the `layout.css.scroll-snap.enabled` flag in `about:config`","4":"Partial support in Safari refers to not supporting the `none` keyword in `scroll-snap-points-x`, `scroll-snap-points-y` and `scroll-snap-coordinate`, and length keywords (`top`, `right`, etc.) in `scroll-snap-destination` and `scroll-snap-coordinate`."};
var usage_perc_y$43 = 15.3;
var usage_perc_a$43 = 8.67;
var ucprefix$43 = false;
var parent$43 = "";
var keywords$43 = "scroll-snap-points-x,scroll-snap-points-y,scroll-snap-type,scroll-snap-destination,scroll-snap-coordinate";
var ie_id$43 = "cssscrollingsnappoints";
var chrome_id$43 = "";
var firefox_id$43 = "";
var webkit_id$43 = "specification-css-scroll-snap-points-module-level-1";
var shown$43 = true;
var cssSnappoints = {
	title: title$43,
	description: description$43,
	spec: spec$43,
	status: status$43,
	links: links$43,
	bugs: bugs$43,
	categories: categories$43,
	stats: stats$43,
	notes: notes$43,
	notes_by_num: notes_by_num$43,
	usage_perc_y: usage_perc_y$43,
	usage_perc_a: usage_perc_a$43,
	ucprefix: ucprefix$43,
	parent: parent$43,
	keywords: keywords$43,
	ie_id: ie_id$43,
	chrome_id: chrome_id$43,
	firefox_id: firefox_id$43,
	webkit_id: webkit_id$43,
	shown: shown$43
};

var require$$8$1 = Object.freeze({
	title: title$43,
	description: description$43,
	spec: spec$43,
	status: status$43,
	links: links$43,
	bugs: bugs$43,
	categories: categories$43,
	stats: stats$43,
	notes: notes$43,
	notes_by_num: notes_by_num$43,
	usage_perc_y: usage_perc_y$43,
	usage_perc_a: usage_perc_a$43,
	ucprefix: ucprefix$43,
	parent: parent$43,
	keywords: keywords$43,
	ie_id: ie_id$43,
	chrome_id: chrome_id$43,
	firefox_id: firefox_id$43,
	webkit_id: webkit_id$43,
	shown: shown$43,
	default: cssSnappoints
});

var title$44 = "CSS Regions";
var description$44 = "Method of flowing content into multiple elements.";
var spec$44 = "http://www.w3.org/TR/css3-regions/";
var status$44 = "wd";
var links$44 = [{"url":"http://html.adobe.com/webstandards/cssregions/","title":"Adobe demos and samples"},{"url":"http://msdn.microsoft.com/en-us/ie/hh272902#_CSSConnected","title":"IE10 developer guide info"},{"url":"http://docs.webplatform.org/wiki/css/atrules/@region","title":"WebPlatform Docs"},{"url":"https://bugzilla.mozilla.org/show_bug.cgi?id=674802","title":"Firefox feature request bug"}];
var bugs$44 = [];
var categories$44 = ["CSS3"];
var stats$44 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"a x #1","11":"a x #1","5.5":"n"},"edge":{"12":"a x #1","13":"a x #1","14":"a x #1"},"firefox":{"2":"n","3":"n","4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n","35":"n","36":"n","37":"n","38":"n","39":"n","40":"n","41":"n","42":"n","43":"n","44":"n","45":"n","46":"n","47":"n","48":"n","49":"n","50":"n","3.5":"n","3.6":"n"},"chrome":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"a x","16":"a x","17":"a x","18":"a x","19":"n d","20":"n d","21":"n d","22":"n d","23":"n d","24":"n d","25":"n d","26":"n d","27":"n d","28":"n d","29":"n d","30":"n d","31":"n d","32":"n d","33":"n d","34":"n d","35":"n","36":"n","37":"n","38":"n","39":"n","40":"n","41":"n","42":"n","43":"n","44":"n","45":"n","46":"n","47":"n","48":"n","49":"n","50":"n","51":"n","52":"n","53":"n","54":"n","55":"n"},"safari":{"4":"n","5":"n","6":"n","7":"y x","8":"y x","9":"y x","10":"y x","3.1":"n","3.2":"n","5.1":"n","6.1":"y x","7.1":"y x","9.1":"y x","TP":"y x"},"opera":{"9":"n","11":"n","12":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n","35":"n","36":"n","37":"n","38":"n","39":"n","40":"n","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"n"},"ios_saf":{"8":"y x","3.2":"n","4.0-4.1":"n","4.2-4.3":"n","5.0-5.1":"n","6.0-6.1":"n","7.0-7.1":"y x","8.1-8.4":"y x","9.0-9.2":"y x","9.3":"y x"},"op_mini":{"all":"n"},"android":{"3":"n","4":"n","51":"n","2.1":"n","2.2":"n","2.3":"n","4.1":"n","4.2-4.3":"n","4.4":"n","4.4.3-4.4.4":"n"},"bb":{"7":"n","10":"n"},"op_mob":{"10":"n","11":"n","12":"n","37":"n","11.1":"n","11.5":"n","12.1":"n"},"and_chr":{"51":"n"},"and_ff":{"47":"n"},"ie_mob":{"10":"a x #1","11":"a x #1"},"and_uc":{"9.9":"y x"},"samsung":{"4":"n"}};
var notes$44 = "";
var notes_by_num$44 = {"1":"Support is limited to using an iframe as a content source with the `-ms-flow-into: flow_name;` and `-ms-flow-from: flow_name;` syntax."};
var usage_perc_y$44 = 17.75;
var usage_perc_a$44 = 7.56;
var ucprefix$44 = false;
var parent$44 = "";
var keywords$44 = "";
var ie_id$44 = "regions";
var chrome_id$44 = "5655612935372800";
var firefox_id$44 = "";
var webkit_id$44 = "";
var shown$44 = true;
var cssRegions = {
	title: title$44,
	description: description$44,
	spec: spec$44,
	status: status$44,
	links: links$44,
	bugs: bugs$44,
	categories: categories$44,
	stats: stats$44,
	notes: notes$44,
	notes_by_num: notes_by_num$44,
	usage_perc_y: usage_perc_y$44,
	usage_perc_a: usage_perc_a$44,
	ucprefix: ucprefix$44,
	parent: parent$44,
	keywords: keywords$44,
	ie_id: ie_id$44,
	chrome_id: chrome_id$44,
	firefox_id: firefox_id$44,
	webkit_id: webkit_id$44,
	shown: shown$44
};

var require$$7$1 = Object.freeze({
	title: title$44,
	description: description$44,
	spec: spec$44,
	status: status$44,
	links: links$44,
	bugs: bugs$44,
	categories: categories$44,
	stats: stats$44,
	notes: notes$44,
	notes_by_num: notes_by_num$44,
	usage_perc_y: usage_perc_y$44,
	usage_perc_a: usage_perc_a$44,
	ucprefix: ucprefix$44,
	parent: parent$44,
	keywords: keywords$44,
	ie_id: ie_id$44,
	chrome_id: chrome_id$44,
	firefox_id: firefox_id$44,
	webkit_id: webkit_id$44,
	shown: shown$44,
	default: cssRegions
});

var title$45 = "CSS image-set";
var description$45 = "Method of letting the browser pick the most appropriate CSS background image from a given set, primarily for high PPI screens.";
var spec$45 = "http://dev.w3.org/csswg/css-images-3/#image-set-notation";
var status$45 = "unoff";
var links$45 = [{"url":"http://cloudfour.com/examples/image-set/","title":"Demo"},{"url":"https://wpdev.uservoice.com/forums/257854-microsoft-edge-developer/suggestions/6606738-image-set","title":"Microsoft Edge feature request on UserVoice"}];
var bugs$45 = [];
var categories$45 = ["CSS"];
var stats$45 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","5.5":"n"},"edge":{"12":"n","13":"n","14":"u"},"firefox":{"2":"n","3":"n","4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n","35":"n","36":"n","37":"n","38":"n","39":"n","40":"n","41":"n","42":"n","43":"n","44":"n","45":"n","46":"n","47":"n","48":"n","49":"n","50":"n","3.5":"n","3.6":"n"},"chrome":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y x","27":"y x","28":"y x","29":"y x","30":"y x","31":"y x","32":"y x","33":"y x","34":"y x","35":"y x","36":"y x","37":"y x","38":"y x","39":"y x","40":"y x","41":"y x","42":"y x","43":"y x","44":"y x","45":"y x","46":"y x","47":"y x","48":"y x","49":"y x","50":"y x","51":"y x","52":"y x","53":"y x","54":"y x","55":"y x"},"safari":{"4":"n","5":"n","6":"y x","7":"y x","8":"y x","9":"y x","10":"y x","3.1":"n","3.2":"n","5.1":"n","6.1":"y x","7.1":"y x","9.1":"y x","TP":"y x"},"opera":{"9":"n","11":"n","12":"n","15":"y x","16":"y x","17":"y x","18":"y x","19":"y x","20":"y x","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y x","27":"y x","28":"y x","29":"y x","30":"y x","31":"y x","32":"y x","33":"y x","34":"y x","35":"y x","36":"y x","37":"y x","38":"y x","39":"y x","40":"y x","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"n"},"ios_saf":{"8":"y x","3.2":"n","4.0-4.1":"n","4.2-4.3":"n","5.0-5.1":"n","6.0-6.1":"y x","7.0-7.1":"y x","8.1-8.4":"y x","9.0-9.2":"y x","9.3":"y x"},"op_mini":{"all":"n"},"android":{"3":"n","4":"n","51":"y x","2.1":"n","2.2":"n","2.3":"n","4.1":"n","4.2-4.3":"n","4.4":"y x","4.4.3-4.4.4":"y x"},"bb":{"7":"n","10":"y x"},"op_mob":{"10":"n","11":"n","12":"n","37":"y x","11.1":"n","11.5":"n","12.1":"n"},"and_chr":{"51":"y x"},"and_ff":{"47":"n"},"ie_mob":{"10":"n","11":"n"},"and_uc":{"9.9":"n"},"samsung":{"4":"y x"}};
var notes$45 = "";
var notes_by_num$45 = {};
var usage_perc_y$45 = 68.09;
var usage_perc_a$45 = 0;
var ucprefix$45 = false;
var parent$45 = "";
var keywords$45 = "";
var ie_id$45 = "cssimageset";
var chrome_id$45 = "";
var firefox_id$45 = "";
var webkit_id$45 = "";
var shown$45 = true;
var cssImageSet = {
	title: title$45,
	description: description$45,
	spec: spec$45,
	status: status$45,
	links: links$45,
	bugs: bugs$45,
	categories: categories$45,
	stats: stats$45,
	notes: notes$45,
	notes_by_num: notes_by_num$45,
	usage_perc_y: usage_perc_y$45,
	usage_perc_a: usage_perc_a$45,
	ucprefix: ucprefix$45,
	parent: parent$45,
	keywords: keywords$45,
	ie_id: ie_id$45,
	chrome_id: chrome_id$45,
	firefox_id: firefox_id$45,
	webkit_id: webkit_id$45,
	shown: shown$45
};

var require$$6$1 = Object.freeze({
	title: title$45,
	description: description$45,
	spec: spec$45,
	status: status$45,
	links: links$45,
	bugs: bugs$45,
	categories: categories$45,
	stats: stats$45,
	notes: notes$45,
	notes_by_num: notes_by_num$45,
	usage_perc_y: usage_perc_y$45,
	usage_perc_a: usage_perc_a$45,
	ucprefix: ucprefix$45,
	parent: parent$45,
	keywords: keywords$45,
	ie_id: ie_id$45,
	chrome_id: chrome_id$45,
	firefox_id: firefox_id$45,
	webkit_id: webkit_id$45,
	shown: shown$45,
	default: cssImageSet
});

var title$46 = "CSS writing-mode property";
var description$46 = "Property to define whether lines of text are laid out horizontally or vertically and the direction in which blocks progress.";
var spec$46 = "https://drafts.csswg.org/css-writing-modes-3/#block-flow";
var status$46 = "cr";
var links$46 = [{"url":"https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode","title":"MDN article"}];
var bugs$46 = [];
var categories$46 = ["CSS"];
var stats$46 = {"ie":{"6":"a #1","7":"a #1","8":"a #1","9":"a #1","10":"a #1","11":"a #1","5.5":"a #1"},"edge":{"12":"y","13":"y","14":"y"},"firefox":{"2":"n","3":"n","4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n","35":"n","36":"n d #2","37":"n d #2","38":"n d #2","39":"n d #2","40":"n d #2","41":"y","42":"y","43":"y","44":"y","45":"y","46":"y","47":"y","48":"y","49":"y","50":"y","3.5":"n","3.6":"n"},"chrome":{"4":"n","5":"n","6":"n","7":"u","8":"y x","9":"y x","10":"y x","11":"y x","12":"y x","13":"y x","14":"y x","15":"y x","16":"y x","17":"y x","18":"y x","19":"y x","20":"y x","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y x","27":"y x","28":"y x","29":"y x","30":"y x","31":"y x","32":"y x","33":"y x","34":"y x","35":"y x","36":"y x","37":"y x","38":"y x","39":"y x","40":"y x","41":"y x","42":"y x","43":"y x","44":"y x","45":"y x","46":"y x","47":"y x","48":"y x","49":"y x","50":"y x","51":"y x","52":"y x","53":"y x","54":"y x","55":"y x"},"safari":{"4":"n","5":"u","6":"y x","7":"y x","8":"y x","9":"y x","10":"y x","3.1":"n","3.2":"n","5.1":"y x","6.1":"y x","7.1":"y x","9.1":"y x","TP":"y x"},"opera":{"9":"n","11":"n","12":"n","15":"y x","16":"y x","17":"y x","18":"y x","19":"y x","20":"y x","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y x","27":"y x","28":"y x","29":"y x","30":"y x","31":"y x","32":"y x","33":"y x","34":"y x","35":"y x","36":"y x","37":"y x","38":"y x","39":"y x","40":"y x","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"n"},"ios_saf":{"8":"y x","3.2":"u","4.0-4.1":"u","4.2-4.3":"u","5.0-5.1":"y x","6.0-6.1":"y x","7.0-7.1":"y x","8.1-8.4":"y x","9.0-9.2":"y x","9.3":"y x"},"op_mini":{"all":"n"},"android":{"3":"y x","4":"y x","51":"y x","2.1":"n","2.2":"n","2.3":"n","4.1":"y x","4.2-4.3":"y x","4.4":"y x","4.4.3-4.4.4":"y x"},"bb":{"7":"y x","10":"y x"},"op_mob":{"10":"n","11":"n","12":"n","37":"y x","11.1":"n","11.5":"n","12.1":"n"},"and_chr":{"51":"y x"},"and_ff":{"47":"y"},"ie_mob":{"10":"a x","11":"a x"},"and_uc":{"9.9":"y x"},"samsung":{"4":"y x"}};
var notes$46 = "";
var notes_by_num$46 = {"1":"Internet Explorer supports different values from an [earlier version of the spec](http://www.w3.org/TR/2003/CR-css3-text-20030514/#Progression), which originated from SVG.","2":"Supported in Firefox under the `layout.css.vertical-text.enabled` flag"};
var usage_perc_y$46 = 84.65;
var usage_perc_a$46 = 7.17;
var ucprefix$46 = false;
var parent$46 = "";
var keywords$46 = "css,writing,direction,i18n,vertical,ltr,rtl";
var ie_id$46 = "";
var chrome_id$46 = "";
var firefox_id$46 = "";
var webkit_id$46 = "";
var shown$46 = true;
var cssWritingMode = {
	title: title$46,
	description: description$46,
	spec: spec$46,
	status: status$46,
	links: links$46,
	bugs: bugs$46,
	categories: categories$46,
	stats: stats$46,
	notes: notes$46,
	notes_by_num: notes_by_num$46,
	usage_perc_y: usage_perc_y$46,
	usage_perc_a: usage_perc_a$46,
	ucprefix: ucprefix$46,
	parent: parent$46,
	keywords: keywords$46,
	ie_id: ie_id$46,
	chrome_id: chrome_id$46,
	firefox_id: firefox_id$46,
	webkit_id: webkit_id$46,
	shown: shown$46
};

var require$$5$1 = Object.freeze({
	title: title$46,
	description: description$46,
	spec: spec$46,
	status: status$46,
	links: links$46,
	bugs: bugs$46,
	categories: categories$46,
	stats: stats$46,
	notes: notes$46,
	notes_by_num: notes_by_num$46,
	usage_perc_y: usage_perc_y$46,
	usage_perc_a: usage_perc_a$46,
	ucprefix: ucprefix$46,
	parent: parent$46,
	keywords: keywords$46,
	ie_id: ie_id$46,
	chrome_id: chrome_id$46,
	firefox_id: firefox_id$46,
	webkit_id: webkit_id$46,
	shown: shown$46,
	default: cssWritingMode
});

var title$47 = "CSS Cross-Fade Function";
var description$47 = "Image function to create a \"crossfade\" between images. This allows one image to transition (fade) into another based on a percentage value.";
var spec$47 = "https://drafts.csswg.org/css-images-3/#cross-fade-function";
var status$47 = "unoff";
var links$47 = [{"url":"http://peter.sh/files/examples/cross-fading.html","title":"Simple demo"}];
var bugs$47 = [];
var categories$47 = ["CSS"];
var stats$47 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","5.5":"n"},"edge":{"12":"n","13":"n","14":"u"},"firefox":{"2":"n","3":"n","4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n","35":"n","36":"n","37":"n","38":"n","39":"n","40":"n","41":"n","42":"n","43":"n","44":"n","45":"n","46":"n","47":"n","48":"n","49":"n","50":"n","3.5":"n","3.6":"n"},"chrome":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"y x","18":"y x","19":"y x","20":"y x","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y x","27":"y x","28":"y x","29":"y x","30":"y x","31":"y x","32":"y x","33":"y x","34":"y x","35":"y x","36":"y x","37":"y x","38":"y x","39":"y x","40":"y x","41":"y x","42":"y x","43":"y x","44":"y x","45":"y x","46":"y x","47":"y x","48":"y x","49":"y x","50":"y x","51":"y x","52":"y x","53":"y x","54":"y x","55":"y x"},"safari":{"4":"n","5":"n","6":"y x","7":"y x","8":"y x","9":"y x","10":"y","3.1":"n","3.2":"n","5.1":"y x","6.1":"y x","7.1":"y x","9.1":"y x","TP":"y x"},"opera":{"9":"n","11":"n","12":"n","15":"y x","16":"y x","17":"y x","18":"y x","19":"y x","20":"y x","21":"y x","22":"y x","23":"y x","24":"y x","25":"y x","26":"y x","27":"y x","28":"y x","29":"y x","30":"y x","31":"y x","32":"y x","33":"y x","34":"y x","35":"y x","36":"y x","37":"y x","38":"y x","39":"y x","40":"y x","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"n"},"ios_saf":{"8":"y x","3.2":"n","4.0-4.1":"n","4.2-4.3":"n","5.0-5.1":"y x","6.0-6.1":"y x","7.0-7.1":"y x","8.1-8.4":"y x","9.0-9.2":"y x","9.3":"y x"},"op_mini":{"all":"n"},"android":{"3":"n","4":"n","51":"y x","2.1":"n","2.2":"n","2.3":"n","4.1":"n","4.2-4.3":"n","4.4":"y x","4.4.3-4.4.4":"y x"},"bb":{"7":"n","10":"n"},"op_mob":{"10":"n","11":"n","12":"n","37":"y x","11.1":"n","11.5":"n","12.1":"n"},"and_chr":{"51":"y x"},"and_ff":{"47":"n"},"ie_mob":{"10":"n","11":"n"},"and_uc":{"9.9":"n"},"samsung":{"4":"y x"}};
var notes$47 = "";
var notes_by_num$47 = {};
var usage_perc_y$47 = 68.25;
var usage_perc_a$47 = 0;
var ucprefix$47 = false;
var parent$47 = "";
var keywords$47 = "css,image,crossfade";
var ie_id$47 = "";
var chrome_id$47 = "";
var firefox_id$47 = "";
var webkit_id$47 = "";
var shown$47 = true;
var cssCrossFade = {
	title: title$47,
	description: description$47,
	spec: spec$47,
	status: status$47,
	links: links$47,
	bugs: bugs$47,
	categories: categories$47,
	stats: stats$47,
	notes: notes$47,
	notes_by_num: notes_by_num$47,
	usage_perc_y: usage_perc_y$47,
	usage_perc_a: usage_perc_a$47,
	ucprefix: ucprefix$47,
	parent: parent$47,
	keywords: keywords$47,
	ie_id: ie_id$47,
	chrome_id: chrome_id$47,
	firefox_id: firefox_id$47,
	webkit_id: webkit_id$47,
	shown: shown$47
};

var require$$4$2 = Object.freeze({
	title: title$47,
	description: description$47,
	spec: spec$47,
	status: status$47,
	links: links$47,
	bugs: bugs$47,
	categories: categories$47,
	stats: stats$47,
	notes: notes$47,
	notes_by_num: notes_by_num$47,
	usage_perc_y: usage_perc_y$47,
	usage_perc_a: usage_perc_a$47,
	ucprefix: ucprefix$47,
	parent: parent$47,
	keywords: keywords$47,
	ie_id: ie_id$47,
	chrome_id: chrome_id$47,
	firefox_id: firefox_id$47,
	webkit_id: webkit_id$47,
	shown: shown$47,
	default: cssCrossFade
});

var title$48 = "CSS :read-only and :read-write selectors";
var description$48 = ":read-only and :read-write pseudo-classes to match elements which are considered user-alterable";
var spec$48 = "https://html.spec.whatwg.org/multipage/scripting.html#selector-read-only";
var status$48 = "ls";
var links$48 = [{"url":"https://css-tricks.com/almanac/selectors/r/read-write-read/","title":"CSS Tricks article"},{"url":"https://developer.mozilla.org/en-US/docs/Web/CSS/%3Aread-only","title":"MDN :read-only"},{"url":"https://developer.mozilla.org/en-US/docs/Web/CSS/:read-write","title":"MDN :read-write"},{"url":"https://drafts.csswg.org/selectors-4/#rw-pseudos","title":"Selectors Level 4 § The Mutability Pseudo-classes: :read-only and :read-write"},{"url":"https://bugzilla.mozilla.org/show_bug.cgi?id=312971","title":"Firefox feature request bug"}];
var bugs$48 = [];
var categories$48 = ["CSS"];
var stats$48 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","5.5":"n"},"edge":{"12":"n","13":"y","14":"y"},"firefox":{"2":"u","3":"u","4":"u","5":"u","6":"u","7":"u","8":"u","9":"u","10":"u","11":"u","12":"u","13":"u","14":"u","15":"u","16":"u","17":"u","18":"u","19":"u","20":"u","21":"u","22":"u","23":"u","24":"u","25":"u","26":"u","27":"y x","28":"y x","29":"y x","30":"y x","31":"y x","32":"y x","33":"y x","34":"y x","35":"y x","36":"y x","37":"y x","38":"y x","39":"y x","40":"y x","41":"y x","42":"y x","43":"y x","44":"y x","45":"y x","46":"y x","47":"y x","48":"y x","49":"y x","50":"y x","3.5":"u","3.6":"u"},"chrome":{"4":"u","5":"u","6":"u","7":"u","8":"u","9":"u","10":"u","11":"u","12":"u","13":"u","14":"u","15":"u","16":"u","17":"u","18":"u","19":"u","20":"u","21":"u","22":"u","23":"u","24":"u","25":"u","26":"u","27":"u","28":"u","29":"u","30":"u","31":"u","32":"u","33":"u","34":"a #1","35":"a #1","36":"a #1","37":"a #1","38":"a #1","39":"a #1","40":"a #1","41":"a #1","42":"a #1","43":"a #1","44":"a #1","45":"a #1","46":"a #1","47":"a #1","48":"a #1","49":"a #1","50":"a #1","51":"a #1","52":"a #1","53":"a #1","54":"a #1","55":"a #1"},"safari":{"4":"u","5":"u","6":"u","7":"a #1","8":"a #1","9":"a #1","10":"a #1","3.1":"u","3.2":"u","5.1":"u","6.1":"u","7.1":"a #1","9.1":"a #1","TP":"a #1"},"opera":{"9":"n","11":"n","12":"n","15":"a #1","16":"a #1","17":"a #1","18":"a #1","19":"a #1","20":"a #1","21":"a #1","22":"a #1","23":"a #1","24":"a #1","25":"a #1","26":"a #1","27":"a #1","28":"a #1","29":"a #1","30":"a #1","31":"a #1","32":"a #1","33":"a #1","34":"a #1","35":"a #1","36":"a #1","37":"a #1","38":"a #1","39":"a #1","40":"a #1","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"n"},"ios_saf":{"8":"a #1","3.2":"u","4.0-4.1":"u","4.2-4.3":"u","5.0-5.1":"u","6.0-6.1":"u","7.0-7.1":"u","8.1-8.4":"a #1","9.0-9.2":"a #1","9.3":"a #1"},"op_mini":{"all":"n"},"android":{"3":"n","4":"n","51":"a #1","2.1":"n","2.2":"n","2.3":"n","4.1":"n","4.2-4.3":"n","4.4":"n","4.4.3-4.4.4":"n"},"bb":{"7":"u","10":"u"},"op_mob":{"10":"n","11":"n","12":"n","37":"a #1","11.1":"n","11.5":"n","12.1":"n"},"and_chr":{"51":"a #1"},"and_ff":{"47":"y x"},"ie_mob":{"10":"u","11":"u"},"and_uc":{"9.9":"u"},"samsung":{"4":"n"}};
var notes$48 = "";
var notes_by_num$48 = {"1":"Supports selector only for input and textarea fields, but not for contenteditable"};
var usage_perc_y$48 = 9.11;
var usage_perc_a$48 = 60.65;
var ucprefix$48 = false;
var parent$48 = "";
var keywords$48 = "css,selector,read-only,read-write";
var ie_id$48 = "cssmutabilitypseudoclasses";
var chrome_id$48 = "";
var firefox_id$48 = "";
var webkit_id$48 = "";
var shown$48 = false;
var cssReadOnlyWrite = {
	title: title$48,
	description: description$48,
	spec: spec$48,
	status: status$48,
	links: links$48,
	bugs: bugs$48,
	categories: categories$48,
	stats: stats$48,
	notes: notes$48,
	notes_by_num: notes_by_num$48,
	usage_perc_y: usage_perc_y$48,
	usage_perc_a: usage_perc_a$48,
	ucprefix: ucprefix$48,
	parent: parent$48,
	keywords: keywords$48,
	ie_id: ie_id$48,
	chrome_id: chrome_id$48,
	firefox_id: firefox_id$48,
	webkit_id: webkit_id$48,
	shown: shown$48
};

var require$$3$4 = Object.freeze({
	title: title$48,
	description: description$48,
	spec: spec$48,
	status: status$48,
	links: links$48,
	bugs: bugs$48,
	categories: categories$48,
	stats: stats$48,
	notes: notes$48,
	notes_by_num: notes_by_num$48,
	usage_perc_y: usage_perc_y$48,
	usage_perc_a: usage_perc_a$48,
	ucprefix: ucprefix$48,
	parent: parent$48,
	keywords: keywords$48,
	ie_id: ie_id$48,
	chrome_id: chrome_id$48,
	firefox_id: firefox_id$48,
	webkit_id: webkit_id$48,
	shown: shown$48,
	default: cssReadOnlyWrite
});

var title$49 = "text-emphasis styling";
var description$49 = "Method of using small symbols next to each glyph to emphasize a run of text, commonly used in East Asian languages. The `text-emphasis` shorthand, and its `text-emphasis-style` and `text-emphasis-color` longhands, can be used to apply marks to the text. The `text-emphasis-position` property, which inherits separately, allows setting the emphasis marks' position with respect to the text.";
var spec$49 = "https://drafts.csswg.org/css-text-decor-3/#text-emphasis-property";
var status$49 = "cr";
var links$49 = [{"url":"https://github.com/zmmbreeze/jquery.emphasis/","title":"A javascript fallback for CSS3 emphasis mark."},{"url":"https://wpdev.uservoice.com/forums/257854-microsoft-edge-developer/suggestions/6514536-text-decoration-styling","title":"Microsoft Edge feature request on UserVoice"},{"url":"https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis","title":"Mozilla Developer Network"}];
var bugs$49 = [{"description":"Chrome on Android occasionally has issues rendering emphasis glyphs correctly."}];
var categories$49 = ["CSS3"];
var stats$49 = {"ie":{"6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","5.5":"n"},"edge":{"12":"n","13":"n","14":"u"},"firefox":{"2":"n","3":"n","4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n","35":"n","36":"n","37":"n","38":"n","39":"n","40":"n","41":"n","42":"n","43":"n","44":"n","45":"n d #2","46":"n d #2","47":"n d #2","48":"n d #2","49":"n d #2","50":"n d #2","3.5":"n","3.6":"n"},"chrome":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"a x #1","26":"a x #1","27":"a x #1","28":"a x #1","29":"a x #1","30":"a x #1","31":"a x #1","32":"a x #1","33":"a x #1","34":"a x #1","35":"a x #1","36":"a x #1","37":"a x #1","38":"a x #1","39":"a x #1","40":"a x #1","41":"a x #1","42":"a x #1","43":"a x #1","44":"a x #1","45":"a x #1","46":"a x #1","47":"a x #1","48":"a x #1","49":"a x #1","50":"a x #1","51":"a x #1","52":"a x #1","53":"a x #1","54":"a x #1","55":"a x #1"},"safari":{"4":"n","5":"n","6":"n","7":"a x #1","8":"y","9":"y","10":"y","3.1":"n","3.2":"n","5.1":"n","6.1":"a x #1","7.1":"y","9.1":"y","TP":"y"},"opera":{"9":"n","11":"n","12":"n","15":"a x #1","16":"a x #1","17":"a x #1","18":"a x #1","19":"a x #1","20":"a x #1","21":"a x #1","22":"a x #1","23":"a x #1","24":"a x #1","25":"a x #1","26":"a x #1","27":"a x #1","28":"a x #1","29":"a x #1","30":"a x #1","31":"a x #1","32":"a x #1","33":"a x #1","34":"a x #1","35":"a x #1","36":"a x #1","37":"a x #1","38":"a x #1","39":"a x #1","40":"a x #1","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"n"},"ios_saf":{"8":"y","3.2":"n","4.0-4.1":"n","4.2-4.3":"n","5.0-5.1":"n","6.0-6.1":"n","7.0-7.1":"y","8.1-8.4":"y","9.0-9.2":"y","9.3":"y"},"op_mini":{"all":"n"},"android":{"3":"n","4":"n","51":"a x #1","2.1":"n","2.2":"n","2.3":"n","4.1":"n","4.2-4.3":"n","4.4":"a x #1","4.4.3-4.4.4":"a x #1"},"bb":{"7":"n","10":"a x #1"},"op_mob":{"10":"n","11":"n","12":"n","37":"a x #1","11.1":"n","11.5":"n","12.1":"n"},"and_chr":{"51":"a x #1"},"and_ff":{"47":"n"},"ie_mob":{"10":"n","11":"n"},"and_uc":{"9.9":"a x #1"},"samsung":{"4":"a x #1"}};
var notes$49 = "Some old WebKit browsers (like Chrome 24) support `-webkit-text-emphasis`, but does not support CJK languages and is therefore considered unsupported.";
var notes_by_num$49 = {"1":"Partial support refers to incorrect support for `-webkit-text-emphasis-position`. These browsers support `over` and `under` as values, but not the added `left` and `right` values required by the spec.","2":"Can be enabled in Firefox using the `layout.css.text-emphasis.enabled` flag"};
var usage_perc_y$49 = 10.98;
var usage_perc_a$49 = 63.62;
var ucprefix$49 = false;
var parent$49 = "";
var keywords$49 = "text-emphasis,text-emphasis-position,text-emphasis-style,text-emphasis-color";
var ie_id$49 = "";
var chrome_id$49 = "";
var firefox_id$49 = "";
var webkit_id$49 = "";
var shown$49 = true;
var textEmphasis = {
	title: title$49,
	description: description$49,
	spec: spec$49,
	status: status$49,
	links: links$49,
	bugs: bugs$49,
	categories: categories$49,
	stats: stats$49,
	notes: notes$49,
	notes_by_num: notes_by_num$49,
	usage_perc_y: usage_perc_y$49,
	usage_perc_a: usage_perc_a$49,
	ucprefix: ucprefix$49,
	parent: parent$49,
	keywords: keywords$49,
	ie_id: ie_id$49,
	chrome_id: chrome_id$49,
	firefox_id: firefox_id$49,
	webkit_id: webkit_id$49,
	shown: shown$49
};

var require$$2$6 = Object.freeze({
	title: title$49,
	description: description$49,
	spec: spec$49,
	status: status$49,
	links: links$49,
	bugs: bugs$49,
	categories: categories$49,
	stats: stats$49,
	notes: notes$49,
	notes_by_num: notes_by_num$49,
	usage_perc_y: usage_perc_y$49,
	usage_perc_a: usage_perc_a$49,
	ucprefix: ucprefix$49,
	parent: parent$49,
	keywords: keywords$49,
	ie_id: ie_id$49,
	chrome_id: chrome_id$49,
	firefox_id: firefox_id$49,
	webkit_id: webkit_id$49,
	shown: shown$49,
	default: textEmphasis
});

var title$50 = "CSS Grid Layout";
var description$50 = "Method of using a grid concept to lay out content, providing a mechanism for authors to divide available space for lay out into columns and rows using a set of predictable sizing behaviors";
var spec$50 = "http://www.w3.org/TR/css3-grid-layout/";
var status$50 = "wd";
var links$50 = [{"url":"http://blogs.msdn.com/b/ie/archive/2011/04/14/ie10-platform-preview-and-css-features-for-adaptive-layouts.aspx","title":"IE Blog post"},{"url":"https://bugs.webkit.org/show_bug.cgi?id=60731","title":"Webkit (Chrome, Safari, etc.) feature request"},{"url":"https://bugzilla.mozilla.org/show_bug.cgi?id=616605","title":"Mozilla (Firefox) feature request"},{"url":"https://github.com/codler/Grid-Layout-Polyfill","title":"Polyfill based on old spec"},{"url":"https://github.com/FremyCompany/css-grid-polyfill/","title":"Polyfill based on new spec"}];
var bugs$50 = [];
var categories$50 = ["CSS"];
var stats$50 = {"ie":{"6":"n","7":"n","8":"n","9":"p","10":"a x #2","11":"a x #2","5.5":"n"},"edge":{"12":"a x #2","13":"a x #2","14":"a x #2"},"firefox":{"2":"n","3":"n","4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"p","20":"p","21":"p","22":"p","23":"p","24":"p","25":"p","26":"p","27":"p","28":"p","29":"p","30":"p","31":"p","32":"p","33":"p","34":"p","35":"p","36":"p","37":"p","38":"p","39":"p","40":"p d #3","41":"p d #3","42":"p d #3","43":"p d #3","44":"p d #3","45":"p d #3","46":"p d #3","47":"p d #3","48":"p d #3","49":"p d #3","50":"p d #3","3.5":"n","3.6":"n"},"chrome":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"p","26":"p","27":"p","28":"p","29":"p d #1","30":"p d #1","31":"p d #1","32":"p d #1","33":"p d #1","34":"p d #1","35":"p d #1","36":"p d #1","37":"p d #1","38":"p d #1","39":"p d #1","40":"p d #1","41":"p d #1","42":"p d #1","43":"p d #1","44":"p d #1","45":"p d #1","46":"p d #1","47":"p d #1","48":"p d #1","49":"p d #1","50":"p d #1","51":"p d #1","52":"p d #1","53":"p d #1","54":"p d #1","55":"p d #1"},"safari":{"4":"n","5":"n","6":"p","7":"p","8":"p","9":"p","10":"y","3.1":"n","3.2":"n","5.1":"n","6.1":"p","7.1":"p","9.1":"p","TP":"y"},"opera":{"9":"n","11":"n","12":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"p d #1","29":"p d #1","30":"p d #1","31":"p d #1","32":"p d #1","33":"p d #1","34":"p d #1","35":"p d #1","36":"p d #1","37":"p d #1","38":"p d #1","39":"p d #1","40":"p d #1","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"n"},"ios_saf":{"8":"p","3.2":"n","4.0-4.1":"n","4.2-4.3":"n","5.0-5.1":"n","6.0-6.1":"p","7.0-7.1":"p","8.1-8.4":"p","9.0-9.2":"p","9.3":"p"},"op_mini":{"all":"n"},"android":{"3":"n","4":"n","51":"p","2.1":"n","2.2":"n","2.3":"n","4.1":"n","4.2-4.3":"p","4.4":"p","4.4.3-4.4.4":"p"},"bb":{"7":"n","10":"n"},"op_mob":{"10":"n","11":"n","12":"n","37":"p","11.1":"n","11.5":"n","12.1":"n"},"and_chr":{"51":"p"},"and_ff":{"47":"p"},"ie_mob":{"10":"a x #2","11":"a x #2"},"and_uc":{"9.9":"n"},"samsung":{"4":"p"}};
var notes$50 = "Supported in WebKit Nightly with `-webkit-` prefix.\r\n\r\nEnabled by default in Firefox nightly and developer editions, but not yet on track to be enabled in beta or stable Firefox.";
var notes_by_num$50 = {"1":"Enabled in Chrome through the \"experimental Web Platform features\" flag in chrome://flags","2":"Partial support in IE refers to supporting an [older version](http://www.w3.org/TR/2011/WD-css3-grid-layout-20110407/) of the specification.","3":"Enabled in Firefox through the `layout.css.grid.enabled ` flag"};
var usage_perc_y$50 = 0;
var usage_perc_a$50 = 7.52;
var ucprefix$50 = false;
var parent$50 = "";
var keywords$50 = "grids,grid-row,grid-column,display:grid";
var ie_id$50 = "grid";
var chrome_id$50 = "4589636412243968";
var firefox_id$50 = "grid-layout";
var webkit_id$50 = "specification-css-grid-layout-level-1";
var shown$50 = true;
var cssGrid = {
	title: title$50,
	description: description$50,
	spec: spec$50,
	status: status$50,
	links: links$50,
	bugs: bugs$50,
	categories: categories$50,
	stats: stats$50,
	notes: notes$50,
	notes_by_num: notes_by_num$50,
	usage_perc_y: usage_perc_y$50,
	usage_perc_a: usage_perc_a$50,
	ucprefix: ucprefix$50,
	parent: parent$50,
	keywords: keywords$50,
	ie_id: ie_id$50,
	chrome_id: chrome_id$50,
	firefox_id: firefox_id$50,
	webkit_id: webkit_id$50,
	shown: shown$50
};

var require$$1$8 = Object.freeze({
	title: title$50,
	description: description$50,
	spec: spec$50,
	status: status$50,
	links: links$50,
	bugs: bugs$50,
	categories: categories$50,
	stats: stats$50,
	notes: notes$50,
	notes_by_num: notes_by_num$50,
	usage_perc_y: usage_perc_y$50,
	usage_perc_a: usage_perc_a$50,
	ucprefix: ucprefix$50,
	parent: parent$50,
	keywords: keywords$50,
	ie_id: ie_id$50,
	chrome_id: chrome_id$50,
	firefox_id: firefox_id$50,
	webkit_id: webkit_id$50,
	shown: shown$50,
	default: cssGrid
});

var title$51 = "CSS Text 4 text-spacing";
var description$51 = "This property controls spacing between adjacent characters on the same line within the same inline formatting context using a set of character-class-based rules.";
var spec$51 = "https://drafts.csswg.org/css-text-4/#text-spacing-property";
var status$51 = "wd";
var links$51 = [{"url":"https://msdn.microsoft.com/library/ms531164(v=vs.85).aspx","title":"MSDN page"}];
var bugs$51 = [];
var categories$51 = ["CSS"];
var stats$51 = {"ie":{"6":"n","7":"n","8":"y x #1","9":"y x #1","10":"y x #1","11":"y x #1","5.5":"n"},"edge":{"12":"y x #1","13":"y x #1","14":"y x #1"},"firefox":{"2":"n","3":"n","4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n","35":"n","36":"n","37":"n","38":"n","39":"n","40":"n","41":"n","42":"n","43":"n","44":"n","45":"n","46":"n","47":"n","48":"n","49":"n","50":"n","3.5":"n","3.6":"n"},"chrome":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","11":"n","12":"n","13":"n","14":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n","35":"n","36":"n","37":"n","38":"n","39":"n","40":"n","41":"n","42":"n","43":"n","44":"n","45":"n","46":"n","47":"n","48":"n","49":"n","50":"n","51":"n","52":"n","53":"n","54":"n","55":"n"},"safari":{"4":"n","5":"n","6":"n","7":"n","8":"n","9":"n","10":"n","3.1":"n","3.2":"n","5.1":"n","6.1":"n","7.1":"n","9.1":"n","TP":"n"},"opera":{"9":"n","11":"n","12":"n","15":"n","16":"n","17":"n","18":"n","19":"n","20":"n","21":"n","22":"n","23":"n","24":"n","25":"n","26":"n","27":"n","28":"n","29":"n","30":"n","31":"n","32":"n","33":"n","34":"n","35":"n","36":"n","37":"n","38":"n","39":"n","40":"n","9.5-9.6":"n","10.0-10.1":"n","10.5":"n","10.6":"n","11.1":"n","11.5":"n","11.6":"n","12.1":"n"},"ios_saf":{"8":"n","3.2":"n","4.0-4.1":"n","4.2-4.3":"n","5.0-5.1":"n","6.0-6.1":"n","7.0-7.1":"n","8.1-8.4":"n","9.0-9.2":"n","9.3":"n"},"op_mini":{"all":"n"},"android":{"3":"n","4":"n","51":"n","2.1":"n","2.2":"n","2.3":"n","4.1":"n","4.2-4.3":"n","4.4":"n","4.4.3-4.4.4":"n"},"bb":{"7":"n","10":"n"},"op_mob":{"10":"n","11":"n","12":"n","37":"n","11.1":"n","11.5":"n","12.1":"n"},"and_chr":{"51":"n"},"and_ff":{"47":"n"},"ie_mob":{"10":"u","11":"u"},"and_uc":{"9.9":"n"},"samsung":{"4":"n"}};
var notes$51 = "";
var notes_by_num$51 = {"1":"IE accepts -ms-text-autospace property"};
var usage_perc_y$51 = 7.83;
var usage_perc_a$51 = 0;
var ucprefix$51 = false;
var parent$51 = "";
var keywords$51 = "";
var ie_id$51 = "";
var chrome_id$51 = "";
var firefox_id$51 = "";
var webkit_id$51 = "";
var shown$51 = false;
var cssTextSpacing = {
	title: title$51,
	description: description$51,
	spec: spec$51,
	status: status$51,
	links: links$51,
	bugs: bugs$51,
	categories: categories$51,
	stats: stats$51,
	notes: notes$51,
	notes_by_num: notes_by_num$51,
	usage_perc_y: usage_perc_y$51,
	usage_perc_a: usage_perc_a$51,
	ucprefix: ucprefix$51,
	parent: parent$51,
	keywords: keywords$51,
	ie_id: ie_id$51,
	chrome_id: chrome_id$51,
	firefox_id: firefox_id$51,
	webkit_id: webkit_id$51,
	shown: shown$51
};

var require$$0$15 = Object.freeze({
	title: title$51,
	description: description$51,
	spec: spec$51,
	status: status$51,
	links: links$51,
	bugs: bugs$51,
	categories: categories$51,
	stats: stats$51,
	notes: notes$51,
	notes_by_num: notes_by_num$51,
	usage_perc_y: usage_perc_y$51,
	usage_perc_a: usage_perc_a$51,
	ucprefix: ucprefix$51,
	parent: parent$51,
	keywords: keywords$51,
	ie_id: ie_id$51,
	chrome_id: chrome_id$51,
	firefox_id: firefox_id$51,
	webkit_id: webkit_id$51,
	shown: shown$51,
	default: cssTextSpacing
});

var prefixes$2 = createCommonjsModule(function (module) {
(function() {
  var add, backdropFilter, bckgrndImgOpts, boxdecorbreak, crispedges, cursorsGrab, cursorsNewer, devdaptation, elementFunction, feature, filterFunction, flexbox, fullscreen, gradients, grid, logicalProps, prefix, readOnly, resolution, result, sort, textAlignLast, textSizeAdjust, textSpacing, userSelectNone, writingMode,
    slice = [].slice;

  sort = function(array) {
    return array.sort(function(a, b) {
      var d;
      a = a.split(' ');
      b = b.split(' ');
      if (a[0] > b[0]) {
        return 1;
      } else if (a[0] < b[0]) {
        return -1;
      } else {
        d = parseFloat(a[1]) - parseFloat(b[1]);
        if (d > 0) {
          return 1;
        } else if (d < 0) {
          return -1;
        } else {
          return 0;
        }
      }
    });
  };

  feature = function(data, opts, callback) {
    var browser, match, need, ref, ref1, support, version, versions;
    if (!callback) {
      ref = [opts, {}], callback = ref[0], opts = ref[1];
    }
    match = opts.match || /\sx($|\s)/;
    need = [];
    ref1 = data.stats;
    for (browser in ref1) {
      versions = ref1[browser];
      for (version in versions) {
        support = versions[version];
        if (support.match(match)) {
          need.push(browser + ' ' + version);
        }
      }
    }
    return callback(sort(need));
  };

  result = {};

  prefix = function() {
    var data, i, j, k, len, name, names, results;
    names = 2 <= arguments.length ? slice.call(arguments, 0, j = arguments.length - 1) : (j = 0, []), data = arguments[j++];
    results = [];
    for (k = 0, len = names.length; k < len; k++) {
      name = names[k];
      result[name] = {};
      results.push((function() {
        var results1;
        results1 = [];
        for (i in data) {
          results1.push(result[name][i] = data[i]);
        }
        return results1;
      })());
    }
    return results;
  };

  add = function() {
    var data, j, k, len, name, names, results;
    names = 2 <= arguments.length ? slice.call(arguments, 0, j = arguments.length - 1) : (j = 0, []), data = arguments[j++];
    results = [];
    for (k = 0, len = names.length; k < len; k++) {
      name = names[k];
      results.push(result[name].browsers = sort(result[name].browsers.concat(data.browsers)));
    }
    return results;
  };

  module.exports = result;

  feature(interopDefault(require$$50), function(browsers) {
    return prefix('border-radius', 'border-top-left-radius', 'border-top-right-radius', 'border-bottom-right-radius', 'border-bottom-left-radius', {
      mistakes: ['-khtml-', '-ms-', '-o-'],
      browsers: browsers
    });
  });

  feature(interopDefault(require$$49$1), function(browsers) {
    return prefix('box-shadow', {
      mistakes: ['-khtml-'],
      browsers: browsers
    });
  });

  feature(interopDefault(require$$48$1), function(browsers) {
    return prefix('animation', 'animation-name', 'animation-duration', 'animation-delay', 'animation-direction', 'animation-fill-mode', 'animation-iteration-count', 'animation-play-state', 'animation-timing-function', '@keyframes', {
      mistakes: ['-khtml-', '-ms-'],
      browsers: browsers
    });
  });

  feature(interopDefault(require$$47$1), function(browsers) {
    return prefix('transition', 'transition-property', 'transition-duration', 'transition-delay', 'transition-timing-function', {
      mistakes: ['-khtml-', '-ms-'],
      browsers: browsers
    });
  });

  feature(interopDefault(require$$46$1), function(browsers) {
    return prefix('transform', 'transform-origin', {
      browsers: browsers
    });
  });

  feature(interopDefault(require$$45), function(browsers) {
    prefix('perspective', 'perspective-origin', {
      browsers: browsers
    });
    return prefix('transform-style', 'backface-visibility', {
      mistakes: ['-ms-', '-o-'],
      browsers: browsers
    });
  });

  gradients = interopDefault(require$$44);

  feature(gradients, {
    match: /y\sx/
  }, function(browsers) {
    return prefix('linear-gradient', 'repeating-linear-gradient', 'radial-gradient', 'repeating-radial-gradient', {
      props: ['background', 'background-image', 'border-image', 'mask', 'list-style', 'list-style-image', 'content', 'mask-image'],
      mistakes: ['-ms-'],
      browsers: browsers
    });
  });

  feature(gradients, {
    match: /a\sx/
  }, function(browsers) {
    browsers = browsers.map(function(i) {
      if (/op/.test(i)) {
        return i;
      } else {
        return i + " old";
      }
    });
    return add('linear-gradient', 'repeating-linear-gradient', 'radial-gradient', 'repeating-radial-gradient', {
      browsers: browsers
    });
  });

  feature(interopDefault(require$$43$1), function(browsers) {
    return prefix('box-sizing', {
      browsers: browsers
    });
  });

  feature(interopDefault(require$$42), function(browsers) {
    return prefix('filter', {
      browsers: browsers
    });
  });

  filterFunction = interopDefault(require$$41);

  feature(filterFunction, function(browsers) {
    return prefix('filter-function', {
      props: ['background', 'background-image', 'border-image', 'mask', 'list-style', 'list-style-image', 'content', 'mask-image'],
      browsers: browsers
    });
  });

  backdropFilter = interopDefault(require$$40);

  feature(backdropFilter, function(browsers) {
    return prefix('backdrop-filter', {
      browsers: browsers
    });
  });

  elementFunction = interopDefault(require$$39$1);

  feature(elementFunction, function(browsers) {
    return prefix('element', {
      props: ['background', 'background-image', 'border-image', 'mask', 'list-style', 'list-style-image', 'content', 'mask-image'],
      browsers: browsers
    });
  });

  feature(interopDefault(require$$38$1), function(browsers) {
    prefix('columns', 'column-width', 'column-gap', 'column-rule', 'column-rule-color', 'column-rule-width', {
      browsers: browsers
    });
    return prefix('column-count', 'column-rule-style', 'column-span', 'column-fill', 'break-before', 'break-after', 'break-inside', {
      browsers: browsers
    });
  });

  userSelectNone = interopDefault(require$$37$1);

  feature(userSelectNone, function(browsers) {
    return prefix('user-select', {
      mistakes: ['-khtml-'],
      browsers: browsers
    });
  });

  flexbox = interopDefault(require$$36$1);

  feature(flexbox, {
    match: /a\sx/
  }, function(browsers) {
    browsers = browsers.map(function(i) {
      if (/ie|firefox/.test(i)) {
        return i;
      } else {
        return i + " 2009";
      }
    });
    prefix('display-flex', 'inline-flex', {
      props: ['display'],
      browsers: browsers
    });
    prefix('flex', 'flex-grow', 'flex-shrink', 'flex-basis', {
      browsers: browsers
    });
    return prefix('flex-direction', 'flex-wrap', 'flex-flow', 'justify-content', 'order', 'align-items', 'align-self', 'align-content', {
      browsers: browsers
    });
  });

  feature(flexbox, {
    match: /y\sx/
  }, function(browsers) {
    add('display-flex', 'inline-flex', {
      browsers: browsers
    });
    add('flex', 'flex-grow', 'flex-shrink', 'flex-basis', {
      browsers: browsers
    });
    return add('flex-direction', 'flex-wrap', 'flex-flow', 'justify-content', 'order', 'align-items', 'align-self', 'align-content', {
      browsers: browsers
    });
  });

  feature(interopDefault(require$$35$1), function(browsers) {
    return prefix('calc', {
      props: ['*'],
      browsers: browsers
    });
  });

  bckgrndImgOpts = interopDefault(require$$34$1);

  feature(bckgrndImgOpts, function(browsers) {
    return prefix('background-clip', 'background-origin', 'background-size', {
      browsers: browsers
    });
  });

  feature(interopDefault(require$$33$1), function(browsers) {
    return prefix('font-feature-settings', 'font-variant-ligatures', 'font-language-override', 'font-kerning', {
      browsers: browsers
    });
  });

  feature(interopDefault(require$$32$1), function(browsers) {
    return prefix('border-image', {
      browsers: browsers
    });
  });

  feature(interopDefault(require$$31$1), function(browsers) {
    return prefix('::selection', {
      selector: true,
      browsers: browsers
    });
  });

  feature(interopDefault(require$$30$1), function(browsers) {
    browsers = browsers.map(function(i) {
      var name, ref, version;
      ref = i.split(' '), name = ref[0], version = ref[1];
      if (name === 'firefox' && parseFloat(version) <= 18) {
        return i + ' old';
      } else {
        return i;
      }
    });
    return prefix('::placeholder', {
      selector: true,
      browsers: browsers
    });
  });

  feature(interopDefault(require$$29$1), function(browsers) {
    return prefix('hyphens', {
      browsers: browsers
    });
  });

  fullscreen = interopDefault(require$$28$1);

  feature(fullscreen, function(browsers) {
    return prefix(':fullscreen', {
      selector: true,
      browsers: browsers
    });
  });

  feature(fullscreen, {
    match: /x(\s#2|$)/
  }, function(browsers) {
    return prefix('::backdrop', {
      selector: true,
      browsers: browsers
    });
  });

  feature(interopDefault(require$$27$1), function(browsers) {
    return prefix('tab-size', {
      browsers: browsers
    });
  });

  feature(interopDefault(require$$26$1), function(browsers) {
    return prefix('max-content', 'min-content', 'fit-content', 'fill', 'fill-available', {
      props: ['width', 'min-width', 'max-width', 'height', 'min-height', 'max-height', 'inline-size', 'min-inline-size', 'max-inline-size', 'block-size', 'min-block-size', 'max-block-size'],
      browsers: browsers
    });
  });

  cursorsNewer = interopDefault(require$$25$1);

  feature(cursorsNewer, function(browsers) {
    return prefix('zoom-in', 'zoom-out', {
      props: ['cursor'],
      browsers: browsers
    });
  });

  cursorsGrab = interopDefault(require$$24$1);

  feature(cursorsGrab, function(browsers) {
    return prefix('grab', 'grabbing', {
      props: ['cursor'],
      browsers: browsers
    });
  });

  feature(interopDefault(require$$23$1), function(browsers) {
    return prefix('sticky', {
      props: ['position'],
      browsers: browsers
    });
  });

  feature(interopDefault(require$$22$1), function(browsers) {
    return prefix('touch-action', {
      browsers: browsers
    });
  });

  feature(interopDefault(require$$21$1), function(browsers) {
    return prefix('text-decoration-style', 'text-decoration-line', 'text-decoration-color', {
      browsers: browsers
    });
  });

  textSizeAdjust = interopDefault(require$$20$1);

  feature(textSizeAdjust, function(browsers) {
    return prefix('text-size-adjust', {
      browsers: browsers
    });
  });

  feature(interopDefault(require$$19$1), function(browsers) {
    prefix('mask-clip', 'mask-composite', 'mask-image', 'mask-origin', 'mask-repeat', 'mask-border-repeat', 'mask-border-source', {
      browsers: browsers
    });
    return prefix('clip-path', 'mask', 'mask-position', 'mask-size', 'mask-border', 'mask-border-outset', 'mask-border-width', 'mask-border-slice', {
      browsers: browsers
    });
  });

  boxdecorbreak = interopDefault(require$$18$1);

  feature(boxdecorbreak, function(browsers) {
    return prefix('box-decoration-break', {
      browsers: browsers
    });
  });

  feature(interopDefault(require$$17$1), function(browsers) {
    return prefix('object-fit', 'object-position', {
      browsers: browsers
    });
  });

  feature(interopDefault(require$$16$1), function(browsers) {
    return prefix('shape-margin', 'shape-outside', 'shape-image-threshold', {
      browsers: browsers
    });
  });

  feature(interopDefault(require$$15$1), function(browsers) {
    return prefix('text-overflow', {
      browsers: browsers
    });
  });

  feature(interopDefault(require$$2$6), function(browsers) {
    return prefix('text-emphasis', {
      browsers: browsers
    });
  });

  devdaptation = interopDefault(require$$14$1);

  feature(devdaptation, function(browsers) {
    return prefix('@viewport', {
      browsers: browsers
    });
  });

  resolution = interopDefault(require$$13$1);

  feature(resolution, {
    match: /( x($| )|a #3)/
  }, function(browsers) {
    return prefix('@resolution', {
      browsers: browsers
    });
  });

  textAlignLast = interopDefault(require$$12$1);

  feature(textAlignLast, function(browsers) {
    return prefix('text-align-last', {
      browsers: browsers
    });
  });

  crispedges = interopDefault(require$$11$1);

  feature(crispedges, {
    match: /y x/
  }, function(browsers) {
    return prefix('pixelated', {
      props: ['image-rendering'],
      browsers: browsers
    });
  });

  feature(crispedges, {
    match: /a x #2/
  }, function(browsers) {
    return prefix('image-rendering', {
      browsers: browsers
    });
  });

  logicalProps = interopDefault(require$$10$1);

  feature(logicalProps, function(browsers) {
    return prefix('border-inline-start', 'border-inline-end', 'margin-inline-start', 'margin-inline-end', 'padding-inline-start', 'padding-inline-end', {
      browsers: browsers
    });
  });

  feature(logicalProps, {
    match: /x\s#2/
  }, function(browsers) {
    return prefix('border-block-start', 'border-block-end', 'margin-block-start', 'margin-block-end', 'padding-block-start', 'padding-block-end', {
      browsers: browsers
    });
  });

  feature(interopDefault(require$$9$1), function(browsers) {
    return prefix('appearance', {
      browsers: browsers
    });
  });

  feature(interopDefault(require$$8$1), function(browsers) {
    return prefix('scroll-snap-type', 'scroll-snap-coordinate', 'scroll-snap-destination', 'scroll-snap-points-x', 'scroll-snap-points-y', {
      browsers: browsers
    });
  });

  feature(interopDefault(require$$7$1), function(browsers) {
    return prefix('flow-into', 'flow-from', 'region-fragment', {
      browsers: browsers
    });
  });

  feature(interopDefault(require$$6$1), function(browsers) {
    return prefix('image-set', {
      props: ['background', 'background-image', 'border-image', 'mask', 'list-style', 'list-style-image', 'content', 'mask-image'],
      browsers: browsers
    });
  });

  writingMode = interopDefault(require$$5$1);

  feature(writingMode, {
    match: /a|x/
  }, function(browsers) {
    return prefix('writing-mode', {
      browsers: browsers
    });
  });

  feature(interopDefault(require$$4$2), function(browsers) {
    return prefix('cross-fade', {
      props: ['background', 'background-image', 'border-image', 'mask', 'list-style', 'list-style-image', 'content', 'mask-image'],
      browsers: browsers
    });
  });

  readOnly = interopDefault(require$$3$4);

  feature(readOnly, function(browsers) {
    return prefix(':read-only', ':read-write', {
      selector: true,
      browsers: browsers
    });
  });

  feature(interopDefault(require$$2$6), function(browsers) {
    return prefix('text-emphasis', 'text-emphasis-position', 'text-emphasis-style', 'text-emphasis-color', {
      browsers: browsers
    });
  });

  grid = interopDefault(require$$1$8);

  feature(grid, function(browsers) {
    prefix('display-grid', 'inline-grid', {
      props: ['display'],
      browsers: browsers
    });
    return prefix('grid-template-columns', 'grid-template-rows', 'grid-row-start', 'grid-column-start', 'grid-row-end', 'grid-column-end', 'grid-row', 'grid-column', {
      browsers: browsers
    });
  });

  feature(grid, {
    match: /y x/
  }, function(browsers) {
    return prefix('grid-template-areas', 'grid-template', 'grid-auto-columns', 'grid-auto-rows', 'grid-auto-flow', 'grid', 'grid-area', 'grid-row-gap', 'grid-column-gap', 'grid-gap', {
      browsers: browsers
    });
  });

  feature(grid, {
    match: /a x/
  }, function(browsers) {
    return prefix('justify-items', 'grid-row-align', {
      browsers: browsers
    });
  });

  textSpacing = interopDefault(require$$0$15);

  feature(textSpacing, function(browsers) {
    return prefix('text-spacing', {
      browsers: browsers
    });
  });

}).call(commonjsGlobal);
});

var prefixes$3 = interopDefault(prefixes$2);


var require$$0$14 = Object.freeze({
  default: prefixes$3
});

var autoprefixer = createCommonjsModule(function (module) {
(function() {
  var Browsers, Prefixes, browserslist, cache, isPlainObject, postcss, timeCapsule,
    slice = [].slice;

  browserslist = interopDefault(require$$0$2);

  postcss = interopDefault(require$$1);

  Browsers = interopDefault(require$$1$3);

  Prefixes = interopDefault(require$$3);

  isPlainObject = function(obj) {
    return Object.prototype.toString.apply(obj) === '[object Object]';
  };

  cache = {};

  timeCapsule = function(result, prefixes) {
    if (prefixes.browsers.selected.length === 0) {
      return;
    }
    if (prefixes.add.selectors.length > 0) {
      return;
    }
    if (Object.keys(prefixes.add).length > 2) {
      return;
    }
    return result.warn('Greetings, space traveller. ' + 'We are in the golden age of prefix-less CSS, ' + 'where Autoprefixer is no longer needed for your stylesheet.');
  };

  module.exports = postcss.plugin('autoprefixer', function() {
    var loadPrefixes, options, plugin, reqs;
    reqs = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    if (reqs.length === 1 && isPlainObject(reqs[0])) {
      options = reqs[0];
      reqs = void 0;
    } else if (reqs.length === 0 || (reqs.length === 1 && (reqs[0] == null))) {
      reqs = void 0;
    } else if (reqs.length <= 2 && (reqs[0] instanceof Array || (reqs[0] == null))) {
      options = reqs[1];
      reqs = reqs[0];
    } else if (typeof reqs[reqs.length - 1] === 'object') {
      options = reqs.pop();
    }
    options || (options = {});
    if (options.browsers != null) {
      reqs = options.browsers;
    }
    loadPrefixes = function(opts) {
      var browsers, key, stats;
      stats = options.stats;
      browsers = new Browsers(module.exports.data.browsers, reqs, opts, stats);
      key = browsers.selected.join(', ') + JSON.stringify(options);
      return cache[key] || (cache[key] = new Prefixes(module.exports.data.prefixes, browsers, options));
    };
    plugin = function(css, result) {
      var prefixes, ref;
      prefixes = loadPrefixes({
        from: (ref = css.source) != null ? ref.input.file : void 0
      });
      timeCapsule(result, prefixes);
      if (options.remove !== false) {
        prefixes.processor.remove(css);
      }
      if (options.add !== false) {
        return prefixes.processor.add(css, result);
      }
    };
    plugin.options = options;
    plugin.info = function(opts) {
      return interopDefault(require$$2$5)(loadPrefixes(opts));
    };
    return plugin;
  });

  module.exports.data = {
    browsers: interopDefault(require$$0$3).agents,
    prefixes: interopDefault(require$$0$14)
  };

  module.exports.defaults = browserslist.defaults;

  module.exports.info = function() {
    return module.exports().info();
  };

}).call(commonjsGlobal);
});

var autoprefixer$1 = interopDefault(autoprefixer);

var _const = createCommonjsModule(function (module, exports) {
exports.TokenType = {
    String: 'String',
    Comment: 'Comment',
    Unknown: 'Unknown',
    Newline: 'Newline',
    Space: 'Space',
    Tab: 'Tab',
    ExclamationMark: 'ExclamationMark',         // !
    QuotationMark: 'QuotationMark',             // "
    NumberSign: 'NumberSign',                   // #
    DollarSign: 'DollarSign',                   // $
    PercentSign: 'PercentSign',                 // %
    Ampersand: 'Ampersand',                     // &
    Apostrophe: 'Apostrophe',                   // '
    LeftParenthesis: 'LeftParenthesis',         // (
    RightParenthesis: 'RightParenthesis',       // )
    Asterisk: 'Asterisk',                       // *
    PlusSign: 'PlusSign',                       // +
    Comma: 'Comma',                             // ,
    HyphenMinus: 'HyphenMinus',                 // -
    FullStop: 'FullStop',                       // .
    Solidus: 'Solidus',                         // /
    Colon: 'Colon',                             // :
    Semicolon: 'Semicolon',                     // ;
    LessThanSign: 'LessThanSign',               // <
    EqualsSign: 'EqualsSign',                   // =
    GreaterThanSign: 'GreaterThanSign',         // >
    QuestionMark: 'QuestionMark',               // ?
    CommercialAt: 'CommercialAt',               // @
    LeftSquareBracket: 'LeftSquareBracket',     // [
    ReverseSolidus: 'ReverseSolidus',           // \
    RightSquareBracket: 'RightSquareBracket',   // ]
    CircumflexAccent: 'CircumflexAccent',       // ^
    LowLine: 'LowLine',                         // _
    LeftCurlyBracket: 'LeftCurlyBracket',       // {
    VerticalLine: 'VerticalLine',               // |
    RightCurlyBracket: 'RightCurlyBracket',     // }
    Tilde: 'Tilde',                             // ~
    Identifier: 'Identifier',
    DecimalNumber: 'DecimalNumber'
};

// var i = 1;
// for (var key in exports.TokenType) {
//     exports.TokenType[key] = i++;
// }
});

var _const$1 = interopDefault(_const);
var TokenType = _const.TokenType;

var require$$0$17 = Object.freeze({
    default: _const$1,
    TokenType: TokenType
});

var scanner = createCommonjsModule(function (module) {
'use strict';

var TokenType = interopDefault(require$$0$17).TokenType;

var TAB = 9;
var N = 10;
var F = 12;
var R = 13;
var SPACE = 32;
var DOUBLE_QUOTE = 34;
var QUOTE = 39;
var RIGHT_PARENTHESIS = 41;
var STAR = 42;
var SLASH = 47;
var BACK_SLASH = 92;
var UNDERSCORE = 95;
var LEFT_CURLY_BRACE = 123;
var RIGHT_CURLY_BRACE = 125;

var WHITESPACE = 1;
var PUNCTUATOR = 2;
var DIGIT = 3;
var STRING = 4;

var PUNCTUATION = {
    9:  TokenType.Tab,                // '\t'
    10: TokenType.Newline,            // '\n'
    13: TokenType.Newline,            // '\r'
    32: TokenType.Space,              // ' '
    33: TokenType.ExclamationMark,    // '!'
    34: TokenType.QuotationMark,      // '"'
    35: TokenType.NumberSign,         // '#'
    36: TokenType.DollarSign,         // '$'
    37: TokenType.PercentSign,        // '%'
    38: TokenType.Ampersand,          // '&'
    39: TokenType.Apostrophe,         // '\''
    40: TokenType.LeftParenthesis,    // '('
    41: TokenType.RightParenthesis,   // ')'
    42: TokenType.Asterisk,           // '*'
    43: TokenType.PlusSign,           // '+'
    44: TokenType.Comma,              // ','
    45: TokenType.HyphenMinus,        // '-'
    46: TokenType.FullStop,           // '.'
    47: TokenType.Solidus,            // '/'
    58: TokenType.Colon,              // ':'
    59: TokenType.Semicolon,          // ';'
    60: TokenType.LessThanSign,       // '<'
    61: TokenType.EqualsSign,         // '='
    62: TokenType.GreaterThanSign,    // '>'
    63: TokenType.QuestionMark,       // '?'
    64: TokenType.CommercialAt,       // '@'
    91: TokenType.LeftSquareBracket,  // '['
    93: TokenType.RightSquareBracket, // ']'
    94: TokenType.CircumflexAccent,   // '^'
    95: TokenType.LowLine,            // '_'
    123: TokenType.LeftCurlyBracket,  // '{'
    124: TokenType.VerticalLine,      // '|'
    125: TokenType.RightCurlyBracket, // '}'
    126: TokenType.Tilde              // '~'
};
var SYMBOL_CATEGORY_LENGTH = Math.max.apply(null, Object.keys(PUNCTUATION)) + 1;
var SYMBOL_CATEGORY = new Uint32Array(SYMBOL_CATEGORY_LENGTH);
var IS_PUNCTUATOR = new Uint32Array(SYMBOL_CATEGORY_LENGTH);

// fill categories
Object.keys(PUNCTUATION).forEach(function(key) {
    SYMBOL_CATEGORY[Number(key)] = PUNCTUATOR;
    IS_PUNCTUATOR[Number(key)] = PUNCTUATOR;
}, SYMBOL_CATEGORY);

// don't treat as punctuator
IS_PUNCTUATOR[UNDERSCORE] = 0;

for (var i = 48; i <= 57; i++) {
    SYMBOL_CATEGORY[i] = DIGIT;
}

SYMBOL_CATEGORY[SPACE] = WHITESPACE;
SYMBOL_CATEGORY[TAB] = WHITESPACE;
SYMBOL_CATEGORY[N] = WHITESPACE;
SYMBOL_CATEGORY[R] = WHITESPACE;
SYMBOL_CATEGORY[F] = WHITESPACE;

SYMBOL_CATEGORY[QUOTE] = STRING;
SYMBOL_CATEGORY[DOUBLE_QUOTE] = STRING;

//
// scanner
//

var Scanner = function(source, initBlockMode, initLine, initColumn) {
    this.source = source;

    this.pos = source.charCodeAt(0) === 0xFEFF ? 1 : 0;
    this.eof = this.pos === this.source.length;
    this.line = typeof initLine === 'undefined' ? 1 : initLine;
    this.lineStartPos = typeof initColumn === 'undefined' ? -1 : -initColumn;

    this.minBlockMode = initBlockMode ? 1 : 0;
    this.blockMode = this.minBlockMode;
    this.urlMode = false;

    this.prevToken = null;
    this.token = null;
    this.buffer = [];
};

Scanner.prototype = {
    lookup: function(offset) {
        if (offset === 0) {
            return this.token;
        }

        for (var i = this.buffer.length; !this.eof && i < offset; i++) {
            this.buffer.push(this.getToken());
        }

        return offset <= this.buffer.length ? this.buffer[offset - 1] : null;
    },
    lookupType: function(offset, type) {
        var token = this.lookup(offset);

        return token !== null && token.type === type;
    },
    next: function() {
        var newToken = null;

        if (this.buffer.length !== 0) {
            newToken = this.buffer.shift();
        } else if (!this.eof) {
            newToken = this.getToken();
        }

        this.prevToken = this.token;
        this.token = newToken;

        return newToken;
    },

    tokenize: function() {
        var tokens = [];

        for (; this.pos < this.source.length; this.pos++) {
            tokens.push(this.getToken());
        }

        return tokens;
    },

    getToken: function() {
        var code = this.source.charCodeAt(this.pos);
        var line = this.line;
        var column = this.pos - this.lineStartPos;
        var offset = this.pos;
        var next;
        var type;
        var value;

        switch (code < SYMBOL_CATEGORY_LENGTH ? SYMBOL_CATEGORY[code] : 0) {
            case DIGIT:
                type = TokenType.DecimalNumber;
                value = this.readDecimalNumber();
                break;

            case STRING:
                type = TokenType.String;
                value = this.readString(code);
                break;

            case WHITESPACE:
                type = TokenType.Space;
                value = this.readSpaces();
                break;

            case PUNCTUATOR:
                if (code === SLASH) {
                    next = this.pos + 1 < this.source.length ? this.source.charCodeAt(this.pos + 1) : 0;

                    if (next === STAR) { // /*
                        type = TokenType.Comment;
                        value = this.readComment();
                        break;
                    } else if (next === SLASH && !this.urlMode) { // //
                        if (this.blockMode > 0) {
                            var skip = 2;

                            while (this.source.charCodeAt(this.pos + 2) === SLASH) {
                                skip++;
                            }

                            type = TokenType.Identifier;
                            value = this.readIdentifier(skip);

                            this.urlMode = this.urlMode || value === 'url';
                        } else {
                            type = TokenType.Unknown;
                            value = this.readUnknown();
                        }
                        break;
                    }
                }

                type = PUNCTUATION[code];
                value = String.fromCharCode(code);
                this.pos++;

                if (code === RIGHT_PARENTHESIS) {
                    this.urlMode = false;
                } else if (code === LEFT_CURLY_BRACE) {
                    this.blockMode++;
                } else if (code === RIGHT_CURLY_BRACE) {
                    if (this.blockMode > this.minBlockMode) {
                        this.blockMode--;
                    }
                }

                break;

            default:
                type = TokenType.Identifier;
                value = this.readIdentifier(0);

                this.urlMode = this.urlMode || value === 'url';
        }

        this.eof = this.pos === this.source.length;

        return {
            type: type,
            value: value,

            offset: offset,
            line: line,
            column: column
        };
    },

    isNewline: function(code) {
        if (code === N || code === F || code === R) {
            if (code === R && this.pos + 1 < this.source.length && this.source.charCodeAt(this.pos + 1) === N) {
                this.pos++;
            }

            this.line++;
            this.lineStartPos = this.pos;
            return true;
        }

        return false;
    },

    readSpaces: function() {
        var start = this.pos;

        for (; this.pos < this.source.length; this.pos++) {
            var code = this.source.charCodeAt(this.pos);

            if (!this.isNewline(code) && code !== SPACE && code !== TAB) {
                break;
            }
        }

        return this.source.substring(start, this.pos);
    },

    readComment: function() {
        var start = this.pos;

        for (this.pos += 2; this.pos < this.source.length; this.pos++) {
            var code = this.source.charCodeAt(this.pos);

            if (code === STAR) { // */
                if (this.source.charCodeAt(this.pos + 1) === SLASH) {
                    this.pos += 2;
                    break;
                }
            } else {
                this.isNewline(code);
            }
        }

        return this.source.substring(start, this.pos);
    },

    readUnknown: function() {
        var start = this.pos;

        for (this.pos += 2; this.pos < this.source.length; this.pos++) {
            if (this.isNewline(this.source.charCodeAt(this.pos), this.source)) {
                break;
            }
        }

        return this.source.substring(start, this.pos);
    },

    readString: function(quote) {
        var start = this.pos;
        var res = '';

        for (this.pos++; this.pos < this.source.length; this.pos++) {
            var code = this.source.charCodeAt(this.pos);

            if (code === BACK_SLASH) {
                var end = this.pos++;

                if (this.isNewline(this.source.charCodeAt(this.pos), this.source)) {
                    res += this.source.substring(start, end);
                    start = this.pos + 1;
                }
            } else if (code === quote) {
                this.pos++;
                break;
            }
        }

        return res + this.source.substring(start, this.pos);
    },

    readDecimalNumber: function() {
        var start = this.pos;
        var code;

        for (this.pos++; this.pos < this.source.length; this.pos++) {
            code = this.source.charCodeAt(this.pos);

            if (code < 48 || code > 57) {  // 0 .. 9
                break;
            }
        }

        return this.source.substring(start, this.pos);
    },

    readIdentifier: function(skip) {
        var start = this.pos;

        for (this.pos += skip; this.pos < this.source.length; this.pos++) {
            var code = this.source.charCodeAt(this.pos);

            if (code === BACK_SLASH) {
                this.pos++;

                // skip escaped unicode sequence that can ends with space
                // [0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?
                for (var i = 0; i < 7 && this.pos + i < this.source.length; i++) {
                    code = this.source.charCodeAt(this.pos + i);

                    if (i !== 6) {
                        if ((code >= 48 && code <= 57) ||  // 0 .. 9
                            (code >= 65 && code <= 70) ||  // A .. F
                            (code >= 97 && code <= 102)) { // a .. f
                            continue;
                        }
                    }

                    if (i > 0) {
                        this.pos += i - 1;
                        if (code === SPACE || code === TAB || this.isNewline(code)) {
                            this.pos++;
                        }
                    }

                    break;
                }
            } else if (code < SYMBOL_CATEGORY_LENGTH &&
                       IS_PUNCTUATOR[code] === PUNCTUATOR) {
                break;
            }
        }

        return this.source.substring(start, this.pos);
    }
};

// warm up tokenizer to elimitate code branches that never execute
// fix soft deoptimizations (insufficient type feedback)
new Scanner('\n\r\r\n\f//""\'\'/**/1a;.{url(a)}').lookup(1e3);

module.exports = Scanner;
});

var scanner$1 = interopDefault(scanner);


var require$$1$9 = Object.freeze({
    default: scanner$1
});

var list$2 = createCommonjsModule(function (module) {
//
//            item        item        item        item
//          /------\    /------\    /------\    /------\
//          | data |    | data |    | data |    | data |
//  null <--+-prev |<---+-prev |<---+-prev |<---+-prev |
//          | next-+--->| next-+--->| next-+--->| next-+--> null
//          \------/    \------/    \------/    \------/
//             ^                                    ^
//             |                list                |
//             |              /------\              |
//             \--------------+-head |              |
//                            | tail-+--------------/
//                            \------/
//

function createItem(data) {
    return {
        data: data,
        next: null,
        prev: null
    };
}

var List = function(values) {
    this.cursor = null;
    this.head = null;
    this.tail = null;

    if (Array.isArray(values)) {
        var cursor = null;

        for (var i = 0; i < values.length; i++) {
            var item = createItem(values[i]);

            if (cursor !== null) {
                cursor.next = item;
            } else {
                this.head = item;
            }

            item.prev = cursor;
            cursor = item;
        }

        this.tail = cursor;
    }
};

Object.defineProperty(List.prototype, 'size', {
    get: function() {
        var size = 0;
        var cursor = this.head;

        while (cursor) {
            size++;
            cursor = cursor.next;
        }

        return size;
    }
});

List.createItem = createItem;
List.prototype.createItem = createItem;

List.prototype.toArray = function() {
    var cursor = this.head;
    var result = [];

    while (cursor) {
        result.push(cursor.data);
        cursor = cursor.next;
    }

    return result;
};
List.prototype.toJSON = function() {
    return this.toArray();
};

List.prototype.isEmpty = function() {
    return this.head === null;
};

List.prototype.first = function() {
    return this.head && this.head.data;
};

List.prototype.last = function() {
    return this.tail && this.tail.data;
};

List.prototype.each = function(fn, context) {
    var item;
    var cursor = {
        prev: null,
        next: this.head,
        cursor: this.cursor
    };

    if (context === undefined) {
        context = this;
    }

    // push cursor
    this.cursor = cursor;

    while (cursor.next !== null) {
        item = cursor.next;
        cursor.next = item.next;

        fn.call(context, item.data, item, this);
    }

    // pop cursor
    this.cursor = this.cursor.cursor;
};

List.prototype.eachRight = function(fn, context) {
    var item;
    var cursor = {
        prev: this.tail,
        next: null,
        cursor: this.cursor
    };

    if (context === undefined) {
        context = this;
    }

    // push cursor
    this.cursor = cursor;

    while (cursor.prev !== null) {
        item = cursor.prev;
        cursor.prev = item.prev;

        fn.call(context, item.data, item, this);
    }

    // pop cursor
    this.cursor = this.cursor.cursor;
};

List.prototype.nextUntil = function(start, fn, context) {
    if (start === null) {
        return;
    }

    var item;
    var cursor = {
        prev: null,
        next: start,
        cursor: this.cursor
    };

    if (context === undefined) {
        context = this;
    }

    // push cursor
    this.cursor = cursor;

    while (cursor.next !== null) {
        item = cursor.next;
        cursor.next = item.next;

        if (fn.call(context, item.data, item, this)) {
            break;
        }
    }

    // pop cursor
    this.cursor = this.cursor.cursor;
};

List.prototype.prevUntil = function(start, fn, context) {
    if (start === null) {
        return;
    }

    var item;
    var cursor = {
        prev: start,
        next: null,
        cursor: this.cursor
    };

    if (context === undefined) {
        context = this;
    }

    // push cursor
    this.cursor = cursor;

    while (cursor.prev !== null) {
        item = cursor.prev;
        cursor.prev = item.prev;

        if (fn.call(context, item.data, item, this)) {
            break;
        }
    }

    // pop cursor
    this.cursor = this.cursor.cursor;
};

List.prototype.some = function(fn, context) {
    var cursor = this.head;

    if (context === undefined) {
        context = this;
    }

    while (cursor !== null) {
        if (fn.call(context, cursor.data, cursor, this)) {
            return true;
        }

        cursor = cursor.next;
    }

    return false;
};

List.prototype.map = function(fn, context) {
    var result = [];
    var cursor = this.head;

    if (context === undefined) {
        context = this;
    }

    while (cursor !== null) {
        result.push(fn.call(context, cursor.data, cursor, this));
        cursor = cursor.next;
    }

    return result;
};

List.prototype.copy = function() {
    var result = new List();
    var cursor = this.head;

    while (cursor !== null) {
        result.insert(createItem(cursor.data));
        cursor = cursor.next;
    }

    return result;
};

List.prototype.updateCursors = function(prevOld, prevNew, nextOld, nextNew) {
    var cursor = this.cursor;

    while (cursor !== null) {
        if (prevNew === true || cursor.prev === prevOld) {
            cursor.prev = prevNew;
        }

        if (nextNew === true || cursor.next === nextOld) {
            cursor.next = nextNew;
        }

        cursor = cursor.cursor;
    }
};

List.prototype.insert = function(item, before) {
    if (before !== undefined && before !== null) {
        // prev   before
        //      ^
        //     item
        this.updateCursors(before.prev, item, before, item);

        if (before.prev === null) {
            // insert to the beginning of list
            if (this.head !== before) {
                throw new Error('before doesn\'t below to list');
            }

            // since head points to before therefore list doesn't empty
            // no need to check tail
            this.head = item;
            before.prev = item;
            item.next = before;

            this.updateCursors(null, item);
        } else {

            // insert between two items
            before.prev.next = item;
            item.prev = before.prev;

            before.prev = item;
            item.next = before;
        }
    } else {
        // tail
        //      ^
        //     item
        this.updateCursors(this.tail, item, null, item);

        // insert to end of the list
        if (this.tail !== null) {
            // if list has a tail, then it also has a head, but head doesn't change

            // last item -> new item
            this.tail.next = item;

            // last item <- new item
            item.prev = this.tail;
        } else {
            // if list has no a tail, then it also has no a head
            // in this case points head to new item
            this.head = item;
        }

        // tail always start point to new item
        this.tail = item;
    }
};

List.prototype.remove = function(item) {
    //      item
    //       ^
    // prev     next
    this.updateCursors(item, item.prev, item, item.next);

    if (item.prev !== null) {
        item.prev.next = item.next;
    } else {
        if (this.head !== item) {
            throw new Error('item doesn\'t below to list');
        }

        this.head = item.next;
    }

    if (item.next !== null) {
        item.next.prev = item.prev;
    } else {
        if (this.tail !== item) {
            throw new Error('item doesn\'t below to list');
        }

        this.tail = item.prev;
    }

    item.prev = null;
    item.next = null;

    return item;
};

List.prototype.appendList = function(list) {
    // ignore empty lists
    if (list.head === null) {
        return;
    }

    this.updateCursors(this.tail, list.tail, null, list.head);

    // insert to end of the list
    if (this.tail !== null) {
        // if destination list has a tail, then it also has a head,
        // but head doesn't change

        // dest tail -> source head
        this.tail.next = list.head;

        // dest tail <- source head
        list.head.prev = this.tail;
    } else {
        // if list has no a tail, then it also has no a head
        // in this case points head to new item
        this.head = list.head;
    }

    // tail always start point to new item
    this.tail = list.tail;

    list.head = null;
    list.tail = null;
};

module.exports = List;
});

var list$3 = interopDefault(list$2);


var require$$2$7 = Object.freeze({
    default: list$3
});

var index$11 = createCommonjsModule(function (module) {
'use strict';

var TokenType = interopDefault(require$$0$17).TokenType;
var Scanner = interopDefault(require$$1$9);
var List = interopDefault(require$$2$7);
var needPositions;
var filename;
var scanner;

var SCOPE_ATRULE_EXPRESSION = 1;
var SCOPE_SELECTOR = 2;
var SCOPE_VALUE = 3;

var specialFunctions = {};
specialFunctions[SCOPE_ATRULE_EXPRESSION] = {
    url: getUri
};
specialFunctions[SCOPE_SELECTOR] = {
    url: getUri,
    not: getNotFunction
};
specialFunctions[SCOPE_VALUE] = {
    url: getUri,
    expression: getOldIEExpression,
    var: getVarFunction
};

var initialContext = {
    stylesheet: getStylesheet,
    atrule: getAtrule,
    atruleExpression: getAtruleExpression,
    ruleset: getRuleset,
    selector: getSelector,
    simpleSelector: getSimpleSelector,
    block: getBlock,
    declaration: getDeclaration,
    value: getValue
};

var blockMode = {
    'declaration': true,
    'property': true
};

function parseError(message) {
    var error = new Error(message);
    var offset = 0;
    var line = 1;
    var column = 1;
    var lines;

    if (scanner.token !== null) {
        offset = scanner.token.offset;
        line = scanner.token.line;
        column = scanner.token.column;
    } else if (scanner.prevToken !== null) {
        lines = scanner.prevToken.value.trimRight();
        offset = scanner.prevToken.offset + lines.length;
        lines = lines.split(/\n|\r\n?|\f/);
        line = scanner.prevToken.line + lines.length - 1;
        column = lines.length > 1
            ? lines[lines.length - 1].length + 1
            : scanner.prevToken.column + lines[lines.length - 1].length;
    }

    error.name = 'CssSyntaxError';
    error.parseError = {
        offset: offset,
        line: line,
        column: column
    };

    throw error;
}

function eat(tokenType) {
    if (scanner.token !== null && scanner.token.type === tokenType) {
        scanner.next();
        return true;
    }

    parseError(tokenType + ' is expected');
}

function expectIdentifier(name, eat) {
    if (scanner.token !== null) {
        if (scanner.token.type === TokenType.Identifier &&
            scanner.token.value.toLowerCase() === name) {
            if (eat) {
                scanner.next();
            }

            return true;
        }
    }

    parseError('Identifier `' + name + '` is expected');
}

function expectAny(what) {
    if (scanner.token !== null) {
        for (var i = 1, type = scanner.token.type; i < arguments.length; i++) {
            if (type === arguments[i]) {
                return true;
            }
        }
    }

    parseError(what + ' is expected');
}

function getInfo() {
    if (needPositions && scanner.token) {
        return {
            source: filename,
            offset: scanner.token.offset,
            line: scanner.token.line,
            column: scanner.token.column
        };
    }

    return null;

}

function removeTrailingSpaces(list) {
    while (list.tail) {
        if (list.tail.data.type === 'Space') {
            list.remove(list.tail);
        } else {
            break;
        }
    }
}

function getStylesheet(nested) {
    var child = null;
    var node = {
        type: 'StyleSheet',
        info: getInfo(),
        rules: new List()
    };

    scan:
    while (scanner.token !== null) {
        switch (scanner.token.type) {
            case TokenType.Space:
                scanner.next();
                child = null;
                break;

            case TokenType.Comment:
                // ignore comments except exclamation comments on top level
                if (nested || scanner.token.value.charAt(2) !== '!') {
                    scanner.next();
                    child = null;
                } else {
                    child = getComment();
                }
                break;

            case TokenType.Unknown:
                child = getUnknown();
                break;

            case TokenType.CommercialAt:
                child = getAtrule();
                break;

            case TokenType.RightCurlyBracket:
                if (!nested) {
                    parseError('Unexpected right curly brace');
                }

                break scan;

            default:
                child = getRuleset();
        }

        if (child !== null) {
            node.rules.insert(List.createItem(child));
        }
    }

    return node;
}

// '//' ...
// TODO: remove it as wrong thing
function getUnknown() {
    var info = getInfo();
    var value = scanner.token.value;

    eat(TokenType.Unknown);

    return {
        type: 'Unknown',
        info: info,
        value: value
    };
}

function isBlockAtrule() {
    for (var offset = 1, cursor; cursor = scanner.lookup(offset); offset++) {
        var type = cursor.type;

        if (type === TokenType.RightCurlyBracket) {
            return true;
        }

        if (type === TokenType.LeftCurlyBracket ||
            type === TokenType.CommercialAt) {
            return false;
        }
    }

    return true;
}

function getAtruleExpression() {
    var child = null;
    var node = {
        type: 'AtruleExpression',
        info: getInfo(),
        sequence: new List()
    };

    scan:
    while (scanner.token !== null) {
        switch (scanner.token.type) {
            case TokenType.Semicolon:
                break scan;

            case TokenType.LeftCurlyBracket:
                break scan;

            case TokenType.Space:
                if (node.sequence.isEmpty()) {
                    scanner.next(); // ignore spaces in beginning
                    child = null;
                } else {
                    child = getS();
                }
                break;

            case TokenType.Comment: // ignore comments
                scanner.next();
                child = null;
                break;

            case TokenType.Comma:
                child = getOperator();
                break;

            case TokenType.Colon:
                child = getPseudo();
                break;

            case TokenType.LeftParenthesis:
                child = getBraces(SCOPE_ATRULE_EXPRESSION);
                break;

            default:
                child = getAny(SCOPE_ATRULE_EXPRESSION);
        }

        if (child !== null) {
            node.sequence.insert(List.createItem(child));
        }
    }

    removeTrailingSpaces(node.sequence);

    return node;
}

function getAtrule() {
    eat(TokenType.CommercialAt);

    var node = {
        type: 'Atrule',
        info: getInfo(),
        name: readIdent(false),
        expression: getAtruleExpression(),
        block: null
    };

    if (scanner.token !== null) {
        switch (scanner.token.type) {
            case TokenType.Semicolon:
                scanner.next();  // {
                break;

            case TokenType.LeftCurlyBracket:
                scanner.next();  // {

                if (isBlockAtrule()) {
                    node.block = getBlock();
                } else {
                    node.block = getStylesheet(true);
                }

                eat(TokenType.RightCurlyBracket);
                break;

            default:
                parseError('Unexpected input');
        }
    }

    return node;
}

function getRuleset() {
    return {
        type: 'Ruleset',
        info: getInfo(),
        selector: getSelector(),
        block: getBlockWithBrackets()
    };
}

function getSelector() {
    var isBadSelector = false;
    var lastComma = true;
    var node = {
        type: 'Selector',
        info: getInfo(),
        selectors: new List()
    };

    scan:
    while (scanner.token !== null) {
        switch (scanner.token.type) {
            case TokenType.LeftCurlyBracket:
                break scan;

            case TokenType.Comma:
                if (lastComma) {
                    isBadSelector = true;
                }

                lastComma = true;
                scanner.next();
                break;

            default:
                if (!lastComma) {
                    isBadSelector = true;
                }

                lastComma = false;
                node.selectors.insert(List.createItem(getSimpleSelector()));

                if (node.selectors.tail.data.sequence.isEmpty()) {
                    isBadSelector = true;
                }
        }
    }

    if (lastComma) {
        isBadSelector = true;
        // parseError('Unexpected trailing comma');
    }

    if (isBadSelector) {
        node.selectors = new List();
    }

    return node;
}

function getSimpleSelector(nested) {
    var child = null;
    var combinator = null;
    var node = {
        type: 'SimpleSelector',
        info: getInfo(),
        sequence: new List()
    };

    scan:
    while (scanner.token !== null) {
        switch (scanner.token.type) {
            case TokenType.Comma:
                break scan;

            case TokenType.LeftCurlyBracket:
                if (nested) {
                    parseError('Unexpected input');
                }

                break scan;

            case TokenType.RightParenthesis:
                if (!nested) {
                    parseError('Unexpected input');
                }

                break scan;

            case TokenType.Comment:
                scanner.next();
                child = null;
                break;

            case TokenType.Space:
                child = null;
                if (!combinator && node.sequence.head) {
                    combinator = getCombinator();
                } else {
                    scanner.next();
                }
                break;

            case TokenType.PlusSign:
            case TokenType.GreaterThanSign:
            case TokenType.Tilde:
            case TokenType.Solidus:
                if (combinator && combinator.name !== ' ') {
                    parseError('Unexpected combinator');
                }

                child = null;
                combinator = getCombinator();
                break;

            case TokenType.FullStop:
                child = getClass();
                break;

            case TokenType.LeftSquareBracket:
                child = getAttribute();
                break;

            case TokenType.NumberSign:
                child = getShash();
                break;

            case TokenType.Colon:
                child = getPseudo();
                break;

            case TokenType.LowLine:
            case TokenType.Identifier:
            case TokenType.Asterisk:
                child = getNamespacedIdentifier(false);
                break;

            case TokenType.HyphenMinus:
            case TokenType.DecimalNumber:
                child = tryGetPercentage() || getNamespacedIdentifier(false);
                break;

            default:
                parseError('Unexpected input');
        }

        if (child !== null) {
            if (combinator !== null) {
                node.sequence.insert(List.createItem(combinator));
                combinator = null;
            }

            node.sequence.insert(List.createItem(child));
        }
    }

    if (combinator && combinator.name !== ' ') {
        parseError('Unexpected combinator');
    }

    return node;
}

function getDeclarations() {
    var child = null;
    var declarations = new List();

    scan:
    while (scanner.token !== null) {
        switch (scanner.token.type) {
            case TokenType.RightCurlyBracket:
                break scan;

            case TokenType.Space:
            case TokenType.Comment:
                scanner.next();
                child = null;
                break;

            case TokenType.Semicolon: // ;
                scanner.next();
                child = null;
                break;

            default:
                child = getDeclaration();
        }

        if (child !== null) {
            declarations.insert(List.createItem(child));
        }
    }

    return declarations;
}

function getBlockWithBrackets() {
    var info = getInfo();
    var node;

    eat(TokenType.LeftCurlyBracket);
    node = {
        type: 'Block',
        info: info,
        declarations: getDeclarations()
    };
    eat(TokenType.RightCurlyBracket);

    return node;
}

function getBlock() {
    return {
        type: 'Block',
        info: getInfo(),
        declarations: getDeclarations()
    };
}

function getDeclaration(nested) {
    var info = getInfo();
    var property = getProperty();
    var value;

    eat(TokenType.Colon);

    // check it's a filter
    if (/filter$/.test(property.name.toLowerCase()) && checkProgid()) {
        value = getFilterValue();
    } else {
        value = getValue(nested);
    }

    return {
        type: 'Declaration',
        info: info,
        property: property,
        value: value
    };
}

function getProperty() {
    var name = '';
    var node = {
        type: 'Property',
        info: getInfo(),
        name: null
    };

    for (; scanner.token !== null; scanner.next()) {
        var type = scanner.token.type;

        if (type !== TokenType.Solidus &&
            type !== TokenType.Asterisk &&
            type !== TokenType.DollarSign) {
            break;
        }

        name += scanner.token.value;
    }

    node.name = name + readIdent(true);

    readSC();

    return node;
}

function getValue(nested) {
    var child = null;
    var node = {
        type: 'Value',
        info: getInfo(),
        important: false,
        sequence: new List()
    };

    readSC();

    scan:
    while (scanner.token !== null) {
        switch (scanner.token.type) {
            case TokenType.RightCurlyBracket:
            case TokenType.Semicolon:
                break scan;

            case TokenType.RightParenthesis:
                if (!nested) {
                    parseError('Unexpected input');
                }
                break scan;

            case TokenType.Space:
                child = getS();
                break;

            case TokenType.Comment: // ignore comments
                scanner.next();
                child = null;
                break;

            case TokenType.NumberSign:
                child = getVhash();
                break;

            case TokenType.Solidus:
            case TokenType.Comma:
                child = getOperator();
                break;

            case TokenType.LeftParenthesis:
            case TokenType.LeftSquareBracket:
                child = getBraces(SCOPE_VALUE);
                break;

            case TokenType.ExclamationMark:
                node.important = getImportant();
                child = null;
                break;

            default:
                // check for unicode range: U+0F00, U+0F00-0FFF, u+0F00??
                if (scanner.token.type === TokenType.Identifier) {
                    var prefix = scanner.token.value;
                    if (prefix === 'U' || prefix === 'u') {
                        if (scanner.lookupType(1, TokenType.PlusSign)) {
                            scanner.next(); // U or u
                            scanner.next(); // +

                            child = {
                                type: 'Identifier',
                                info: getInfo(), // FIXME: wrong position
                                name: prefix + '+' + readUnicodeRange(true)
                            };
                        }
                        break;
                    }
                }

                child = getAny(SCOPE_VALUE);
        }

        if (child !== null) {
            node.sequence.insert(List.createItem(child));
        }
    }

    removeTrailingSpaces(node.sequence);

    return node;
}

// any = string | percentage | dimension | number | uri | functionExpression | funktion | unary | operator | ident
function getAny(scope) {
    switch (scanner.token.type) {
        case TokenType.String:
            return getString();

        case TokenType.LowLine:
        case TokenType.Identifier:
            break;

        case TokenType.FullStop:
        case TokenType.DecimalNumber:
        case TokenType.HyphenMinus:
        case TokenType.PlusSign:
            var number = tryGetNumber();

            if (number !== null) {
                if (scanner.token !== null) {
                    if (scanner.token.type === TokenType.PercentSign) {
                        return getPercentage(number);
                    } else if (scanner.token.type === TokenType.Identifier) {
                        return getDimension(number.value);
                    }
                }

                return number;
            }

            if (scanner.token.type === TokenType.HyphenMinus) {
                var next = scanner.lookup(1);
                if (next && (next.type === TokenType.Identifier || next.type === TokenType.HyphenMinus)) {
                    break;
                }
            }

            if (scanner.token.type === TokenType.HyphenMinus ||
                scanner.token.type === TokenType.PlusSign) {
                return getOperator();
            }

            parseError('Unexpected input');

        default:
            parseError('Unexpected input');
    }

    var ident = getIdentifier(false);

    if (scanner.token !== null && scanner.token.type === TokenType.LeftParenthesis) {
        return getFunction(scope, ident);
    }

    return ident;
}

function readAttrselector() {
    expectAny('Attribute selector (=, ~=, ^=, $=, *=, |=)',
        TokenType.EqualsSign,        // =
        TokenType.Tilde,             // ~=
        TokenType.CircumflexAccent,  // ^=
        TokenType.DollarSign,        // $=
        TokenType.Asterisk,          // *=
        TokenType.VerticalLine       // |=
    );

    var name;

    if (scanner.token.type === TokenType.EqualsSign) {
        name = '=';
        scanner.next();
    } else {
        name = scanner.token.value + '=';
        scanner.next();
        eat(TokenType.EqualsSign);
    }

    return name;
}

// '[' S* attrib_name ']'
// '[' S* attrib_name S* attrib_match S* [ IDENT | STRING ] S* attrib_flags? S* ']'
function getAttribute() {
    var node = {
        type: 'Attribute',
        info: getInfo(),
        name: null,
        operator: null,
        value: null,
        flags: null
    };

    eat(TokenType.LeftSquareBracket);

    readSC();

    node.name = getNamespacedIdentifier(true);

    readSC();

    if (scanner.token !== null && scanner.token.type !== TokenType.RightSquareBracket) {
        // avoid case `[name i]`
        if (scanner.token.type !== TokenType.Identifier) {
            node.operator = readAttrselector();

            readSC();

            if (scanner.token !== null && scanner.token.type === TokenType.String) {
                node.value = getString();
            } else {
                node.value = getIdentifier(false);
            }

            readSC();
        }

        // attribute flags
        if (scanner.token !== null && scanner.token.type === TokenType.Identifier) {
            node.flags = scanner.token.value;

            scanner.next();
            readSC();
        }
    }

    eat(TokenType.RightSquareBracket);

    return node;
}

function getBraces(scope) {
    var close;
    var child = null;
    var node = {
        type: 'Braces',
        info: getInfo(),
        open: scanner.token.value,
        close: null,
        sequence: new List()
    };

    if (scanner.token.type === TokenType.LeftParenthesis) {
        close = TokenType.RightParenthesis;
    } else {
        close = TokenType.RightSquareBracket;
    }

    // left brace
    scanner.next();

    readSC();

    scan:
    while (scanner.token !== null) {
        switch (scanner.token.type) {
            case close:
                node.close = scanner.token.value;
                break scan;

            case TokenType.Space:
                child = getS();
                break;

            case TokenType.Comment:
                scanner.next();
                child = null;
                break;

            case TokenType.NumberSign: // ??
                child = getVhash();
                break;

            case TokenType.LeftParenthesis:
            case TokenType.LeftSquareBracket:
                child = getBraces(scope);
                break;

            case TokenType.Solidus:
            case TokenType.Asterisk:
            case TokenType.Comma:
            case TokenType.Colon:
                child = getOperator();
                break;

            default:
                child = getAny(scope);
        }

        if (child !== null) {
            node.sequence.insert(List.createItem(child));
        }
    }

    removeTrailingSpaces(node.sequence);

    // right brace
    eat(close);

    return node;
}

// '.' ident
function getClass() {
    var info = getInfo();

    eat(TokenType.FullStop);

    return {
        type: 'Class',
        info: info,
        name: readIdent(false)
    };
}

// '#' ident
function getShash() {
    var info = getInfo();

    eat(TokenType.NumberSign);

    return {
        type: 'Id',
        info: info,
        name: readIdent(false)
    };
}

// + | > | ~ | /deep/
function getCombinator() {
    var info = getInfo();
    var combinator;

    switch (scanner.token.type) {
        case TokenType.Space:
            combinator = ' ';
            scanner.next();
            break;

        case TokenType.PlusSign:
        case TokenType.GreaterThanSign:
        case TokenType.Tilde:
            combinator = scanner.token.value;
            scanner.next();
            break;

        case TokenType.Solidus:
            combinator = '/deep/';
            scanner.next();

            expectIdentifier('deep', true);

            eat(TokenType.Solidus);
            break;

        default:
            parseError('Combinator (+, >, ~, /deep/) is expected');
    }

    return {
        type: 'Combinator',
        info: info,
        name: combinator
    };
}

// '/*' .* '*/'
function getComment() {
    var info = getInfo();
    var value = scanner.token.value;
    var len = value.length;

    if (len > 4 && value.charAt(len - 2) === '*' && value.charAt(len - 1) === '/') {
        len -= 2;
    }

    scanner.next();

    return {
        type: 'Comment',
        info: info,
        value: value.substring(2, len)
    };
}

// special reader for units to avoid adjoined IE hacks (i.e. '1px\9')
function readUnit() {
    if (scanner.token !== null && scanner.token.type === TokenType.Identifier) {
        var unit = scanner.token.value;
        var backSlashPos = unit.indexOf('\\');

        // no backslash in unit name
        if (backSlashPos === -1) {
            scanner.next();
            return unit;
        }

        // patch token
        scanner.token.value = unit.substr(backSlashPos);
        scanner.token.offset += backSlashPos;
        scanner.token.column += backSlashPos;

        // return unit w/o backslash part
        return unit.substr(0, backSlashPos);
    }

    parseError('Identifier is expected');
}

// number ident
function getDimension(number) {
    return {
        type: 'Dimension',
        info: getInfo(),
        value: number || readNumber(),
        unit: readUnit()
    };
}

// number "%"
function tryGetPercentage() {
    var number = tryGetNumber();

    if (number && scanner.token !== null && scanner.token.type === TokenType.PercentSign) {
        return getPercentage(number);
    }

    return null;
}

function getPercentage(number) {
    var info;

    if (!number) {
        info = getInfo();
        number = readNumber();
    } else {
        info = number.info;
        number = number.value;
    }

    eat(TokenType.PercentSign);

    return {
        type: 'Percentage',
        info: info,
        value: number
    };
}

// ident '(' functionBody ')' |
// not '(' <simpleSelector>* ')'
function getFunction(scope, ident) {
    var defaultArguments = getFunctionArguments;

    if (!ident) {
        ident = getIdentifier(false);
    }

    // parse special functions
    var name = ident.name.toLowerCase();

    if (specialFunctions.hasOwnProperty(scope)) {
        if (specialFunctions[scope].hasOwnProperty(name)) {
            return specialFunctions[scope][name](scope, ident);
        }
    }

    return getFunctionInternal(defaultArguments, scope, ident);
}

function getFunctionInternal(functionArgumentsReader, scope, ident) {
    var args;

    eat(TokenType.LeftParenthesis);
    args = functionArgumentsReader(scope);
    eat(TokenType.RightParenthesis);

    return {
        type: scope === SCOPE_SELECTOR ? 'FunctionalPseudo' : 'Function',
        info: ident.info,
        name: ident.name,
        arguments: args
    };
}

function getFunctionArguments(scope) {
    var args = new List();
    var argument = null;
    var child = null;

    readSC();

    scan:
    while (scanner.token !== null) {
        switch (scanner.token.type) {
            case TokenType.RightParenthesis:
                break scan;

            case TokenType.Space:
                child = getS();
                break;

            case TokenType.Comment: // ignore comments
                scanner.next();
                child = null;
                break;

            case TokenType.NumberSign: // TODO: not sure it should be here
                child = getVhash();
                break;

            case TokenType.LeftParenthesis:
            case TokenType.LeftSquareBracket:
                child = getBraces(scope);
                break;

            case TokenType.Comma:
                removeTrailingSpaces(argument.sequence);
                scanner.next();
                readSC();
                argument = null;
                child = null;
                break;

            case TokenType.Solidus:
            case TokenType.Asterisk:
            case TokenType.Colon:
            case TokenType.EqualsSign:
                child = getOperator();
                break;

            default:
                child = getAny(scope);
        }

        if (argument === null) {
            argument = {
                type: 'Argument',
                sequence: new List()
            };
            args.insert(List.createItem(argument));
        }

        if (child !== null) {
            argument.sequence.insert(List.createItem(child));
        }
    }

    if (argument !== null) {
        removeTrailingSpaces(argument.sequence);
    }

    return args;
}

function getVarFunction(scope, ident) {
    return getFunctionInternal(getVarFunctionArguments, scope, ident);
}

function getNotFunctionArguments() {
    var args = new List();
    var wasSelector = false;

    scan:
    while (scanner.token !== null) {
        switch (scanner.token.type) {
            case TokenType.RightParenthesis:
                if (!wasSelector) {
                    parseError('Simple selector is expected');
                }

                break scan;

            case TokenType.Comma:
                if (!wasSelector) {
                    parseError('Simple selector is expected');
                }

                wasSelector = false;
                scanner.next();
                break;

            default:
                wasSelector = true;
                args.insert(List.createItem(getSimpleSelector(true)));
        }
    }

    return args;
}

function getNotFunction(scope, ident) {
    var args;

    eat(TokenType.LeftParenthesis);
    args = getNotFunctionArguments(scope);
    eat(TokenType.RightParenthesis);

    return {
        type: 'Negation',
        info: ident.info,
        // name: ident.name,  // TODO: add name?
        sequence: args        // FIXME: -> arguments?
    };
}

// var '(' ident (',' <declaration-value>)? ')'
function getVarFunctionArguments() { // TODO: special type Variable?
    var args = new List();

    readSC();

    args.insert(List.createItem({
        type: 'Argument',
        sequence: new List([getIdentifier(true)])
    }));

    readSC();

    if (scanner.token !== null && scanner.token.type === TokenType.Comma) {
        eat(TokenType.Comma);
        readSC();

        args.insert(List.createItem({
            type: 'Argument',
            sequence: new List([getValue(true)])
        }));

        readSC();
    }

    return args;
}

// url '(' ws* (string | raw) ws* ')'
function getUri(scope, ident) {
    var node = {
        type: 'Url',
        info: ident.info,
        // name: ident.name,
        value: null
    };

    eat(TokenType.LeftParenthesis); // (

    readSC();

    if (scanner.token.type === TokenType.String) {
        node.value = getString();
        readSC();
    } else {
        var rawInfo = getInfo();
        var raw = '';

        for (; scanner.token !== null; scanner.next()) {
            var type = scanner.token.type;

            if (type === TokenType.Space ||
                type === TokenType.LeftParenthesis ||
                type === TokenType.RightParenthesis) {
                break;
            }

            raw += scanner.token.value;
        }

        node.value = {
            type: 'Raw',
            info: rawInfo,
            value: raw
        };

        readSC();
    }

    eat(TokenType.RightParenthesis); // )

    return node;
}

// expression '(' raw ')'
function getOldIEExpression(scope, ident) {
    var balance = 0;
    var raw = '';

    eat(TokenType.LeftParenthesis);

    for (; scanner.token !== null; scanner.next()) {
        if (scanner.token.type === TokenType.RightParenthesis) {
            if (balance === 0) {
                break;
            }

            balance--;
        } else if (scanner.token.type === TokenType.LeftParenthesis) {
            balance++;
        }

        raw += scanner.token.value;
    }

    eat(TokenType.RightParenthesis);

    return {
        type: 'Function',
        info: ident.info,
        name: ident.name,
        arguments: new List([{
            type: 'Argument',
            sequence: new List([{
                type: 'Raw',
                value: raw
            }])
        }])
    };
}

function readUnicodeRange(tryNext) {
    var hex = '';

    for (; scanner.token !== null; scanner.next()) {
        if (scanner.token.type !== TokenType.DecimalNumber &&
            scanner.token.type !== TokenType.Identifier) {
            break;
        }

        hex += scanner.token.value;
    }

    if (!/^[0-9a-f]{1,6}$/i.test(hex)) {
        parseError('Unexpected input');
    }

    // U+abc???
    if (tryNext) {
        for (; hex.length < 6 && scanner.token !== null; scanner.next()) {
            if (scanner.token.type !== TokenType.QuestionMark) {
                break;
            }

            hex += scanner.token.value;
            tryNext = false;
        }
    }

    // U+aaa-bbb
    if (tryNext) {
        if (scanner.token !== null && scanner.token.type === TokenType.HyphenMinus) {
            scanner.next();

            var next = readUnicodeRange(false);

            if (!next) {
                parseError('Unexpected input');
            }

            hex += '-' + next;
        }
    }

    return hex;
}

function readIdent(varAllowed) {
    var name = '';

    // optional first -
    if (scanner.token !== null && scanner.token.type === TokenType.HyphenMinus) {
        name = '-';
        scanner.next();

        if (varAllowed && scanner.token !== null && scanner.token.type === TokenType.HyphenMinus) {
            name = '--';
            scanner.next();
        }
    }

    expectAny('Identifier',
        TokenType.LowLine,
        TokenType.Identifier
    );

    if (scanner.token !== null) {
        name += scanner.token.value;
        scanner.next();

        for (; scanner.token !== null; scanner.next()) {
            var type = scanner.token.type;

            if (type !== TokenType.LowLine &&
                type !== TokenType.Identifier &&
                type !== TokenType.DecimalNumber &&
                type !== TokenType.HyphenMinus) {
                break;
            }

            name += scanner.token.value;
        }
    }

    return name;
}

function getNamespacedIdentifier(checkColon) {
    if (scanner.token === null) {
        parseError('Unexpected end of input');
    }

    var info = getInfo();
    var name;

    if (scanner.token.type === TokenType.Asterisk) {
        checkColon = false;
        name = '*';
        scanner.next();
    } else {
        name = readIdent(false);
    }

    if (scanner.token !== null) {
        if (scanner.token.type === TokenType.VerticalLine &&
            scanner.lookupType(1, TokenType.EqualsSign) === false) {
            name += '|';

            if (scanner.next() !== null) {
                if (scanner.token.type === TokenType.HyphenMinus ||
                    scanner.token.type === TokenType.Identifier ||
                    scanner.token.type === TokenType.LowLine) {
                    name += readIdent(false);
                } else if (scanner.token.type === TokenType.Asterisk) {
                    checkColon = false;
                    name += '*';
                    scanner.next();
                }
            }
        }
    }

    if (checkColon && scanner.token !== null && scanner.token.type === TokenType.Colon) {
        scanner.next();
        name += ':' + readIdent(false);
    }

    return {
        type: 'Identifier',
        info: info,
        name: name
    };
}

function getIdentifier(varAllowed) {
    return {
        type: 'Identifier',
        info: getInfo(),
        name: readIdent(varAllowed)
    };
}

// ! ws* important
function getImportant() { // TODO?
    // var info = getInfo();

    eat(TokenType.ExclamationMark);

    readSC();

    // return {
    //     type: 'Identifier',
    //     info: info,
    //     name: readIdent(false)
    // };

    expectIdentifier('important');

    readIdent(false);

    // should return identifier in future for original source restoring as is
    // returns true for now since it's fit to optimizer purposes
    return true;
}

// odd | even | number? n
function getNth() {
    expectAny('Number, odd or even',
        TokenType.Identifier,
        TokenType.DecimalNumber
    );

    var info = getInfo();
    var value = scanner.token.value;
    var cmpValue;

    if (scanner.token.type === TokenType.DecimalNumber) {
        var next = scanner.lookup(1);
        if (next !== null &&
            next.type === TokenType.Identifier &&
            next.value.toLowerCase() === 'n') {
            value += next.value;
            scanner.next();
        }
    } else {
        var cmpValue = value.toLowerCase();
        if (cmpValue !== 'odd' && cmpValue !== 'even' && cmpValue !== 'n') {
            parseError('Unexpected identifier');
        }
    }

    scanner.next();

    return {
        type: 'Nth',
        info: info,
        value: value
    };
}

function getNthSelector() {
    var info = getInfo();
    var sequence = new List();
    var node;
    var child = null;

    eat(TokenType.Colon);
    expectIdentifier('nth', false);

    node = {
        type: 'FunctionalPseudo',
        info: info,
        name: readIdent(false),
        arguments: new List([{
            type: 'Argument',
            sequence: sequence
        }])
    };

    eat(TokenType.LeftParenthesis);

    scan:
    while (scanner.token !== null) {
        switch (scanner.token.type) {
            case TokenType.RightParenthesis:
                break scan;

            case TokenType.Space:
            case TokenType.Comment:
                scanner.next();
                child = null;
                break;

            case TokenType.HyphenMinus:
            case TokenType.PlusSign:
                child = getOperator();
                break;

            default:
                child = getNth();
        }

        if (child !== null) {
            sequence.insert(List.createItem(child));
        }
    }

    eat(TokenType.RightParenthesis);

    return node;
}

function readNumber() {
    var wasDigits = false;
    var number = '';
    var offset = 0;

    if (scanner.lookupType(offset, TokenType.HyphenMinus)) {
        number = '-';
        offset++;
    }

    if (scanner.lookupType(offset, TokenType.DecimalNumber)) {
        wasDigits = true;
        number += scanner.lookup(offset).value;
        offset++;
    }

    if (scanner.lookupType(offset, TokenType.FullStop)) {
        number += '.';
        offset++;
    }

    if (scanner.lookupType(offset, TokenType.DecimalNumber)) {
        wasDigits = true;
        number += scanner.lookup(offset).value;
        offset++;
    }

    if (wasDigits) {
        while (offset--) {
            scanner.next();
        }

        return number;
    }

    return null;
}

function tryGetNumber() {
    var info = getInfo();
    var number = readNumber();

    if (number !== null) {
        return {
            type: 'Number',
            info: info,
            value: number
        };
    }

    return null;
}

// '/' | '*' | ',' | ':' | '=' | '+' | '-'
// TODO: remove '=' since it's wrong operator, but theat as operator
// to make old things like `filter: alpha(opacity=0)` works
function getOperator() {
    var node = {
        type: 'Operator',
        info: getInfo(),
        value: scanner.token.value
    };

    scanner.next();

    return node;
}

function getFilterValue() { // TODO
    var progid;
    var node = {
        type: 'Value',
        info: getInfo(),
        important: false,
        sequence: new List()
    };

    while (progid = checkProgid()) {
        node.sequence.insert(List.createItem(getProgid(progid)));
    }

    readSC(node);

    if (scanner.token !== null && scanner.token.type === TokenType.ExclamationMark) {
        node.important = getImportant();
    }

    return node;
}

// 'progid:' ws* 'DXImageTransform.Microsoft.' ident ws* '(' .* ')'
function checkProgid() {
    function checkSC(offset) {
        for (var cursor; cursor = scanner.lookup(offset); offset++) {
            if (cursor.type !== TokenType.Space &&
                cursor.type !== TokenType.Comment) {
                break;
            }
        }

        return offset;
    }

    var offset = checkSC(0);

    if (scanner.lookup(offset + 1) === null ||
        scanner.lookup(offset + 0).value.toLowerCase() !== 'progid' ||
        scanner.lookup(offset + 1).type !== TokenType.Colon) {
        return false; // fail
    }

    offset += 2;
    offset = checkSC(offset);

    if (scanner.lookup(offset + 5) === null ||
        scanner.lookup(offset + 0).value.toLowerCase() !== 'dximagetransform' ||
        scanner.lookup(offset + 1).type !== TokenType.FullStop ||
        scanner.lookup(offset + 2).value.toLowerCase() !== 'microsoft' ||
        scanner.lookup(offset + 3).type !== TokenType.FullStop ||
        scanner.lookup(offset + 4).type !== TokenType.Identifier) {
        return false; // fail
    }

    offset += 5;
    offset = checkSC(offset);

    if (scanner.lookupType(offset, TokenType.LeftParenthesis) === false) {
        return false; // fail
    }

    for (var cursor; cursor = scanner.lookup(offset); offset++) {
        if (cursor.type === TokenType.RightParenthesis) {
            return cursor;
        }
    }

    return false;
}

function getProgid(progidEnd) {
    var value = '';
    var node = {
        type: 'Progid',
        info: getInfo(),
        value: null
    };

    if (!progidEnd) {
        progidEnd = checkProgid();
    }

    if (!progidEnd) {
        parseError('progid is expected');
    }

    readSC(node);

    var rawInfo = getInfo();
    for (; scanner.token && scanner.token !== progidEnd; scanner.next()) {
        value += scanner.token.value;
    }

    eat(TokenType.RightParenthesis);
    value += ')';

    node.value = {
        type: 'Raw',
        info: rawInfo,
        value: value
    };

    readSC(node);

    return node;
}

// <pseudo-element> | <nth-selector> | <pseudo-class>
function getPseudo() {
    var next = scanner.lookup(1);

    if (next === null) {
        scanner.next();
        parseError('Colon or identifier is expected');
    }

    if (next.type === TokenType.Colon) {
        return getPseudoElement();
    }

    if (next.type === TokenType.Identifier &&
        next.value.toLowerCase() === 'nth') {
        return getNthSelector();
    }

    return getPseudoClass();
}

// :: ident
function getPseudoElement() {
    var info = getInfo();

    eat(TokenType.Colon);
    eat(TokenType.Colon);

    return {
        type: 'PseudoElement',
        info: info,
        name: readIdent(false)
    };
}

// : ( ident | function )
function getPseudoClass() {
    var info = getInfo();
    var ident = eat(TokenType.Colon) && getIdentifier(false);

    if (scanner.token !== null && scanner.token.type === TokenType.LeftParenthesis) {
        return getFunction(SCOPE_SELECTOR, ident);
    }

    return {
        type: 'PseudoClass',
        info: info,
        name: ident.name
    };
}

// ws
function getS() {
    var node = {
        type: 'Space'
        // value: scanner.token.value
    };

    scanner.next();

    return node;
}

function readSC() {
    // var nodes = [];

    scan:
    while (scanner.token !== null) {
        switch (scanner.token.type) {
            case TokenType.Space:
                scanner.next();
                // nodes.push(getS());
                break;

            case TokenType.Comment:
                scanner.next();
                // nodes.push(getComment());
                break;

            default:
                break scan;
        }
    }

    return null;

    // return nodes.length ? new List(nodes) : null;
}

// node: String
function getString() {
    var node = {
        type: 'String',
        info: getInfo(),
        value: scanner.token.value
    };

    scanner.next();

    return node;
}

// # ident
function getVhash() {
    var info = getInfo();
    var value;

    eat(TokenType.NumberSign);

    expectAny('Number or identifier',
        TokenType.DecimalNumber,
        TokenType.Identifier
    );

    value = scanner.token.value;

    if (scanner.token.type === TokenType.DecimalNumber &&
        scanner.lookupType(1, TokenType.Identifier)) {
        scanner.next();
        value += scanner.token.value;
    }

    scanner.next();

    return {
        type: 'Hash',
        info: info,
        value: value
    };
}

module.exports = function parse(source, options) {
    var ast;

    if (!options || typeof options !== 'object') {
        options = {};
    }

    var context = options.context || 'stylesheet';
    needPositions = Boolean(options.positions);
    filename = options.filename || '<unknown>';

    if (!initialContext.hasOwnProperty(context)) {
        throw new Error('Unknown context `' + context + '`');
    }

    scanner = new Scanner(source, blockMode.hasOwnProperty(context), options.line, options.column);
    scanner.next();
    ast = initialContext[context]();

    scanner = null;

    // console.log(JSON.stringify(ast, null, 4));
    return ast;
};
});

var index$12 = interopDefault(index$11);


var require$$7$2 = Object.freeze({
    default: index$12
});

var clone$1 = createCommonjsModule(function (module) {
var List = interopDefault(require$$2$7);

module.exports = function clone(node) {
    var result = {};

    for (var key in node) {
        var value = node[key];

        if (value) {
            if (Array.isArray(value)) {
                value = value.slice(0);
            } else if (value instanceof List) {
                value = new List(value.map(clone));
            } else if (value.constructor === Object) {
                value = clone(value);
            }
        }

        result[key] = value;
    }

    return result;
};
});

var clone$2 = interopDefault(clone$1);


var require$$5$2 = Object.freeze({
    default: clone$2
});

var usage = createCommonjsModule(function (module) {
var hasOwnProperty = Object.prototype.hasOwnProperty;

function buildMap(list, caseInsensitive) {
    var map = Object.create(null);

    if (!Array.isArray(list)) {
        return false;
    }

    for (var i = 0; i < list.length; i++) {
        var name = list[i];

        if (caseInsensitive) {
            name = name.toLowerCase();
        }

        map[name] = true;
    }

    return map;
}

function buildIndex(data) {
    var scopes = false;

    if (data.scopes && Array.isArray(data.scopes)) {
        scopes = Object.create(null);

        for (var i = 0; i < data.scopes.length; i++) {
            var list = data.scopes[i];

            if (!list || !Array.isArray(list)) {
                throw new Error('Wrong usage format');
            }

            for (var j = 0; j < list.length; j++) {
                var name = list[j];

                if (hasOwnProperty.call(scopes, name)) {
                    throw new Error('Class can\'t be used for several scopes: ' + name);
                }

                scopes[name] = i + 1;
            }
        }
    }

    return {
        tags: buildMap(data.tags, true),
        ids: buildMap(data.ids),
        classes: buildMap(data.classes),
        scopes: scopes
    };
}

module.exports = {
    buildIndex: buildIndex
};
});

var usage$1 = interopDefault(usage);
var buildIndex = usage.buildIndex;

var require$$4$3 = Object.freeze({
    default: usage$1,
    buildIndex: buildIndex
});

var walk$3 = createCommonjsModule(function (module) {
function walkRules(node, item, list) {
    switch (node.type) {
        case 'StyleSheet':
            var oldStylesheet = this.stylesheet;
            this.stylesheet = node;

            node.rules.each(walkRules, this);

            this.stylesheet = oldStylesheet;
            break;

        case 'Atrule':
            if (node.block !== null) {
                walkRules.call(this, node.block);
            }

            this.fn(node, item, list);
            break;

        case 'Ruleset':
            this.fn(node, item, list);
            break;
    }

}

function walkRulesRight(node, item, list) {
    switch (node.type) {
        case 'StyleSheet':
            var oldStylesheet = this.stylesheet;
            this.stylesheet = node;

            node.rules.eachRight(walkRulesRight, this);

            this.stylesheet = oldStylesheet;
            break;

        case 'Atrule':
            if (node.block !== null) {
                walkRulesRight.call(this, node.block);
            }

            this.fn(node, item, list);
            break;

        case 'Ruleset':
            this.fn(node, item, list);
            break;
    }
}

function walkAll(node, item, list) {
    switch (node.type) {
        case 'StyleSheet':
            var oldStylesheet = this.stylesheet;
            this.stylesheet = node;

            node.rules.each(walkAll, this);

            this.stylesheet = oldStylesheet;
            break;

        case 'Atrule':
            if (node.expression !== null) {
                walkAll.call(this, node.expression);
            }
            if (node.block !== null) {
                walkAll.call(this, node.block);
            }
            break;

        case 'Ruleset':
            this.ruleset = node;

            if (node.selector !== null) {
                walkAll.call(this, node.selector);
            }
            walkAll.call(this, node.block);

            this.ruleset = null;
            break;

        case 'Selector':
            var oldSelector = this.selector;
            this.selector = node;

            node.selectors.each(walkAll, this);

            this.selector = oldSelector;
            break;

        case 'Block':
            node.declarations.each(walkAll, this);
            break;

        case 'Declaration':
            this.declaration = node;

            walkAll.call(this, node.property);
            walkAll.call(this, node.value);

            this.declaration = null;
            break;

        case 'Attribute':
            walkAll.call(this, node.name);
            if (node.value !== null) {
                walkAll.call(this, node.value);
            }
            break;

        case 'FunctionalPseudo':
        case 'Function':
            this['function'] = node;

            node.arguments.each(walkAll, this);

            this['function'] = null;
            break;

        case 'AtruleExpression':
            this.atruleExpression = node;

            node.sequence.each(walkAll, this);

            this.atruleExpression = null;
            break;

        case 'Value':
        case 'Argument':
        case 'SimpleSelector':
        case 'Braces':
        case 'Negation':
            node.sequence.each(walkAll, this);
            break;

        case 'Url':
        case 'Progid':
            walkAll.call(this, node.value);
            break;

        // nothig to do with
        // case 'Property':
        // case 'Combinator':
        // case 'Dimension':
        // case 'Hash':
        // case 'Identifier':
        // case 'Nth':
        // case 'Class':
        // case 'Id':
        // case 'Percentage':
        // case 'PseudoClass':
        // case 'PseudoElement':
        // case 'Space':
        // case 'Number':
        // case 'String':
        // case 'Operator':
        // case 'Raw':
    }

    this.fn(node, item, list);
}

function createContext(root, fn) {
    var context = {
        fn: fn,
        root: root,
        stylesheet: null,
        atruleExpression: null,
        ruleset: null,
        selector: null,
        declaration: null,
        function: null
    };

    return context;
}

module.exports = {
    all: function(root, fn) {
        walkAll.call(createContext(root, fn), root);
    },
    rules: function(root, fn) {
        walkRules.call(createContext(root, fn), root);
    },
    rulesRight: function(root, fn) {
        walkRulesRight.call(createContext(root, fn), root);
    }
};
});

var walk$4 = interopDefault(walk$3);
var all = walk$3.all;
var rules = walk$3.rules;
var rulesRight = walk$3.rulesRight;

var require$$0$18 = Object.freeze({
    default: walk$4,
    all: all,
    rules: rules,
    rulesRight: rulesRight
});

var Space = createCommonjsModule(function (module) {
function canCleanWhitespace(node) {
    if (node.type !== 'Operator') {
        return false;
    }

    return node.value !== '+' && node.value !== '-';
}

module.exports = function cleanWhitespace(node, item, list) {
    var prev = item.prev && item.prev.data;
    var next = item.next && item.next.data;

    if (canCleanWhitespace(prev) || canCleanWhitespace(next)) {
        list.remove(item);
    }
};
});

var Space$1 = interopDefault(Space);


var require$$5$3 = Object.freeze({
    default: Space$1
});

var Atrule = createCommonjsModule(function (module) {
module.exports = function cleanAtrule(node, item, list) {
    if (node.block) {
        // otherwise removed at-rule don't prevent @import for removal
        this.root.firstAtrulesAllowed = false;

        if (node.block.type === 'Block' && node.block.declarations.isEmpty()) {
            list.remove(item);
            return;
        }

        if (node.block.type === 'StyleSheet' && node.block.rules.isEmpty()) {
            list.remove(item);
            return;
        }
    }

    switch (node.name) {
        case 'charset':
            if (node.expression.sequence.isEmpty()) {
                list.remove(item);
                return;
            }

            // if there is any rule before @charset -> remove it
            if (item.prev) {
                list.remove(item);
                return;
            }

            break;

        case 'import':
            if (!this.root.firstAtrulesAllowed) {
                list.remove(item);
                return;
            }

            // if there are some rules that not an @import or @charset before @import
            // remove it
            list.prevUntil(item.prev, function(rule) {
                if (rule.type === 'Atrule') {
                    if (rule.name === 'import' || rule.name === 'charset') {
                        return;
                    }
                }

                this.root.firstAtrulesAllowed = false;
                list.remove(item);
                return true;
            }, this);

            break;
    }
};
});

var Atrule$1 = interopDefault(Atrule);


var require$$4$4 = Object.freeze({
    default: Atrule$1
});

var Ruleset = createCommonjsModule(function (module) {
var hasOwnProperty = Object.prototype.hasOwnProperty;

function cleanUnused(node, usageData) {
    return node.selector.selectors.each(function(selector, item, list) {
        var hasUnused = selector.sequence.some(function(node) {
            switch (node.type) {
                case 'Class':
                    return usageData.classes && !hasOwnProperty.call(usageData.classes, node.name);

                case 'Id':
                    return usageData.ids && !hasOwnProperty.call(usageData.ids, node.name);

                case 'Identifier':
                    // ignore universal selector
                    if (node.name !== '*') {
                        // TODO: remove toLowerCase when type selectors will be normalized
                        return usageData.tags && !hasOwnProperty.call(usageData.tags, node.name.toLowerCase());
                    }

                    break;
            }
        });

        if (hasUnused) {
            list.remove(item);
        }
    });
}

module.exports = function cleanRuleset(node, item, list, usageData) {
    if (usageData) {
        cleanUnused(node, usageData);
    }

    if (node.selector.selectors.isEmpty() ||
        node.block.declarations.isEmpty()) {
        list.remove(item);
    }
};
});

var Ruleset$1 = interopDefault(Ruleset);


var require$$3$6 = Object.freeze({
    default: Ruleset$1
});

var Declaration = createCommonjsModule(function (module) {
module.exports = function cleanDeclartion(node, item, list) {
    if (node.value.sequence.isEmpty()) {
        list.remove(item);
    }
};
});

var Declaration$1 = interopDefault(Declaration);


var require$$2$8 = Object.freeze({
    default: Declaration$1
});

var Identifier = createCommonjsModule(function (module) {
module.exports = function cleanIdentifier(node, item, list) {
    // remove useless universal selector
    if (this.selector !== null && node.name === '*') {
        // remove when universal selector isn't last
        if (item.next && item.next.data.type !== 'Combinator') {
            list.remove(item);
        }
    }
};
});

var Identifier$1 = interopDefault(Identifier);


var require$$1$10 = Object.freeze({
    default: Identifier$1
});

var Comment = createCommonjsModule(function (module) {
module.exports = function cleanComment(data, item, list) {
    list.remove(item);
};
});

var Comment$1 = interopDefault(Comment);


var require$$0$19 = Object.freeze({
    default: Comment$1
});

var index$15 = createCommonjsModule(function (module) {
var walk = interopDefault(require$$0$18).all;
var handlers = {
    Space: interopDefault(require$$5$3),
    Atrule: interopDefault(require$$4$4),
    Ruleset: interopDefault(require$$3$6),
    Declaration: interopDefault(require$$2$8),
    Identifier: interopDefault(require$$1$10),
    Comment: interopDefault(require$$0$19)
};

module.exports = function(ast, usageData) {
    walk(ast, function(node, item, list) {
        if (handlers.hasOwnProperty(node.type)) {
            handlers[node.type].call(this, node, item, list, usageData);
        }
    });
};
});

var index$16 = interopDefault(index$15);


var require$$3$5 = Object.freeze({
    default: index$16
});

var names = createCommonjsModule(function (module) {
var hasOwnProperty = Object.prototype.hasOwnProperty;
var knownKeywords = Object.create(null);
var knownProperties = Object.create(null);

function getVendorPrefix(string) {
    if (string[0] === '-') {
        // skip 2 chars to avoid wrong match with variables names
        var secondDashIndex = string.indexOf('-', 2);

        if (secondDashIndex !== -1) {
            return string.substr(0, secondDashIndex + 1);
        }
    }

    return '';
}

function getKeywordInfo(keyword) {
    if (hasOwnProperty.call(knownKeywords, keyword)) {
        return knownKeywords[keyword];
    }

    var lowerCaseKeyword = keyword.toLowerCase();
    var vendor = getVendorPrefix(lowerCaseKeyword);
    var name = lowerCaseKeyword;

    if (vendor) {
        name = name.substr(vendor.length);
    }

    return knownKeywords[keyword] = Object.freeze({
        vendor: vendor,
        prefix: vendor,
        name: name
    });
}

function getPropertyInfo(property) {
    if (hasOwnProperty.call(knownProperties, property)) {
        return knownProperties[property];
    }

    var lowerCaseProperty = property.toLowerCase();
    var hack = lowerCaseProperty[0];

    if (hack === '*' || hack === '_' || hack === '$') {
        lowerCaseProperty = lowerCaseProperty.substr(1);
    } else if (hack === '/' && property[1] === '/') {
        hack = '//';
        lowerCaseProperty = lowerCaseProperty.substr(2);
    } else {
        hack = '';
    }

    var vendor = getVendorPrefix(lowerCaseProperty);
    var name = lowerCaseProperty;

    if (vendor) {
        name = name.substr(vendor.length);
    }

    return knownProperties[property] = Object.freeze({
        hack: hack,
        vendor: vendor,
        prefix: hack + vendor,
        name: name
    });
}

module.exports = {
    keyword: getKeywordInfo,
    property: getPropertyInfo
};
});

var names$1 = interopDefault(names);
var keyword = names.keyword;
var property = names.property;

var require$$2$10 = Object.freeze({
    default: names$1,
    keyword: keyword,
    property: property
});

var keyframes = createCommonjsModule(function (module) {
module.exports = function(node) {
    node.block.rules.each(function(ruleset) {
        ruleset.selector.selectors.each(function(simpleselector) {
            simpleselector.sequence.each(function(data, item) {
                if (data.type === 'Percentage' && data.value === '100') {
                    item.data = {
                        type: 'Identifier',
                        info: data.info,
                        name: 'to'
                    };
                } else if (data.type === 'Identifier' && data.name === 'from') {
                    item.data = {
                        type: 'Percentage',
                        info: data.info,
                        value: '0'
                    };
                }
            });
        });
    });
};
});

var keyframes$1 = interopDefault(keyframes);


var require$$0$20 = Object.freeze({
    default: keyframes$1
});

var Atrule$2 = createCommonjsModule(function (module) {
var resolveKeyword = interopDefault(require$$2$10).keyword;
var compressKeyframes = interopDefault(require$$0$20);

module.exports = function(node) {
    // compress @keyframe selectors
    if (resolveKeyword(node.name).name === 'keyframes') {
        compressKeyframes(node);
    }
};
});

var Atrule$3 = interopDefault(Atrule$2);


var require$$7$3 = Object.freeze({
    default: Atrule$3
});

var Attribute = createCommonjsModule(function (module) {
// Can unquote attribute detection
// Adopted implementation of Mathias Bynens
// https://github.com/mathiasbynens/mothereff.in/blob/master/unquoted-attributes/eff.js
var escapesRx = /\\([0-9A-Fa-f]{1,6})[ \t\n\f\r]?|\\./g;
var blockUnquoteRx = /^(-?\d|--)|[\u0000-\u002c\u002e\u002f\u003A-\u0040\u005B-\u005E\u0060\u007B-\u009f]/;

function canUnquote(value) {
    if (value === '' || value === '-') {
        return;
    }

    // Escapes are valid, so replace them with a valid non-empty string
    value = value.replace(escapesRx, 'a');

    return !blockUnquoteRx.test(value);
}

module.exports = function(node) {
    var attrValue = node.value;

    if (!attrValue || attrValue.type !== 'String') {
        return;
    }

    var unquotedValue = attrValue.value.replace(/^(.)(.*)\1$/, '$2');
    if (canUnquote(unquotedValue)) {
        node.value = {
            type: 'Identifier',
            info: attrValue.info,
            name: unquotedValue
        };
    }
};
});

var Attribute$1 = interopDefault(Attribute);


var require$$6$3 = Object.freeze({
    default: Attribute$1
});

var font = createCommonjsModule(function (module) {
module.exports = function compressFont(node) {
    var list = node.sequence;

    list.eachRight(function(node, item) {
        if (node.type === 'Identifier') {
            if (node.name === 'bold') {
                item.data = {
                    type: 'Number',
                    info: node.info,
                    value: '700'
                };
            } else if (node.name === 'normal') {
                var prev = item.prev;

                if (prev && prev.data.type === 'Operator' && prev.data.value === '/') {
                    this.remove(prev);
                }

                this.remove(item);
            } else if (node.name === 'medium') {
                var next = item.next;

                if (!next || next.data.type !== 'Operator') {
                    this.remove(item);
                }
            }
        }
    });

    // remove redundant spaces
    list.each(function(node, item) {
        if (node.type === 'Space') {
            if (!item.prev || !item.next || item.next.data.type === 'Space') {
                this.remove(item);
            }
        }
    });

    if (list.isEmpty()) {
        list.insert(list.createItem({
            type: 'Identifier',
            name: 'normal'
        }));
    }
};
});

var font$1 = interopDefault(font);


var require$$2$11 = Object.freeze({
    default: font$1
});

var fontWeight = createCommonjsModule(function (module) {
module.exports = function compressFontWeight(node) {
    var value = node.sequence.head.data;

    if (value.type === 'Identifier') {
        switch (value.name) {
            case 'normal':
                node.sequence.head.data = {
                    type: 'Number',
                    info: value.info,
                    value: '400'
                };
                break;
            case 'bold':
                node.sequence.head.data = {
                    type: 'Number',
                    info: value.info,
                    value: '700'
                };
                break;
        }
    }
};
});

var fontWeight$1 = interopDefault(fontWeight);


var require$$1$11 = Object.freeze({
    default: fontWeight$1
});

var background = createCommonjsModule(function (module) {
var List = interopDefault(require$$2$7);

module.exports = function compressBackground(node) {
    function lastType() {
        if (buffer.length) {
            return buffer[buffer.length - 1].type;
        }
    }

    function flush() {
        if (lastType() === 'Space') {
            buffer.pop();
        }

        if (!buffer.length) {
            buffer.unshift(
                {
                    type: 'Number',
                    value: '0'
                },
                {
                    type: 'Space'
                },
                {
                    type: 'Number',
                    value: '0'
                }
            );
        }

        newValue.push.apply(newValue, buffer);

        buffer = [];
    }

    var newValue = [];
    var buffer = [];

    node.sequence.each(function(node) {
        if (node.type === 'Operator' && node.value === ',') {
            flush();
            newValue.push(node);
            return;
        }

        // remove defaults
        if (node.type === 'Identifier') {
            if (node.name === 'transparent' ||
                node.name === 'none' ||
                node.name === 'repeat' ||
                node.name === 'scroll') {
                return;
            }
        }

        // don't add redundant spaces
        if (node.type === 'Space' && (!buffer.length || lastType() === 'Space')) {
            return;
        }

        buffer.push(node);
    });

    flush();
    node.sequence = new List(newValue);
};
});

var background$1 = interopDefault(background);


var require$$0$21 = Object.freeze({
    default: background$1
});

var Value = createCommonjsModule(function (module) {
var resolveName = interopDefault(require$$2$10).property;
var handlers = {
    'font': interopDefault(require$$2$11),
    'font-weight': interopDefault(require$$1$11),
    'background': interopDefault(require$$0$21)
};

module.exports = function compressValue(node) {
    if (!this.declaration) {
        return;
    }

    var property = resolveName(this.declaration.property.name);

    if (handlers.hasOwnProperty(property.name)) {
        handlers[property.name](node);
    }
};
});

var Value$1 = interopDefault(Value);


var require$$5$4 = Object.freeze({
    default: Value$1
});

var _Number = createCommonjsModule(function (module) {
function packNumber(value) {
    // 100 -> '100'
    // 00100 -> '100'
    // +100 -> '100'
    // -100 -> '-100'
    // 0.123 -> '.123'
    // 0.12300 -> '.123'
    // 0.0 -> ''
    // 0 -> ''
    value = String(value).replace(/^(?:\+|(-))?0*(\d*)(?:\.0*|(\.\d*?)0*)?$/, '$1$2$3');

    if (value.length === 0 || value === '-') {
        value = '0';
    }

    return value;
};

module.exports = function(node) {
    node.value = packNumber(node.value);
};
module.exports.pack = packNumber;
});

var _Number$1 = interopDefault(_Number);
var pack = _Number.pack;

var require$$0$22 = Object.freeze({
    default: _Number$1,
    pack: pack
});

var Dimension = createCommonjsModule(function (module) {
var packNumber = interopDefault(require$$0$22).pack;
var LENGTH_UNIT = {
    // absolute length units
    'px': true,
    'mm': true,
    'cm': true,
    'in': true,
    'pt': true,
    'pc': true,

    // relative length units
    'em': true,
    'ex': true,
    'ch': true,
    'rem': true,

    // viewport-percentage lengths
    'vh': true,
    'vw': true,
    'vmin': true,
    'vmax': true,
    'vm': true
};

module.exports = function compressDimension(node, item) {
    var value = packNumber(node.value);

    node.value = value;

    if (value === '0' && this.declaration) {
        var unit = node.unit.toLowerCase();

        // only length values can be compressed
        if (!LENGTH_UNIT.hasOwnProperty(unit)) {
            return;
        }

        // issue #200: don't remove units in flex property as it could change value meaning
        if (this.declaration.property.name === 'flex') {
            return;
        }

        // issue #222: don't remove units inside calc
        if (this['function'] && this['function'].name === 'calc') {
            return;
        }

        item.data = {
            type: 'Number',
            info: node.info,
            value: value
        };
    }
};
});

var Dimension$1 = interopDefault(Dimension);


var require$$4$5 = Object.freeze({
    default: Dimension$1
});

var _String = createCommonjsModule(function (module) {
module.exports = function(node) {
    var value = node.value;

    // remove escaped \n, i.e.
    // .a { content: "foo\
    // bar"}
    // ->
    // .a { content: "foobar" }
    value = value.replace(/\\\n/g, '');

    node.value = value;
};
});

var _String$1 = interopDefault(_String);


var require$$2$12 = Object.freeze({
    default: _String$1
});

var Url = createCommonjsModule(function (module) {
var UNICODE = '\\\\[0-9a-f]{1,6}(\\r\\n|[ \\n\\r\\t\\f])?';
var ESCAPE = '(' + UNICODE + '|\\\\[^\\n\\r\\f0-9a-fA-F])';
var NONPRINTABLE = '\u0000\u0008\u000b\u000e-\u001f\u007f';
var SAFE_URL = new RegExp('^(' + ESCAPE + '|[^\"\'\\(\\)\\\\\\s' + NONPRINTABLE + '])*$', 'i');

module.exports = function(node) {
    var value = node.value;

    if (value.type !== 'String') {
        return;
    }

    var quote = value.value[0];
    var url = value.value.substr(1, value.value.length - 2);

    // convert `\\` to `/`
    url = url.replace(/\\\\/g, '/');

    // remove quotes when safe
    // https://www.w3.org/TR/css-syntax-3/#url-unquoted-diagram
    if (SAFE_URL.test(url)) {
        node.value = {
            type: 'Raw',
            info: node.value.info,
            value: url
        };
    } else {
        // use double quotes if string has no double quotes
        // otherwise use original quotes
        // TODO: make better quote type selection
        node.value.value = url.indexOf('"') === -1 ? '"' + url + '"' : quote + url + quote;
    }
};
});

var Url$1 = interopDefault(Url);


var require$$1$12 = Object.freeze({
    default: Url$1
});

var color = createCommonjsModule(function (module) {
var List = interopDefault(require$$2$7);
var packNumber = interopDefault(require$$0$22).pack;

// http://www.w3.org/TR/css3-color/#svg-color
var NAME_TO_HEX = {
    'aliceblue': 'f0f8ff',
    'antiquewhite': 'faebd7',
    'aqua': '0ff',
    'aquamarine': '7fffd4',
    'azure': 'f0ffff',
    'beige': 'f5f5dc',
    'bisque': 'ffe4c4',
    'black': '000',
    'blanchedalmond': 'ffebcd',
    'blue': '00f',
    'blueviolet': '8a2be2',
    'brown': 'a52a2a',
    'burlywood': 'deb887',
    'cadetblue': '5f9ea0',
    'chartreuse': '7fff00',
    'chocolate': 'd2691e',
    'coral': 'ff7f50',
    'cornflowerblue': '6495ed',
    'cornsilk': 'fff8dc',
    'crimson': 'dc143c',
    'cyan': '0ff',
    'darkblue': '00008b',
    'darkcyan': '008b8b',
    'darkgoldenrod': 'b8860b',
    'darkgray': 'a9a9a9',
    'darkgrey': 'a9a9a9',
    'darkgreen': '006400',
    'darkkhaki': 'bdb76b',
    'darkmagenta': '8b008b',
    'darkolivegreen': '556b2f',
    'darkorange': 'ff8c00',
    'darkorchid': '9932cc',
    'darkred': '8b0000',
    'darksalmon': 'e9967a',
    'darkseagreen': '8fbc8f',
    'darkslateblue': '483d8b',
    'darkslategray': '2f4f4f',
    'darkslategrey': '2f4f4f',
    'darkturquoise': '00ced1',
    'darkviolet': '9400d3',
    'deeppink': 'ff1493',
    'deepskyblue': '00bfff',
    'dimgray': '696969',
    'dimgrey': '696969',
    'dodgerblue': '1e90ff',
    'firebrick': 'b22222',
    'floralwhite': 'fffaf0',
    'forestgreen': '228b22',
    'fuchsia': 'f0f',
    'gainsboro': 'dcdcdc',
    'ghostwhite': 'f8f8ff',
    'gold': 'ffd700',
    'goldenrod': 'daa520',
    'gray': '808080',
    'grey': '808080',
    'green': '008000',
    'greenyellow': 'adff2f',
    'honeydew': 'f0fff0',
    'hotpink': 'ff69b4',
    'indianred': 'cd5c5c',
    'indigo': '4b0082',
    'ivory': 'fffff0',
    'khaki': 'f0e68c',
    'lavender': 'e6e6fa',
    'lavenderblush': 'fff0f5',
    'lawngreen': '7cfc00',
    'lemonchiffon': 'fffacd',
    'lightblue': 'add8e6',
    'lightcoral': 'f08080',
    'lightcyan': 'e0ffff',
    'lightgoldenrodyellow': 'fafad2',
    'lightgray': 'd3d3d3',
    'lightgrey': 'd3d3d3',
    'lightgreen': '90ee90',
    'lightpink': 'ffb6c1',
    'lightsalmon': 'ffa07a',
    'lightseagreen': '20b2aa',
    'lightskyblue': '87cefa',
    'lightslategray': '789',
    'lightslategrey': '789',
    'lightsteelblue': 'b0c4de',
    'lightyellow': 'ffffe0',
    'lime': '0f0',
    'limegreen': '32cd32',
    'linen': 'faf0e6',
    'magenta': 'f0f',
    'maroon': '800000',
    'mediumaquamarine': '66cdaa',
    'mediumblue': '0000cd',
    'mediumorchid': 'ba55d3',
    'mediumpurple': '9370db',
    'mediumseagreen': '3cb371',
    'mediumslateblue': '7b68ee',
    'mediumspringgreen': '00fa9a',
    'mediumturquoise': '48d1cc',
    'mediumvioletred': 'c71585',
    'midnightblue': '191970',
    'mintcream': 'f5fffa',
    'mistyrose': 'ffe4e1',
    'moccasin': 'ffe4b5',
    'navajowhite': 'ffdead',
    'navy': '000080',
    'oldlace': 'fdf5e6',
    'olive': '808000',
    'olivedrab': '6b8e23',
    'orange': 'ffa500',
    'orangered': 'ff4500',
    'orchid': 'da70d6',
    'palegoldenrod': 'eee8aa',
    'palegreen': '98fb98',
    'paleturquoise': 'afeeee',
    'palevioletred': 'db7093',
    'papayawhip': 'ffefd5',
    'peachpuff': 'ffdab9',
    'peru': 'cd853f',
    'pink': 'ffc0cb',
    'plum': 'dda0dd',
    'powderblue': 'b0e0e6',
    'purple': '800080',
    'rebeccapurple': '639',
    'red': 'f00',
    'rosybrown': 'bc8f8f',
    'royalblue': '4169e1',
    'saddlebrown': '8b4513',
    'salmon': 'fa8072',
    'sandybrown': 'f4a460',
    'seagreen': '2e8b57',
    'seashell': 'fff5ee',
    'sienna': 'a0522d',
    'silver': 'c0c0c0',
    'skyblue': '87ceeb',
    'slateblue': '6a5acd',
    'slategray': '708090',
    'slategrey': '708090',
    'snow': 'fffafa',
    'springgreen': '00ff7f',
    'steelblue': '4682b4',
    'tan': 'd2b48c',
    'teal': '008080',
    'thistle': 'd8bfd8',
    'tomato': 'ff6347',
    'turquoise': '40e0d0',
    'violet': 'ee82ee',
    'wheat': 'f5deb3',
    'white': 'fff',
    'whitesmoke': 'f5f5f5',
    'yellow': 'ff0',
    'yellowgreen': '9acd32'
};

var HEX_TO_NAME = {
    '800000': 'maroon',
    '800080': 'purple',
    '808000': 'olive',
    '808080': 'gray',
    '00ffff': 'cyan',
    'f0ffff': 'azure',
    'f5f5dc': 'beige',
    'ffe4c4': 'bisque',
    '000000': 'black',
    '0000ff': 'blue',
    'a52a2a': 'brown',
    'ff7f50': 'coral',
    'ffd700': 'gold',
    '008000': 'green',
    '4b0082': 'indigo',
    'fffff0': 'ivory',
    'f0e68c': 'khaki',
    '00ff00': 'lime',
    'faf0e6': 'linen',
    '000080': 'navy',
    'ffa500': 'orange',
    'da70d6': 'orchid',
    'cd853f': 'peru',
    'ffc0cb': 'pink',
    'dda0dd': 'plum',
    'f00': 'red',
    'ff0000': 'red',
    'fa8072': 'salmon',
    'a0522d': 'sienna',
    'c0c0c0': 'silver',
    'fffafa': 'snow',
    'd2b48c': 'tan',
    '008080': 'teal',
    'ff6347': 'tomato',
    'ee82ee': 'violet',
    'f5deb3': 'wheat',
    'ffffff': 'white',
    'ffff00': 'yellow'
};

function hueToRgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * 6 * t;
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}

function hslToRgb(h, s, l, a) {
    var r;
    var g;
    var b;

    if (s == 0) {
        r = g = b = l; // achromatic
    } else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;

        r = hueToRgb(p, q, h + 1 / 3);
        g = hueToRgb(p, q, h);
        b = hueToRgb(p, q, h - 1 / 3);
    }

    return [
        Math.round(r * 255),
        Math.round(g * 255),
        Math.round(b * 255),
        a
    ];
}

function toHex(value) {
    value = value.toString(16);
    return value.length === 1 ? '0' + value : value;
}

function parseFunctionArgs(functionArgs, count, rgb) {
    var argument = functionArgs.head;
    var args = [];

    while (argument !== null) {
        var argumentPart = argument.data.sequence.head;
        var wasValue = false;

        while (argumentPart !== null) {
            var value = argumentPart.data;
            var type = value.type;

            switch (type) {
                case 'Number':
                case 'Percentage':
                    if (wasValue) {
                        return;
                    }

                    wasValue = true;
                    args.push({
                        type: type,
                        value: Number(value.value)
                    });
                    break;

                case 'Operator':
                    if (wasValue || value.value !== '+') {
                        return;
                    }
                    break;

                default:
                    // something we couldn't understand
                    return;
            }

            argumentPart = argumentPart.next;
        }

        argument = argument.next;
    }

    if (args.length !== count) {
        // invalid arguments count
        // TODO: remove those tokens
        return;
    }

    if (args.length === 4) {
        if (args[3].type !== 'Number') {
            // 4th argument should be a number
            // TODO: remove those tokens
            return;
        }

        args[3].type = 'Alpha';
    }

    if (rgb) {
        if (args[0].type !== args[1].type || args[0].type !== args[2].type) {
            // invalid color, numbers and percentage shouldn't be mixed
            // TODO: remove those tokens
            return;
        }
    } else {
        if (args[0].type !== 'Number' ||
            args[1].type !== 'Percentage' ||
            args[2].type !== 'Percentage') {
            // invalid color, for hsl values should be: number, percentage, percentage
            // TODO: remove those tokens
            return;
        }

        args[0].type = 'Angle';
    }

    return args.map(function(arg) {
        var value = Math.max(0, arg.value);

        switch (arg.type) {
            case 'Number':
                // fit value to [0..255] range
                value = Math.min(value, 255);
                break;

            case 'Percentage':
                // convert 0..100% to value in [0..255] range
                value = Math.min(value, 100) / 100;

                if (!rgb) {
                    return value;
                }

                value = 255 * value;
                break;

            case 'Angle':
                // fit value to (-360..360) range
                return (((value % 360) + 360) % 360) / 360;

            case 'Alpha':
                // fit value to [0..1] range
                return Math.min(value, 1);
        }

        return Math.round(value);
    });
}

function compressFunction(node, item, list) {
    var functionName = node.name;
    var args;

    if (functionName === 'rgba' || functionName === 'hsla') {
        args = parseFunctionArgs(node.arguments, 4, functionName === 'rgba');

        if (!args) {
            // something went wrong
            return;
        }

        if (functionName === 'hsla') {
            args = hslToRgb.apply(null, args);
            node.name = 'rgba';
        }

        if (args[3] !== 1) {
            // replace argument values for normalized/interpolated
            node.arguments.each(function(argument) {
                var item = argument.sequence.head;

                if (item.data.type === 'Operator') {
                    item = item.next;
                }

                argument.sequence = new List([{
                    type: 'Number',
                    info: item.data.info,
                    value: packNumber(args.shift())
                }]);
            });

            return;
        }

        // otherwise convert to rgb, i.e. rgba(255, 0, 0, 1) -> rgb(255, 0, 0)
        functionName = 'rgb';
    }

    if (functionName === 'hsl') {
        args = args || parseFunctionArgs(node.arguments, 3, false);

        if (!args) {
            // something went wrong
            return;
        }

        // convert to rgb
        args = hslToRgb.apply(null, args);
        functionName = 'rgb';
    }

    if (functionName === 'rgb') {
        args = args || parseFunctionArgs(node.arguments, 3, true);

        if (!args) {
            // something went wrong
            return;
        }

        // check if color is not at the end and not followed by space
        var next = item.next;
        if (next && next.data.type !== 'Space') {
            list.insert(list.createItem({
                type: 'Space'
            }), next);
        }

        item.data = {
            type: 'Hash',
            info: node.info,
            value: toHex(args[0]) + toHex(args[1]) + toHex(args[2])
        };

        compressHex(item.data, item);
    }
}

function compressIdent(node, item) {
    if (this.declaration === null) {
        return;
    }

    var color = node.name.toLowerCase();

    if (NAME_TO_HEX.hasOwnProperty(color)) {
        var hex = NAME_TO_HEX[color];

        if (hex.length + 1 <= color.length) {
            // replace for shorter hex value
            item.data = {
                type: 'Hash',
                info: node.info,
                value: hex
            };
        } else {
            // special case for consistent colors
            if (color === 'grey') {
                color = 'gray';
            }

            // just replace value for lower cased name
            node.name = color;
        }
    }
}

function compressHex(node, item) {
    var color = node.value.toLowerCase();

    // #112233 -> #123
    if (color.length === 6 &&
        color[0] === color[1] &&
        color[2] === color[3] &&
        color[4] === color[5]) {
        color = color[0] + color[2] + color[4];
    }

    if (HEX_TO_NAME[color]) {
        item.data = {
            type: 'Identifier',
            info: node.info,
            name: HEX_TO_NAME[color]
        };
    } else {
        node.value = color;
    }
}

module.exports = {
    compressFunction: compressFunction,
    compressIdent: compressIdent,
    compressHex: compressHex
};
});

var color$1 = interopDefault(color);
var compressFunction = color.compressFunction;
var compressIdent = color.compressIdent;
var compressHex = color.compressHex;

var require$$0$23 = Object.freeze({
    default: color$1,
    compressFunction: compressFunction,
    compressIdent: compressIdent,
    compressHex: compressHex
});

var index$17 = createCommonjsModule(function (module) {
var walk = interopDefault(require$$0$18).all;
var handlers = {
    Atrule: interopDefault(require$$7$3),
    Attribute: interopDefault(require$$6$3),
    Value: interopDefault(require$$5$4),
    Dimension: interopDefault(require$$4$5),
    Percentage: interopDefault(require$$0$22),
    Number: interopDefault(require$$0$22),
    String: interopDefault(require$$2$12),
    Url: interopDefault(require$$1$12),
    Hash: interopDefault(require$$0$23).compressHex,
    Identifier: interopDefault(require$$0$23).compressIdent,
    Function: interopDefault(require$$0$23).compressFunction
};

module.exports = function(ast) {
    walk(ast, function(node, item, list) {
        if (handlers.hasOwnProperty(node.type)) {
            handlers[node.type].call(this, node, item, list);
        }
    });
};
});

var index$18 = interopDefault(index$17);


var require$$2$9 = Object.freeze({
    default: index$18
});

var translate$1 = createCommonjsModule(function (module) {
function each(list) {
    if (list.head === null) {
        return '';
    }

    if (list.head === list.tail) {
        return translate(list.head.data);
    }

    return list.map(translate).join('');
}

function eachDelim(list, delimeter) {
    if (list.head === null) {
        return '';
    }

    if (list.head === list.tail) {
        return translate(list.head.data);
    }

    return list.map(translate).join(delimeter);
}

function translate(node) {
    switch (node.type) {
        case 'StyleSheet':
            return each(node.rules);

        case 'Atrule':
            var nodes = ['@', node.name];

            if (node.expression && !node.expression.sequence.isEmpty()) {
                nodes.push(' ', translate(node.expression));
            }

            if (node.block) {
                nodes.push('{', translate(node.block), '}');
            } else {
                nodes.push(';');
            }

            return nodes.join('');

        case 'Ruleset':
            return translate(node.selector) + '{' + translate(node.block) + '}';

        case 'Selector':
            return eachDelim(node.selectors, ',');

        case 'SimpleSelector':
            var nodes = node.sequence.map(function(node) {
                // add extra spaces around /deep/ combinator since comment beginning/ending may to be produced
                if (node.type === 'Combinator' && node.name === '/deep/') {
                    return ' ' + translate(node) + ' ';
                }

                return translate(node);
            });

            return nodes.join('');

        case 'Block':
            return eachDelim(node.declarations, ';');

        case 'Declaration':
            return translate(node.property) + ':' + translate(node.value);

        case 'Property':
            return node.name;

        case 'Value':
            return node.important
                ? each(node.sequence) + '!important'
                : each(node.sequence);

        case 'Attribute':
            var result = translate(node.name);
            var flagsPrefix = ' ';

            if (node.operator !== null) {
                result += node.operator;

                if (node.value !== null) {
                    result += translate(node.value);

                    // space between string and flags is not required
                    if (node.value.type === 'String') {
                        flagsPrefix = '';
                    }
                }
            }

            if (node.flags !== null) {
                result += flagsPrefix + node.flags;
            }

            return '[' + result + ']';

        case 'FunctionalPseudo':
            return ':' + node.name + '(' + eachDelim(node.arguments, ',') + ')';

        case 'Function':
            return node.name + '(' + eachDelim(node.arguments, ',') + ')';

        case 'Negation':
            return ':not(' + eachDelim(node.sequence, ',') + ')';

        case 'Braces':
            return node.open + each(node.sequence) + node.close;

        case 'Argument':
        case 'AtruleExpression':
            return each(node.sequence);

        case 'Url':
            return 'url(' + translate(node.value) + ')';

        case 'Progid':
            return translate(node.value);

        case 'Combinator':
            return node.name;

        case 'Identifier':
            return node.name;

        case 'PseudoClass':
            return ':' + node.name;

        case 'PseudoElement':
            return '::' + node.name;

        case 'Class':
            return '.' + node.name;

        case 'Id':
            return '#' + node.name;

        case 'Hash':
            return '#' + node.value;

        case 'Dimension':
            return node.value + node.unit;

        case 'Nth':
            return node.value;

        case 'Number':
            return node.value;

        case 'String':
            return node.value;

        case 'Operator':
            return node.value;

        case 'Raw':
            return node.value;

        case 'Unknown':
            return node.value;

        case 'Percentage':
            return node.value + '%';

        case 'Space':
            return ' ';

        case 'Comment':
            return '/*' + node.value + '*/';

        default:
            throw new Error('Unknown node type: ' + node.type);
    }
}

module.exports = translate;
});

var translate$2 = interopDefault(translate$1);


var require$$0$24 = Object.freeze({
    default: translate$2
});

var createDeclarationIndexer = createCommonjsModule(function (module) {
var translate = interopDefault(require$$0$24);

function Index() {
    this.seed = 0;
    this.map = Object.create(null);
}

Index.prototype.resolve = function(str) {
    var index = this.map[str];

    if (!index) {
        index = ++this.seed;
        this.map[str] = index;
    }

    return index;
};

module.exports = function createDeclarationIndexer() {
    var names = new Index();
    var values = new Index();

    return function markDeclaration(node) {
        var property = node.property.name;
        var value = translate(node.value);

        node.id = names.resolve(property) + (values.resolve(value) << 12);
        node.length = property.length + 1 + value.length;

        return node;
    };
};
});

var createDeclarationIndexer$1 = interopDefault(createDeclarationIndexer);


var require$$1$14 = Object.freeze({
    default: createDeclarationIndexer$1
});

var specificity = createCommonjsModule(function (module) {
module.exports = function specificity(simpleSelector) {
    var A = 0;
    var B = 0;
    var C = 0;

    simpleSelector.sequence.each(function walk(data) {
        switch (data.type) {
            case 'SimpleSelector':
            case 'Negation':
                data.sequence.each(walk);
                break;

            case 'Id':
                A++;
                break;

            case 'Class':
            case 'Attribute':
            case 'FunctionalPseudo':
                B++;
                break;

            case 'Identifier':
                if (data.name !== '*') {
                    C++;
                }
                break;

            case 'PseudoElement':
                C++;
                break;

            case 'PseudoClass':
                var name = data.name.toLowerCase();
                if (name === 'before' ||
                    name === 'after' ||
                    name === 'first-line' ||
                    name === 'first-letter') {
                    C++;
                } else {
                    B++;
                }
                break;
        }
    });

    return [A, B, C];
};
});

var specificity$1 = interopDefault(specificity);


var require$$0$26 = Object.freeze({
    default: specificity$1
});

var processSelector = createCommonjsModule(function (module) {
var translate = interopDefault(require$$0$24);
var specificity = interopDefault(require$$0$26);

var nonFreezePseudoElements = {
    'first-letter': true,
    'first-line': true,
    'after': true,
    'before': true
};
var nonFreezePseudoClasses = {
    'link': true,
    'visited': true,
    'hover': true,
    'active': true,
    'first-letter': true,
    'first-line': true,
    'after': true,
    'before': true
};

module.exports = function freeze(node, usageData) {
    var pseudos = Object.create(null);
    var hasPseudo = false;

    node.selector.selectors.each(function(simpleSelector) {
        var tagName = '*';
        var scope = 0;

        simpleSelector.sequence.some(function(node) {
            switch (node.type) {
                case 'Class':
                    if (usageData && usageData.scopes) {
                        var classScope = usageData.scopes[node.name] || 0;

                        if (scope !== 0 && classScope !== scope) {
                            throw new Error('Selector can\'t has classes from different scopes: ' + translate(simpleSelector));
                        }

                        scope = classScope;
                    }
                    break;

                case 'PseudoClass':
                    if (!nonFreezePseudoClasses.hasOwnProperty(node.name)) {
                        pseudos[node.name] = true;
                        hasPseudo = true;
                    }
                    break;

                case 'PseudoElement':
                    if (!nonFreezePseudoElements.hasOwnProperty(node.name)) {
                        pseudos[node.name] = true;
                        hasPseudo = true;
                    }
                    break;

                case 'FunctionalPseudo':
                    pseudos[node.name] = true;
                    hasPseudo = true;
                    break;

                case 'Negation':
                    pseudos.not = true;
                    hasPseudo = true;
                    break;

                case 'Identifier':
                    tagName = node.name;
                    break;

                case 'Attribute':
                    if (node.flags) {
                        pseudos['[' + node.flags + ']'] = true;
                        hasPseudo = true;
                    }
                    break;

                case 'Combinator':
                    tagName = '*';
                    break;
            }
        });

        simpleSelector.id = translate(simpleSelector);
        simpleSelector.compareMarker = specificity(simpleSelector).toString();

        if (scope) {
            simpleSelector.compareMarker += ':' + scope;
        }

        if (tagName !== '*') {
            simpleSelector.compareMarker += ',' + tagName;
        }
    });

    if (hasPseudo) {
        node.pseudoSignature = Object.keys(pseudos).sort().join(',');
    }
};
});

var processSelector$1 = interopDefault(processSelector);


var require$$0$25 = Object.freeze({
    default: processSelector$1
});

var index$21 = createCommonjsModule(function (module) {
var resolveKeyword = interopDefault(require$$2$10).keyword;
var walkRules = interopDefault(require$$0$18).rules;
var translate = interopDefault(require$$0$24);
var createDeclarationIndexer = interopDefault(require$$1$14);
var processSelector = interopDefault(require$$0$25);

function walk(node, markDeclaration, usageData) {
    switch (node.type) {
        case 'Ruleset':
            node.block.declarations.each(markDeclaration);
            processSelector(node, usageData);
            break;

        case 'Atrule':
            if (node.expression) {
                node.expression.id = translate(node.expression);
            }

            // compare keyframe selectors by its values
            // NOTE: still no clarification about problems with keyframes selector grouping (issue #197)
            if (resolveKeyword(node.name).name === 'keyframes') {
                node.block.avoidRulesMerge = true;  /* probably we don't need to prevent those merges for @keyframes
                                                       TODO: need to be checked */
                node.block.rules.each(function(ruleset) {
                    ruleset.selector.selectors.each(function(simpleselector) {
                        simpleselector.compareMarker = simpleselector.id;
                    });
                });
            }
            break;
    }
};

module.exports = function prepare(ast, usageData) {
    var markDeclaration = createDeclarationIndexer();

    walkRules(ast, function(node) {
        walk(node, markDeclaration, usageData);
    });

    return {
        declaration: markDeclaration
    };
};
});

var index$22 = interopDefault(index$21);


var require$$7$4 = Object.freeze({
    default: index$22
});

var utils$2 = createCommonjsModule(function (module) {
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isEqualLists(a, b) {
    var cursor1 = a.head;
    var cursor2 = b.head;

    while (cursor1 !== null && cursor2 !== null && cursor1.data.id === cursor2.data.id) {
        cursor1 = cursor1.next;
        cursor2 = cursor2.next;
    }

    return cursor1 === null && cursor2 === null;
}

function isEqualDeclarations(a, b) {
    var cursor1 = a.head;
    var cursor2 = b.head;

    while (cursor1 !== null && cursor2 !== null && cursor1.data.id === cursor2.data.id) {
        cursor1 = cursor1.next;
        cursor2 = cursor2.next;
    }

    return cursor1 === null && cursor2 === null;
}

function compareDeclarations(declarations1, declarations2) {
    var result = {
        eq: [],
        ne1: [],
        ne2: [],
        ne2overrided: []
    };

    var fingerprints = Object.create(null);
    var declarations2hash = Object.create(null);

    for (var cursor = declarations2.head; cursor; cursor = cursor.next)  {
        declarations2hash[cursor.data.id] = true;
    }

    for (var cursor = declarations1.head; cursor; cursor = cursor.next)  {
        var data = cursor.data;

        if (data.fingerprint) {
            fingerprints[data.fingerprint] = data.value.important;
        }

        if (declarations2hash[data.id]) {
            declarations2hash[data.id] = false;
            result.eq.push(data);
        } else {
            result.ne1.push(data);
        }
    }

    for (var cursor = declarations2.head; cursor; cursor = cursor.next)  {
        var data = cursor.data;

        if (declarations2hash[data.id]) {
            // if declarations1 has overriding declaration, this is not a difference
            // but take in account !important - prev should be equal or greater than follow
            if (hasOwnProperty.call(fingerprints, data.fingerprint) &&
                Number(fingerprints[data.fingerprint]) >= Number(data.value.important)) {
                result.ne2overrided.push(data);
            } else {
                result.ne2.push(data);
            }
        }
    }

    return result;
}

function addSelectors(dest, source) {
    source.each(function(sourceData) {
        var newStr = sourceData.id;
        var cursor = dest.head;

        while (cursor) {
            var nextStr = cursor.data.id;

            if (nextStr === newStr) {
                return;
            }

            if (nextStr > newStr) {
                break;
            }

            cursor = cursor.next;
        }

        dest.insert(dest.createItem(sourceData), cursor);
    });

    return dest;
}

// check if simpleselectors has no equal specificity and element selector
function hasSimilarSelectors(selectors1, selectors2) {
    return selectors1.some(function(a) {
        return selectors2.some(function(b) {
            return a.compareMarker === b.compareMarker;
        });
    });
}

// test node can't to be skipped
function unsafeToSkipNode(node) {
    switch (node.type) {
        case 'Ruleset':
            // unsafe skip ruleset with selector similarities
            return hasSimilarSelectors(node.selector.selectors, this);

        case 'Atrule':
            // can skip at-rules with blocks
            if (node.block) {
                // non-stylesheet blocks are safe to skip since have no selectors
                if (node.block.type !== 'StyleSheet') {
                    return false;
                }

                // unsafe skip at-rule if block contains something unsafe to skip
                return node.block.rules.some(unsafeToSkipNode, this);
            }
            break;
    }

    // unsafe by default
    return true;
}

module.exports = {
    isEqualLists: isEqualLists,
    isEqualDeclarations: isEqualDeclarations,
    compareDeclarations: compareDeclarations,
    addSelectors: addSelectors,
    hasSimilarSelectors: hasSimilarSelectors,
    unsafeToSkipNode: unsafeToSkipNode
};
});

var utils$3 = interopDefault(utils$2);
var isEqualLists = utils$2.isEqualLists;
var isEqualDeclarations = utils$2.isEqualDeclarations;
var compareDeclarations = utils$2.compareDeclarations;
var addSelectors = utils$2.addSelectors;
var hasSimilarSelectors = utils$2.hasSimilarSelectors;
var unsafeToSkipNode = utils$2.unsafeToSkipNode;

var require$$1$15 = Object.freeze({
    default: utils$3,
    isEqualLists: isEqualLists,
    isEqualDeclarations: isEqualDeclarations,
    compareDeclarations: compareDeclarations,
    addSelectors: addSelectors,
    hasSimilarSelectors: hasSimilarSelectors,
    unsafeToSkipNode: unsafeToSkipNode
});

var _1InitialMergeRuleset = createCommonjsModule(function (module) {
var utils = interopDefault(require$$1$15);
var walkRules = interopDefault(require$$0$18).rules;

function processRuleset(node, item, list) {
    var selectors = node.selector.selectors;
    var declarations = node.block.declarations;

    list.prevUntil(item.prev, function(prev) {
        // skip non-ruleset node if safe
        if (prev.type !== 'Ruleset') {
            return utils.unsafeToSkipNode.call(selectors, prev);
        }

        var prevSelectors = prev.selector.selectors;
        var prevDeclarations = prev.block.declarations;

        // try to join rulesets with equal pseudo signature
        if (node.pseudoSignature === prev.pseudoSignature) {
            // try to join by selectors
            if (utils.isEqualLists(prevSelectors, selectors)) {
                prevDeclarations.appendList(declarations);
                list.remove(item);
                return true;
            }

            // try to join by declarations
            if (utils.isEqualDeclarations(declarations, prevDeclarations)) {
                utils.addSelectors(prevSelectors, selectors);
                list.remove(item);
                return true;
            }
        }

        // go to prev ruleset if has no selector similarities
        return utils.hasSimilarSelectors(selectors, prevSelectors);
    });
};

// NOTE: direction should be left to right, since rulesets merge to left
// ruleset. When direction right to left unmerged rulesets may prevent lookup
// TODO: remove initial merge
module.exports = function initialMergeRuleset(ast) {
    walkRules(ast, function(node, item, list) {
        if (node.type === 'Ruleset') {
            processRuleset(node, item, list);
        }
    });
};
});

var _1InitialMergeRuleset$1 = interopDefault(_1InitialMergeRuleset);


var require$$6$4 = Object.freeze({
    default: _1InitialMergeRuleset$1
});

var _2MergeAtrule = createCommonjsModule(function (module) {
var walkRulesRight = interopDefault(require$$0$18).rulesRight;

function isMediaRule(node) {
    return node.type === 'Atrule' && node.name === 'media';
}

function processAtrule(node, item, list) {
    if (!isMediaRule(node)) {
        return;
    }

    var prev = item.prev && item.prev.data;

    if (!prev || !isMediaRule(prev)) {
        return;
    }

    // merge @media with same query
    if (node.expression.id === prev.expression.id) {
        prev.block.rules.appendList(node.block.rules);
        prev.info = {
            primary: prev.info,
            merged: node.info
        };
        list.remove(item);
    }
};

module.exports = function rejoinAtrule(ast) {
    walkRulesRight(ast, function(node, item, list) {
        if (node.type === 'Atrule') {
            processAtrule(node, item, list);
        }
    });
};
});

var _2MergeAtrule$1 = interopDefault(_2MergeAtrule);


var require$$5$5 = Object.freeze({
    default: _2MergeAtrule$1
});

var _3DisjoinRuleset = createCommonjsModule(function (module) {
var List = interopDefault(require$$2$7);
var walkRulesRight = interopDefault(require$$0$18).rulesRight;

function processRuleset(node, item, list) {
    var selectors = node.selector.selectors;

    // generate new rule sets:
    // .a, .b { color: red; }
    // ->
    // .a { color: red; }
    // .b { color: red; }

    // while there are more than 1 simple selector split for rulesets
    while (selectors.head !== selectors.tail) {
        var newSelectors = new List();
        newSelectors.insert(selectors.remove(selectors.head));

        list.insert(list.createItem({
            type: 'Ruleset',
            info: node.info,
            pseudoSignature: node.pseudoSignature,
            selector: {
                type: 'Selector',
                info: node.selector.info,
                selectors: newSelectors
            },
            block: {
                type: 'Block',
                info: node.block.info,
                declarations: node.block.declarations.copy()
            }
        }), item);
    }
};

module.exports = function disjoinRuleset(ast) {
    walkRulesRight(ast, function(node, item, list) {
        if (node.type === 'Ruleset') {
            processRuleset(node, item, list);
        }
    });
};
});

var _3DisjoinRuleset$1 = interopDefault(_3DisjoinRuleset);


var require$$4$6 = Object.freeze({
    default: _3DisjoinRuleset$1
});

var _4RestructShorthand = createCommonjsModule(function (module) {
var List = interopDefault(require$$2$7);
var translate = interopDefault(require$$0$24);
var walkRulesRight = interopDefault(require$$0$18).rulesRight;

var REPLACE = 1;
var REMOVE = 2;
var TOP = 0;
var RIGHT = 1;
var BOTTOM = 2;
var LEFT = 3;
var SIDES = ['top', 'right', 'bottom', 'left'];
var SIDE = {
    'margin-top': 'top',
    'margin-right': 'right',
    'margin-bottom': 'bottom',
    'margin-left': 'left',

    'padding-top': 'top',
    'padding-right': 'right',
    'padding-bottom': 'bottom',
    'padding-left': 'left',

    'border-top-color': 'top',
    'border-right-color': 'right',
    'border-bottom-color': 'bottom',
    'border-left-color': 'left',
    'border-top-width': 'top',
    'border-right-width': 'right',
    'border-bottom-width': 'bottom',
    'border-left-width': 'left',
    'border-top-style': 'top',
    'border-right-style': 'right',
    'border-bottom-style': 'bottom',
    'border-left-style': 'left'
};
var MAIN_PROPERTY = {
    'margin': 'margin',
    'margin-top': 'margin',
    'margin-right': 'margin',
    'margin-bottom': 'margin',
    'margin-left': 'margin',

    'padding': 'padding',
    'padding-top': 'padding',
    'padding-right': 'padding',
    'padding-bottom': 'padding',
    'padding-left': 'padding',

    'border-color': 'border-color',
    'border-top-color': 'border-color',
    'border-right-color': 'border-color',
    'border-bottom-color': 'border-color',
    'border-left-color': 'border-color',
    'border-width': 'border-width',
    'border-top-width': 'border-width',
    'border-right-width': 'border-width',
    'border-bottom-width': 'border-width',
    'border-left-width': 'border-width',
    'border-style': 'border-style',
    'border-top-style': 'border-style',
    'border-right-style': 'border-style',
    'border-bottom-style': 'border-style',
    'border-left-style': 'border-style'
};

function TRBL(name) {
    this.name = name;
    this.info = null;
    this.iehack = undefined;
    this.sides = {
        'top': null,
        'right': null,
        'bottom': null,
        'left': null
    };
}

TRBL.prototype.getValueSequence = function(value, count) {
    var values = [];
    var iehack = false;
    var hasBadValues = value.sequence.some(function(child) {
        var special = false;

        switch (child.type) {
            case 'Identifier':
                switch (child.name) {
                    case '\\9':
                        iehack = true;
                        return;

                    case 'inherit':
                    case 'initial':
                    case 'unset':
                    case 'revert':
                        special = child.name;
                        break;
                }
                break;

            case 'Dimension':
                switch (child.unit) {
                    // is not supported until IE11
                    case 'rem':

                    // v* units is too buggy across browsers and better
                    // don't merge values with those units
                    case 'vw':
                    case 'vh':
                    case 'vmin':
                    case 'vmax':
                    case 'vm': // IE9 supporting "vm" instead of "vmin".
                        special = child.unit;
                        break;
                }
                break;

            case 'Hash': // color
            case 'Number':
            case 'Percentage':
                break;

            case 'Function':
                special = child.name;
                break;

            case 'Space':
                return false; // ignore space

            default:
                return true;  // bad value
        }

        values.push({
            node: child,
            special: special,
            important: value.important
        });
    });

    if (hasBadValues || values.length > count) {
        return false;
    }

    if (typeof this.iehack === 'boolean' && this.iehack !== iehack) {
        return false;
    }

    this.iehack = iehack; // move outside

    return values;
};

TRBL.prototype.canOverride = function(side, value) {
    var currentValue = this.sides[side];

    return !currentValue || (value.important && !currentValue.important);
};

TRBL.prototype.add = function(name, value, info) {
    function attemptToAdd() {
        var sides = this.sides;
        var side = SIDE[name];

        if (side) {
            if (side in sides === false) {
                return false;
            }

            var values = this.getValueSequence(value, 1);

            if (!values || !values.length) {
                return false;
            }

            // can mix only if specials are equal
            for (var key in sides) {
                if (sides[key] !== null && sides[key].special !== values[0].special) {
                    return false;
                }
            }

            if (!this.canOverride(side, values[0])) {
                return true;
            }

            sides[side] = values[0];
            return true;
        } else if (name === this.name) {
            var values = this.getValueSequence(value, 4);

            if (!values || !values.length) {
                return false;
            }

            switch (values.length) {
                case 1:
                    values[RIGHT] = values[TOP];
                    values[BOTTOM] = values[TOP];
                    values[LEFT] = values[TOP];
                    break;

                case 2:
                    values[BOTTOM] = values[TOP];
                    values[LEFT] = values[RIGHT];
                    break;

                case 3:
                    values[LEFT] = values[RIGHT];
                    break;
            }

            // can mix only if specials are equal
            for (var i = 0; i < 4; i++) {
                for (var key in sides) {
                    if (sides[key] !== null && sides[key].special !== values[i].special) {
                        return false;
                    }
                }
            }

            for (var i = 0; i < 4; i++) {
                if (this.canOverride(SIDES[i], values[i])) {
                    sides[SIDES[i]] = values[i];
                }
            }

            return true;
        }
    }

    if (!attemptToAdd.call(this)) {
        return false;
    }

    if (this.info) {
        this.info = {
            primary: this.info,
            merged: info
        };
    } else {
        this.info = info;
    }

    return true;
};

TRBL.prototype.isOkToMinimize = function() {
    var top = this.sides.top;
    var right = this.sides.right;
    var bottom = this.sides.bottom;
    var left = this.sides.left;

    if (top && right && bottom && left) {
        var important =
            top.important +
            right.important +
            bottom.important +
            left.important;

        return important === 0 || important === 4;
    }

    return false;
};

TRBL.prototype.getValue = function() {
    var result = [];
    var sides = this.sides;
    var values = [
        sides.top,
        sides.right,
        sides.bottom,
        sides.left
    ];
    var stringValues = [
        translate(sides.top.node),
        translate(sides.right.node),
        translate(sides.bottom.node),
        translate(sides.left.node)
    ];

    if (stringValues[LEFT] === stringValues[RIGHT]) {
        values.pop();
        if (stringValues[BOTTOM] === stringValues[TOP]) {
            values.pop();
            if (stringValues[RIGHT] === stringValues[TOP]) {
                values.pop();
            }
        }
    }

    for (var i = 0; i < values.length; i++) {
        if (i) {
            result.push({ type: 'Space' });
        }

        result.push(values[i].node);
    }

    if (this.iehack) {
        result.push({ type: 'Space' }, {
            type: 'Identifier',
            info: {},
            name: '\\9'
        });
    }

    return {
        type: 'Value',
        info: {},
        important: sides.top.important,
        sequence: new List(result)
    };
};

TRBL.prototype.getProperty = function() {
    return {
        type: 'Property',
        info: {},
        name: this.name
    };
};

function processRuleset(ruleset, shorts, shortDeclarations, lastShortSelector) {
    var declarations = ruleset.block.declarations;
    var selector = ruleset.selector.selectors.first().id;

    ruleset.block.declarations.eachRight(function(declaration, item) {
        var property = declaration.property.name;

        if (!MAIN_PROPERTY.hasOwnProperty(property)) {
            return;
        }

        var key = MAIN_PROPERTY[property];
        var shorthand;
        var operation;

        if (!lastShortSelector || selector === lastShortSelector) {
            if (key in shorts) {
                operation = REMOVE;
                shorthand = shorts[key];
            }
        }

        if (!shorthand || !shorthand.add(property, declaration.value, declaration.info)) {
            operation = REPLACE;
            shorthand = new TRBL(key);

            // if can't parse value ignore it and break shorthand sequence
            if (!shorthand.add(property, declaration.value, declaration.info)) {
                lastShortSelector = null;
                return;
            }
        }

        shorts[key] = shorthand;
        shortDeclarations.push({
            operation: operation,
            block: declarations,
            item: item,
            shorthand: shorthand
        });

        lastShortSelector = selector;
    });

    return lastShortSelector;
};

function processShorthands(shortDeclarations, markDeclaration) {
    shortDeclarations.forEach(function(item) {
        var shorthand = item.shorthand;

        if (!shorthand.isOkToMinimize()) {
            return;
        }

        if (item.operation === REPLACE) {
            item.item.data = markDeclaration({
                type: 'Declaration',
                info: shorthand.info,
                property: shorthand.getProperty(),
                value: shorthand.getValue(),
                id: 0,
                length: 0,
                fingerprint: null
            });
        } else {
            item.block.remove(item.item);
        }
    });
};

module.exports = function restructBlock(ast, indexer) {
    var stylesheetMap = {};
    var shortDeclarations = [];

    walkRulesRight(ast, function(node) {
        if (node.type !== 'Ruleset') {
            return;
        }

        var stylesheet = this.stylesheet;
        var rulesetId = (node.pseudoSignature || '') + '|' + node.selector.selectors.first().id;
        var rulesetMap;
        var shorts;

        if (!stylesheetMap.hasOwnProperty(stylesheet.id)) {
            rulesetMap = {
                lastShortSelector: null
            };
            stylesheetMap[stylesheet.id] = rulesetMap;
        } else {
            rulesetMap = stylesheetMap[stylesheet.id];
        }

        if (rulesetMap.hasOwnProperty(rulesetId)) {
            shorts = rulesetMap[rulesetId];
        } else {
            shorts = {};
            rulesetMap[rulesetId] = shorts;
        }

        rulesetMap.lastShortSelector = processRuleset.call(this, node, shorts, shortDeclarations, rulesetMap.lastShortSelector);
    });

    processShorthands(shortDeclarations, indexer.declaration);
};
});

var _4RestructShorthand$1 = interopDefault(_4RestructShorthand);


var require$$3$7 = Object.freeze({
    default: _4RestructShorthand$1
});

var _6RestructBlock = createCommonjsModule(function (module) {
var resolveProperty = interopDefault(require$$2$10).property;
var resolveKeyword = interopDefault(require$$2$10).keyword;
var walkRulesRight = interopDefault(require$$0$18).rulesRight;
var translate = interopDefault(require$$0$24);
var dontRestructure = {
    'src': 1 // https://github.com/afelix/csso/issues/50
};

var DONT_MIX_VALUE = {
    // https://developer.mozilla.org/en-US/docs/Web/CSS/display#Browser_compatibility
    'display': /table|ruby|flex|-(flex)?box$|grid|contents|run-in/i,
    // https://developer.mozilla.org/en/docs/Web/CSS/text-align
    'text-align': /^(start|end|match-parent|justify-all)$/i
};

var CURSOR_SAFE_VALUE = [
    'auto', 'crosshair', 'default', 'move', 'text', 'wait', 'help',
    'n-resize', 'e-resize', 's-resize', 'w-resize',
    'ne-resize', 'nw-resize', 'se-resize', 'sw-resize',
    'pointer', 'progress', 'not-allowed', 'no-drop', 'vertical-text', 'all-scroll',
    'col-resize', 'row-resize'
];

var NEEDLESS_TABLE = {
    'border-width': ['border'],
    'border-style': ['border'],
    'border-color': ['border'],
    'border-top': ['border'],
    'border-right': ['border'],
    'border-bottom': ['border'],
    'border-left': ['border'],
    'border-top-width': ['border-top', 'border-width', 'border'],
    'border-right-width': ['border-right', 'border-width', 'border'],
    'border-bottom-width': ['border-bottom', 'border-width', 'border'],
    'border-left-width': ['border-left', 'border-width', 'border'],
    'border-top-style': ['border-top', 'border-style', 'border'],
    'border-right-style': ['border-right', 'border-style', 'border'],
    'border-bottom-style': ['border-bottom', 'border-style', 'border'],
    'border-left-style': ['border-left', 'border-style', 'border'],
    'border-top-color': ['border-top', 'border-color', 'border'],
    'border-right-color': ['border-right', 'border-color', 'border'],
    'border-bottom-color': ['border-bottom', 'border-color', 'border'],
    'border-left-color': ['border-left', 'border-color', 'border'],
    'margin-top': ['margin'],
    'margin-right': ['margin'],
    'margin-bottom': ['margin'],
    'margin-left': ['margin'],
    'padding-top': ['padding'],
    'padding-right': ['padding'],
    'padding-bottom': ['padding'],
    'padding-left': ['padding'],
    'font-style': ['font'],
    'font-variant': ['font'],
    'font-weight': ['font'],
    'font-size': ['font'],
    'font-family': ['font'],
    'list-style-type': ['list-style'],
    'list-style-position': ['list-style'],
    'list-style-image': ['list-style']
};

function getPropertyFingerprint(propertyName, declaration, fingerprints) {
    var realName = resolveProperty(propertyName).name;

    if (realName === 'background' ||
       (realName === 'filter' && declaration.value.sequence.first().type === 'Progid')) {
        return propertyName + ':' + translate(declaration.value);
    }

    var declarationId = declaration.id;
    var fingerprint = fingerprints[declarationId];

    if (!fingerprint) {
        var vendorId = '';
        var hack9 = '';
        var special = {};

        declaration.value.sequence.each(function walk(node) {
            switch (node.type) {
                case 'Argument':
                case 'Value':
                case 'Braces':
                    node.sequence.each(walk);
                    break;

                case 'Identifier':
                    var name = node.name;

                    if (!vendorId) {
                        vendorId = resolveKeyword(name).vendor;
                    }

                    if (/\\9/.test(name)) {
                        hack9 = name;
                    }

                    if (realName === 'cursor') {
                        if (CURSOR_SAFE_VALUE.indexOf(name) === -1) {
                            special[name] = true;
                        }
                    } else if (DONT_MIX_VALUE.hasOwnProperty(realName)) {
                        if (DONT_MIX_VALUE[realName].test(name)) {
                            special[name] = true;
                        }
                    }

                    break;

                case 'Function':
                    var name = node.name;

                    if (!vendorId) {
                        vendorId = resolveKeyword(name).vendor;
                    }

                    if (name === 'rect') {
                        // there are 2 forms of rect:
                        //   rect(<top>, <right>, <bottom>, <left>) - standart
                        //   rect(<top> <right> <bottom> <left>) – backwards compatible syntax
                        // only the same form values can be merged
                        if (node.arguments.size < 4) {
                            name = 'rect-backward';
                        }
                    }

                    special[name + '()'] = true;

                    // check nested tokens too
                    node.arguments.each(walk);

                    break;

                case 'Dimension':
                    var unit = node.unit;

                    switch (unit) {
                        // is not supported until IE11
                        case 'rem':

                        // v* units is too buggy across browsers and better
                        // don't merge values with those units
                        case 'vw':
                        case 'vh':
                        case 'vmin':
                        case 'vmax':
                        case 'vm': // IE9 supporting "vm" instead of "vmin".
                            special[unit] = true;
                            break;
                    }
                    break;
            }
        });

        fingerprint = '|' + Object.keys(special).sort() + '|' + hack9 + vendorId;

        fingerprints[declarationId] = fingerprint;
    }

    return propertyName + fingerprint;
}

function needless(props, declaration, fingerprints) {
    var property = resolveProperty(declaration.property.name);

    if (NEEDLESS_TABLE.hasOwnProperty(property.name)) {
        var table = NEEDLESS_TABLE[property.name];

        for (var i = 0; i < table.length; i++) {
            var ppre = getPropertyFingerprint(property.prefix + table[i], declaration, fingerprints);
            var prev = props[ppre];

            if (prev && (!declaration.value.important || prev.item.data.value.important)) {
                return prev;
            }
        }
    }
}

function processRuleset(ruleset, item, list, props, fingerprints) {
    var declarations = ruleset.block.declarations;

    declarations.eachRight(function(declaration, declarationItem) {
        var property = declaration.property.name;
        var fingerprint = getPropertyFingerprint(property, declaration, fingerprints);
        var prev = props[fingerprint];

        if (prev && !dontRestructure.hasOwnProperty(property)) {
            if (declaration.value.important && !prev.item.data.value.important) {
                props[fingerprint] = {
                    block: declarations,
                    item: declarationItem
                };

                prev.block.remove(prev.item);
                declaration.info = {
                    primary: declaration.info,
                    merged: prev.item.data.info
                };
            } else {
                declarations.remove(declarationItem);
                prev.item.data.info = {
                    primary: prev.item.data.info,
                    merged: declaration.info
                };
            }
        } else {
            var prev = needless(props, declaration, fingerprints);

            if (prev) {
                declarations.remove(declarationItem);
                prev.item.data.info = {
                    primary: prev.item.data.info,
                    merged: declaration.info
                };
            } else {
                declaration.fingerprint = fingerprint;

                props[fingerprint] = {
                    block: declarations,
                    item: declarationItem
                };
            }
        }
    });

    if (declarations.isEmpty()) {
        list.remove(item);
    }
};

module.exports = function restructBlock(ast) {
    var stylesheetMap = {};
    var fingerprints = Object.create(null);

    walkRulesRight(ast, function(node, item, list) {
        if (node.type !== 'Ruleset') {
            return;
        }

        var stylesheet = this.stylesheet;
        var rulesetId = (node.pseudoSignature || '') + '|' + node.selector.selectors.first().id;
        var rulesetMap;
        var props;

        if (!stylesheetMap.hasOwnProperty(stylesheet.id)) {
            rulesetMap = {};
            stylesheetMap[stylesheet.id] = rulesetMap;
        } else {
            rulesetMap = stylesheetMap[stylesheet.id];
        }

        if (rulesetMap.hasOwnProperty(rulesetId)) {
            props = rulesetMap[rulesetId];
        } else {
            props = {};
            rulesetMap[rulesetId] = props;
        }

        processRuleset.call(this, node, item, list, props, fingerprints);
    });
};
});

var _6RestructBlock$1 = interopDefault(_6RestructBlock);


var require$$2$13 = Object.freeze({
    default: _6RestructBlock$1
});

var _7MergeRuleset = createCommonjsModule(function (module) {
var utils = interopDefault(require$$1$15);
var walkRules = interopDefault(require$$0$18).rules;

/*
    At this step all rules has single simple selector. We try to join by equal
    declaration blocks to first rule, e.g.

    .a { color: red }
    b { ... }
    .b { color: red }
    ->
    .a, .b { color: red }
    b { ... }
*/

function processRuleset(node, item, list) {
    var selectors = node.selector.selectors;
    var declarations = node.block.declarations;
    var nodeCompareMarker = selectors.first().compareMarker;
    var skippedCompareMarkers = {};

    list.nextUntil(item.next, function(next, nextItem) {
        // skip non-ruleset node if safe
        if (next.type !== 'Ruleset') {
            return utils.unsafeToSkipNode.call(selectors, next);
        }

        if (node.pseudoSignature !== next.pseudoSignature) {
            return true;
        }

        var nextFirstSelector = next.selector.selectors.head;
        var nextDeclarations = next.block.declarations;
        var nextCompareMarker = nextFirstSelector.data.compareMarker;

        // if next ruleset has same marked as one of skipped then stop joining
        if (nextCompareMarker in skippedCompareMarkers) {
            return true;
        }

        // try to join by selectors
        if (selectors.head === selectors.tail) {
            if (selectors.first().id === nextFirstSelector.data.id) {
                declarations.appendList(nextDeclarations);
                list.remove(nextItem);
                return;
            }
        }

        // try to join by properties
        if (utils.isEqualDeclarations(declarations, nextDeclarations)) {
            var nextStr = nextFirstSelector.data.id;

            selectors.some(function(data, item) {
                var curStr = data.id;

                if (nextStr < curStr) {
                    selectors.insert(nextFirstSelector, item);
                    return true;
                }

                if (!item.next) {
                    selectors.insert(nextFirstSelector);
                    return true;
                }
            });

            list.remove(nextItem);
            return;
        }

        // go to next ruleset if current one can be skipped (has no equal specificity nor element selector)
        if (nextCompareMarker === nodeCompareMarker) {
            return true;
        }

        skippedCompareMarkers[nextCompareMarker] = true;
    });
};

module.exports = function mergeRuleset(ast) {
    walkRules(ast, function(node, item, list) {
        if (node.type === 'Ruleset') {
            processRuleset(node, item, list);
        }
    });
};
});

var _7MergeRuleset$1 = interopDefault(_7MergeRuleset);


var require$$1$16 = Object.freeze({
    default: _7MergeRuleset$1
});

var _8RestructRuleset = createCommonjsModule(function (module) {
var List = interopDefault(require$$2$7);
var utils = interopDefault(require$$1$15);
var walkRulesRight = interopDefault(require$$0$18).rulesRight;

function calcSelectorLength(list) {
    var length = 0;

    list.each(function(data) {
        length += data.id.length + 1;
    });

    return length - 1;
}

function calcDeclarationsLength(tokens) {
    var length = 0;

    for (var i = 0; i < tokens.length; i++) {
        length += tokens[i].length;
    }

    return (
        length +          // declarations
        tokens.length - 1 // delimeters
    );
}

function processRuleset(node, item, list) {
    var avoidRulesMerge = this.stylesheet.avoidRulesMerge;
    var selectors = node.selector.selectors;
    var block = node.block;
    var disallowDownMarkers = Object.create(null);
    var allowMergeUp = true;
    var allowMergeDown = true;

    list.prevUntil(item.prev, function(prev, prevItem) {
        // skip non-ruleset node if safe
        if (prev.type !== 'Ruleset') {
            return utils.unsafeToSkipNode.call(selectors, prev);
        }

        var prevSelectors = prev.selector.selectors;
        var prevBlock = prev.block;

        if (node.pseudoSignature !== prev.pseudoSignature) {
            return true;
        }

        allowMergeDown = !prevSelectors.some(function(selector) {
            return selector.compareMarker in disallowDownMarkers;
        });

        // try prev ruleset if simpleselectors has no equal specifity and element selector
        if (!allowMergeDown && !allowMergeUp) {
            return true;
        }

        // try to join by selectors
        if (allowMergeUp && utils.isEqualLists(prevSelectors, selectors)) {
            prevBlock.declarations.appendList(block.declarations);
            list.remove(item);
            return true;
        }

        // try to join by properties
        var diff = utils.compareDeclarations(block.declarations, prevBlock.declarations);

        // console.log(diff.eq, diff.ne1, diff.ne2);

        if (diff.eq.length) {
            if (!diff.ne1.length && !diff.ne2.length) {
                // equal blocks
                if (allowMergeDown) {
                    utils.addSelectors(selectors, prevSelectors);
                    list.remove(prevItem);
                }

                return true;
            } else if (!avoidRulesMerge) { /* probably we don't need to prevent those merges for @keyframes
                                              TODO: need to be checked */

                if (diff.ne1.length && !diff.ne2.length) {
                    // prevBlock is subset block
                    var selectorLength = calcSelectorLength(selectors);
                    var blockLength = calcDeclarationsLength(diff.eq); // declarations length

                    if (allowMergeUp && selectorLength < blockLength) {
                        utils.addSelectors(prevSelectors, selectors);
                        block.declarations = new List(diff.ne1);
                    }
                } else if (!diff.ne1.length && diff.ne2.length) {
                    // node is subset of prevBlock
                    var selectorLength = calcSelectorLength(prevSelectors);
                    var blockLength = calcDeclarationsLength(diff.eq); // declarations length

                    if (allowMergeDown && selectorLength < blockLength) {
                        utils.addSelectors(selectors, prevSelectors);
                        prevBlock.declarations = new List(diff.ne2);
                    }
                } else {
                    // diff.ne1.length && diff.ne2.length
                    // extract equal block
                    var newSelector = {
                        type: 'Selector',
                        info: {},
                        selectors: utils.addSelectors(prevSelectors.copy(), selectors)
                    };
                    var newBlockLength = calcSelectorLength(newSelector.selectors) + 2; // selectors length + curly braces length
                    var blockLength = calcDeclarationsLength(diff.eq); // declarations length

                    // create new ruleset if declarations length greater than
                    // ruleset description overhead
                    if (allowMergeDown && blockLength >= newBlockLength) {
                        var newRuleset = {
                            type: 'Ruleset',
                            info: {},
                            pseudoSignature: node.pseudoSignature,
                            selector: newSelector,
                            block: {
                                type: 'Block',
                                info: {},
                                declarations: new List(diff.eq)
                            }
                        };

                        block.declarations = new List(diff.ne1);
                        prevBlock.declarations = new List(diff.ne2.concat(diff.ne2overrided));
                        list.insert(list.createItem(newRuleset), prevItem);
                        return true;
                    }
                }
            }
        }

        if (allowMergeUp) {
            // TODO: disallow up merge only if any property interception only (i.e. diff.ne2overrided.length > 0);
            // await property families to find property interception correctly
            allowMergeUp = !prevSelectors.some(function(prevSelector) {
                return selectors.some(function(selector) {
                    return selector.compareMarker === prevSelector.compareMarker;
                });
            });
        }

        prevSelectors.each(function(data) {
            disallowDownMarkers[data.compareMarker] = true;
        });
    });
};

module.exports = function restructRuleset(ast) {
    walkRulesRight(ast, function(node, item, list) {
        if (node.type === 'Ruleset') {
            processRuleset.call(this, node, item, list);
        }
    });
};
});

var _8RestructRuleset$1 = interopDefault(_8RestructRuleset);


var require$$0$27 = Object.freeze({
    default: _8RestructRuleset$1
});

var index$19 = createCommonjsModule(function (module) {
var prepare = interopDefault(require$$7$4);
var initialMergeRuleset = interopDefault(require$$6$4);
var mergeAtrule = interopDefault(require$$5$5);
var disjoinRuleset = interopDefault(require$$4$6);
var restructShorthand = interopDefault(require$$3$7);
var restructBlock = interopDefault(require$$2$13);
var mergeRuleset = interopDefault(require$$1$16);
var restructRuleset = interopDefault(require$$0$27);

module.exports = function(ast, usageData, debug) {
    // prepare ast for restructing
    var indexer = prepare(ast, usageData);
    debug('prepare', ast);

    initialMergeRuleset(ast);
    debug('initialMergeRuleset', ast);

    mergeAtrule(ast);
    debug('mergeAtrule', ast);

    disjoinRuleset(ast);
    debug('disjoinRuleset', ast);

    restructShorthand(ast, indexer);
    debug('restructShorthand', ast);

    restructBlock(ast);
    debug('restructBlock', ast);

    mergeRuleset(ast);
    debug('mergeRuleset', ast);

    restructRuleset(ast);
    debug('restructRuleset', ast);
};
});

var index$20 = interopDefault(index$19);


var require$$1$13 = Object.freeze({
    default: index$20
});

var index$13 = createCommonjsModule(function (module) {
var List = interopDefault(require$$2$7);
var clone = interopDefault(require$$5$2);
var usageUtils = interopDefault(require$$4$3);
var clean = interopDefault(require$$3$5);
var compress = interopDefault(require$$2$9);
var restructureBlock = interopDefault(require$$1$13);
var walkRules = interopDefault(require$$0$18).rules;

function readRulesChunk(rules, specialComments) {
    var buffer = new List();
    var nonSpaceTokenInBuffer = false;
    var protectedComment;

    rules.nextUntil(rules.head, function(node, item, list) {
        if (node.type === 'Comment') {
            if (!specialComments || node.value.charAt(0) !== '!') {
                list.remove(item);
                return;
            }

            if (nonSpaceTokenInBuffer || protectedComment) {
                return true;
            }

            list.remove(item);
            protectedComment = node;
            return;
        }

        if (node.type !== 'Space') {
            nonSpaceTokenInBuffer = true;
        }

        buffer.insert(list.remove(item));
    });

    return {
        comment: protectedComment,
        stylesheet: {
            type: 'StyleSheet',
            info: null,
            rules: buffer
        }
    };
}

function compressChunk(ast, firstAtrulesAllowed, usageData, num, logger) {
    logger('Compress block #' + num, null, true);

    var seed = 1;
    walkRules(ast, function markStylesheets() {
        if ('id' in this.stylesheet === false) {
            this.stylesheet.firstAtrulesAllowed = firstAtrulesAllowed;
            this.stylesheet.id = seed++;
        }
    });
    logger('init', ast);

    // remove redundant
    clean(ast, usageData);
    logger('clean', ast);

    // compress nodes
    compress(ast, usageData);
    logger('compress', ast);

    return ast;
}

function getCommentsOption(options) {
    var comments = 'comments' in options ? options.comments : 'exclamation';

    if (typeof comments === 'boolean') {
        comments = comments ? 'exclamation' : false;
    } else if (comments !== 'exclamation' && comments !== 'first-exclamation') {
        comments = false;
    }

    return comments;
}

function getRestructureOption(options) {
    return 'restructure' in options ? options.restructure :
           'restructuring' in options ? options.restructuring :
           true;
}

function wrapBlock(block) {
    return new List([{
        type: 'Ruleset',
        selector: {
            type: 'Selector',
            selectors: new List([{
                type: 'SimpleSelector',
                sequence: new List([{
                    type: 'Identifier',
                    name: 'x'
                }])
            }])
        },
        block: block
    }]);
}

module.exports = function compress(ast, options) {
    ast = ast || { type: 'StyleSheet', info: null, rules: new List() };
    options = options || {};

    var logger = typeof options.logger === 'function' ? options.logger : Function();
    var specialComments = getCommentsOption(options);
    var restructuring = getRestructureOption(options);
    var firstAtrulesAllowed = true;
    var usageData = false;
    var inputRules;
    var outputRules = new List();
    var chunk;
    var chunkNum = 1;
    var chunkRules;

    if (options.clone) {
        ast = clone(ast);
    }

    if (ast.type === 'StyleSheet') {
        inputRules = ast.rules;
        ast.rules = outputRules;
    } else {
        inputRules = wrapBlock(ast);
    }

    if (options.usage) {
        usageData = usageUtils.buildIndex(options.usage);
    }

    do {
        chunk = readRulesChunk(inputRules, Boolean(specialComments));

        compressChunk(chunk.stylesheet, firstAtrulesAllowed, usageData, chunkNum++, logger);

        // structure optimisations
        if (restructuring) {
            restructureBlock(chunk.stylesheet, usageData, logger);
        }

        chunkRules = chunk.stylesheet.rules;

        if (chunk.comment) {
            // add \n before comment if there is another content in outputRules
            if (!outputRules.isEmpty()) {
                outputRules.insert(List.createItem({
                    type: 'Raw',
                    value: '\n'
                }));
            }

            outputRules.insert(List.createItem(chunk.comment));

            // add \n after comment if chunk is not empty
            if (!chunkRules.isEmpty()) {
                outputRules.insert(List.createItem({
                    type: 'Raw',
                    value: '\n'
                }));
            }
        }

        if (firstAtrulesAllowed && !chunkRules.isEmpty()) {
            var lastRule = chunkRules.last();

            if (lastRule.type !== 'Atrule' ||
               (lastRule.name !== 'import' && lastRule.name !== 'charset')) {
                firstAtrulesAllowed = false;
            }
        }

        if (specialComments !== 'exclamation') {
            specialComments = false;
        }

        outputRules.appendList(chunkRules);
    } while (!inputRules.isEmpty());

    return {
        ast: ast
    };
};
});

var index$14 = interopDefault(index$13);


var require$$6$2 = Object.freeze({
    default: index$14
});

var base64 = createCommonjsModule(function (module, exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */
exports.encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};

/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */
exports.decode = function (charCode) {
  var bigA = 65;     // 'A'
  var bigZ = 90;     // 'Z'

  var littleA = 97;  // 'a'
  var littleZ = 122; // 'z'

  var zero = 48;     // '0'
  var nine = 57;     // '9'

  var plus = 43;     // '+'
  var slash = 47;    // '/'

  var littleOffset = 26;
  var numberOffset = 52;

  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if (bigA <= charCode && charCode <= bigZ) {
    return (charCode - bigA);
  }

  // 26 - 51: abcdefghijklmnopqrstuvwxyz
  if (littleA <= charCode && charCode <= littleZ) {
    return (charCode - littleA + littleOffset);
  }

  // 52 - 61: 0123456789
  if (zero <= charCode && charCode <= nine) {
    return (charCode - zero + numberOffset);
  }

  // 62: +
  if (charCode == plus) {
    return 62;
  }

  // 63: /
  if (charCode == slash) {
    return 63;
  }

  // Invalid base64 digit.
  return -1;
};
});

var base64$1 = interopDefault(base64);
var decode$1 = base64.decode;
var encode$1 = base64.encode;

var require$$0$29 = Object.freeze({
  default: base64$1,
  decode: decode$1,
  encode: encode$1
});

var base64Vlq = createCommonjsModule(function (module, exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var base64 = interopDefault(require$$0$29);

// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5;

// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;

// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;

/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */
function toVLQSigned(aValue) {
  return aValue < 0
    ? ((-aValue) << 1) + 1
    : (aValue << 1) + 0;
}

/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative
    ? -shifted
    : shifted;
}

/**
 * Returns the base 64 VLQ encoded value.
 */
exports.encode = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;

  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};

/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */
exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};
});

var base64Vlq$1 = interopDefault(base64Vlq);
var decode = base64Vlq.decode;
var encode = base64Vlq.encode;

var require$$1$18 = Object.freeze({
  default: base64Vlq$1,
  decode: decode,
  encode: encode
});

var util = createCommonjsModule(function (module, exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}
exports.getArg = getArg;

var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);
  if (!match) {
    return null;
  }
  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}
exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';
  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }
  url += '//';
  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }
  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }
  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port
  }
  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }
  return url;
}
exports.urlGenerate = urlGenerate;

/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */
function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);
  if (url) {
    if (!url.path) {
      return aPath;
    }
    path = url.path;
  }
  var isAbsolute = exports.isAbsolute(path);

  var parts = path.split(/\/+/);
  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];
    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }
  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }
  return path;
}
exports.normalize = normalize;

/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */
function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }
  if (aPath === "") {
    aPath = ".";
  }
  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);
  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  }

  // `join(foo, '//www.example.org')`
  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }
    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  }

  // `join('http://', 'www.example.com')`
  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/'
    ? aPath
    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }
  return joined;
}
exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || !!aPath.match(urlRegexp);
};

/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */
function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, '');

  // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.
  var level = 0;
  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");
    if (index < 0) {
      return aPath;
    }

    // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.
    aRoot = aRoot.slice(0, index);
    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  }

  // Make sure we add a "../" for each component we removed from the root.
  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;

var supportsNullProto = (function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}());

function identity (s) {
  return s;
}

/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */
function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9 /* "__proto__".length */) {
    return false;
  }

  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
      s.charCodeAt(length - 9) !== 95  /* '_' */) {
    return false;
  }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36 /* '$' */) {
      return false;
    }
  }

  return true;
}

/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */
function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = mappingA.source - mappingB.source;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  return mappingA.name - mappingB.name;
}
exports.compareByOriginalPositions = compareByOriginalPositions;

/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */
function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = mappingA.source - mappingB.source;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return mappingA.name - mappingB.name;
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}

/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */
function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
});

var util$1 = interopDefault(util);
var compareByGeneratedPositionsInflated = util.compareByGeneratedPositionsInflated;
var compareByGeneratedPositionsDeflated = util.compareByGeneratedPositionsDeflated;
var compareByOriginalPositions = util.compareByOriginalPositions;
var fromSetString = util.fromSetString;
var toSetString = util.toSetString;
var relative = util.relative;
var isAbsolute = util.isAbsolute;
var join = util.join;
var normalize = util.normalize;
var urlGenerate = util.urlGenerate;
var urlParse = util.urlParse;
var getArg = util.getArg;

var require$$0$30 = Object.freeze({
  default: util$1,
  compareByGeneratedPositionsInflated: compareByGeneratedPositionsInflated,
  compareByGeneratedPositionsDeflated: compareByGeneratedPositionsDeflated,
  compareByOriginalPositions: compareByOriginalPositions,
  fromSetString: fromSetString,
  toSetString: toSetString,
  relative: relative,
  isAbsolute: isAbsolute,
  join: join,
  normalize: normalize,
  urlGenerate: urlGenerate,
  urlParse: urlParse,
  getArg: getArg
});

var arraySet = createCommonjsModule(function (module, exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = interopDefault(require$$0$30);
var has = Object.prototype.hasOwnProperty;

/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */
function ArraySet() {
  this._array = [];
  this._set = Object.create(null);
}

/**
 * Static method for creating ArraySet instances from an existing array.
 */
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};

/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */
ArraySet.prototype.size = function ArraySet_size() {
  return Object.getOwnPropertyNames(this._set).length;
};

/**
 * Add the given string to this set.
 *
 * @param String aStr
 */
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = util.toSetString(aStr);
  var isDuplicate = has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    this._set[sStr] = idx;
  }
};

/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */
ArraySet.prototype.has = function ArraySet_has(aStr) {
  var sStr = util.toSetString(aStr);
  return has.call(this._set, sStr);
};

/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  var sStr = util.toSetString(aStr);
  if (has.call(this._set, sStr)) {
    return this._set[sStr];
  }
  throw new Error('"' + aStr + '" is not in the set.');
};

/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */
ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error('No element indexed by ' + aIdx);
};

/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */
ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

exports.ArraySet = ArraySet;
});

var arraySet$1 = interopDefault(arraySet);
var ArraySet = arraySet.ArraySet;

var require$$2$14 = Object.freeze({
  default: arraySet$1,
  ArraySet: ArraySet
});

var mappingList = createCommonjsModule(function (module, exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = interopDefault(require$$0$30);

/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */
function generatedPositionAfter(mappingA, mappingB) {
  // Optimized for most common case
  var lineA = mappingA.generatedLine;
  var lineB = mappingB.generatedLine;
  var columnA = mappingA.generatedColumn;
  var columnB = mappingB.generatedColumn;
  return lineB > lineA || lineB == lineA && columnB >= columnA ||
         util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}

/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */
function MappingList() {
  this._array = [];
  this._sorted = true;
  // Serves as infimum
  this._last = {generatedLine: -1, generatedColumn: 0};
}

/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */
MappingList.prototype.unsortedForEach =
  function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
  };

/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */
MappingList.prototype.add = function MappingList_add(aMapping) {
  if (generatedPositionAfter(this._last, aMapping)) {
    this._last = aMapping;
    this._array.push(aMapping);
  } else {
    this._sorted = false;
    this._array.push(aMapping);
  }
};

/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */
MappingList.prototype.toArray = function MappingList_toArray() {
  if (!this._sorted) {
    this._array.sort(util.compareByGeneratedPositionsInflated);
    this._sorted = true;
  }
  return this._array;
};

exports.MappingList = MappingList;
});

var mappingList$1 = interopDefault(mappingList);
var MappingList = mappingList.MappingList;

var require$$0$31 = Object.freeze({
  default: mappingList$1,
  MappingList: MappingList
});

var sourceMapGenerator = createCommonjsModule(function (module, exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var base64VLQ = interopDefault(require$$1$18);
var util = interopDefault(require$$0$30);
var ArraySet = interopDefault(require$$2$14).ArraySet;
var MappingList = interopDefault(require$$0$31).MappingList;

/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */
function SourceMapGenerator(aArgs) {
  if (!aArgs) {
    aArgs = {};
  }
  this._file = util.getArg(aArgs, 'file', null);
  this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
  this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
  this._sources = new ArraySet();
  this._names = new ArraySet();
  this._mappings = new MappingList();
  this._sourcesContents = null;
}

SourceMapGenerator.prototype._version = 3;

/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */
SourceMapGenerator.fromSourceMap =
  function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
      file: aSourceMapConsumer.file,
      sourceRoot: sourceRoot
    });
    aSourceMapConsumer.eachMapping(function (mapping) {
      var newMapping = {
        generated: {
          line: mapping.generatedLine,
          column: mapping.generatedColumn
        }
      };

      if (mapping.source != null) {
        newMapping.source = mapping.source;
        if (sourceRoot != null) {
          newMapping.source = util.relative(sourceRoot, newMapping.source);
        }

        newMapping.original = {
          line: mapping.originalLine,
          column: mapping.originalColumn
        };

        if (mapping.name != null) {
          newMapping.name = mapping.name;
        }
      }

      generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        generator.setSourceContent(sourceFile, content);
      }
    });
    return generator;
  };

/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */
SourceMapGenerator.prototype.addMapping =
  function SourceMapGenerator_addMapping(aArgs) {
    var generated = util.getArg(aArgs, 'generated');
    var original = util.getArg(aArgs, 'original', null);
    var source = util.getArg(aArgs, 'source', null);
    var name = util.getArg(aArgs, 'name', null);

    if (!this._skipValidation) {
      this._validateMapping(generated, original, source, name);
    }

    if (source != null) {
      source = String(source);
      if (!this._sources.has(source)) {
        this._sources.add(source);
      }
    }

    if (name != null) {
      name = String(name);
      if (!this._names.has(name)) {
        this._names.add(name);
      }
    }

    this._mappings.add({
      generatedLine: generated.line,
      generatedColumn: generated.column,
      originalLine: original != null && original.line,
      originalColumn: original != null && original.column,
      source: source,
      name: name
    });
  };

/**
 * Set the source content for a source file.
 */
SourceMapGenerator.prototype.setSourceContent =
  function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) {
      source = util.relative(this._sourceRoot, source);
    }

    if (aSourceContent != null) {
      // Add the source content to the _sourcesContents map.
      // Create a new _sourcesContents map if the property is null.
      if (!this._sourcesContents) {
        this._sourcesContents = Object.create(null);
      }
      this._sourcesContents[util.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
      // Remove the source file from the _sourcesContents map.
      // If the _sourcesContents map is empty, set the property to null.
      delete this._sourcesContents[util.toSetString(source)];
      if (Object.keys(this._sourcesContents).length === 0) {
        this._sourcesContents = null;
      }
    }
  };

/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */
SourceMapGenerator.prototype.applySourceMap =
  function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile = aSourceFile;
    // If aSourceFile is omitted, we will use the file property of the SourceMap
    if (aSourceFile == null) {
      if (aSourceMapConsumer.file == null) {
        throw new Error(
          'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' +
          'or the source map\'s "file" property. Both were omitted.'
        );
      }
      sourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    // Make "sourceFile" relative if an absolute Url is passed.
    if (sourceRoot != null) {
      sourceFile = util.relative(sourceRoot, sourceFile);
    }
    // Applying the SourceMap can add and remove items from the sources and
    // the names array.
    var newSources = new ArraySet();
    var newNames = new ArraySet();

    // Find mappings for the "sourceFile"
    this._mappings.unsortedForEach(function (mapping) {
      if (mapping.source === sourceFile && mapping.originalLine != null) {
        // Check if it can be mapped by the source map, then update the mapping.
        var original = aSourceMapConsumer.originalPositionFor({
          line: mapping.originalLine,
          column: mapping.originalColumn
        });
        if (original.source != null) {
          // Copy mapping
          mapping.source = original.source;
          if (aSourceMapPath != null) {
            mapping.source = util.join(aSourceMapPath, mapping.source)
          }
          if (sourceRoot != null) {
            mapping.source = util.relative(sourceRoot, mapping.source);
          }
          mapping.originalLine = original.line;
          mapping.originalColumn = original.column;
          if (original.name != null) {
            mapping.name = original.name;
          }
        }
      }

      var source = mapping.source;
      if (source != null && !newSources.has(source)) {
        newSources.add(source);
      }

      var name = mapping.name;
      if (name != null && !newNames.has(name)) {
        newNames.add(name);
      }

    }, this);
    this._sources = newSources;
    this._names = newNames;

    // Copy sourcesContents of applied map.
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aSourceMapPath != null) {
          sourceFile = util.join(aSourceMapPath, sourceFile);
        }
        if (sourceRoot != null) {
          sourceFile = util.relative(sourceRoot, sourceFile);
        }
        this.setSourceContent(sourceFile, content);
      }
    }, this);
  };

/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */
SourceMapGenerator.prototype._validateMapping =
  function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource,
                                              aName) {
    if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
        && aGenerated.line > 0 && aGenerated.column >= 0
        && !aOriginal && !aSource && !aName) {
      // Case 1.
      return;
    }
    else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
             && aOriginal && 'line' in aOriginal && 'column' in aOriginal
             && aGenerated.line > 0 && aGenerated.column >= 0
             && aOriginal.line > 0 && aOriginal.column >= 0
             && aSource) {
      // Cases 2 and 3.
      return;
    }
    else {
      throw new Error('Invalid mapping: ' + JSON.stringify({
        generated: aGenerated,
        source: aSource,
        original: aOriginal,
        name: aName
      }));
    }
  };

/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */
SourceMapGenerator.prototype._serializeMappings =
  function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = '';
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;

    var mappings = this._mappings.toArray();
    for (var i = 0, len = mappings.length; i < len; i++) {
      mapping = mappings[i];
      next = ''

      if (mapping.generatedLine !== previousGeneratedLine) {
        previousGeneratedColumn = 0;
        while (mapping.generatedLine !== previousGeneratedLine) {
          next += ';';
          previousGeneratedLine++;
        }
      }
      else {
        if (i > 0) {
          if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
            continue;
          }
          next += ',';
        }
      }

      next += base64VLQ.encode(mapping.generatedColumn
                                 - previousGeneratedColumn);
      previousGeneratedColumn = mapping.generatedColumn;

      if (mapping.source != null) {
        sourceIdx = this._sources.indexOf(mapping.source);
        next += base64VLQ.encode(sourceIdx - previousSource);
        previousSource = sourceIdx;

        // lines are stored 0-based in SourceMap spec version 3
        next += base64VLQ.encode(mapping.originalLine - 1
                                   - previousOriginalLine);
        previousOriginalLine = mapping.originalLine - 1;

        next += base64VLQ.encode(mapping.originalColumn
                                   - previousOriginalColumn);
        previousOriginalColumn = mapping.originalColumn;

        if (mapping.name != null) {
          nameIdx = this._names.indexOf(mapping.name);
          next += base64VLQ.encode(nameIdx - previousName);
          previousName = nameIdx;
        }
      }

      result += next;
    }

    return result;
  };

SourceMapGenerator.prototype._generateSourcesContent =
  function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function (source) {
      if (!this._sourcesContents) {
        return null;
      }
      if (aSourceRoot != null) {
        source = util.relative(aSourceRoot, source);
      }
      var key = util.toSetString(source);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, key)
        ? this._sourcesContents[key]
        : null;
    }, this);
  };

/**
 * Externalize the source map.
 */
SourceMapGenerator.prototype.toJSON =
  function SourceMapGenerator_toJSON() {
    var map = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    if (this._file != null) {
      map.file = this._file;
    }
    if (this._sourceRoot != null) {
      map.sourceRoot = this._sourceRoot;
    }
    if (this._sourcesContents) {
      map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    }

    return map;
  };

/**
 * Render the source map being generated to a string.
 */
SourceMapGenerator.prototype.toString =
  function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
  };

exports.SourceMapGenerator = SourceMapGenerator;
});

var sourceMapGenerator$1 = interopDefault(sourceMapGenerator);
var SourceMapGenerator$1 = sourceMapGenerator.SourceMapGenerator;

var require$$1$17 = Object.freeze({
  default: sourceMapGenerator$1,
  SourceMapGenerator: SourceMapGenerator$1
});

var binarySearch = createCommonjsModule(function (module, exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;

/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */
function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);
  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  }
  else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    }

    // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  }
  else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    }

    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}

/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */
exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
  if (index < 0) {
    return -1;
  }

  // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.
  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }
    --index;
  }

  return index;
};
});

var binarySearch$1 = interopDefault(binarySearch);
var search = binarySearch.search;
var LEAST_UPPER_BOUND = binarySearch.LEAST_UPPER_BOUND;
var GREATEST_LOWER_BOUND = binarySearch.GREATEST_LOWER_BOUND;

var require$$3$8 = Object.freeze({
  default: binarySearch$1,
  search: search,
  LEAST_UPPER_BOUND: LEAST_UPPER_BOUND,
  GREATEST_LOWER_BOUND: GREATEST_LOWER_BOUND
});

var quickSort = createCommonjsModule(function (module, exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}

/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */
function randomIntInRange(low, high) {
  return Math.round(low + (Math.random() * (high - low)));
}

/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */
function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.

  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.

    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;

    swap(ary, pivotIndex, r);
    var pivot = ary[r];

    // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1;

    // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}

/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */
exports.quickSort = function (ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};
});

var quickSort$1 = interopDefault(quickSort);
var quickSort$$1 = quickSort.quickSort;


var require$$0$32 = Object.freeze({
  default: quickSort$1,
  quickSort: quickSort$$1
});

var sourceMapConsumer = createCommonjsModule(function (module, exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = interopDefault(require$$0$30);
var binarySearch = interopDefault(require$$3$8);
var ArraySet = interopDefault(require$$2$14).ArraySet;
var base64VLQ = interopDefault(require$$1$18);
var quickSort = interopDefault(require$$0$32).quickSort;

function SourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
  }

  return sourceMap.sections != null
    ? new IndexedSourceMapConsumer(sourceMap)
    : new BasicSourceMapConsumer(sourceMap);
}

SourceMapConsumer.fromSourceMap = function(aSourceMap) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap);
}

/**
 * The version of the source mapping spec that we are consuming.
 */
SourceMapConsumer.prototype._version = 3;

// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  get: function () {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});

SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  get: function () {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator =
  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
SourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;

SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;

/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */
SourceMapConsumer.prototype.eachMapping =
  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

    var mappings;
    switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
    }

    var sourceRoot = this.sourceRoot;
    mappings.map(function (mapping) {
      var source = mapping.source === null ? null : this._sources.at(mapping.source);
      if (source != null && sourceRoot != null) {
        source = util.join(sourceRoot, source);
      }
      return {
        source: source,
        generatedLine: mapping.generatedLine,
        generatedColumn: mapping.generatedColumn,
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: mapping.name === null ? null : this._names.at(mapping.name)
      };
    }, this).forEach(aCallback, context);
  };

/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.
 *   - column: Optional. the column number in the original source.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.
 *   - column: The column number in the generated source, or null.
 */
SourceMapConsumer.prototype.allGeneratedPositionsFor =
  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');

    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
      source: util.getArg(aArgs, 'source'),
      originalLine: line,
      originalColumn: util.getArg(aArgs, 'column', 0)
    };

    if (this.sourceRoot != null) {
      needle.source = util.relative(this.sourceRoot, needle.source);
    }
    if (!this._sources.has(needle.source)) {
      return [];
    }
    needle.source = this._sources.indexOf(needle.source);

    var mappings = [];

    var index = this._findMapping(needle,
                                  this._originalMappings,
                                  "originalLine",
                                  "originalColumn",
                                  util.compareByOriginalPositions,
                                  binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (aArgs.column === undefined) {
        var originalLine = mapping.originalLine;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we found. Since
        // mappings are sorted, this is guaranteed to find all mappings for
        // the line we found.
        while (mapping && mapping.originalLine === originalLine) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping.originalColumn;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we were searching for.
        // Since mappings are sorted, this is guaranteed to find all mappings for
        // the line we are searching for.
        while (mapping &&
               mapping.originalLine === line &&
               mapping.originalColumn == originalColumn) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      }
    }

    return mappings;
  };

exports.SourceMapConsumer = SourceMapConsumer;

/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The only parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */
function BasicSourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources');
  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.
  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null);

  // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.
  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  sources = sources
    .map(String)
    // Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)
    // Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function (source) {
      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
        ? util.relative(sourceRoot, source)
        : source;
    });

  // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.
  this._names = ArraySet.fromArray(names.map(String), true);
  this._sources = ArraySet.fromArray(sources, true);

  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @returns BasicSourceMapConsumer
 */
BasicSourceMapConsumer.fromSourceMap =
  function SourceMapConsumer_fromSourceMap(aSourceMap) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);

    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                                                            smc.sourceRoot);
    smc.file = aSourceMap._file;

    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.

    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];

    for (var i = 0, length = generatedMappings.length; i < length; i++) {
      var srcMapping = generatedMappings[i];
      var destMapping = new Mapping;
      destMapping.generatedLine = srcMapping.generatedLine;
      destMapping.generatedColumn = srcMapping.generatedColumn;

      if (srcMapping.source) {
        destMapping.source = sources.indexOf(srcMapping.source);
        destMapping.originalLine = srcMapping.originalLine;
        destMapping.originalColumn = srcMapping.originalColumn;

        if (srcMapping.name) {
          destMapping.name = names.indexOf(srcMapping.name);
        }

        destOriginalMappings.push(destMapping);
      }

      destGeneratedMappings.push(destMapping);
    }

    quickSort(smc.__originalMappings, util.compareByOriginalPositions);

    return smc;
  };

/**
 * The version of the source mapping spec that we are consuming.
 */
BasicSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function () {
    return this._sources.toArray().map(function (s) {
      return this.sourceRoot != null ? util.join(this.sourceRoot, s) : s;
    }, this);
  }
});

/**
 * Provide the JIT with a nice shape / hidden class.
 */
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
BasicSourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;

    while (index < length) {
      if (aStr.charAt(index) === ';') {
        generatedLine++;
        index++;
        previousGeneratedColumn = 0;
      }
      else if (aStr.charAt(index) === ',') {
        index++;
      }
      else {
        mapping = new Mapping();
        mapping.generatedLine = generatedLine;

        // Because each offset is encoded relative to the previous one,
        // many segments often have the same encoding. We can exploit this
        // fact by caching the parsed variable length fields of each segment,
        // allowing us to avoid a second parse if we encounter the same
        // segment again.
        for (end = index; end < length; end++) {
          if (this._charIsMappingSeparator(aStr, end)) {
            break;
          }
        }
        str = aStr.slice(index, end);

        segment = cachedSegments[str];
        if (segment) {
          index += str.length;
        } else {
          segment = [];
          while (index < end) {
            base64VLQ.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }

          if (segment.length === 2) {
            throw new Error('Found a source, but no line and column');
          }

          if (segment.length === 3) {
            throw new Error('Found a source and line, but no column');
          }

          cachedSegments[str] = segment;
        }

        // Generated column.
        mapping.generatedColumn = previousGeneratedColumn + segment[0];
        previousGeneratedColumn = mapping.generatedColumn;

        if (segment.length > 1) {
          // Original source.
          mapping.source = previousSource + segment[1];
          previousSource += segment[1];

          // Original line.
          mapping.originalLine = previousOriginalLine + segment[2];
          previousOriginalLine = mapping.originalLine;
          // Lines are stored 0-based
          mapping.originalLine += 1;

          // Original column.
          mapping.originalColumn = previousOriginalColumn + segment[3];
          previousOriginalColumn = mapping.originalColumn;

          if (segment.length > 4) {
            // Original name.
            mapping.name = previousName + segment[4];
            previousName += segment[4];
          }
        }

        generatedMappings.push(mapping);
        if (typeof mapping.originalLine === 'number') {
          originalMappings.push(mapping);
        }
      }
    }

    quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;

    quickSort(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
  };

/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */
BasicSourceMapConsumer.prototype._findMapping =
  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                         aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.

    if (aNeedle[aLineName] <= 0) {
      throw new TypeError('Line must be greater than or equal to 1, got '
                          + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError('Column must be greater than or equal to 0, got '
                          + aNeedle[aColumnName]);
    }

    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
  };

/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */
BasicSourceMapConsumer.prototype.computeColumnSpans =
  function SourceMapConsumer_computeColumnSpans() {
    for (var index = 0; index < this._generatedMappings.length; ++index) {
      var mapping = this._generatedMappings[index];

      // Mappings do not contain a field for the last generated columnt. We
      // can come up with an optimistic estimate, however, by assuming that
      // mappings are contiguous (i.e. given two consecutive mappings, the
      // first mapping ends where the second one starts).
      if (index + 1 < this._generatedMappings.length) {
        var nextMapping = this._generatedMappings[index + 1];

        if (mapping.generatedLine === nextMapping.generatedLine) {
          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
          continue;
        }
      }

      // The last mapping for each line spans the entire line.
      mapping.lastGeneratedColumn = Infinity;
    }
  };

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.
 *   - column: The column number in the generated source.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.
 *   - column: The column number in the original source, or null.
 *   - name: The original identifier, or null.
 */
BasicSourceMapConsumer.prototype.originalPositionFor =
  function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      util.compareByGeneratedPositionsDeflated,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._generatedMappings[index];

      if (mapping.generatedLine === needle.generatedLine) {
        var source = util.getArg(mapping, 'source', null);
        if (source !== null) {
          source = this._sources.at(source);
          if (this.sourceRoot != null) {
            source = util.join(this.sourceRoot, source);
          }
        }
        var name = util.getArg(mapping, 'name', null);
        if (name !== null) {
          name = this._names.at(name);
        }
        return {
          source: source,
          line: util.getArg(mapping, 'originalLine', null),
          column: util.getArg(mapping, 'originalColumn', null),
          name: name
        };
      }
    }

    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
  function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() &&
      !this.sourcesContent.some(function (sc) { return sc == null; });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
BasicSourceMapConsumer.prototype.sourceContentFor =
  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }

    if (this.sourceRoot != null) {
      aSource = util.relative(this.sourceRoot, aSource);
    }

    if (this._sources.has(aSource)) {
      return this.sourcesContent[this._sources.indexOf(aSource)];
    }

    var url;
    if (this.sourceRoot != null
        && (url = util.urlParse(this.sourceRoot))) {
      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
      // many users. We can help them out when they expect file:// URIs to
      // behave like it would if they were running a local HTTP server. See
      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
      var fileUriAbsPath = aSource.replace(/^file:\/\//, "");
      if (url.scheme == "file"
          && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
      }

      if ((!url.path || url.path == "/")
          && this._sources.has("/" + aSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + aSource)];
      }
    }

    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.
 *   - column: The column number in the original source.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.
 *   - column: The column number in the generated source, or null.
 */
BasicSourceMapConsumer.prototype.generatedPositionFor =
  function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    if (this.sourceRoot != null) {
      source = util.relative(this.sourceRoot, source);
    }
    if (!this._sources.has(source)) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }
    source = this._sources.indexOf(source);

    var needle = {
      source: source,
      originalLine: util.getArg(aArgs, 'line'),
      originalColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util.compareByOriginalPositions,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (mapping.source === needle.source) {
        return {
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        };
      }
    }

    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };

exports.BasicSourceMapConsumer = BasicSourceMapConsumer;

/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The only parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */
function IndexedSourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet();
  this._names = new ArraySet();

  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }
    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line ||
        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }
    lastOffset = offset;

    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'))
    }
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

/**
 * The version of the source mapping spec that we are consuming.
 */
IndexedSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function () {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.
 *   - column: The column number in the generated source.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.
 *   - column: The column number in the original source, or null.
 *   - name: The original identifier, or null.
 */
IndexedSourceMapConsumer.prototype.originalPositionFor =
  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections,
      function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }

        return (needle.generatedColumn -
                section.generatedOffset.generatedColumn);
      });
    var section = this._sections[sectionIndex];

    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }

    return section.consumer.originalPositionFor({
      line: needle.generatedLine -
        (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn -
        (section.generatedOffset.generatedLine === needle.generatedLine
         ? section.generatedOffset.generatedColumn - 1
         : 0),
      bias: aArgs.bias
    });
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function (s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
IndexedSourceMapConsumer.prototype.sourceContentFor =
  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.
 *   - column: The column number in the original source.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.
 *   - column: The column number in the generated source, or null.
 */
IndexedSourceMapConsumer.prototype.generatedPositionFor =
  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      // Only consider this section if the requested source is in the list of
      // sources of the consumer.
      if (section.consumer.sources.indexOf(util.getArg(aArgs, 'source')) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line +
            (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column +
            (section.generatedOffset.generatedLine === generatedPosition.line
             ? section.generatedOffset.generatedColumn - 1
             : 0)
        };
        return ret;
      }
    }

    return {
      line: null,
      column: null
    };
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
IndexedSourceMapConsumer.prototype._parseMappings =
  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var sectionMappings = section.consumer._generatedMappings;
      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping = sectionMappings[j];

        var source = section.consumer._sources.at(mapping.source);
        if (section.consumer.sourceRoot !== null) {
          source = util.join(section.consumer.sourceRoot, source);
        }
        this._sources.add(source);
        source = this._sources.indexOf(source);

        var name = section.consumer._names.at(mapping.name);
        this._names.add(name);
        name = this._names.indexOf(name);

        // The mappings coming from the consumer for the section have
        // generated positions relative to the start of the section, so we
        // need to offset them to be relative to the start of the concatenated
        // generated file.
        var adjustedMapping = {
          source: source,
          generatedLine: mapping.generatedLine +
            (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping.generatedColumn +
            (section.generatedOffset.generatedLine === mapping.generatedLine
            ? section.generatedOffset.generatedColumn - 1
            : 0),
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: name
        };

        this.__generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === 'number') {
          this.__originalMappings.push(adjustedMapping);
        }
      }
    }

    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort(this.__originalMappings, util.compareByOriginalPositions);
  };

exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;
});

var sourceMapConsumer$1 = interopDefault(sourceMapConsumer);
var IndexedSourceMapConsumer = sourceMapConsumer.IndexedSourceMapConsumer;
var BasicSourceMapConsumer = sourceMapConsumer.BasicSourceMapConsumer;
var SourceMapConsumer$1 = sourceMapConsumer.SourceMapConsumer;

var require$$1$19 = Object.freeze({
  default: sourceMapConsumer$1,
  IndexedSourceMapConsumer: IndexedSourceMapConsumer,
  BasicSourceMapConsumer: BasicSourceMapConsumer,
  SourceMapConsumer: SourceMapConsumer$1
});

var sourceNode = createCommonjsModule(function (module, exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var SourceMapGenerator = interopDefault(require$$1$17).SourceMapGenerator;
var util = interopDefault(require$$0$30);

// Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).
var REGEX_NEWLINE = /(\r?\n)/;

// Newline character code for charCodeAt() comparisons
var NEWLINE_CODE = 10;

// Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!
var isSourceNode = "$$$isSourceNode$$$";

/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */
function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
  this.children = [];
  this.sourceContents = {};
  this.line = aLine == null ? null : aLine;
  this.column = aColumn == null ? null : aColumn;
  this.source = aSource == null ? null : aSource;
  this.name = aName == null ? null : aName;
  this[isSourceNode] = true;
  if (aChunks != null) this.add(aChunks);
}

/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */
SourceNode.fromStringWithSourceMap =
  function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    // The SourceNode we want to fill with the generated code
    // and the SourceMap
    var node = new SourceNode();

    // All even indices of this array are one line of the generated code,
    // while all odd indices are the newlines between two adjacent lines
    // (since `REGEX_NEWLINE` captures its match).
    // Processed fragments are removed from this array, by calling `shiftNextLine`.
    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
    var shiftNextLine = function() {
      var lineContents = remainingLines.shift();
      // The last line of a file might not have a newline.
      var newLine = remainingLines.shift() || "";
      return lineContents + newLine;
    };

    // We need to remember the position of "remainingLines"
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;

    // The generate SourceNodes we need a code range.
    // To extract it current and last mapping is used.
    // Here we store the last mapping.
    var lastMapping = null;

    aSourceMapConsumer.eachMapping(function (mapping) {
      if (lastMapping !== null) {
        // We add the code from "lastMapping" to "mapping":
        // First check if there is a new line in between.
        if (lastGeneratedLine < mapping.generatedLine) {
          // Associate first line with "lastMapping"
          addMappingWithCode(lastMapping, shiftNextLine());
          lastGeneratedLine++;
          lastGeneratedColumn = 0;
          // The remaining code is added without mapping
        } else {
          // There is no new line in between.
          // Associate the code between "lastGeneratedColumn" and
          // "mapping.generatedColumn" with "lastMapping"
          var nextLine = remainingLines[0];
          var code = nextLine.substr(0, mapping.generatedColumn -
                                        lastGeneratedColumn);
          remainingLines[0] = nextLine.substr(mapping.generatedColumn -
                                              lastGeneratedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
          addMappingWithCode(lastMapping, code);
          // No more remaining code, continue
          lastMapping = mapping;
          return;
        }
      }
      // We add the generated code until the first mapping
      // to the SourceNode without any mapping.
      // Each line is added as separate string.
      while (lastGeneratedLine < mapping.generatedLine) {
        node.add(shiftNextLine());
        lastGeneratedLine++;
      }
      if (lastGeneratedColumn < mapping.generatedColumn) {
        var nextLine = remainingLines[0];
        node.add(nextLine.substr(0, mapping.generatedColumn));
        remainingLines[0] = nextLine.substr(mapping.generatedColumn);
        lastGeneratedColumn = mapping.generatedColumn;
      }
      lastMapping = mapping;
    }, this);
    // We have processed all mappings.
    if (remainingLines.length > 0) {
      if (lastMapping) {
        // Associate the remaining code in the current line with "lastMapping"
        addMappingWithCode(lastMapping, shiftNextLine());
      }
      // and add the remaining lines without any mapping
      node.add(remainingLines.join(""));
    }

    // Copy sourcesContent into SourceNode
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aRelativePath != null) {
          sourceFile = util.join(aRelativePath, sourceFile);
        }
        node.setSourceContent(sourceFile, content);
      }
    });

    return node;

    function addMappingWithCode(mapping, code) {
      if (mapping === null || mapping.source === undefined) {
        node.add(code);
      } else {
        var source = aRelativePath
          ? util.join(aRelativePath, mapping.source)
          : mapping.source;
        node.add(new SourceNode(mapping.originalLine,
                                mapping.originalColumn,
                                source,
                                code,
                                mapping.name));
      }
    }
  };

/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.add = function SourceNode_add(aChunk) {
  if (Array.isArray(aChunk)) {
    aChunk.forEach(function (chunk) {
      this.add(chunk);
    }, this);
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    if (aChunk) {
      this.children.push(aChunk);
    }
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
  if (Array.isArray(aChunk)) {
    for (var i = aChunk.length-1; i >= 0; i--) {
      this.prepend(aChunk[i]);
    }
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    this.children.unshift(aChunk);
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walk = function SourceNode_walk(aFn) {
  var chunk;
  for (var i = 0, len = this.children.length; i < len; i++) {
    chunk = this.children[i];
    if (chunk[isSourceNode]) {
      chunk.walk(aFn);
    }
    else {
      if (chunk !== '') {
        aFn(chunk, { source: this.source,
                     line: this.line,
                     column: this.column,
                     name: this.name });
      }
    }
  }
};

/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */
SourceNode.prototype.join = function SourceNode_join(aSep) {
  var newChildren;
  var i;
  var len = this.children.length;
  if (len > 0) {
    newChildren = [];
    for (i = 0; i < len-1; i++) {
      newChildren.push(this.children[i]);
      newChildren.push(aSep);
    }
    newChildren.push(this.children[i]);
    this.children = newChildren;
  }
  return this;
};

/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */
SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
  var lastChild = this.children[this.children.length - 1];
  if (lastChild[isSourceNode]) {
    lastChild.replaceRight(aPattern, aReplacement);
  }
  else if (typeof lastChild === 'string') {
    this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
  }
  else {
    this.children.push(''.replace(aPattern, aReplacement));
  }
  return this;
};

/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */
SourceNode.prototype.setSourceContent =
  function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
  };

/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walkSourceContents =
  function SourceNode_walkSourceContents(aFn) {
    for (var i = 0, len = this.children.length; i < len; i++) {
      if (this.children[i][isSourceNode]) {
        this.children[i].walkSourceContents(aFn);
      }
    }

    var sources = Object.keys(this.sourceContents);
    for (var i = 0, len = sources.length; i < len; i++) {
      aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
    }
  };

/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */
SourceNode.prototype.toString = function SourceNode_toString() {
  var str = "";
  this.walk(function (chunk) {
    str += chunk;
  });
  return str;
};

/**
 * Returns the string representation of this source node along with a source
 * map.
 */
SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
  var generated = {
    code: "",
    line: 1,
    column: 0
  };
  var map = new SourceMapGenerator(aArgs);
  var sourceMappingActive = false;
  var lastOriginalSource = null;
  var lastOriginalLine = null;
  var lastOriginalColumn = null;
  var lastOriginalName = null;
  this.walk(function (chunk, original) {
    generated.code += chunk;
    if (original.source !== null
        && original.line !== null
        && original.column !== null) {
      if(lastOriginalSource !== original.source
         || lastOriginalLine !== original.line
         || lastOriginalColumn !== original.column
         || lastOriginalName !== original.name) {
        map.addMapping({
          source: original.source,
          original: {
            line: original.line,
            column: original.column
          },
          generated: {
            line: generated.line,
            column: generated.column
          },
          name: original.name
        });
      }
      lastOriginalSource = original.source;
      lastOriginalLine = original.line;
      lastOriginalColumn = original.column;
      lastOriginalName = original.name;
      sourceMappingActive = true;
    } else if (sourceMappingActive) {
      map.addMapping({
        generated: {
          line: generated.line,
          column: generated.column
        }
      });
      lastOriginalSource = null;
      sourceMappingActive = false;
    }
    for (var idx = 0, length = chunk.length; idx < length; idx++) {
      if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
        generated.line++;
        generated.column = 0;
        // Mappings end at eol
        if (idx + 1 === length) {
          lastOriginalSource = null;
          sourceMappingActive = false;
        } else if (sourceMappingActive) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
      } else {
        generated.column++;
      }
    }
  });
  this.walkSourceContents(function (sourceFile, sourceContent) {
    map.setSourceContent(sourceFile, sourceContent);
  });

  return { code: generated.code, map: map };
};

exports.SourceNode = SourceNode;
});

var sourceNode$1 = interopDefault(sourceNode);
var SourceNode$1 = sourceNode.SourceNode;

var require$$0$33 = Object.freeze({
  default: sourceNode$1,
  SourceNode: SourceNode$1
});

var sourceMap = createCommonjsModule(function (module, exports) {
/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
exports.SourceMapGenerator = interopDefault(require$$1$17).SourceMapGenerator;
exports.SourceMapConsumer = interopDefault(require$$1$19).SourceMapConsumer;
exports.SourceNode = interopDefault(require$$0$33).SourceNode;
});

var sourceMap$1 = interopDefault(sourceMap);
var SourceNode = sourceMap.SourceNode;
var SourceMapConsumer = sourceMap.SourceMapConsumer;
var SourceMapGenerator = sourceMap.SourceMapGenerator;

var require$$0$28 = Object.freeze({
	default: sourceMap$1,
	SourceNode: SourceNode,
	SourceMapConsumer: SourceMapConsumer,
	SourceMapGenerator: SourceMapGenerator
});

var translateWithSourceMap$1 = createCommonjsModule(function (module) {
var SourceMapGenerator = interopDefault(require$$0$28).SourceMapGenerator;
var SourceNode = interopDefault(require$$0$28).SourceNode;

// Our own implementation of SourceNode#toStringWithSourceMap,
// since SourceNode doesn't allow multiple references to original source.
// Also, as we know structure of result we could be optimize generation
// (currently it's ~40% faster).
function walk(node, fn) {
    for (var chunk, i = 0; i < node.children.length; i++) {
        chunk = node.children[i];

        if (chunk instanceof SourceNode) {
            // this is a hack, because source maps doesn't support for 1(generated):N(original)
            // if (chunk.merged) {
            //     fn('', chunk);
            // }

            walk(chunk, fn);
        } else {
            fn(chunk, node);
        }
    }
}

function generateSourceMap(root) {
    var map = new SourceMapGenerator();
    var css = '';
    var sourceMappingActive = false;
    var lastOriginalLine = null;
    var lastOriginalColumn = null;
    var lastIndexOfNewline;
    var generated = {
        line: 1,
        column: 0
    };
    var activatedMapping = {
        generated: generated
    };

    walk(root, function(chunk, original) {
        if (original.line !== null &&
            original.column !== null) {
            if (lastOriginalLine !== original.line ||
                lastOriginalColumn !== original.column) {
                map.addMapping({
                    source: original.source,
                    original: original,
                    generated: generated
                });
            }

            lastOriginalLine = original.line;
            lastOriginalColumn = original.column;
            sourceMappingActive = true;
        } else if (sourceMappingActive) {
            map.addMapping(activatedMapping);
            sourceMappingActive = false;
        }

        css += chunk;

        lastIndexOfNewline = chunk.lastIndexOf('\n');
        if (lastIndexOfNewline !== -1) {
            generated.line += chunk.match(/\n/g).length;
            generated.column = chunk.length - lastIndexOfNewline - 1;
        } else {
            generated.column += chunk.length;
        }
    });

    return {
        css: css,
        map: map
    };
}

function createAnonymousSourceNode(children) {
    return new SourceNode(
        null,
        null,
        null,
        children
    );
}

function createSourceNode(info, children) {
    if (info.primary) {
        // special marker node to add several references to original
        // var merged = createSourceNode(info.merged, []);
        // merged.merged = true;
        // children.unshift(merged);

        // use recursion, because primary can also has a primary/merged info
        return createSourceNode(info.primary, children);
    }

    return new SourceNode(
        info.line,
        info.column - 1,
        info.source,
        children
    );
}

function each(list) {
    if (list.head === null) {
        return '';
    }

    if (list.head === list.tail) {
        return translate(list.head.data);
    }

    return list.map(translate).join('');
}

function eachDelim(list, delimeter) {
    if (list.head === null) {
        return '';
    }

    if (list.head === list.tail) {
        return translate(list.head.data);
    }

    return list.map(translate).join(delimeter);
}

function translate(node) {
    switch (node.type) {
        case 'StyleSheet':
            return createAnonymousSourceNode(node.rules.map(translate));

        case 'Atrule':
            var nodes = ['@', node.name];

            if (node.expression && !node.expression.sequence.isEmpty()) {
                nodes.push(' ', translate(node.expression));
            }

            if (node.block) {
                nodes.push('{', translate(node.block), '}');
            } else {
                nodes.push(';');
            }

            return createSourceNode(node.info, nodes);

        case 'Ruleset':
            return createAnonymousSourceNode([
                translate(node.selector), '{', translate(node.block), '}'
            ]);

        case 'Selector':
            return createAnonymousSourceNode(node.selectors.map(translate)).join(',');

        case 'SimpleSelector':
            var nodes = node.sequence.map(function(node) {
                // add extra spaces around /deep/ combinator since comment beginning/ending may to be produced
                if (node.type === 'Combinator' && node.name === '/deep/') {
                    return ' ' + translate(node) + ' ';
                }

                return translate(node);
            });

            return createSourceNode(node.info, nodes);

        case 'Block':
            return createAnonymousSourceNode(node.declarations.map(translate)).join(';');

        case 'Declaration':
            return createSourceNode(
                node.info,
                [translate(node.property), ':', translate(node.value)]
            );

        case 'Property':
            return node.name;

        case 'Value':
            return node.important
                ? each(node.sequence) + '!important'
                : each(node.sequence);

        case 'Attribute':
            var result = translate(node.name);
            var flagsPrefix = ' ';

            if (node.operator !== null) {
                result += node.operator;

                if (node.value !== null) {
                    result += translate(node.value);

                    // space between string and flags is not required
                    if (node.value.type === 'String') {
                        flagsPrefix = '';
                    }
                }
            }

            if (node.flags !== null) {
                result += flagsPrefix + node.flags;
            }

            return '[' + result + ']';

        case 'FunctionalPseudo':
            return ':' + node.name + '(' + eachDelim(node.arguments, ',') + ')';

        case 'Function':
            return node.name + '(' + eachDelim(node.arguments, ',') + ')';

        case 'Negation':
            return ':not(' + eachDelim(node.sequence, ',') + ')';

        case 'Braces':
            return node.open + each(node.sequence) + node.close;

        case 'Argument':
        case 'AtruleExpression':
            return each(node.sequence);

        case 'Url':
            return 'url(' + translate(node.value) + ')';

        case 'Progid':
            return translate(node.value);

        case 'Combinator':
            return node.name;

        case 'Identifier':
            return node.name;

        case 'PseudoClass':
            return ':' + node.name;

        case 'PseudoElement':
            return '::' + node.name;

        case 'Class':
            return '.' + node.name;

        case 'Id':
            return '#' + node.name;

        case 'Hash':
            return '#' + node.value;

        case 'Dimension':
            return node.value + node.unit;

        case 'Nth':
            return node.value;

        case 'Number':
            return node.value;

        case 'String':
            return node.value;

        case 'Operator':
            return node.value;

        case 'Raw':
            return node.value;

        case 'Unknown':
            return node.value;

        case 'Percentage':
            return node.value + '%';

        case 'Space':
            return ' ';

        case 'Comment':
            return '/*' + node.value + '*/';

        default:
            throw new Error('Unknown node type: ' + node.type);
    }
}

module.exports = function(node) {
    return generateSourceMap(
        createAnonymousSourceNode(translate(node))
    );
};
});

var translateWithSourceMap$2 = interopDefault(translateWithSourceMap$1);


var require$$4$7 = Object.freeze({
    default: translateWithSourceMap$2
});

var _args = [[{"raw":"csso@^2.1.0","scope":null,"escapedName":"csso","name":"csso","rawSpec":"^2.1.0","spec":">=2.1.0 <3.0.0","type":"range"},"/home/aman/Code/relm/node_modules/postcss-csso"]];
var _from = "csso@>=2.1.0 <3.0.0";
var _id = "csso@2.2.1";
var _inCache = true;
var _installable = true;
var _location = "/csso";
var _nodeVersion = "6.2.1";
var _npmOperationalInternal = {"host":"packages-12-west.internal.npmjs.com","tmp":"tmp/csso-2.2.1.tgz_1469398647720_0.4500888998154551"};
var _npmUser = {"name":"lahmatiy","email":"rdvornov@gmail.com"};
var _npmVersion = "3.10.4";
var _phantomChildren = {};
var _requested = {"raw":"csso@^2.1.0","scope":null,"escapedName":"csso","name":"csso","rawSpec":"^2.1.0","spec":">=2.1.0 <3.0.0","type":"range"};
var _requiredBy = ["/postcss-csso"];
var _resolved = "https://registry.npmjs.org/csso/-/csso-2.2.1.tgz";
var _shasum = "51fbb5347e50e81e6ed51668a48490ae6fe2afe2";
var _shrinkwrap = null;
var _spec = "csso@^2.1.0";
var _where = "/home/aman/Code/relm/node_modules/postcss-csso";
var author = {"name":"Sergey Kryzhanovsky","email":"skryzhanovsky@ya.ru","url":"https://github.com/afelix"};
var bin = {"csso":"./bin/csso"};
var bugs$52 = {"url":"https://github.com/css/csso/issues"};
var dependencies = {"clap":"^1.0.9","source-map":"^0.5.3"};
var description$52 = "CSSO (CSS Optimizer) is a CSS minifier with structural optimisations";
var devDependencies = {"browserify":"^13.0.0","coveralls":"^2.11.6","eslint":"^2.2.0","istanbul":"^0.4.2","jscs":"~2.10.0","mocha":"~2.4.2","uglify-js":"^2.6.1"};
var directories = {};
var dist = {"shasum":"51fbb5347e50e81e6ed51668a48490ae6fe2afe2","tarball":"https://registry.npmjs.org/csso/-/csso-2.2.1.tgz"};
var engines = {"node":">=0.10.0"};
var eslintConfig = {"env":{"node":true,"mocha":true,"es6":true},"rules":{"no-duplicate-case":2,"no-undef":2,"no-unused-vars":[2,{"vars":"all","args":"after-used"}]}};
var files = ["bin","dist/csso-browser.js","lib","HISTORY.md","LICENSE","README.md"];
var gitHead = "62bf7207f117e4726decc8f1da272e77ac0f3ea5";
var homepage = "https://github.com/css/csso";
var keywords$52 = ["css","minifier","minify","compress","optimisation"];
var license = "MIT";
var main = "./lib/index";
var maintainers = [{"name":"afelix","email":"skryzhanovsky@gmail.com"},{"name":"lahmatiy","email":"rdvornov@gmail.com"},{"name":"tadatuta","email":"i@tadatuta.com"}];
var name$1 = "csso";
var optionalDependencies = {};
var readme = "ERROR: No README data found!";
var repository = {"type":"git","url":"git+https://github.com/css/csso.git"};
var scripts = {"browserify":"browserify --standalone csso lib/index.js | uglifyjs --compress --mangle -o dist/csso-browser.js","codestyle":"jscs lib && eslint lib test","codestyle-and-test":"npm run codestyle && npm test","coverage":"istanbul cover _mocha -- -R dot","coveralls":"istanbul cover _mocha --report lcovonly -- -R dot && cat ./coverage/lcov.info | coveralls","gh-pages":"git clone -b gh-pages https://github.com/css/csso.git .gh-pages && npm run browserify && cp dist/csso-browser.js .gh-pages/ && cd .gh-pages && git commit -am \"update\" && git push && cd .. && rm -rf .gh-pages","hydrogen":"node --trace-hydrogen --trace-phase=Z --trace-deopt --code-comments --hydrogen-track-positions --redirect-code-traces --redirect-code-traces-to=code.asm --trace_hydrogen_file=code.cfg --print-opt-code bin/csso --stat -o /dev/null","prepublish":"npm run browserify","test":"mocha --reporter dot","travis":"npm run codestyle-and-test && npm run coveralls"};
var version$1 = "2.2.1";
var _package = {
	_args: _args,
	_from: _from,
	_id: _id,
	_inCache: _inCache,
	_installable: _installable,
	_location: _location,
	_nodeVersion: _nodeVersion,
	_npmOperationalInternal: _npmOperationalInternal,
	_npmUser: _npmUser,
	_npmVersion: _npmVersion,
	_phantomChildren: _phantomChildren,
	_requested: _requested,
	_requiredBy: _requiredBy,
	_resolved: _resolved,
	_shasum: _shasum,
	_shrinkwrap: _shrinkwrap,
	_spec: _spec,
	_where: _where,
	author: author,
	bin: bin,
	bugs: bugs$52,
	dependencies: dependencies,
	description: description$52,
	devDependencies: devDependencies,
	directories: directories,
	dist: dist,
	engines: engines,
	eslintConfig: eslintConfig,
	files: files,
	gitHead: gitHead,
	homepage: homepage,
	keywords: keywords$52,
	license: license,
	main: main,
	maintainers: maintainers,
	name: name$1,
	optionalDependencies: optionalDependencies,
	readme: readme,
	repository: repository,
	scripts: scripts,
	version: version$1
};

var require$$0$34 = Object.freeze({
	_args: _args,
	_from: _from,
	_id: _id,
	_inCache: _inCache,
	_installable: _installable,
	_location: _location,
	_nodeVersion: _nodeVersion,
	_npmOperationalInternal: _npmOperationalInternal,
	_npmUser: _npmUser,
	_npmVersion: _npmVersion,
	_phantomChildren: _phantomChildren,
	_requested: _requested,
	_requiredBy: _requiredBy,
	_resolved: _resolved,
	_shasum: _shasum,
	_shrinkwrap: _shrinkwrap,
	_spec: _spec,
	_where: _where,
	author: author,
	bin: bin,
	bugs: bugs$52,
	dependencies: dependencies,
	description: description$52,
	devDependencies: devDependencies,
	directories: directories,
	dist: dist,
	engines: engines,
	eslintConfig: eslintConfig,
	files: files,
	gitHead: gitHead,
	homepage: homepage,
	keywords: keywords$52,
	license: license,
	main: main,
	maintainers: maintainers,
	name: name$1,
	optionalDependencies: optionalDependencies,
	readme: readme,
	repository: repository,
	scripts: scripts,
	version: version$1,
	default: _package
});

var index$9 = createCommonjsModule(function (module) {
var parse = interopDefault(require$$7$2);
var compress = interopDefault(require$$6$2);
var translate = interopDefault(require$$0$24);
var translateWithSourceMap = interopDefault(require$$4$7);
var walkers = interopDefault(require$$0$18);
var clone = interopDefault(require$$5$2);
var List = interopDefault(require$$2$7);

function debugOutput(name, options, startTime, data) {
    if (options.debug) {
        console.error('## ' + name + ' done in %d ms\n', Date.now() - startTime);
    }

    return data;
}

function createDefaultLogger(level) {
    var lastDebug;

    return function logger(title, ast) {
        var line = title;

        if (ast) {
            line = '[' + ((Date.now() - lastDebug) / 1000).toFixed(3) + 's] ' + line;
        }

        if (level > 1 && ast) {
            var css = translate(ast, true);

            // when level 2, limit css to 256 symbols
            if (level === 2 && css.length > 256) {
                css = css.substr(0, 256) + '...';
            }

            line += '\n  ' + css + '\n';
        }

        console.error(line);
        lastDebug = Date.now();
    };
}

function copy(obj) {
    var result = {};

    for (var key in obj) {
        result[key] = obj[key];
    }

    return result;
}

function buildCompressOptions(options) {
    options = copy(options);

    if (typeof options.logger !== 'function' && options.debug) {
        options.logger = createDefaultLogger(options.debug);
    }

    return options;
}

function minify(context, source, options) {
    options = options || {};

    var filename = options.filename || '<unknown>';
    var result;

    // parse
    var ast = debugOutput('parsing', options, Date.now(),
        parse(source, {
            context: context,
            filename: filename,
            positions: Boolean(options.sourceMap)
        })
    );

    // compress
    var compressResult = debugOutput('compress', options, Date.now(),
        compress(ast, buildCompressOptions(options))
    );

    // translate
    if (options.sourceMap) {
        result = debugOutput('translateWithSourceMap', options, Date.now(), (function() {
            var tmp = translateWithSourceMap(compressResult.ast);
            tmp.map._file = filename; // since other tools can relay on file in source map transform chain
            tmp.map.setSourceContent(filename, source);
            return tmp;
        })());
    } else {
        result = debugOutput('translate', options, Date.now(), {
            css: translate(compressResult.ast),
            map: null
        });
    }

    return result;
}

function minifyStylesheet(source, options) {
    return minify('stylesheet', source, options);
};

function minifyBlock(source, options) {
    return minify('block', source, options);
}

module.exports = {
    version: interopDefault(require$$0$34).version,

    // classes
    List: List,

    // main methods
    minify: minifyStylesheet,
    minifyBlock: minifyBlock,

    // step by step
    parse: parse,
    compress: compress,
    translate: translate,
    translateWithSourceMap: translateWithSourceMap,

    // walkers
    walk: walkers.all,
    walkRules: walkers.rules,
    walkRulesRight: walkers.rulesRight,

    // utils
    clone: clone
};
});

var index$10 = interopDefault(index$9);
var version = index$9.version;
var List = index$9.List;
var minify = index$9.minify;
var minifyBlock = index$9.minifyBlock;
var parse$2 = index$9.parse;
var compress = index$9.compress;
var translate = index$9.translate;
var translateWithSourceMap = index$9.translateWithSourceMap;
var walk$2 = index$9.walk;
var walkRules = index$9.walkRules;
var walkRulesRight = index$9.walkRulesRight;
var clone = index$9.clone;

var require$$0$16 = Object.freeze({
    default: index$10,
    version: version,
    List: List,
    minify: minify,
    minifyBlock: minifyBlock,
    parse: parse$2,
    compress: compress,
    translate: translate,
    translateWithSourceMap: translateWithSourceMap,
    walk: walk$2,
    walkRules: walkRules,
    walkRulesRight: walkRulesRight,
    clone: clone
});

var postcssToCsso = createCommonjsModule(function (module) {
var parse = interopDefault(require$$0$16).parse;

function isDecl(node) {
    return node.type === 'decl';
}

function appendNodes(cssoNode, listProperty, postcssNode) {
    var list = cssoNode[listProperty];

    postcssNode.nodes.forEach(function(node) {
        list.insert(list.createItem(postcssToCsso(node)));
    });

    return cssoNode;
}

function getInfo(node) {
    return {
        postcssNode: node
    };
}

function parseToCsso(str, context, node) {
    var cssoNode;

    try {
        cssoNode = parse(str, {
            context: context
        });
    } catch (e) {
        if (e.name === 'CssSyntaxError') {
            throw node.error(e.message, { index: e.parseError.offset });
        }

        throw e;
    }

    cssoNode.info = getInfo(node);

    return cssoNode;
}

function createCssoNode(type, property, node) {
    return appendNodes(parseToCsso('', type, node), property, node);
}

function postcssToCsso(node) {
    switch (node.type) {
        case 'root':
            return createCssoNode('stylesheet', 'rules', node);

        case 'rule':
            return {
                type: 'Ruleset',
                info: getInfo(node),
                selector: parseToCsso(node.selector || '', 'selector', node),
                block: createCssoNode('block', 'declarations', node)
            };

        case 'atrule':
            var cssoNode = {
                type: 'Atrule',
                info: getInfo(node),
                name: node.name,
                expression: parseToCsso(node.params || '', 'atruleExpression', node),
                block: null
            };

            if (node.nodes) {
                if (node.nodes.some(isDecl)) {
                    cssoNode.block = createCssoNode('block', 'declarations', node);
                } else {
                    cssoNode.block = createCssoNode('stylesheet', 'rules', node);
                }
            }

            return cssoNode;

        case 'decl':
            return parseToCsso(
                (node.raws.before || '').trimLeft() +
                node.toString(),
                'declaration',
                node
            );

        case 'comment':
            return {
                type: 'Comment',
                info: getInfo(node),
                value: node.raws.left + node.text + node.raws.right
            };
    }
}

module.exports = postcssToCsso;
});

var postcssToCsso$1 = interopDefault(postcssToCsso);


var require$$1$20 = Object.freeze({
    default: postcssToCsso$1
});

var cssoToPostcss = createCommonjsModule(function (module) {
var postcss = interopDefault(require$$1);
var translate = interopDefault(require$$0$16).translate;
var hasOwnProperty = Object.prototype.hasOwnProperty;

var DEFAULT_RAWS = {
    before: '',
    after: '',
    between: '',
    semicolon: false,
    left: '',
    right: ''
};
var ROOT_RAWS = {
    semicolon: true
};
var DECL_RAWS = {
    before: '',
    after: '',
    between: ':'
};

function clone(source) {
    var result = Object.create(Object.getPrototypeOf(source));

    for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
            result[key] = source[key];
        }
    }

    return result;
}

function listToPostcss(list, used) {
    var result = [];
    var before = '';

    list.each(function(node) {
        if (node.type === 'Raw' || node.type === 'Space') {
            // attach raw and spaces to next node
            before += node.value;
        } else {
            var postcssNode = cssoToPostcss(node, used);

            if (before !== '') {
                postcssNode.raws = clone(postcssNode.raws);
                postcssNode.raws.before = before;
                before = '';
            }

            result.push(postcssNode);
        }
    });

    return result;
}

function cssoToPostcss(node, used) {
    var postcssNode = node.info ? node.info.postcssNode : null;

    if (postcssNode) {
        // used is null when WeakSet is not supported
        if (used === null || used.has(postcssNode)) {
            // make node clone if it's already used in resulting tree
            postcssNode = clone(postcssNode);
        } else {
            used.add(postcssNode);
        }
    }

    switch (node.type) {
        case 'StyleSheet':
            if (!postcssNode) {
                postcssNode = postcss.root();
            }

            postcssNode.raws = ROOT_RAWS;
            postcssNode.nodes = listToPostcss(node.rules, used);

            return postcssNode;

        case 'Atrule':
            var children = node.block ? node.block.rules || node.block.declarations : undefined;

            if (!postcssNode) {
                postcssNode = postcss.atRule();
            }

            postcssNode.raws = DEFAULT_RAWS;
            postcssNode.name = node.name;
            postcssNode.params = translate(node.expression);
            postcssNode.nodes = children && listToPostcss(children, used);

            return postcssNode;

        case 'Ruleset':
            if (!postcssNode) {
                postcssNode = postcss.rule();
            }

            postcssNode.raws = DEFAULT_RAWS;
            postcssNode.selector = translate(node.selector);
            postcssNode.nodes = listToPostcss(node.block.declarations, used);

            return postcssNode;

        case 'Declaration':
            if (!postcssNode) {
                postcssNode = postcss.decl();
            }

            postcssNode.raws = DECL_RAWS;
            postcssNode.prop = translate(node.property);
            postcssNode.value = translate(node.value);
            postcssNode.important = node.important;

            return postcssNode;

        case 'Comment':
            if (!postcssNode) {
                postcssNode = postcss.comment();
            }

            postcssNode.raws = DEFAULT_RAWS;
            postcssNode.text = node.value;

            return postcssNode;
    }
};

module.exports = function(node) {
    var result;
    var used = null;

    // node.js 0.10 doesn't support for WeakSet -> always clone nodes
    if (typeof WeakSet === 'function') {
        // use weak set to avoid using the same original postcss node twice
        // in resulting tree, since nodes are changing on tree building
        used = new WeakSet();
    }

    result = cssoToPostcss(node, used);

    return result;
};
});

var cssoToPostcss$1 = interopDefault(cssoToPostcss);


var require$$0$35 = Object.freeze({
    default: cssoToPostcss$1
});

var index$8 = createCommonjsModule(function (module) {
var postcss = interopDefault(require$$1);
var compress = interopDefault(require$$0$16).compress;
var postcssToCsso = interopDefault(require$$1$20);
var cssoToPostcss = interopDefault(require$$0$35);

var postcssCsso = postcss.plugin('postcss-csso', function postcssCsso(options) {
    return function(root, result) {
        result.root = cssoToPostcss(compress(postcssToCsso(root), options).ast);
    };
});

postcssCsso.process = function(css, options) {
    return postcss([postcssCsso(options)]).process(css);
};

module.exports = postcssCsso;
});

var csso = interopDefault(index$8);

var index$23 = createCommonjsModule(function (module, exports) {
/*istanbul ignore next*/"use strict";

exports.__esModule = true;

exports.default = function () {
  return { /*istanbul ignore next*/
    manipulateOptions: function manipulateOptions(opts, parserOpts) {
      parserOpts.plugins.push("jsx");
    }
  };
};

/*istanbul ignore next*/module.exports = exports["default"];
});

var jsxSyntax = interopDefault(index$23);


var require$$0$36 = Object.freeze({
  default: jsxSyntax
});

var _addToUnscopables = createCommonjsModule(function (module) {
module.exports = function(){ /* empty */ };
});

var _addToUnscopables$1 = interopDefault(_addToUnscopables);


var require$$4$8 = Object.freeze({
	default: _addToUnscopables$1
});

var _iterStep = createCommonjsModule(function (module) {
module.exports = function(done, value){
  return {value: value, done: !!done};
};
});

var _iterStep$1 = interopDefault(_iterStep);


var require$$3$9 = Object.freeze({
  default: _iterStep$1
});

var _iterators = createCommonjsModule(function (module) {
module.exports = {};
});

var _iterators$1 = interopDefault(_iterators);


var require$$1$21 = Object.freeze({
	default: _iterators$1
});

var _cof = createCommonjsModule(function (module) {
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
});

var _cof$1 = interopDefault(_cof);


var require$$1$23 = Object.freeze({
  default: _cof$1
});

var _iobject = createCommonjsModule(function (module) {
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = interopDefault(require$$1$23);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
});

var _iobject$1 = interopDefault(_iobject);


var require$$1$22 = Object.freeze({
  default: _iobject$1
});

var _defined = createCommonjsModule(function (module) {
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
});

var _defined$1 = interopDefault(_defined);


var require$$0$38 = Object.freeze({
  default: _defined$1
});

var _toIobject = createCommonjsModule(function (module) {
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = interopDefault(require$$1$22)
  , defined = interopDefault(require$$0$38);
module.exports = function(it){
  return IObject(defined(it));
};
});

var _toIobject$1 = interopDefault(_toIobject);


var require$$2$16 = Object.freeze({
  default: _toIobject$1
});

var _library = createCommonjsModule(function (module) {
module.exports = true;
});

var _library$1 = interopDefault(_library);


var require$$9$2 = Object.freeze({
	default: _library$1
});

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
});

var _global$1 = interopDefault(_global);


var require$$0$40 = Object.freeze({
  default: _global$1
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
});

var _core$1 = interopDefault(_core);
var version$2 = _core.version;

var require$$0$41 = Object.freeze({
	default: _core$1,
	version: version$2
});

var _aFunction = createCommonjsModule(function (module) {
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
});

var _aFunction$1 = interopDefault(_aFunction);


var require$$0$42 = Object.freeze({
  default: _aFunction$1
});

var _ctx = createCommonjsModule(function (module) {
// optional / simple context binding
var aFunction = interopDefault(require$$0$42);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
});

var _ctx$1 = interopDefault(_ctx);


var require$$1$24 = Object.freeze({
  default: _ctx$1
});

var _isObject = createCommonjsModule(function (module) {
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
});

var _isObject$1 = interopDefault(_isObject);


var require$$0$43 = Object.freeze({
  default: _isObject$1
});

var _anObject = createCommonjsModule(function (module) {
var isObject = interopDefault(require$$0$43);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
});

var _anObject$1 = interopDefault(_anObject);


var require$$2$18 = Object.freeze({
  default: _anObject$1
});

var _fails = createCommonjsModule(function (module) {
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
});

var _fails$1 = interopDefault(_fails);


var require$$0$45 = Object.freeze({
  default: _fails$1
});

var _descriptors = createCommonjsModule(function (module) {
// Thank's IE8 for his funny defineProperty
module.exports = !interopDefault(require$$0$45)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
});

var _descriptors$1 = interopDefault(_descriptors);


var require$$0$44 = Object.freeze({
  default: _descriptors$1
});

var _domCreate = createCommonjsModule(function (module) {
var isObject = interopDefault(require$$0$43)
  , document = interopDefault(require$$0$40).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
});

var _domCreate$1 = interopDefault(_domCreate);


var require$$1$26 = Object.freeze({
  default: _domCreate$1
});

var _ie8DomDefine = createCommonjsModule(function (module) {
module.exports = !interopDefault(require$$0$44) && !interopDefault(require$$0$45)(function(){
  return Object.defineProperty(interopDefault(require$$1$26)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
});

var _ie8DomDefine$1 = interopDefault(_ie8DomDefine);


var require$$2$19 = Object.freeze({
  default: _ie8DomDefine$1
});

var _toPrimitive = createCommonjsModule(function (module) {
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = interopDefault(require$$0$43);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
});

var _toPrimitive$1 = interopDefault(_toPrimitive);


var require$$1$27 = Object.freeze({
  default: _toPrimitive$1
});

var _objectDp = createCommonjsModule(function (module, exports) {
var anObject       = interopDefault(require$$2$18)
  , IE8_DOM_DEFINE = interopDefault(require$$2$19)
  , toPrimitive    = interopDefault(require$$1$27)
  , dP             = Object.defineProperty;

exports.f = interopDefault(require$$0$44) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
});

var _objectDp$1 = interopDefault(_objectDp);
var f = _objectDp.f;

var require$$2$17 = Object.freeze({
  default: _objectDp$1,
  f: f
});

var _propertyDesc = createCommonjsModule(function (module) {
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
});

var _propertyDesc$1 = interopDefault(_propertyDesc);


var require$$3$10 = Object.freeze({
  default: _propertyDesc$1
});

var _hide = createCommonjsModule(function (module) {
var dP         = interopDefault(require$$2$17)
  , createDesc = interopDefault(require$$3$10);
module.exports = interopDefault(require$$0$44) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
});

var _hide$1 = interopDefault(_hide);


var require$$1$25 = Object.freeze({
  default: _hide$1
});

var _export = createCommonjsModule(function (module) {
var global    = interopDefault(require$$0$40)
  , core      = interopDefault(require$$0$41)
  , ctx       = interopDefault(require$$1$24)
  , hide      = interopDefault(require$$1$25)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
});

var _export$1 = interopDefault(_export);


var require$$8$2 = Object.freeze({
  default: _export$1
});

var _redefine = createCommonjsModule(function (module) {
module.exports = interopDefault(require$$1$25);
});

var _redefine$1 = interopDefault(_redefine);


var require$$7$5 = Object.freeze({
	default: _redefine$1
});

var _has = createCommonjsModule(function (module) {
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
});

var _has$1 = interopDefault(_has);


var require$$2$20 = Object.freeze({
  default: _has$1
});

var _toInteger = createCommonjsModule(function (module) {
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
});

var _toInteger$1 = interopDefault(_toInteger);


var require$$1$32 = Object.freeze({
  default: _toInteger$1
});

var _toLength = createCommonjsModule(function (module) {
// 7.1.15 ToLength
var toInteger = interopDefault(require$$1$32)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
});

var _toLength$1 = interopDefault(_toLength);


var require$$1$31 = Object.freeze({
  default: _toLength$1
});

var _toIndex = createCommonjsModule(function (module) {
var toInteger = interopDefault(require$$1$32)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
});

var _toIndex$1 = interopDefault(_toIndex);


var require$$0$46 = Object.freeze({
  default: _toIndex$1
});

var _arrayIncludes = createCommonjsModule(function (module) {
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = interopDefault(require$$2$16)
  , toLength  = interopDefault(require$$1$31)
  , toIndex   = interopDefault(require$$0$46);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
});

var _arrayIncludes$1 = interopDefault(_arrayIncludes);


var require$$1$30 = Object.freeze({
  default: _arrayIncludes$1
});

var _shared = createCommonjsModule(function (module) {
var global = interopDefault(require$$0$40)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
});

var _shared$1 = interopDefault(_shared);


var require$$2$21 = Object.freeze({
  default: _shared$1
});

var _uid = createCommonjsModule(function (module) {
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
});

var _uid$1 = interopDefault(_uid);


var require$$1$33 = Object.freeze({
  default: _uid$1
});

var _sharedKey = createCommonjsModule(function (module) {
var shared = interopDefault(require$$2$21)('keys')
  , uid    = interopDefault(require$$1$33);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
});

var _sharedKey$1 = interopDefault(_sharedKey);


var require$$0$47 = Object.freeze({
  default: _sharedKey$1
});

var _objectKeysInternal = createCommonjsModule(function (module) {
var has          = interopDefault(require$$2$20)
  , toIObject    = interopDefault(require$$2$16)
  , arrayIndexOf = interopDefault(require$$1$30)(false)
  , IE_PROTO     = interopDefault(require$$0$47)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
});

var _objectKeysInternal$1 = interopDefault(_objectKeysInternal);


var require$$1$29 = Object.freeze({
  default: _objectKeysInternal$1
});

var _enumBugKeys = createCommonjsModule(function (module) {
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
});

var _enumBugKeys$1 = interopDefault(_enumBugKeys);


var require$$0$48 = Object.freeze({
  default: _enumBugKeys$1
});

var _objectKeys = createCommonjsModule(function (module) {
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = interopDefault(require$$1$29)
  , enumBugKeys = interopDefault(require$$0$48);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
});

var _objectKeys$1 = interopDefault(_objectKeys);


var require$$1$28 = Object.freeze({
  default: _objectKeys$1
});

var _objectDps = createCommonjsModule(function (module) {
var dP       = interopDefault(require$$2$17)
  , anObject = interopDefault(require$$2$18)
  , getKeys  = interopDefault(require$$1$28);

module.exports = interopDefault(require$$0$44) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
});

var _objectDps$1 = interopDefault(_objectDps);


var require$$4$10 = Object.freeze({
  default: _objectDps$1
});

var _html = createCommonjsModule(function (module) {
module.exports = interopDefault(require$$0$40).document && document.documentElement;
});

var _html$1 = interopDefault(_html);


var require$$0$49 = Object.freeze({
	default: _html$1
});

var _objectCreate = createCommonjsModule(function (module) {
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = interopDefault(require$$2$18)
  , dPs         = interopDefault(require$$4$10)
  , enumBugKeys = interopDefault(require$$0$48)
  , IE_PROTO    = interopDefault(require$$0$47)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = interopDefault(require$$1$26)('iframe')
    , i      = enumBugKeys.length
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  interopDefault(require$$0$49).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write('<script>document.F=Object</script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};
});

var _objectCreate$1 = interopDefault(_objectCreate);


var require$$4$9 = Object.freeze({
  default: _objectCreate$1
});

var _wks = createCommonjsModule(function (module) {
var store      = interopDefault(require$$2$21)('wks')
  , uid        = interopDefault(require$$1$33)
  , Symbol     = interopDefault(require$$0$40).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
});

var _wks$1 = interopDefault(_wks);


var require$$0$50 = Object.freeze({
  default: _wks$1
});

var _setToStringTag = createCommonjsModule(function (module) {
var def = interopDefault(require$$2$17).f
  , has = interopDefault(require$$2$20)
  , TAG = interopDefault(require$$0$50)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
});

var _setToStringTag$1 = interopDefault(_setToStringTag);


var require$$2$22 = Object.freeze({
  default: _setToStringTag$1
});

var _iterCreate = createCommonjsModule(function (module) {
'use strict';
var create         = interopDefault(require$$4$9)
  , descriptor     = interopDefault(require$$3$10)
  , setToStringTag = interopDefault(require$$2$22)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
interopDefault(require$$1$25)(IteratorPrototype, interopDefault(require$$0$50)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
});

var _iterCreate$1 = interopDefault(_iterCreate);


var require$$3$11 = Object.freeze({
  default: _iterCreate$1
});

var _toObject = createCommonjsModule(function (module) {
// 7.1.13 ToObject(argument)
var defined = interopDefault(require$$0$38);
module.exports = function(it){
  return Object(defined(it));
};
});

var _toObject$1 = interopDefault(_toObject);


var require$$1$35 = Object.freeze({
  default: _toObject$1
});

var _objectGpo = createCommonjsModule(function (module) {
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = interopDefault(require$$2$20)
  , toObject    = interopDefault(require$$1$35)
  , IE_PROTO    = interopDefault(require$$0$47)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
});

var _objectGpo$1 = interopDefault(_objectGpo);


var require$$1$34 = Object.freeze({
  default: _objectGpo$1
});

var _iterDefine = createCommonjsModule(function (module) {
'use strict';
var LIBRARY        = interopDefault(require$$9$2)
  , $export        = interopDefault(require$$8$2)
  , redefine       = interopDefault(require$$7$5)
  , hide           = interopDefault(require$$1$25)
  , has            = interopDefault(require$$2$20)
  , Iterators      = interopDefault(require$$1$21)
  , $iterCreate    = interopDefault(require$$3$11)
  , setToStringTag = interopDefault(require$$2$22)
  , getPrototypeOf = interopDefault(require$$1$34)
  , ITERATOR       = interopDefault(require$$0$50)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
});

var _iterDefine$1 = interopDefault(_iterDefine);


var require$$0$39 = Object.freeze({
  default: _iterDefine$1
});

var es6_array_iterator = createCommonjsModule(function (module) {
'use strict';
var addToUnscopables = interopDefault(require$$4$8)
  , step             = interopDefault(require$$3$9)
  , Iterators        = interopDefault(require$$1$21)
  , toIObject        = interopDefault(require$$2$16);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = interopDefault(require$$0$39)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
});

interopDefault(es6_array_iterator);

var web_dom_iterable = createCommonjsModule(function (module) {
var global        = interopDefault(require$$0$40)
  , hide          = interopDefault(require$$1$25)
  , Iterators     = interopDefault(require$$1$21)
  , TO_STRING_TAG = interopDefault(require$$0$50)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}
});

interopDefault(web_dom_iterable);

var _stringAt = createCommonjsModule(function (module) {
var toInteger = interopDefault(require$$1$32)
  , defined   = interopDefault(require$$0$38);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
});

var _stringAt$1 = interopDefault(_stringAt);


var require$$1$36 = Object.freeze({
  default: _stringAt$1
});

var es6_string_iterator = createCommonjsModule(function (module) {
'use strict';
var $at  = interopDefault(require$$1$36)(true);

// 21.1.3.27 String.prototype[@@iterator]()
interopDefault(require$$0$39)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
});

interopDefault(es6_string_iterator);

var _classof = createCommonjsModule(function (module) {
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = interopDefault(require$$1$23)
  , TAG = interopDefault(require$$0$50)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
});

var _classof$1 = interopDefault(_classof);


var require$$3$12 = Object.freeze({
  default: _classof$1
});

var core_getIteratorMethod = createCommonjsModule(function (module) {
var classof   = interopDefault(require$$3$12)
  , ITERATOR  = interopDefault(require$$0$50)('iterator')
  , Iterators = interopDefault(require$$1$21);
module.exports = interopDefault(require$$0$41).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
});

var core_getIteratorMethod$1 = interopDefault(core_getIteratorMethod);


var require$$1$37 = Object.freeze({
  default: core_getIteratorMethod$1
});

var core_getIterator = createCommonjsModule(function (module) {
var anObject = interopDefault(require$$2$18)
  , get      = interopDefault(require$$1$37);
module.exports = interopDefault(require$$0$41).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
});

var core_getIterator$1 = interopDefault(core_getIterator);


var require$$0$51 = Object.freeze({
  default: core_getIterator$1
});

var getIterator$2 = createCommonjsModule(function (module) {
module.exports = interopDefault(require$$0$51);
});

var getIterator$3 = interopDefault(getIterator$2);


var require$$0$37 = Object.freeze({
	default: getIterator$3
});

var getIterator = createCommonjsModule(function (module) {
module.exports = { "default": interopDefault(require$$0$37), __esModule: true };
});

var getIterator$1 = interopDefault(getIterator);


var require$$2$15 = Object.freeze({
	default: getIterator$1
});

var index$25 = createCommonjsModule(function (module, exports) {
/*istanbul ignore next*/"use strict";

exports.__esModule = true;

exports.default = function (opts) {
  var visitor = {};

  visitor.JSXNamespacedName = function (path) {
    throw path.buildCodeFrameError("Namespace tags are not supported. ReactJSX is not XML.");
  };

  visitor.JSXElement = { /*istanbul ignore next*/
    exit: function exit(path, file) {
      var callExpr = buildElementCall(path.get("openingElement"), file);

      callExpr.arguments = callExpr.arguments.concat(path.node.children);

      if (callExpr.arguments.length >= 3) {
        callExpr._prettyCall = true;
      }

      path.replaceWith(t.inherits(callExpr, path.node));
    }
  };

  return visitor;

  function convertJSXIdentifier(node, parent) {
    if (t.isJSXIdentifier(node)) {
      if (node.name === "this" && t.isReferenced(node, parent)) {
        return t.thisExpression();
      } else if ( /*istanbul ignore next*/_esutils2.default.keyword.isIdentifierNameES6(node.name)) {
        node.type = "Identifier";
      } else {
        return t.stringLiteral(node.name);
      }
    } else if (t.isJSXMemberExpression(node)) {
      return t.memberExpression(convertJSXIdentifier(node.object, node), convertJSXIdentifier(node.property, node));
    }

    return node;
  }

  function convertAttributeValue(node) {
    if (t.isJSXExpressionContainer(node)) {
      return node.expression;
    } else {
      return node;
    }
  }

  function convertAttribute(node) {
    var value = convertAttributeValue(node.value || t.booleanLiteral(true));

    if (t.isStringLiteral(value) && !t.isJSXExpressionContainer(node.value)) {
      value.value = value.value.replace(/\n\s+/g, " ");
    }

    if (t.isValidIdentifier(node.name.name)) {
      node.name.type = "Identifier";
    } else {
      node.name = t.stringLiteral(node.name.name);
    }

    return t.inherits(t.objectProperty(node.name, value), node);
  }

  function buildElementCall(path, file) {
    path.parent.children = t.react.buildChildren(path.parent);

    var tagExpr = convertJSXIdentifier(path.node.name, path.node);
    var args = [];

    var tagName = /*istanbul ignore next*/void 0;
    if (t.isIdentifier(tagExpr)) {
      tagName = tagExpr.name;
    } else if (t.isLiteral(tagExpr)) {
      tagName = tagExpr.value;
    }

    var state = {
      tagExpr: tagExpr,
      tagName: tagName,
      args: args
    };

    if (opts.pre) {
      opts.pre(state, file);
    }

    var attribs = path.node.attributes;
    if (attribs.length) {
      attribs = buildOpeningElementAttributes(attribs, file);
    } else {
      attribs = t.nullLiteral();
    }

    args.push(attribs);

    if (opts.post) {
      opts.post(state, file);
    }

    return state.call || t.callExpression(state.callee, args);
  }

  /**
   * The logic for this is quite terse. It's because we need to
   * support spread elements. We loop over all attributes,
   * breaking on spreads, we then push a new object containg
   * all prior attributes to an array for later processing.
   */

  function buildOpeningElementAttributes(attribs, file) {
    var _props = [];
    var objs = [];

    function pushProps() {
      if (!_props.length) return;

      objs.push(t.objectExpression(_props));
      _props = [];
    }

    while (attribs.length) {
      var prop = attribs.shift();
      if (t.isJSXSpreadAttribute(prop)) {
        pushProps();
        objs.push(prop.argument);
      } else {
        _props.push(convertAttribute(prop));
      }
    }

    pushProps();

    if (objs.length === 1) {
      // only one object
      attribs = objs[0];
    } else {
      // looks like we have multiple objects
      if (!t.isObjectExpression(objs[0])) {
        objs.unshift(t.objectExpression([]));
      }

      // spread it
      attribs = t.callExpression(file.addHelper("extends"), objs);
    }

    return attribs;
  }
};

var /*istanbul ignore next*/_esutils = interopDefault(require$$1$2);

/*istanbul ignore next*/
var _esutils2 = _interopRequireDefault(_esutils);

var /*istanbul ignore next*/_babelTypes = interopDefault(require$$0$1);

/*istanbul ignore next*/
var t = _interopRequireWildcard(_babelTypes);

/*istanbul ignore next*/
function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports["default"]; // function called with (state: ElementState) after building attribs
});

var index$26 = interopDefault(index$25);


var require$$1$38 = Object.freeze({
  default: index$26
});

var index$24 = createCommonjsModule(function (module, exports) {
/*istanbul ignore next*/"use strict";

exports.__esModule = true;

var _getIterator2 = interopDefault(require$$2$15);

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.default = function ( /*istanbul ignore next*/_ref) {
  /*istanbul ignore next*/var t = _ref.types;

  var JSX_ANNOTATION_REGEX = /\*?\s*@jsx\s+([^\s]+)/;

  var visitor = interopDefault(require$$1$38)({ /*istanbul ignore next*/
    pre: function pre(state) {
      var tagName = state.tagName;
      var args = state.args;
      if (t.react.isCompatTag(tagName)) {
        args.push(t.stringLiteral(tagName));
      } else {
        args.push(state.tagExpr);
      }
    },
    /*istanbul ignore next*/post: function post(state, pass) {
      state.callee = pass.get("jsxIdentifier")();
    }
  });

  visitor.Program = function (path, state) {
    /*istanbul ignore next*/var file = state.file;

    var id = state.opts.pragma || "React.createElement";

    for ( /*istanbul ignore next*/var _iterator = file.ast.comments, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
      /*istanbul ignore next*/
      var _ref2;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref2 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref2 = _i.value;
      }

      var comment = _ref2;

      var matches = JSX_ANNOTATION_REGEX.exec(comment.value);
      if (matches) {
        id = matches[1];
        if (id === "React.DOM") {
          throw file.buildCodeFrameError(comment, "The @jsx React.DOM pragma has been deprecated as of React 0.12");
        } else {
          break;
        }
      }
    }

    state.set("jsxIdentifier", function () /*istanbul ignore next*/{
      return id.split(".").map(function (name) /*istanbul ignore next*/{
        return t.identifier(name);
      }).reduce(function (object, property) /*istanbul ignore next*/{
        return t.memberExpression(object, property);
      });
    });
  };

  return {
    inherits: interopDefault(require$$0$36),
    visitor: visitor
  };
};

/*istanbul ignore next*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports["default"]; /* eslint max-len: 0 */
});

var jsxTransform = interopDefault(index$24);

/* eslint-disable */
var preset = {
  presets: [],
  plugins: [
    [jsxSyntax],
    [jsxTransform, { pragma: 'h' }],
  ],
  env: {
    production: {
      plugins: [
        [csjs, {
          plugins: [
            [autoprefixer$1, { browsers: ['last 2 versions'] }],
            [csso]
          ]
        }]
      ]
    }
  }
};

function csjs ({ types: t }) {
  return {
    visitor: {
      TaggedTemplateExpression: function(path, state) {
        if (path.node.tag.name !== 'css') {                 /* monkey_patch */
          return false;
        }

        const nodeQuasis = path.node.quasi.quasis;
        const nodeExprs = path.node.quasi.expressions;

        const css = nodeQuasis.reduce((acc, quasi, i) => {
          const expr = nodeExprs[i] ? expressionPlaceholder(i) : '';
          return acc + quasi.value.raw + expr;
        }, '');

        const plugins = (state.opts.plugins || []).map(handlePlugin);

        const processed = require$$1__default(plugins)
          .process(css, {parser: safe, from: this.file.opts.filename}).css;

        const {quasis, exprs} = splitExpressions(processed);

        const quasisAst = buildQuasisAst(t, quasis);
        const exprsAst = exprs.map(exprIndex => nodeExprs[exprIndex]);

        path.node.quasi.quasis = quasisAst;
        path.node.quasi.expressions = exprsAst;
      },
    }
  };
};

function handlePlugin(pluginArg) {
  if (Array.isArray(pluginArg)) {
    return pluginArg[0].apply(null, pluginArg.slice(1));
  } else if (typeof pluginArg === 'string') {
    throw new Error('Import plugins directly; plugin path is not accepted to avoid dynamic requires');
  } else {
    return pluginArg;
  }
}

function expressionPlaceholder(i) {
  return '___QUASI_EXPR_' + i + '___';
}

function buildQuasisAst(t, quasis) {
  return quasis.map((quasi, i) => {
    const isTail = i === quasis.length - 1;
    return t.templateElement({raw: quasi, cooked: quasi}, isTail);
  });
}

const regex = /___QUASI_EXPR_(\d+)___/g;

function splitExpressions(css) {
  let found, matches = [];
  while (found = regex.exec(css)) {
    matches.push(found);
  }

  const reduction = matches.reduce((acc, match) => {
    acc.quasis.push(css.substring(acc.prevEnd, match.index));
    const [placeholder, exprIndex] = match;
    acc.exprs.push(exprIndex);
    acc.prevEnd = match.index + placeholder.length;
    return acc;
  }, {prevEnd: 0, quasis: [], exprs: []});

  reduction.quasis.push(css.substring(reduction.prevEnd, css.length));

  return {
    quasis: reduction.quasis,
    exprs: reduction.exprs
  };
}

module.exports = preset;
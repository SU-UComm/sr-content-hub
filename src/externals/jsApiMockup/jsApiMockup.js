/* eslint-disable no-prototype-builtins */
/**
 * +--------------------------------------------------------------------+
 * | This MySource Matrix CMS file is Copyright (c) Squiz Pty Ltd       |
 * | ABN 77 084 670 600                                                 |
 * +--------------------------------------------------------------------+
 * | IMPORTANT: Your use of this Software is subject to the terms of    |
 * | the Licence provided in the file licence.txt. If you cannot find   |
 * | this file please contact Squiz (www.squiz.com.au) so we may provide|
 * | you a copy.                                                        |
 * +--------------------------------------------------------------------+
 *
 */
(function (gscope) {
    /**
     * Convert a JSON string to object
     */
    function jsonToObj(json) {
        // Make the conversion
        if (typeof JSON !== 'undefined') {
            return JSON.parse(json);
        } // end if

        // Don't worry, even the creator of JSON says eval is ok here
        return eval('(' + json + ')');
    } // end jsonToObj

    /**
     * Get all the properties of an object as an array
     *
     * @param object    obj     The object to get the parameters for
     */
    function getProperties(obj) {
        var properties = [];
        for (var propName in obj) {
            if (obj.hasOwnProperty(propName)) {
                properties.push(propName);
            } // end if
        } // end for

        return properties;
    } // end getProperties

    /**
     * Convert a variable to a boolean
     */
    function convertToBoolean(variable) {
        var ret = false;
        if (variable !== null && typeof variable !== 'undefined') {
            switch (typeof variable) {
                case 'number':
                    ret = variable === 1 ? true : false;
                    break;

                case 'boolean':
                    ret = variable;
                    break;

                case 'string':
                    var testVar = variable.toLowerCase();
                    if (testVar === 'true' || testVar === '1') {
                        ret = true;
                    } else if (testVar === 'false' || testVar === '0') {
                        ret = false;
                    } // end if
                    break;
            } // end switch
        } // end if

        return ret;
    } // end convertToBoolean

    /**
     * The API constructor
     */
    gscope.Squiz_Matrix_API = function (options) {
        var self = this;

        if (!options.hasOwnProperty('key') || options.key === '') {
            throw 'An API key is required';
        } // end if

        self.key = options.key;

        self.nonceToken = '';
    }; // end construct

    function JSAPIError(request) {
        this.name = 'JSAPIError';
        this.message = 'JS API Error';
        this.request = request;
    }

    JSAPIError.prototype = Object.create(Error.prototype);
    JSAPIError.prototype.constructor = JSAPIError;

    /**
     * API methods
     */
    gscope.Squiz_Matrix_API.prototype = {
        syncing_enabled: 0,

        _http: function (options, promiseFns) {
            var self = this;

            // Create the HTTPRequest object
            function createRequest() {
                var request;
                try {
                    request = new XMLHttpRequest();
                } catch (trymicrosoft) {
                    try {
                        request = new ActiveXObject('Msxml2.XMLHTTP');
                    } catch (othermicrosoft) {
                        try {
                            request = new ActiveXObject('Microsoft.XMLHTTP');
                        } catch (nosupport) {
                            request = false;
                        } // end try
                    } // end try
                } // end try

                if (!request) {
                    throw 'Your browser does not support Ajax';
                } // end if

                return request;
            } // end createRequest

            // Process parameters into a data array
            function data(params) {
                // Automatically append 'key' to every request
                var dataArr = {};

                for (var i = 0, l = params.length; i < l; i += 1) {
                    if (params[i]) {
                        dataArr[params[i][0]] = params[i][1];
                    }
                } // end for
                return JSON.stringify(dataArr);
            } // end data

            // Set some defaults for the HTTP Request
            options = self._options(
                ['params'],
                {
                    url: window.jsApiMockedURL,
                    method: 'POST',
                    contentType: 'application/json',
                    params: [],
                    async: true,
                    onSuccess: function () {},
                    onError: function () {
                        throw 'HTTPRequest call failed';
                    },
                },
                options,
            );

            var http = createRequest();
            http.open(options.method, encodeURI(options.url), options.async);
            http.onreadystatechange = function () {
                var apiError = new JSAPIError(http);
                if (http.readyState === 4) {
                    if (http.status === 200) {
                        if (typeof http.responseText !== 'undefined' || http.responseText !== '' || http.responseText !== null) {
                            try {
                                var response = jsonToObj(http.responseText);
                            } catch (ex) {
                                if (promiseFns) {
                                    promiseFns.reject(ex);
                                }
                                options.onError.call(this, http);
                            }

                            if (promiseFns) {
                                promiseFns.resolve(response);
                            }
                            options.onSuccess.call(this, response);
                        } else {
                            if (promiseFns) {
                                promiseFns.reject(apiError);
                            }
                            options.onError.call(this, http);
                        } // end if
                    } else {
                        if (promiseFns) {
                            promiseFns.reject(apiError);
                        }
                        options.onError.call(this, http);
                    } // end if
                } // end if
            }; // end onreadstatechange

            http.setRequestHeader('Content-type', options.contentType);
            http.setRequestHeader('X-SquizMatrix-JSAPI-Key', self.key);

            // Send the request
            http.send(data(options.params));
        }, // end _ajax

        /**
         * Validates options and returns merged data
         */
        _options: function (required, defaults, options, discard) {
            if (arguments.length < 4) {
                discard = true;
            }

            // Required data
            for (var i = 0, l = required.length; i < l; i += 1) {
                if (!options.hasOwnProperty(required[i])) {
                    throw 'Required argument "' + required[i] + '" missing';
                } // end if
            } // end for

            // Merge options and defaults
            for (var def in options) {
                if (defaults.hasOwnProperty(def)) {
                    defaults[def] = options.hasOwnProperty(def) ? options[def] : defaults[def];
                } else if (discard === false && options.hasOwnProperty(def)) {
                    defaults[def] = options[def];
                } //end if
            } // end for

            if (defaults.hasOwnProperty('dataCallback') && typeof defaults.dataCallback !== 'function') {
                throw 'Data callback must be a function';
            } // end if

            if (defaults.hasOwnProperty('errorCallback') && defaults.errorCallback !== null && typeof defaults.errorCallback !== 'function') {
                throw 'Error callback must be a function';
            } // end if

            return defaults;
        }, // end _options

        /**
         * batches multiple JS API calls and executs them in one HTTP Request
         *
         *
         * @param object		options       JSON string of options
         * {
         *      functions:		json		json of all the function and its respective arguments to be passed in
         *      dataCallback:	function	Custom callback function
         * }
         */
        batchRequest: function (options) {
            var fnName = 'batchRequest';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        functions: null,
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['functions'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            // Package up the required function calls into string to POST
            //var postData = JSON.stringify(options.functions);

            return this._doPost(fnName, [['functions', options.functions]], options);
        }, // end batchRequest

        /**
         * Get general information about an asset
         *
         *
         * @param object		options       JSON string of options
         * {
         *      asset_id:		string/int	Id of the asset we are getting info for
         *      get_attributes:	boolean		Set this to 1 to also return an assets attributes
         *      dataCallback:	function	Custom callback function
         * }
         */
        getGeneral: function (options) {
            var fnName = 'getGeneral';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        asset_id: null,
                        get_attributes: 0,
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['asset_id'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            options.get_attributes = convertToBoolean(options.get_attributes) ? 1 : 0;

            return this._doPost(
                fnName,
                [
                    ['id', options.asset_id],
                    ['get_attributes', options.get_attributes],
                ],
                options,
            );
        }, // end getGeneral

        /**
         * Gets child count for the passed asset uptill certain level
         *
         *
         * @param object		options       JSON string of options
         * {
         *      asset_id:		string/int	Id of the asset we are getting info for
         *      level:			int			Number of levels to check, default : 'all'
         *      dataCallback:	function	Custom callback function
         * }
         */
        getChildCount: function (options) {
            var fnName = 'getChildCount';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        asset_id: null,
                        level: 0,
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['asset_id', 'level'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            return this._doPost(
                fnName,
                [
                    ['asset_id', options.asset_id],
                    ['levels', options.level],
                ],
                options,
            );
        }, // end getChildCount

        /**
         * Gets WYSIWYG and Div style classes defined by the frontend design
         *
         *
         * @param object		options       JSON string of options
         * {
         *      asset_id:		string/int	Id of the asset we are getting info for
         *      dataCallback:	function	Custom callback function
         * }
         */
        getDesignStyleClasses: function (options) {
            var fnName = 'getDesignStyleClasses';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        asset_id: null,
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['asset_id'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);
            return this._doPost(fnName, [['id', options.asset_id]], options);
        }, // end designStyleClasses

        /**
         * Gets lineage of the passed asset until the root_folder
         *
         *
         * @param object		options       JSON string of options
         * {
         *      asset_url:				string		url(including protocol) or the assetid of the asset
         *      significant_link_only:	boolean		if get to get back significant (type_1 and type_2) links only
         *      dataCallback:			function	Custom callback function
         * }
         */
        getLineage: function (options) {
            var fnName = 'getLineage';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        asset_url: '',
                        significant_link_only: 1,
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['asset_url'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            // Encode the url
            options.asset_url = encodeURI(options.asset_url);

            options.significant_link_only = convertToBoolean(options.significant_link_only) ? 1 : 0;

            return this._doPost(
                fnName,
                [
                    ['asset_url', options.asset_url],
                    ['significant_link_only', options.significant_link_only],
                ],
                options,
            );
        }, // end getLineage

        /**
         * Gets a single lineage of the passed url
         *
         *
         * @param object		options       JSON string of options
         * {
         *      asset_url:				string		url(including protocol) or the assetid of the asset
         *      dataCallback:			function	Custom callback function
         * }
         */
        getLineageFromUrl: function (options) {
            var fnName = 'getLineageFromUrl';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        asset_url: '',
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['asset_url'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            // Encode the url
            options.asset_url = encodeURI(options.asset_url);

            return this._doPost(fnName, [['asset_url', options.asset_url]], options);
        }, // end getLineageFromUrl

        /**
         * Gets a single url based on the lineage passed (asset ids)
         *
         *
         * @param object		options       JSON string of options
         * {
         *      param array			lineage	asset id array to represent lineage from top to bottom
         *      dataCallback:			function	Custom callback function
         * }
         */
        getUrlFromLineage: function (options) {
            var fnName = 'getUrlFromLineage';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        lineage: [],
                        root_url: '',
                        protocol: '',
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['lineage'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            // Encode the lineage
            var lineageArray = [];
            for (var i = 0, l = options.lineage.length; i < l; i += 1) {
                if (options.lineage[i].hasOwnProperty('assetid')) {
                    lineageArray.push(options.lineage[i]['assetid']);
                } else {
                    lineageArray.push(options.lineage[i]);
                }
            }

            return this._doPost(
                fnName,
                [
                    ['lineage', lineageArray.join('\\,')],
                    ['root_url', options.root_url],
                    ['protocol', options.protocol],
                ],
                options,
            );
        }, // end getUrlFromLineage

        /**
         * This will get all attribute value
         *
         * @param object		options       JSON string of options
         * {
         *      asset_id:		string/int	Id of the asset we are getting info for
         *      dataCallback:	function	Custom callback function
         * }
         */
        getAttributes: function (options) {
            var fnName = 'getAttributes';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        asset_id: null,
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['asset_id'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            return this._doPost(fnName, [['id', options.asset_id]], options);
        }, // end getAttribute

        /**
         * This will set an attribute value
         *
         * @param object		options       JSON string of options
         * {
         *      asset_id:		string/int	Id of the asset we are setting attributes for
         *      attr_name:		string		Name of the attribute to change
         *      attr_val:		string		Value to change the attribute to
         *      dataCallback:	function	Custom callback function
         * }
         */
        setAttribute: function (options) {
            var fnName = 'setAttribute';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        asset_id: null,
                        attr_name: '',
                        attr_val: '',
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['asset_id', 'attr_name', 'attr_val'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            return this._doPost(
                fnName,
                [
                    ['id', options.asset_id],
                    ['attr_name', options.attr_name],
                    ['attr_val', options.attr_val],
                ],
                options,
            );
        }, // end setAttribute

        /**
         * Sets the passed attributes for the asset
         *
         * @param object		options       JSON string of options
         * {
         *      asset_id:		string/int	Id of the asset we are setting attributes for
         *      field_info:		json		Attribute name and their respective values to be changed to
         *      dataCallback:	function	Custom callback function
         * }
         */
        setMultipleAttributes: function (options) {
            var fnName = 'setMultipleAttributes';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        asset_id: null,
                        field_info: {},
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['asset_id', 'field_info'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            return this._doPost(
                fnName,
                [
                    ['field_info', options.field_info],
                    ['id', options.asset_id],
                ],
                options,
            );
        }, // end setMultipleAttributes

        /**
         * This will get metadata values
         *
         * @param object		options       JSON string of options
         * {
         *      asset_id:		string/int	Id of the asset we are getting info for
         *      dataCallback:	function	Custom callback function
         * }
         */
        getMetadata: function (options) {
            var fnName = 'getMetadata';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        asset_id: null,
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['asset_id'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            return this._doPost(fnName, [['id', options.asset_id]], options);
        }, // end getMetadata

        /**
         * Get the value of a metadata field
         *
         * @param object		options       JSON string of options
         * {
         *      asset_id:		string/int	Id of the asset we are setting metadata for
         *      field_id:		string/int	The asset id of the metadata field
         *      field_val:		string		The value to set for the metadata field
         *									(Using <i>null</i> will set it to default)
         *      dataCallback:	function	Custom callback function
         * }
         */
        setMetadata: function (options) {
            var fnName = 'setMetadata';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        asset_id: null,
                        field_id: '',
                        field_val: '',
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['asset_id', 'field_id', 'field_val'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            return this._doPost(
                fnName,
                [
                    ['id', options.asset_id],
                    ['field_id', options.field_id],
                    ['field_val', options.field_val],
                ],
                options,
            );
        }, // end setMetadata

        /**
         * Set the values of multiple metadata fields
         *
         * @param object		options       JSON string of options
         * {
         *      asset_id:		string/int	Id of the asset we are setting attributes for
         *      field_info:		json		Metadata field id and their respective values to be changed to
         *									(Using <i>null</i> for value will set it to default)
         *      dataCallback:	function	Custom callback function
         * }
         */
        setMetadataAllFields: function (options) {
            var fnName = 'setMetadataAllFields';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        asset_id: null,
                        field_info: null,
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['asset_id', 'field_info'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            var field_ids = [];
            var field_vals = [];
            for (var field_id in options.field_info) {
                if (options.field_info.hasOwnProperty(field_id)) {
                    field_ids.push(field_id);
                    // because JS join() will convert the null string to empty string
                    // further down below we will need to provide a hack around this
                    // to let the PHP side know about the value being passed as null here
                    if (options.field_info[field_id] === null) {
                        options.field_info[field_id] = '__NULL_VALUE__';
                    }
                    field_vals.push(options.field_info[field_id]);
                } // end if
            } // end of

            return this._doPost(
                fnName,
                [
                    ['field_id', field_ids.join('\\,')],
                    ['field_val', field_vals.join('\\,')],
                    ['id', options.asset_id],
                ],
                options,
            );
        }, // end setMetadataAllFields

        /**
         * This will send an asset to the trash
         *
         * @param object		options       JSON string of options
         * {
         *      asset_ids:		string/array	A single string asset id, or array of strings for asset ids
         *      dataCallback:	function		Custom callback function
         * }
         */
        trashAsset: function (options) {
            var fnName = 'trashAsset';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        asset_ids: [],
                        check_dependent: true,
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['asset_ids'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            // If a string has been supplied (only 1 asset), then convert it to
            // an array
            if (options.asset_ids.constructor === String) {
                options.asset_ids = [options.asset_ids];
            } // end if

            return this._doPost(
                fnName,
                [
                    ['assetid', options.asset_ids.join('\\,')],
                    ['check_dependent', options.check_dependent],
                ],
                options,
            );
        }, // end trashAsset

        /**
         * This will return child asset ids of the passed asset
         *
         * @param object		options       JSON string of options
         * {
         *      asset_id:		string/int	Id of the asset we are setting attributes for
         *      levels:			int			Number of levels to return
         *      type_codes:		array		asset type_code that we want back
         *      link_types:		array		type of links we are looking for
         *                       			Valid Values - SQ_LINK_TYPE_1, SQ_LINK_TYPE_2, SQ_LINK_TYPE_3, SQ_LINK_NOTICE
         *      link_value:      array		link values we are looking for
         *      get_attributes:	boolean		if we are getting non standard attribute values of the assets(FALSE by default)
         *      dataCallback:	function	Custom callback function
         * }
         */
        getChildren: function (options) {
            var fnName = 'getChildren';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        asset_id: null,
                        levels: 0,
                        type_codes: [],
                        link_types: [],
                        link_values: [],
                        get_attributes: 0,
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['asset_id'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            if (typeof options.type_codes === 'string') {
                options.type_codes = [options.type_codes];
            } // end if

            if (typeof options.link_values === 'string') {
                options.link_values = [options.link_values];
            } // end if

            if (typeof options.link_types === 'string') {
                options.link_types = [options.link_types];
            } // end if

            options.get_attributes = convertToBoolean(options.get_attributes) ? 1 : 0;

            return this._doPost(
                fnName,
                [
                    ['id', options.asset_id],
                    ['levels', options.levels],
                    ['type_codes', options.type_codes.join('\\,')],
                    ['link_types', options.link_types.join('\\,')],
                    ['link_values', options.link_values.join('\\,')],
                    ['get_attributes', options.get_attributes],
                ],
                options,
            );
        }, // end getChildren

        /**
         * This will return parent asset ids of the passed asset
         *
         * @param object		options       JSON string of options
         * {
         *      asset_id:		string/int	Id of the asset we are setting attributes for
         *      levels:			int			Number of levels to return
         *      type_codes:		array		asset type_code that we want back
         *      link_types:		array		type of links we are looking for
         *                       			Valid Values - SQ_LINK_TYPE_1, SQ_LINK_TYPE_2, SQ_LINK_TYPE_3, SQ_LINK_NOTICE
         *      link_value:      array		link values we are looking for
         *      get_attributes:	boolean		if we are getting non standard attribute values of the assets(FALSE by default)
         *      dataCallback:	function	Custom callback function
         * }
         */
        getParents: function (options) {
            var fnName = 'getParents';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        asset_id: null,
                        levels: 0,
                        type_codes: [],
                        link_types: [],
                        link_values: [],
                        get_attributes: 0,
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['asset_id'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            if (typeof options.type_codes === 'string') {
                options.type_codes = [options.type_codes];
            } // end if

            if (typeof options.link_values === 'string') {
                options.link_values = [options.link_values];
            } // end if

            if (typeof options.link_types === 'string') {
                options.link_types = [options.link_types];
            } // end if

            options.get_attributes = convertToBoolean(options.get_attributes) ? 1 : 0;

            return this._doPost(
                fnName,
                [
                    ['id', options.asset_id],
                    ['levels', options.levels],
                    ['type_codes', options.type_codes.join('\\,')],
                    ['link_types', options.link_types.join('\\,')],
                    ['link_values', options.link_values.join('\\,')],
                    ['get_attributes', options.get_attributes],
                ],
                options,
            );
        }, // end getParents

        /**
         * This will return the links info of the asset linked the specified asset
         *
         * @param object    options       JSON string of options
         * {
         *      asset_id:        string/int  id of the asset we are setting attributes for
         *      link_types:      array       type of links we are looking for
         *                                   Valid Values - SQ_LINK_TYPE_1, SQ_LINK_TYPE_2, SQ_LINK_TYPE_3, SQ_LINK_NOTICE
         *      type_codes:      array       asset type_code that we want back
         *      strict_type_code boolean     whether to include 'type_code' subclasses
         *      link_value:      array       link values we are looking for
         *      side_of_link:    string      which side of the link is the 'assetid' asset, either 'major' or 'minor'
         *      dependant:       boolean     whether to filter dependant links (null = include both)
         *      exclusive:       boolean     whether to filter exclusive links (null = include both)
         *      get_attributes:  boolean     if we are getting non standard attribute values of the assets(FALSE by default)
         *      dataCallback:    function    Custom callback function
         * }
         */
        getLinks: function (options) {
            var fnName = 'getLinks';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        asset_id: null,
                        link_types: null,
                        type_codes: [],
                        strict_type_code: 1,
                        side_of_link: 'major',
                        link_values: null,
                        dependant: null,
                        exclusive: null,
                        get_attributes: 0,
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['asset_id', 'link_types'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            if (typeof options.type_codes === 'string') {
                options.type_codes = [options.type_codes];
            } // end if

            if (typeof options.link_values === 'string') {
                options.link_values = [options.link_values];
            } // end if

            options.get_attributes = convertToBoolean(options.get_attributes) ? 1 : 0;

            return this._doPost(
                fnName,
                [
                    ['id', options.asset_id],
                    ['link_types', options.link_types],
                    ['type_codes', options.type_codes.join('\\,')],
                    ['strict_type_code', options.strict_type_code][('side_of_link', options.side_of_link)][('link_values', options.link_values.join('\\,'))],
                    ['dependant', options.dependant][('exclusive', options.exclusive)][('get_attributes', options.get_attributes)],
                ],
                options,
            );
        }, // end getLinks

        /**
         * This returns permissions for an asset
         *
         * @param object		options       JSON string of options
         * {
         *      asset_id:		string/int	Id of the asset to get permissions for
         *      level:			int			1=READ 2=WRITE 3=ADMIN, default to READ
         *      dataCallback:	function	Custom callback function
         * }
         */
        getPermissions: function (options) {
            var fnName = 'getPermissions';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        asset_id: null,
                        level: 1,
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['asset_id'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            return this._doPost(
                fnName,
                [
                    ['id', options.asset_id],
                    ['level', options.level],
                ],
                options,
            );
        }, // end getPermissions

        /**
         * Set the given user/user group permission on the given asset
         *
         * @param object		options       JSON string of options
         * {
         *      asset_id:			string/int	Id of the asset to set permissions for
         *      user_ids:			array		Id(s) of user/user group apply permission to
         *      granted:				int			Permission type (1=GRANT 0=DENY -1=REVOKE)
         *      level:				int			Permission level (1=READ 2=WRITE 3=ADMIN). Default 1
         *      cascades:			boolean		Whether to automatically cascade permission to the newly created child assets. Default true
         *      dependants_only:		boolean		Whether apply permission changes to dependant assets only. Default true
         *      dependant_parents:	boolean		Whether apply permission changes to dependant parents instead. Default false
         *      dataCallback:		function	Custom callback function
         * }
         */
        setPermission: function (options) {
            var fnName = 'setPermission';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        asset_id: null,
                        user_ids: null,
                        level: 1,
                        granted: null,
                        cascades: true,
                        dependants_only: true,
                        dependant_parents: false,
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['asset_id', 'user_ids', 'granted'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            return this._doPost(
                fnName,
                [
                    ['id', options.asset_id],
                    ['user_ids', options.user_ids],
                    ['level', options.level],
                    ['granted', options.granted],
                    ['cascades', options.cascades],
                    ['dependants_only', options.dependants_only],
                    ['dependant_parents', options.dependant_parents],
                ],
                options,
            );
        }, // end setPermission

        /**
         * Creates an asset
         *
         * @param object		options       JSON string of options
         * {
         *      parent_id:			string/int		parentid of the asset to create
         *      type_code:			string			type of asset to create
         *      asset_name:			string			name for new asset
         *      link_type:			string			type of link to create
         *      link_value:			string			value of link
         *      sort_order:			int				order in the tree under the parent
         *      is_dependant:		boolean			dependant to parent?
         *      is_exclusive:		boolean			exclusive to parent?
         *      extra_attributes:	boolean			allows additional attributes on create
         *      attributes:			string			String of additional query string containing key/pair values
         *      dataCallback:		function		Custom callback function
         * }
         */
        createAsset: function (options) {
            var fnName = 'createAsset';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        parent_id: null,
                        type_code: '',
                        asset_name: '',
                        link_type: '',
                        link_value: '',
                        sort_order: -1,
                        is_dependant: 0,
                        is_exclusive: 0,
                        extra_attributes: 0,
                        attributes: '',
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['parent_id', 'type_code', 'asset_name', 'link_type'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options, options.extra_attributes === 0);

            options.is_dependant = convertToBoolean(options.is_dependant) ? 1 : 0;
            options.is_exclusive = convertToBoolean(options.is_exclusive) ? 1 : 0;

            if (options.extra_attributes === 1) {
                var params = [];
                for (x in options) {
                    if (x === 'dataCallback') {
                        // Ignore, we use this for our own purposes
                    } else if (x === 'parent_id') {
                        // Re-name this variable
                        params.push(['id', options[x]]);
                    } else {
                        params.push([x, options[x]]);
                    }
                }
            } else {
                var params = [
                    ['id', options.parent_id],
                    ['type_code', options.type_code],
                    ['asset_name', options.asset_name],
                    ['link_type', options.link_type],
                    ['link_value', options.link_value],
                    ['sort_order', options.sort_order],
                    ['is_dependant', options.is_dependant],
                    ['is_exclusive', options.is_exclusive],
                    ['extra_attributes', options.extra_attributes],
                ];
            }

            return this._doPost(fnName, params, options);
        }, // end createAsset

        /**
         * Creates a file asset
         *
         * @param object		options       JSON string of options
         * {
         *      parentID:			string/int		parentid of the asset to create
         *      type_code:			string			type of asset to create
         *      friendly_name:		string			name for new asset
         *      link_type:			string			type of link to create
         *      link_value:			string			value of link
         *      dataCallback:		function		Custom callback function
         * }
         */
        createFileAsset: function (options) {
            var fnName = 'createFileAsset';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        parentID: null,
                        type_code: 'file',
                        friendly_name: '',
                        link_type: 'SQ_LINK_TYPE_1',
                        link_value: '',
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['parentID', 'type_code'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            return this._doPost(
                fnName,
                [
                    ['id', options.parentID],
                    ['type_code', options.type_code],
                    ['friendly_name', options.friendly_name],
                    ['link_type', options.link_type],
                    ['link_value', options.link_value],
                ],
                options,
            );
        }, // end createFileAsset

        /**
         * Returns asset type codes installed on the system
         *
         * @param object		options       JSON string of options
         * {
         *      dataCallback:	function	Custom callback function
         * }
         */
        getAssetTypes: function (options) {
            var fnName = 'getAssetTypes';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: [],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            return this._doPost(fnName, [['id', '1']], options);
        }, // end getAssetTypes

        /**
         * Gets information for the lock type passed for an asset
         *
         * @param object		options       JSON string of options
         * {
         *      asset_id:		string/int	Id of the asset to get permissions for
         *      screen_name:		string		The screen to get locks for
         *      dataCallback:	function	Custom callback function
         * }
         */
        getLocksInfo: function (options) {
            var fnName = 'getLocksInfo';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        asset_id: null,
                        screen_name: 'all',
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['asset_id'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            return this._doPost(
                fnName,
                [
                    ['id', options.asset_id],
                    ['screen', options.screen_name],
                ],
                options,
            );
        }, // end getLocksInfo

        /**
         * Acquires locks on the given asset. if the locks were already acquired
         * by current user then they are updated
         *
         * @param object		options       JSON string of options
         * {
         *      asset_id:		string/int	Id of the asset to get permissions for
         *      screen_name:		string		the screen to get locks on, by default 'all'
         *      dependants_only:	boolean		whether dependants only or all children, defaults to true
         *      force_acquire:	boolean		whether to attempt to forceably acquire the lock or not,  defaults to false
         *      dataCallback:	function	Custom callback function
         * }
         */
        acquireLock: function (options) {
            var fnName = 'acquireLock';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        asset_id: null,
                        screen_name: 'all',
                        dependants_only: 1,
                        force_acquire: 0,
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['asset_id'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            options.dependants_only = convertToBoolean(options.dependants_only) ? 1 : 0;
            options.force_acquire = convertToBoolean(options.force_acquire) ? 1 : 0;

            return this._doPost(
                fnName,
                [
                    ['id', options.asset_id],
                    ['screen', options.screen_name],
                    ['dependants_only', options.dependants_only],
                    ['force_acquire', options.force_acquire],
                ],
                options,
            );
        }, // end acquireLock

        /**
         * Releases locks on the given screen
         *
         * @param object		options       JSON string of options
         * {
         *      asset_id:		string/int	Id of the asset to get permissions for
         *      screen_name:		string		the screen to release locks for
         *      dataCallback:	function	Custom callback function
         * }
         */
        releaseLock: function (options) {
            var fnName = 'releaseLock';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        asset_id: null,
                        screen_name: 'all',
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['asset_id'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            return this._doPost(
                fnName,
                [
                    ['id', options.asset_id],
                    ['screen', options.screen_name],
                ],
                options,
            );
        }, // end releaseLock

        /**
         * Creates a link between two assets with passed information
         *
         * @param object		options       JSON string of options
         * {
         *      parent_id:		string/int	Major asset id we are linking from
         *      child_id:		string/int	Minor asset id we are linking to
         *      link_type:		string		Type of link to create
         *      link_value:		string		Value of the link
         *      sort_order:		int			Order in the tree
         *      is_dependant:	boolean		Dependant to parent
         *      is_exclusive:	boolean		Exclusive to parent
         *      dataCallback:	function	Custom callback function
         * }
         */
        createLink: function (options) {
            var fnName = 'createLink';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        parent_id: null,
                        child_id: null,
                        link_type: '',
                        link_value: '',
                        sort_order: -1,
                        is_dependant: 0,
                        is_exclusive: 0,
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['parent_id', 'child_id', 'link_value', 'link_type'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            options.is_dependant = convertToBoolean(options.is_dependant) ? 1 : 0;
            options.is_exclusive = convertToBoolean(options.is_exclusive) ? 1 : 0;

            return this._doPost(
                fnName,
                [
                    ['id', options.child_id],
                    ['parent_id', options.parent_id],
                    ['link_type', options.link_type],
                    ['link_value', options.link_value],
                    ['sort_order', options.sort_order],
                    ['is_dependant', options.is_dependant],
                    ['is_exclusive', options.is_exclusive],
                ],
                options,
            );
        }, // end createLink

        /**
         * Removes a link between a parent and child
         *
         * @param object		options       JSON string of options
         * {
         *      parent_id:		string/int	Major asset id we are linking from
         *      child_id:		string/int	Minor asset id we are linking to
         *      link_type:		string		type of link we are looking for (SQ_LINK_TYPE_1 link by default)
         *									Valid Values - SQ_LINK_TYPE_1, SQ_LINK_TYPE_2, SQ_LINK_TYPE_3, SQ_LINK_NOTICE
         *      link_value:		string		value of link we are looking for ('' by default)
         *      dataCallback:	function	Custom callback function
         * }
         */
        removeLink: function (options) {
            var fnName = 'removeLink';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        parent_id: null,
                        child_id: null,
                        link_type: 'SQ_LINK_TYPE_1',
                        link_value: '',
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['parent_id', 'child_id', 'link_value', 'link_type'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            return this._doPost(
                fnName,
                [
                    ['id', options.child_id],
                    ['parent_id', options.parent_id],
                    ['link_type', options.link_type],
                    ['link_value', options.link_value],
                ],
                options,
            );
        }, // end removeLink

        /**
         * Removes multiple links between a parent and child pairs
         *
         * @param object		options       JSON string of options
         * {
         *      link_info:		json		json object containing link info as
         *									per removeLink() function of this API
         *      dataCallback:	function	Custom callback function
         * }
         */
        removeMultipleLinks: function (options) {
            var fnName = 'removeMultipleLinks';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        link_info: {},
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['link_info'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            if (options.link_info.hasOwnProperty('links')) {
                if (options.link_info.links.constructor !== Array) {
                    throw '"links" property for function ' + fnName + ' must be an Array';
                } // end if

                var child_ids = [];
                var parent_ids = [];
                var link_types = [];
                var link_values = [];

                for (var i = 0, l = options.link_info.links.length; i < l; i += 1) {
                    child_ids.push(options.link_info.links[i].child);
                    parent_ids.push(options.link_info.links[i].parent);
                    link_types.push(options.link_info.links[i].link_type);
                    link_values.push(options.link_info.links[i].link_value);
                } // end for

                return this._doPost(
                    fnName,
                    [
                        ['child_id', child_ids.join('\\,')],
                        ['parent_id', parent_ids.join('\\,')],
                        ['link_type', link_types.join('\\,')],
                        ['link_value', link_values.join('\\,')],
                    ],
                    options,
                );
            } else {
                throw fnName + ' missing "links" property';
            } // end if
        }, // end removeMultipleLinks

        /**
         * Moves a link from one parent to another
         *
         * @param object		options       JSON string of options
         * {
         *      old_parent_id:		string/int	Id of old parent
         *      child_id:			string/int	Id of the child
         *      old_link_type:		string		type of link we are looking for (SQ_LINK_TYPE_1 link by default)
         *										Valid Values - SQ_LINK_TYPE_1, SQ_LINK_TYPE_2, SQ_LINK_TYPE_3, SQ_LINK_NOTICE
         *      old_link_value:		string		Value of link we are searching for between given assets ('' by default)
         *      new_parent_id:		string/int	Id of the new parent
         *      new_link_type:       string		type of link we are looking for (SQ_LINK_TYPE_1 link by default)
         *										Valid Values - SQ_LINK_TYPE_1, SQ_LINK_TYPE_2, SQ_LINK_TYPE_3, SQ_LINK_NOTICE
         *      new_link_value:		string		Value of link to use ('' by default)
         *      new_position:		int			The new position
         *      dataCallback:		function	Custom callback function
         * }
         */
        moveLink: function (options) {
            var fnName = 'moveLink';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        old_parent_id: null,
                        child_id: null,
                        old_link_type: 'SQ_LINK_TYPE_1',
                        old_link_value: '',
                        new_parent_id: null,
                        new_link_type: 'SQ_LINK_TYPE_1',
                        new_link_value: '',
                        new_position: -1,
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['old_parent_id', 'child_id', 'old_link_type', 'old_link_value', 'new_parent_id'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            return this._doPost(
                fnName,
                [
                    ['id', options.child_id],
                    ['old_parent_id', options.old_parent_id],
                    ['old_link_type', options.old_link_type],
                    ['old_link_value', options.old_link_value],
                    ['new_parent_id', options.new_parent_id],
                    ['new_link_type', options.new_link_type],
                    ['new_link_value', options.new_link_value],
                    ['new_position', options.new_position],
                ],
                options,
            );
        }, // end moveLink

        /**
         * Updates a link with provided information
         *
         * @param object		options       JSON string of options
         * {
         *      parent_id:			string/int	Id of parent
         *      child_id:			string/int	Id of child
         *      existing_link_type:	string		type of link we are looking for (SQ_LINK_TYPE_1 link by default)
         *										Valid Values - SQ_LINK_TYPE_1, SQ_LINK_TYPE_2, SQ_LINK_TYPE_3, SQ_LINK_NOTICE
         *      existing_link_value:	string		existing link value betweent the assets ('' by default)
         *      link_type:   	    string		link type to be updated to (SQ_LINK_TYPE_1 link by default)
         *										Valid Values - SQ_LINK_TYPE_1, SQ_LINK_TYPE_2, SQ_LINK_TYPE_3, SQ_LINK_NOTICE
         *      link_value:			string		Value of link to be updated to ('' by default)
         *      sort_order:			int			The new position
         *      locked:				boolean		the asset link lock status(locked by default)
         *      dataCallback:		function	Custom callback function
         * }
         */
        updateLink: function (options) {
            var fnName = 'updateLink';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        parent_id: null,
                        child_id: null,
                        existing_link_type: 'SQ_LINK_TYPE_1',
                        existing_link_value: '',
                        link_type: null,
                        link_value: null,
                        sort_order: null,
                        locked: '',
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['parent_id', 'child_id', 'existing_link_type', 'existing_link_value'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            return this._doPost(
                fnName,
                [
                    ['id', options.child_id],
                    ['parent_id', options.parent_id],
                    ['existing_link_type', options.existing_link_type],
                    ['existing_link_value', options.existing_link_value],
                    ['link_type', options.link_type],
                    ['link_value', options.link_value],
                    ['sort_order', options.sort_order],
                    ['locked', options.locked],
                ],
                options,
            );
        }, // end updateLink

        /**
         * Updates multiple links
         *
         * @param object		options       JSON string of options
         * {
         *      link_info:		json		object containing all the information
         *									as per updateLink() of this API
         *      dataCallback:	function	Custom callback function
         * }
         */
        updateMultipleLinks: function (options) {
            var fnName = 'updateMultipleLinks';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        link_info: {},
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['link_info'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            if (options.link_info.hasOwnProperty('links')) {
                if (options.link_info.links.constructor !== Array) {
                    throw '"links" property for function ' + fnName + ' must be an Array';
                } // end if

                var child_ids = [];
                var parent_ids = [];
                var link_types = [];
                var link_values = [];
                var existing_link_types = [];
                var existing_link_values = [];
                var sort_orders = [];
                var link_locks = [];

                for (var i = 0, l = options.link_info.links.length; i < l; i += 1) {
                    child_ids.push(options.link_info.links[i].child);
                    parent_ids.push(options.link_info.links[i].parent);
                    link_types.push(options.link_info.links[i].link_type);
                    link_values.push(options.link_info.links[i].link_value);
                    existing_link_types.push(options.link_info.links[i].existing_link_type);
                    existing_link_values.push(options.link_info.links[i].existing_link_value);
                    sort_orders.push(options.link_info.links[i].sort_order);
                    link_locks.push(options.link_info.links[i].link_lock);
                } // end for

                return this._doPost(
                    fnName,
                    [
                        ['child_id', child_ids.join('\\,')],
                        ['parent_id', parent_ids.join('\\,')],
                        ['link_type', link_types.join('\\,')],
                        ['link_value', link_values.join('\\,')],
                        ['existing_link_type', existing_link_types.join('\\,')],
                        ['existing_link_value', existing_link_values.join('\\,')],
                        ['sort_order', sort_orders.join('\\,')],
                        ['locked', link_locks.join('\\,')],
                    ],
                    options,
                );
            } else {
                throw fnName + ' missing "links" property';
            } // end if
        }, // end updateMultipleLinks

        /**
         * Returns the link id between a parent and child
         *
         * @param object		options       JSON string of options
         * {
         *      parent_id:		string/int	Id of parent
         *      child_id:		string/int	Id of child
         *      link_type:		string		type of link we are looking for(SQ_LINK_TYPE_1 link by default)
         *									Valid Values - SQ_LINK_TYPE_1, SQ_LINK_TYPE_2, SQ_LINK_TYPE_3, SQ_LINK_NOTICE
         *      link_value:		string		value of link we are looking for ('' by default)
         *      all_info:		boolean		if we want all the link information or just linkid
         *      dataCallback:	function	Custom callback function
         * }
         */
        getLinkId: function (options) {
            var fnName = 'getLinkId';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        parent_id: null,
                        child_id: null,
                        link_type: 'SQ_LINK_TYPE_1',
                        link_value: '',
                        all_info: 0,
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['parent_id', 'child_id'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            options.all_info = convertToBoolean(options.all_info) ? 1 : 0;

            return this._doPost(
                fnName,
                [
                    ['id', options.child_id],
                    ['parent_id', options.parent_id],
                    ['link_type', options.link_type],
                    ['link_value', options.link_value],
                    ['all_info', options.all_info],
                ],
                options,
            );
        }, // end getLinkId

        /**
         * This will return tree information for children
         *
         * @param object		options       JSON string of options
         * {
         *      asset_id:		string/int	Id of the asset to get children of
         *      levels:			int			Number of levels to return
         *      dataCallback:	function	Custom callback function
         * }
         */
        getAssetTree: function (options) {
            var fnName = 'getAssetTree';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        asset_id: null,
                        levels: 0,
                        link_types: 1,
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['asset_id'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            return this._doPost(
                fnName,
                [
                    ['id', options.asset_id],
                    ['levels', options.levels],
                    ['link_types', options.link_types],
                ],
                options,
            );
        }, // end getAssetTree

        /**
         * This will get replacements for the passed in keywords
         *
         * @param object		options       JSON string of options
         * {
         *      asset_id:		string/int	Id of the asset to get keyword replacements for
         *      keywords_array:	array		Array of keywords to get replacements for
         *      dataCallback:	function	Custom callback function
         * }
         */
        getKeywordsReplacements: function (options) {
            var fnName = 'getKeywordsReplacements';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        asset_id: null,
                        keywords_array: [],
                        null_if_empty: false,
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['asset_id', 'keywords_array'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            for (var i = 0, l = options.keywords_array.length; i < l; i += 1) {
                if (options.keywords_array[i] === '' || /^%(.*)%$/.test(options.keywords_array[i]) === false) {
                    throw 'Incorrect keyword format passed to ' + fnName + ' ("' + options.keywords_array[i] + '")';
                }
            } // end for

            return this._doPost(
                fnName,
                [
                    ['id', options.asset_id],
                    ['keywords', options.keywords_array.join('\\,')],
                    ['null_if_empty', options.null_if_empty],
                ],
                options,
            );
        }, // end getKeywordsReplacements

        /**
         * This will set Asset to the status that is passed in
         *
         * @param object		options       JSON string of options
         * {
         *      asset_id:		string/int	Id of the asset to set status to
         *      status:			int			status tha asset is to be set to
         *      cascade:			boolean		if to cascade the status to non-dependant children(false by default)
         *      workflow_stream:	string		workflow stream to be passed in
         *      dataCallback:	function	Custom callback function
         * }
         */
        setAssetStatus: function (options) {
            var fnName = 'setAssetStatus';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        asset_id: null,
                        status: '',
                        cascade: 0,
                        workflow_stream: '',
                        userlog: '',
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['asset_id', 'status'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            options.cascade = convertToBoolean(options.cascade) ? 1 : 0;

            return this._doPost(
                fnName,
                [
                    ['id', options.asset_id],
                    ['workflow_stream', options.workflow_stream],
                    ['status', options.status],
                    ['cascade', options.cascade],
                    ['userlog', options.userlog],
                ],
                options,
            );
        }, // end setAssetStatus

        /**
         * gets webpath(s) of the assetid supplied
         *
         * @param object		options       JSON string of options
         * {
         *      asset_id:		string/int	Id of the asset to get webpaths for
         *      dataCallback:	function	Custom callback function
         * }
         */
        getWebPath: function (options) {
            var fnName = 'getWebPath';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        asset_id: null,
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['asset_id'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            return this._doPost(fnName, [['id', options.asset_id]], options);
        }, // end getWebPath

        /**
         * This will set webpath(s) of the assetid supplied
         *
         * @param object		options       JSON string of options
         * {
         *      asset_id:		string/int	Id of the asset to set webpaths for
         *      paths:			array		new web paths to be assigned to asset
         *      auto_remap:		boolean		if we are auto remaping(default to TRUE)
         *      dataCallback:	function	Custom callback function
         * }
         */
        setWebPath: function (options) {
            var fnName = 'setWebPath';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        asset_id: null,
                        paths: [],
                        auto_remap: 1,
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['asset_id'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            options.auto_remap = convertToBoolean(options.auto_remap) ? 1 : 0;

            return this._doPost(
                fnName,
                [
                    ['id', options.asset_id],
                    ['webpath', options.paths.join('\\,')],
                    ['auto_remap', options.auto_remap],
                ],
                options,
            );
        }, // end setWebPath

        /**
         * This function will let user edit content of Editable File type assets
         * File type that can be edited - css_file, xml_file, css_file, text_file, js_file
         * User needs to acquire locks before being able to edit the file
         *
         * @param object		options       JSON string of options
         * {
         *      asset_id:		string/int	Id of the asset to update content for
         *      content:			string		new content of the asset
         *      dataCallback:	function	Custom callback function
         * }
         */
        setContentOfEditableFileAsset: function (options) {
            var fnName = 'setContentOfEditableFileAsset';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        asset_id: null,
                        content: 'no_value_provided',
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['asset_id', 'content'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            options.content = escape(options.content);

            return this._doPost(
                fnName,
                [
                    ['id', options.asset_id],
                    ['content', options.content],
                ],
                options,
            );
        }, // end setContentOfEditableFileAsset

        /**
         * This function will let user edit content of File type assets
         * User needs to acquire locks before being able to edit the file
         *
         * @param object		options       JSON string of options
         * {
         *      asset_id:		string/int	Id of the asset to update content for
         *      content:			string		New base64 encoded content for the File asset
         *      dataCallback:	function	Custom callback function
         * }
         */
        updateFileAssetContent: function (options) {
            var fnName = 'updateFileAssetContent';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        asset_id: null,
                        content: 'no_value_provided',
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['asset_id', 'content'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            options.content = escape(options.content);

            return this._doPost(
                fnName,
                [
                    ['id', options.asset_id],
                    ['content', options.content],
                ],
                options,
            );
        }, // end updateFileAssetContent

        /**
         * This function will let user import assets into Matrix from a structured XML file
         * For example for xml file look under System Tools > Import Assets from XML Tool > example.xml
         *
         * @param object		options       JSON string of options
         * {
         *      asset_id:		string/int	Asset under which the assets are to be imported under
         *      filePath:		string		path to file on the file system
         *      dataCallback:	function	Custom callback function
         * }
         */
        importAssetsFromXML: function (options) {
            var fnName = 'importAssetsFromXML';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        asset_id: null,
                        filePath: '',
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['asset_id', 'filePath'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            return this._doPost(
                fnName,
                [
                    ['id', options.asset_id],
                    ['filePath', options.filePath],
                ],
                options,
            );
        }, // end importAssetsFromXML

        /**
         * Returns an array of roles and the users/groups which can perform it
         *
         * @param object		options       JSON string of options
         * {
         *      asset_id:			string/int	the assetid of the asset the role is applied to
         *      role_id:				string/int	the assetid of the the role that is applied
         *      user_id:				string/int	the assetid of the user performing the role
         *      include_assetid:		boolean		whether to include the assetid in the returned array
         *      include_globals:		boolean		whether to query the role view which includes
         *										expanded global roles as individual users
         *      expand_groups:		boolean		when TRUE, any groups defined within a role will be
         *										replaced with the userids in that group
         *										If FALSE, return the groupids
         *      inc_dependants:		boolean		If false it will filter out the dependant assets
         *      include_parents:		boolean		When userid is specified. This will include the roles applied directly to the user and indirectly to user parent groups.
         *      type_codes:		array		When include_assetid is TRUE. This is a type code filter for returned assetids.
         *      strict_type_code:		boolean		Use strict type code for type code filter
         *      dataCallback:		function	Custom callback function
         * }
         */
        getRoles: function (options) {
            var fnName = 'getRoles';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        asset_id: '',
                        role_id: '',
                        user_id: '',
                        include_assetid: 0,
                        include_globals: 0,
                        expand_groups: 0,
                        inc_dependants: 0,
                        include_parents: 0,
                        type_codes: [],
                        strict_type_code: 1,
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: [],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            options.include_assetid = convertToBoolean(options.include_assetid) ? 1 : 0;
            options.include_globals = convertToBoolean(options.include_globals) ? 1 : 0;
            options.expand_groups = convertToBoolean(options.expand_groups) ? 1 : 0;
            options.inc_dependants = convertToBoolean(options.inc_dependants) ? 1 : 0;
            options.include_parents = convertToBoolean(options.include_parents) ? 1 : 0;
            options.strict_type_code = convertToBoolean(options.strict_type_code) ? 1 : 0;

            return this._doPost(
                fnName,
                [
                    ['id', options.asset_id],
                    ['roleid', options.role_id],
                    ['userid', options.user_id],
                    ['include_assetid', options.include_assetid],
                    ['include_globals', options.include_globals],
                    ['expand_groups', options.expand_groups],
                    ['inc_dependants', options.inc_dependants],
                    ['include_parents', options.include_parents],
                    ['type_codes', options.type_codes],
                    ['strict_type_code', options.strict_type_code],
                ],
                options,
            );
        }, // end getRoles

        /**
         * Performs HTMLTidy on the passed content and returns cleaned up code
         *
         * @param object		options       JSON string of options
         * {
         *      content:			string		the string content that needs to be cleaned up
         *      dataCallback:	function	Custom callback function
         * }
         */
        executeHTMLTidy: function (options) {
            var fnName = 'executeHTMLTidy';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        content: '',
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['content'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            return this._doPost(fnName, [['content', options.content]], options);
        }, // end executeHTMLTidy

        /**
         * Clones the given asset under the parent passed in
         *
         * @param object		options       JSON string of options
         * {
         *      asset_id:		string/int	asset under which the assets are to be imported under
         *      new_parent		string/int	assetid of the parent to clone under
         *      clone_name		string		number of clones to create under new parent (default is 1)
         *      clone_num		int			number of clones to create under new parent (default is 1)
         *      new_position		int			position to place the newly cloned asset at (default at the bottom)
         *      link_type		string		type of links we want to create for cloned asset (default is SQ_LINK_TYPE_1)
         *									Valid Values - SQ_LINK_TYPE_1, SQ_LINK_TYPE_2, SQ_LINK_TYPE_3
         *      link_value		string		the value of new link we want (default '')
         *      dataCallback:	function	Custom callback function
         * }
         */
        cloneAsset: function (options) {
            var fnName = 'cloneAsset';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        asset_id: null,
                        new_parent: null,
                        clone_name: '',
                        clone_num: 1,
                        new_position: -1,
                        link_type: 'SQ_LINK_TYPE_1',
                        link_value: '',
                        is_dependant: null,
                        is_exclusive: null,
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['asset_id', 'new_parent'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            return this._doPost(
                fnName,
                [
                    ['id', options.asset_id],
                    ['new_parent', options.new_parent],
                    ['clone_name', options.clone_name],
                    ['clone_num', options.clone_num],
                    ['new_position', options.new_position],
                    ['link_type', options.link_type],
                    ['link_value', options.link_value],
                    ['is_dependant', options.is_dependant],
                    ['is_exclusive', options.is_exclusive],
                ],
                options,
            );
        }, // end cloneAsset

        /**
         *
         * gets the content (with or without paint layout) and check for the difference
         *
         * @param object		options       JSON string of options
         * {
         *      assetid_1:		string/int	assetid of first asset
         *      assetid_2:		string/int	assetid of second asset
         *      paint_layout_1:	string		assetid of the paint layout you want to use on asset_1
         *      paint_layout_2:	string		assetid of the paint layout you want to use on asset_2
         *      dataCallback:	function	Custom callback function
         * }
         */
        showDifference: function (options) {
            var fnName = 'showDifference';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        assetid_1: null,
                        assetid_2: null,
                        paint_layout_1: '',
                        paint_layout_2: '',
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['assetid_1', 'assetid_2'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            return this._doPost(
                fnName,
                [
                    ['id', options.assetid_1],
                    ['assetid_2', options.assetid_2],
                    ['paint_layout_1', options.paint_layout_1],
                    ['paint_layout_2', options.paint_layout_2],
                ],
                options,
            );
        }, // end showDifference

        /**
         *
         * gets the content (with or without paint layout) and check for the difference
         *
         * @param object		options       JSON string of options
         * {
         *      assetid:		string/int		the asset to get the info of the schemas applied to
         *      granted:		boolean			type of access : TRUE = applied, FALSE = denied
         *      cascades:	boolean			does this schema cascade to newly created assets?
         *      dataCallback:	function	Custom callback function
         * }
         */
        getMetadataSchema: function (options) {
            var fnName = 'getMetadataSchema';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        assetid: null,
                        granted: 1,
                        cascades: null,
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['assetid'],
                };
            } // end if

            if (options.asset_id !== null && typeof options.asset_id !== 'undefined') {
                options.assetid = options.asset_id;
            }

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            options.granted = convertToBoolean(options.granted) ? 1 : 0;

            return this._doPost(
                fnName,
                [
                    ['id', options.assetid],
                    ['granted', options.granted],
                    ['cascades', options.cascades],
                ],
                options,
            );
        }, // end getMetadataSchema

        /**
         *
         * Sets or unsets the passed metadata schema on the asset
         *
         * @param object		options       JSON string of options
         * {
         *      assetid:			string/int		the asset to edit schema on
         *      schemaid:		string/int		the metadata schema to be applied
         *      set:				boolean			set = 1/TRUE; unset = 0/FALSE
         *      granted:			boolean			type of access : TRUE = applied, FALSE = denied
         *      cascades:		boolean			does this schema cascade to newly created assets?
         *      dataCallback:	function		Custom callback function
         * }
         */
        editMetadataSchema: function (options) {
            var fnName = 'editMetadataSchema';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        assetid: null,
                        schemaid: null,
                        set: '',
                        granted: 1,
                        cascades: null,
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['assetid', 'schemaid', 'set'],
                };
            } // end if

            if (options.asset_id !== null && typeof options.asset_id !== 'undefined') {
                options.assetid = options.asset_id;
            }

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            options.set = convertToBoolean(options.set) ? 1 : 0;
            options.granted = convertToBoolean(options.granted) ? 1 : 0;

            return this._doPost(
                fnName,
                [
                    ['id', options.assetid],
                    ['schemaid', options.schemaid],
                    ['set', options.set],
                    ['granted', options.granted],
                    ['cascades', options.cascades],
                ],
                options,
            );
        }, // end editMetadataSchema

        /**
         * Validates the user and optionally returns the usergroup it belongs to
         *
         *
         * @param object		options       JSON string of options
         * {
         *      username:		string		Username to validate
         *      get_groups:		boolean		Set this to 1 to also return the user groups the user belongs to
         *									if the user is found. Returns 0 if the user isn't valid
         *      dataCallback:	function	Custom callback function
         * }
         */
        validateActiveUser: function (options) {
            var fnName = 'validateActiveUser';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        username: null,
                        get_groups: false,
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['username'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            options.get_groups = convertToBoolean(options.get_groups) ? 1 : 0;

            return this._doPost(
                fnName,
                [
                    ['username', options.username],
                    ['get_groups', options.get_groups],
                ],
                options,
            );
        }, // end validateActiveUser

        /**
         * Makes a request for the experiments attached to a profile.
         *
         * @param {Object} options                       Request info.
         * @param {String} options.assetid               The ID of the asset
         * @param {Function} options.dataCallback        Custom callback function.
         */
        getFileIndexingComponents: function (options) {
            var fnName = 'getFileIndexingComponents';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        asset_urls: [],
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['asset_urls'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            return this._doPost(fnName, [['asset_urls', options.asset_urls]], options);
        }, // end getFileIndexingComponents

        /**
         * Makes a request for the experiments attached to a profile.
         *
         * @param {Object} options                       Request info.
         * @param {String} options.assetid               The ID of the asset
         * @param {Function} options.dataCallback        Custom callback function.
         */
        morphAsset: function (options) {
            var fnName = 'morphAsset';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        asset_id: null,
                        new_type_code: null,
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['asset_id', 'new_type_code'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            return this._doPost(
                fnName,
                [
                    ['id', options.asset_id],
                    ['new_type_code', options.new_type_code],
                ],
                options,
            );
        }, // end morphAsset

        /**
         * Permanently re-order assets in the Asset Map.
         *
         * @param object		options       JSON string of options
         * {
         *      parent_id:			string/int	Asset Id of the system you want to sort the child assets for.
         *      sort_by:				string		Keywords used to the sort by.
         *      sort_direction:		string		Sort Ascending or Descending.
         *      sort_type: 			integer		Sorting type flags
         *      dataCallback:		function	Custom callback function
         * }
         */
        sortAssetChildren: function (options) {
            var fnName = 'sortAssetChildren';
            if (arguments.length === 0) {
                return {
                    // Set the default values
                    defaults: {
                        parent_id: null,
                        sort_by: null,
                        sort_direction: null,
                        sort_type: null,
                        dataCallback: function () {},
                        errorCallback: null,
                    },

                    // Set the required arguments
                    required: ['parent_id', 'sort_by', 'sort_direction'],
                };
            } // end if

            // Extract some configuration and use it to build
            // parameters for the post call
            var fnConfig = this[fnName].call(this);
            options = this._options(fnConfig.required, fnConfig.defaults, options);

            return this._doPost(
                fnName,
                [
                    ['id', options.parent_id],
                    ['sort_by', options.sort_by],
                    ['sort_direction', options.sort_direction],
                    ['sort_type', options.sort_type],
                ],
                options,
            );
        }, // sortAssetChildren

        /**
         * Shortcut function for sending post data
         */
        _doPost: function (fnName, data, options, promiseFns) {
            var self = this;
            var promise = undefined;

            // Add the 'type' parameter for as the calling function name
            data.push(['type', fnName]);

            // append nonce token
            if (!self.nonceToken) {
                var tokenElem = document.getElementById('token');
                if (tokenElem) {
                    self.nonceToken = tokenElem.value;
                }
            }

            var httpOptions = {
                params: data,
                onSuccess: function (json) {
                    // Every function should have a dataCallback argument
                    if (options.hasOwnProperty('dataCallback')) {
                        options.dataCallback.call(this, json);
                    } // end if
                },
            };

            if (options.hasOwnProperty('errorCallback') && typeof options.errorCallback === 'function') {
                httpOptions.onError = function (http) {
                    options.errorCallback.call(this, http);
                };
            } // end if

            var doRequest = function (data, httpOptions, promiseFns) {
                if (self.nonceToken) {
                    data.push(['nonce_token', self.nonceToken]);
                    self._http(httpOptions, promiseFns);
                } else {
                    var xmlhttp;
                    if (window.XMLHttpRequest) {
                        // code for IE7+, Firefox, Chrome, Opera, Safari
                        xmlhttp = new XMLHttpRequest();
                    } else {
                        // code for IE6, IE5
                        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
                    }
                    xmlhttp.onreadystatechange = function () {
                        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                            self.nonceToken = xmlhttp.responseText;
                            data.push(['nonce_token', self.nonceToken]);
                            httpOptions.params = data;
                            self._http(httpOptions, promiseFns);
                        }
                    };
                    xmlhttp.open('GET', window.jsApiMockedURL + '?SQ_ACTION=getToken', true);
                    xmlhttp.send();
                }
            };

            if (typeof Promise !== 'undefined') {
                promise = new Promise(function (resolve, reject) {
                    doRequest(data, httpOptions, {
                        resolve: resolve,
                        reject: reject,
                    });
                });
            } else {
                doRequest(data, httpOptions, undefined);
            }

            return promise;
        }, // end _doPost
    }; // end Squiz_Matrix_API methods
})(window);

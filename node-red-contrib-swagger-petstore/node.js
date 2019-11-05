'use strict';
var lib = require('./lib.js');

module.exports = function (RED) {
    function SwaggerPetstoreNode(config) {
        RED.nodes.createNode(this, config);
        this.service = RED.nodes.getNode(config.service);
        this.method = config.method;
        this.addPet_body = config.addPet_body;
        this.addPet_bodyType = config.addPet_bodyType || 'str';
        this.updatePet_body = config.updatePet_body;
        this.updatePet_bodyType = config.updatePet_bodyType || 'str';
        this.findPetsByStatus_status = config.findPetsByStatus_status;
        this.findPetsByStatus_statusType = config.findPetsByStatus_statusType || 'str';
        this.findPetsByTags_tags = config.findPetsByTags_tags;
        this.findPetsByTags_tagsType = config.findPetsByTags_tagsType || 'str';
        this.getPetById_petId = config.getPetById_petId;
        this.getPetById_petIdType = config.getPetById_petIdType || 'str';
        this.updatePetWithForm_petId = config.updatePetWithForm_petId;
        this.updatePetWithForm_petIdType = config.updatePetWithForm_petIdType || 'str';
        this.updatePetWithForm_name = config.updatePetWithForm_name;
        this.updatePetWithForm_nameType = config.updatePetWithForm_nameType || 'str';
        this.updatePetWithForm_status = config.updatePetWithForm_status;
        this.updatePetWithForm_statusType = config.updatePetWithForm_statusType || 'str';
        this.deletePet_apiKey = config.deletePet_apiKey;
        this.deletePet_apiKeyType = config.deletePet_apiKeyType || 'str';
        this.deletePet_petId = config.deletePet_petId;
        this.deletePet_petIdType = config.deletePet_petIdType || 'str';
        this.uploadFile_petId = config.uploadFile_petId;
        this.uploadFile_petIdType = config.uploadFile_petIdType || 'str';
        this.uploadFile_additionalMetadata = config.uploadFile_additionalMetadata;
        this.uploadFile_additionalMetadataType = config.uploadFile_additionalMetadataType || 'str';
        this.uploadFile_file = config.uploadFile_file;
        this.uploadFile_fileType = config.uploadFile_fileType || 'str';
        this.placeOrder_body = config.placeOrder_body;
        this.placeOrder_bodyType = config.placeOrder_bodyType || 'str';
        this.getOrderById_orderId = config.getOrderById_orderId;
        this.getOrderById_orderIdType = config.getOrderById_orderIdType || 'str';
        this.deleteOrder_orderId = config.deleteOrder_orderId;
        this.deleteOrder_orderIdType = config.deleteOrder_orderIdType || 'str';
        this.createUser_body = config.createUser_body;
        this.createUser_bodyType = config.createUser_bodyType || 'str';
        this.createUsersWithArrayInput_body = config.createUsersWithArrayInput_body;
        this.createUsersWithArrayInput_bodyType = config.createUsersWithArrayInput_bodyType || 'str';
        this.createUsersWithListInput_body = config.createUsersWithListInput_body;
        this.createUsersWithListInput_bodyType = config.createUsersWithListInput_bodyType || 'str';
        this.loginUser_username = config.loginUser_username;
        this.loginUser_usernameType = config.loginUser_usernameType || 'str';
        this.loginUser_password = config.loginUser_password;
        this.loginUser_passwordType = config.loginUser_passwordType || 'str';
        this.getUserByName_username = config.getUserByName_username;
        this.getUserByName_usernameType = config.getUserByName_usernameType || 'str';
        this.updateUser_username = config.updateUser_username;
        this.updateUser_usernameType = config.updateUser_usernameType || 'str';
        this.updateUser_body = config.updateUser_body;
        this.updateUser_bodyType = config.updateUser_bodyType || 'str';
        this.deleteUser_username = config.deleteUser_username;
        this.deleteUser_usernameType = config.deleteUser_usernameType || 'str';
        var node = this;

        node.on('input', function (msg) {
            var errorFlag = false;
            var client = new lib.SwaggerPetstore();
            if (!errorFlag && this.service && this.service.credentials && this.service.credentials.secureTokenValue) {
                if (this.service.secureTokenIsQuery) {
                    client.setToken(this.service.credentials.secureTokenValue,
                                    this.service.secureTokenHeaderOrQueryName, true);
                } else {
                    client.setToken(this.service.credentials.secureTokenValue,
                                    this.service.secureTokenHeaderOrQueryName, false);
                }
            }
            if (!errorFlag && this.service && this.service.credentials && this.service.credentials.secureApiKeyValue) {
                if (this.service.secureApiKeyIsQuery) {
                    client.setApiKey(this.service.credentials.secureApiKeyValue,
                                     this.service.secureApiKeyHeaderOrQueryName, true);
                } else {
                    client.setApiKey(this.service.credentials.secureApiKeyValue,
                                     this.service.secureApiKeyHeaderOrQueryName, false);
                }
            }
            if (!errorFlag) {
                client.body = msg.payload;
            }

            var result;
            if (!errorFlag && node.method === 'addPet') {
                var addPet_parameters = [];
                var addPet_nodeParam;
                var addPet_nodeParamType;

                if (typeof msg.payload === 'object') {
                    addPet_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                                result = client.addPet(addPet_parameters);
            }
            if (!errorFlag && node.method === 'updatePet') {
                var updatePet_parameters = [];
                var updatePet_nodeParam;
                var updatePet_nodeParamType;

                if (typeof msg.payload === 'object') {
                    updatePet_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                                result = client.updatePet(updatePet_parameters);
            }
            if (!errorFlag && node.method === 'findPetsByStatus') {
                var findPetsByStatus_parameters = [];
                var findPetsByStatus_nodeParam;
                var findPetsByStatus_nodeParamType;

                findPetsByStatus_nodeParam = node.findPetsByStatus_status;
                findPetsByStatus_nodeParamType = node.findPetsByStatus_statusType;
                if (findPetsByStatus_nodeParamType === 'str') {
                    findPetsByStatus_parameters.status = findPetsByStatus_nodeParam || '';
                } else {
                    findPetsByStatus_parameters.status = RED.util.getMessageProperty(msg, findPetsByStatus_nodeParam);
                }
                findPetsByStatus_parameters.status = !!findPetsByStatus_parameters.status ? findPetsByStatus_parameters.status : msg.payload;
                                result = client.findPetsByStatus(findPetsByStatus_parameters);
            }
            if (!errorFlag && node.method === 'findPetsByTags') {
                var findPetsByTags_parameters = [];
                var findPetsByTags_nodeParam;
                var findPetsByTags_nodeParamType;

                findPetsByTags_nodeParam = node.findPetsByTags_tags;
                findPetsByTags_nodeParamType = node.findPetsByTags_tagsType;
                if (findPetsByTags_nodeParamType === 'str') {
                    findPetsByTags_parameters.tags = findPetsByTags_nodeParam || '';
                } else {
                    findPetsByTags_parameters.tags = RED.util.getMessageProperty(msg, findPetsByTags_nodeParam);
                }
                findPetsByTags_parameters.tags = !!findPetsByTags_parameters.tags ? findPetsByTags_parameters.tags : msg.payload;
                                result = client.findPetsByTags(findPetsByTags_parameters);
            }
            if (!errorFlag && node.method === 'getPetById') {
                var getPetById_parameters = [];
                var getPetById_nodeParam;
                var getPetById_nodeParamType;

                getPetById_nodeParam = node.getPetById_petId;
                getPetById_nodeParamType = node.getPetById_petIdType;
                if (getPetById_nodeParamType === 'str') {
                    getPetById_parameters.petId = getPetById_nodeParam || '';
                } else {
                    getPetById_parameters.petId = RED.util.getMessageProperty(msg, getPetById_nodeParam);
                }
                getPetById_parameters.petId = !!getPetById_parameters.petId ? getPetById_parameters.petId : msg.payload;
                                result = client.getPetById(getPetById_parameters);
            }
            if (!errorFlag && node.method === 'updatePetWithForm') {
                var updatePetWithForm_parameters = [];
                var updatePetWithForm_nodeParam;
                var updatePetWithForm_nodeParamType;

                updatePetWithForm_nodeParam = node.updatePetWithForm_petId;
                updatePetWithForm_nodeParamType = node.updatePetWithForm_petIdType;
                if (updatePetWithForm_nodeParamType === 'str') {
                    updatePetWithForm_parameters.petId = updatePetWithForm_nodeParam || '';
                } else {
                    updatePetWithForm_parameters.petId = RED.util.getMessageProperty(msg, updatePetWithForm_nodeParam);
                }
                updatePetWithForm_parameters.petId = !!updatePetWithForm_parameters.petId ? updatePetWithForm_parameters.petId : msg.payload;
                
                updatePetWithForm_nodeParam = node.updatePetWithForm_name;
                updatePetWithForm_nodeParamType = node.updatePetWithForm_nameType;
                if (updatePetWithForm_nodeParamType === 'str') {
                    updatePetWithForm_parameters.name = updatePetWithForm_nodeParam || '';
                } else {
                    updatePetWithForm_parameters.name = RED.util.getMessageProperty(msg, updatePetWithForm_nodeParam);
                }
                updatePetWithForm_parameters.name = !!updatePetWithForm_parameters.name ? updatePetWithForm_parameters.name : msg.payload;
                
                updatePetWithForm_nodeParam = node.updatePetWithForm_status;
                updatePetWithForm_nodeParamType = node.updatePetWithForm_statusType;
                if (updatePetWithForm_nodeParamType === 'str') {
                    updatePetWithForm_parameters.status = updatePetWithForm_nodeParam || '';
                } else {
                    updatePetWithForm_parameters.status = RED.util.getMessageProperty(msg, updatePetWithForm_nodeParam);
                }
                updatePetWithForm_parameters.status = !!updatePetWithForm_parameters.status ? updatePetWithForm_parameters.status : msg.payload;
                                result = client.updatePetWithForm(updatePetWithForm_parameters);
            }
            if (!errorFlag && node.method === 'deletePet') {
                var deletePet_parameters = [];
                var deletePet_nodeParam;
                var deletePet_nodeParamType;

                deletePet_nodeParam = node.deletePet_apiKey;
                deletePet_nodeParamType = node.deletePet_apiKeyType;
                if (deletePet_nodeParamType === 'str') {
                    deletePet_parameters.apiKey = deletePet_nodeParam || '';
                } else {
                    deletePet_parameters.apiKey = RED.util.getMessageProperty(msg, deletePet_nodeParam);
                }
                deletePet_parameters.apiKey = !!deletePet_parameters.apiKey ? deletePet_parameters.apiKey : msg.payload;
                
                deletePet_nodeParam = node.deletePet_petId;
                deletePet_nodeParamType = node.deletePet_petIdType;
                if (deletePet_nodeParamType === 'str') {
                    deletePet_parameters.petId = deletePet_nodeParam || '';
                } else {
                    deletePet_parameters.petId = RED.util.getMessageProperty(msg, deletePet_nodeParam);
                }
                deletePet_parameters.petId = !!deletePet_parameters.petId ? deletePet_parameters.petId : msg.payload;
                                result = client.deletePet(deletePet_parameters);
            }
            if (!errorFlag && node.method === 'uploadFile') {
                var uploadFile_parameters = [];
                var uploadFile_nodeParam;
                var uploadFile_nodeParamType;

                uploadFile_nodeParam = node.uploadFile_petId;
                uploadFile_nodeParamType = node.uploadFile_petIdType;
                if (uploadFile_nodeParamType === 'str') {
                    uploadFile_parameters.petId = uploadFile_nodeParam || '';
                } else {
                    uploadFile_parameters.petId = RED.util.getMessageProperty(msg, uploadFile_nodeParam);
                }
                uploadFile_parameters.petId = !!uploadFile_parameters.petId ? uploadFile_parameters.petId : msg.payload;
                
                uploadFile_nodeParam = node.uploadFile_additionalMetadata;
                uploadFile_nodeParamType = node.uploadFile_additionalMetadataType;
                if (uploadFile_nodeParamType === 'str') {
                    uploadFile_parameters.additionalMetadata = uploadFile_nodeParam || '';
                } else {
                    uploadFile_parameters.additionalMetadata = RED.util.getMessageProperty(msg, uploadFile_nodeParam);
                }
                uploadFile_parameters.additionalMetadata = !!uploadFile_parameters.additionalMetadata ? uploadFile_parameters.additionalMetadata : msg.payload;
                
                uploadFile_nodeParam = node.uploadFile_file;
                uploadFile_nodeParamType = node.uploadFile_fileType;
                if (uploadFile_nodeParamType === 'str') {
                    uploadFile_parameters.file = uploadFile_nodeParam || '';
                } else {
                    uploadFile_parameters.file = RED.util.getMessageProperty(msg, uploadFile_nodeParam);
                }
                uploadFile_parameters.file = !!uploadFile_parameters.file ? uploadFile_parameters.file : msg.payload;
                                result = client.uploadFile(uploadFile_parameters);
            }
            if (!errorFlag && node.method === 'getInventory') {
                var getInventory_parameters = [];
                var getInventory_nodeParam;
                var getInventory_nodeParamType;
                result = client.getInventory(getInventory_parameters);
            }
            if (!errorFlag && node.method === 'placeOrder') {
                var placeOrder_parameters = [];
                var placeOrder_nodeParam;
                var placeOrder_nodeParamType;

                if (typeof msg.payload === 'object') {
                    placeOrder_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                                result = client.placeOrder(placeOrder_parameters);
            }
            if (!errorFlag && node.method === 'getOrderById') {
                var getOrderById_parameters = [];
                var getOrderById_nodeParam;
                var getOrderById_nodeParamType;

                getOrderById_nodeParam = node.getOrderById_orderId;
                getOrderById_nodeParamType = node.getOrderById_orderIdType;
                if (getOrderById_nodeParamType === 'str') {
                    getOrderById_parameters.orderId = getOrderById_nodeParam || '';
                } else {
                    getOrderById_parameters.orderId = RED.util.getMessageProperty(msg, getOrderById_nodeParam);
                }
                getOrderById_parameters.orderId = !!getOrderById_parameters.orderId ? getOrderById_parameters.orderId : msg.payload;
                                result = client.getOrderById(getOrderById_parameters);
            }
            if (!errorFlag && node.method === 'deleteOrder') {
                var deleteOrder_parameters = [];
                var deleteOrder_nodeParam;
                var deleteOrder_nodeParamType;

                deleteOrder_nodeParam = node.deleteOrder_orderId;
                deleteOrder_nodeParamType = node.deleteOrder_orderIdType;
                if (deleteOrder_nodeParamType === 'str') {
                    deleteOrder_parameters.orderId = deleteOrder_nodeParam || '';
                } else {
                    deleteOrder_parameters.orderId = RED.util.getMessageProperty(msg, deleteOrder_nodeParam);
                }
                deleteOrder_parameters.orderId = !!deleteOrder_parameters.orderId ? deleteOrder_parameters.orderId : msg.payload;
                                result = client.deleteOrder(deleteOrder_parameters);
            }
            if (!errorFlag && node.method === 'createUser') {
                var createUser_parameters = [];
                var createUser_nodeParam;
                var createUser_nodeParamType;

                if (typeof msg.payload === 'object') {
                    createUser_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                                result = client.createUser(createUser_parameters);
            }
            if (!errorFlag && node.method === 'createUsersWithArrayInput') {
                var createUsersWithArrayInput_parameters = [];
                var createUsersWithArrayInput_nodeParam;
                var createUsersWithArrayInput_nodeParamType;

                if (typeof msg.payload === 'object') {
                    createUsersWithArrayInput_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                                result = client.createUsersWithArrayInput(createUsersWithArrayInput_parameters);
            }
            if (!errorFlag && node.method === 'createUsersWithListInput') {
                var createUsersWithListInput_parameters = [];
                var createUsersWithListInput_nodeParam;
                var createUsersWithListInput_nodeParamType;

                if (typeof msg.payload === 'object') {
                    createUsersWithListInput_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                                result = client.createUsersWithListInput(createUsersWithListInput_parameters);
            }
            if (!errorFlag && node.method === 'loginUser') {
                var loginUser_parameters = [];
                var loginUser_nodeParam;
                var loginUser_nodeParamType;

                loginUser_nodeParam = node.loginUser_username;
                loginUser_nodeParamType = node.loginUser_usernameType;
                if (loginUser_nodeParamType === 'str') {
                    loginUser_parameters.username = loginUser_nodeParam || '';
                } else {
                    loginUser_parameters.username = RED.util.getMessageProperty(msg, loginUser_nodeParam);
                }
                loginUser_parameters.username = !!loginUser_parameters.username ? loginUser_parameters.username : msg.payload;
                
                loginUser_nodeParam = node.loginUser_password;
                loginUser_nodeParamType = node.loginUser_passwordType;
                if (loginUser_nodeParamType === 'str') {
                    loginUser_parameters.password = loginUser_nodeParam || '';
                } else {
                    loginUser_parameters.password = RED.util.getMessageProperty(msg, loginUser_nodeParam);
                }
                loginUser_parameters.password = !!loginUser_parameters.password ? loginUser_parameters.password : msg.payload;
                                result = client.loginUser(loginUser_parameters);
            }
            if (!errorFlag && node.method === 'logoutUser') {
                var logoutUser_parameters = [];
                var logoutUser_nodeParam;
                var logoutUser_nodeParamType;
                result = client.logoutUser(logoutUser_parameters);
            }
            if (!errorFlag && node.method === 'getUserByName') {
                var getUserByName_parameters = [];
                var getUserByName_nodeParam;
                var getUserByName_nodeParamType;

                getUserByName_nodeParam = node.getUserByName_username;
                getUserByName_nodeParamType = node.getUserByName_usernameType;
                if (getUserByName_nodeParamType === 'str') {
                    getUserByName_parameters.username = getUserByName_nodeParam || '';
                } else {
                    getUserByName_parameters.username = RED.util.getMessageProperty(msg, getUserByName_nodeParam);
                }
                getUserByName_parameters.username = !!getUserByName_parameters.username ? getUserByName_parameters.username : msg.payload;
                                result = client.getUserByName(getUserByName_parameters);
            }
            if (!errorFlag && node.method === 'updateUser') {
                var updateUser_parameters = [];
                var updateUser_nodeParam;
                var updateUser_nodeParamType;

                updateUser_nodeParam = node.updateUser_username;
                updateUser_nodeParamType = node.updateUser_usernameType;
                if (updateUser_nodeParamType === 'str') {
                    updateUser_parameters.username = updateUser_nodeParam || '';
                } else {
                    updateUser_parameters.username = RED.util.getMessageProperty(msg, updateUser_nodeParam);
                }
                updateUser_parameters.username = !!updateUser_parameters.username ? updateUser_parameters.username : msg.payload;
                
                if (typeof msg.payload === 'object') {
                    updateUser_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                                result = client.updateUser(updateUser_parameters);
            }
            if (!errorFlag && node.method === 'deleteUser') {
                var deleteUser_parameters = [];
                var deleteUser_nodeParam;
                var deleteUser_nodeParamType;

                deleteUser_nodeParam = node.deleteUser_username;
                deleteUser_nodeParamType = node.deleteUser_usernameType;
                if (deleteUser_nodeParamType === 'str') {
                    deleteUser_parameters.username = deleteUser_nodeParam || '';
                } else {
                    deleteUser_parameters.username = RED.util.getMessageProperty(msg, deleteUser_nodeParam);
                }
                deleteUser_parameters.username = !!deleteUser_parameters.username ? deleteUser_parameters.username : msg.payload;
                                result = client.deleteUser(deleteUser_parameters);
            }
            if (!errorFlag && result === undefined) {
                node.error('Method is not specified.', msg);
                errorFlag = true;
            }
            var setData = function (msg, data) {
                if (data) {
                    if (data.response) {
                        if (data.response.statusCode) {
                            msg.statusCode = data.response.statusCode;
                        }
                        if (data.response.headers) {
                            msg.headers = data.response.headers;
                        }
                        if (data.response.request && data.response.request.uri && data.response.request.uri.href) {
                            msg.responseUrl = data.response.request.uri.href;
                        }
                    }
                    if (data.body) {
                        msg.payload = data.body;
                    }
                }
                return msg;
            };
            if (!errorFlag) {
                node.status({ fill: 'blue', shape: 'dot', text: 'SwaggerPetstore.status.requesting' });
                result.then(function (data) {
                    node.send(setData(msg, data));
                    node.status({});
                }).catch(function (error) {
                    var message = null;
                    if (error && error.body && error.body.message) {
                        message = error.body.message;
                    }
                    node.error(message, setData(msg, error));
                    node.status({ fill: 'red', shape: 'ring', text: 'node-red:common.status.error' });
                });
            }
        });
    }

    RED.nodes.registerType('swagger-petstore', SwaggerPetstoreNode);
    function SwaggerPetstoreServiceNode(n) {
        RED.nodes.createNode(this, n);

        this.secureTokenValue = n.secureTokenValue;
        this.secureTokenHeaderOrQueryName = n.secureTokenHeaderOrQueryName;
        this.secureTokenIsQuery = n.secureTokenIsQuery;
        this.secureApiKeyValue = n.secureApiKeyValue;
        this.secureApiKeyHeaderOrQueryName = n.secureApiKeyHeaderOrQueryName;
        this.secureApiKeyIsQuery = n.secureApiKeyIsQuery;
    }

    RED.nodes.registerType('swagger-petstore-service', SwaggerPetstoreServiceNode, {
        credentials: {
            secureTokenValue: { type: 'password' },
            secureApiKeyValue: { type: 'password' },
            temp: { type: 'text' }
        }
    });
};

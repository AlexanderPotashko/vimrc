Vim�UnDo� ATQ@w� v���'�1Ѻ��82��)����y��      7export default (router, middleware, validation) => { };      6                       Xw�    _�                             ����                                                                                                                                                                                                                                                                                                                                                  V        Xw     �                 ;import userController from './controllers/user.controller';   =import usersController from './controllers/users.controller';   ;import authController from './controllers/auth.controller';   Cimport contactsController from './controllers/contacts.controller';    5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        Xw     �                  //user   C  router.route('/user').get(middleware.auth, userController.index);   Y  router.route('/user/statusLine').put(middleware.auth, userController.updateStatusLine);   Q  router.route('/user/status').put(middleware.auth, userController.updateStatus);       	  //users   M  router.route('/users').get(middleware.auth, usersController.getUsersByIds);         //auth   P  router.route('/auth/login').post(validation.auth.login, authController.login);         //contacts   \  router.route('/contacts/favorites').get(middleware.auth, contactsController.getFavorites);   V  router.route('/contacts/recent').get(middleware.auth, contactsController.getRecent);   o  router.route('/contacts/search').get(middleware.auth, validation.contacts.search, contactsController.search);    5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        Xw     �                  4export default (router, middleware, validation) => {   };5�_�                        6    ����                                                                                                                                                                                                                                                                                                                               5          5       V        Xw�    �                  7export default (router, middleware, validation) => { };�               5��
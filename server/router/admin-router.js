const express= require("express")
const router =express.Router();
const adminController=require("../controllers/admin-controller");
const authMiddleware=require("../middlewares/auth-middleware");
const adminMiddleware=require("../middlewares/admin-middleware");



// Router for gettin all users
router.route("/users").get(authMiddleware,adminMiddleware,adminController.getAllUsers);

// route for get user by id
router.route("/users/:id").get(authMiddleware,adminMiddleware,adminController.getUserById)

// route for update user by id
router.route("/users/update/:id").patch(authMiddleware,adminMiddleware,adminController.updateUserById)

// route for delter user
router.route("/users/delete/:id").delete(authMiddleware,adminMiddleware,adminController.deleteUserById)

// Route for getting contact info
router.route("/contacts").get(authMiddleware,adminMiddleware,adminController.getAllContacts);

// route for delter contacts
router.route("/contacts/delete/:id").delete(authMiddleware,adminMiddleware,adminController.deleteContactById)



module.exports= router;

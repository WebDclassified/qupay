const zod = require("zod")
const { User } = require("../db")
const { JWT_SECRET } = require("../config")
const { authMiddleware } = require("../middleware")

const router = express.Router()

const signupBody = zod.object({
    username: zod.email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
})



router.post("/signup", async (req ,res) => {
    const { success } =signupBody.safeParse(req.body)
    if(!success){
        return res.status(411)
        .json({
            msg: "Email already taken/ incorrect inputs"
        })
    }
    
    const existingUser = await User.findOne({
        username: req.body.username
    })
    if(existingUser){
        return res.status(411)
        .json({
            msg: "Email already taken/ incorrect inputs"
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })
    const userId = user._id;

    const token = jwt.sign({
        userId
    },JWT_SECRET)

    res.json({
        msg: "User created successfully",
        token: token
    })
})

const signinBody = zod.object({
    username: zod.email(),
    password: zod.string()
})

router.post("/signin", async (req,res) => {
    const { success } = signinBody.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            msg: "Incorrect inputs"
        })
    }
    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if(user){
        const token = jwt.sign({
            userId: user._id
        },JWT_SECRET)
        res.json({
            token: token
        })
        return;
    }
    res.status(411).json({
        msg: "Error while logging in"
    })
})



const updateBody = zod.object({
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})

router.put("/", authMiddleware, async (req,res) => {
    const { success } = updateBody.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            msg: "Error while updating details"
        })
    } 
    await User.updateOne({_id.req.userId}, req.body)

    res.json({
        msg: "Updated successfully"
    })
})

router.get("/bulk", async (req, res) => {
    
})

module.exports = router
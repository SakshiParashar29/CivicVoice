import User from "../Models/userModel.js"
import ApiResponse from "../Utils/ApiResponse.js"
import ApiError from "../Utils/ApiError.js"
import { generateToken } from "../Utils/jwt.js"
import bcrypt from 'bcrypt';



export const SignIn = async (req, res) => {
    try {
       const {identification, password} = req.body;
       
       if(!identification || !password)
         return res.status(400).json(new ApiError(400, "Invalid credentials", null));

       const user = await User.findOne({
           $or:[
            {email: identification},
            {username: identification}
        ]
       })

       if(!user){
          return res.status(404).json(new ApiError(404, "User not found!!"), null)
       }

       const encoded = await bcrypt.compare(password, user.password);
       if(!encoded)
          return res.status(401).json(new ApiError(401, "Invalid Password", null));
        
        const token = generateToken({id: user._id, role: user.role, state: user.state });

       return res.status(200).json(new ApiResponse(200, true, "Login Successfully", {user, token}));
    } catch (error) {
        return res.status(500).json(new ApiError(500, error.message, null));
    }
}



export const SignUp = async (req, res) => {
    try {
        const { username, email, password, role, state } = req.body;

        if (!username || !email || !password || !role || !state) {
            return res.status(400).json(new ApiError(400, "Invalid credentials", null));
        }

    
        const userExist = await User.findOne({ email });
        if (userExist) {
            const { password: _, ...userWithoutPassword } = userExist._doc;
            return res.status(409).json(new ApiError(409, "User already exists", userWithoutPassword));
        }

     
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            email,
            password: hashedPassword,
            role,
            state
        });

      
        const token = generateToken({ id: user._id, role: user.role });

        const { password: __, ...userSafe } = user._doc;

        return res.status(201).json(new ApiResponse(201, true, "SignUp successfully", { user: userSafe, token }));
    } catch (error) {
        return res.status(500).json(new ApiError(500, error.message, null));
    }
};


export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json(new ApiError(404, "User not found", null));
    }

    return res
      .status(200)
      .json(new ApiResponse(200, true, "Profile fetched successfully", user));
  } catch (error) {
    return res.status(500).json(new ApiError(500, error.message, null));
  }
};
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

// Add this check at the top of the file
if (!process.env.JWT_SECRET) {
    console.error('JWT_SECRET is not defined in environment variables');
    process.exit(1); // Stop the server if JWT_SECRET is missing
}

const userController = {
    async register(req, res) {
        try {
            console.log('JWT_SECRET:', process.env.JWT_SECRET); // Debug log
            
            const { email, password, name, userType, companyDetails } = req.body;

            // Check if user already exists
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ error: 'Email already registered' });
            }

            // Hash password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create user
            const user = new User({
                email,
                password: hashedPassword,
                name,
                userType,
                companyDetails: userType === 'ENTERPRISE' ? companyDetails : null
            });

            await user.save();

            // Generate token
            const token = jwt.sign(
                { userId: user._id },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );

            res.status(201).json({ 
                message: 'User registered successfully',
                user: {
                    email: user.email,
                    name: user.name,
                    userType: user.userType,
                    _id: user._id
                },
                token 
            });
        } catch (error) {
            console.error('Registration error:', error); // Debug log
            res.status(500).json({ error: error.message });
        }
    },

    async login(req, res) {
        try {
            const { email, password } = req.body;

            // Find user
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            // Verify password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            // Generate token
            const token = jwt.sign(
                { userId: user._id },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );

            res.json({ 
                message: 'Login successful',
                user: {
                    email: user.email,
                    name: user.name,
                    userType: user.userType,
                    _id: user._id
                },
                token 
            });
        } catch (error) {
            console.error('Login error:', error); // Debug log
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = userController;

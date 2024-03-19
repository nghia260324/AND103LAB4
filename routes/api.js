var express = require('express');
var router = express.Router();
<<<<<<< HEAD
var fs = require('fs');

const Distributors = require('../models/distributors')
const Fruits = require('../models/fruits');
const Upload = require('../config/commom/upload');
=======

const Distributors = require('../models/distributors')
const Fruits = require('../models/fruits');
>>>>>>> 4cdbef4d20d91f77a88ed457d00d2e34a9c5eeea

module.exports = router;

router.post('/add-distributor',async(req,res) => {
    try {
        const data = req.body;
        const newDistributors = new Distributors({
            name: data.name,
        });
        const result = await newDistributors.save();
        if (result) {
            res.json({
                'status': 200,
                'messenger': 'Thêm thành công!',
                'data': result
            })
        } else {
            res.json({
                'status': 400,
                'messenger': 'Lỗi, thêm không thành công!',
                'data': []
            })
        }
    } catch (error) {
        console.log(error)
    }
})
router.post('/add-fruit',async(req,res) => {
    try {
        const data = req.body;
        const newDistributors = new Fruits({
            name: data.name,
            quantity: data.quantity,
            price: data.price,
            status: data.status,
            quantity: data.quantity,
            image: data.image,
            description: data.description,
            id_distributor: data.id_distributor,
        });
        const result = await newDistributors.save();
        if (result) {
            res.json({
                'status': 200,
                'messenger': 'Thêm thành công!',
                'data': result,
            })
        } else {
            res.json({
                'status': 400,
                'messenger': 'Lỗi, thêm không thành công!',
                'data': [],
            })
        }
    } catch (error) {
        console.log(error)
    }
})

router.get('/get-list-fruit',async(req,res)=>{
    try{
        const data = await Fruits.find().populate('id_distributor')
        res.json({
            'status':200,
            'messenger': 'Danh sách fruit',
            'data': data
        })
    } catch(err){
        console.log(err)
    }
})
router.get('/get-list-distributor',async(req,res)=> {
    try {
        const data = await Distributors.find();
        res.json({
            "status": 200,
            "messenger": "Danh sách distributor",
            "data": data,
        })
        console.log(data)
    } catch (err) {
        console.log(err);
    }
})

router.get('/get-list-fruit',async(req,res)=> {
    try {
        const data = await Fruits.find().populate('id_distributor');
        res.json({
            "status": 200,
            "messenger": "Danh sách fruit",
            "data": data
        })
    } catch (err){
        console.log(err);

    }
})

router.put('/update-fruit-by-id/:id',async(req,res)=> {
    try {
        const {id} = req.params;
<<<<<<< HEAD
        const data = req.body;
        const updatefruit = await Fruits.findById(id);
        let result = null;
        if (updatefruit) {
            updatefruit.name = data.name ?? updatefruit.name,
=======
        const data = req.params;
        const updatefruit = await Fruits.findById(id);
        console.log(updatefruit)
        let result = null;
        if (updatefruit) {
            updatefruit.name = data.name ?? updatefruit.name;
>>>>>>> 4cdbef4d20d91f77a88ed457d00d2e34a9c5eeea
            updatefruit.quantity = data.quantity ?? updatefruit.quantity,
            updatefruit.price = data.price ?? updatefruit.price,
            updatefruit.status = data.status ?? updatefruit.status,
            updatefruit.image = data.image ?? updatefruit.image,
            updatefruit.description = data.description ?? updatefruit.description,
            updatefruit.id_distributor = data.id_distributor ?? updatefruit.id_distributor
            result = await updatefruit.save();
        }

        if (result) {
            res.json({
                "status": 200,
                "messenger": "Cập nhật thành công!",
                "data": result
            })
        } else {
            res.json({
                "status": 400,
                "messenger": "Lỗi ,Cập nhật không thành công!",
                "data": []
            })
        }
    } catch (err) {
        console.log(err);
    }
<<<<<<< HEAD
})
router.put('/update-fruit/:id', Upload.array('image', 5), async (req, res) => {
    try {
        const fruitId = req.params.id;
        const data = req.body;
        const { files } = req;

        const oldProduct = await Fruits.findById(fruitId);

        let updateFields = {
            name: data.name,
            quantity: data.quantity,
            price: data.price,
            status: data.status,
            description: data.description,
            id_distributor: data.id_distributor
        };

        if (files.length > 0) {
            const urlImages = files.map((file) => `${req.protocol}://${req.get("host")}/uploads/${file.filename}`);
            
            // Xóa ảnh cũ

            // if (oldProduct && oldProduct.image) {
            //     oldProduct.image.forEach((imagePath) => {
            //         const oldImagePath = path.join(__dirname, '../public/uploads/', path.basename(imagePath));
            //         fs.unlinkSync(oldImagePath);
            //     });
            // }

            updateFields.image = urlImages;
        }

        const updatedProduct = await Fruits.findByIdAndUpdate(fruitId, updateFields, { new: true });

        if (updatedProduct) {
            res.json({
                "status": 200,
                "messenger": "Cập nhật thành công!",
                "data": updatedProduct
            });
        } else {
            res.json({
                "status": 400,
                "messenger": "Lỗi, cập nhật không thành công!",
                "data": updatedProduct
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ "status": 500, "messenger": "Lỗi, có lỗi xảy ra khi cập nhật sản phẩm!" });
    }
});
router.delete('/destroy-fruit-by-id/:id',async(req,res)=> {
    try {
        const {id} = req.params;
        const result = await Fruits.findByIdAndDelete(id);
        if (result) {
            res.json({
                "status": 200,
                "messenger": "Xóa thành công!",
                "data": result,
            })
        } else {
            res.json({
                "status": 200,
                "messenger": "Lỗi, Xóa không thành công!",
                "data": [],
            })
        }
    } catch (err) {
        console.log(err);
    }
})

router.post('/add-fruit-with-file-image',Upload.array('image',5),async (req,res)=>{
    try {
        const data = req.body;
        const {files} = req;
        const urlImage = files.map((file)=>`${req.protocol}://${req.get("host")}/uploads/${file.filename}`)
        const newfruit = new Fruits({
            name: data.name,
            quantity: data.quantity,
            price: data.price,
            status: data.status,
            image: urlImage,
            description: data.description,
            id_distributor: data.id_distributor
        });
        const result = await newfruit.save();
        if (result) {
            res.json({
                "status": 200,
                "messenger": "Thêm thành công!",
                "data": result
            })
        } else {
            res.json({
                "status": 400,
                "messenger": "Lỗi,Thêm không thành công!",
                "data": result
            })
        }
    } catch(err) {
        console.log(err);
    }
})

// const Users = require('../models/users');
// const Transporter = require('../config/commom/mail');
// router.post
=======
})
>>>>>>> 4cdbef4d20d91f77a88ed457d00d2e34a9c5eeea
